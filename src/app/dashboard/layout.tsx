'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaSignOutAlt, FaHeart, FaCalendar, FaCreditCard, FaUser } from 'react-icons/fa';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [activeTab, setActiveTab] = useState('overview');

  const menuItems = [
    {
      id: 'overview',
      label: 'Aperçu',
      icon: FaUser,
    },
    {
      id: 'favorites',
      label: 'Favoris',
      icon: FaHeart,
    },
    {
      id: 'reservations',
      label: 'Réservations',
      icon: FaCalendar,
    },
    {
      id: 'transactions',
      label: 'Transactions',
      icon: FaCreditCard,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6">
              {/* User Profile */}
              <div className="text-center mb-6 pb-6 border-b">
                <div className="w-16 h-16 bg-primary text-white rounded-full mx-auto mb-3 flex items-center justify-center text-2xl">
                  JD
                </div>
                <h3 className="font-bold">Jean Dupont</h3>
                <p className="text-sm text-gray-600">jean@email.com</p>
              </div>

              {/* Menu */}
              <nav className="space-y-2 mb-6">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full text-left px-4 py-3 rounded transition flex items-center gap-3 ${
                      activeTab === item.id
                        ? 'bg-primary text-white'
                        : 'hover:bg-gray-50'
                    }`}
                  >
                    <item.icon size={18} />
                    {item.label}
                  </button>
                ))}
              </nav>

              {/* Logout */}
              <button className="w-full px-4 py-3 bg-red-500 text-white rounded hover:bg-red-600 transition flex items-center justify-center gap-2">
                <FaSignOutAlt size={18} />
                Déconnexion
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="md:col-span-3">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
