import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getCompanyById, companiesData } from '../../data/companies';
import { Box, Typography, Container, Card, CardContent, Button, TextField, Rating, Grid, Divider, Chip } from '@mui/material';
import { LocationOn as LocationIcon, Phone as PhoneIcon, AccessTime as AccessTimeIcon, Star as StarIcon, Upload as UploadIcon, Send as SendIcon, WhatsApp as WhatsAppIcon, Map as MapIcon } from '@mui/icons-material';
import PageTransition from '../../components/animations/PageTransition';
const CompanyProfilePage = () => {
    const { companyId } = useParams();
    const navigate = useNavigate();
    // État pour les formulaires
    const [reviewForm, setReviewForm] = useState({
        userName: 'john',
        email: 'you@website.com',
        title: '',
        review: '',
        overallRating: 0,
        cleanliness: 0,
        service: 0,
        ambience: 0,
        price: 0
    });
    const [contactForm, setContactForm] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [showReviewForm, setShowReviewForm] = useState(false);
    // Récupération des données de l'entreprise depuis la base de données
    const companyData = getCompanyById(companyId || '') || companiesData[0];
    const handleReviewSubmit = (e) => {
        e.preventDefault();
        console.log('Review submitted:', reviewForm);
        // Ici on enverra les données à la base de données
        alert('Avis soumis avec succès!');
        setReviewForm({
            userName: 'john',
            email: 'you@website.com',
            title: '',
            review: '',
            overallRating: 0,
            cleanliness: 0,
            service: 0,
            ambience: 0,
            price: 0
        });
    };
    const handleContactSubmit = (e) => {
        e.preventDefault();
        console.log('Contact form submitted:', contactForm);
        // Ici on enverra les données à la base de données
        alert('Message envoyé avec succès!');
        setContactForm({ name: '', email: '', phone: '', message: '' });
    };
    return (_jsx(PageTransition, { children: _jsxs(Box, { sx: { backgroundColor: '#f8fafc', minHeight: '100vh' }, children: [_jsxs(Box, { sx: {
                        position: 'relative',
                        height: '400px',
                        backgroundImage: `url(${companyData.bannerImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        display: 'flex',
                        alignItems: 'flex-end',
                        mb: 4
                    }, children: [_jsx(Box, { sx: {
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                background: 'linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.7))'
                            } }), _jsx(Container, { maxWidth: "lg", sx: { position: 'relative', zIndex: 1, pb: 4 }, children: _jsx(Box, { sx: { display: 'flex', alignItems: 'flex-end', gap: 4 }, children: _jsxs(Box, { children: [_jsx(Typography, { variant: "h3", sx: {
                                                color: 'white',
                                                fontWeight: 700,
                                                mb: 1,
                                                textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
                                            }, children: companyData.name }), _jsx(Box, { sx: { display: 'flex', gap: 1, mb: 2 }, children: ['INNOVER', 'TRANSFORMER', 'CONSTRUIRE'].map((word) => (_jsx(Chip, { label: word, sx: {
                                                    backgroundColor: '#e67e22',
                                                    color: 'white',
                                                    fontWeight: 600,
                                                    fontSize: '0.8rem'
                                                } }, word))) }), _jsxs(Box, { sx: { color: 'white' }, children: [_jsxs(Typography, { variant: "body2", sx: { mb: 0.5 }, children: ["\uD83D\uDCCD ", companyData.address] }), companyData.poBox && (_jsxs(Typography, { variant: "body2", sx: { mb: 0.5 }, children: ["\uD83D\uDCE6 ", companyData.poBox] })), _jsxs(Typography, { variant: "body2", sx: { mb: 0.5 }, children: ["\u2709\uFE0F ", companyData.email] }), _jsxs(Typography, { variant: "body2", children: ["\uD83D\uDCDE T\u00E9l.: ", companyData.phone] })] })] }) }) })] }), _jsx(Container, { maxWidth: "lg", children: _jsxs(Grid, { container: true, spacing: 4, children: [_jsxs(Grid, { item: true, xs: 12, md: 8, children: [_jsx(Card, { sx: { mb: 4 }, children: _jsxs(CardContent, { sx: { p: 4 }, children: [_jsx(Typography, { variant: "h5", sx: { fontWeight: 600, mb: 3, color: '#1f2937' }, children: "Nos Services" }), _jsxs(Typography, { variant: "body1", sx: { mb: 3, color: '#6b7280', lineHeight: 1.6 }, children: [companyData.services.join(', '), "..."] }), _jsx(Button, { variant: "contained", startIcon: _jsx(StarIcon, {}), onClick: () => setShowReviewForm(!showReviewForm), sx: {
                                                        backgroundColor: '#e67e22',
                                                        '&:hover': { backgroundColor: '#d35400' },
                                                        px: 3,
                                                        py: 1.5,
                                                        fontWeight: 600
                                                    }, children: "R\u00E9diger Un Avis" })] }) }), showReviewForm && (_jsx(Card, { sx: { mb: 4 }, children: _jsxs(CardContent, { sx: { p: 4 }, children: [_jsx(Typography, { variant: "h6", sx: { fontWeight: 600, mb: 3, color: '#1f2937' }, children: "R\u00E9diger Un Avis" }), _jsxs("form", { onSubmit: handleReviewSubmit, children: [_jsxs(Box, { sx: { mb: 3 }, children: [_jsx(Typography, { variant: "body2", sx: { mb: 1, fontWeight: 600, color: '#374151' }, children: "Votre note *" }), _jsx(Rating, { value: reviewForm.overallRating, onChange: (event, newValue) => {
                                                                        setReviewForm({ ...reviewForm, overallRating: newValue || 0 });
                                                                    }, size: "large", sx: { color: '#e67e22' } })] }), _jsxs(Box, { sx: { mb: 3 }, children: [_jsx(Typography, { variant: "body2", sx: { mb: 1, fontWeight: 600, color: '#374151' }, children: "S\u00E9lectionnez des images" }), _jsx(Button, { variant: "outlined", startIcon: _jsx(UploadIcon, {}), sx: { borderColor: '#d1d5db', color: '#6b7280' }, children: "Parcourir" })] }), _jsx(Grid, { container: true, spacing: 2, sx: { mb: 3 }, children: [
                                                                { key: 'cleanliness', label: 'Cleanliness' },
                                                                { key: 'service', label: 'Service' },
                                                                { key: 'ambience', label: 'Ambience' },
                                                                { key: 'price', label: 'Price' }
                                                            ].map((category) => (_jsxs(Grid, { item: true, xs: 6, children: [_jsx(Typography, { variant: "body2", sx: { mb: 1, fontWeight: 600, color: '#374151' }, children: category.label }), _jsx(Rating, { value: reviewForm[category.key], onChange: (event, newValue) => {
                                                                            setReviewForm({ ...reviewForm, [category.key]: newValue || 0 });
                                                                        }, sx: { color: '#e67e22' } })] }, category.key))) }), _jsxs(Grid, { container: true, spacing: 2, sx: { mb: 3 }, children: [_jsxs(Grid, { item: true, xs: 6, children: [_jsx(Typography, { variant: "body2", sx: { mb: 1, fontWeight: 600, color: '#3b82f6' }, children: "User Name *" }), _jsx(TextField, { fullWidth: true, value: reviewForm.userName, onChange: (e) => setReviewForm({ ...reviewForm, userName: e.target.value }), size: "small", sx: { '& .MuiOutlinedInput-root': { borderRadius: 2 } } })] }), _jsxs(Grid, { item: true, xs: 6, children: [_jsx(Typography, { variant: "body2", sx: { mb: 1, fontWeight: 600, color: '#3b82f6' }, children: "Email *" }), _jsx(TextField, { fullWidth: true, value: reviewForm.email, onChange: (e) => setReviewForm({ ...reviewForm, email: e.target.value }), size: "small", sx: { '& .MuiOutlinedInput-root': { borderRadius: 2 } } })] })] }), _jsxs(Box, { sx: { mb: 3 }, children: [_jsx(Typography, { variant: "body2", sx: { mb: 1, fontWeight: 600, color: '#3b82f6' }, children: "Titre *" }), _jsx(TextField, { fullWidth: true, placeholder: "Exemple : C'\u00E9tait une exp\u00E9rience formidable d'\u00EAtre l\u00E0", value: reviewForm.title, onChange: (e) => setReviewForm({ ...reviewForm, title: e.target.value }), size: "small", sx: { '& .MuiOutlinedInput-root': { borderRadius: 2 } } })] }), _jsxs(Box, { sx: { mb: 3 }, children: [_jsx(Typography, { variant: "body2", sx: { mb: 1, fontWeight: 600, color: '#3b82f6' }, children: "Avis *" }), _jsx(TextField, { fullWidth: true, multiline: true, rows: 4, value: reviewForm.review, onChange: (e) => setReviewForm({ ...reviewForm, review: e.target.value }), placeholder: "Tip: A great review covers food, service, and ambiance. Got recommendations for your favorite dishes and drinks, or something everyone should try here? Include that too! And remember.", sx: { '& .MuiOutlinedInput-root': { borderRadius: 2 } } }), _jsx(Typography, { variant: "caption", sx: { color: '#6b7280', mt: 1, display: 'block' }, children: "Your review recommended to be at least 140 characters long :)" })] }), _jsx(Button, { type: "submit", variant: "contained", startIcon: _jsx(SendIcon, {}), sx: {
                                                                backgroundColor: '#e67e22',
                                                                '&:hover': { backgroundColor: '#d35400' },
                                                                px: 4,
                                                                py: 1.5,
                                                                fontWeight: 600
                                                            }, children: "Signup & Submit Review" })] })] }) }))] }), _jsx(Grid, { item: true, xs: 12, md: 4, children: _jsx(Card, { sx: { mb: 4 }, children: _jsxs(CardContent, { sx: { p: 4 }, children: [_jsx(Typography, { variant: "h6", sx: { fontWeight: 600, mb: 3, color: '#1f2937' }, children: "Informations" }), _jsxs(Box, { sx: { mb: 2 }, children: [_jsxs(Box, { sx: { display: 'flex', alignItems: 'center', mb: 1 }, children: [_jsx(LocationIcon, { sx: { fontSize: 20, color: '#6b7280', mr: 1 } }), _jsx(Typography, { variant: "body2", sx: { color: '#6b7280' }, children: "Hlm Fass Dakar - S\u00E9n\u00E9gal" })] }), _jsx(Button, { variant: "text", sx: { color: '#e67e22', textTransform: 'none', p: 0, fontSize: '0.9rem' }, children: "Obtenir des instructions" })] }), _jsxs(Box, { sx: { mb: 2 }, children: [_jsxs(Box, { sx: { display: 'flex', alignItems: 'center', mb: 1 }, children: [_jsx(PhoneIcon, { sx: { fontSize: 20, color: '#6b7280', mr: 1 } }), _jsx(Typography, { variant: "body2", sx: { color: '#6b7280' }, children: companyData.phone })] }), _jsxs(Box, { sx: { display: 'flex', alignItems: 'center' }, children: [_jsx(WhatsAppIcon, { sx: { fontSize: 20, color: '#6b7280', mr: 1 } }), _jsx(Typography, { variant: "body2", sx: { color: '#6b7280' }, children: "Whatsapp" })] })] }), _jsxs(Box, { sx: { mb: 3 }, children: [_jsxs(Box, { sx: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1 }, children: [_jsxs(Box, { sx: { display: 'flex', alignItems: 'center' }, children: [_jsx(AccessTimeIcon, { sx: { fontSize: 20, color: '#6b7280', mr: 1 } }), _jsx(Typography, { variant: "body2", sx: { color: '#6b7280' }, children: "Aujourd'hui" })] }), _jsx(Typography, { variant: "body2", sx: { color: '#ef4444', fontWeight: 600 }, children: companyData.status })] }), _jsx(Button, { variant: "outlined", size: "small", sx: { borderColor: '#e67e22', color: '#e67e22', fontSize: '0.8rem' }, children: "+ Ouvrir" })] }), _jsxs(Box, { sx: { mb: 3 }, children: [_jsxs(Box, { sx: { display: 'flex', alignItems: 'center', mb: 1 }, children: [_jsx(MapIcon, { sx: { fontSize: 20, color: '#6b7280', mr: 1 } }), _jsx(Typography, { variant: "body2", sx: { color: '#6b7280' }, children: "Poss\u00E9der ou travailler ici ?" })] }), _jsx(Button, { variant: "text", sx: { color: '#e67e22', fontWeight: 600, textTransform: 'none', p: 0, fontSize: '0.9rem' }, children: "R\u00E9clamez maintenant !" })] }), _jsx(Divider, { sx: { my: 3 } }), _jsx(Typography, { variant: "h6", sx: { fontWeight: 600, mb: 3, color: '#1f2937' }, children: "Contact Avec Le Propri\u00E9taire De L'entreprise" }), _jsxs("form", { onSubmit: handleContactSubmit, children: [_jsxs(Box, { sx: { mb: 2 }, children: [_jsx(Typography, { variant: "body2", sx: { mb: 1, fontWeight: 600, color: '#374151' }, children: "Nom :" }), _jsx(TextField, { fullWidth: true, value: contactForm.name, onChange: (e) => setContactForm({ ...contactForm, name: e.target.value }), size: "small", sx: { '& .MuiOutlinedInput-root': { borderRadius: 2 } } })] }), _jsxs(Box, { sx: { mb: 2 }, children: [_jsx(Typography, { variant: "body2", sx: { mb: 1, fontWeight: 600, color: '#374151' }, children: "Email:" }), _jsx(TextField, { fullWidth: true, value: contactForm.email, onChange: (e) => setContactForm({ ...contactForm, email: e.target.value }), size: "small", sx: { '& .MuiOutlinedInput-root': { borderRadius: 2 } } })] }), _jsxs(Box, { sx: { mb: 2 }, children: [_jsx(Typography, { variant: "body2", sx: { mb: 1, fontWeight: 600, color: '#374151' }, children: "t\u00E9l\u00E9phone" }), _jsx(TextField, { fullWidth: true, value: contactForm.phone, onChange: (e) => setContactForm({ ...contactForm, phone: e.target.value }), size: "small", sx: { '& .MuiOutlinedInput-root': { borderRadius: 2 } } })] }), _jsxs(Box, { sx: { mb: 3 }, children: [_jsx(Typography, { variant: "body2", sx: { mb: 1, fontWeight: 600, color: '#374151' }, children: "Message:" }), _jsx(TextField, { fullWidth: true, multiline: true, rows: 3, value: contactForm.message, onChange: (e) => setContactForm({ ...contactForm, message: e.target.value }), sx: { '& .MuiOutlinedInput-root': { borderRadius: 2 } } })] }), _jsx(Button, { type: "submit", variant: "contained", startIcon: _jsx(SendIcon, {}), fullWidth: true, sx: {
                                                            backgroundColor: '#e67e22',
                                                            '&:hover': { backgroundColor: '#d35400' },
                                                            py: 1.5,
                                                            fontWeight: 600
                                                        }, children: "Envoyer" })] })] }) }) })] }) })] }) }));
};
export default CompanyProfilePage;
