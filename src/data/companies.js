// Données statiques des entreprises (sera remplacé par une vraie base de données)
export const companiesData = [
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
        city: 'Ville',
        region: 'Région',
        poBox: 'B.P. 352',
        phone: '78 467 81 33',
        whatsapp: '78 467 81 33',
        email: 'contact@btpsenegal.com',
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
        description: 'Leader dans la production de ciment',
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
        phone: '+221774424223',
        email: 'contact@btpsenegal.com',
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
        address: 'Adresse principale',
        city: 'Ville',
        region: 'Région',
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
        address: 'Adresse principale',
        city: 'Ville',
        region: 'Région',
        phone: '+221774424223',
        email: 'contact@btpsenegal.com',
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
        address: 'Adresse principale',
        city: 'Ville',
        region: 'Région',
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
        address: 'Adresse principale',
        city: 'Ville',
        region: 'Région',
        phone: '+221774424223',
        email: 'contact@btpsenegal.com',
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
];

// Fonction pour générer une entreprise à partir des données fournies
const generateCompany = (name, address, phone, email, website = null, category = 'BTP') => {
    const id = name.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');
    const slug = id;

    return {
        id,
        name,
        slug,
        category,
        description: `Entreprise spécialisée dans le secteur ${category.toLowerCase()}`,
        services: [
            'Services Professionnels',
            'Conseil Technique',
            'Réalisation de Projets',
            'Maintenance',
            'Support Client'
        ],
        address: address || 'Adresse non spécifiée',
        city: 'Dakar',
        region: 'Dakar',
        poBox: 'BP non spécifié',
        phone: phone || 'Non spécifié',
        whatsapp: phone || 'Non spécifié',
        email: email || 'contact@entreprise.sn',
        website: website,
        logo: '/images/partners/default-logo.jpg',
        bannerImage: '/images/partners/default-banner.jpg',
        status: 'Ouvert',
        coordinates: {
            latitude: 14.7167,
            longitude: -17.4677
        },
        rating: {
            overall: 4.0 + Math.random() * 0.8,
            cleanliness: 3.8 + Math.random() * 0.8,
            service: 4.0 + Math.random() * 0.8,
            ambience: 3.8 + Math.random() * 0.8,
            price: 3.8 + Math.random() * 0.8,
            totalReviews: Math.floor(Math.random() * 50) + 5
        },
        isVerified: Math.random() > 0.3,
        isPremium: Math.random() > 0.7,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    };
};

// Liste des entreprises à ajouter
const additionalCompanies = [
    { name: '2CBAT', address: 'Sicap Fann Hock Bloc G1 Rue Woro - BP : 2109 Dakar', phone: '33 821 63 13', email: 'spesarl@orange.sn' },
    { name: 'AATR', address: 'Agence Autonome des Travaux Routiers – BP 25242 Dakar Fann Résidence Rue David Diop x Rue F', phone: '33 869 07 51', email: 'aatr@aatr.sn', website: 'www.aatr.sn' },
    { name: 'ABA GROUP', address: 'Sacré Cœur 3 Pyrotechnique - BP : 25562 Dakar', phone: '33 820 88 00', email: 'contact@abaholding.com', website: 'www.abaholding.com' },
    { name: 'ABB TECHNOLOGIES sa', address: 'Km 3 Bld du Centenaire de la Commune de Dakar - BP : 2067 Dakar', phone: '33 869 96 96', email: 'info@abb.com', website: 'www.abb.com' },
    { name: 'ABM IMMOBILIER', address: 'Sacré Cœur 3 n° 1 B - BP : 17892 Dakar', phone: '33 867 50 90', email: 'abmimmo@yahoo.fr', website: 'www.agenceabmimmo.com' },
    { name: 'ABS EXPERT SARL', address: 'Hann Mariste Lot 03 B - BP : 50441 Dakar', phone: '33 832 67 37', email: 'abse@orange.sn' },
    { name: 'ACCESS ALU', address: 'Rocade Fann Bel Air - Dakar', phone: '33 832 61 92', email: 'accessalu@arc.sn' },
    { name: 'ACT Africaine de Chaudronnerie et de Tuyauterie', address: 'Avenue Félix Eboué - BP : 21852 Dakar', phone: '33 823 12 77', email: 'a.c.t@orange.sn' },
    { name: 'ADEC Africaine de Construction', address: '49, Zone Industrielle - Sodida', phone: '33 825 06 92', email: 'adec@orange.sn' },
    { name: 'ADS SARL Aluminium du Sénégal', address: 'Rue 14 lot n°10 SONEPI Dakar', phone: '33 825 72 17', email: 'adsalu@orange.sn', website: 'adsarl.jimdo.com' },
    { name: 'AEJ Afrique Entreprise Jardin', address: 'Sicap Amitié II N°4241- BP : 15020 Dakar Fann', phone: '33 824 12 17', email: 'aliouneaej@orange.sn' },
    { name: 'AFCO Avec Force et Compétence', address: 'Pont de Colobane – BP : 2056 Dakar', phone: '33 832 80 80', email: 'afco@orange.sn', website: 'www.afco.sn' },
    { name: 'AFCOM', address: 'Km 2,5 Bd du C.de la Commune', phone: '33 832 11 06', email: 'afcom@orange.sn' },
    { name: 'AFEC Africaine d\'Equipement et de Construction', address: '15 Avenue Bourguiba - BP : 249 Dakar', phone: '33 824 68 64', email: 'afec_sa@yahoo.fr', website: 'www.bkr.sn' },
    { name: 'AFECO Africaine d\'études et de Construction', address: 'Saly carrefour - BP : 2102 Dakar', phone: '33 957 33 12', email: 'afeco@orange.sn' },
    { name: 'AFID CONSULTANCE', address: 'Point E rue 7 villa 42 74 - BP : 1618 Dakar', phone: '33 825 52 02', email: 'afid@orange.sn' },
    { name: 'AFMED SUARL', address: 'Allé Seydou Nourou Tall - BP : 7802 Dakar', phone: '33 825 16 00', email: 'afrimed@orange.sn' },
    { name: 'AFRIBAT Africaine de Bâtiment', address: '120 , AV. du Pdt Lamine Guéye', phone: '33 821 44 78', email: 'afribat@orange.sn' },
    { name: 'AFRIC CONSULT', address: 'Point E n°9B - BP : 23714 Dakar', phone: '33 825 26 00', email: 'ndenesall@yahoo.fr' },
    { name: 'AFRICA BATIMENT', address: 'Rond point Colobane - BP : 12242 Dakar', phone: '33 824 68 18', email: 'mpnqjnr@yahoo.fr' },
    { name: 'AFRICA TRADING', address: 'Avenue Bourguiba, N°1541 - BP : 17348 Dakar Liberté', phone: '33 864 04 90', email: 'tradafric@yahoo.fr' },
    { name: 'ANC African Cable Network', address: 'Ouakam Route du Terme Sud', phone: '33 860 45 90', email: 'acn@orange.sn' },
    { name: 'AFRILAND SENEGAL', address: 'Rocade Fann Bel air', phone: '33 832 84 94', email: 'info@afriland.com', website: 'www.afriland.com' },
    { name: 'AFRIPOM Agence Africaine de Promotion Immobilière', address: 'Ben Taly Bourguiba - BP: 16596 Dakar', phone: '33 824 14 22', email: 'afripromot@yahoo.fr' },
    { name: 'AFRIQUE ASCENCEUR', address: '38 Av Lamine Gueye : BP : 25477 Dakar Fann', phone: '33 867 27 74', email: 'afriqueasc@orange.sn' },
    { name: 'AFRIQUE TECHNOLOGIES EQUIPEMENT', address: 'HLM Grand Yoff n° 239 - BP : 2704 Dakar', phone: '33 827 39 12', email: 'ateyoff@yahoo.fr' },
    { name: 'AFRO CONSTRUCTION', address: 'Sipres 4 - BP : 5661 Dakar', phone: '33 820 77 24', email: 'afro88b@yahoo.fr' },
    { name: 'AGENCE DE GESTION IMMOBILIERE', address: 'Sicap Mbao - BP : 20909 Dakar', phone: '33 834 10 18', email: 'contactagis@orange.sn' },
    { name: 'AGENCE IMMOBILIERE DU SENEGAL', address: '6 Rue Salva Dakar - BP : 30 Dakar', phone: '33 821 57 74', email: 'aisd@orange.sn' },
    { name: 'AGENCE IMMOBILIERE HORTALA', address: '4 rue El Hadji Mbaye Gueye - BP : 87 Dakar', phone: '33 823 24 48', email: 'hortala@orange.sn' },
    { name: 'AGENCE IMMOBILIERE 3 CTI', address: '12, Rue Docteur Thèse - BP : 15151 Dakar Fann', phone: '33 822 60 94', email: 'immo3cti@arc.sn' },
    { name: 'AGENCE IMMOBILIERE BITS', address: 'Magazin n°12 Espace résidence - BP : 30095 Dakar', phone: '33 832 66 64', email: 'agbits2000@yahoo.fr' },
    { name: 'AGENCE IMMOBILIERE CHEIKHNA CHEIKH SADIBOU', address: '5395 Liberté 5', phone: '33 867 53 04', email: 'cheikhna@orange.sn' },
    { name: 'AGENCE IMMOBILIERE KOITA', address: 'Medina rue 21 x 22', phone: '33 842 34 61', email: 'koita@orange.sn' },
    { name: 'AGENCE IMMOBILIERE LA RESIDENCE', address: '68 rue Amadou A Ndoye x Jean', phone: '33 822 74 15', email: 'laresidence@arc.sn' },
    { name: 'AGENCE IMMOBILIERE MAREGA', address: '32 Rue Victor Hugo - BP: 3241 Dakar', phone: '33 822 58 64', email: 'maregaagence@yahoo.fr', website: 'www.aim.com' },
    { name: 'AGENCE PLANETE IMMOBILIERE', address: '24 25 Cité Millionnaire Grand Yoff - BP : 13882 Dakar', phone: '33 867 05 20', email: 'planeteimmobiliere@yahoo.fr' },
    { name: 'AGENCE REPUBLIQUE', address: '62, Rue Raffanel X Paul Holle - BP : 3279 Dakar', phone: '33 823 49 72', email: 'republica@arc.sn' },
    { name: 'AGEPI', address: 'Sicap Sacré Cœur I Immeuble L - BP : 10708 Dakar', phone: '33 825 89 25', email: 'mbayeagepi@yahoo.fr' },
    { name: 'AGETIP', address: 'Bd Djily Mbaye x Béranger - BP : 143 Dakar', phone: '33 839 02 02', email: 'agetip@agetip.sn', website: 'www.agetip.sn' },
    { name: 'AGS DEMENAGEMENT', address: '36, Avenue Malick Sy - BP : 2704 Dakar', phone: '33 822 60 41', email: 'tdicasal@orange.sn' },
    { name: 'AISB Audit Ingénieurie pour les Service de Base', address: 'Rue 1 X C Point E - BP: 114 Dakar', phone: '33 824 52 93', email: 'digital.net@orange.sn' },
    { name: 'AKACIA', address: 'Km 5 Bld du Centenaire de la C. de Dakar - BP : 11983 Dakar', phone: '33 832 17 78', email: 'akacia@arc.sn' },
    { name: 'AL FIESTA ET DECORATION', address: '5, Rue Pierre Milan - BP: 1918 Dakar', phone: '33 823 00 27', email: 'alfiesta@arc.sn' },
    { name: 'ALAN ENGINENEERING', address: 'Colobane rue 39 X Bld Général de Gaulle - BP: 23720 Dakar', phone: '33 823 3818', email: 'alan.e@orange.sn' },
    { name: 'ALFAPEN SENEGAL', address: 'Scat Urbam', phone: '33 832 83 23', email: 'alfapensn@orange.sn' },
    { name: 'ALLIANCE ENERGIE', address: 'Zone Industrielle Km 4,5 BCCD - BP : 23937 Dakar', phone: '33 832 50 04', email: 'allenergie@orange.sn' },
    { name: 'ALLIANCE TECHNOLOGIE', address: '18, Bis Avenue Lamine Gueye - BP : 21252 Dakar', phone: '33 842.74.64', email: 'atexlm@yahoo.fr' },
    { name: 'ALMADIES IMMOBILIER', address: 'Route de Ngor X du Route du meridien - BP : 24142 Dakar', phone: '33 820 73 70', email: 'immosenegal@orange.sn', website: 'www.almadies-immobilier.com' },
    { name: 'ALMETAL', address: 'Sébikotane - BP : 22 SEBIKOTANE', phone: '33 836 60 52', email: 'aïchafall78@yahoo.fr' },
    { name: 'ALPAGES', address: 'Cité Ecole Police Mermoz, villa n°8 - BP : 17693 Dakar', phone: '33 869 78 08', email: 'alpages@orange.sn', website: 'www.groupe-alpages.com' },
    { name: 'ALUSTAR', address: '2 Rue Vincens - BP : 953 Dakar', phone: '33 821 91 53', email: 'alustar@orange.sn' },
    { name: 'ALU-TECH', address: 'Canal IV Point E - BP : 35330 Dakar', phone: '33 825 98 07', email: 'alutechfsyl@yahoo.fr', website: 'www.alutechfsyl.com' },
    { name: 'AMA ARCHI', address: 'Villa N° 2082 Liberté III - BP : 1771 Dakar', phone: '33 825 78 01', email: 'ama.archi@orange.sn' },
    { name: 'AMEUBLEMENT BARGNY', address: 'Zone Industrielle Sud Rocade Fann - BP : 1734 Dakar', phone: '33 832 55 78', email: 'ambargny@yahoo.fr' },
    { name: 'AMEUBLEMENT GANDOUR', address: '59 Av Georges Pompidou - BP : 23732 Dakar', phone: '33 889 01 01', email: 'ideagalerie@arc.sn', website: 'www.creamobilier.com' },
    { name: 'AMEUBLEMENT KEUR KHADIM', address: 'Allé Pape Gueye Fall - BP : 12006 Dakar', phone: '33 822 98 04', email: 'keurkhadim@orange.sn' },
    { name: 'AMINA COOPERATION', address: 'Sodida Zone Sonepi lot 13- BP : 30047 Dakar', phone: '33 864 01 17', email: 'gieamina@orange.sn' },
    { name: 'APAVE SAHEL', address: '30, Bd De la République - BP : 6334 Dakar Etoile', phone: '33 822 96 22', email: 'apavesahel@arc.sn' },
    { name: 'APC Africaine des Produits pour la Construction', address: '125, Rue Carnot - BP : 11329 Dakar', phone: '33 821 67 64', email: 'apc@arc.sn' },
    { name: 'APIX Agence de Promotion des des Investissements et des Grands Travaux', address: '52 - 54 Rue Mohamed V - BP : 430 Dakar-Etoile', phone: '33 849 05 55', email: 'apix@orange.sn', website: 'www.apix.sn' },
    { name: 'APS IMMOBILIER', address: 'Hann Mariste 25 15 - BP: 9043 Dakar', phone: '33 832 03 91', email: 'apsimmo@orange.sn' },
    { name: 'ARC Africaine de Réalisation et Construction', address: 'Villa n° 79 PC1 Scat Urbam - BP : 7832 Dakar', phone: '33 832 24 48', email: 'abba@orange.sn' },
    { name: 'ARCHI BUILIDING CONSULT', address: 'Sacré Cœur 2 Résidence Arame - BP : 10780 Dakar', phone: '33 864 66 90', email: 'archibuc@orange.sn' },
    { name: 'ARCHI TRIOMPH', address: 'Rond Point Jet d\'eau', phone: '33 825 72 5O', email: 'architriom@orange.sn' },
    { name: 'ARCHI TROPIC 2000', address: '49 rue St Michel - BP : 4580 Dakar', phone: '33 822 33 43', email: 'architropic2000@yahoo.fr' },
    { name: 'ARCHIDESIGN', address: '7, Avenue Faidherbe', phone: '33 822 39 64', email: 'archidynsen@yahoo.fr' },
    { name: 'ARCHITECNICS', address: '141, 143 Building Maginot - BP : 6423 Dakar', phone: '33 822 47 80', email: 'architecnics19@yahoo.fr' },
    { name: 'AREZKI', address: 'Almadies - BP: 2641 Dakar Ponty', phone: '33 869 90 99', email: 'dakar@arezkigroup.com', website: 'www.arezkigroup.com' },
    { name: 'ARMURERIE DAKAROISE', address: '90 rue Joseph Gomis - BP : 491 Dakar', phone: '33 822 97 40', email: 'fakih@orange.sn' },
    { name: 'ART ET STAFF', address: 'Km 13 route de Rufisque - BP : 20278 Dakar', phone: '33 834 09 33', email: 'amadoudiogod@orange.sn' },
    { name: 'AS ALUMINIUM DU SENEGAL', address: 'Rue Félix Faure X Autoroute - BP: 22666 Dakar', phone: '33 825 72 17', email: 'adsalu@orange.sn' },
    { name: 'ASCOMA SENEGAL', address: 'Bld Djily Mbaye angle rue - BP : 50763 CP 18524 Dakar', phone: '33 889 09 00', email: 'acc-ascoma-senegal@ascoma.com', website: 'www.ascoma.com' },
    { name: 'ATC Agence Technique et Création', address: 'Zone industrielle de Hann - BP : 10465 Dakar', phone: '33 832 60 33', email: 'djotali@orange.sn' },
    { name: 'ATELIER D\'ARCHITECTURE ET D\'URBANISME CHEIKH NGOM', address: '3, Bis Avenue Albert Sarraut - BP : 2507 Dakar', phone: '33 821 59 26', email: 'cheikhngom@orange.sn' },
    { name: 'ATEPA TECHNOLOGIES', address: 'Bld Martin Luther KING -Fann - BP : 2191 Dakar', phone: '33 865 11 11', email: 'atepa@atepa.com', website: 'www.atepa.com' },
    { name: 'ATEX', address: '18 Bis Avenue Lamine Gueye - BP : 21252 Dakar', phone: '33 842 74 64', email: 'atexlm@yahoo.fr' },
    { name: 'ATLANTIQUE IMMO', address: 'Saly Domaine orangers - BP : 201 Dakar', phone: '33 957 36 88', email: 'sai.immo@orange.sn', website: 'www.atlantiqueimmo.org' },
    { name: 'ATS Africaine de Travaux Spécialisés', address: 'Km 4,5 BCCD - BP : 5414 Dakar', phone: '33 832.00.08', email: 'atexlm18@yahoo.fr' },
    { name: 'AUDIT INGENIERIE', address: 'Rue1 X D Point E Immeuble USIMA', phone: '33 824 52 93', email: 'aisbsarl@orange.sn' },
    { name: 'AUTOLAQUE', address: 'Km 4,5 Bld du CCD - BP : 29853 Dakar', phone: '33 832 17 14', email: 'info@autolaque.net', website: 'www.autolaque.net' },
    { name: 'AZ-COLOR', address: 'Km 11, Route de Rufisque - BP : 1173 Dakar', phone: '33 834 08 56', email: 'azcolor@arc.sn' },
    { name: 'AZIMUT', address: 'HLM FASS CANAL IV - BP : 15018 Dakar', phone: '33 842 76 16', email: 'azimut@orange.sn', website: 'www.azimut_immo.com' },
    { name: 'BAGB', address: 'HLM Mariste Immeuble D - BP : 26198 Dakar', phone: '33 832 48 88', email: 'bagb@orange.sn' },
    { name: 'BAMBA NDIAYE SA', address: '35 Avenue Faidherbe - BP : 2950 Dakar', phone: '33 889 89 85', email: 'bndiaye@bambandiaye.com', website: 'www.bambandiaye.com' },
    { name: 'BAOL CONSTRUCTION', address: 'Sicap Sacré Coeur 3 villa 1065 - BP : 10062 Dakar', phone: '33 860 23 46', email: 'baolconst@orange.sn' },
    { name: 'BATEC Bâtiment Technique', address: '8, Rue Mage', phone: '33 842 30 96', email: 'batec@orange.sn' },
    { name: 'BATELEC - Batiment Travaux Publics, Electricité Générale', address: 'Sodida Lot B 14 - BP : 42 Dakar', phone: '33 824 65 31', email: 'batelec@orange.sn' },
    { name: 'BATI AFFAIRES', address: 'Scat Urbam Hann Maristes2 n°34 - BP : 45102 Dakar', phone: '33 832 42 65', email: 'batiaffaire@yahoo.fr' },
    { name: 'BATI ECO', address: 'Av Bourguiba Sodida', phone: '33 824 81 29', email: 'bati_eco@yahoo.fr' },
    { name: 'BATI METAL', address: 'Km 2,5 Bld du Centenaire de la Commune de Dakar', phone: '33 832 46 54', email: 'batimetal@orange.sn' },
    { name: 'BATI SUP', address: 'Point E Allé Seydou Nourou Tall - BP : 16577 Dakar', phone: '33 824 02 18', email: 'contact@batisup.com' },
    { name: 'BATIMAT', address: 'Avenue Malick Sy prés des Colis postaux - BP : 28560 Dakar', phone: '33 889 63 63', email: 'batimat-dakar@hotmail.com' },
    { name: 'BATIR', address: '45, Bd Djily Mbaye - BP : 21555 Dakar', phone: '33 822 96 29', email: 'batir@orange.sn' },
    { name: 'BATISEN', address: 'Sacré Cœur 3 - BP : 45921 Dakar', phone: '33 860 80 04', email: 'info@batisen.com', website: 'www.batisen.com' },
    { name: 'BATISSE Entreprise Générale', address: 'Km 8, Bld du CCD - BP : 7089 Dakar', phone: '33 832 87 26', email: 'batisse@orange.sn' },
    { name: 'BAUFFEL TRUST', address: 'Residence Madamel Zone 1 - BP : 24561 Dakar', phone: '33 869 59 64', email: 'beauffeltrust@yahoo.fr' },
    { name: 'BAYE MAT CONTRUCTION', address: 'HLM Fass n°67 B, 3ème étage - BP : 100 Dakar Fann', phone: '33 842 68 60', email: 'bayemat@orange.sn' },
    { name: 'BBS IMMOBILIER', address: '802 Arafat Grand Yoff - BP : 13643Dakar', phone: '33 827 95 07', email: '643@orange.sn' },
    { name: 'BEAD - Bureau d\'Etude Architecture et Décoration', address: '111 , RUE Joseph Gomis - BP : 2789 Dakar', phone: '33 849 19 20', email: 'bead@orange.sn' },
    { name: 'BEFICO', address: 'Hann Mariste - BP : 27095 Dakar', phone: '33 8832 31 29', email: 'beficosl@yahoo.fr' },
    { name: 'BERNABE SENEGAL', address: 'Km 2,5 Bu du Centenaire de la Commune de Dakar', phone: '33 849 01 01', email: 'bernasng@orange.sn', website: 'www.bernabe.sn' },
    { name: 'BES - Bureau d\'Etude Sénégalaise', address: 'Sipres 2 n°271 - BP : 15249 Dakar Fann', phone: '33 867 61 33', email: 'bes@bes.sn' },
    { name: 'BEST COM', address: 'Imm J Sacré Cœur 1 - BP : 10532 Dakar', phone: '33 825 51 65', email: 'ffkr@refer.sn' },
    { name: 'BET PLUS - Bureau d\'Etudes Techniques Plus SA', address: 'Ouest Foire , Cité Air Afrique Lot n°10 en face Lotissement CDE BP : 8117 Dakar', phone: '33 820 85 25', email: 'betplus@orange.sn', website: 'www.betplus-sn.com' },
    { name: 'BETA ENERGY', address: 'Rue 19 X 21 Médina - BP : 11101 Dakar', phone: '33 821 53 80', email: 'betaenergy@orange.sn' },
    { name: 'BETA SARL', address: 'HLM Hann Mariste villa 227 - BP : 26373 Dakar', phone: '33 832 8758', email: 'betasarl@hotmail.com' },
    { name: 'BETAM', address: '143, Avenue Yacinthe Thiandoum', phone: '77 560 43 93', email: 'betam@orange.sn' },
    { name: 'BETEG - Bureau d\' Etude Technique et Général', address: 'HLM Nimzatt Villa n°2805 - BP : 10941 Dakar', phone: '33 865 26 36', email: 'beteg@orange.sn', website: 'www.beteg.com' },
    { name: 'BEXIM - Bureau d\'Etudes et d\'Expertise Immobilière', address: 'Sacré Coeur III N° 9733 - BP : 1728 DAKAR', phone: '33 867 14 76', email: 'bexim@orange.sn' },
    { name: 'BFC - Bureau Fiduciaire et Comptable', address: '57, Avenue Hassane 2 - BP : 856 Dakar', phone: '33 821 56 26', email: 'bfc@orange.sn' },
    { name: 'BHS Banque de l\'Habitat du Sénégal', address: '69, Bld Général De Gaulle - BP : 229 Dakar', phone: '33 839 33 33', email: 'aminaly@bhs.sn' },
    { name: 'BIA DAKAR', address: 'Km 18,5 route de Rufisque', phone: '33 879 00 30', email: 'esdak@arc.sn' },
    { name: 'BLANCHOT IMMOBILIER', address: '140 Rue Moussé Diop - BP : 23551 Dakar', phone: '33 842 71 71', email: 'blanchot@orange.sn' },
    { name: 'BMI Borom Madina Internationale', address: 'Scat Urbam n° 157 - BP : 28180 Dakar', phone: '33 827 94 88', email: 'bmi@orange.sn' },
    { name: 'BOISERIE KHADIM RASSOUL', address: '15 Avenue Bourguiba - BP : 12110 Dakar', phone: '33 865 65 55', email: 'bkr_fa@yahoo.fr', website: 'www.bkr.sn' },
    { name: 'BPR BA PIECE DE RECHANGE', address: '170 Bld du CCD - BP : 3603 Dakar', phone: '33 832 56 11', email: 'bpr@orange.sn' },
    { name: 'BRACHET ET COMPAGNY', address: 'Avenue Faidherbe - BP : 120 Dakar', phone: '33 822 33 75', email: 'brachet@orange.sn' },
    { name: 'BRICO DECOR', address: '39, Rue Mohamed V X Victor Hugo - BP : 705 dakar', phone: '33 864 77 66', email: 'bricodecor@orange.sn' },
    { name: 'BSM Bureau Sénégalais du Materiel', address: 'Route du front de terre - BP : 13118 Dakar', phone: '33 824 50 05', email: 'bsm221@orange.sn' },
    { name: 'BETP Bureau d\'Etudes des Travaux Publics', address: 'Parcelles Assainies Unité 13', phone: '33 835 04 84', email: 'betp87@yahoo.fr' },
    { name: 'BUREAU D\'ÉTUDES', address: '6, Rue Vincens - Dakar', phone: '33 864 71 66', email: 'bureau@orange.sn' },
    { name: 'BUREAU D\'ETUDE SAIDOU DIALLO', address: 'Zone B villa n° 103 - BP : 6244 Dakar', phone: '33 824 02 12', email: 'besd@yahoo.fr' },
    { name: 'BV BUREAU VERITAS', address: 'VDN X Ancienne Piste Mermoz - BP : 592 Dakar', phone: '33 865 12 20', email: 'bvdakar@sn.bureauveritas.com', website: 'www.bureauveritas.com' }
];

// Ajouter toutes les entreprises supplémentaires
const allAdditionalCompanies = additionalCompanies.map(company => generateCompany(
    company.name,
    company.address,
    company.phone,
    company.email,
    company.website,
    'BTP'
));

// Fusionner avec les entreprises existantes
export const allCompaniesData = [...companiesData, ...allAdditionalCompanies];
// Fonctions utilitaires pour la base de données
export const getCompanyById = (id) => {
    return allCompaniesData.find(company => company.id === id);
};
export const getCompanyBySlug = (slug) => {
    return allCompaniesData.find(company => company.slug === slug);
};
export const getCompaniesByCity = (city) => {
    return allCompaniesData.filter(company => company.city.toLowerCase() === city.toLowerCase());
};
export const getCompaniesByCategory = (category) => {
    return allCompaniesData.filter(company => company.category.toLowerCase() === category.toLowerCase());
};
export const searchCompanies = (query) => {
    const lowercaseQuery = query.toLowerCase();
    return allCompaniesData.filter(company => company.name.toLowerCase().includes(lowercaseQuery) ||
        company.description.toLowerCase().includes(lowercaseQuery) ||
        company.services.some(service => service.toLowerCase().includes(lowercaseQuery)));
};
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
`;
