'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FaMapMarkerAlt, FaVideo, FaArrowRight } from 'react-icons/fa';

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
          <h1 className="text-6xl md:text-7xl font-bold mb-6 tracking-tight">
            EXPLORE IN 360°
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Immerse yourself in every corner of our luxury properties with interactive virtual tours
          </p>
          <button
            className="inline-flex items-center gap-3 bg-white text-gray-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition"
          >
            <FaMapMarkerAlt /> View Project Location
          </button>
        </div>
      </section>

      {/* Tours Grid */}
      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            UNIT TYPES
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl">
            Select a unit type below to explore detailed 360° virtual tours of each property variant
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {tours.map((tour) => (
            <div
              key={tour.id}
              className="group cursor-pointer"
              onClick={() => setSelectedTour(tour)}
            >
              <div className="relative overflow-hidden mb-6 h-96">
                <Image
                  src={tour.image}
                  alt={tour.name}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                  <div className="bg-white rounded-full p-6">
                    <FaVideo className="text-gray-900 text-3xl" />
                  </div>
                </div>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-3">{tour.name}</h3>
              <p className="text-gray-600 mb-6 text-lg">{tour.description}</p>
              <button className="inline-flex items-center gap-2 font-bold text-lg hover:gap-4 transition">
                Start Virtual Tour <FaArrowRight />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Selected Tour Modal */}
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
                  ✕
                </button>
              </div>

              <p className="text-gray-600 text-lg mb-8">{selectedTour.description}</p>

              <div className="bg-gray-100 rounded-lg p-8 mb-8">
                <div className="flex items-center gap-4 mb-6">
                  <FaVideo className="text-gray-900 text-2xl" />
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">360° Virtual Tour</h4>
                    <p className="text-gray-600">Powered by WebOOK</p>
                  </div>
                </div>
                <a
                  href={selectedTour.tourLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-gray-900 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-800 transition"
                >
                  <FaArrowRight /> Open Full 360° Tour
                </a>
              </div>

              <div className="border-t pt-8">
                <h4 className="font-bold text-gray-900 mb-4">About This Unit</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-600">
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-gray-900">✓</span>
                    <span>360° Interactive Views</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-gray-900">✓</span>
                    <span>High-Resolution Imagery</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-gray-900">✓</span>
                    <span>Zoom & Explore Details</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-gray-900">✓</span>
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
                Nestled in the heart of Zanzibar's most coveted region, our project combines pristine natural beauty with modern luxury development. The location offers convenient access to local attractions, restaurants, and amenities while maintaining privacy and tranquility.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4">
                  <span className="text-2xl">📍</span>
                  <span className="text-gray-700">Prime location in central Zanzibar</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-2xl">🏖️</span>
                  <span className="text-gray-700">Walking distance to pristine beaches</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-2xl">🎯</span>
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
