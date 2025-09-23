import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, MapPin, Building2, Star } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/ui/Button'
import Input from '../../components/ui/Input'
import { POPULAR_CITIES } from '../../data/locations'
import { CATEGORIES } from '../../data/categories'

const HeroSection: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState('')
    const [selectedCity, setSelectedCity] = useState('')
    const [selectedCategory, setSelectedCategory] = useState('')
    const navigate = useNavigate()

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault()
        const params = new URLSearchParams()

        if (searchQuery.trim()) params.set('q', searchQuery.trim())
        if (selectedCity) params.set('city', selectedCity)
        if (selectedCategory) params.set('category', selectedCategory)

        navigate(`/annuaire?${params.toString()}`)
    }

    const stats = [
        { label: 'Entreprises référencées', value: '1,200+', icon: Building2 },
        { label: 'Villes couvertes', value: '25+', icon: MapPin },
        { label: 'Avis clients', value: '3,500+', icon: Star }
    ]

    return (
        <section className="relative bg-gradient-to-br from-primary via-primary to-secondary min-h-[70vh] flex items-center">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div
                    className="w-full h-full"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                        backgroundSize: '60px 60px'
                    }}
                />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center text-white">
                    {/* Titre principal */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
                            Trouvez les meilleurs
                            <span className="block text-senegal-yellow">
                                professionnels BTP
                            </span>
                            au Sénégal
                        </h1>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto"
                    >
                        Plus de 1000 entreprises certifiées pour tous vos projets de construction,
                        rénovation et aménagement au Sénégal.
                    </motion.p>

                    {/* Formulaire de recherche */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="bg-white rounded-lg p-6 shadow-xl max-w-4xl mx-auto mb-12"
                    >
                        <form onSubmit={handleSearch} className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {/* Recherche */}
                                <div className="md:col-span-1">
                                    <Input
                                        type="text"
                                        placeholder="Que recherchez-vous ?"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        leftIcon={Search}
                                        className="w-full"
                                    />
                                </div>

                                {/* Ville */}
                                <div>
                                    <select
                                        value={selectedCity}
                                        onChange={(e) => setSelectedCity(e.target.value)}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                                    >
                                        <option value="">Toutes les villes</option>
                                        {POPULAR_CITIES.map((city) => (
                                            <option key={city} value={city}>
                                                {city}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                {/* Catégorie */}
                                <div>
                                    <select
                                        value={selectedCategory}
                                        onChange={(e) => setSelectedCategory(e.target.value)}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                                    >
                                        <option value="">Toutes les catégories</option>
                                        {CATEGORIES.slice(0, 8).map((category) => (
                                            <option key={category.id} value={category.id}>
                                                {category.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <Button
                                type="submit"
                                size="lg"
                                className="w-full md:w-auto px-12 bg-accent hover:bg-accent/90 text-white"
                                rightIcon={Search}
                            >
                                Rechercher maintenant
                            </Button>
                        </form>

                        {/* Suggestions populaires */}
                        <div className="mt-6 text-left">
                            <p className="text-sm text-gray-600 mb-2">Recherches populaires :</p>
                            <div className="flex flex-wrap gap-2">
                                {[
                                    'Plombier Dakar',
                                    'Électricien Thiès',
                                    'Maçon Pikine',
                                    'Peintre Rufisque'
                                ].map((suggestion) => (
                                    <button
                                        key={suggestion}
                                        type="button"
                                        onClick={() => {
                                            setSearchQuery(suggestion)
                                            const params = new URLSearchParams()
                                            params.set('q', suggestion)
                                            navigate(`/annuaire?${params.toString()}`)
                                        }}
                                        className="px-3 py-1 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm rounded-full transition-colors"
                                    >
                                        {suggestion}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Statistiques */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    >
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                                className="text-center"
                            >
                                <stat.icon className="h-8 w-8 mx-auto mb-2 text-senegal-yellow" />
                                <div className="text-3xl font-bold text-white mb-1">
                                    {stat.value}
                                </div>
                                <div className="text-blue-100">
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Vague décorative */}
            <div className="absolute bottom-0 left-0 right-0">
                <svg
                    viewBox="0 0 1440 120"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-auto"
                >
                    <path
                        d="M0 120L48 110C96 100 192 80 288 70C384 60 480 60 576 65C672 70 768 80 864 85C960 90 1056 90 1152 85C1248 80 1344 70 1392 65L1440 60V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0Z"
                        fill="white"
                    />
                </svg>
            </div>
        </section>
    )
}

export default HeroSection
