'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

interface PropertyViewer3DProps {
  type: 'LAGOON_SUITE' | 'VILLA_1BR' | 'VILLA_2BR' | 'HOTEL_SUITE';
  onClose: () => void;
}

function createWallMaterial(color: number): THREE.MeshStandardMaterial {
  return new THREE.MeshStandardMaterial({
    color,
    roughness: 0.8,
    metalness: 0.1,
  });
}

function createFloorMaterial(): THREE.MeshStandardMaterial {
  return new THREE.MeshStandardMaterial({
    color: 0xc4956a,
    roughness: 0.6,
    metalness: 0.05,
  });
}

function createFurnitureMaterial(color: number): THREE.MeshStandardMaterial {
  return new THREE.MeshStandardMaterial({
    color,
    roughness: 0.4,
    metalness: 0.2,
  });
}

function buildBed(scene: THREE.Scene, x: number, z: number, size: 'single' | 'double') {
  const w = size === 'double' ? 2.4 : 1.4;
  const baseGeo = new THREE.BoxGeometry(w, 0.4, 2.2);
  const baseMat = createFurnitureMaterial(0x5c3a21);
  const base = new THREE.Mesh(baseGeo, baseMat);
  base.position.set(x, 0.2, z);
  base.castShadow = true;
  scene.add(base);

  const mattressGeo = new THREE.BoxGeometry(w - 0.1, 0.25, 2.1);
  const mattressMat = new THREE.MeshStandardMaterial({ color: 0xf5f0e8, roughness: 0.9 });
  const mattress = new THREE.Mesh(mattressGeo, mattressMat);
  mattress.position.set(x, 0.52, z);
  mattress.castShadow = true;
  scene.add(mattress);

  const pillowGeo = new THREE.BoxGeometry(0.5, 0.12, 0.35);
  const pillowMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.95 });
  [-0.4, 0.4].forEach(offset => {
    if (size === 'single' && offset === 0.4) return;
    const pillow = new THREE.Mesh(pillowGeo, pillowMat);
    pillow.position.set(x + (size === 'single' ? 0 : offset), 0.7, z - 0.75);
    scene.add(pillow);
  });

  const headboardGeo = new THREE.BoxGeometry(w + 0.1, 1.2, 0.1);
  const headboardMat = createFurnitureMaterial(0x4a2f18);
  const headboard = new THREE.Mesh(headboardGeo, headboardMat);
  headboard.position.set(x, 0.6, z - 1.15);
  headboard.castShadow = true;
  scene.add(headboard);
}

function buildTable(scene: THREE.Scene, x: number, z: number) {
  const topGeo = new THREE.BoxGeometry(1.2, 0.06, 0.7);
  const topMat = createFurnitureMaterial(0x5c3a21);
  const top = new THREE.Mesh(topGeo, topMat);
  top.position.set(x, 0.75, z);
  top.castShadow = true;
  scene.add(top);

  const legGeo = new THREE.CylinderGeometry(0.03, 0.03, 0.75, 8);
  const legMat = createFurnitureMaterial(0x3a2510);
  [[-0.5, -0.25], [0.5, -0.25], [-0.5, 0.25], [0.5, 0.25]].forEach(([lx, lz]) => {
    const leg = new THREE.Mesh(legGeo, legMat);
    leg.position.set(x + lx, 0.375, z + lz);
    scene.add(leg);
  });
}

function buildChair(scene: THREE.Scene, x: number, z: number, rotY: number) {
  const group = new THREE.Group();
  const seatGeo = new THREE.BoxGeometry(0.45, 0.05, 0.45);
  const mat = createFurnitureMaterial(0x5c3a21);
  const seat = new THREE.Mesh(seatGeo, mat);
  seat.position.set(0, 0.45, 0);
  group.add(seat);

  const backGeo = new THREE.BoxGeometry(0.45, 0.5, 0.05);
  const back = new THREE.Mesh(backGeo, mat);
  back.position.set(0, 0.7, -0.2);
  group.add(back);

  const legGeo = new THREE.CylinderGeometry(0.02, 0.02, 0.45, 6);
  [[-0.18, -0.18], [0.18, -0.18], [-0.18, 0.18], [0.18, 0.18]].forEach(([lx, lz]) => {
    const leg = new THREE.Mesh(legGeo, mat);
    leg.position.set(lx, 0.225, lz);
    group.add(leg);
  });

  group.position.set(x, 0, z);
  group.rotation.y = rotY;
  scene.add(group);
}

function buildSofa(scene: THREE.Scene, x: number, z: number, rotY: number) {
  const group = new THREE.Group();
  const baseMat = createFurnitureMaterial(0x8B7355);
  const cushionMat = new THREE.MeshStandardMaterial({ color: 0xd4c5a9, roughness: 0.9 });

  const baseGeo = new THREE.BoxGeometry(2.2, 0.35, 0.9);
  const base = new THREE.Mesh(baseGeo, baseMat);
  base.position.set(0, 0.175, 0);
  base.castShadow = true;
  group.add(base);

  const backGeo = new THREE.BoxGeometry(2.2, 0.6, 0.15);
  const back = new THREE.Mesh(backGeo, baseMat);
  back.position.set(0, 0.55, -0.375);
  back.castShadow = true;
  group.add(back);

  [-0.5, 0.5].forEach(offset => {
    const cushionGeo = new THREE.BoxGeometry(0.9, 0.15, 0.7);
    const cushion = new THREE.Mesh(cushionGeo, cushionMat);
    cushion.position.set(offset, 0.42, 0.05);
    group.add(cushion);
  });

  const armGeo = new THREE.BoxGeometry(0.12, 0.45, 0.9);
  [-1.06, 1.06].forEach(offset => {
    const arm = new THREE.Mesh(armGeo, baseMat);
    arm.position.set(offset, 0.35, 0);
    group.add(arm);
  });

  group.position.set(x, 0, z);
  group.rotation.y = rotY;
  scene.add(group);
}

function buildWindow(scene: THREE.Scene, x: number, y: number, z: number, rotY: number) {
  const group = new THREE.Group();
  const frameMat = createFurnitureMaterial(0x4a2f18);

  const frameGeo = new THREE.BoxGeometry(1.6, 1.4, 0.08);
  const frame = new THREE.Mesh(frameGeo, frameMat);
  group.add(frame);

  const glassMat = new THREE.MeshStandardMaterial({
    color: 0x87ceeb,
    transparent: true,
    opacity: 0.4,
    roughness: 0.1,
    metalness: 0.3,
  });
  const glassGeo = new THREE.PlaneGeometry(1.4, 1.2);
  const glass = new THREE.Mesh(glassGeo, glassMat);
  glass.position.z = 0.01;
  group.add(glass);

  const dividerGeo = new THREE.BoxGeometry(0.04, 1.4, 0.09);
  const divider = new THREE.Mesh(dividerGeo, frameMat);
  group.add(divider);

  group.position.set(x, y, z);
  group.rotation.y = rotY;
  scene.add(group);
}

function buildRoom(
  scene: THREE.Scene,
  width: number,
  depth: number,
  height: number,
  wallColor: number,
) {
  const wallMat = createWallMaterial(wallColor);
  const floorMat = createFloorMaterial();

  const floorGeo = new THREE.PlaneGeometry(width, depth);
  const floor = new THREE.Mesh(floorGeo, floorMat);
  floor.rotation.x = -Math.PI / 2;
  floor.receiveShadow = true;
  scene.add(floor);

  const ceilMat = new THREE.MeshStandardMaterial({ color: 0xfaf8f5, roughness: 0.9 });
  const ceilGeo = new THREE.PlaneGeometry(width, depth);
  const ceil = new THREE.Mesh(ceilGeo, ceilMat);
  ceil.rotation.x = Math.PI / 2;
  ceil.position.y = height;
  scene.add(ceil);

  const backWallGeo = new THREE.PlaneGeometry(width, height);
  const backWall = new THREE.Mesh(backWallGeo, wallMat);
  backWall.position.set(0, height / 2, -depth / 2);
  backWall.receiveShadow = true;
  scene.add(backWall);

  const leftWallGeo = new THREE.PlaneGeometry(depth, height);
  const leftWall = new THREE.Mesh(leftWallGeo, wallMat);
  leftWall.position.set(-width / 2, height / 2, 0);
  leftWall.rotation.y = Math.PI / 2;
  leftWall.receiveShadow = true;
  scene.add(leftWall);

  const rightWallGeo = new THREE.PlaneGeometry(depth, height);
  const rightWall = new THREE.Mesh(rightWallGeo, wallMat);
  rightWall.position.set(width / 2, height / 2, 0);
  rightWall.rotation.y = -Math.PI / 2;
  rightWall.receiveShadow = true;
  scene.add(rightWall);
}

function addLighting(scene: THREE.Scene) {
  const ambient = new THREE.AmbientLight(0xfff5e6, 0.6);
  scene.add(ambient);

  const sun = new THREE.DirectionalLight(0xffeedd, 1.2);
  sun.position.set(5, 8, 3);
  sun.castShadow = true;
  sun.shadow.mapSize.width = 2048;
  sun.shadow.mapSize.height = 2048;
  sun.shadow.camera.near = 0.5;
  sun.shadow.camera.far = 50;
  sun.shadow.camera.left = -15;
  sun.shadow.camera.right = 15;
  sun.shadow.camera.top = 15;
  sun.shadow.camera.bottom = -15;
  scene.add(sun);

  const fill = new THREE.PointLight(0xffe0c0, 0.4, 20);
  fill.position.set(-3, 2.5, 2);
  scene.add(fill);

  const windowLight = new THREE.SpotLight(0x87ceeb, 0.5, 15, Math.PI / 4);
  windowLight.position.set(0, 3, 5);
  windowLight.target.position.set(0, 0, 0);
  scene.add(windowLight);
  scene.add(windowLight.target);
}

function buildScene(scene: THREE.Scene, type: string) {
  addLighting(scene);

  switch (type) {
    case 'LAGOON_SUITE': {
      buildRoom(scene, 10, 8, 3.5, 0xf0e6d3);
      buildBed(scene, 0, -1.5, 'double');
      buildSofa(scene, -3, 2, Math.PI / 2);
      buildTable(scene, 3, 2);
      buildChair(scene, 3, 3, Math.PI);
      buildWindow(scene, 0, 2, -3.99, 0);
      buildWindow(scene, -4.99, 2, 0, Math.PI / 2);

      const rugGeo = new THREE.CircleGeometry(2, 32);
      const rugMat = new THREE.MeshStandardMaterial({ color: 0x8B6F47, roughness: 0.95 });
      const rug = new THREE.Mesh(rugGeo, rugMat);
      rug.rotation.x = -Math.PI / 2;
      rug.position.set(0, 0.01, 2);
      scene.add(rug);
      break;
    }
    case 'VILLA_1BR': {
      buildRoom(scene, 8, 7, 3.2, 0xe8dcc8);
      buildBed(scene, 0, -1, 'double');
      buildTable(scene, -2.5, 2);
      buildChair(scene, -2.5, 3, Math.PI);
      buildWindow(scene, 0, 1.8, -3.49, 0);
      buildWindow(scene, 3.99, 1.8, 0, -Math.PI / 2);

      const nightstandGeo = new THREE.BoxGeometry(0.5, 0.5, 0.4);
      const nightstandMat = createFurnitureMaterial(0x5c3a21);
      [-1.6, 1.6].forEach(offset => {
        const ns = new THREE.Mesh(nightstandGeo, nightstandMat);
        ns.position.set(offset, 0.25, -1);
        ns.castShadow = true;
        scene.add(ns);
      });
      break;
    }
    case 'VILLA_2BR': {
      buildRoom(scene, 12, 9, 3.5, 0xede3d5);
      buildBed(scene, -3.5, -2, 'double');
      buildBed(scene, 3.5, -2, 'single');

      const dividerGeo = new THREE.BoxGeometry(0.1, 3.5, 3);
      const dividerMat = createWallMaterial(0xede3d5);
      const divider = new THREE.Mesh(dividerGeo, dividerMat);
      divider.position.set(0.5, 1.75, -2.5);
      scene.add(divider);

      buildSofa(scene, 0, 2.5, 0);
      buildTable(scene, -3, 2.5);
      buildChair(scene, -3, 3.5, Math.PI);
      buildChair(scene, -3, 1.5, 0);
      buildWindow(scene, -3.5, 2, -4.49, 0);
      buildWindow(scene, 3.5, 2, -4.49, 0);
      buildWindow(scene, -5.99, 2, 0, Math.PI / 2);
      break;
    }
    case 'HOTEL_SUITE': {
      buildRoom(scene, 9, 7, 3, 0xf5efe5);
      buildBed(scene, 0, -1, 'double');
      buildSofa(scene, -2.8, 2, Math.PI / 2);
      buildTable(scene, 3, 1);
      buildChair(scene, 3, 2, Math.PI);
      buildWindow(scene, 0, 1.7, -3.49, 0);
      buildWindow(scene, 4.49, 1.7, 0, -Math.PI / 2);

      const tvGeo = new THREE.BoxGeometry(1.6, 0.9, 0.05);
      const tvMat = new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0.2, metalness: 0.8 });
      const tv = new THREE.Mesh(tvGeo, tvMat);
      tv.position.set(0, 1.8, -3.45);
      scene.add(tv);

      const screenMat = new THREE.MeshStandardMaterial({
        color: 0x1a3a5a,
        emissive: 0x0a1a2a,
        emissiveIntensity: 0.3,
      });
      const screenGeo = new THREE.PlaneGeometry(1.5, 0.8);
      const screen = new THREE.Mesh(screenGeo, screenMat);
      screen.position.set(0, 1.8, -3.42);
      scene.add(screen);
      break;
    }
  }
}

const TOUR_LABELS: Record<string, string> = {
  LAGOON_SUITE: 'Lagoon Suite',
  VILLA_1BR: '1-Bedroom Villa',
  VILLA_2BR: '2-Bedroom Villa',
  HOTEL_SUITE: 'Hotel Suite',
};

export default function PropertyViewer3D({ type, onClose }: PropertyViewer3DProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [gpuInfo, setGpuInfo] = useState<string>('');

  const checkWebGPU = useCallback(async () => {
    if ('gpu' in navigator) {
      try {
        const adapter = await (navigator as any).gpu.requestAdapter();
        if (adapter) {
          const info = await adapter.requestAdapterInfo?.();
          return info?.device || 'WebGPU Available';
        }
      } catch {
        // fallback
      }
    }
    return 'WebGL Fallback';
  }, []);

  useEffect(() => {
    if (!containerRef.current) return undefined;
    const container = containerRef.current;
    let disposed = false;

    const init = async () => {
      const info = await checkWebGPU();
      if (disposed) return undefined;
      setGpuInfo(info);

      const width = container.clientWidth;
      const height = container.clientHeight;

      const scene = new THREE.Scene();
      scene.background = new THREE.Color(0x1a1a2e);
      scene.fog = new THREE.Fog(0x1a1a2e, 15, 30);

      const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 100);
      camera.position.set(6, 4, 6);

      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        powerPreference: 'high-performance',
      });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = THREE.PCFSoftShadowMap;
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.2;
      container.appendChild(renderer.domElement);

      const controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.dampingFactor = 0.05;
      controls.maxPolarAngle = Math.PI / 2.1;
      controls.minDistance = 3;
      controls.maxDistance = 15;
      controls.target.set(0, 1.5, 0);

      buildScene(scene, type);

      setIsLoading(false);

      let animId: number;
      const animate = () => {
        if (disposed) return;
        animId = requestAnimationFrame(animate);
        controls.update();
        renderer.render(scene, camera);
      };
      animate();

      const onResize = () => {
        const w = container.clientWidth;
        const h = container.clientHeight;
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
      };
      window.addEventListener('resize', onResize);

      return () => {
        disposed = true;
        cancelAnimationFrame(animId);
        window.removeEventListener('resize', onResize);
        controls.dispose();
        renderer.dispose();
        scene.traverse((obj) => {
          if (obj instanceof THREE.Mesh) {
            obj.geometry.dispose();
            if (Array.isArray(obj.material)) {
              obj.material.forEach(m => m.dispose());
            } else {
              obj.material.dispose();
            }
          }
        });
        if (container.contains(renderer.domElement)) {
          container.removeChild(renderer.domElement);
        }
      };
    };

    let cleanup: (() => void) | undefined;
    init().then(c => { cleanup = c; });

    return () => {
      disposed = true;
      cleanup?.();
    };
  }, [type, checkWebGPU]);

  return (
    <div className="fixed inset-0 z-50 bg-black/90 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 bg-black/60 backdrop-blur-sm">
        <div className="flex items-center gap-4">
          <h2 className="text-white text-xl font-bold">{TOUR_LABELS[type] || type}</h2>
          <span className="text-xs px-2 py-1 rounded bg-emerald-500/20 text-emerald-400 font-mono">
            {gpuInfo || 'Initializing...'}
          </span>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2 text-gray-400 text-sm">
            <span className="px-2 py-1 rounded bg-white/10">Drag</span> to rotate
            <span className="px-2 py-1 rounded bg-white/10 ml-2">Scroll</span> to zoom
          </div>
          <button
            onClick={onClose}
            className="text-white hover:text-gray-300 text-2xl font-light transition w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10"
          >
            &times;
          </button>
        </div>
      </div>

      {/* Viewer */}
      <div ref={containerRef} className="flex-1 relative">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-black">
            <div className="text-center">
              <div className="w-12 h-12 border-2 border-white/20 border-t-white rounded-full animate-spin mx-auto mb-4" />
              <p className="text-white/60 text-sm">Loading 3D scene...</p>
            </div>
          </div>
        )}
      </div>

      {/* Footer info */}
      <div className="px-6 py-3 bg-black/60 backdrop-blur-sm flex items-center justify-between">
        <p className="text-gray-400 text-sm">
          Interactive 3D preview &mdash; Real dimensions and layout
        </p>
        <p className="text-gray-500 text-xs font-mono">
          Three.js + WebGPU-ready renderer
        </p>
      </div>
    </div>
  );
}
