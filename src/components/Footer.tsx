'use client';

import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Zanzibar Real Estate</h3>
            <p className="text-gray-300 mb-4">
              Votre partenaire de confiance pour l'immobilier premium à Zanzibar.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-secondary transition">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="hover:text-secondary transition">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="hover:text-secondary transition">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="hover:text-secondary transition">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-secondary transition">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/properties" className="hover:text-secondary transition">
                  Propriétés
                </Link>
              </li>
              <li>
                <Link href="/exclusive" className="hover:text-secondary transition">
                  Exclusivités
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-secondary transition">
                  À Propos
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-300">
              <li>📍 Stone Town, Zanzibar</li>
              <li>📞 +255 XXX XXX XXX</li>
              <li>✉️ info@zanzibar-realestate.com</li>
              <li>🕐 Lun-Ven: 9h-18h</li>
            </ul>
          </div>

          {/* Crypto Payments */}
          <div>
            <h4 className="font-bold text-lg mb-4">Paiements Crypto</h4>
            <ul className="space-y-2 text-gray-300">
              <li>₿ Bitcoin</li>
              <li>Ξ Ethereum</li>
              <li>💵 USDC</li>
              <li>🔒 Smart Contracts</li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-600 mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">
            &copy; 2026 Zanzibar Real Estate. Tous droits réservés.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-400 hover:text-secondary transition">
              Confidentialité
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-secondary transition">
              Conditions
            </Link>
            <Link href="/cookies" className="text-gray-400 hover:text-secondary transition">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
