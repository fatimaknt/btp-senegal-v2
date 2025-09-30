import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { MOCK_ENTERPRISES } from '../../data/mockData';
import EnterpriseCard from '../../components/enterprise/EnterpriseCard';
import Button from '../../components/ui/Button';
import StaggerList from '../../components/animations/StaggerList';
const FeaturedEnterprises = () => {
    const navigate = useNavigate();
    // Prendre les entreprises les mieux notées
    const featuredEnterprises = MOCK_ENTERPRISES
        .filter(enterprise => enterprise.is_verified)
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 6);
    return (_jsx("section", { className: "py-20 bg-gray-50", children: _jsxs("div", { className: "container mx-auto px-4", children: [_jsxs(motion.div, { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 }, className: "text-center mb-16", children: [_jsx("h2", { className: "text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4", children: "Entreprises certifi\u00E9es en vedette" }), _jsx("p", { className: "text-xl text-gray-600 max-w-3xl mx-auto", children: "D\u00E9couvrez les professionnels les mieux not\u00E9s et certifi\u00E9s par notre \u00E9quipe pour la qualit\u00E9 de leurs services." })] }), _jsx(StaggerList, { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12", children: featuredEnterprises.map((enterprise) => (_jsx(EnterpriseCard, { enterprise: enterprise, showDistance: false }, enterprise.id))) }), _jsx(motion.div, { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6, delay: 0.4 }, className: "text-center", children: _jsx(Button, { size: "lg", onClick: () => navigate('/annuaire'), rightIcon: ChevronRight, className: "px-8", children: "Voir toutes les entreprises" }) }), _jsx(motion.div, { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6, delay: 0.6 }, className: "mt-20", children: _jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8", children: [
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
                        ].map((advantage, index) => (_jsxs("div", { className: "bg-white rounded-lg p-6 shadow-sm border border-gray-200 text-center", children: [_jsx("div", { className: "text-4xl mb-4", children: advantage.icon }), _jsx("h3", { className: "text-lg font-semibold text-gray-900 mb-2", children: advantage.title }), _jsx("p", { className: "text-gray-600", children: advantage.description })] }, index))) }) }), _jsxs(motion.div, { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6, delay: 0.8 }, className: "mt-20", children: [_jsx("h3", { className: "text-2xl font-heading font-bold text-center text-gray-900 mb-12", children: "Ce que disent nos clients" }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", children: [
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
                            ].map((testimonial, index) => (_jsxs("div", { className: "bg-white rounded-lg p-6 shadow-sm border border-gray-200", children: [_jsx("div", { className: "flex items-center mb-4", children: [...Array(testimonial.rating)].map((_, i) => (_jsx("span", { className: "text-yellow-400", children: "\u2B50" }, i))) }), _jsxs("p", { className: "text-gray-700 mb-4 italic", children: ["\"", testimonial.text, "\""] }), _jsxs("div", { className: "text-sm", children: [_jsx("div", { className: "font-semibold text-gray-900", children: testimonial.name }), _jsx("div", { className: "text-gray-600", children: testimonial.location })] })] }, index))) })] })] }) }));
};
export default FeaturedEnterprises;
