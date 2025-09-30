import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Container, Typography, Card, CardContent, CardMedia, Grid, Chip, Button, TextField, InputAdornment } from '@mui/material';
import { Search as SearchIcon, CalendarToday as CalendarIcon, Person as PersonIcon, AccessTime as TimeIcon } from '@mui/icons-material';
import PageTransition from '../../components/animations/PageTransition';
const BlogPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    // Données mockées pour les articles de blog
    const articles = [
        {
            id: 1,
            slug: 'tendances-construction-senegal-2024',
            title: 'Les tendances de la construction au Sénégal en 2024',
            excerpt: 'Découvrez les nouvelles tendances qui révolutionnent le secteur du BTP au Sénégal cette année.',
            content: 'Article complet sur les tendances...',
            image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=500',
            author: 'Amadou Ba',
            date: '2024-01-20',
            readTime: '5 min',
            category: 'Tendances',
            tags: ['Construction', 'Innovation', 'Sénégal']
        },
        {
            id: 2,
            slug: 'materiaux-construction-locaux',
            title: 'Utiliser des matériaux de construction locaux',
            excerpt: 'Guide complet pour choisir et utiliser les meilleurs matériaux locaux pour vos projets de construction.',
            content: 'Article complet sur les matériaux...',
            image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=500',
            author: 'Fatou Diop',
            date: '2024-01-18',
            readTime: '7 min',
            category: 'Matériaux',
            tags: ['Matériaux', 'Local', 'Écologie']
        },
        {
            id: 3,
            slug: 'reglementation-btp-senegal',
            title: 'Réglementation BTP au Sénégal : Ce qu\'il faut savoir',
            excerpt: 'Tour d\'horizon des principales réglementations à connaître dans le secteur du BTP sénégalais.',
            content: 'Article complet sur la réglementation...',
            image: 'https://images.unsplash.com/photo-1589391886645-d51941baf7fb?w=500',
            author: 'Moussa Sall',
            date: '2024-01-15',
            readTime: '8 min',
            category: 'Juridique',
            tags: ['Réglementation', 'Droit', 'BTP']
        },
        {
            id: 4,
            slug: 'technologies-construction-moderne',
            title: 'Technologies modernes dans la construction',
            excerpt: 'Comment les nouvelles technologies transforment les méthodes de construction traditionnelles.',
            content: 'Article complet sur les technologies...',
            image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=500',
            author: 'Aisha Ndiaye',
            date: '2024-01-12',
            readTime: '6 min',
            category: 'Innovation',
            tags: ['Technologie', 'Innovation', 'Digital']
        }
    ];
    const categories = ['all', 'Tendances', 'Matériaux', 'Juridique', 'Innovation'];
    const filteredArticles = articles.filter(article => {
        const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });
    return (_jsx(PageTransition, { children: _jsxs(Box, { sx: { backgroundColor: '#f8fafc', minHeight: '100vh' }, children: [_jsx(Box, { sx: { backgroundColor: '#e67e22', color: 'white', py: 8 }, children: _jsxs(Container, { maxWidth: "lg", children: [_jsx(Typography, { variant: "h2", sx: {
                                    fontWeight: 800,
                                    mb: 2,
                                    background: 'linear-gradient(45deg, #ffffff 0%, #fbbf24 50%, #e67e22 100%)',
                                    backgroundClip: 'text',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
                                }, children: "Blog BTP S\u00E9n\u00E9gal" }), _jsx(Typography, { variant: "h5", sx: { opacity: 0.9, maxWidth: '600px' }, children: "Conseils, actualit\u00E9s et guides pour les professionnels du BTP" })] }) }), _jsxs(Container, { maxWidth: "lg", sx: { py: 6 }, children: [_jsx(Card, { sx: { mb: 4, p: 3 }, children: _jsxs(Grid, { container: true, spacing: 3, alignItems: "center", children: [_jsx(Grid, { item: true, xs: 12, md: 6, children: _jsx(TextField, { fullWidth: true, placeholder: "Rechercher un article...", value: searchTerm, onChange: (e) => setSearchTerm(e.target.value), InputProps: {
                                                startAdornment: (_jsx(InputAdornment, { position: "start", children: _jsx(SearchIcon, { sx: { color: '#e67e22' } }) })),
                                            }, sx: {
                                                '& .MuiOutlinedInput-root': {
                                                    '&:hover fieldset': { borderColor: '#e67e22' },
                                                    '&.Mui-focused fieldset': { borderColor: '#e67e22' }
                                                }
                                            } }) }), _jsx(Grid, { item: true, xs: 12, md: 6, children: _jsx(Box, { sx: { display: 'flex', gap: 1, flexWrap: 'wrap' }, children: categories.map((category) => (_jsx(Chip, { label: category === 'all' ? 'Tous' : category, onClick: () => setSelectedCategory(category), variant: selectedCategory === category ? 'filled' : 'outlined', sx: {
                                                    backgroundColor: selectedCategory === category ? '#e67e22' : 'transparent',
                                                    color: selectedCategory === category ? 'white' : '#e67e22',
                                                    borderColor: '#e67e22',
                                                    '&:hover': {
                                                        backgroundColor: selectedCategory === category ? '#d35400' : 'rgba(230, 126, 34, 0.1)'
                                                    }
                                                } }, category))) }) })] }) }), _jsx(Grid, { container: true, spacing: 4, children: filteredArticles.map((article) => (_jsx(Grid, { item: true, xs: 12, md: 6, lg: 4, children: _jsxs(Card, { sx: {
                                        height: '100%',
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            transform: 'translateY(-4px)',
                                            boxShadow: '0 12px 24px rgba(249, 115, 22, 0.15)'
                                        }
                                    }, children: [_jsx(CardMedia, { component: "img", height: "200", image: article.image, alt: article.title }), _jsxs(CardContent, { sx: { p: 3 }, children: [_jsx(Box, { sx: { display: 'flex', gap: 1, mb: 2 }, children: _jsx(Chip, { label: article.category, size: "small", sx: {
                                                            backgroundColor: 'rgba(249, 115, 22, 0.1)',
                                                            color: '#e67e22',
                                                            fontWeight: 600
                                                        } }) }), _jsx(Typography, { variant: "h6", sx: { fontWeight: 600, mb: 2, lineHeight: 1.3 }, children: article.title }), _jsx(Typography, { variant: "body2", color: "text.secondary", sx: { mb: 3, lineHeight: 1.5 }, children: article.excerpt }), _jsxs(Box, { sx: { display: 'flex', alignItems: 'center', gap: 2, mb: 3, flexWrap: 'wrap' }, children: [_jsxs(Box, { sx: { display: 'flex', alignItems: 'center', gap: 0.5 }, children: [_jsx(PersonIcon, { sx: { fontSize: 16, color: '#6b7280' } }), _jsx(Typography, { variant: "caption", color: "text.secondary", children: article.author })] }), _jsxs(Box, { sx: { display: 'flex', alignItems: 'center', gap: 0.5 }, children: [_jsx(CalendarIcon, { sx: { fontSize: 16, color: '#6b7280' } }), _jsx(Typography, { variant: "caption", color: "text.secondary", children: new Date(article.date).toLocaleDateString('fr-FR') })] }), _jsxs(Box, { sx: { display: 'flex', alignItems: 'center', gap: 0.5 }, children: [_jsx(TimeIcon, { sx: { fontSize: 16, color: '#6b7280' } }), _jsx(Typography, { variant: "caption", color: "text.secondary", children: article.readTime })] })] }), _jsx(Button, { component: Link, to: `/blog/${article.slug}`, fullWidth: true, variant: "outlined", sx: {
                                                        borderColor: '#e67e22',
                                                        color: '#e67e22',
                                                        fontWeight: 600,
                                                        '&:hover': {
                                                            background: 'linear-gradient(135deg, #e67e22 0%, #f39c12 100%)',
                                                            color: 'white',
                                                            borderColor: '#e67e22'
                                                        }
                                                    }, children: "Lire l'article \uD83D\uDCD6" })] })] }) }, article.id))) }), filteredArticles.length === 0 && (_jsxs(Box, { sx: { textAlign: 'center', py: 8 }, children: [_jsx(Typography, { variant: "h6", color: "text.secondary", sx: { mb: 2 }, children: "Aucun article trouv\u00E9" }), _jsx(Typography, { variant: "body1", color: "text.secondary", children: "Essayez de modifier vos crit\u00E8res de recherche" })] }))] })] }) }));
};
export default BlogPage;
