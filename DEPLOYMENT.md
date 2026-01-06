# 🚀 GUIDE DE DÉPLOIEMENT - Zanzibar Real Estate

## 📋 Options de Déploiement

### 1. **VERCEL** ✨ (Recommandé - Gratuit/Facile)
### 2. **HEROKU** (Gratuit avec limitations)
### 3. **AWS** (Scalable mais complexe)
### 4. **DOCKER** (Self-hosted)

---

## 🟢 OPTION 1: VERCEL (Recommandé)

### Avantages
✅ Next.js natif (créateurs de Next.js)
✅ Déploiement gratuit
✅ Auto-scaling
✅ CDN global
✅ Serverless functions intégrées
✅ Prévisualisations de PR automatiques
✅ 1-clic pour déployer

### Étapes de déploiement

#### A. Préparer Git
```bash
# Initialiser Git
cd c:\Dev\zanzibar-real-estate
git init
git add .
git commit -m "Initial commit: Zanzibar Real Estate"

# Créer repo sur GitHub
# - Aller à https://github.com/new
# - Créer "zanzibar-real-estate"
# - Copier HTTPS URL

git remote add origin https://github.com/YOUR_USERNAME/zanzibar-real-estate.git
git branch -M main
git push -u origin main
```

#### B. Déployer sur Vercel
```bash
# Installer Vercel CLI
npm install -g vercel

# Déployer
vercel

# Suivre les instructions:
# - Connexion au compte Vercel
# - Sélectionner le projet
# - Confirmer les settings
```

#### C. Configurer les variables d'environnement
1. Aller sur [Vercel Dashboard](https://vercel.com/dashboard)
2. Sélectionner le projet
3. Settings → Environment Variables
4. Ajouter:
   ```
   DATABASE_URL=postgresql://...
   JWT_SECRET=your_secret_key
   INFURA_KEY=your_infura_key
   PRIVATE_KEY=0x...
   NEXTAUTH_SECRET=...
   SMTP_HOST=...
   SMTP_USER=...
   SMTP_PASSWORD=...
   ```

#### D. Connecter Database
1. Utiliser [Vercel Postgres](https://vercel.com/docs/storage/vercel-postgres)
   ```bash
   vercel env pull
   npm run db:migrate
   ```

Résultat: 🎉 Site live à `your-project.vercel.app`

---

## 🔵 OPTION 2: HEROKU

### Avantages
✅ Gratuit (tier Eco: $5/mois)
✅ Database PostgreSQL fournie
✅ Simple à mettre à jour
✅ Good pour MVPs

### Étapes de déploiement

#### A. Créer compte Heroku
- Aller à https://www.heroku.com/
- Sign up gratuit

#### B. Installer Heroku CLI
```bash
# Windows
choco install heroku-cli
# ou télécharger: https://devcenter.heroku.com/articles/heroku-cli

# Vérifier installation
heroku --version
```

#### C. Déployer l'app
```bash
# Connexion
heroku login

# Créer app
heroku create zanzibar-real-estate

# Ajouter database
heroku addons:create heroku-postgresql:standard-0

# Pousser le code
git push heroku main

# Exécuter migrations
heroku run npm run db:migrate

# Voir l'app
heroku open
```

#### D. Configurer variables d'environnement
```bash
heroku config:set JWT_SECRET="your_secret"
heroku config:set INFURA_KEY="your_key"
heroku config:set DATABASE_URL="your_postgres_url"
heroku config:set PRIVATE_KEY="0x..."
# ... autres variables
```

#### E. Monitorer
```bash
# Logs en direct
heroku logs --tail

# Infos dyno
heroku ps
```

Résultat: 🎉 Site live à `zanzibar-real-estate.herokuapp.com`

---

## 🟠 OPTION 3: AWS EC2 (Avancé)

### Services AWS requis
- EC2 (Compute)
- RDS (PostgreSQL)
- S3 (Images)
- CloudFront (CDN)
- Route53 (Domaine)

### Étapes (Simplifiées)

#### A. Créer instance EC2
```bash
# 1. AWS Console → EC2
# 2. Launch Instance
#    - AMI: Ubuntu 22.04 LTS
#    - Type: t3.micro (free tier)
#    - Security Group: 80, 443, 3000, 22

# 3. Connect via SSH
ssh -i your-key.pem ec2-user@your-instance.amazonaws.com
```

#### B. Configurer serveur
```bash
# Mises à jour
sudo apt update && sudo apt upgrade -y

# Installer Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs npm

# Installer PostgreSQL
sudo apt install -y postgresql postgresql-contrib

# Installer Nginx
sudo apt install -y nginx

# Installer PM2
sudo npm install -g pm2
```

#### C. Déployer l'app
```bash
# Cloner repo
git clone https://github.com/YOUR_USERNAME/zanzibar-real-estate.git
cd zanzibar-real-estate

# Installer dépendances
npm install

# Configurer .env
nano .env
# Ajouter variables

# Build
npm run build

# Démarrer avec PM2
pm2 start npm --name "zanzibar" -- start

# Sauvegarder
pm2 save
pm2 startup
```

#### D. Configurer Nginx
```nginx
# /etc/nginx/sites-available/zanzibar
server {
    listen 80;
    server_name zanzibar-realestate.com www.zanzibar-realestate.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_cache_bypass $http_upgrade;
    }
}
```

#### E. SSL avec Let's Encrypt
```bash
sudo apt install -y certbot python3-certbot-nginx
sudo certbot --nginx -d zanzibar-realestate.com
```

Résultat: 🎉 Site live à `zanzibar-realestate.com`

---

## 🐳 OPTION 4: DOCKER (Self-Hosted)

### Avec Docker Compose

```bash
# 1. Vérifier Docker
docker --version
docker-compose --version

# 2. Configurer .env
cp .env.example .env
# Éditer .env avec vos variables

# 3. Build et lancer
docker-compose up -d

# 4. Migrations
docker-compose exec app npm run db:migrate

# 5. Voir les logs
docker-compose logs -f app

# 6. Arrêter
docker-compose down
```

### Deployer sur VPS

```bash
# 1. SSH dans VPS
ssh root@your-vps-ip

# 2. Installer Docker
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh

# 3. Cloner repo
git clone https://github.com/YOUR_USERNAME/zanzibar-real-estate.git
cd zanzibar-real-estate

# 4. Déployer
docker-compose up -d
```

---

## 🌐 CONFIGURATION DOMAINE

### 1. Acheter domaine
- Namecheap
- GoDaddy
- Google Domains

### 2. Configurer DNS (exemple Vercel)
```
A Record: @     → 76.76.19.0
CNAME Record: www → cname.vercel-dns.com.
```

### 3. SSL Gratuit
- Vercel: Automatique ✅
- Heroku: Automatique ✅
- AWS/VPS: Let's Encrypt (gratuit) ✅

---

## 🔒 SÉCURITÉ PRÉ-PRODUCTION

Avant de déployer:

```bash
# 1. Vérifier les secrets
grep -r "password" .env.local  # ❌ Ne pas committer

# 2. Vérifier les clés
grep -r "private" src/  # ❌ Jamais en code

# 3. Activer HTTPS
# ✅ Vercel: Automatique
# ✅ Heroku: Automatique
# ✅ AWS/VPS: Let's Encrypt

# 4. Variables d'environnement
# ✅ Ne jamais en .env local
# ✅ Utiliser le système de secrets de la plateforme

# 5. Database
# ✅ Backups automatiques activés
# ✅ Authentification forte
# ✅ Chiffrement SSL
```

---

## 📊 COMPARAISON PLATEFORMES

| Critère | Vercel | Heroku | AWS | Docker |
|---------|--------|--------|-----|--------|
| **Coût** | Gratuit | $5-25 | $20+ | Variable |
| **Facilité** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐ | ⭐⭐⭐ |
| **Performance** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| **Scalabilité** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ |
| **Maintenance** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐ | ⭐⭐ |

**Recommandation**: 🟢 **Vercel** pour MVP/Production rapide

---

## 🛠️ COMMANDES DE DÉPLOIEMENT RAPIDE

### Vercel (1-clic)
```bash
npm install -g vercel
vercel
```

### Heroku (3 lignes)
```bash
heroku create zanzibar-real-estate
git push heroku main
heroku run npm run db:migrate
```

### Docker (2 commandes)
```bash
docker-compose build
docker-compose up -d
```

---

## 📞 SUPPORT POST-DÉPLOIEMENT

### Monitoring
- **Vercel**: Analytics built-in
- **Heroku**: Logs & Performance
- **AWS**: CloudWatch
- **Docker**: Custom logging

### Logs
```bash
# Vercel
vercel logs

# Heroku
heroku logs --tail

# Docker
docker-compose logs -f app

# AWS
ssh ... && tail -f /var/log/app.log
```

### Rollback
```bash
# Vercel: Dashboard click
# Heroku: heroku releases:rollback
# Docker: docker-compose up -d (previous image)
# AWS: Re-deploy previous version
```

---

## ✅ POST-DÉPLOIEMENT CHECKLIST

- [ ] Site accessible
- [ ] HTTPS activé
- [ ] Database connectée
- [ ] Variables d'environnement correctes
- [ ] Emails fonctionnent
- [ ] Paiements en testnet OK
- [ ] Logs moniteurés
- [ ] Backups activés
- [ ] Domain configuré
- [ ] CDN fonctionnel

---

## 🎯 RÉSUMÉ

**Déploiement recommandé**: 🟢 **VERCEL**

```bash
# 1. git push vers GitHub
# 2. Connecter Vercel à GitHub
# 3. Configure variables d'environnement
# 4. Deploy button = Done! ✅

# Temps total: 5-10 minutes
```

---

**Prochaines étapes**: Choisir une plateforme et déployer! 🚀
