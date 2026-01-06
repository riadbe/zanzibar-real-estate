#!/usr/bin/env bash

# Setup script pour Zanzibar Real Estate
# Usage: bash setup.sh

set -e

echo "🚀 Zanzibar Real Estate - Setup Automatisé"
echo "=========================================="
echo ""

# Vérifier Node.js
if ! command -v node &> /dev/null; then
    echo "❌ Node.js n'est pas installé"
    echo "📥 Télécharger depuis: https://nodejs.org/"
    exit 1
fi

NODE_VERSION=$(node -v)
echo "✅ Node.js détecté: $NODE_VERSION"
echo ""

# Vérifier npm
if ! command -v npm &> /dev/null; then
    echo "❌ npm n'est pas installé"
    exit 1
fi

NPM_VERSION=$(npm -v)
echo "✅ npm détecté: $NPM_VERSION"
echo ""

# Installer dépendances
echo "📦 Installation des dépendances..."
npm install
echo "✅ Dépendances installées"
echo ""

# Créer .env.local
if [ ! -f .env.local ]; then
    echo "📝 Création du fichier .env.local..."
    cp .env.example .env.local
    echo "⚠️  Veuillez éditer .env.local avec vos variables:"
    echo "   - DATABASE_URL"
    echo "   - JWT_SECRET"
    echo "   - INFURA_KEY"
    echo "   - Autres variables API"
    echo ""
fi

# Proposer migration database
read -p "Voulez-vous exécuter les migrations de base de données? (y/n) " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    echo "🗄️  Exécution des migrations..."
    npm run db:migrate
    echo "✅ Migrations terminées"
fi

echo ""
echo "✅ Setup terminé avec succès!"
echo ""
echo "🚀 Pour démarrer:"
echo "   npm run dev"
echo ""
echo "L'app sera disponible à: http://localhost:3000"
