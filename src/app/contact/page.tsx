'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaPaperPlane } from 'react-icons/fa';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Message sent:', formData);
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Nous Contacter</h1>
          <p className="text-lg text-gray-600">
            L'équipe de Zanzibar Real Estate est à votre service
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Contact Info Cards */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="text-4xl text-primary mb-4">
              <FaMapMarkerAlt className="mx-auto" />
            </div>
            <h3 className="font-bold text-lg mb-2">Adresse</h3>
            <p className="text-gray-600">Stone Town</p>
            <p className="text-gray-600">Zanzibar, Tanzanie</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="text-4xl text-primary mb-4">
              <FaPhone className="mx-auto" />
            </div>
            <h3 className="font-bold text-lg mb-2">Téléphone</h3>
            <p className="text-gray-600">+255 XXX XXX XXX</p>
            <p className="text-gray-600">+255 YYY YYY YYY</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="text-4xl text-primary mb-4">
              <FaClock className="mx-auto" />
            </div>
            <h3 className="font-bold text-lg mb-2">Horaires</h3>
            <p className="text-gray-600">Lun-Ven: 9h-18h</p>
            <p className="text-gray-600">Sam: 10h-16h</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Envoyez-nous un Message</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Nom Complet
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Jean Dupont"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary focus:ring-opacity-50"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="votre@email.com"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary focus:ring-opacity-50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+255..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary focus:ring-opacity-50"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Sujet
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Demande d'information"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary focus:ring-opacity-50"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Votre message..."
                  rows={6}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary focus:ring-opacity-50"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-white py-3 rounded-lg font-bold hover:bg-opacity-90 transition flex items-center justify-center gap-2"
              >
                <FaPaperPlane /> Envoyer le Message
              </button>
            </form>
          </div>

          {/* Map and Info */}
          <div>
            {/* Map */}
            <div className="bg-gray-200 h-80 rounded-lg mb-6 flex items-center justify-center">
              <p className="text-gray-600">Carte Google Maps à intégrer</p>
            </div>

            {/* FAQ */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-4">Questions Fréquentes</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold text-primary mb-2">
                    Comment payer en crypto?
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Connectez-vous et accédez à la page de paiement pour sélectionner votre crypto-monnaie.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-primary mb-2">
                    Que comprend le dépôt?
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Le dépôt de 10% garantit votre réservation et est remboursable si vous changez d'avis.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-primary mb-2">
                    Comment puis-je faire une visite?
                  </h3>
                  <p className="text-gray-600 text-sm">
                    <Link href="/dashboard/reservations" className="text-primary hover:underline">
                      Demandez une visite
                    </Link>{' '}
                    depuis votre dashboard
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 bg-gradient-to-r from-primary to-secondary text-white p-8 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Prêt à Commencer?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/auth/register"
              className="btn bg-white text-primary hover:bg-gray-100"
            >
              S'inscrire
            </Link>
            <Link
              href="/properties"
              className="btn bg-accent text-white hover:bg-opacity-90"
            >
              Voir Propriétés
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
