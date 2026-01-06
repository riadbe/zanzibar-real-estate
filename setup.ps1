# setup.ps1 - Script de setup pour Windows

Write-Host "🚀 Zanzibar Real Estate - Setup Automatisé" -ForegroundColor Cyan
Write-Host "=========================================="
Write-Host ""

# Vérifier Node.js
Write-Host "⏳ Vérification de Node.js..." -ForegroundColor Yellow
$nodeVersion = node --version 2>$null
if ($null -eq $nodeVersion) {
    Write-Host "❌ Node.js n'est pas installé" -ForegroundColor Red
    Write-Host "📥 Télécharger depuis: https://nodejs.org/" -ForegroundColor Cyan
    exit 1
}

Write-Host "✅ Node.js détecté: $nodeVersion" -ForegroundColor Green
Write-Host ""

# Vérifier npm
Write-Host "⏳ Vérification de npm..." -ForegroundColor Yellow
$npmVersion = npm --version 2>$null
if ($null -eq $npmVersion) {
    Write-Host "❌ npm n'est pas installé" -ForegroundColor Red
    exit 1
}

Write-Host "✅ npm détecté: $npmVersion" -ForegroundColor Green
Write-Host ""

# Installer dépendances
Write-Host "📦 Installation des dépendances..." -ForegroundColor Yellow
npm install
if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Dépendances installées" -ForegroundColor Green
} else {
    Write-Host "❌ Erreur lors de l'installation" -ForegroundColor Red
    exit 1
}
Write-Host ""

# Créer .env.local
if (-not (Test-Path ".env.local")) {
    Write-Host "📝 Création du fichier .env.local..." -ForegroundColor Yellow
    Copy-Item ".env.example" ".env.local"
    Write-Host "⚠️  Veuillez éditer .env.local avec vos variables:" -ForegroundColor Yellow
    Write-Host "   - DATABASE_URL" -ForegroundColor Cyan
    Write-Host "   - JWT_SECRET" -ForegroundColor Cyan
    Write-Host "   - INFURA_KEY" -ForegroundColor Cyan
    Write-Host "   - Autres variables API" -ForegroundColor Cyan
    Write-Host ""
}

# Proposer migration database
$response = Read-Host "Voulez-vous exécuter les migrations de base de données? (y/n)"
if ($response -eq "y") {
    Write-Host "🗄️  Exécution des migrations..." -ForegroundColor Yellow
    npm run db:migrate
    if ($LASTEXITCODE -eq 0) {
        Write-Host "✅ Migrations terminées" -ForegroundColor Green
    } else {
        Write-Host "⚠️  Migrations échouées - Vérifiez votre DATABASE_URL" -ForegroundColor Yellow
    }
}

Write-Host ""
Write-Host "✅ Setup terminé avec succès!" -ForegroundColor Green
Write-Host ""
Write-Host "🚀 Pour démarrer:" -ForegroundColor Cyan
Write-Host "   npm run dev" -ForegroundColor Yellow
Write-Host ""
Write-Host "L'app sera disponible à: http://localhost:3000" -ForegroundColor Cyan
