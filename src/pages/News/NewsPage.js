import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Container, Typography, Card, CardContent, CardMedia, Grid, Chip, Button, TextField, InputAdornment } from '@mui/material';
import { Search as SearchIcon, CalendarToday as CalendarIcon, Person as PersonIcon, AccessTime as TimeIcon } from '@mui/icons-material';
// import { supabase } from '../../lib/supabase'
import PageTransition from '../../components/animations/PageTransition';
const NewsPage = () => {
    const navigate = useNavigate();
    const [news, setNews] = useState([]);
    const [filteredNews, setFilteredNews] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const categories = ['all', 'Actualités', 'Réglementation', 'Technologie', 'Événements', 'Formation', 'Autre'];
    const handleReadArticle = (articleId) => {
        console.log('handleReadArticle called with ID:', articleId);
        console.log('Navigating to:', `/article/${articleId}`);
        navigate(`/article/${articleId}`);
    };
    useEffect(() => {
        loadNews();
        // Écouter les mises à jour depuis l'admin
        const handleArticlesUpdate = () => {
            loadNews();
        };
        window.addEventListener('articlesUpdated', handleArticlesUpdate);
        return () => {
            window.removeEventListener('articlesUpdated', handleArticlesUpdate);
        };
    }, []);
    useEffect(() => {
        filterNews();
    }, [news, searchTerm, selectedCategory]);
    const loadNews = () => {
        try {
            setLoading(true);
            const stored = localStorage.getItem('btp_articles');
            if (stored) {
                const articlesData = JSON.parse(stored);
                // Filtrer seulement les articles actifs
                const activeArticles = articlesData.filter((article) => article.is_active);
                // Ajouter des données mockées pour le design
                const newsWithMockData = activeArticles.map((article) => ({
                    ...article,
                    author: article.author || 'Rédaction BTP',
                    read_time: Math.floor(Math.random() * 5) + 3 + ' min',
                    is_published: article.is_active
                }));
                setNews(newsWithMockData);
                console.log('Loaded articles from localStorage:', newsWithMockData);
                console.log('Article IDs in NewsPage:', newsWithMockData.map(a => ({ id: a.id, title: a.title })));
            }
            else {
                setNews([]);
                console.log('No articles found in localStorage');
            }
        }
        catch (error) {
            console.error('Error loading articles:', error);
            setNews([]);
        }
        finally {
            setLoading(false);
        }
    };
    const filterNews = () => {
        let filtered = news;
        if (searchTerm) {
            filtered = filtered.filter(article => article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                article.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
                (article.excerpt && article.excerpt.toLowerCase().includes(searchTerm.toLowerCase())));
        }
        if (selectedCategory && selectedCategory !== 'all') {
            filtered = filtered.filter(article => article.category === selectedCategory);
        }
        setFilteredNews(filtered);
    };
    return (_jsx(PageTransition, { children: _jsxs(Box, { sx: { backgroundColor: '#f8fafc', minHeight: '100vh' }, children: [_jsx(Box, { sx: { backgroundColor: '#e67e22', color: 'white', py: 8 }, children: _jsxs(Container, { maxWidth: "lg", children: [_jsx(Typography, { variant: "h2", sx: {
                                    fontWeight: 800,
                                    mb: 2,
                                    color: 'white',
                                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)'
                                }, children: "Actualit\u00E9s BTP S\u00E9n\u00E9gal" }), _jsx(Typography, { variant: "h5", sx: { opacity: 0.9, maxWidth: '600px' }, children: "Conseils, actualit\u00E9s et guides pour les professionnels du BTP" })] }) }), _jsxs(Container, { maxWidth: "lg", sx: { py: 6 }, children: [_jsx(Card, { sx: { mb: 4, p: 3 }, children: _jsxs(Grid, { container: true, spacing: 3, alignItems: "center", children: [_jsx(Grid, { item: true, xs: 12, md: 6, children: _jsx(TextField, { fullWidth: true, placeholder: "Rechercher un article...", value: searchTerm, onChange: (e) => setSearchTerm(e.target.value), InputProps: {
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
                                                } }, category))) }) })] }) }), _jsx(Grid, { container: true, spacing: 4, children: filteredNews.map((article) => (_jsx(Grid, { item: true, xs: 12, md: 6, lg: 4, children: _jsxs(Card, { sx: {
                                        height: '100%',
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            transform: 'translateY(-4px)',
                                            boxShadow: '0 12px 24px rgba(249, 115, 22, 0.15)'
                                        }
                                    }, children: [article.image_url && (_jsx(CardMedia, { component: "img", height: "200", image: article.image_url, alt: article.title })), _jsxs(CardContent, { sx: { p: 3 }, children: [_jsx(Box, { sx: { display: 'flex', gap: 1, mb: 2 }, children: _jsx(Chip, { label: article.category || 'Actualités', size: "small", sx: {
                                                            backgroundColor: 'rgba(249, 115, 22, 0.1)',
                                                            color: '#e67e22',
                                                            fontWeight: 600
                                                        } }) }), _jsx(Typography, { variant: "h6", sx: { fontWeight: 600, mb: 2, lineHeight: 1.3 }, children: article.title }), _jsx(Typography, { variant: "body2", color: "text.secondary", sx: { mb: 3, lineHeight: 1.5 }, children: article.excerpt || article.content.substring(0, 150) + '...' }), _jsxs(Box, { sx: { display: 'flex', alignItems: 'center', gap: 2, mb: 3, flexWrap: 'wrap' }, children: [_jsxs(Box, { sx: { display: 'flex', alignItems: 'center', gap: 0.5 }, children: [_jsx(PersonIcon, { sx: { fontSize: 16, color: '#6b7280' } }), _jsx(Typography, { variant: "caption", color: "text.secondary", children: article.author })] }), _jsxs(Box, { sx: { display: 'flex', alignItems: 'center', gap: 0.5 }, children: [_jsx(CalendarIcon, { sx: { fontSize: 16, color: '#6b7280' } }), _jsx(Typography, { variant: "caption", color: "text.secondary", children: new Date(article.created_at).toLocaleDateString('fr-FR') })] }), _jsxs(Box, { sx: { display: 'flex', alignItems: 'center', gap: 0.5 }, children: [_jsx(TimeIcon, { sx: { fontSize: 16, color: '#6b7280' } }), _jsx(Typography, { variant: "caption", color: "text.secondary", children: article.read_time })] })] }), _jsx(Button, { fullWidth: true, variant: "outlined", onClick: () => {
                                                        console.log('Button clicked for article:', { id: article.id, title: article.title });
                                                        handleReadArticle(article.id);
                                                    }, sx: {
                                                        borderColor: '#e67e22',
                                                        color: '#e67e22',
                                                        fontWeight: 600,
                                                        '&:hover': {
                                                            background: 'linear-gradient(135deg, #e67e22 0%, #f39c12 100%)',
                                                            color: 'white',
                                                            borderColor: '#e67e22'
                                                        }
                                                    }, children: "Lire l'article \uD83D\uDCD6" })] })] }) }, article.id))) }), filteredNews.length === 0 && !loading && (_jsxs(Box, { sx: { textAlign: 'center', py: 8 }, children: [_jsx(Typography, { variant: "h6", color: "text.secondary", sx: { mb: 2 }, children: "Aucun article trouv\u00E9" }), _jsx(Typography, { variant: "body1", color: "text.secondary", children: "Essayez de modifier vos crit\u00E8res de recherche" })] }))] })] }) }));
};
export default NewsPage;
