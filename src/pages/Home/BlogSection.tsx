import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { Calendar, User, ChevronRight, Clock } from 'lucide-react'
import Button from '../../components/ui/Button'
import { Card, CardContent } from '../../components/ui/Card'
import StaggerList from '../../components/animations/StaggerList'

const BlogSection: React.FC = () => {
    const navigate = useNavigate()

    // Articles de blog mockés
    const articles = [
        {
            id: '1',
            title: 'Guide complet pour choisir son entrepreneur en construction',
            excerpt: 'Découvrez les critères essentiels pour sélectionner le bon professionnel pour votre projet de construction au Sénégal.',
            image: '/images/blog/guide-entrepreneur.jpg',
            category: 'Conseils',
            author: 'Équipe BTP Sénégal',
            publishedAt: '2024-03-20',
            readTime: '5 min'
        },
        {
            id: '2',
            title: 'Les nouvelles normes de construction au Sénégal en 2024',
            excerpt: 'Tour d\'horizon des nouvelles réglementations et normes qui impactent le secteur BTP sénégalais cette année.',
            image: '/images/blog/normes-2024.jpg',
            category: 'Réglementation',
            author: 'Amadou Diallo',
            publishedAt: '2024-03-18',
            readTime: '7 min'
        },
        {
            id: '3',
            title: 'Construction durable : les matériaux écologiques locaux',
            excerpt: 'Zoom sur les matériaux de construction écologiques disponibles au Sénégal et leurs avantages.',
            image: '/images/blog/materiaux-eco.jpg',
            category: 'Écologie',
            author: 'Fatou Seck',
            publishedAt: '2024-03-15',
            readTime: '6 min'
        }
    ]

    const formatDate = (dateString: string) => {
        const date = new Date(dateString)
        return date.toLocaleDateString('fr-FR', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        })
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
                        Actualités et conseils BTP
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Restez informé des dernières tendances, réglementations et bonnes pratiques
                        du secteur BTP au Sénégal.
                    </p>
                </motion.div>

                {/* Articles de blog */}
                <StaggerList className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {articles.map((article) => (
                        <motion.div
                            key={article.id}
                            whileHover={{ y: -5 }}
                            transition={{ duration: 0.2 }}
                        >
                            <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer h-full">
                                {/* Image d'article */}
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={article.image}
                                        alt={article.title}
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                        onError={(e) => {
                                            e.currentTarget.src = `https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&h=300&fit=crop`
                                        }}
                                    />
                                    <div className="absolute top-4 left-4">
                                        <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-medium">
                                            {article.category}
                                        </span>
                                    </div>
                                    <div className="absolute top-4 right-4 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-xs flex items-center space-x-1">
                                        <Clock className="h-3 w-3" />
                                        <span>{article.readTime}</span>
                                    </div>
                                </div>

                                <CardContent className="p-6">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2 hover:text-primary transition-colors">
                                        {article.title}
                                    </h3>

                                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                                        {article.excerpt}
                                    </p>

                                    {/* Métadonnées */}
                                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                                        <div className="flex items-center space-x-3">
                                            <div className="flex items-center space-x-1">
                                                <User className="h-4 w-4" />
                                                <span>{article.author}</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center space-x-1">
                                            <Calendar className="h-4 w-4" />
                                            <span>{formatDate(article.publishedAt)}</span>
                                        </div>
                                    </div>

                                    {/* Bouton de lecture */}
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="w-full group"
                                        onClick={() => navigate(`/blog/${article.id}`)}
                                    >
                                        Lire l'article
                                        <ChevronRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </StaggerList>

                {/* Call-to-action blog */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center"
                >
                    <Button
                        size="lg"
                        variant="outline"
                        onClick={() => navigate('/blog')}
                        rightIcon={ChevronRight}
                        className="px-8"
                    >
                        Voir tous les articles
                    </Button>
                </motion.div>

                {/* Newsletter signup */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="mt-20 bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg p-8 md:p-12"
                >
                    <div className="max-w-2xl mx-auto text-center">
                        <h3 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 mb-4">
                            Restez informé des actualités BTP
                        </h3>
                        <p className="text-lg text-gray-600 mb-8">
                            Recevez chaque semaine notre newsletter avec les dernières actualités,
                            conseils et opportunités du secteur BTP au Sénégal.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Votre adresse email"
                                className="flex-1 px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary"
                            />
                            <Button className="sm:px-8">
                                S'abonner
                            </Button>
                        </div>

                        <p className="text-sm text-gray-500 mt-4">
                            Pas de spam, désabonnement facile à tout moment.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default BlogSection
