// Structure de base de données pour les entreprises
export interface Company {
    id: string
    name: string
    slug: string
    category: string
    description: string
    services: string[]
    address: string
    city: string
    region: string
    poBox?: string
    phone: string
    whatsapp?: string
    email: string
    website?: string
    logo: string
    bannerImage: string
    status: 'Ouvert' | 'Fermé' | 'Fermé temporairement'
    openingHours?: {
        monday?: string
        tuesday?: string
        wednesday?: string
        thursday?: string
        friday?: string
        saturday?: string
        sunday?: string
    }
    coordinates?: {
        latitude: number
        longitude: number
    }
    rating?: {
        overall: number
        cleanliness: number
        service: number
        ambience: number
        price: number
        totalReviews: number
    }
    socialMedia?: {
        facebook?: string
        instagram?: string
        linkedin?: string
        twitter?: string
    }
    createdAt: string
    updatedAt: string
    isVerified: boolean
    isPremium: boolean
}

export interface Review {
    id: string
    companyId: string
    userId: string
    userName: string
    userEmail: string
    title: string
    content: string
    rating: {
        overall: number
        cleanliness: number
        service: number
        ambience: number
        price: number
    }
    images?: string[]
    isVerified: boolean
    createdAt: string
    updatedAt: string
}

export interface ContactMessage {
    id: string
    companyId: string
    name: string
    email: string
    phone: string
    message: string
    status: 'new' | 'read' | 'replied' | 'closed'
    createdAt: string
    updatedAt: string
}

// Données statiques des entreprises (sera remplacé par une vraie base de données)
export const companiesData: Company[] = [
    {
        id: 'emas-construction',
        name: 'EMAS CONSTRUCTION',
        slug: 'emas-construction',
        category: 'BTP',
        description: 'Entreprise spécialisée dans la construction et les travaux publics',
        services: [
            'Construction Résidentielle',
            'Construction Commerciale',
            'Génie Civil',
            'Travaux Publics',
            'Services de Gestion de Projet',
            'Construction Durable',
            'Consultation et Conception',
            'Réhabilitation et Restauration',
            'Assistance Juridique'
        ],
        address: 'Sebikhotane, Quartier Kip-kip sortie 12 de l\'autoroute à péage',
        city: 'Dakar',
        region: 'Dakar',
        poBox: 'B.P. 352 Dakar',
        phone: '78 467 81 33',
        whatsapp: '78 467 81 33',
        email: 'contact@emas-construction.sn',
        logo: '/images/partners/btp.jpg',
        bannerImage: '/images/partners/btp.jpg',
        status: 'Ouvert',
        coordinates: {
            latitude: 14.7167,
            longitude: -17.4677
        },
        rating: {
            overall: 4.5,
            cleanliness: 4.3,
            service: 4.7,
            ambience: 4.2,
            price: 4.1,
            totalReviews: 23
        },
        isVerified: true,
        isPremium: true,
        createdAt: '2024-01-15T10:00:00Z',
        updatedAt: '2024-01-15T10:00:00Z'
    },
    {
        id: 'sococim-industries',
        name: 'SOCOCIM Industries',
        slug: 'sococim-industries',
        category: 'MATÉRIAUX & MATÉRIELS',
        description: 'Leader dans la production de ciment au Sénégal',
        services: [
            'Production de Ciment',
            'Matériaux de Construction',
            'Logistique et Transport',
            'Conseil Technique',
            'Formation Professionnelle'
        ],
        address: 'Km 33 ancienne route de Thiès BP 29, Rufisque',
        city: 'Thiés',
        region: 'Thiés',
        phone: '+221 33 839 88 60',
        email: 'contact@sococim.sn',
        logo: '/images/partners/sococim.jpg',
        bannerImage: '/images/partners/sococim.jpg',
        status: 'Ouvert',
        coordinates: {
            latitude: 14.7833,
            longitude: -16.9167
        },
        rating: {
            overall: 4.8,
            cleanliness: 4.6,
            service: 4.9,
            ambience: 4.5,
            price: 4.7,
            totalReviews: 156
        },
        isVerified: true,
        isPremium: true,
        createdAt: '2024-01-10T08:00:00Z',
        updatedAt: '2024-01-10T08:00:00Z'
    },
    {
        id: 'matoutils',
        name: 'Mat-outils',
        slug: 'matoutils',
        category: 'PLOMBERIE',
        description: 'Spécialiste en matériel de plomberie et outillage',
        services: [
            'Matériel de Plomberie',
            'Outillage Professionnel',
            'Pièces de Rechange',
            'Conseil Technique',
            'Installation et Maintenance'
        ],
        address: 'Dakar, Sénégal',
        city: 'Dakar',
        region: 'Dakar',
        phone: '+221 77 747 51 51',
        email: 'info@matoutils.sn',
        logo: '/images/partners/matoutils.jpg',
        bannerImage: '/images/partners/matoutils.jpg',
        status: 'Ouvert',
        coordinates: {
            latitude: 14.7167,
            longitude: -17.4677
        },
        rating: {
            overall: 4.2,
            cleanliness: 4.0,
            service: 4.4,
            ambience: 4.1,
            price: 4.3,
            totalReviews: 45
        },
        isVerified: true,
        isPremium: false,
        createdAt: '2024-01-12T14:30:00Z',
        updatedAt: '2024-01-12T14:30:00Z'
    },
    {
        id: 'btp-senegal-collage',
        name: 'BTP SENEGAL (Collage)',
        slug: 'btp-senegal-collage',
        category: 'BTP',
        description: 'Entreprise de construction et travaux publics',
        services: [
            'Construction',
            'Travaux Publics',
            'Rénovation',
            'Aménagement',
            'Conseil en Construction'
        ],
        address: 'Dakar, Sénégal',
        city: 'Dakar',
        region: 'Dakar',
        phone: '(+221) 77 123 45 67',
        email: 'contact@btpsenegal.sn',
        logo: '/images/partners/btpsenegal.webp',
        bannerImage: '/images/partners/btpsenegal.webp',
        status: 'Ouvert',
        coordinates: {
            latitude: 14.7167,
            longitude: -17.4677
        },
        rating: {
            overall: 4.0,
            cleanliness: 3.8,
            service: 4.2,
            ambience: 3.9,
            price: 4.1,
            totalReviews: 12
        },
        isVerified: false,
        isPremium: false,
        createdAt: '2024-01-08T16:45:00Z',
        updatedAt: '2024-01-08T16:45:00Z'
    },
    {
        id: 'btp-senegal-excavator',
        name: 'BTP SENEGAL (Excavator)',
        slug: 'btp-senegal-excavator',
        category: 'BTP',
        description: 'Spécialiste en travaux d\'excavation et terrassement',
        services: [
            'Excavation',
            'Terrassement',
            'Fondations',
            'Démolition',
            'Transport de Matériaux'
        ],
        address: 'Dakar, Sénégal',
        city: 'Dakar',
        region: 'Dakar',
        phone: '(+221) 77 234 56 78',
        email: 'info@btpsenegal.sn',
        logo: '/images/partners/btp2.gif',
        bannerImage: '/images/partners/btp2.gif',
        status: 'Ouvert',
        coordinates: {
            latitude: 14.7167,
            longitude: -17.4677
        },
        rating: {
            overall: 4.3,
            cleanliness: 4.1,
            service: 4.5,
            ambience: 4.0,
            price: 4.4,
            totalReviews: 8
        },
        isVerified: false,
        isPremium: false,
        createdAt: '2024-01-05T09:15:00Z',
        updatedAt: '2024-01-05T09:15:00Z'
    },
    {
        id: 'soger-bat-architecture',
        name: 'SOGER BAT - Architecture',
        slug: 'soger-bat-architecture',
        category: 'ARCHITECTURE',
        description: 'Bureau d\'architecture et d\'ingénierie',
        services: [
            'Architecture',
            'Ingénierie',
            'Conception',
            'Plans',
            'Suivi de Chantier',
            'Conseil Architectural'
        ],
        address: 'Dakar, Sénégal',
        city: 'Dakar',
        region: 'Dakar',
        phone: '(+221) 77 345 67 89',
        email: 'contact@sogerbat.sn',
        logo: '/images/partners/archi.webp',
        bannerImage: '/images/partners/archi.webp',
        status: 'Ouvert',
        coordinates: {
            latitude: 14.7167,
            longitude: -17.4677
        },
        rating: {
            overall: 4.6,
            cleanliness: 4.4,
            service: 4.8,
            ambience: 4.5,
            price: 4.3,
            totalReviews: 34
        },
        isVerified: true,
        isPremium: false,
        createdAt: '2024-01-03T11:20:00Z',
        updatedAt: '2024-01-03T11:20:00Z'
    }
]

// Fonctions utilitaires pour la base de données
export const getCompanyById = (id: string): Company | undefined => {
    return companiesData.find(company => company.id === id)
}

export const getCompanyBySlug = (slug: string): Company | undefined => {
    return companiesData.find(company => company.slug === slug)
}

export const getCompaniesByCity = (city: string): Company[] => {
    return companiesData.filter(company =>
        company.city.toLowerCase() === city.toLowerCase()
    )
}

export const getCompaniesByCategory = (category: string): Company[] => {
    return companiesData.filter(company =>
        company.category.toLowerCase() === category.toLowerCase()
    )
}

export const searchCompanies = (query: string): Company[] => {
    const lowercaseQuery = query.toLowerCase()
    return companiesData.filter(company =>
        company.name.toLowerCase().includes(lowercaseQuery) ||
        company.description.toLowerCase().includes(lowercaseQuery) ||
        company.services.some(service => service.toLowerCase().includes(lowercaseQuery))
    )
}

// Structure SQL pour la base de données (exemple)
export const databaseSchema = `
-- Table des entreprises
CREATE TABLE companies (
    id VARCHAR(50) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,
    category VARCHAR(100) NOT NULL,
    description TEXT,
    address TEXT NOT NULL,
    city VARCHAR(100) NOT NULL,
    region VARCHAR(100) NOT NULL,
    po_box VARCHAR(50),
    phone VARCHAR(20) NOT NULL,
    whatsapp VARCHAR(20),
    email VARCHAR(255) NOT NULL,
    website VARCHAR(255),
    logo VARCHAR(255),
    banner_image VARCHAR(255),
    status ENUM('Ouvert', 'Fermé', 'Fermé temporairement') DEFAULT 'Ouvert',
    latitude DECIMAL(10, 8),
    longitude DECIMAL(11, 8),
    overall_rating DECIMAL(2,1) DEFAULT 0,
    total_reviews INT DEFAULT 0,
    is_verified BOOLEAN DEFAULT FALSE,
    is_premium BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Table des services des entreprises
CREATE TABLE company_services (
    id INT AUTO_INCREMENT PRIMARY KEY,
    company_id VARCHAR(50) NOT NULL,
    service_name VARCHAR(255) NOT NULL,
    FOREIGN KEY (company_id) REFERENCES companies(id) ON DELETE CASCADE
);

-- Table des avis
CREATE TABLE reviews (
    id VARCHAR(50) PRIMARY KEY,
    company_id VARCHAR(50) NOT NULL,
    user_id VARCHAR(50),
    user_name VARCHAR(255) NOT NULL,
    user_email VARCHAR(255) NOT NULL,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    overall_rating INT NOT NULL CHECK (overall_rating >= 1 AND overall_rating <= 5),
    cleanliness_rating INT NOT NULL CHECK (cleanliness_rating >= 1 AND cleanliness_rating <= 5),
    service_rating INT NOT NULL CHECK (service_rating >= 1 AND service_rating <= 5),
    ambience_rating INT NOT NULL CHECK (ambience_rating >= 1 AND ambience_rating <= 5),
    price_rating INT NOT NULL CHECK (price_rating >= 1 AND price_rating <= 5),
    is_verified BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (company_id) REFERENCES companies(id) ON DELETE CASCADE
);

-- Table des images d'avis
CREATE TABLE review_images (
    id INT AUTO_INCREMENT PRIMARY KEY,
    review_id VARCHAR(50) NOT NULL,
    image_url VARCHAR(255) NOT NULL,
    FOREIGN KEY (review_id) REFERENCES reviews(id) ON DELETE CASCADE
);

-- Table des messages de contact
CREATE TABLE contact_messages (
    id VARCHAR(50) PRIMARY KEY,
    company_id VARCHAR(50) NOT NULL,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(20),
    message TEXT NOT NULL,
    status ENUM('new', 'read', 'replied', 'closed') DEFAULT 'new',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (company_id) REFERENCES companies(id) ON DELETE CASCADE
);
`
