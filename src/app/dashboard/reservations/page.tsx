'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaCalendar, FaTrash, FaCheckCircle, FaClock } from 'react-icons/fa';

export default function ReservationsPage() {
  const [reservations] = useState([
    {
      id: 1,
      propertyTitle: 'Villa Luxe - Stone Town',
      date: '2025-02-15',
      time: '14:00',
      status: 'CONFIRMED',
      notes: 'Visite avec agent Jean Mwamba',
    },
    {
      id: 2,
      propertyTitle: 'Maison Beachfront',
      date: '2025-02-20',
      time: '10:00',
      status: 'PENDING',
      notes: '',
    },
    {
      id: 3,
      propertyTitle: 'Penthouse Moderne',
      date: '2025-01-25',
      time: '16:00',
      status: 'COMPLETED',
      notes: 'Visite effectuée',
    },
  ]);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'CONFIRMED':
        return (
          <span className="flex items-center gap-1 px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
            <FaCheckCircle size={12} /> Confirmée
          </span>
        );
      case 'PENDING':
        return (
          <span className="flex items-center gap-1 px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm">
            <FaClock size={12} /> En attente
          </span>
        );
      case 'COMPLETED':
        return (
          <span className="flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
            <FaCheckCircle size={12} /> Effectuée
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Mes Réservations</h1>
        <Link
          href="/properties"
          className="px-6 py-2 bg-primary text-white rounded hover:bg-opacity-90 transition font-bold"
        >
          + Nouvelle Réservation
        </Link>
      </div>

      {reservations.length > 0 ? (
        <div className="space-y-4">
          {reservations.map((reservation) => (
            <div
              key={reservation.id}
              className="border rounded-lg p-4 hover:shadow-md transition"
            >
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="font-bold text-lg">{reservation.propertyTitle}</h3>
                  <div className="flex items-center gap-2 text-gray-600 mt-2">
                    <FaCalendar size={14} />
                    <span>
                      {new Date(reservation.date).toLocaleDateString('fr-FR')} à{' '}
                      {reservation.time}
                    </span>
                  </div>
                </div>
                {getStatusBadge(reservation.status)}
              </div>

              {reservation.notes && (
                <p className="text-gray-600 text-sm mb-3">{reservation.notes}</p>
              )}

              <div className="flex gap-3">
                <button className="flex-1 px-4 py-2 border border-primary text-primary rounded hover:bg-primary hover:text-white transition">
                  Modifier
                </button>
                <button className="px-4 py-2 text-red-500 hover:bg-red-50 rounded transition">
                  <FaTrash />
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-600 mb-4">Vous n'avez pas de réservations</p>
          <Link
            href="/properties"
            className="inline-block px-6 py-2 bg-primary text-white rounded hover:bg-opacity-90 transition font-bold"
          >
            Réserver une Visite
          </Link>
        </div>
      )}
    </div>
  );
}
