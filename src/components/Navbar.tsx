'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-primary text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 font-bold text-xl">
            <div className="text-secondary text-2xl">🏝️</div>
            <span>Zanzibar Real Estate</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="hover:text-secondary transition">
              Accueil
            </Link>
            <Link href="/properties" className="hover:text-secondary transition">
              Propriétés
            </Link>
            <Link href="/virtual-tours" className="hover:text-secondary transition">
              Visites 360°
            </Link>
            <Link href="/about" className="hover:text-secondary transition">
              À Propos
            </Link>
            <Link href="/contact" className="hover:text-secondary transition">
              Contact
            </Link>
          </div>

          {/* Auth Links */}
          <div className="hidden md:flex space-x-4">
            <Link
              href="/login"
              className="px-4 py-2 rounded border border-secondary hover:bg-secondary hover:text-primary transition"
            >
              Connexion
            </Link>
            <Link
              href="/register"
              className="px-4 py-2 rounded bg-secondary text-primary hover:bg-accent transition font-bold"
            >
              Inscription
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl"
            onClick={toggleMenu}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-3">
            <Link href="/" className="block hover:text-secondary transition">
              Accueil
            </Link>
            <Link href="/properties" className="block hover:text-secondary transition">
              Propriétés
            </Link>
            <Link href="/virtual-tours" className="block hover:text-secondary transition">
              Visites 360°
            </Link>
            <Link href="/about" className="block hover:text-secondary transition">
              À Propos
            </Link>
            <Link href="/contact" className="block hover:text-secondary transition">
              Contact
            </Link>
            <div className="space-y-2 pt-2 border-t border-secondary">
              <Link
                href="/login"
                className="block px-4 py-2 rounded border border-secondary hover:bg-secondary hover:text-primary transition"
              >
                Connexion
              </Link>
              <Link
                href="/register"
                className="block px-4 py-2 rounded bg-secondary text-primary hover:bg-accent transition text-center font-bold"
              >
                Inscription
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
