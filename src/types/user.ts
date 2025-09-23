export interface User {
    id: string;
    email: string;
    name: string;
    avatar_url?: string;
    role: UserRole;
    created_at: string;
    updated_at: string;
}

export type UserRole = 'admin' | 'enterprise_owner' | 'user';

export interface AuthState {
    user: User | null;
    isLoading: boolean;
    isAuthenticated: boolean;
}

export interface LoginCredentials {
    email: string;
    password: string;
}

export interface RegisterData {
    email: string;
    password: string;
    name: string;
    role?: UserRole;
}

export interface Profile {
    id: string;
    user_id: string;
    name: string;
    phone?: string;
    address?: string;
    city?: string;
    avatar_url?: string;
    created_at: string;
    updated_at: string;
}
