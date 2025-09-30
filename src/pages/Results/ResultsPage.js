import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { useSearchParams } from 'react-router-dom';
import { Typography, Container, Box, Card, CardContent, Button, TextField } from '@mui/material';
import { LocationOn as LocationIcon, Phone as PhoneIcon, AccessTime as AccessTimeIcon, Place as PlaceIcon } from '@mui/icons-material';
import PageTransition from '../../components/animations/PageTransition';
const ResultsPage = () => {
    const [searchParams] = useSearchParams();
    const ville = searchParams.get('ville') || 'Dakar';
    const companies = [
        {
            id: 1,
            name: "Sococim Industries",
            category: "MATÉRIAUX & MATÉRIELS",
            status: "Ouvert maintenant",
            location: "Km 33 ancienne route de Thiès BP 29, Rufisque",
            phone: "+221774424223",
            image: "/images/partners/sococim.jpg",
            isAd: true
        },
        {
            id: 2,
            name: "ALMETAL",
            category: "MENUISERIE",
            status: "Ouvert maintenant",
            location: "Sébikotane - BP : 22 SEBIKOTANE",
            phone: "+221774424223",
            isAd: false
        },
        {
            id: 3,
            name: "QUINCAILLERIE GAFFARI",
            category: "MATÉRIAUX & MATÉRIELS",
            status: "Ouvert maintenant",
            location: "Avenue El Hadji Malick Sy Mbour",
            phone: "+221774424223",
            isAd: false
        },
        {
            id: 4,
            name: "LES CIMENTS DU SAHEL",
            category: "MATÉRIAUX & MATÉRIELS",
            status: "Ouvert maintenant",
            location: "Communauté Rural de Ndiass - Route de Mbour",
            phone: "+221774424223",
            isAd: false
        }
    ];
    return (_jsx(PageTransition, { children: _jsx(Box, { sx: {
                backgroundColor: '#f8fafc',
                minHeight: '100vh',
                py: 4
            }, children: _jsxs(Container, { maxWidth: "lg", children: [_jsxs(Typography, { variant: "h4", sx: {
                            fontWeight: 700,
                            mb: 4,
                            color: '#1f2937',
                            textAlign: 'center'
                        }, children: ["R\u00E9sultats pour ", ville.charAt(0).toUpperCase() + ville.slice(1), " Entreprises"] }), _jsx(Box, { sx: { display: 'flex', flexDirection: 'column', gap: 3 }, children: companies.map((company) => (_jsxs(Card, { sx: {
                                borderRadius: 2,
                                overflow: 'hidden',
                                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                                transition: 'all 0.3s ease',
                                cursor: 'pointer',
                                '&:hover': {
                                    transform: 'translateY(-2px)',
                                    boxShadow: '0 8px 30px rgba(0, 0, 0, 0.15)'
                                }
                            }, children: [company.isAd && (_jsx(Box, { sx: {
                                        height: 200,
                                        backgroundImage: `url(${company.image})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        position: 'relative'
                                    } })), _jsxs(CardContent, { sx: { p: 4, backgroundColor: 'white' }, children: [_jsx(Box, { sx: { display: 'flex', alignItems: 'center', mb: 2 }, children: _jsx(Box, { sx: {
                                                    background: '#e67e22',
                                                    color: 'white',
                                                    px: 2,
                                                    py: 0.5,
                                                    borderRadius: 1,
                                                    fontSize: '0.7rem',
                                                    fontWeight: 600,
                                                    textTransform: 'uppercase'
                                                }, children: company.category }) }), _jsxs(Box, { sx: {
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'space-between',
                                                mb: 2
                                            }, children: [_jsx(Typography, { variant: "h5", sx: {
                                                        fontWeight: 600,
                                                        color: '#1f2937',
                                                        fontSize: '1.2rem'
                                                    }, children: company.name }), _jsxs(Box, { sx: { display: 'flex', alignItems: 'center' }, children: [_jsx(AccessTimeIcon, { sx: { fontSize: 12, color: '#10b981', mr: 0.5 } }), _jsx(Typography, { variant: "body2", sx: {
                                                                color: '#10b981',
                                                                fontSize: '0.7rem',
                                                                fontWeight: 600
                                                            }, children: company.status })] })] }), _jsxs(Box, { sx: { mb: 2 }, children: [_jsx(TextField, { fullWidth: true, multiline: true, rows: 2, placeholder: "Laissez votre avis sur cette entreprise...", variant: "outlined", size: "small", sx: {
                                                        '& .MuiOutlinedInput-root': {
                                                            borderRadius: 2,
                                                            fontSize: '0.9rem'
                                                        }
                                                    } }), _jsx(Button, { variant: "contained", size: "small", sx: {
                                                        mt: 1,
                                                        backgroundColor: '#e67e22',
                                                        '&:hover': {
                                                            backgroundColor: '#d35400'
                                                        }
                                                    }, children: "Publier" })] }), _jsxs(Box, { sx: { display: 'flex', alignItems: 'center', mb: 2 }, children: [_jsx(LocationIcon, { sx: { fontSize: 16, color: '#6b7280', mr: 1 } }), _jsx(Typography, { variant: "body2", sx: { color: '#6b7280', fontSize: '0.9rem', fontWeight: 600 }, children: company.location })] }), _jsxs(Box, { sx: { display: 'flex', alignItems: 'center', mb: 2 }, children: [_jsx(PhoneIcon, { sx: { fontSize: 16, color: '#6b7280', mr: 1 } }), _jsx(Typography, { variant: "body2", sx: { color: '#6b7280', fontSize: '0.9rem', fontWeight: 600 }, children: company.phone })] }), _jsxs(Box, { sx: {
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'space-between',
                                                gap: 2
                                            }, children: [_jsx(Button, { variant: "outlined", size: "small", startIcon: _jsx(PhoneIcon, {}), sx: {
                                                        borderColor: '#e67e22',
                                                        color: '#e67e22',
                                                        borderRadius: 2,
                                                        px: 3,
                                                        py: 1.5,
                                                        fontWeight: 700,
                                                        fontSize: '0.8rem',
                                                        textTransform: 'none',
                                                        minWidth: '120px',
                                                        boxShadow: '0 2px 8px rgba(249, 115, 22, 0.1)',
                                                        transition: 'all 0.3s ease',
                                                        '&:hover': {
                                                            backgroundColor: '#e67e22',
                                                            color: 'white',
                                                            borderColor: '#e67e22',
                                                            transform: 'translateY(-2px)',
                                                            boxShadow: '0 4px 12px rgba(249, 115, 22, 0.3)'
                                                        }
                                                    }, children: "Appelez" }), _jsx(Button, { variant: "outlined", size: "small", startIcon: _jsx(PlaceIcon, {}), sx: {
                                                        borderColor: '#e67e22',
                                                        color: '#e67e22',
                                                        borderRadius: 2,
                                                        px: 3,
                                                        py: 1.5,
                                                        fontWeight: 700,
                                                        fontSize: '0.8rem',
                                                        textTransform: 'none',
                                                        minWidth: '160px',
                                                        boxShadow: '0 2px 8px rgba(249, 115, 22, 0.1)',
                                                        transition: 'all 0.3s ease',
                                                        '&:hover': {
                                                            backgroundColor: '#e67e22',
                                                            color: 'white',
                                                            borderColor: '#e67e22',
                                                            transform: 'translateY(-2px)',
                                                            boxShadow: '0 4px 12px rgba(249, 115, 22, 0.3)'
                                                        }
                                                    }, children: "Afficher La Carte" })] })] })] }, company.id))) })] }) }) }));
};
export default ResultsPage;
