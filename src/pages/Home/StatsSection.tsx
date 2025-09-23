import React from 'react'
import { motion } from 'framer-motion'
import { Building2, Users, MapPin, Trophy, CheckCircle, Clock } from 'lucide-react'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const StatsSection: React.FC = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    const stats = [
        {
            id: 1,
            icon: Building2,
            value: 1200,
            suffix: '+',
            label: 'Entreprises référencées',
            description: 'Professionnels vérifiés',
            color: 'text-primary'
        },
        {
            id: 2,
            icon: Users,
            value: 15000,
            suffix: '+',
            label: 'Utilisateurs actifs',
            description: 'Font confiance à notre plateforme',
            color: 'text-secondary'
        },
        {
            id: 3,
            icon: MapPin,
            value: 25,
            suffix: '',
            label: 'Villes couvertes',
            description: 'À travers tout le Sénégal',
            color: 'text-accent'
        },
        {
            id: 4,
            icon: Trophy,
            value: 3500,
            suffix: '+',
            label: 'Projets réalisés',
            description: 'Avec succès cette année',
            color: 'text-green-600'
        },
        {
            id: 5,
            icon: CheckCircle,
            value: 95,
            suffix: '%',
            label: 'Taux de satisfaction',
            description: 'Client recommandent nos pros',
            color: 'text-emerald-600'
        },
        {
            id: 6,
            icon: Clock,
            value: 24,
            suffix: 'h',
            label: 'Support disponible',
            description: 'Assistance 7j/7',
            color: 'text-purple-600'
        }
    ]

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.2
            }
        }
    }

    const itemVariants = {
        hidden: {
            opacity: 0,
            y: 30,
            scale: 0.9
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: [0.04, 0.62, 0.23, 0.98]
            }
        }
    }

    const CountUpAnimation: React.FC<{ value: number; duration?: number }> = ({
        value,
        duration = 2
    }) => {
        return (
            <motion.span
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5 }}
            >
                <motion.span
                    initial={{ scale: 0.5 }}
                    animate={isInView ? { scale: 1 } : { scale: 0.5 }}
                    transition={{ duration }}
                    custom={value}
                >
                    {isInView ? value.toLocaleString() : 0}
                </motion.span>
            </motion.span>
        )
    }

    return (
        <section className="py-20 bg-gray-50" ref={ref}>
            <div className="container mx-auto px-4">
                {/* En-tête de section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
                        L'annuaire BTP de référence au Sénégal
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Depuis notre lancement, nous connectons clients et professionnels
                        pour des projets réussis partout au Sénégal.
                    </p>
                </motion.div>

                {/* Grille des statistiques */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {stats.map((stat) => (
                        <motion.div
                            key={stat.id}
                            variants={itemVariants}
                            className="bg-white rounded-lg p-8 shadow-sm border border-gray-200 text-center hover:shadow-lg transition-shadow duration-300"
                        >
                            <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-50 mb-6`}>
                                <stat.icon className={`h-8 w-8 ${stat.color}`} />
                            </div>

                            <div className="mb-4">
                                <div className="text-4xl font-bold text-gray-900 mb-2">
                                    <CountUpAnimation value={stat.value} />
                                    <span className={stat.color}>{stat.suffix}</span>
                                </div>
                                <h3 className="text-lg font-semibold text-gray-800 mb-1">
                                    {stat.label}
                                </h3>
                                <p className="text-gray-600 text-sm">
                                    {stat.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Section témoignage */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="mt-20 bg-white rounded-lg p-8 md:p-12 shadow-sm border border-gray-200"
                >
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="text-senegal-green text-6xl mb-6">"</div>
                        <blockquote className="text-xl md:text-2xl text-gray-700 font-medium mb-8 italic">
                            Grâce à l'Annuaire BTP Sénégal, j'ai trouvé des professionnels de qualité
                            pour la construction de ma maison. Un service remarquable et des entreprises fiables.
                        </blockquote>
                        <div className="flex items-center justify-center space-x-4">
                            <img
                                src="/images/testimonials/client-1.jpg"
                                alt="Client satisfait"
                                className="w-16 h-16 rounded-full object-cover"
                                onError={(e) => {
                                    e.currentTarget.src = `https://ui-avatars.com/api/?name=Amadou+Diallo&background=1e40af&color=fff`
                                }}
                            />
                            <div className="text-left">
                                <div className="font-semibold text-gray-900">Amadou Diallo</div>
                                <div className="text-gray-600">Propriétaire, Dakar</div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default StatsSection
