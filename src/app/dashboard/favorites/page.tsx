'use client';

import Link from 'next/link';
import PropertyCard from '@/components/PropertyCard';

export default function FavoritesPage() {
  const favorites = [
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
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h1 className="text-3xl font-bold mb-6">Mes Favoris</h1>

      {favorites.length > 0 ? (
        <div className="grid md:grid-cols-2 gap-6">
          {favorites.map((property) => (
            <PropertyCard key={property.id} {...property} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-600 mb-4">Vous n'avez pas encore de favoris</p>
          <Link
            href="/properties"
            className="inline-block px-6 py-2 bg-primary text-white rounded hover:bg-opacity-90 transition font-bold"
          >
            Parcourir les Propriétés
          </Link>
        </div>
      )}
    </div>
  );
}
