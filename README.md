# 🏝️ Zanzibar Real Estate - Premier Site Immobilier de Référence

[![Next.js](https://img.shields.io/badge/Next.js-14.0-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3-38B2AC)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)

Un site immobilier premium pour Zanzibar avec authentification utilisateur, listings exclusifs, et paiements sécurisés en crypto-monnaie (Bitcoin, Ethereum, USDC).

## 📋 Table des matières

- [Fonctionnalités](#fonctionnalités)
- [Stack Technologique](#stack-technologique)
- [Installation](#installation)
- [Configuration](#configuration)
- [Structure du Projet](#structure-du-projet)
- [Guide d'Utilisation](#guide-dutilisation)
- [Déploiement](#déploiement)
- [Sécurité](#sécurité)
- [Contributing](#contributing)
- [License](#license)

## ✨ Fonctionnalités

### 🌐 Public
- ✅ Parcourir toutes les propriétés disponibles
- ✅ Recherche avancée avec filtres (prix, location, type, etc.)
- ✅ Affichage détaillé des propriétés (photos, galerie, amenités)
- ✅ Localisation sur carte interactive
- ✅ Informations agence et équipe
- ✅ Paiements en crypto-monnaie

### 🔐 Espace Privé (Authentifiés)
- ✅ Création et gestion de compte utilisateur
- ✅ Accès aux listings exclusifs (non publics)
- ✅ Sauvegarde des propriétés favorites
- ✅ Historique des propriétés consultées
- ✅ Système de réservation de visite
- ✅ Gestion du profil et préférences

### 💰 Paiements Crypto
- ✅ **Bitcoin (BTC)** - Transactions rapides et décentralisées
- ✅ **Ethereum (ETH)** - Smart contracts pour escrow
- ✅ **USDC Stablecoin** - Stabilité du prix
- ✅ Dépôt de garantie (10% du prix)
- ✅ Paiement complet du bien
- ✅ Historique des transactions
- ✅ Vérification blockchain en temps réel

### 🛡️ Sécurité
- ✅ Authentification JWT sécurisée
- ✅ Hashage des mots de passe (bcrypt)
- ✅ Smart contracts Ethereum pour escrow
- ✅ Transactions immuables sur blockchain
- ✅ Validation des entrées utilisateur
- ✅ HTTPS obligatoire en production

## 🏗️ Stack Technologique

### Frontend
| Technologie | Version | Usage |
|-------------|---------|-------|
| **Next.js** | 14.0 | Framework React/SSR |
| **React** | 18.2 | UI Library |
| **TypeScript** | 5.3 | Type Safety |
| **Tailwind CSS** | 3.3 | Styling |
| **React Icons** | 4.12 | Icons |
| **React Hook Form** | 7.49 | Forms |
| **Zustand** | 4.4 | State Management |

### Backend & Database
| Technologie | Version | Usage |
|-------------|---------|-------|
| **Node.js** | 18+ | Runtime |
| **Prisma** | 5.7 | ORM |
| **PostgreSQL** | 15 | Database |
| **JWT** | 9.1 | Auth Tokens |
| **bcryptjs** | 2.4 | Password Hashing |

### Blockchain & Crypto
| Service | Usage |
|---------|-------|
| **Ethereum** | Smart contracts, paiements |
| **Infura** | Provider Ethereum |
| **Web3.js** | Interactions blockchain |
| **Ethers.js** | Lib Ethereum |
| **CoinGecko API** | Prix crypto en temps réel |

### Infrastructure
| Service | Usage |
|---------|-------|
| **AWS S3** | Stockage images |
| **AWS RDS** | Database managed |
| **Vercel** | Deployment & CDN |
| **Docker** | Containerization |
| **Redis** | Caching |

## 🚀 Installation

### Prérequis
- Node.js 18+ ([Download](https://nodejs.org/))
- npm ou yarn
- PostgreSQL 14+ (ou MongoDB)
- Git

### Étapes d'installation

1. **Clone le repository**
   ```bash
   git clone https://github.com/yourusername/zanzibar-real-estate.git
   cd zanzibar-real-estate
   ```

2. **Installe les dépendances**
   ```bash
   npm install
   ```

3. **Configure les variables d'environnement**
   ```bash
   cp .env.example .env.local
   ```

4. **Édite `.env.local` avec tes clés** (voir Configuration)

5. **Configure la base de données**
   ```bash
   npm run db:migrate
   npm run db:seed  # (optionnel) Remplir avec données test
   ```

6. **Lance le serveur de développement**
   ```bash
   npm run dev
   ```

   L'app sera disponible à: **http://localhost:3000**

## ⚙️ Configuration

### Variables d'Environnement Requises

Créer un fichier `.env.local`:

```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/zanzibar_db"

# Authentication
JWT_SECRET="your_super_secret_jwt_key_change_this_in_production"
NEXTAUTH_SECRET="your_nextauth_secret_key"
NEXTAUTH_URL="http://localhost:3000"

# Crypto & Blockchain
INFURA_KEY="your_infura_api_key"
PRIVATE_KEY="0xyour_wallet_private_key"
CONTRACT_ADDRESS="0xyour_smart_contract_address"

# Email (SMTP)
SMTP_HOST="smtp.gmail.com"
SMTP_PORT=587
SMTP_USER="your_email@gmail.com"
SMTP_PASSWORD="your_app_password"

# AWS S3
AWS_ACCESS_KEY_ID="your_aws_key"
AWS_SECRET_ACCESS_KEY="your_aws_secret"
AWS_REGION="us-east-1"
AWS_BUCKET_NAME="zanzibar-properties"

# API Keys
GOOGLE_MAPS_API_KEY="your_google_maps_key"
STRIPE_SECRET_KEY="sk_test_..."  # Future use
```

### Configuration Docker

```bash
docker-compose up -d
```

Cela lancera:
- PostgreSQL (port 5432)
- Redis (port 6379)
- App Next.js (port 3000)

## 📁 Structure du Projet

```
zanzibar-real-estate/
├── .github/
│   └── workflows/           # CI/CD pipelines
├── src/
│   ├── app/                # Next.js App Router pages
│   │   ├── auth/           # Authentification (login, register)
│   │   ├── dashboard/      # Dashboard utilisateur
│   │   ├── payment/        # Paiement crypto
│   │   ├── properties/     # Listing et détails
│   │   ├── exclusive/      # Propriétés exclusives
│   │   ├── contact/        # Formulaire contact
│   │   ├── about/          # À propos
│   │   ├── layout.tsx      # Root layout
│   │   └── page.tsx        # Accueil
│   ├── components/         # Composants réutilisables
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── PropertyCard.tsx
│   ├── lib/               # Utilitaires et logique métier
│   │   ├── auth.ts        # JWT, hashing passwords
│   │   ├── crypto.ts      # Interactions blockchain
│   │   └── email.ts       # Envoi d'emails
│   ├── pages/             # API routes
│   │   └── api/
│   │       ├── auth/      # Login, register
│   │       ├── properties/
│   │       ├── payments/
│   │       └── reservations/
│   ├── styles/            # CSS global
│   │   └── globals.css
│   └── types/             # TypeScript definitions
│       └── index.ts
├── prisma/
│   ├── schema.prisma      # Database schema
│   └── migrations/        # Database migrations
├── public/                # Fichiers statiques
│   └── images/
├── docker-compose.yml     # Docker compose config
├── Dockerfile             # Production build
├── .env.example           # Template variables
├── .eslintrc.json        # ESLint config
├── next.config.js        # Next.js config
├── tsconfig.json         # TypeScript config
├── tailwind.config.ts    # Tailwind config
├── package.json
├── README.md             # Ce fichier
└── IMPLEMENTATION.md     # Guide détaillé d'implémentation
```

## 💻 Guide d'Utilisation

### Pour les Visiteurs
1. Visiter la page d'accueil pour voir les propriétés
2. Parcourir et filtrer les propriétés
3. Cliquer sur une propriété pour plus de détails
4. Voir les photos et amenités
5. Consulter la localisation

### Pour les Acheteurs
1. S'inscrire/Se connecter
2. Ajouter des propriétés aux favoris
3. Réserver une visite
4. Payer en crypto (Bitcoin, Ethereum, USDC)
5. Suivre l'historique des transactions
6. Recevoir confirmations par email

### Paiement en Crypto
1. Sélectionner une propriété
2. Choisir le type (dépôt 10% ou paiement complet)
3. Sélectionner la crypto-monnaie
4. Copier l'adresse du portefeuille
5. Envoyer le montant exact depuis votre wallet
6. Attendre la confirmation blockchain (10-30 min)
7. Recevoir confirmation et contrat

## 🚀 Déploiement

### Vercel (Recommandé)
```bash
npm install -g vercel
vercel
```

### Heroku
```bash
heroku create zanzibar-real-estate
git push heroku main
```

### AWS EC2
```bash
# Build docker image
docker build -t zanzibar-real-estate .

# Push to ECR
aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin xxx.dkr.ecr.us-east-1.amazonaws.com
docker tag zanzibar-real-estate:latest xxx.dkr.ecr.us-east-1.amazonaws.com/zanzibar-real-estate:latest
docker push xxx.dkr.ecr.us-east-1.amazonaws.com/zanzibar-real-estate:latest
```

### Production Checklist
- [ ] Variables d'env configurées sur serveur
- [ ] Base de données en production
- [ ] SSL/HTTPS activé
- [ ] Domain custom configuré
- [ ] Email transactionnel testé
- [ ] Paiements testés sur Testnet
- [ ] Backups automatiques
- [ ] Monitoring activé
- [ ] Logs centralisés
- [ ] CDN configuré

## 🔒 Sécurité

### Best Practices Implémentées
- ✅ Passwords hashés avec bcrypt
- ✅ JWT tokens avec expiration
- ✅ CORS configuré
- ✅ Input validation et sanitization
- ✅ SQL injection prevention (Prisma)
- ✅ XSS protection via React
- ✅ CSRF tokens sur formulaires
- ✅ Rate limiting sur APIs
- ✅ Encrypted environment variables
- ✅ Smart contracts audités

### Pour la Production
1. **HTTPS obligatoire**
   ```nginx
   server {
       listen 443 ssl;
       ssl_certificate /path/to/cert.pem;
       ssl_certificate_key /path/to/key.pem;
   }
   ```

2. **Rate Limiting**
   ```typescript
   // Implémenté dans API routes
   ```

3. **Sentry pour Error Tracking**
   ```bash
   npm install @sentry/nextjs
   ```

## 📊 Performance

### Optimisations
- Image compression & lazy loading
- Code splitting automatique Next.js
- Caching stratégies
- Database indexing
- CDN pour assets statiques
- API response compression
- Browser caching headers

### Monitoring
- Google Analytics
- Sentry error tracking
- DataDog APM
- CloudWatch logs
- Uptime monitoring

## 🧪 Testing

```bash
# Unit tests
npm run test

# E2E tests
npm run test:e2e

# Coverage
npm run test:coverage
```

## 📝 API Documentation

Voir [API_DOCS.md](./API_DOCS.md) pour:
- Endpoints détaillés
- Paramètres et exemples
- Codes de réponse
- Authentification

## 🤝 Contributing

1. Fork le projet
2. Créer une branche feature (`git checkout -b feature/AmazingFeature`)
3. Commit les changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## 📞 Support & Contact

- **Email**: info@zanzibar-realestate.com
- **Phone**: +255 XXX XXX XXX
- **Website**: https://zanzibar-realestate.com
- **Discord**: [Invite Link]
- **Issues**: GitHub Issues

## 📄 License

Ce projet est sous license MIT. Voir [LICENSE.md](LICENSE.md) pour plus de détails.

## ⚖️ Disclaimer

Ce projet est fourni à titre informatif. Les transactions crypto comportent des risques. Toujours tester sur Testnet avant production. Consulter un avocat pour les implications légales immobilières.

---

**Développé avec ❤️ pour Zanzibar** | © 2026 Zanzibar Real Estate
