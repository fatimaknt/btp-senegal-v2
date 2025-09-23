import { useState, useCallback } from 'react'
import type { EnterpriseFilters } from '../types/enterprise'
import { debounce } from '../lib/utils'
import { useEnterprises } from './useEnterprises'

export function useSearch() {
    const [searchQuery, setSearchQuery] = useState('')
    const [filters, setFilters] = useState<EnterpriseFilters>({})
    const [suggestions, setSuggestions] = useState<string[]>([])
    const [isSearching, setIsSearching] = useState(false)
    const [searchHistory, setSearchHistory] = useState<string[]>([])

    const { searchEnterprises } = useEnterprises()

    const debouncedSearch = useCallback(
        debounce(async (query: string, searchFilters: EnterpriseFilters) => {
            if (query.trim().length === 0) return

            setIsSearching(true)
            try {
                await searchEnterprises(query, searchFilters)
                addToHistory(query)
            } catch (error) {
                console.error('Search error:', error)
            } finally {
                setIsSearching(false)
            }
        }, 300),
        [searchEnterprises]
    )

    const handleSearch = useCallback((query: string, searchFilters?: EnterpriseFilters) => {
        setSearchQuery(query)
        const currentFilters = searchFilters || filters
        setFilters(currentFilters)
        debouncedSearch(query, currentFilters)
    }, [filters, debouncedSearch])

    const handleFilterChange = useCallback((newFilters: Partial<EnterpriseFilters>) => {
        const updatedFilters = { ...filters, ...newFilters }
        setFilters(updatedFilters)

        if (searchQuery.trim().length > 0) {
            debouncedSearch(searchQuery, updatedFilters)
        }
    }, [filters, searchQuery, debouncedSearch])

    const clearSearch = useCallback(() => {
        setSearchQuery('')
        setFilters({})
        setSuggestions([])
    }, [])

    const addToHistory = useCallback((query: string) => {
        setSearchHistory(prev => {
            const newHistory = [query, ...prev.filter(item => item !== query)].slice(0, 10)
            localStorage.setItem('searchHistory', JSON.stringify(newHistory))
            return newHistory
        })
    }, [])

    const loadSearchHistory = useCallback(() => {
        try {
            const stored = localStorage.getItem('searchHistory')
            if (stored) {
                setSearchHistory(JSON.parse(stored))
            }
        } catch (error) {
            console.error('Error loading search history:', error)
        }
    }, [])

    const generateSuggestions = useCallback((query: string) => {
        if (query.length < 2) {
            setSuggestions([])
            return
        }

        const commonSearches = [
            'Plomberie',
            'Électricité',
            'Construction',
            'Peinture',
            'Climatisation',
            'Carrelage',
            'Menuiserie',
            'Toiture',
            'Maçonnerie',
            'Jardinage'
        ]

        const filtered = commonSearches.filter(item =>
            item.toLowerCase().includes(query.toLowerCase())
        )

        const fromHistory = searchHistory.filter(item =>
            item.toLowerCase().includes(query.toLowerCase())
        )

        setSuggestions([...new Set([...fromHistory, ...filtered])].slice(0, 5))
    }, [searchHistory])

    const getPopularSearches = useCallback(() => {
        return [
            'Plomberie Dakar',
            'Construction Thiès',
            'Électricité Pikine',
            'Peinture Rufisque',
            'Climatisation Guédiawaye'
        ]
    }, [])

    return {
        searchQuery,
        filters,
        suggestions,
        isSearching,
        searchHistory,
        handleSearch,
        handleFilterChange,
        clearSearch,
        generateSuggestions,
        loadSearchHistory,
        getPopularSearches
    }
}
