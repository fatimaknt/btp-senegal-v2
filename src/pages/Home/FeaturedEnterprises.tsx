import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import { MOCK_ENTERPRISES } from '../../data/mockData'
import EnterpriseCard from '../../components/enterprise/EnterpriseCard'
import Button from '../../components/ui/Button'
import StaggerList from '../../components/animations/StaggerList'

const FeaturedEnterprises: React.FC = () => {
    const navigate = useNavigate()

    // Prendre les entreprises les mieux notées
    const featuredEnterprises = MOCK_ENTERPRISES
        .filter(enterprise => enterprise.is_verified)
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 6)

    return (
        <section className="py-20 bg-gray-50">
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
                        Entreprises certifiées en vedette
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Découvrez les professionnels les mieux notés et certifiés
                        par notre équipe pour la qualité de leurs services.
                    </p>
                </motion.div>

                {/* Grille des entreprises */}
                <StaggerList className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {featuredEnterprises.map((enterprise) => (
                        <EnterpriseCard
                            key={enterprise.id}
                            enterprise={enterprise}
                            showDistance={false}
                        />
                    ))}
                </StaggerList>

                {/* Call-to-action */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center"
                >
                    <Button
                        size="lg"
                        onClick={() => navigate('/annuaire')}
                        rightIcon={ChevronRight}
                        className="px-8"
                    >
                        Voir toutes les entreprises
                    </Button>
                </motion.div>

                {/* Section avantages */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="mt-20"
                >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: 'Entreprises vérifiées',
                                description: 'Toutes les entreprises sont vérifiées par notre équipe avant publication',
                                icon: '✓'
                            },
                            {
                                title: 'Avis authentiques',
                                description: 'Seuls les clients ayant fait appel aux services peuvent laisser un avis',
                                icon: '⭐'
                            },
                            {
                                title: 'Support client',
                                description: 'Notre équipe vous accompagne dans vos recherches et démarches',
                                icon: '💬'
                            }
                        ].map((advantage, index) => (
                            <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 text-center">
                                <div className="text-4xl mb-4">{advantage.icon}</div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                    {advantage.title}
                                </h3>
                                <p className="text-gray-600">
                                    {advantage.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Témoignages clients */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="mt-20"
                >
                    <h3 className="text-2xl font-heading font-bold text-center text-gray-900 mb-12">
                        Ce que disent nos clients
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                name: 'Fatou Sall',
                                location: 'Dakar',
                                text: 'Service excellent ! J\'ai trouvé un électricien compétent en quelques minutes.',
                                rating: 5
                            },
                            {
                                name: 'Moussa Diop',
                                location: 'Thiès',
                                text: 'Plateforme très pratique avec des professionnels de qualité.',
                                rating: 5
                            },
                            {
                                name: 'Aïcha Ba',
                                location: 'Rufisque',
                                text: 'Rapide, efficace et des tarifs transparents. Je recommande !',
                                rating: 5
                            }
                        ].map((testimonial, index) => (
                            <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                                <div className="flex items-center mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <span key={i} className="text-yellow-400">⭐</span>
                                    ))}
                                </div>
                                <p className="text-gray-700 mb-4 italic">
                                    "{testimonial.text}"
                                </p>
                                <div className="text-sm">
                                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                                    <div className="text-gray-600">{testimonial.location}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default FeaturedEnterprises
