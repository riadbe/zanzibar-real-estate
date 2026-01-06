'use client';

import { useState } from 'react';
import PropertyCard from '@/components/PropertyCard';
import { FaSliders } from 'react-icons/fa6';

export default function PropertiesPage() {
  const [showFilters, setShowFilters] = useState(false);

  const properties = [
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
    {
      id: '5',
      title: 'Cottage Côtier',
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=500&h=400&fit=crop',
      price: 350000,
      bedrooms: 2,
      bathrooms: 1,
      area: 120,
      location: 'Kizimkazi',
      exclusive: false,
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
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Nos Propriétés</h1>
          <p className="text-gray-600 text-lg">
            Explorez notre sélection complète de propriétés à Zanzibar
          </p>
        </div>

        {/* Filters Toggle */}
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center gap-2 mb-6 bg-primary text-white px-4 py-2 rounded hover:bg-opacity-90"
        >
          <FaSliders /> Filtres
        </button>

        {/* Filters */}
        {showFilters && (
          <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
            <div className="grid md:grid-cols-4 gap-6">
              <div>
                <label className="block font-bold mb-2">Prix Min</label>
                <input
                  type="number"
                  placeholder="Prix minimum"
                  className="w-full border rounded px-3 py-2"
                />
              </div>
              <div>
                <label className="block font-bold mb-2">Prix Max</label>
                <input
                  type="number"
                  placeholder="Prix maximum"
                  className="w-full border rounded px-3 py-2"
                />
              </div>
              <div>
                <label className="block font-bold mb-2">Localisation</label>
                <select className="w-full border rounded px-3 py-2">
                  <option value="">Toutes les zones</option>
                  <option value="stone-town">Stone Town</option>
                  <option value="nungwi">Nungwi</option>
                  <option value="paje">Paje</option>
                  <option value="fumba">Fumba</option>
                </select>
              </div>
              <div>
                <label className="block font-bold mb-2">Type</label>
                <select className="w-full border rounded px-3 py-2">
                  <option value="">Tous les types</option>
                  <option value="house">Maison</option>
                  <option value="apartment">Appartement</option>
                  <option value="villa">Villa</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {/* Properties Grid */}
        <div className="grid md:grid-cols-4 gap-6">
          {properties.map((property) => (
            <PropertyCard key={property.id} {...property} />
          ))}
        </div>

        {/* No Results Message */}
        <div className="text-center py-12">
          <p className="text-gray-600 mb-4">
            Vous ne trouvez pas ce que vous cherchez?
          </p>
          <button className="btn btn-primary">
            Nous Contacter pour Plus d'Options
          </button>
        </div>
      </div>
    </div>
  );
}
