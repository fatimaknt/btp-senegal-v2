import { CATEGORIES } from './categories';
export const MOCK_CATEGORIES = CATEGORIES.map(cat => ({
    id: cat.id,
    name: cat.name,
    icon: cat.icon,
    color: cat.color,
    created_at: new Date().toISOString()
}));
export const MOCK_ENTERPRISES = [
    {
        id: '1',
        name: 'SENEGAL CONSTRUCTION',
        description: 'Entreprise leader dans la construction et le gros œuvre au Sénégal. Spécialisée dans les bâtiments résidentiels et commerciaux.',
        category: MOCK_CATEGORIES[0],
        address: 'Rue 10 x Corniche Ouest, Almadies',
        city: 'Dakar',
        phone: '+221 33 869 15 20',
        email: 'contact@senegalconstruction.sn',
        website: 'https://senegalconstruction.sn',
        coordinates: { lat: 14.7167, lng: -17.4833 },
        logo_url: '/images/logos/senegal-construction.png',
        images: [
            '/images/enterprises/sc-1.jpg',
            '/images/enterprises/sc-2.jpg',
            '/images/enterprises/sc-3.jpg'
        ],
        rating: 4.8,
        review_count: 127,
        is_verified: true,
        is_active: true,
        working_hours: {
            monday: { isOpen: true, openTime: '08:00', closeTime: '18:00' },
            tuesday: { isOpen: true, openTime: '08:00', closeTime: '18:00' },
            wednesday: { isOpen: true, openTime: '08:00', closeTime: '18:00' },
            thursday: { isOpen: true, openTime: '08:00', closeTime: '18:00' },
            friday: { isOpen: true, openTime: '08:00', closeTime: '18:00' },
            saturday: { isOpen: true, openTime: '08:00', closeTime: '13:00' },
            sunday: { isOpen: false }
        },
        services: ['Construction neuve', 'Rénovation', 'Extension', 'Expertise', 'Suivi de chantier'],
        owner_id: 'user-1',
        created_at: '2024-01-15T10:30:00Z',
        updated_at: '2024-03-20T14:15:00Z'
    },
    {
        id: '2',
        name: 'PLOMBERIE MODERNE DAKAR',
        description: 'Votre partenaire de confiance pour tous vos travaux de plomberie et sanitaire. Intervention rapide 24h/7j.',
        category: MOCK_CATEGORIES[1],
        address: 'Avenue Bourguiba, Médina',
        city: 'Dakar',
        phone: '+221 77 123 45 67',
        email: 'info@plomberiemoderne.sn',
        website: 'https://plomberiemoderne.sn',
        coordinates: { lat: 14.6928, lng: -17.4467 },
        logo_url: '/images/logos/plomberie-moderne.png',
        images: [
            '/images/enterprises/pm-1.jpg',
            '/images/enterprises/pm-2.jpg'
        ],
        rating: 4.5,
        review_count: 89,
        is_verified: true,
        is_active: true,
        working_hours: {
            monday: { isOpen: true, openTime: '07:30', closeTime: '19:00' },
            tuesday: { isOpen: true, openTime: '07:30', closeTime: '19:00' },
            wednesday: { isOpen: true, openTime: '07:30', closeTime: '19:00' },
            thursday: { isOpen: true, openTime: '07:30', closeTime: '19:00' },
            friday: { isOpen: true, openTime: '07:30', closeTime: '19:00' },
            saturday: { isOpen: true, openTime: '08:00', closeTime: '16:00' },
            sunday: { isOpen: true, openTime: '09:00', closeTime: '15:00' }
        },
        services: ['Dépannage urgent', 'Installation sanitaire', 'Réparation canalisations', 'Détartrage', 'Maintenance'],
        owner_id: 'user-2',
        created_at: '2024-02-01T09:15:00Z',
        updated_at: '2024-03-18T11:30:00Z'
    },
    {
        id: '3',
        name: 'ELECTRO PLUS SÉNÉGAL',
        description: 'Spécialiste en installation électrique, domotique et énergie solaire. Solutions innovantes et durables.',
        category: MOCK_CATEGORIES[2],
        address: 'Zone industrielle de Pikine',
        city: 'Pikine',
        phone: '+221 33 955 78 90',
        email: 'contact@electroplus.sn',
        coordinates: { lat: 14.7645, lng: -17.3894 },
        images: [
            '/images/enterprises/ep-1.jpg',
            '/images/enterprises/ep-2.jpg',
            '/images/enterprises/ep-3.jpg'
        ],
        rating: 4.7,
        review_count: 156,
        is_verified: true,
        is_active: true,
        working_hours: {
            monday: { isOpen: true, openTime: '08:00', closeTime: '17:30' },
            tuesday: { isOpen: true, openTime: '08:00', closeTime: '17:30' },
            wednesday: { isOpen: true, openTime: '08:00', closeTime: '17:30' },
            thursday: { isOpen: true, openTime: '08:00', closeTime: '17:30' },
            friday: { isOpen: true, openTime: '08:00', closeTime: '17:30' },
            saturday: { isOpen: false },
            sunday: { isOpen: false }
        },
        services: ['Installation électrique', 'Panneaux solaires', 'Domotique', 'Mise aux normes', 'Dépannage'],
        owner_id: 'user-3',
        created_at: '2024-01-20T16:45:00Z',
        updated_at: '2024-03-22T08:20:00Z'
    },
    {
        id: '4',
        name: 'PEINTURE & DÉCO THIÈS',
        description: 'Artisans peintres professionnels. Peinture décorative, façades, et conseils en décoration intérieure.',
        category: MOCK_CATEGORIES[3],
        address: 'Quartier Médina Fall, Thiès',
        city: 'Thiès',
        phone: '+221 77 987 65 43',
        email: 'contact@peinturedeco.sn',
        coordinates: { lat: 14.7886, lng: -16.9260 },
        images: [
            '/images/enterprises/pd-1.jpg',
            '/images/enterprises/pd-2.jpg'
        ],
        rating: 4.3,
        review_count: 67,
        is_verified: false,
        is_active: true,
        working_hours: {
            monday: { isOpen: true, openTime: '08:00', closeTime: '18:00' },
            tuesday: { isOpen: true, openTime: '08:00', closeTime: '18:00' },
            wednesday: { isOpen: true, openTime: '08:00', closeTime: '18:00' },
            thursday: { isOpen: true, openTime: '08:00', closeTime: '18:00' },
            friday: { isOpen: true, openTime: '08:00', closeTime: '18:00' },
            saturday: { isOpen: true, openTime: '08:00', closeTime: '12:00' },
            sunday: { isOpen: false }
        },
        services: ['Peinture intérieure', 'Peinture extérieure', 'Décoration', 'Papier peint', 'Enduits'],
        owner_id: 'user-4',
        created_at: '2024-02-10T12:00:00Z',
        updated_at: '2024-03-15T15:45:00Z'
    },
    {
        id: '5',
        name: 'CLIMATISATION CONFORT',
        description: 'Installation et maintenance de systèmes de climatisation pour particuliers et professionnels.',
        category: MOCK_CATEGORIES[6],
        address: 'Route de Rufisque, Keur Massar',
        city: 'Rufisque',
        phone: '+221 70 145 89 32',
        email: 'info@climconfort.sn',
        coordinates: { lat: 14.7085, lng: -17.2675 },
        images: [
            '/images/enterprises/cc-1.jpg'
        ],
        rating: 4.6,
        review_count: 94,
        is_verified: true,
        is_active: true,
        working_hours: {
            monday: { isOpen: true, openTime: '08:30', closeTime: '18:30' },
            tuesday: { isOpen: true, openTime: '08:30', closeTime: '18:30' },
            wednesday: { isOpen: true, openTime: '08:30', closeTime: '18:30' },
            thursday: { isOpen: true, openTime: '08:30', closeTime: '18:30' },
            friday: { isOpen: true, openTime: '08:30', closeTime: '18:30' },
            saturday: { isOpen: true, openTime: '09:00', closeTime: '15:00' },
            sunday: { isOpen: false }
        },
        services: ['Installation clim', 'Maintenance préventive', 'Dépannage', 'Ventilation', 'Froid commercial'],
        owner_id: 'user-5',
        created_at: '2024-01-25T14:20:00Z',
        updated_at: '2024-03-19T10:10:00Z'
    }
];
export const MOCK_REVIEWS = [
    {
        id: '1',
        enterprise_id: '1',
        user_id: 'user-10',
        rating: 5,
        comment: 'Excellent travail ! Équipe professionnelle et respectueuse des délais. Je recommande vivement.',
        is_verified: true,
        created_at: '2024-03-15T10:30:00Z',
        user: {
            id: 'user-10',
            name: 'Amadou Diallo',
            avatar_url: '/images/avatars/amadou.jpg'
        }
    },
    {
        id: '2',
        enterprise_id: '1',
        user_id: 'user-11',
        rating: 4,
        comment: 'Très satisfait de la construction de ma maison. Quelques petits détails à revoir mais dans l\'ensemble parfait.',
        is_verified: true,
        created_at: '2024-03-10T15:45:00Z',
        user: {
            id: 'user-11',
            name: 'Fatou Sall',
            avatar_url: '/images/avatars/fatou.jpg'
        }
    },
    {
        id: '3',
        enterprise_id: '2',
        user_id: 'user-12',
        rating: 5,
        comment: 'Intervention rapide pour une fuite d\'eau. Tarifs corrects et travail de qualité.',
        is_verified: true,
        created_at: '2024-03-12T08:20:00Z',
        user: {
            id: 'user-12',
            name: 'Ousmane Ndiaye',
            avatar_url: '/images/avatars/ousmane.jpg'
        }
    }
];
export function getEnterprisesByCategory(categoryId) {
    return MOCK_ENTERPRISES.filter(enterprise => enterprise.category.id === categoryId);
}
export function getEnterprisesByCity(city) {
    return MOCK_ENTERPRISES.filter(enterprise => enterprise.city.toLowerCase().includes(city.toLowerCase()));
}
export function searchEnterprises(query) {
    const searchTerm = query.toLowerCase();
    return MOCK_ENTERPRISES.filter(enterprise => enterprise.name.toLowerCase().includes(searchTerm) ||
        enterprise.description.toLowerCase().includes(searchTerm) ||
        enterprise.services.some(service => service.toLowerCase().includes(searchTerm)) ||
        enterprise.category.name.toLowerCase().includes(searchTerm));
}
