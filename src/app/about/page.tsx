'use client';

export default function AboutPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-5xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">À Propos de Nous</h1>
          <p className="text-lg text-gray-600">
            Zanzibar Real Estate - Votre partenaire de confiance pour l'immobilier premium
          </p>
        </div>

        {/* Mission */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Notre Mission</h2>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <p className="text-gray-600 leading-relaxed mb-4">
              Chez Zanzibar Real Estate, nous sommes passionnés par l'immobilier de luxe. Notre mission est de
              connecter les investisseurs mondiaux avec les plus belles propriétés de Zanzibar, tout en offrant
              une expérience d'achat transparente et sécurisée.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Grâce à notre intégration de la technologie blockchain et des paiements en crypto-monnaie, nous
              offrons une flexibilité sans précédent dans le secteur immobilier tanzanien.
            </p>
          </div>
        </div>

        {/* Team */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Notre Équipe</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 bg-primary text-white rounded-full mx-auto mb-4 flex items-center justify-center text-4xl">
                JM
              </div>
              <h3 className="font-bold text-lg">Jean Mwamba</h3>
              <p className="text-gray-600">Agent Immobilier Principal</p>
              <p className="text-sm text-gray-500 mt-2">15+ ans d'expérience</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-secondary text-white rounded-full mx-auto mb-4 flex items-center justify-center text-4xl">
                SA
              </div>
              <h3 className="font-bold text-lg">Safiyah Ahmed</h3>
              <p className="text-gray-600">Directrice Marketing</p>
              <p className="text-sm text-gray-500 mt-2">Spécialiste en crypto</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-accent text-white rounded-full mx-auto mb-4 flex items-center justify-center text-4xl">
                MM
              </div>
              <h3 className="font-bold text-lg">Mohamed Musa</h3>
              <p className="text-gray-600">Responsable Légal</p>
              <p className="text-sm text-gray-500 mt-2">Droit immobilier</p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Nos Valeurs</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="font-bold mb-2">Transparence</h3>
              <p className="text-gray-600 text-sm">
                Communication honnête et claire avec tous nos clients
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="font-bold mb-2">Sécurité</h3>
              <p className="text-gray-600 text-sm">
                Protection maximale via smart contracts et blockchain
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-4xl mb-4">⭐</div>
              <h3 className="font-bold mb-2">Excellence</h3>
              <p className="text-gray-600 text-sm">
                Service de qualité supérieure pour chaque client
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="font-bold mb-2">Innovation</h3>
              <p className="text-gray-600 text-sm">
                Intégration des dernières technologies
              </p>
            </div>
          </div>
        </div>

        {/* Why Zanzibar */}
        <div className="mb-12 bg-gradient-to-r from-primary to-secondary text-white p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-6">Pourquoi Zanzibar?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-lg mb-2">Destination Touristique Mondiale</h3>
              <p className="text-gray-100">
                Zanzibar attire des millions de visiteurs chaque année, créant des opportunités d'investissement uniques.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">Croissance Économique</h3>
              <p className="text-gray-100">
                L'économie de Zanzibar connaît une croissance rapide avec une demande immobilière croissante.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">Beauté Naturelle</h3>
              <p className="text-gray-100">
                Plages paradisiaques, climat tropical, et paysages exotiques font de Zanzibar une destination premium.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">Cadre Légal Favorable</h3>
              <p className="text-gray-100">
                La Tanzanie offre un environnement légal stable pour les investissements immobiliers étrangers.
              </p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <p className="text-4xl font-bold text-primary mb-2">250+</p>
            <p className="text-gray-600">Propriétés</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <p className="text-4xl font-bold text-secondary mb-2">1500+</p>
            <p className="text-gray-600">Clients Satisfaits</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <p className="text-4xl font-bold text-accent mb-2">$50M+</p>
            <p className="text-gray-600">Transactions</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <p className="text-4xl font-bold text-primary mb-2">10+</p>
            <p className="text-gray-600">Années d'Expérience</p>
          </div>
        </div>
      </div>
    </div>
  );
}
