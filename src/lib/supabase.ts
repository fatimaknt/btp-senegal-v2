import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: true
    }
})

export type Database = {
    public: {
        Tables: {
            categories: {
                Row: {
                    id: string
                    name: string
                    icon: string | null
                    color: string | null
                    created_at: string
                }
                Insert: {
                    id?: string
                    name: string
                    icon?: string | null
                    color?: string | null
                    created_at?: string
                }
                Update: {
                    id?: string
                    name?: string
                    icon?: string | null
                    color?: string | null
                    created_at?: string
                }
            }
            enterprises: {
                Row: {
                    id: string
                    name: string
                    description: string | null
                    category_id: string | null
                    address: string
                    city: string
                    phone: string
                    email: string | null
                    website: string | null
                    coordinates: unknown | null
                    logo_url: string | null
                    images: string[] | null
                    rating: number
                    review_count: number
                    is_verified: boolean
                    is_active: boolean
                    working_hours: unknown | null
                    services: string[] | null
                    owner_id: string | null
                    created_at: string
                    updated_at: string
                }
                Insert: {
                    id?: string
                    name: string
                    description?: string | null
                    category_id?: string | null
                    address: string
                    city: string
                    phone: string
                    email?: string | null
                    website?: string | null
                    coordinates?: unknown | null
                    logo_url?: string | null
                    images?: string[] | null
                    rating?: number
                    review_count?: number
                    is_verified?: boolean
                    is_active?: boolean
                    working_hours?: unknown | null
                    services?: string[] | null
                    owner_id?: string | null
                    created_at?: string
                    updated_at?: string
                }
                Update: {
                    id?: string
                    name?: string
                    description?: string | null
                    category_id?: string | null
                    address?: string
                    city?: string
                    phone?: string
                    email?: string | null
                    website?: string | null
                    coordinates?: unknown | null
                    logo_url?: string | null
                    images?: string[] | null
                    rating?: number
                    review_count?: number
                    is_verified?: boolean
                    is_active?: boolean
                    working_hours?: unknown | null
                    services?: string[] | null
                    owner_id?: string | null
                    created_at?: string
                    updated_at?: string
                }
            }
            reviews: {
                Row: {
                    id: string
                    enterprise_id: string
                    user_id: string
                    rating: number
                    comment: string | null
                    is_verified: boolean
                    created_at: string
                }
                Insert: {
                    id?: string
                    enterprise_id: string
                    user_id: string
                    rating: number
                    comment?: string | null
                    is_verified?: boolean
                    created_at?: string
                }
                Update: {
                    id?: string
                    enterprise_id?: string
                    user_id?: string
                    rating?: number
                    comment?: string | null
                    is_verified?: boolean
                    created_at?: string
                }
            }
            articles: {
                Row: {
                    id: string
                    title: string
                    content: string
                    excerpt: string | null
                    image_url: string | null
                    author_id: string
                    category: string | null
                    is_published: boolean
                    published_at: string | null
                    created_at: string
                }
                Insert: {
                    id?: string
                    title: string
                    content: string
                    excerpt?: string | null
                    image_url?: string | null
                    author_id: string
                    category?: string | null
                    is_published?: boolean
                    published_at?: string | null
                    created_at?: string
                }
                Update: {
                    id?: string
                    title?: string
                    content?: string
                    excerpt?: string | null
                    image_url?: string | null
                    author_id?: string
                    category?: string | null
                    is_published?: boolean
                    published_at?: string | null
                    created_at?: string
                }
            }
        }
    }
}
