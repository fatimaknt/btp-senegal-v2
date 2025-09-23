export interface Enterprise {
    id: string;
    name: string;
    description: string;
    category: Category;
    address: string;
    city: string;
    phone: string;
    email?: string;
    website?: string;
    coordinates: { lat: number; lng: number };
    logo_url?: string;
    images: string[];
    rating: number;
    review_count: number;
    is_verified: boolean;
    is_active: boolean;
    working_hours: WorkingHours;
    services: string[];
    owner_id: string;
    created_at: string;
    updated_at: string;
}

export interface Category {
    id: string;
    name: string;
    icon: string;
    color: string;
    created_at: string;
}

export interface WorkingHours {
    monday: DaySchedule;
    tuesday: DaySchedule;
    wednesday: DaySchedule;
    thursday: DaySchedule;
    friday: DaySchedule;
    saturday: DaySchedule;
    sunday: DaySchedule;
}

export interface DaySchedule {
    isOpen: boolean;
    openTime?: string;
    closeTime?: string;
    breakStart?: string;
    breakEnd?: string;
}

export interface Review {
    id: string;
    enterprise_id: string;
    user_id: string;
    rating: number;
    comment: string;
    is_verified: boolean;
    created_at: string;
    user?: User;
}

export interface EnterpriseFilters {
    category?: string;
    city?: string;
    rating?: number;
    isOpen?: boolean;
    verified?: boolean;
    searchQuery?: string;
    sortBy?: 'relevance' | 'rating' | 'distance' | 'recent';
}

export interface SearchResults {
    enterprises: Enterprise[];
    total: number;
    page: number;
    hasMore: boolean;
}

export interface User {
    id: string;
    name: string;
    avatar_url?: string;
}
