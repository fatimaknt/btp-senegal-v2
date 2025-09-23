export const SENEGAL_REGIONS = [
    {
        id: 'dakar',
        name: 'Dakar',
        coordinates: { lat: 14.6928, lng: -17.4467 },
        cities: [
            'Dakar',
            'Pikine',
            'Guédiawaye',
            'Rufisque',
            'Bargny',
            'Sébikotane',
            'Diamniadio',
            'Sangalkam'
        ]
    },
    {
        id: 'thies',
        name: 'Thiès',
        coordinates: { lat: 14.7886, lng: -16.9260 },
        cities: [
            'Thiès',
            'Tivaouane',
            'Mbour',
            'Joal-Fadiouth',
            'Popenguine',
            'Khombole',
            'Pout',
            'Mékhé'
        ]
    },
    {
        id: 'saint-louis',
        name: 'Saint-Louis',
        coordinates: { lat: 16.0200, lng: -16.4889 },
        cities: [
            'Saint-Louis',
            'Richard Toll',
            'Dagana',
            'Podor',
            'Louga',
            'Kébémer',
            'Linguère',
            'Dahra'
        ]
    },
    {
        id: 'diourbel',
        name: 'Diourbel',
        coordinates: { lat: 14.6594, lng: -16.2314 },
        cities: [
            'Diourbel',
            'Touba',
            'Mbacké',
            'Bambey',
            'Baba Garage',
            'Ndangalma',
            'Kaffrine',
            'Birkelane'
        ]
    },
    {
        id: 'kaolack',
        name: 'Kaolack',
        coordinates: { lat: 14.1593, lng: -16.0738 },
        cities: [
            'Kaolack',
            'Fatick',
            'Foundiougne',
            'Gossas',
            'Nioro du Rip',
            'Ndoffane',
            'Sokone',
            'Tattaguine'
        ]
    },
    {
        id: 'tambacounda',
        name: 'Tambacounda',
        coordinates: { lat: 13.7671, lng: -13.6675 },
        cities: [
            'Tambacounda',
            'Kidira',
            'Bakel',
            'Goudiry',
            'Koumpentoum',
            'Missirah',
            'Kédougou',
            'Salémata'
        ]
    },
    {
        id: 'ziguinchor',
        name: 'Ziguinchor',
        coordinates: { lat: 12.5600, lng: -16.2713 },
        cities: [
            'Ziguinchor',
            'Oussouye',
            'Bignona',
            'Kolda',
            'Vélingara',
            'Médina Yoro Foulah',
            'Sédhiou',
            'Bounkiling'
        ]
    },
    {
        id: 'matam',
        name: 'Matam',
        coordinates: { lat: 15.6556, lng: -13.2553 },
        cities: [
            'Matam',
            'Kanel',
            'Ranérou',
            'Ourossogui',
            'Thilogne',
            'Agnam',
            'Ogo',
            'Bokidiawé'
        ]
    }
] as const

export const POPULAR_CITIES = [
    'Dakar',
    'Thiès',
    'Pikine',
    'Touba',
    'Rufisque',
    'Saint-Louis',
    'Kaolack',
    'Mbour',
    'Guédiawaye',
    'Ziguinchor',
    'Diourbel',
    'Tambacounda'
] as const

export const DAKAR_ARRONDISSEMENTS = [
    'Plateau',
    'Médina',
    'Gueule Tapée-Fass-Colobane',
    'HLM',
    'Grand Dakar',
    'Parcelles Assainies',
    'Almadies',
    'Ngor',
    'Ouakam',
    'Yoff',
    'Point E',
    'Mermoz-Sacré Cœur',
    'Sicap Liberté',
    'Dieuppeul-Derklé',
    'Grand Yoff',
    'Patte d\'Oie Builders',
    'Cambérène',
    'Hann Bel-Air'
] as const

export function getCitiesByRegion(regionId: string): string[] {
    const region = SENEGAL_REGIONS.find(r => r.id === regionId)
    return region ? [...region.cities] : []
}

export function getRegionByCity(cityName: string) {
    return SENEGAL_REGIONS.find(region =>
        region.cities.includes(cityName as any)
    )
}

export function getAllCities(): string[] {
    return SENEGAL_REGIONS.flatMap(region => [...region.cities])
}
