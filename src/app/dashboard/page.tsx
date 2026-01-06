'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaEdit, FaKey, FaBell } from 'react-icons/fa';

export default function DashboardPage() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  return (
    <div className="space-y-6">
      {/* Welcome Card */}
      <div className="bg-gradient-to-r from-primary to-secondary text-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-2">Bienvenue, {user?.name}!</h1>
        <p>Gérez votre compte et accédez à des propriétés exclusives</p>
      </div>

      {/* Quick Stats */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-gray-600 text-sm font-bold mb-2">FAVORIS</h3>
          <p className="text-3xl font-bold text-primary">12</p>
          <p className="text-gray-600 text-sm mt-2">Propriétés sauvegardées</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-gray-600 text-sm font-bold mb-2">RÉSERVATIONS</h3>
          <p className="text-3xl font-bold text-secondary">3</p>
          <p className="text-gray-600 text-sm mt-2">Visites prévues</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-gray-600 text-sm font-bold mb-2">TRANSACTIONS</h3>
          <p className="text-3xl font-bold text-accent">2</p>
          <p className="text-gray-600 text-sm mt-2">Paiements en cours</p>
        </div>
      </div>

      {/* Account Management */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Paramètres du Compte</h2>
        <div className="space-y-3">
          <button className="w-full text-left px-4 py-3 hover:bg-gray-50 rounded flex items-center justify-between">
            <div className="flex items-center gap-3">
              <FaEdit className="text-primary" />
              <span>Modifier le profil</span>
            </div>
            <span className="text-gray-400">›</span>
          </button>
          <button className="w-full text-left px-4 py-3 hover:bg-gray-50 rounded flex items-center justify-between">
            <div className="flex items-center gap-3">
              <FaKey className="text-primary" />
              <span>Changer le mot de passe</span>
            </div>
            <span className="text-gray-400">›</span>
          </button>
          <button className="w-full text-left px-4 py-3 hover:bg-gray-50 rounded flex items-center justify-between">
            <div className="flex items-center gap-3">
              <FaBell className="text-primary" />
              <span>Paramètres de notification</span>
            </div>
            <span className="text-gray-400">›</span>
          </button>
        </div>
      </div>

      {/* Exclusive Properties */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Propriétés Exclusives</h2>
        <p className="text-gray-600 mb-4">
          En tant que membre, accédez à des propriétés non listées publiquement
        </p>
        <Link
          href="/exclusive"
          className="inline-block px-6 py-2 bg-primary text-white rounded hover:bg-opacity-90 transition font-bold"
        >
          Voir Listings Exclusifs
        </Link>
      </div>

      {/* Crypto Wallet */}
      <div className="bg-gradient-to-r from-primary to-accent text-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Porte-monnaie Crypto</h2>
        <p className="mb-4">Connectez votre porte-monnaie pour les paiements facilités</p>
        <button className="px-6 py-2 bg-white text-primary rounded hover:bg-gray-100 transition font-bold">
          Connecter Wallet MetaMask
        </button>
      </div>
    </div>
  );
}
