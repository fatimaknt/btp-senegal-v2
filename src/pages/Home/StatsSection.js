import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
import { Building2, Users, MapPin, Trophy, CheckCircle, Clock } from 'lucide-react';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
const StatsSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
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
    ];
    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.2
            }
        }
    };
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
                ease: "easeOut"
            }
        }
    };
    const CountUpAnimation = ({ value, duration = 2 }) => {
        return (_jsx(motion.span, { initial: { opacity: 0 }, animate: isInView ? { opacity: 1 } : { opacity: 0 }, transition: { duration: 0.5 }, children: _jsx(motion.span, { initial: { scale: 0.5 }, animate: isInView ? { scale: 1 } : { scale: 0.5 }, transition: { duration }, custom: value, children: isInView ? value.toLocaleString() : 0 }) }));
    };
    return (_jsx("section", { className: "py-20 bg-orange-50", ref: ref, children: _jsxs("div", { className: "container mx-auto px-4", children: [_jsxs(motion.div, { initial: { opacity: 0, y: 30 }, animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }, transition: { duration: 0.6 }, className: "text-center mb-16", children: [_jsx("h2", { className: "text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4", children: "L'annuaire BTP de r\u00E9f\u00E9rence au S\u00E9n\u00E9gal" }), _jsx("p", { className: "text-xl text-gray-600 max-w-3xl mx-auto", children: "Depuis notre lancement, nous connectons clients et professionnels pour des projets r\u00E9ussis partout au S\u00E9n\u00E9gal." })] }), _jsx(motion.div, { variants: containerVariants, initial: "hidden", animate: isInView ? "visible" : "hidden", className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", children: stats.map((stat) => (_jsxs(motion.div, { variants: itemVariants, className: "bg-white rounded-lg p-8 shadow-sm border border-gray-200 text-center hover:shadow-lg transition-shadow duration-300", children: [_jsx("div", { className: `inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-50 mb-6`, children: _jsx(stat.icon, { className: `h-8 w-8 ${stat.color}` }) }), _jsxs("div", { className: "mb-4", children: [_jsxs("div", { className: "text-4xl font-bold text-gray-900 mb-2", children: [_jsx(CountUpAnimation, { value: stat.value }), _jsx("span", { className: stat.color, children: stat.suffix })] }), _jsx("h3", { className: "text-lg font-semibold text-gray-800 mb-1", children: stat.label }), _jsx("p", { className: "text-gray-600 text-sm", children: stat.description })] })] }, stat.id))) }), _jsx(motion.div, { initial: { opacity: 0, y: 30 }, animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }, transition: { duration: 0.6, delay: 0.8 }, className: "mt-20 bg-white rounded-lg p-8 md:p-12 shadow-sm border border-gray-200", children: _jsxs("div", { className: "max-w-4xl mx-auto text-center", children: [_jsx("div", { className: "text-senegal-green text-6xl mb-6", children: "\"" }), _jsx("blockquote", { className: "text-xl md:text-2xl text-gray-700 font-medium mb-8 italic", children: "Gr\u00E2ce \u00E0 l'Annuaire BTP S\u00E9n\u00E9gal, j'ai trouv\u00E9 des professionnels de qualit\u00E9 pour la construction de ma maison. Un service remarquable et des entreprises fiables." }), _jsxs("div", { className: "flex items-center justify-center space-x-4", children: [_jsx("img", { src: "/images/testimonials/client-1.jpg", alt: "Client satisfait", className: "w-16 h-16 rounded-full object-cover", style: {
                                            imageRendering: 'high-quality',
                                            imageRendering: '-webkit-optimize-contrast',
                                            imageRendering: 'crisp-edges'
                                        }, onError: (e) => {
                                            e.currentTarget.src = `https://ui-avatars.com/api/?name=Amadou+Diallo&background=1e40af&color=fff&size=128`;
                                        } }), _jsxs("div", { className: "text-left", children: [_jsx("div", { className: "font-semibold text-gray-900", children: "Amadou Diallo" }), _jsx("div", { className: "text-gray-600", children: "Propri\u00E9taire, Dakar" })] })] })] }) })] }) }));
};
export default StatsSection;
