import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Typography, Container, Grid, Card, CardContent, Button } from '@mui/material';
import { Construction as ConstructionIcon, Build as BuildIcon, Engineering as EngineeringIcon, ArrowForward as ArrowForwardIcon } from '@mui/icons-material';
import PageTransition from '../../components/animations/PageTransition';
const ServicesPage = () => {
    const services = [
        {
            id: 1,
            title: "Fourniture d'ouvriers",
            description: "Une équipe distinguée pour chaque mission",
            icon: _jsx(ConstructionIcon, { sx: { fontSize: 60, color: '#e67e22' } }),
            details: [
                "Ouvriers qualifiés et expérimentés",
                "Équipes spécialisées par domaine",
                "Formation continue et certification",
                "Suivi de performance et qualité",
                "Disponibilité 24h/24, 7j/7"
            ],
            image: "/images/services/services.jpg"
        },
        {
            id: 2,
            title: "Location de matériels",
            description: "Une gamme complète pour chaque projet",
            icon: _jsx(BuildIcon, { sx: { fontSize: 60, color: '#e67e22' } }),
            details: [
                "Matériels de construction modernes",
                "Engins de chantier de dernière génération",
                "Outillage professionnel complet",
                "Maintenance et réparation incluse",
                "Livraison et installation sur site"
            ],
            image: "/images/services/location.jpg"
        },
        {
            id: 3,
            title: "Expertise et Appui technique",
            description: "Des solutions précises pour chaque défi",
            icon: _jsx(EngineeringIcon, { sx: { fontSize: 60, color: '#e67e22' } }),
            details: [
                "Conseil technique spécialisé",
                "Études de faisabilité",
                "Plans et devis détaillés",
                "Suivi de projet et contrôle qualité",
                "Formation des équipes"
            ],
            image: "/images/services/expert.jpg"
        }
    ];
    return (_jsx(PageTransition, { children: _jsxs(Box, { sx: { backgroundColor: '#f8fafc', minHeight: '100vh' }, children: [_jsx(Box, { sx: {
                        background: 'linear-gradient(135deg, #e67e22 0%, #d35400 100%)',
                        py: 8,
                        color: 'white'
                    }, children: _jsx(Container, { maxWidth: "lg", children: _jsxs(Box, { sx: { textAlign: 'center' }, children: [_jsx(Typography, { variant: "h2", sx: {
                                        fontWeight: 700,
                                        mb: 3,
                                        fontSize: { xs: '2.5rem', md: '3.5rem' }
                                    }, children: "Nos Services" }), _jsx(Typography, { variant: "h5", sx: {
                                        mb: 4,
                                        opacity: 0.9,
                                        maxWidth: '800px',
                                        mx: 'auto',
                                        lineHeight: 1.6
                                    }, children: "Des solutions compl\u00E8tes pour tous vos projets de construction et travaux publics" })] }) }) }), _jsx(Box, { sx: { py: 8 }, children: _jsx(Container, { maxWidth: "lg", children: _jsx(Grid, { container: true, spacing: 6, children: services.map((service, index) => (_jsx(Grid, { item: true, xs: 12, md: 4, children: _jsxs(Card, { sx: {
                                        height: '100%',
                                        borderRadius: 3,
                                        overflow: 'hidden',
                                        boxShadow: '0 8px 30px rgba(0, 0, 0, 0.1)',
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            transform: 'translateY(-8px)',
                                            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)'
                                        }
                                    }, children: [_jsxs(Box, { sx: {
                                                height: 250,
                                                backgroundImage: `url(${service.image})`,
                                                backgroundSize: 'cover',
                                                backgroundPosition: 'center',
                                                position: 'relative',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center'
                                            }, children: [_jsx(Box, { sx: {
                                                        position: 'absolute',
                                                        top: 0,
                                                        left: 0,
                                                        right: 0,
                                                        bottom: 0,
                                                        background: 'rgba(0, 0, 0, 0.4)'
                                                    } }), _jsx(Box, { sx: {
                                                        position: 'relative',
                                                        zIndex: 1,
                                                        backgroundColor: 'rgba(255, 255, 255, 0.9)',
                                                        borderRadius: '50%',
                                                        width: 100,
                                                        height: 100,
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        backdropFilter: 'blur(10px)'
                                                    }, children: service.icon })] }), _jsxs(CardContent, { sx: { p: 4 }, children: [_jsx(Typography, { variant: "h4", sx: {
                                                        fontWeight: 700,
                                                        color: '#1f2937',
                                                        mb: 2
                                                    }, children: service.title }), _jsx(Typography, { variant: "h6", sx: {
                                                        color: '#6b7280',
                                                        mb: 3,
                                                        lineHeight: 1.5
                                                    }, children: service.description }), _jsx(Box, { sx: { mb: 4 }, children: service.details.map((detail, detailIndex) => (_jsxs(Box, { sx: {
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            mb: 1.5
                                                        }, children: [_jsx(Box, { sx: {
                                                                    width: 6,
                                                                    height: 6,
                                                                    backgroundColor: '#e67e22',
                                                                    borderRadius: '50%',
                                                                    mr: 2,
                                                                    flexShrink: 0
                                                                } }), _jsx(Typography, { variant: "body2", sx: {
                                                                    color: '#4b5563',
                                                                    fontSize: '0.9rem'
                                                                }, children: detail })] }, detailIndex))) }), _jsx(Button, { variant: "contained", endIcon: _jsx(ArrowForwardIcon, {}), sx: {
                                                        backgroundColor: '#e67e22',
                                                        color: 'white',
                                                        px: 4,
                                                        py: 1.5,
                                                        fontWeight: 600,
                                                        borderRadius: 2,
                                                        textTransform: 'none',
                                                        fontSize: '1rem',
                                                        boxShadow: '0 4px 15px rgba(249, 115, 22, 0.3)',
                                                        '&:hover': {
                                                            backgroundColor: '#d35400',
                                                            transform: 'translateY(-2px)',
                                                            boxShadow: '0 6px 20px rgba(249, 115, 22, 0.4)'
                                                        }
                                                    }, children: "En savoir plus" })] })] }) }, service.id))) }) }) }), _jsx(Box, { sx: {
                        background: 'linear-gradient(135deg, #1f2937 0%, #374151 100%)',
                        py: 8,
                        color: 'white'
                    }, children: _jsx(Container, { maxWidth: "lg", children: _jsxs(Box, { sx: { textAlign: 'center' }, children: [_jsx(Typography, { variant: "h3", sx: {
                                        fontWeight: 700,
                                        mb: 3
                                    }, children: "Pr\u00EAt \u00E0 d\u00E9marrer votre projet ?" }), _jsx(Typography, { variant: "h6", sx: {
                                        mb: 4,
                                        opacity: 0.9,
                                        maxWidth: '600px',
                                        mx: 'auto'
                                    }, children: "Contactez-nous d\u00E8s aujourd'hui pour discuter de vos besoins et obtenir un devis personnalis\u00E9." }), _jsxs(Box, { sx: { display: 'flex', gap: 3, justifyContent: 'center', flexWrap: 'wrap' }, children: [_jsx(Button, { variant: "contained", size: "large", sx: {
                                                backgroundColor: '#e67e22',
                                                color: 'white',
                                                px: 6,
                                                py: 2,
                                                fontSize: '1.1rem',
                                                fontWeight: 600,
                                                borderRadius: 2,
                                                textTransform: 'none',
                                                '&:hover': {
                                                    backgroundColor: '#d35400'
                                                }
                                            }, children: "Demander un devis" }), _jsx(Button, { variant: "outlined", size: "large", sx: {
                                                borderColor: 'white',
                                                color: 'white',
                                                px: 6,
                                                py: 2,
                                                fontSize: '1.1rem',
                                                fontWeight: 600,
                                                borderRadius: 2,
                                                textTransform: 'none',
                                                '&:hover': {
                                                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                                    borderColor: 'white'
                                                }
                                            }, children: "Nous contacter" })] })] }) }) })] }) }));
};
export default ServicesPage;
