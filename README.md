# 🏗️ Annuaire BTP Sénégal

L'annuaire digital de référence pour les professionnels du BTP au Sénégal.

## 🎯 Aperçu du projet

**Annuaire BTP Sénégal** est une plateforme moderne qui connecte les clients avec les meilleurs professionnels du bâtiment et des travaux publics au Sénégal. Plus de 1000 entreprises certifiées pour tous vos projets de construction, rénovation et aménagement.

### ✨ Fonctionnalités principales

- 🔍 **Recherche avancée** avec filtres géographiques et par spécialité
- 🏢 **Fiches entreprises détaillées** avec avis clients et galeries photos
- 🗺️ **Géolocalisation** et cartes interactives
- ⭐ **Système d'avis** et notations vérifiées
- 📱 **Design responsive** optimisé mobile-first
- 🎨 **Animations fluides** avec Framer Motion
- 🛡️ **Entreprises certifiées** et vérifiées

## 🛠️ Stack technique

### Frontend
- **React 18** avec TypeScript
- **Vite** pour le build ultra-rapide
- **Material-UI (MUI)** pour les composants UI
- **Framer Motion** pour les animations
- **React Router DOM v6** pour la navigation
- **Lucide React** pour les icônes

### Backend & Base de données
- **Supabase** (PostgreSQL + Auth + Storage)
- **Row Level Security** pour la sécurité
- **Real-time subscriptions**

### Cartographie
- **Leaflet** avec React Leaflet
- **Géolocalisation** et recherche par proximité

### Déploiement
- **Frontend**: Vercel (gratuit)
- **Backend**: Supabase (gratuit jusqu'à 500MB)

## 🚀 Installation et configuration

### Prérequis
- Node.js 18+ 
- npm ou yarn
- Compte Supabase (gratuit)

### 1. Cloner le projet
```bash
git clone https://github.com/fatimaknt/btp-senegal.git
cd btp-senegal
```

### 2. Installer les dépendances
```bash
npm install
```

### 3. Configuration Supabase

1. Créer un projet sur [supabase.com](https://supabase.com)
2. Copier le fichier d'environnement :
```bash
cp env.example .env
```

3. Remplir les variables d'environnement :
```env
VITE_SUPABASE_URL=https://votre-project.supabase.co
VITE_SUPABASE_ANON_KEY=votre-clé-anonyme
```

### 4. Lancer le projet
```bash
npm run dev
```

Le site sera accessible sur `http://localhost:5173`

## 📂 Structure du projet

```
src/
├── components/          # Composants réutilisables
│   ├── ui/             # Composants UI de base
│   ├── layout/         # Header, Footer, Navigation
│   ├── enterprise/     # Composants spécifiques aux entreprises
│   ├── maps/           # Composants de cartographie
│   └── animations/     # Composants d'animation
├── pages/              # Pages de l'application
│   ├── Home/          # Page d'accueil
│   ├── Directory/     # Annuaire des entreprises
│   ├── Enterprise/    # Fiche entreprise
│   ├── Auth/          # Authentification
│   └── Blog/          # Blog et actualités
├── hooks/              # Hooks React personnalisés
├── lib/                # Utilitaires et configuration
├── types/              # Types TypeScript
├── data/               # Données statiques et mock
└── styles/             # Styles globaux
```

## 🎨 Thème et couleurs

Le design s'inspire des couleurs du drapeau sénégalais :

- **Orange BTP** (#f97316) - Couleur principale, énergie
- **Vert Sénégal** (#00853f) - Croissance, nature
- **Blanc** (#ffffff) - Pureté, professionnalisme
- **Gris foncé** (#1e293b) - Élégance, sérieux

## 🚀 Déploiement

### Vercel (Recommandé)
```bash
npm install -g vercel
vercel
```

### Build manuel
```bash
npm run build
# Servir le dossier dist/
```

## 📱 Fonctionnalités à venir

- [ ] Application mobile (React Native)
- [ ] Système de messagerie intégrée
- [ ] Devis en ligne
- [ ] Paiements intégrés (Wave, Orange Money)
- [ ] API publique pour développeurs
- [ ] Mode sombre
- [ ] Support multilingue (Français/Wolof)

## 🤝 Contribution

Les contributions sont les bienvenues ! Consultez le guide de contribution pour plus de détails.

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

## 👨‍💻 Auteur

**Fatima Kante** - [@fatimaknt](https://github.com/fatimaknt)

---

*Développé avec ❤️ pour le secteur BTP au Sénégal 🇸🇳*