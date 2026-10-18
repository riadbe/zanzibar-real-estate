'use client';

import Link from 'next/link';
import dynamic from 'next/dynamic';
import { FaArrowRight, FaVideo, FaCube } from 'react-icons/fa';
import PropertyCard from '@/components/PropertyCard';

const OceanBackground = dynamic(() => import('@/components/OceanBackground'), {
  ssr: false,
});

const WaterSphere = dynamic(() => import('@/components/WaterSphere'), {
  ssr: false,
});

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
      {/* Hero Section with Ocean Background */}
      <section className="relative h-screen bg-gradient-to-br from-gray-900 to-black flex items-center justify-center overflow-hidden">
        <OceanBackground />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" style={{ zIndex: 1 }} />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl" style={{ zIndex: 2 }}>
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm mb-6">
            <FaCube className="text-emerald-400" />
            <span>WebGPU-Powered 3D Experience</span>
          </div>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 tracking-tight leading-tight">
            EXCEPTIONALLY<br />BOLD LUXURY
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-4">
            Discover premium real estate in Zanzibar
          </p>
          <p className="text-lg text-gray-300 mb-12">
            Secure payments in Bitcoin, Ethereum &amp; USDC
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
              <FaCube /> Explore in 3D
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
                  <div className="text-6xl mb-4">&#127968;</div>
                  <p className="text-2xl font-bold">Luxury Properties</p>
                </div>
              </div>
              <h3 className="text-4xl font-bold text-gray-900 mb-3">
                Premium Properties
              </h3>
              <p className="text-gray-600 mb-6 text-lg">
                Discover our carefully curated selection of luxury villas, apartments, and beachfront properties across Zanzibar&apos;s most desirable locations.
              </p>
              <Link
                href="/properties"
                className="inline-flex items-center gap-2 font-bold text-lg text-gray-900 hover:gap-4 transition"
              >
                Explore Properties <FaArrowRight />
              </Link>
            </div>

            {/* Card 2 - 3D Tours */}
            <div className="group relative overflow-hidden">
              <div className="relative bg-gradient-to-br from-emerald-900 to-teal-800 h-80 rounded-lg mb-6 flex items-center justify-center">
                <WaterSphere />
                <div className="relative z-10 text-white text-center">
                  <FaCube className="text-6xl mb-4 mx-auto" />
                  <p className="text-2xl font-bold">3D Virtual Tours</p>
                </div>
              </div>
              <h3 className="text-4xl font-bold text-gray-900 mb-3">
                Interactive 3D Tours
              </h3>
              <p className="text-gray-600 mb-6 text-lg">
                Explore every unit type with immersive 3D models powered by WebGPU. Walk through Lagoon Suites, Villas, and Hotel Suites from anywhere.
              </p>
              <Link
                href="/virtual-tours"
                className="inline-flex items-center gap-2 font-bold text-lg text-emerald-600 hover:gap-4 transition"
              >
                <FaCube /> Explore in 3D <FaArrowRight />
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
              { step: '1', title: 'Choose Your Property', description: 'Find the perfect unit from our premium collection', icon: '&#127968;' },
              { step: '2', title: 'Initial Deposit', description: 'Secure with just 20% down payment', icon: '&#128176;' },
              { step: '3', title: 'Construction Payments', description: '4 x 20% payments during construction', icon: '&#127959;' },
              { step: '4', title: 'Enjoy Your Investment', description: 'Rental income or personal use', icon: '&#127881;' },
            ].map((item) => (
              <div key={item.step} className="bg-white p-8 rounded-lg shadow">
                <div className="text-5xl mb-4" dangerouslySetInnerHTML={{ __html: item.icon }} />
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
              <div className="text-5xl mb-6">&#127796;</div>
              <h3 className="text-2xl font-bold mb-4">Paradise Location</h3>
              <p className="text-gray-300 text-lg">
                Pristine beaches, turquoise waters, and a tropical climate make Zanzibar the perfect destination for luxury living and investment.
              </p>
            </div>
            <div>
              <div className="text-5xl mb-6">&#128142;</div>
              <h3 className="text-2xl font-bold mb-4">Investment Growth</h3>
              <p className="text-gray-300 text-lg">
                Strong rental yields, growing tourism, and increasing property values make Zanzibar an excellent investment opportunity.
              </p>
            </div>
            <div>
              <div className="text-5xl mb-6">&#128274;</div>
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
              <FaCube /> Explore 3D Tours
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
