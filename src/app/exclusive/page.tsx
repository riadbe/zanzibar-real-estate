'use client';

import PropertyCard from '@/components/PropertyCard';

export default function ExclusivePage() {
  const exclusiveProperties = [
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
      id: '6',
      title: 'Complexe Résidentiel',
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&h=400&fit=crop',
      price: 2500000,
      bedrooms: 6,
      bathrooms: 5,
      area: 500,
      location: 'Chake Chake',
      exclusive: true,
    },
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Propriétés Exclusives</h1>
          <p className="text-lg text-gray-600">
            Accès réservé aux membres inscrits
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-4 gap-6">
          {exclusiveProperties.map((property) => (
            <PropertyCard key={property.id} {...property} />
          ))}
        </div>

        {/* Info Section */}
        <div className="mt-12 bg-gradient-to-r from-primary to-secondary text-white p-8 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4">
            Vous êtes Investisseur ou Agent Immobilier?
          </h2>
          <p className="mb-6">
            Contactez-nous pour lister vos propriétés en exclusivité
          </p>
          <button className="bg-white text-primary px-8 py-3 rounded-lg font-bold hover:bg-opacity-90 transition">
            Nous Contacter
          </button>
        </div>
      </div>
    </div>
  );
}
