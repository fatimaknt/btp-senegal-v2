import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Routes, Route } from 'react-router-dom';
import { Construction as ConstructionIcon, GpsFixed as TargetIcon, Handshake as NetworkIcon } from '@mui/icons-material';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
// Pages imports
import HomePage from './pages/Home/HomePage';
import EnterprisePage from './pages/Enterprise/EnterprisePage';
import BlogPage from './pages/Blog/BlogPage';
import ArticlePage from './pages/Blog/ArticlePage';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import ResultsPage from './pages/Results/ResultsPage';
import CompanyProfilePage from './pages/CompanyProfile/CompanyProfilePage';
import ServicesPage from './pages/Services/ServicesPage';
import AdminPage from './pages/Admin/AdminPage';
import AnnuairePage from './pages/Annuaire/AnnuairePage';
import NewsPage from './pages/News/NewsPage';
const Router = () => {
    console.log('Router loaded, current path:', window.location.pathname);
    return (_jsxs(_Fragment, { children: [_jsx(Header, {}), _jsx("main", { children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(HomePage, {}) }), _jsx(Route, { path: "/annuaire", element: _jsx(AnnuairePage, {}) }), _jsx(Route, { path: "/actualites", element: _jsx(NewsPage, {}) }), _jsx(Route, { path: "/resultats", element: _jsx(ResultsPage, {}) }), _jsx(Route, { path: "/entreprise/:companyId", element: _jsx(CompanyProfilePage, {}) }), _jsx(Route, { path: "/services", element: _jsx(ServicesPage, {}) }), _jsx(Route, { path: "/entreprise/:id", element: _jsx(EnterprisePage, {}) }), _jsx(Route, { path: "/blog", element: _jsx(BlogPage, {}) }), _jsx(Route, { path: "/blog/:slug", element: _jsx(ArticlePage, {}) }), _jsx(Route, { path: "/article/:id", element: _jsx(ArticlePage, {}) }), _jsx(Route, { path: "/auth/login", element: _jsx(Login, {}) }), _jsx(Route, { path: "/auth/register", element: _jsx(Register, {}) }), _jsx(Route, { path: "/admin", element: _jsx(AdminPage, {}) }), _jsx(Route, { path: "/contact", element: _jsx(ContactPage, {}) }), _jsx(Route, { path: "/about", element: _jsx(AboutPage, {}) }), _jsx(Route, { path: "*", element: _jsx(NotFoundPage, {}) })] }) }), _jsx(Footer, {})] }));
};
// Composants de pages simples
const ContactPage = () => (_jsx("div", { style: {
        minHeight: '60vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f8fafc',
        padding: '4rem 1rem'
    }, children: _jsxs("div", { style: { textAlign: 'center', maxWidth: '600px' }, children: [_jsx("h1", { style: {
                    fontSize: '3rem',
                    fontWeight: 800,
                    color: '#f97316',
                    marginBottom: '1rem',
                    background: 'linear-gradient(45deg, #f97316 0%, #fb923c 50%, #ea580c 100%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                }, children: "\uD83D\uDCDE Contact" }), _jsx("p", { style: {
                    fontSize: '1.2rem',
                    color: '#6b7280',
                    marginBottom: '2rem'
                }, children: "Contactez-nous pour toute question sur notre annuaire BTP au S\u00E9n\u00E9gal" }), _jsxs("div", { style: {
                    padding: '2rem',
                    backgroundColor: 'white',
                    borderRadius: '12px',
                    boxShadow: '0 10px 25px rgba(249, 115, 22, 0.1)'
                }, children: [_jsxs("div", { style: { marginBottom: '1rem' }, children: [_jsx("strong", { style: { color: '#f97316' }, children: "\uD83D\uDCE7 Email:" }), " contact@btpsenegal.com"] }), _jsxs("div", { style: { marginBottom: '1rem' }, children: [_jsx("strong", { style: { color: '#f97316' }, children: "\uD83D\uDCDE T\u00E9l\u00E9phone:" }), " +221774424223"] }), _jsxs("div", { children: [_jsx("strong", { style: { color: '#f97316' }, children: "\uD83D\uDCCD Adresse:" }), " Dakar, S\u00E9n\u00E9gal"] })] })] }) }));
const AboutPage = () => (_jsx("div", { style: {
        minHeight: '60vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f8fafc',
        padding: '4rem 1rem'
    }, children: _jsxs("div", { style: { textAlign: 'center', maxWidth: '800px' }, children: [_jsxs("div", { style: { display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: '1rem' }, children: [_jsx(ConstructionIcon, { sx: { fontSize: '3rem', color: '#f97316' } }), _jsx("h1", { style: {
                            fontSize: '3rem',
                            fontWeight: 800,
                            color: '#f97316',
                            background: 'linear-gradient(45deg, #f97316 0%, #fb923c 50%, #ea580c 100%)',
                            backgroundClip: 'text',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            margin: 0
                        }, children: "\u00C0 propos" })] }), _jsxs("div", { style: {
                    padding: '3rem',
                    backgroundColor: 'white',
                    borderRadius: '12px',
                    boxShadow: '0 10px 25px rgba(249, 115, 22, 0.1)',
                    textAlign: 'left'
                }, children: [_jsxs("p", { style: {
                            fontSize: '1.2rem',
                            color: '#4b5563',
                            lineHeight: '1.7',
                            marginBottom: '2rem'
                        }, children: [_jsx("strong", { style: { color: '#f97316' }, children: "BTP S\u00E9n\u00E9gal" }), " est la plateforme de r\u00E9f\u00E9rence pour trouver les meilleurs professionnels du b\u00E2timent et des travaux publics au S\u00E9n\u00E9gal."] }), _jsx("p", { style: {
                            fontSize: '1.1rem',
                            color: '#6b7280',
                            lineHeight: '1.6',
                            marginBottom: '2rem'
                        }, children: "Notre mission est de connecter les particuliers et entreprises avec des professionnels qualifi\u00E9s et certifi\u00E9s dans tout le pays. Plus de 1000 entreprises nous font confiance pour d\u00E9velopper leur activit\u00E9." }), _jsxs("div", { style: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }, children: [_jsxs("div", { style: { textAlign: 'center' }, children: [_jsx("div", { style: { display: 'flex', justifyContent: 'center', marginBottom: '1rem' }, children: _jsx(TargetIcon, { sx: { fontSize: '3rem', color: '#f97316' } }) }), _jsx("h3", { style: { color: '#f97316', marginBottom: '0.5rem' }, children: "Notre Vision" }), _jsx("p", { style: { color: '#6b7280', fontSize: '0.9rem' }, children: "\u00CAtre la r\u00E9f\u00E9rence BTP au S\u00E9n\u00E9gal" })] }), _jsxs("div", { style: { textAlign: 'center' }, children: [_jsx("div", { style: { display: 'flex', justifyContent: 'center', marginBottom: '1rem' }, children: _jsx(NetworkIcon, { sx: { fontSize: '3rem', color: '#f97316' } }) }), _jsx("h3", { style: { color: '#f97316', marginBottom: '0.5rem' }, children: "Nos Valeurs" }), _jsx("p", { style: { color: '#6b7280', fontSize: '0.9rem' }, children: "Confiance, qualit\u00E9 et transparence" })] })] })] })] }) }));
const NotFoundPage = () => (_jsx("div", { style: {
        minHeight: '60vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f8fafc',
        padding: '4rem 1rem'
    }, children: _jsxs("div", { style: { textAlign: 'center' }, children: [_jsx("h1", { style: {
                    fontSize: '6rem',
                    fontWeight: 800,
                    color: '#f97316',
                    marginBottom: '1rem'
                }, children: "404" }), _jsx("h2", { style: {
                    fontSize: '2rem',
                    color: '#4b5563',
                    marginBottom: '1rem'
                }, children: "Page non trouv\u00E9e" }), _jsx("p", { style: {
                    fontSize: '1.1rem',
                    color: '#6b7280',
                    marginBottom: '2rem'
                }, children: "La page que vous cherchez n'existe pas ou a \u00E9t\u00E9 d\u00E9plac\u00E9e." }), _jsx("a", { href: "/", style: {
                    display: 'inline-block',
                    padding: '1rem 2rem',
                    backgroundColor: '#f97316',
                    color: 'white',
                    textDecoration: 'none',
                    borderRadius: '8px',
                    fontWeight: 600,
                    transition: 'all 0.3s ease'
                }, children: "\uD83C\uDFE0 Retour \u00E0 l'accueil" })] }) }));
export default Router;
