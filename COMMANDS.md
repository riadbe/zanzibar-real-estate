#!/bin/bash

# Zanzibar Real Estate - NPM Scripts

## 🚀 COMMANDES DE DÉMARRAGE

### Développement
npm run dev
# Démarre le serveur de développement sur http://localhost:3000
# Actif reload automatique des modifications

### Production
npm run build
# Build pour production (optimisé et minifié)

npm start
# Démarre le serveur de production (après build)

---

## 🧪 LINTING & TESTS

### ESLint
npm run lint
# Vérifier les erreurs et warnings ESLint

npm run lint --fix
# Corriger automatiquement les erreurs ESLint

---

## 🗄️ BASE DE DONNÉES

### Prisma
npm run db:migrate
# Exécuter les migrations de base de données
# À utiliser après avoir modifié schema.prisma

npm run db:seed
# Remplir la base de données avec des données de test

npm run db:studio
# Ouvrir Prisma Studio pour visualiser/gérer la DB
# Interface graphique sur http://localhost:5555

npm run db:push
# Synchroniser le schéma Prisma avec la base

npm run db:reset
# Réinitialiser complètement la base de données
# ⚠️ DESTRUCTIVE - supprime toutes les données

---

## 📦 GESTION DES DÉPENDANCES

### Installation
npm install
# Installer toutes les dépendances du package.json

npm install <package-name>
# Installer un nouveau package

npm install --save-dev <package-name>
# Installer un package de développement uniquement

### Mise à jour
npm update
# Mettre à jour tous les packages

npm outdated
# Voir les packages qui peuvent être mis à jour

### Audit de sécurité
npm audit
# Vérifier les vulnérabilités

npm audit fix
# Corriger les vulnérabilités automatiquement

---

## 🐳 DOCKER

### Lancer avec Docker Compose
docker-compose up
# Démarre les services (PostgreSQL, Redis, App)

docker-compose down
# Arrête les services

docker-compose logs app
# Voir les logs de l'application

docker-compose ps
# Voir l'état des services

---

## 📝 AUTRES COMMANDES

### Vérifier la config Next.js
npm run lint
# Vérifier les erreurs Next.js

### Générer un type TypeScript
# Modifer prisma/schema.prisma
npm run db:push
# Regenerates @prisma/client types

---

## 🔑 VARIABLES D'ENVIRONNEMENT RECOMMANDÉES

Pour développement, copier .env.example en .env.local et configurer:

DATABASE_URL=postgresql://localhost:5432/zanzibar_db
JWT_SECRET=your_dev_secret_key
NEXTAUTH_SECRET=your_dev_nextauth_secret
INFURA_KEY=your_infura_test_key
PRIVATE_KEY=your_test_wallet_key

---

## 📚 RESSOURCES

Documentation:
- README.md - Vue d'ensemble
- IMPLEMENTATION.md - Guide détaillé
- CHECKLIST.md - Tâches complétées
- WELCOME.md - Bienvenue

Code:
- src/app/ - Pages & routes
- src/components/ - Composants
- src/lib/ - Utilitaires
- src/pages/api/ - API routes

---

## 🎯 WORKFLOW TYPIQUE

1. npm install
   → Installer les dépendances

2. Configurer .env.local
   → Ajouter DATABASE_URL, clés API, etc.

3. npm run dev
   → Démarrer le serveur de développement

4. Ouvrir http://localhost:3000
   → Voir le site en action

5. Modifier les fichiers dans src/
   → Hot reload automatique

6. npm run lint
   → Vérifier les erreurs avant commit

7. Commit et push
   → Git push déclenche le déploiement

---

## 🚨 TROUBLESHOOTING

### "Module not found"
→ npm install
→ Supprimer node_modules: rm -rf node_modules
→ Réinstaller: npm install

### "Cannot find database"
→ Vérifier DATABASE_URL dans .env.local
→ S'assurer PostgreSQL est en cours d'exécution
→ npm run db:migrate

### "Port 3000 déjà utilisé"
→ npm run dev -- -p 3001
→ Utiliser un port différent

### "Erreurs TypeScript"
→ npm run lint
→ Vérifier les types
→ Redémarrer le serveur

---

## 📞 SUPPORT

Pour plus d'aide:
- Lire README.md
- Consulter IMPLEMENTATION.md
- Vérifier les commentaires dans le code
- Créer une GitHub Issue

---

Développé avec ❤️ pour Zanzibar
© 2026 Zanzibar Real Estate
