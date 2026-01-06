'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FaArrowRight, FaVideo, FaMapMarkerAlt } from 'react-icons/fa';
import PropertyCard from '@/components/PropertyCard';

export default function Home() {
  const featuredProperties = [
    {
      id: '1',
      title: 'Villa Luxe - Stone Town',
      image: 'https://images.unsplash.com/photo-1570129477492-45ac003e2bb2?w=500&h=400&fit=crop',
      price: 850000,
      bedrooms: 4,
      bathrooms: 3,
      area: 250,
      location: 'Stone Town',
      exclusive: true,
    },
    {
      id: '2',
      title: 'Appartement Vue Mer',
      image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=500&h=400&fit=crop',
      price: 450000,
      bedrooms: 3,
      bathrooms: 2,
      area: 180,
      location: 'Nungwi Beach',
      exclusive: false,
    },
    {
      id: '3',
      title: 'Maison Beachfront',
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=500&h=400&fit=crop',
      price: 650000,
      bedrooms: 3,
      bathrooms: 2,
      area: 200,
      location: 'Paje Beach',
      exclusive: true,
    },
    {
      id: '4',
      title: 'Penthouse Moderne',
      image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=500&h=400&fit=crop',
      price: 1200000,
      bedrooms: 5,
      bathrooms: 4,
      area: 380,
      location: 'Fumba',
      exclusive: false,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - Balitecture Inspired */}
      <section className="relative h-screen bg-gradient-to-br from-gray-900 to-black flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-30 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 tracking-tight leading-tight">
            EXCEPTIONALLY<br />BOLD LUXURY
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-4">
            Discover premium real estate in Zanzibar
          </p>
          <p className="text-lg text-gray-300 mb-12">
            Secure payments in Bitcoin, Ethereum & USDC
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/properties"
              className="inline-flex items-center justify-center gap-3 bg-white text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition"
            >
              Explore Properties <FaArrowRight />
            </Link>
            <Link
              href="/virtual-tours"
              className="inline-flex items-center justify-center gap-3 border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition"
            >
              <FaVideo /> View 360° Tours
            </Link>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-32 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-bold mb-16 text-gray-900">
            WHAT WE OFFER
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Card 1 */}
            <div className="group">
              <div className="bg-gradient-to-br from-blue-400 to-blue-600 h-80 rounded-lg mb-6 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-6xl mb-4">🏠</div>
                  <p className="text-2xl font-bold">Luxury Properties</p>
                </div>
              </div>
              <h3 className="text-4xl font-bold text-gray-900 mb-3">
                Premium Properties
              </h3>
              <p className="text-gray-600 mb-6 text-lg">
                Discover our carefully curated selection of luxury villas, apartments, and beachfront properties across Zanzibar's most desirable locations.
              </p>
              <Link
                href="/properties"
                className="inline-flex items-center gap-2 font-bold text-lg text-gray-900 hover:gap-4 transition"
              >
                Explore Properties <FaArrowRight />
              </Link>
            </div>

            {/* Card 2 */}
            <div className="group">
              <div className="bg-gradient-to-br from-purple-400 to-purple-600 h-80 rounded-lg mb-6 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-6xl mb-4">📹</div>
                  <p className="text-2xl font-bold">360° Virtual Tours</p>
                </div>
              </div>
              <h3 className="text-4xl font-bold text-gray-900 mb-3">
                360° Virtual Tours
              </h3>
              <p className="text-gray-600 mb-6 text-lg">
                Explore every unit type with immersive 360° virtual tours. View Lagoon Suites, 1-Bedroom Villas, 2-Bedroom Villas, and Hotel Suites from anywhere.
              </p>
              <Link
                href="/virtual-tours"
                className="inline-flex items-center gap-2 font-bold text-lg text-gray-900 hover:gap-4 transition"
              >
                View Virtual Tours <FaArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Timeline */}
      <section className="py-32 px-4 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-bold mb-16 text-gray-900">
            INVESTMENT TIMELINE
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Choose Your Property', description: 'Find the perfect unit from our premium collection', icon: '🏠' },
              { step: '2', title: 'Initial Deposit', description: 'Secure with just 20% down payment', icon: '💰' },
              { step: '3', title: 'Construction Payments', description: '4 x 20% payments during construction', icon: '🏗️' },
              { step: '4', title: 'Enjoy Your Investment', description: 'Rental income or personal use', icon: '🎉' },
            ].map((item) => (
              <div key={item.step} className="bg-white p-8 rounded-lg shadow">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">STEP {item.step}</h3>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h4>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-32 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-bold mb-12 text-gray-900">
            FEATURED PROPERTIES
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.id} {...property} />
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/properties"
              className="inline-flex items-center gap-3 bg-gray-900 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-800 transition"
            >
              View All Properties <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Zanzibar */}
      <section className="py-32 px-4 md:px-8 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-bold mb-16">
            WHY ZANZIBAR?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <div className="text-5xl mb-6">🌴</div>
              <h3 className="text-2xl font-bold mb-4">Paradise Location</h3>
              <p className="text-gray-300 text-lg">
                Pristine beaches, turquoise waters, and a tropical climate make Zanzibar the perfect destination for luxury living and investment.
              </p>
            </div>
            <div>
              <div className="text-5xl mb-6">💎</div>
              <h3 className="text-2xl font-bold mb-4">Investment Growth</h3>
              <p className="text-gray-300 text-lg">
                Strong rental yields, growing tourism, and increasing property values make Zanzibar an excellent investment opportunity.
              </p>
            </div>
            <div>
              <div className="text-5xl mb-6">🔐</div>
              <h3 className="text-2xl font-bold mb-4">Crypto Security</h3>
              <p className="text-gray-300 text-lg">
                Transparent smart contracts and blockchain verification ensure secure transactions in Bitcoin, Ethereum, and USDC.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 text-gray-900">
            READY TO INVEST?
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Our team is ready to help you find the perfect property or answer any questions about our investment opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/virtual-tours"
              className="inline-flex items-center justify-center gap-3 bg-gray-900 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-800 transition"
            >
              <FaVideo /> Explore Virtual Tours
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-50 transition"
            >
              Contact Us <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
