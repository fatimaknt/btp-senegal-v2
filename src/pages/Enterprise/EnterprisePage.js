import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Container, Typography, Button, Card, CardContent, Grid, Chip, Avatar, Rating, Tab, Tabs, List, ListItem, ListItemText, ListItemIcon, Paper } from '@mui/material';
import { LocationOn as LocationIcon, Phone as PhoneIcon, Email as EmailIcon, Language as WebsiteIcon, AccessTime as TimeIcon, CheckCircle as CheckIcon, Business as BusinessIcon, Share as ShareIcon, Favorite as FavoriteIcon } from '@mui/icons-material';
import PageTransition from '../../components/animations/PageTransition';
const EnterprisePage = () => {
    const { id } = useParams();
    const [tabValue, setTabValue] = useState(0);
    // Données mockées pour la démo
    const enterprise = {
        id: id || '1',
        name: 'BTP Excellence Dakar',
        category: 'Construction générale',
        description: 'Entreprise spécialisée dans la construction résidentielle et commerciale depuis plus de 15 ans. Nous offrons des services complets de construction, rénovation et aménagement.',
        city: 'Dakar',
        address: '25 Avenue Léopold Sédar Senghor, Plateau',
        phone: '+ 221774424223',
        email: 'contact@btpsenegal.com',
        website: 'www.btpexcellence.sn',
        rating: 4.8,
        reviews: 45,
        verified: true,
        services: ['Construction neuve', 'Rénovation', 'Maçonnerie', 'Béton armé', 'Carrelage', 'Peinture'],
        workingHours: {
            'Lundi - Vendredi': '8h00 - 18h00',
            'Samedi': '8h00 - 14h00',
            'Dimanche': 'Fermé'
        }
    };
    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);
    };
    return (_jsx(PageTransition, { children: _jsxs(Box, { sx: { backgroundColor: '#f8fafc', minHeight: '100vh' }, children: [_jsx(Box, { sx: {
                        backgroundColor: '#f97316',
                        color: 'white',
                        py: 6
                    }, children: _jsx(Container, { maxWidth: "lg", children: _jsxs(Grid, { container: true, spacing: 4, alignItems: "center", children: [_jsx(Grid, { item: true, xs: 12, md: 2, children: _jsx(Avatar, { sx: {
                                            width: 120,
                                            height: 120,
                                            bgcolor: 'rgba(255, 255, 255, 0.2)',
                                            mx: 'auto'
                                        }, children: _jsx(BusinessIcon, { sx: { fontSize: 60 } }) }) }), _jsxs(Grid, { item: true, xs: 12, md: 8, children: [_jsxs(Box, { sx: { display: 'flex', alignItems: 'center', gap: 2, mb: 2 }, children: [_jsx(Typography, { variant: "h3", sx: { fontWeight: 700 }, children: enterprise.name }), enterprise.verified && (_jsx(Chip, { icon: _jsx(CheckIcon, {}), label: "Certifi\u00E9", sx: {
                                                        backgroundColor: '#00853f',
                                                        color: 'white',
                                                        fontWeight: 600
                                                    } }))] }), _jsx(Typography, { variant: "h6", sx: { mb: 2, opacity: 0.9 }, children: enterprise.category }), _jsxs(Box, { sx: { display: 'flex', alignItems: 'center', gap: 2, mb: 2 }, children: [_jsx(Rating, { value: enterprise.rating, precision: 0.1, readOnly: true }), _jsxs(Typography, { variant: "body1", children: [enterprise.rating, " (", enterprise.reviews, " avis)"] })] }), _jsxs(Box, { sx: { display: 'flex', alignItems: 'center', gap: 1 }, children: [_jsx(LocationIcon, {}), _jsx(Typography, { variant: "body1", children: enterprise.city })] })] }), _jsx(Grid, { item: true, xs: 12, md: 2, children: _jsxs(Box, { sx: { display: 'flex', flexDirection: 'column', gap: 2 }, children: [_jsx(Button, { variant: "contained", sx: {
                                                    backgroundColor: 'white',
                                                    color: '#f97316',
                                                    fontWeight: 600,
                                                    '&:hover': {
                                                        backgroundColor: 'rgba(255, 255, 255, 0.9)',
                                                    }
                                                }, children: "\uD83D\uDCDE Contacter" }), _jsxs(Box, { sx: { display: 'flex', gap: 1 }, children: [_jsx(Button, { variant: "outlined", size: "small", sx: {
                                                            color: 'white',
                                                            borderColor: 'white',
                                                            '&:hover': {
                                                                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                                            }
                                                        }, children: _jsx(ShareIcon, {}) }), _jsx(Button, { variant: "outlined", size: "small", sx: {
                                                            color: 'white',
                                                            borderColor: 'white',
                                                            '&:hover': {
                                                                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                                            }
                                                        }, children: _jsx(FavoriteIcon, {}) })] })] }) })] }) }) }), _jsx(Container, { maxWidth: "lg", sx: { py: 4 }, children: _jsxs(Grid, { container: true, spacing: 4, children: [_jsxs(Grid, { item: true, xs: 12, md: 8, children: [_jsx(Paper, { sx: { mb: 3 }, children: _jsxs(Tabs, { value: tabValue, onChange: handleTabChange, variant: "fullWidth", sx: {
                                                '& .MuiTab-root': { fontWeight: 600 },
                                                '& .Mui-selected': { color: '#f97316' },
                                                '& .MuiTabs-indicator': { backgroundColor: '#f97316' }
                                            }, children: [_jsx(Tab, { label: "\uD83D\uDCCB \u00C0 propos" }), _jsx(Tab, { label: "\uD83D\uDD27 Services" }), _jsx(Tab, { label: "\u2B50 Avis" })] }) }), _jsx(Card, { children: _jsxs(CardContent, { sx: { p: 4 }, children: [tabValue === 0 && (_jsxs(Box, { children: [_jsxs(Typography, { variant: "h5", sx: { fontWeight: 600, mb: 3, color: '#f97316' }, children: ["\u00C0 propos de ", enterprise.name] }), _jsx(Typography, { variant: "body1", sx: { mb: 4, lineHeight: 1.7 }, children: enterprise.description }), _jsx(Typography, { variant: "body1", sx: { lineHeight: 1.7 }, children: "Avec une \u00E9quipe d'experts qualifi\u00E9s et une approche centr\u00E9e sur la qualit\u00E9, nous r\u00E9alisons vos projets dans le respect des d\u00E9lais et budgets convenus. Notre savoir-faire reconnu au S\u00E9n\u00E9gal nous permet d'intervenir sur tous types de chantiers, du r\u00E9sidentiel au commercial." })] })), tabValue === 1 && (_jsxs(Box, { children: [_jsx(Typography, { variant: "h5", sx: { fontWeight: 600, mb: 3, color: '#f97316' }, children: "\uD83D\uDD27 Nos services" }), _jsx(Grid, { container: true, spacing: 2, children: enterprise.services.map((service, index) => (_jsx(Grid, { item: true, xs: 12, sm: 6, children: _jsx(Card, { variant: "outlined", sx: {
                                                                        p: 3,
                                                                        transition: 'all 0.3s ease',
                                                                        '&:hover': {
                                                                            borderColor: '#f97316',
                                                                            boxShadow: '0 4px 12px rgba(249, 115, 22, 0.15)',
                                                                            transform: 'translateY(-2px)'
                                                                        }
                                                                    }, children: _jsxs(Typography, { variant: "h6", sx: { fontWeight: 600, color: '#f97316' }, children: ["\u2713 ", service] }) }) }, index))) })] })), tabValue === 2 && (_jsxs(Box, { children: [_jsxs(Typography, { variant: "h5", sx: { fontWeight: 600, mb: 3, color: '#f97316' }, children: ["\u2B50 Avis clients (", enterprise.reviews, ")"] }), _jsx(Card, { variant: "outlined", sx: { mb: 3 }, children: _jsxs(CardContent, { children: [_jsxs(Box, { sx: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }, children: [_jsx(Typography, { variant: "h6", sx: { fontWeight: 600 }, children: "Mamadou Diallo" }), _jsx(Typography, { variant: "body2", color: "text.secondary", children: "15 Jan 2024" })] }), _jsx(Rating, { value: 5, readOnly: true, size: "small", sx: { mb: 2 } }), _jsx(Typography, { variant: "body1", children: "\"Excellent travail, \u00E9quipe tr\u00E8s professionnelle et respectueuse des d\u00E9lais. Je recommande vivement BTP Excellence !\"" })] }) }), _jsx(Card, { variant: "outlined", children: _jsxs(CardContent, { children: [_jsxs(Box, { sx: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }, children: [_jsx(Typography, { variant: "h6", sx: { fontWeight: 600 }, children: "Fatou Sall" }), _jsx(Typography, { variant: "body2", color: "text.secondary", children: "8 Jan 2024" })] }), _jsx(Rating, { value: 5, readOnly: true, size: "small", sx: { mb: 2 } }), _jsx(Typography, { variant: "body1", children: "\"Qualit\u00E9 irr\u00E9prochable et prix corrects. L'\u00E9quipe est \u00E0 l'\u00E9coute et tr\u00E8s comp\u00E9tente.\"" })] }) })] }))] }) })] }), _jsxs(Grid, { item: true, xs: 12, md: 4, children: [_jsx(Card, { sx: { mb: 3 }, children: _jsxs(CardContent, { children: [_jsx(Typography, { variant: "h6", sx: { fontWeight: 600, mb: 3, color: '#f97316' }, children: "\uD83D\uDCDE Contact" }), _jsxs(List, { children: [_jsxs(ListItem, { children: [_jsx(ListItemIcon, { children: _jsx(LocationIcon, { sx: { color: '#f97316' } }) }), _jsx(ListItemText, { primary: enterprise.address, secondary: enterprise.city })] }), _jsxs(ListItem, { children: [_jsx(ListItemIcon, { children: _jsx(PhoneIcon, { sx: { color: '#f97316' } }) }), _jsx(ListItemText, { primary: enterprise.phone })] }), _jsxs(ListItem, { children: [_jsx(ListItemIcon, { children: _jsx(EmailIcon, { sx: { color: '#f97316' } }) }), _jsx(ListItemText, { primary: enterprise.email })] }), _jsxs(ListItem, { children: [_jsx(ListItemIcon, { children: _jsx(WebsiteIcon, { sx: { color: '#f97316' } }) }), _jsx(ListItemText, { primary: enterprise.website })] })] })] }) }), _jsx(Card, { children: _jsxs(CardContent, { children: [_jsxs(Typography, { variant: "h6", sx: { fontWeight: 600, mb: 3, color: '#f97316' }, children: [_jsx(TimeIcon, { sx: { mr: 1, verticalAlign: 'middle' } }), "\uD83D\uDD50 Horaires d'ouverture"] }), _jsx(List, { children: Object.entries(enterprise.workingHours).map(([day, hours]) => (_jsx(ListItem, { sx: { py: 1 }, children: _jsx(ListItemText, { primary: day, secondary: hours, primaryTypographyProps: { fontWeight: 500 } }) }, day))) })] }) })] })] }) })] }) }));
};
export default EnterprisePage;
