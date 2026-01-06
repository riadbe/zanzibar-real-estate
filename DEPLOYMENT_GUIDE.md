# 🚀 DÉPLOIEMENT RAPIDE - Zanzibar Real Estate

## Prérequis
- **Git** : https://git-scm.com/download/win
- **Node.js** : ✅ Déjà installé
- **npm** : ✅ Inclus avec Node.js
- **Vercel CLI** : `npm install -g vercel` (ou `npm i -g vercel`)

## Étapes de déploiement

### 1️⃣ Installer Git (Windows)
Téléchargez depuis : https://git-scm.com/download/win
Installez avec les paramètres par défaut.

### 2️⃣ Ouvrir PowerShell en Admin et naviguer au projet
```powershell
cd C:\Dev\zanzibar-real-estate
```

### 3️⃣ Initialiser Git & Faire un commit
```powershell
git init
git add .
git commit -m "Initial commit - Zanzibar Real Estate website"
```

### 4️⃣ Créer un repo GitHub
**Option A : Via GitHub CLI (recommandé)**
```powershell
# Installer GitHub CLI si absent
npm install -g gh
# Ou télécharger : https://cli.github.com/

# Login et créer repo
gh auth login
gh repo create zanzibar-real-estate --public --source=. --remote=origin --push
```

**Option B : Créer manuellement sur https://github.com/new**
```powershell
git remote add origin https://github.com/YOUR_USERNAME/zanzibar-real-estate.git
git branch -M main
git push -u origin main
```

### 5️⃣ Déployer sur Vercel
```powershell
# Installer Vercel CLI
npm install -g vercel

# Lancer le déploiement (interactif)
vercel login
vercel --prod
```

Lors du déploiement Vercel, il vous demandera les **variables d'environnement**. Copiez-collez depuis votre `.env` local (SAUF `DATABASE_URL` qui doit être une base Postgres externalisée).

### ⚙️ Variables d'environnement requises pour Vercel
```
DATABASE_URL=postgresql://... # Neon / Vercel Postgres / AWS RDS
JWT_SECRET=your_secret_key
NEXTAUTH_SECRET=nextauth_secret
INFURA_KEY=your_infura_key
PRIVATE_KEY=your_wallet_private_key
CONTRACT_ADDRESS=0x...
STRIPE_SECRET_KEY=sk_test_...
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASSWORD=your_app_password
AWS_ACCESS_KEY_ID=your_aws_key
AWS_SECRET_ACCESS_KEY=your_aws_secret
AWS_REGION=us-east-1
AWS_BUCKET_NAME=zanzibar-properties
```

## 🔒 Notes de sécurité
- **Jamais** committer `.env` (il est dans `.gitignore`).
- Utilisez des variables d'environnement Vercel pour les secrets production.
- Changez tous les mots de passe par défaut après le déploiement.

## 📍 Après déploiement
Une fois déployé, Vercel vous retournera une URL publique :
```
https://zanzibar-real-estate.vercel.app
```

Visitez cette URL pour tester votre site en production.

---

**Besoin d'aide ?** Contactez support.vercel.com ou consultez https://nextjs.org/docs/deployment
