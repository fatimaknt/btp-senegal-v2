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
            // Données d'actualités basées sur celles de la page d'accueil
            const homePageNews = [
                {
                    id: 1,
                    title: 'SÉNÉGAL : LA RÉVOLUTION INFRASTRU...',
                    excerpt: 'Découvrez les dernières innovations dans le secteur du BTP au Sénégal',
                    content: 'Le Sénégal connaît une révolution infrastructurelle majeure avec des projets innovants qui transforment le paysage urbain. Des technologies de pointe sont intégrées dans la construction pour améliorer la qualité et l\'efficacité des infrastructures.',
                    author: 'Btpsenegal.Com',
                    category: 'Actualités',
                    image_url: '/images/actualite/infrastructure.jpg',
                    published_at: '2025-01-17',
                    read_time: '5 min',
                    is_published: true,
                    is_active: true
                },
                {
                    id: 2,
                    title: 'Sénégal : La SICAP SA et IMMOSEN SAR...',
                    excerpt: 'Partenariats stratégiques dans le secteur immobilier',
                    content: 'La SICAP SA et IMMOSEN SARL annoncent un partenariat stratégique majeur dans le secteur immobilier sénégalais. Cette collaboration vise à développer des projets résidentiels et commerciaux innovants.',
                    author: 'Btpsenegal.Com',
                    category: 'Actualités',
                    image_url: '/images/actualite/projet.webp',
                    published_at: '2025-01-17',
                    read_time: '4 min',
                    is_published: true,
                    is_active: true
                },
                {
                    id: 3,
                    title: 'Construire un Ascenseur Sur-Mesure au...',
                    excerpt: 'Solutions d\'ascenseurs personnalisées pour tous vos projets',
                    content: 'Découvrez comment construire des ascenseurs sur-mesure adaptés aux besoins spécifiques de chaque projet. Nos solutions personnalisées garantissent sécurité, performance et esthétique.',
                    author: 'Btpsenegal.Com',
                    category: 'Actualités',
                    image_url: '/images/actualite/ascenseur.jpg',
                    published_at: '2021-02-27',
                    read_time: '6 min',
                    is_published: true,
                    is_active: true
                },
                {
                    id: 4,
                    title: 'Votre satisfaction au coeur de notre STRATEGIE',
                    excerpt: 'Notre engagement pour votre réussite',
                    content: 'La satisfaction de nos clients est au cœur de notre stratégie. Nous nous engageons à fournir des services de qualité supérieure et à accompagner nos partenaires dans leur réussite.',
                    author: 'Btpsenegal.Com',
                    category: 'Actualités',
                    image_url: '/images/actualite/btpsenegal.webp',
                    published_at: '2021-02-25',
                    read_time: '3 min',
                    is_published: true,
                    is_active: true
                },
                {
                    id: 5,
                    title: 'Les Projets de BTP les Plus Innovants a...',
                    excerpt: 'Découvrez les projets les plus avancés du secteur',
                    content: 'Explorez les projets de BTP les plus innovants qui transforment le paysage sénégalais. Des technologies de pointe aux méthodes de construction durables, découvrez l\'avenir du BTP.',
                    author: 'Btpsenegal.Com',
                    category: 'Actualités',
                    image_url: '/images/actualite/6581da8ba6aaa-2116-x-600-3-372x240.gif',
                    published_at: '2021-02-18',
                    read_time: '7 min',
                    is_published: true,
                    is_active: true
                }
            ];
            setNews(homePageNews);
            console.log('Loaded articles from homepage data:', homePageNews);
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
    return (_jsx(PageTransition, {
        children: _jsxs(Box, {
            sx: { backgroundColor: '#f8fafc', minHeight: '100vh' }, children: [_jsx(Box, {
                sx: { backgroundColor: '#e67e22', color: 'white', py: 8 }, children: _jsxs(Container, {
                    maxWidth: "lg", children: [_jsx(Typography, {
                        variant: "h2", sx: {
                                    fontWeight: 800,
                                    mb: 2,
                            color: 'white',
                            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)'
                        }, children: "Actualit\u00E9s BTP S\u00E9n\u00E9gal"
                    }), _jsx(Typography, { variant: "h5", sx: { opacity: 0.9, maxWidth: '600px' }, children: "Conseils, actualit\u00E9s et guides pour les professionnels du BTP" })]
                })
            }), _jsxs(Container, {
                maxWidth: "lg", sx: { py: 6 }, children: [_jsx(Card, {
                    sx: { mb: 4, p: 3 }, children: _jsxs(Grid, {
                        container: true, spacing: 3, alignItems: "center", children: [_jsx(Grid, {
                            item: true, xs: 12, md: 6, children: _jsx(TextField, {
                                fullWidth: true, placeholder: "Rechercher un article...", value: searchTerm, onChange: (e) => setSearchTerm(e.target.value), InputProps: {
                                                startAdornment: (_jsx(InputAdornment, { position: "start", children: _jsx(SearchIcon, { sx: { color: '#e67e22' } }) })),
                                            }, sx: {
                                                '& .MuiOutlinedInput-root': {
                                                    '&:hover fieldset': { borderColor: '#e67e22' },
                                                    '&.Mui-focused fieldset': { borderColor: '#e67e22' }
                                                }
                                }
                            })
                        }), _jsx(Grid, {
                            item: true, xs: 12, md: 6, children: _jsx(Box, {
                                sx: { display: 'flex', gap: 1, flexWrap: 'wrap' }, children: categories.map((category) => (_jsx(Chip, {
                                    label: category === 'all' ? 'Tous' : category, onClick: () => setSelectedCategory(category), variant: selectedCategory === category ? 'filled' : 'outlined', sx: {
                                                    backgroundColor: selectedCategory === category ? '#e67e22' : 'transparent',
                                                    color: selectedCategory === category ? 'white' : '#e67e22',
                                                    borderColor: '#e67e22',
                                                    '&:hover': {
                                                        backgroundColor: selectedCategory === category ? '#d35400' : 'rgba(230, 126, 34, 0.1)'
                                                    }
                                    }
                                }, category)))
                            })
                        })]
                    })
                }), _jsx(Grid, {
                    container: true, spacing: 4, children: filteredNews.map((article) => (_jsx(Grid, {
                        item: true, xs: 12, md: 6, lg: 4, children: _jsxs(Card, {
                            onClick: () => handleReadArticle(article.id),
                            sx: {
                                        height: '100%',
                                cursor: 'pointer',
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            transform: 'translateY(-4px)',
                                    boxShadow: '0 12px 24px rgba(249, 115, 22, 0.15)',
                                    '& .article-title': {
                                        color: '#e67e22'
                                    }
                                        }
                            }, children: [article.image_url && (_jsx(CardMedia, { component: "img", height: "200", image: article.image_url, alt: article.title })), _jsxs(CardContent, {
                                sx: { p: 3 }, children: [_jsx(Box, {
                                    sx: { display: 'flex', gap: 1, mb: 2 }, children: _jsx(Chip, {
                                        label: article.category || 'Actualités', size: "small", sx: {
                                                            backgroundColor: 'rgba(249, 115, 22, 0.1)',
                                                            color: '#e67e22',
                                                            fontWeight: 600
                                        }
                                    })
                                }), _jsx(Typography, {
                                    variant: "h6",
                                    className: "article-title",
                                    sx: {
                                        fontWeight: 600,
                                        mb: 2,
                                        lineHeight: 1.3,
                                        transition: 'color 0.3s ease',
                                        cursor: 'pointer'
                                    },
                                    children: article.title
                                }), _jsx(Typography, { variant: "body2", color: "text.secondary", sx: { mb: 3, lineHeight: 1.5 }, children: article.excerpt || article.content.substring(0, 150) + '...' }), _jsxs(Box, { sx: { display: 'flex', alignItems: 'center', gap: 2, mb: 3, flexWrap: 'wrap' }, children: [_jsxs(Box, { sx: { display: 'flex', alignItems: 'center', gap: 0.5 }, children: [_jsx(PersonIcon, { sx: { fontSize: 16, color: '#6b7280' } }), _jsx(Typography, { variant: "caption", color: "text.secondary", children: article.author })] }), _jsxs(Box, { sx: { display: 'flex', alignItems: 'center', gap: 0.5 }, children: [_jsx(CalendarIcon, { sx: { fontSize: 16, color: '#6b7280' } }), _jsx(Typography, { variant: "caption", color: "text.secondary", children: new Date(article.created_at).toLocaleDateString('fr-FR') })] }), _jsxs(Box, { sx: { display: 'flex', alignItems: 'center', gap: 0.5 }, children: [_jsx(TimeIcon, { sx: { fontSize: 16, color: '#6b7280' } }), _jsx(Typography, { variant: "caption", color: "text.secondary", children: article.read_time })] })] }), _jsx(Button, {
                                    fullWidth: true,
                                    variant: "outlined",
                                    onClick: (e) => {
                                        e.stopPropagation();
                                                        console.log('Button clicked for article:', { id: article.id, title: article.title });
                                                        handleReadArticle(article.id);
                                    },
                                    sx: {
                                                        borderColor: '#e67e22',
                                                        color: '#e67e22',
                                                        fontWeight: 600,
                                                        '&:hover': {
                                                            background: 'linear-gradient(135deg, #e67e22 0%, #f39c12 100%)',
                                                            color: 'white',
                                                            borderColor: '#e67e22'
                                                        }
                                    },
                                    children: "Lire l'article 📖"
                                })]
                            })]
                        })
                    }, article.id)))
                }), filteredNews.length === 0 && !loading && (_jsxs(Box, { sx: { textAlign: 'center', py: 8 }, children: [_jsx(Typography, { variant: "h6", color: "text.secondary", sx: { mb: 2 }, children: "Aucun article trouv\u00E9" }), _jsx(Typography, { variant: "body1", color: "text.secondary", children: "Essayez de modifier vos crit\u00E8res de recherche" })] }))]
            })]
        })
    }));
};
export default NewsPage;
