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
- **Tailwind CSS** pour le styling
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
\`\`\`bash
git clone <url-du-repo>
cd annuaire-btp-senegal
\`\`\`

### 2. Installer les dépendances
\`\`\`bash
npm install
\`\`\`

### 3. Configuration Supabase

1. Créer un projet sur [supabase.com](https://supabase.com)
2. Copier le fichier d'environnement :
\`\`\`bash
cp env.example .env
\`\`\`

3. Remplir les variables d'environnement :
\`\`\`env
VITE_SUPABASE_URL=https://votre-project.supabase.co
VITE_SUPABASE_ANON_KEY=votre-anon-key
\`\`\`

### 4. Créer le schéma de base de données

Exécuter ces requêtes SQL dans l'éditeur Supabase :

\`\`\`sql
-- Table des catégories
CREATE TABLE categories (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(100) NOT NULL UNIQUE,
  icon VARCHAR(50),
  color VARCHAR(7),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Table des entreprises
CREATE TABLE enterprises (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  category_id UUID REFERENCES categories(id),
  address TEXT NOT NULL,
  city VARCHAR(100) NOT NULL,
  phone VARCHAR(50) NOT NULL,
  email VARCHAR(255),
  website VARCHAR(255),
  coordinates GEOGRAPHY(POINT),
  logo_url TEXT,
  images TEXT[],
  rating FLOAT DEFAULT 0,
  review_count INTEGER DEFAULT 0,
  is_verified BOOLEAN DEFAULT false,
  is_active BOOLEAN DEFAULT true,
  working_hours JSONB,
  services TEXT[],
  owner_id UUID REFERENCES auth.users(id),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Table des avis
CREATE TABLE reviews (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  enterprise_id UUID REFERENCES enterprises(id) ON DELETE CASCADE,
  user_id UUID REFERENCES auth.users(id),
  rating INTEGER CHECK (rating >= 1 AND rating <= 5),
  comment TEXT,
  is_verified BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Politiques de sécurité
ALTER TABLE enterprises ENABLE ROW LEVEL SECURITY;
ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;

-- Lecture publique des entreprises
CREATE POLICY "Enterprises are viewable by everyone" 
ON enterprises FOR SELECT USING (true);

-- Lecture publique des avis
CREATE POLICY "Reviews are viewable by everyone" 
ON reviews FOR SELECT USING (true);
\`\`\`

### 5. Lancer l'application
\`\`\`bash
npm run dev
\`\`\`

L'application sera disponible sur http://localhost:5173

## 📂 Structure du projet

\`\`\`
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
\`\`\`

## 🎨 Thème et couleurs

Le design s'inspire des couleurs du drapeau sénégalais :

- **Vert Sénégal** (#00853f) - Croissance, nature
- **Jaune Sénégal** (#ff0) - Soleil, prospérité  
- **Rouge Sénégal** (#e31b23) - Énergie, détermination
- **Bleu BTP** (#1e40af) - Confiance, professionnalisme
- **Orange accent** (#f97316) - Call-to-action

## 🚀 Déploiement

### Vercel (Recommandé)
\`\`\`bash
npm install -g vercel
vercel
\`\`\`

### Build manuel
\`\`\`bash
npm run build
# Servir le dossier dist/
\`\`\`

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

## 📞 Support

- Email: contact@annuaire-btp.sn
- Discord: [Rejoindre la communauté](#)
- Documentation: [docs.annuaire-btp.sn](#)

---

**Développé avec ❤️ pour le secteur BTP sénégalais**

🇸🇳 **Sunu BTP, sunu plateforme** (Notre BTP, notre plateforme)