import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import * as Icons from 'lucide-react';
import { CATEGORIES } from '../../data/categories';
import Button from '../../components/ui/Button';
import StaggerList from '../../components/animations/StaggerList';
const CategoriesSection = () => {
    const navigate = useNavigate();
    const handleCategoryClick = (categoryId) => {
        navigate(`/annuaire?category=${categoryId}`);
    };
    const getDynamicIcon = (iconName) => {
        const IconComponent = Icons[iconName];
        return IconComponent || Icons.Building2;
    };
    return (_jsx("section", { className: "py-20 bg-white", children: _jsxs("div", { className: "container mx-auto px-4", children: [_jsxs(motion.div, { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 }, className: "text-center mb-16", children: [_jsx("h2", { className: "text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4", children: "Explorez toutes les sp\u00E9cialit\u00E9s BTP" }), _jsx("p", { className: "text-xl text-gray-600 max-w-3xl mx-auto", children: "Trouvez rapidement les professionnels adapt\u00E9s \u00E0 vos besoins parmi nos cat\u00E9gories sp\u00E9cialis\u00E9es." })] }), _jsx(StaggerList, { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12", children: CATEGORIES.slice(0, 8).map((category) => {
                        const IconComponent = getDynamicIcon(category.icon);
                        return (_jsx(motion.div, { whileHover: { y: -5, scale: 1.03 }, whileTap: { scale: 0.98 }, className: "group cursor-pointer", onClick: () => handleCategoryClick(category.id), children: _jsxs("div", { className: "bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 group-hover:border-primary/20", children: [_jsx("div", { className: "w-16 h-16 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300", style: { backgroundColor: category.color + '15' }, children: _jsx(IconComponent, { className: "h-8 w-8", style: { color: category.color } }) }), _jsx("h3", { className: "text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors", children: category.name }), _jsxs("p", { className: "text-sm text-gray-600 mb-4", children: [category.services?.slice(0, 3).join(', '), category.services && category.services.length > 3 && '...'] }), _jsxs("div", { className: "flex items-center text-primary text-sm font-medium group-hover:translate-x-1 transition-transform", children: ["Voir les entreprises", _jsx(ChevronRight, { className: "h-4 w-4 ml-1" })] })] }) }, category.id));
                    }) }), _jsx(motion.div, { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6, delay: 0.4 }, className: "text-center", children: _jsxs("div", { className: "bg-gradient-to-r from-primary to-secondary rounded-lg p-8 md:p-12 text-white", children: [_jsx("h3", { className: "text-2xl md:text-3xl font-heading font-bold mb-4", children: "Vous \u00EAtes un professionnel du BTP ?" }), _jsx("p", { className: "text-lg text-blue-100 mb-8 max-w-2xl mx-auto", children: "Rejoignez notre annuaire et d\u00E9veloppez votre activit\u00E9. Plus de 10 000 clients potentiels consultent notre plateforme chaque mois." }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [_jsx(Button, { size: "lg", className: "bg-white text-primary hover:bg-gray-100", onClick: () => navigate('/auth/register'), children: "Inscrire mon entreprise" }), _jsx(Button, { variant: "outline", size: "lg", className: "border-white text-white hover:bg-white hover:text-primary", onClick: () => navigate('/about'), children: "En savoir plus" })] })] }) }), _jsx(motion.div, { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6, delay: 0.6 }, className: "mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center", children: [
                        { label: 'Construction', count: '350+' },
                        { label: 'Plomberie', count: '180+' },
                        { label: 'Électricité', count: '220+' },
                        { label: 'Peinture', count: '150+' }
                    ].map((stat, index) => (_jsxs("div", { className: "space-y-2", children: [_jsx("div", { className: "text-3xl font-bold text-primary", children: stat.count }), _jsx("div", { className: "text-gray-600", children: stat.label })] }, stat.label))) })] }) }));
};
export default CategoriesSection;
