'use client';

import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import { FaMapMarkerAlt, FaVideo, FaArrowRight, FaCube, FaExpand } from 'react-icons/fa';

const PropertyViewer3D = dynamic(() => import('@/components/PropertyViewer3D'), {
  ssr: false,
});

interface VirtualTour {
  id: string;
  name: string;
  description: string;
  image: string;
  tourLink: string;
  type: 'LAGOON_SUITE' | 'VILLA_1BR' | 'VILLA_2BR' | 'HOTEL_SUITE';
}

const tours: VirtualTour[] = [
  {
    id: '1',
    name: 'Lagoon Suite',
    description: 'Experience the ultimate waterfront luxury with our exclusive Lagoon Suite featuring panoramic ocean views and direct beach access.',
    image: 'https://images.unsplash.com/photo-1570129477492-45ac003e2bb2?w=800&h=600&fit=crop',
    tourLink: 'https://webobook.com/public/67c57bba959d141ea2002d92,en',
    type: 'LAGOON_SUITE',
  },
  {
    id: '2',
    name: '1-Bedroom Villa',
    description: 'Discover intimate luxury in our thoughtfully designed 1-bedroom villa, perfect for couples or solo travelers seeking privacy and elegance.',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop',
    tourLink: 'https://webobook.com/public/67c6c1a396ded306dc2885e2,en',
    type: 'VILLA_1BR',
  },
  {
    id: '3',
    name: '2-Bedroom Villa',
    description: 'Perfect for families or groups, our 2-bedroom villa offers spacious living with premium finishes and stunning views.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop',
    tourLink: 'https://webobook.com/public/67d99dd044ab48474f0a5c92,en',
    type: 'VILLA_2BR',
  },
  {
    id: '4',
    name: 'Hotel Suite',
    description: 'Enjoy luxury hospitality in our exclusive hotel suite, combining comfort with sophistication for an unforgettable stay.',
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=600&fit=crop',
    tourLink: 'https://webobook.com/public/6877b9e92d08e27542185252,en',
    type: 'HOTEL_SUITE',
  },
];

export default function VirtualToursPage() {
  const [viewer3DType, setViewer3DType] = useState<VirtualTour['type'] | null>(null);
  const [selectedTour, setSelectedTour] = useState<VirtualTour | null>(null);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen bg-gradient-to-b from-gray-900 to-gray-800 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <Image
            src="https://images.unsplash.com/photo-1552928693-2bada481db4a?w=1200&h=800&fit=crop"
            alt="Virtual Tour Hero"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm mb-6">
            <FaCube className="text-emerald-400" />
            <span>Powered by WebGPU &amp; Three.js</span>
          </div>
          <h1 className="text-6xl md:text-7xl font-bold mb-6 tracking-tight">
            EXPLORE IN 3D
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Walk through our luxury properties with interactive 3D models and immersive 360&deg; tours
          </p>
          <button
            className="inline-flex items-center gap-3 bg-white text-gray-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition"
          >
            <FaMapMarkerAlt /> View Project Location
          </button>
        </div>
      </section>

      {/* 3D Viewer Banner */}
      <section className="py-16 px-4 md:px-8 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-400 px-4 py-2 rounded-full text-sm font-mono mb-6">
            <FaCube /> WebGPU 3D Viewer
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Interactive 3D Property Preview
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10">
            Explore realistic 3D models of each unit type. Rotate, zoom, and walk through the spaces before visiting in person.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {tours.map((tour) => (
              <button
                key={tour.id}
                onClick={() => setViewer3DType(tour.type)}
                className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-emerald-500/50 rounded-lg p-4 transition text-left"
              >
                <FaCube className="text-emerald-400 text-xl mb-2" />
                <p className="text-white font-bold text-sm">{tour.name}</p>
                <p className="text-gray-500 text-xs mt-1 flex items-center gap-1">
                  <FaExpand /> Open 3D View
                </p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tours Grid */}
      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            UNIT TYPES
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl">
            Select a unit type below to explore detailed 360&deg; virtual tours or launch the interactive 3D viewer
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {tours.map((tour) => (
            <div key={tour.id} className="group">
              <div className="relative overflow-hidden mb-6 h-96 rounded-lg">
                <Image
                  src={tour.image}
                  alt={tour.name}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 flex gap-3">
                  <button
                    onClick={() => setViewer3DType(tour.type)}
                    className="flex items-center gap-2 bg-emerald-500 text-white px-5 py-3 rounded-lg font-bold text-sm hover:bg-emerald-600 transition shadow-lg"
                  >
                    <FaCube /> 3D View
                  </button>
                  <button
                    onClick={() => setSelectedTour(tour)}
                    className="flex items-center gap-2 bg-white text-gray-900 px-5 py-3 rounded-lg font-bold text-sm hover:bg-gray-100 transition shadow-lg"
                  >
                    <FaVideo /> 360&deg; Tour
                  </button>
                </div>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-3">{tour.name}</h3>
              <p className="text-gray-600 mb-6 text-lg">{tour.description}</p>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setViewer3DType(tour.type)}
                  className="inline-flex items-center gap-2 font-bold text-lg text-emerald-600 hover:gap-3 transition"
                >
                  <FaCube /> Explore in 3D <FaArrowRight />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3D Viewer Modal */}
      {viewer3DType && (
        <PropertyViewer3D
          type={viewer3DType}
          onClose={() => setViewer3DType(null)}
        />
      )}

      {/* 360 Tour Modal */}
      {selectedTour && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedTour(null)}
        >
          <div
            className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-8">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-4xl font-bold text-gray-900">{selectedTour.name}</h3>
                <button
                  onClick={() => setSelectedTour(null)}
                  className="text-gray-400 hover:text-gray-600 text-2xl"
                >
                  &times;
                </button>
              </div>

              <p className="text-gray-600 text-lg mb-8">{selectedTour.description}</p>

              <div className="bg-gray-100 rounded-lg p-8 mb-8">
                <div className="flex items-center gap-4 mb-6">
                  <FaVideo className="text-gray-900 text-2xl" />
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">360&deg; Virtual Tour</h4>
                    <p className="text-gray-600">Powered by WebOOK</p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={selectedTour.tourLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-gray-900 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-800 transition"
                  >
                    <FaArrowRight /> Open Full 360&deg; Tour
                  </a>
                  <button
                    onClick={() => {
                      setSelectedTour(null);
                      setViewer3DType(selectedTour.type);
                    }}
                    className="inline-flex items-center gap-3 bg-emerald-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-emerald-600 transition"
                  >
                    <FaCube /> Open 3D Viewer
                  </button>
                </div>
              </div>

              <div className="border-t pt-8">
                <h4 className="font-bold text-gray-900 mb-4">About This Unit</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-600">
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-emerald-500">&#10003;</span>
                    <span>Interactive 3D Model</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-emerald-500">&#10003;</span>
                    <span>360&deg; Interactive Views</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-emerald-500">&#10003;</span>
                    <span>Realistic Lighting &amp; Materials</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-emerald-500">&#10003;</span>
                    <span>Mobile Friendly</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Location Section */}
      <section className="py-24 px-4 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-12">
            PROJECT LOCATION
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xl text-gray-600 mb-6">
                Nestled in the heart of Zanzibar&apos;s most coveted region, our project combines pristine natural beauty with modern luxury development. The location offers convenient access to local attractions, restaurants, and amenities while maintaining privacy and tranquility.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4">
                  <FaMapMarkerAlt className="text-2xl text-gray-700" />
                  <span className="text-gray-700">Prime location in central Zanzibar</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-2xl">&#127958;</span>
                  <span className="text-gray-700">Walking distance to pristine beaches</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-2xl">&#127919;</span>
                  <span className="text-gray-700">Close to major attractions and amenities</span>
                </div>
              </div>
              <a
                href="https://maps.app.goo.gl/x27sBP9o8EURUhEJ8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gray-900 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-800 transition"
              >
                <FaMapMarkerAlt /> Open on Google Maps
              </a>
            </div>

            <div className="rounded-lg overflow-hidden shadow-2xl h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.275678139887!2d39.19766!3d-6.16263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185e34e6d7d5d5d5%3A0x1234567890abcdef!2sZanzibar!5e0!3m2!1sen!2stz!4v1609459200"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 md:px-8 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            READY TO INVEST?
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            Schedule a consultation with our team to discuss your ideal property investment in Zanzibar
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 bg-white text-gray-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition"
            >
              Contact Us
            </Link>
            <Link
              href="/properties"
              className="inline-flex items-center justify-center gap-3 border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition"
            >
              View All Properties
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
