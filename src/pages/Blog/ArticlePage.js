import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Box, Container, Typography, Card, CardContent, Chip, Button, Divider, Avatar } from '@mui/material';
import { ArrowBack as ArrowBackIcon, CalendarToday as CalendarIcon, AccessTime as TimeIcon, Share as ShareIcon } from '@mui/icons-material';
import PageTransition from '../../components/animations/PageTransition';
const ArticlePage = () => {
    const { id } = useParams();
    const [article, setArticle] = useState(null);
    const [loading, setLoading] = useState(true);
    const loadArticle = useCallback(() => {
        try {
            setLoading(true);
            const stored = localStorage.getItem('btp_articles');
            console.log('Loading article with ID:', id);
            console.log('Stored articles:', stored);
            if (stored) {
                const articles = JSON.parse(stored);
                console.log('Parsed articles:', articles);
                console.log('Looking for article with ID:', id);
                // Chercher l'article par ID
                const foundArticle = articles.find((art) => art.id === id);
                console.log('Found article:', foundArticle);
                if (foundArticle) {
                    console.log('Article found:', foundArticle);
                    console.log('Article image_url:', foundArticle.image_url);
                    setArticle(foundArticle);
                }
                else {
                    console.log('Article not found. Available IDs:', articles.map((art) => art.id));
                }
            }
            else {
                console.log('No articles found in localStorage');
            }
        }
        catch (error) {
            console.error('Error loading article:', error);
        }
        finally {
            setLoading(false);
        }
    }, [id]);
    useEffect(() => {
        loadArticle();
    }, [loadArticle]);
    if (loading) {
        return (_jsx(Box, { sx: { display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }, children: _jsx(Typography, { children: "Chargement..." }) }));
    }
    if (!article) {
        return (_jsx(Container, { maxWidth: "md", sx: { py: 8 }, children: _jsxs(Box, { sx: { textAlign: 'center' }, children: [_jsx(Typography, { variant: "h4", sx: { mb: 2 }, children: "Article non trouv\u00E9" }), _jsxs(Typography, { variant: "body1", sx: { mb: 2 }, children: ["L'article avec l'ID \"", id, "\" n'existe pas ou a \u00E9t\u00E9 supprim\u00E9."] }), _jsx(Typography, { variant: "body2", color: "text.secondary", sx: { mb: 4 }, children: "V\u00E9rifiez la console pour plus de d\u00E9tails sur les articles disponibles." }), _jsx(Button, { component: Link, to: "/actualites", variant: "contained", children: "Retour aux actualit\u00E9s" })] }) }));
    }
    return (_jsx(PageTransition, { children: _jsx(Box, { sx: {
                backgroundColor: '#f8fafc',
                minHeight: '100vh',
                background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)'
            }, children: _jsxs(Container, { maxWidth: "lg", sx: { py: 6 }, children: [_jsx(Button, { component: Link, to: "/actualites", startIcon: _jsx(ArrowBackIcon, {}), sx: {
                            mb: 4,
                            color: '#f97316',
                            fontWeight: 600,
                            px: 3,
                            py: 1.5,
                            borderRadius: '8px',
                            border: '2px solid #f97316',
                            '&:hover': {
                                backgroundColor: '#f97316',
                                color: 'white',
                                transform: 'translateY(-2px)',
                                boxShadow: '0 8px 16px rgba(249, 115, 22, 0.3)'
                            }
                        }, children: "Retour au blog" }), _jsxs(Card, { sx: {
                            mb: 6,
                            borderRadius: '16px',
                            boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                            overflow: 'hidden',
                            border: '1px solid rgba(249, 115, 22, 0.1)'
                        }, children: [_jsx(Box, { sx: {
                                    height: 500,
                                    backgroundImage: article.image_url && article.image_url.trim() !== ''
                                        ? `url(${article.image_url})`
                                        : 'linear-gradient(135deg, #f97316 0%, #fb923c 100%)',
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat',
                                    position: 'relative',
                                    display: 'flex',
                                    alignItems: 'flex-end',
                                    borderRadius: '12px 12px 0 0',
                                    overflow: 'hidden'
                                }, children: _jsxs(Box, { sx: {
                                        background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
                                        width: '100%',
                                        p: 4,
                                        color: 'white',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        textAlign: 'center'
                                    }, children: [(!article.image_url || article.image_url.trim() === '') && (_jsxs(Box, { sx: { mb: 3 }, children: [_jsx(Typography, { variant: "h1", sx: { fontSize: '4rem', mb: 2 }, children: "\uD83D\uDCF0" }), _jsx(Typography, { variant: "h6", sx: { opacity: 0.8, mb: 2 }, children: "Article d'actualit\u00E9" })] })), _jsx(Chip, { label: article.category || 'Actualités', sx: {
                                                backgroundColor: 'rgba(255,255,255,0.2)',
                                                color: 'white',
                                                fontWeight: 600,
                                                mb: 2
                                            } }), _jsx(Typography, { variant: "h2", sx: {
                                                fontWeight: 800,
                                                mb: 2,
                                                fontSize: { xs: '2rem', md: '3rem' },
                                                lineHeight: 1.2,
                                                textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
                                            }, children: article.title })] }) }), _jsxs(CardContent, { sx: { p: 4 }, children: [_jsxs(Box, { sx: {
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: 4,
                                            mb: 6,
                                            flexWrap: 'wrap',
                                            p: 3,
                                            backgroundColor: 'rgba(249, 115, 22, 0.05)',
                                            borderRadius: '12px',
                                            border: '1px solid rgba(249, 115, 22, 0.1)'
                                        }, children: [_jsxs(Box, { sx: { display: 'flex', alignItems: 'center', gap: 1 }, children: [_jsx(Avatar, { sx: { width: 32, height: 32, backgroundColor: '#f97316' }, children: article.author?.charAt(0) || 'A' }), _jsx(Box, { children: _jsx(Typography, { variant: "body2", sx: { fontWeight: 600 }, children: article.author }) })] }), _jsxs(Box, { sx: { display: 'flex', alignItems: 'center', gap: 0.5 }, children: [_jsx(CalendarIcon, { sx: { fontSize: 16, color: '#6b7280' } }), _jsx(Typography, { variant: "body2", color: "text.secondary", children: new Date(article.created_at).toLocaleDateString('fr-FR') })] }), _jsxs(Box, { sx: { display: 'flex', alignItems: 'center', gap: 0.5 }, children: [_jsx(TimeIcon, { sx: { fontSize: 16, color: '#6b7280' } }), _jsx(Typography, { variant: "body2", color: "text.secondary", children: article.read_time || '5 min' })] }), _jsx(Button, { startIcon: _jsx(ShareIcon, {}), size: "small", sx: {
                                                    color: '#f97316',
                                                    '&:hover': {
                                                        backgroundColor: 'rgba(249, 115, 22, 0.1)'
                                                    }
                                                }, children: "Partager" })] }), _jsx(Typography, { variant: "h6", sx: {
                                            mb: 4,
                                            fontStyle: 'italic',
                                            color: '#6b7280',
                                            borderLeft: '4px solid #f97316',
                                            pl: 2,
                                            backgroundColor: 'rgba(249, 115, 22, 0.05)',
                                            p: 2,
                                            borderRadius: 1
                                        }, children: article.excerpt }), _jsx(Box, { sx: {
                                            '& h2': {
                                                color: '#f97316',
                                                fontWeight: 700,
                                                mt: 4,
                                                mb: 2,
                                                fontSize: '1.8rem'
                                            },
                                            '& h3': {
                                                color: '#374151',
                                                fontWeight: 600,
                                                mt: 4,
                                                mb: 2,
                                                fontSize: '1.6rem'
                                            },
                                            '& p': {
                                                lineHeight: 1.8,
                                                mb: 3,
                                                fontSize: '1.2rem',
                                                textAlign: 'justify',
                                                color: '#4b5563'
                                            },
                                            '& ul': {
                                                pl: 4,
                                                mb: 3
                                            },
                                            '& li': {
                                                mb: 1,
                                                fontSize: '1.2rem',
                                                color: '#4b5563'
                                            },
                                            '& blockquote': {
                                                borderRadius: '8px',
                                                fontSize: '1.3rem',
                                                borderLeft: '6px solid #f97316',
                                                pl: 4,
                                                py: 3,
                                                backgroundColor: 'rgba(249, 115, 22, 0.08)',
                                                fontStyle: 'italic',
                                                color: '#374151',
                                                mb: 4
                                            },
                                            '& strong': {
                                                color: '#f97316',
                                                fontWeight: 700
                                            }
                                        }, dangerouslySetInnerHTML: { __html: article.content } }), _jsx(Divider, { sx: { my: 4 } }), _jsxs(Box, { sx: { mb: 4 }, children: [_jsx(Typography, { variant: "h6", sx: { mb: 2, fontWeight: 600 }, children: "\uD83C\uDFF7\uFE0F Tags" }), _jsx(Box, { sx: { display: 'flex', gap: 2, flexWrap: 'wrap' }, children: _jsx(Chip, { label: article.category || 'Actualités', sx: {
                                                        backgroundColor: '#f97316',
                                                        color: 'white',
                                                        fontWeight: 600,
                                                        px: 2,
                                                        py: 1,
                                                        fontSize: '1rem',
                                                        '&:hover': {
                                                            backgroundColor: '#ea580c',
                                                            transform: 'translateY(-2px)',
                                                            boxShadow: '0 4px 8px rgba(249, 115, 22, 0.3)'
                                                        }
                                                    } }) })] })] })] })] }) }) }));
};
export default ArticlePage;
