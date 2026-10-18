'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function OceanBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);

  useEffect(() => {
    if (!containerRef.current) return undefined;

    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    camera.position.set(0, 8, 20);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    const planeSize = 80;
    const segments = 128;
    const geometry = new THREE.PlaneGeometry(planeSize, planeSize, segments, segments);
    geometry.rotateX(-Math.PI / 2);

    const material = new THREE.ShaderMaterial({
      transparent: true,
      uniforms: {
        uTime: { value: 0 },
        uColorDeep: { value: new THREE.Color(0x0a2a3a) },
        uColorShallow: { value: new THREE.Color(0x1a6a7a) },
        uColorFoam: { value: new THREE.Color(0x8ec8d8) },
        uOpacity: { value: 0.85 },
      },
      vertexShader: `
        uniform float uTime;
        varying float vElevation;
        varying vec2 vUv;
        varying vec3 vNormal;
        varying vec3 vPosition;

        void main() {
          vUv = uv;
          vec3 pos = position;

          float wave1 = sin(pos.x * 0.3 + uTime * 0.8) * 0.6;
          float wave2 = sin(pos.z * 0.2 + uTime * 0.6) * 0.8;
          float wave3 = sin((pos.x + pos.z) * 0.15 + uTime * 1.0) * 0.4;
          float wave4 = sin(pos.x * 0.8 + pos.z * 0.5 + uTime * 1.2) * 0.2;

          pos.y += wave1 + wave2 + wave3 + wave4;
          vElevation = pos.y;

          float eps = 0.1;
          vec3 tangentX = vec3(eps,
            (sin((pos.x + eps) * 0.3 + uTime * 0.8) * 0.6 + sin(pos.z * 0.2 + uTime * 0.6) * 0.8) - (wave1 + wave2),
            0.0);
          vec3 tangentZ = vec3(0.0,
            (sin(pos.x * 0.3 + uTime * 0.8) * 0.6 + sin((pos.z + eps) * 0.2 + uTime * 0.6) * 0.8) - (wave1 + wave2),
            eps);
          vNormal = normalize(cross(tangentZ, tangentX));
          vPosition = pos;

          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        }
      `,
      fragmentShader: `
        uniform float uTime;
        uniform vec3 uColorDeep;
        uniform vec3 uColorShallow;
        uniform vec3 uColorFoam;
        uniform float uOpacity;
        varying float vElevation;
        varying vec2 vUv;
        varying vec3 vNormal;
        varying vec3 vPosition;

        void main() {
          float elevation = smoothstep(-1.5, 1.5, vElevation);
          vec3 color = mix(uColorDeep, uColorShallow, elevation);

          vec3 lightDir = normalize(vec3(0.5, 1.0, 0.3));
          float diffuse = max(dot(vNormal, lightDir), 0.0);
          color += diffuse * 0.15;

          vec3 viewDir = normalize(cameraPosition - vPosition);
          vec3 halfDir = normalize(lightDir + viewDir);
          float spec = pow(max(dot(vNormal, halfDir), 0.0), 64.0);
          color += spec * 0.5 * uColorFoam;

          float foam = smoothstep(0.8, 1.4, vElevation);
          color = mix(color, uColorFoam, foam * 0.4);

          float edge = smoothstep(0.4, 0.5, abs(vUv.x - 0.5)) + smoothstep(0.4, 0.5, abs(vUv.y - 0.5));
          float alpha = uOpacity * (1.0 - edge * 0.5);

          gl_FragColor = vec4(color, alpha);
        }
      `,
    });

    const ocean = new THREE.Mesh(geometry, material);
    scene.add(ocean);

    const particlesCount = 200;
    const particlesGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 60;
      positions[i * 3 + 1] = Math.random() * 15 + 2;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 60;
    }
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.08,
      color: 0xffffff,
      transparent: true,
      opacity: 0.6,
    });
    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    const clock = new THREE.Clock();
    let animationId: number;

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();
      material.uniforms.uTime.value = elapsed;

      camera.position.x = Math.sin(elapsed * 0.05) * 3;
      camera.position.y = 8 + Math.sin(elapsed * 0.1) * 0.5;
      camera.lookAt(0, 0, 0);

      particles.rotation.y = elapsed * 0.02;

      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      rendererRef.current = null;
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0"
      style={{ zIndex: 0 }}
    />
  );
}
