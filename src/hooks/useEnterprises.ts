import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase'
import type { Enterprise, EnterpriseFilters, SearchResults } from '../types/enterprise'
import { MOCK_ENTERPRISES } from '../data/mockData'

export function useEnterprises() {
    const [enterprises, setEnterprises] = useState<Enterprise[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    const fetchEnterprises = async (filters?: EnterpriseFilters, page = 1, limit = 20) => {
        setLoading(true)
        setError(null)

        try {
            let query = supabase
                .from('enterprises')
                .select(`
          *,
          category:categories(*)
        `)
                .eq('is_active', true)

            if (filters?.category) {
                query = query.eq('category_id', filters.category)
            }

            if (filters?.city) {
                query = query.ilike('city', `%${filters.city}%`)
            }

            if (filters?.verified) {
                query = query.eq('is_verified', true)
            }

            if (filters?.rating) {
                query = query.gte('rating', filters.rating)
            }

            if (filters?.searchQuery) {
                query = query.or(`
          name.ilike.%${filters.searchQuery}%,
          description.ilike.%${filters.searchQuery}%,
          services.cs.{${filters.searchQuery}}
        `)
            }

            const sortField = filters?.sortBy === 'rating' ? 'rating' :
                filters?.sortBy === 'recent' ? 'created_at' : 'name'
            const sortOrder = filters?.sortBy === 'recent' ? { ascending: false } : { ascending: true }

            query = query.order(sortField, sortOrder)

            const from = (page - 1) * limit
            const to = from + limit - 1
            query = query.range(from, to)

            const { data, error: fetchError } = await query

            if (fetchError) {
                setEnterprises(MOCK_ENTERPRISES)
            } else {
                setEnterprises(data || [])
            }
        } catch {
            setError('Erreur lors du chargement des entreprises')
            setEnterprises(MOCK_ENTERPRISES)
        } finally {
            setLoading(false)
        }
    }

    const searchEnterprises = async (query: string, filters?: EnterpriseFilters): Promise<SearchResults> => {
        setLoading(true)
        setError(null)

        try {
            const combinedFilters = { ...filters, searchQuery: query }
            await fetchEnterprises(combinedFilters)

            return {
                enterprises: enterprises,
                total: enterprises.length,
                page: 1,
                hasMore: false
            }
        } catch (err) {
            setError('Erreur lors de la recherche')
            const mockResults = MOCK_ENTERPRISES.filter(enterprise =>
                enterprise.name.toLowerCase().includes(query.toLowerCase()) ||
                enterprise.description.toLowerCase().includes(query.toLowerCase())
            )

            return {
                enterprises: mockResults,
                total: mockResults.length,
                page: 1,
                hasMore: false
            }
        } finally {
            setLoading(false)
        }
    }

    const getEnterpriseById = async (id: string): Promise<Enterprise | null> => {
        try {
            const { data, error } = await supabase
                .from('enterprises')
                .select(`
          *,
          category:categories(*)
        `)
                .eq('id', id)
                .single()

            if (error) {
                return MOCK_ENTERPRISES.find(e => e.id === id) || null
            }

            return data
        } catch (err) {
            return MOCK_ENTERPRISES.find(e => e.id === id) || null
        }
    }

    const getNearbyEnterprises = async (lat: number, lng: number, radius = 10000): Promise<Enterprise[]> => {
        try {
            const { data, error } = await supabase.rpc('get_nearby_enterprises', {
                lat,
                lng,
                radius_meters: radius
            })

            if (error) {
                return MOCK_ENTERPRISES.slice(0, 5)
            }

            return data || []
        } catch (err) {
            return MOCK_ENTERPRISES.slice(0, 5)
        }
    }

    const createEnterprise = async (enterpriseData: Partial<Enterprise>) => {
        try {
            const { data, error } = await supabase
                .from('enterprises')
                .insert([enterpriseData])
                .select()
                .single()

            if (error) throw error
            return data
        } catch (err) {
            throw new Error('Erreur lors de la création de l\'entreprise')
        }
    }

    const updateEnterprise = async (id: string, updates: Partial<Enterprise>) => {
        try {
            const { data, error } = await supabase
                .from('enterprises')
                .update(updates)
                .eq('id', id)
                .select()
                .single()

            if (error) throw error
            return data
        } catch (err) {
            throw new Error('Erreur lors de la mise à jour de l\'entreprise')
        }
    }

    useEffect(() => {
        fetchEnterprises()
    }, [])

    return {
        enterprises,
        loading,
        error,
        fetchEnterprises,
        searchEnterprises,
        getEnterpriseById,
        getNearbyEnterprises,
        createEnterprise,
        updateEnterprise
    }
}
