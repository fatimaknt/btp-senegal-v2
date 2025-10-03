import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Calendar, User, ChevronRight, Clock } from 'lucide-react';
import Button from '../../components/ui/Button';
import { Card, CardContent } from '../../components/ui/Card';
import StaggerList from '../../components/animations/StaggerList';
const BlogSection = () => {
    const navigate = useNavigate();
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
    ];
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('fr-FR', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        });
    };
    return (_jsx("section", { className: "py-20 bg-white", children: _jsxs("div", { className: "container mx-auto px-4", children: [_jsxs(motion.div, { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 }, className: "text-center mb-16", children: [_jsx("h2", { className: "text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4", children: "Actualit\u00E9s et conseils BTP" }), _jsx("p", { className: "text-xl text-gray-600 max-w-3xl mx-auto", children: "Restez inform\u00E9 des derni\u00E8res tendances, r\u00E9glementations et bonnes pratiques du secteur BTP au S\u00E9n\u00E9gal." })] }), _jsx(StaggerList, { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12", children: articles.map((article) => (_jsx(motion.div, { whileHover: { y: -5 }, transition: { duration: 0.2 }, children: _jsxs(Card, { className: "overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer h-full", children: [_jsxs("div", { className: "relative h-48 overflow-hidden", children: [_jsx("img", { src: article.image, alt: article.title, className: "w-full h-full object-cover hover:scale-105 transition-transform duration-300", onError: (e) => {
                                                e.currentTarget.src = `https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&h=300&fit=crop`;
                                            } }), _jsx("div", { className: "absolute top-4 left-4", children: _jsx("span", { className: "bg-primary text-white px-3 py-1 rounded-full text-xs font-medium", children: article.category }) }), _jsxs("div", { className: "absolute top-4 right-4 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-xs flex items-center space-x-1", children: [_jsx(Clock, { className: "h-3 w-3" }), _jsx("span", { children: article.readTime })] })] }), _jsxs(CardContent, { className: "p-6", children: [_jsx("h3", { className: "text-xl font-semibold text-gray-900 mb-3 line-clamp-2 hover:text-primary transition-colors", children: article.title }), _jsx("p", { className: "text-gray-600 text-sm mb-4 line-clamp-3", children: article.excerpt }), _jsxs("div", { className: "flex items-center justify-between text-sm text-gray-500 mb-4", children: [_jsx("div", { className: "flex items-center space-x-3", children: _jsxs("div", { className: "flex items-center space-x-1", children: [_jsx(User, { className: "h-4 w-4" }), _jsx("span", { children: article.author })] }) }), _jsxs("div", { className: "flex items-center space-x-1", children: [_jsx(Calendar, { className: "h-4 w-4" }), _jsx("span", { children: formatDate(article.publishedAt) })] })] }), _jsxs(Button, { variant: "outline", size: "sm", className: "w-full group", onClick: () => navigate(`/blog/${article.id}`), children: ["Lire l'article", _jsx(ChevronRight, { className: "h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" })] })] })] }) }, article.id))) }), _jsx(motion.div, { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6, delay: 0.4 }, className: "text-center", children: _jsx(Button, { size: "lg", variant: "outline", onClick: () => navigate('/blog'), rightIcon: ChevronRight, className: "px-8", children: "Voir tous les articles" }) }), _jsx(motion.div, { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6, delay: 0.6 }, className: "mt-20 bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg p-8 md:p-12", children: _jsxs("div", { className: "max-w-2xl mx-auto text-center", children: [_jsx("h3", { className: "text-2xl md:text-3xl font-heading font-bold text-gray-900 mb-4", children: "Restez inform\u00E9 des actualit\u00E9s BTP" }), _jsx("p", { className: "text-lg text-gray-600 mb-8", children: "Recevez chaque semaine notre newsletter avec les derni\u00E8res actualit\u00E9s, conseils et opportunit\u00E9s du secteur BTP au S\u00E9n\u00E9gal." }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-4 max-w-md mx-auto", children: [_jsx("input", { type: "email", placeholder: "Votre adresse email", className: "flex-1 px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary" }), _jsx(Button, { className: "sm:px-8", children: "S'abonner" })] }), _jsx("p", { className: "text-sm text-gray-500 mt-4", children: "Pas de spam, d\u00E9sabonnement facile \u00E0 tout moment." })] }) })] }) }));
};
export default BlogSection;
