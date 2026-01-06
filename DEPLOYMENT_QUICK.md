# 🚀 DÉPLOIEMENT RAPIDE - Zanzibar Real Estate

## ⚡ 3 Étapes pour Déployer

### Étape 1️⃣: Installer Node.js (5 minutes)

**⚠️ IMPORTANT**: Vous DEVEZ d'abord installer Node.js

Allez à: https://nodejs.org/
- Télécharger LTS (v20 ou plus récent)
- Installer normalement
- Redémarrer votre PC

Vérifier:
```bash
node --version
npm --version
```

---

### Étape 2️⃣: Préparer le Projet (3 minutes)

```bash
# Ouvrir PowerShell dans le dossier du projet
cd c:\Dev\zanzibar-real-estate

# Exécuter le setup
.\setup.ps1

# Ou manuellement:
npm install
cp .env.example .env.local
# Éditer .env.local avec vos clés
```

---

### Étape 3️⃣: Choisir Plateforme de Déploiement

### 🟢 **OPTION A: VERCEL** (Recommandée - 5 min)

Le plus facile et le plus rapide.

```bash
# 1. Installer Vercel CLI
npm install -g vercel

# 2. Déployer
vercel

# 3. Suivre les instructions
#    - Créer compte si nécessaire
#    - Autoriser accès GitHub
#    - Confirmer settings
#    - Déployer
```

**Résultat**: Site live en ~2 minutes à `your-project.vercel.app`

#### Configurer variables d'environnement dans Vercel:
1. Dashboard → Settings → Environment Variables
2. Ajouter toutes les variables de `.env.local`

---

### 🔵 **OPTION B: HEROKU** (5 min)

Simple avec database incluse.

```bash
# 1. Installer Heroku CLI
choco install heroku-cli
# Ou télécharger: https://devcenter.heroku.com/articles/heroku-cli

# 2. Se connecter
heroku login

# 3. Créer app
heroku create zanzibar-real-estate

# 4. Ajouter database
heroku addons:create heroku-postgresql:standard-0

# 5. Déployer
git push heroku main

# 6. Migrations
heroku run npm run db:migrate

# 7. Voir l'app
heroku open
```

**Résultat**: Site live en ~3 minutes à `zanzibar-real-estate.herokuapp.com`

---

### 🟠 **OPTION C: DOCKER** (10 min)

Pour hébergement sur VPS ou cloud.

```bash
# 1. Installer Docker
# Télécharger: https://www.docker.com/products/docker-desktop

# 2. Créer .env
cp .env.example .env

# 3. Lancer
docker-compose up -d

# 4. Migrations
docker-compose exec app npm run db:migrate

# Site disponible à http://localhost:3000
```

---

## 📋 CHECKLIST PRÉ-DÉPLOIEMENT

### Code & Git
- [ ] Tout le code commité
- [ ] `.env.local` pas dans Git
- [ ] `.gitignore` à jour
- [ ] Pas d'erreurs ESLint (`npm run lint`)

### Configuration
- [ ] `.env` complètement configuré
  - [ ] DATABASE_URL
  - [ ] JWT_SECRET (généré aléatoire)
  - [ ] INFURA_KEY
  - [ ] PRIVATE_KEY
  - [ ] SMTP settings
- [ ] Database créée et accessible

### Sécurité
- [ ] JWT_SECRET changé (pas le default)
- [ ] Pas de secrets en dur dans le code
- [ ] HTTPS forcé (vérifié en production)
- [ ] Connexion database sécurisée

### Fonctionnalités
- [ ] Tests locaux OK (`npm run dev`)
- [ ] Paiements en Testnet OK
- [ ] Authentification fonctionne
- [ ] Dashboard accessible

---

## 🔑 EXEMPLE .env.local

```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/zanzibar_db"

# Auth
JWT_SECRET="generate_random_string_here_min_32_chars"
NEXTAUTH_SECRET="another_random_string_min_32_chars"
NEXTAUTH_URL="http://localhost:3000"

# Crypto (Testnet)
INFURA_KEY="https://goerli.infura.io/v3/YOUR_API_KEY"
PRIVATE_KEY="0xyour_test_wallet_private_key"

# Email
SMTP_HOST="smtp.gmail.com"
SMTP_PORT=587
SMTP_USER="your-email@gmail.com"
SMTP_PASSWORD="your_app_password"

# Optional: AWS S3
AWS_ACCESS_KEY_ID="your_aws_key"
AWS_SECRET_ACCESS_KEY="your_aws_secret"
AWS_REGION="us-east-1"
AWS_BUCKET_NAME="zanzibar-properties"
```

---

## 🌐 CONFIGURER DOMAINE (Après déploiement)

1. **Acheter domaine**
   - Namecheap, GoDaddy, Google Domains, Hostinger

2. **Configurer DNS** (Exemple pour Vercel)
   ```
   A Record:    @        → 76.76.19.0
   CNAME Record: www     → cname.vercel-dns.com
   ```

3. **Ajouter à Vercel**
   - Dashboard → Settings → Domains
   - Ajouter votre domaine
   - Vérifier DNS
   - Auto-renew SSL ✅

---

## 📊 COMPARAISON RAPIDE

| Platform | Coût | Durée | Difficulté |
|----------|------|-------|-----------|
| **Vercel** | Gratuit | 5 min | Très facile |
| **Heroku** | $5-25/mois | 5 min | Facile |
| **Docker** | Variable | 10 min | Moyen |
| **AWS** | $20+/mois | 30 min | Difficile |

**👉 Recommandé**: **VERCEL** pour démarrer

---

## 🎯 APRÈS DÉPLOIEMENT

### 1. Vérifier que tout fonctionne
```bash
# Visiter le site
https://your-site.vercel.app

# Tester l'authentification
# Créer un compte de test

# Tester les paiements (Testnet seulement)
# Vérifier les transactions dans Etherscan
```

### 2. Configurer production
```bash
# Passer Testnet → Mainnet (APRÈS avoir tout validé)
# Dans .env.local changez:
INFURA_KEY="https://mainnet.infura.io/v3/YOUR_API_KEY"

# Redéployer
git push origin main  # Vercel re-déploie auto
# ou
git push heroku main  # Pour Heroku
```

### 3. Monitoring
- **Vercel**: Analytics & Logs intégrés
- **Heroku**: Logs via `heroku logs --tail`
- **Docker**: `docker-compose logs -f`

---

## 🆘 TROUBLESHOOTING

### "Module not found"
```bash
rm -rf node_modules package-lock.json
npm install
```

### "Database connection refused"
```bash
# Vérifier DATABASE_URL dans .env
# S'assurer PostgreSQL tourne
# Tester la connexion
```

### "Build failed"
```bash
npm run lint
npm run build

# Si erreurs, les corriger et re-build
```

### "Port 3000 déjà utilisé"
```bash
npm run dev -- -p 3001
```

---

## 📞 BESOIN D'AIDE?

📖 Documentation complète: Lire `DEPLOYMENT.md`
🔍 Vérifier les logs:
- Vercel: Dashboard → Logs
- Heroku: `heroku logs --tail`
- Docker: `docker-compose logs -f app`

---

## ✅ RÉSUMÉ

```bash
# 1. Installer Node.js (https://nodejs.org/)

# 2. Setup
.\setup.ps1

# 3. Choisir plateforme:
# - VERCEL (recommandé): vercel
# - HEROKU: heroku create && git push heroku main
# - DOCKER: docker-compose up -d

# 4. Configurer variables d'environnement dans la plateforme

# 5. Déployer!

# 🎉 Site live en 5-10 minutes!
```

---

**Prêt à déployer?** Choisissez une option ci-dessus et commencez! 🚀
