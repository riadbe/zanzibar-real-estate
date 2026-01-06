'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaBed, FaBath, FaRulerCombined, FaHeart } from 'react-icons/fa';

interface PropertyCardProps {
  id: string;
  title: string;
  image: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  area: number;
  location: string;
  exclusive?: boolean;
}

export default function PropertyCard({
  id,
  title,
  image,
  price,
  bedrooms,
  bathrooms,
  area,
  location,
  exclusive,
}: PropertyCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition hover:scale-105">
      <div className="relative h-64 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover hover:scale-110 transition"
        />
        {exclusive && (
          <div className="absolute top-4 right-4 bg-accent text-white px-3 py-1 rounded-full text-sm font-bold">
            EXCLUSIF
          </div>
        )}
        <button className="absolute top-4 left-4 bg-white rounded-full p-2 hover:bg-gray-200 transition">
          <FaHeart size={20} className="text-red-500" />
        </button>
      </div>

      <div className="p-6">
        <h3 className="font-bold text-lg mb-2 line-clamp-1">{title}</h3>
        <p className="text-gray-600 mb-4 text-sm">{location}</p>

        <div className="flex justify-between items-center mb-4 text-primary font-bold">
          <span className="text-2xl">${price.toLocaleString()}</span>
        </div>

        <div className="grid grid-cols-3 gap-3 mb-4 text-center">
          <div className="border-t pt-3">
            <div className="flex justify-center mb-1">
              <FaBed className="text-secondary" />
            </div>
            <span className="text-sm text-gray-600">{bedrooms} Chambres</span>
          </div>
          <div className="border-t pt-3">
            <div className="flex justify-center mb-1">
              <FaBath className="text-secondary" />
            </div>
            <span className="text-sm text-gray-600">{bathrooms} SDB</span>
          </div>
          <div className="border-t pt-3">
            <div className="flex justify-center mb-1">
              <FaRulerCombined className="text-secondary" />
            </div>
            <span className="text-sm text-gray-600">{area} m²</span>
          </div>
        </div>

        <Link
          href={`/properties/${id}`}
          className="block w-full bg-primary text-white text-center py-3 rounded font-bold hover:bg-opacity-90 transition"
        >
          Voir Détails
        </Link>
      </div>
    </div>
  );
}
