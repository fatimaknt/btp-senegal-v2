export interface ApiResponse<T> {
    data: T;
    success: boolean;
    message?: string;
    error?: string;
}

export interface PaginationParams {
    page: number;
    limit: number;
    offset?: number;
}

export interface PaginatedResponse<T> {
    data: T[];
    total: number;
    page: number;
    totalPages: number;
    hasMore: boolean;
}

export interface Location {
    lat: number;
    lng: number;
    address?: string;
    city?: string;
}

export interface MapBounds {
    north: number;
    south: number;
    east: number;
    west: number;
}

export interface Article {
    id: string;
    title: string;
    content: string;
    excerpt: string;
    image_url?: string;
    author_id: string;
    category: string;
    is_published: boolean;
    published_at?: string;
    created_at: string;
    author?: {
        name: string;
        avatar_url?: string;
    };
}

export interface ContactForm {
    name: string;
    email: string;
    phone?: string;
    subject: string;
    message: string;
    enterprise_id?: string;
}

export interface LoadingState {
    isLoading: boolean;
    error?: string;
}

export interface ToastNotification {
    id: string;
    type: 'success' | 'error' | 'warning' | 'info';
    title: string;
    message?: string;
    duration?: number;
}

export type SortOrder = 'asc' | 'desc';

export interface SortOption {
    field: string;
    order: SortOrder;
    label: string;
}
