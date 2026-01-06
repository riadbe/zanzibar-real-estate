'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaBed, FaBath, FaRulerCombined, FaMapMarkerAlt, FaHeart } from 'react-icons/fa';

interface PropertyDetailsPageProps {
  params: {
    id: string;
  };
}

export default function PropertyDetailsPage({ params }: PropertyDetailsPageProps) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  // Données fictives - remplacer par API fetch
  const property = {
    id: params.id,
    title: 'Villa Luxe - Stone Town',
    price: 850000,
    description: 'Magnifique villa avec vue sur l\'océan Indien, située dans le cœur historique de Stone Town. Cette propriété de luxe offre le summum du confort tropical avec accès direct à la plage privée.',
    location: 'Stone Town, Zanzibar',
    bedrooms: 4,
    bathrooms: 3,
    area: 250,
    images: [
      'https://images.unsplash.com/photo-1570129477492-45ac003e2bb2?w=1000&h=600&fit=crop',
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1000&h=600&fit=crop',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1000&h=600&fit=crop',
    ],
    amenities: [
      'Plage privée',
      'Piscine',
      'Jardin tropical',
      'Cuisine équipée',
      'Climatisation',
      'Terrasse vue mer',
      'Parking privé',
      'Système de sécurité',
    ],
    yearBuilt: 2015,
    propertyType: 'Villa',
    exclusive: true,
  };

  const [selectedImage, setSelectedImage] = useState(property.images[0]);

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Link href="/properties" className="text-primary hover:underline">
            Propriétés
          </Link>
          <span className="mx-2">›</span>
          <span className="text-gray-600">{property.title}</span>
        </div>

        {/* Header */}
        <div className="flex justify-between items-start mb-6">
          <div>
            <h1 className="text-4xl font-bold mb-2">{property.title}</h1>
            <div className="flex items-center gap-2 text-gray-600">
              <FaMapMarkerAlt />
              {property.location}
            </div>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => setIsFavorite(!isFavorite)}
              className={`btn ${isFavorite ? 'bg-red-500 text-white' : 'bg-gray-200'}`}
            >
              <FaHeart size={20} />
            </button>
          </div>
        </div>

        {/* Price and Badge */}
        <div className="flex justify-between items-center mb-8 pb-6 border-b">
          <div>
            <span className="text-3xl font-bold text-primary">
              ${property.price.toLocaleString()}
            </span>
            {property.exclusive && (
              <span className="ml-4 bg-accent text-white px-3 py-1 rounded-full text-sm font-bold">
                EXCLUSIF
              </span>
            )}
          </div>
          <div className="flex gap-3">
            <Link
              href="/dashboard/reservations"
              className="btn btn-primary"
            >
              Demander une Visite
            </Link>
            <Link
              href={`/payment/${property.id}`}
              className="btn btn-secondary"
            >
              Payer en Crypto
            </Link>
          </div>
        </div>

        {/* Images Section */}
        <div className="mb-8">
          <div className="mb-4 relative h-96 bg-gray-200 rounded-lg overflow-hidden">
            <Image
              src={selectedImage}
              alt={property.title}
              fill
              className="object-cover"
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {property.images.map((image, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedImage(image)}
                className={`cursor-pointer relative h-24 rounded overflow-hidden border-2 ${
                  selectedImage === image ? 'border-primary' : 'border-gray-300'
                }`}
              >
                <Image
                  src={image}
                  alt={`Photo ${idx + 1}`}
                  fill
                  className="object-cover hover:scale-110 transition"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Tabs */}
            <div className="flex gap-4 mb-6 border-b">
              {['overview', 'amenities', 'location'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-4 px-2 font-bold transition ${
                    activeTab === tab
                      ? 'border-b-2 border-primary text-primary'
                      : 'text-gray-600'
                  }`}
                >
                  {tab === 'overview' && 'Vue d\'ensemble'}
                  {tab === 'amenities' && 'Équipements'}
                  {tab === 'location' && 'Localisation'}
                </button>
              ))}
            </div>

            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div>
                <h2 className="text-2xl font-bold mb-4">À Propos</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {property.description}
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-bold text-lg mb-4">Caractéristiques</h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <FaBed className="text-secondary" />
                        <span>{property.bedrooms} Chambres</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <FaBath className="text-secondary" />
                        <span>{property.bathrooms} Salles de bain</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <FaRulerCombined className="text-secondary" />
                        <span>{property.area} m²</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span>Année de construction: {property.yearBuilt}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span>Type: {property.propertyType}</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-bold text-lg mb-4">Prix</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span>Prix total:</span>
                        <span className="font-bold">${property.price.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Prix par m²:</span>
                        <span className="font-bold">
                          ${(property.price / property.area).toLocaleString(undefined, {
                            maximumFractionDigits: 0,
                          })}
                        </span>
                      </div>
                      <div className="border-t pt-3 mt-3">
                        <p className="text-sm text-gray-600">
                          Possibilité de paiement en cryptocurrency
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Amenities Tab */}
            {activeTab === 'amenities' && (
              <div>
                <h2 className="text-2xl font-bold mb-4">Équipements</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {property.amenities.map((amenity, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 p-4 bg-gray-50 rounded"
                    >
                      <span className="text-secondary">✓</span>
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Location Tab */}
            {activeTab === 'location' && (
              <div>
                <h2 className="text-2xl font-bold mb-4">Localisation</h2>
                <div className="bg-gray-100 h-96 rounded-lg flex items-center justify-center mb-6">
                  <p className="text-gray-600">
                    Carte Google Maps à intégrer - {property.location}
                  </p>
                </div>
                <div className="space-y-3">
                  <p className="text-gray-600">
                    <strong>Adresse:</strong> {property.location}
                  </p>
                  <p className="text-gray-600">
                    <strong>Proximité:</strong> À proximité des plages de Zanzibar, restaurants et commerces
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Contact Agent */}
            <div className="bg-primary text-white p-6 rounded-lg mb-6">
              <h3 className="font-bold text-lg mb-4">Contactez un Agent</h3>
              <div className="mb-4">
                <p className="font-bold">Jean Mwamba</p>
                <p className="text-sm text-gray-200">Agent Immobilier Principal</p>
              </div>
              <button className="w-full bg-secondary text-primary py-2 rounded font-bold mb-2 hover:bg-opacity-90">
                Appeler
              </button>
              <button className="w-full bg-white text-primary py-2 rounded font-bold hover:bg-gray-100">
                Envoyer un Message
              </button>
            </div>

            {/* Crypto Payment Info */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-4">Paiement en Crypto</h3>
              <p className="text-sm text-gray-600 mb-4">
                Payez de manière sécurisée avec Bitcoin, Ethereum ou USDC
              </p>
              <Link
                href={`/payment/${property.id}`}
                className="btn btn-secondary w-full text-center"
              >
                Démarrer Paiement
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
