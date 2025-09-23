import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import * as Icons from 'lucide-react'
import { CATEGORIES } from '../../data/categories'
import Button from '../../components/ui/Button'
import StaggerList from '../../components/animations/StaggerList'

const CategoriesSection: React.FC = () => {
    const navigate = useNavigate()

    const handleCategoryClick = (categoryId: string) => {
        navigate(`/annuaire?category=${categoryId}`)
    }

    const getDynamicIcon = (iconName: string) => {
        const IconComponent = (Icons as any)[iconName]
        return IconComponent || Icons.Building2
    }

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                {/* En-tête de section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
                        Explorez toutes les spécialités BTP
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Trouvez rapidement les professionnels adaptés à vos besoins
                        parmi nos catégories spécialisées.
                    </p>
                </motion.div>

                {/* Grille des catégories */}
                <StaggerList className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
                    {CATEGORIES.slice(0, 8).map((category) => {
                        const IconComponent = getDynamicIcon(category.icon)

                        return (
                            <motion.div
                                key={category.id}
                                whileHover={{ y: -5, scale: 1.03 }}
                                whileTap={{ scale: 0.98 }}
                                className="group cursor-pointer"
                                onClick={() => handleCategoryClick(category.id)}
                            >
                                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 group-hover:border-primary/20">
                                    <div
                                        className="w-16 h-16 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                                        style={{ backgroundColor: category.color + '15' }}
                                    >
                                        <IconComponent
                                            className="h-8 w-8"
                                            style={{ color: category.color }}
                                        />
                                    </div>

                                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                                        {category.name}
                                    </h3>

                                    <p className="text-sm text-gray-600 mb-4">
                                        {category.services?.slice(0, 3).join(', ')}
                                        {category.services && category.services.length > 3 && '...'}
                                    </p>

                                    <div className="flex items-center text-primary text-sm font-medium group-hover:translate-x-1 transition-transform">
                                        Voir les entreprises
                                        <ChevronRight className="h-4 w-4 ml-1" />
                                    </div>
                                </div>
                            </motion.div>
                        )
                    })}
                </StaggerList>

                {/* Section call-to-action */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center"
                >
                    <div className="bg-gradient-to-r from-primary to-secondary rounded-lg p-8 md:p-12 text-white">
                        <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4">
                            Vous êtes un professionnel du BTP ?
                        </h3>
                        <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
                            Rejoignez notre annuaire et développez votre activité.
                            Plus de 10 000 clients potentiels consultent notre plateforme chaque mois.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button
                                size="lg"
                                className="bg-white text-primary hover:bg-gray-100"
                                onClick={() => navigate('/auth/register')}
                            >
                                Inscrire mon entreprise
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                className="border-white text-white hover:bg-white hover:text-primary"
                                onClick={() => navigate('/about')}
                            >
                                En savoir plus
                            </Button>
                        </div>
                    </div>
                </motion.div>

                {/* Statistiques par catégorie */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
                >
                    {[
                        { label: 'Construction', count: '350+' },
                        { label: 'Plomberie', count: '180+' },
                        { label: 'Électricité', count: '220+' },
                        { label: 'Peinture', count: '150+' }
                    ].map((stat, index) => (
                        <div key={stat.label} className="space-y-2">
                            <div className="text-3xl font-bold text-primary">{stat.count}</div>
                            <div className="text-gray-600">{stat.label}</div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default CategoriesSection
