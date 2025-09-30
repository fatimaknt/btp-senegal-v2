import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { Box, Typography, Button, Grid, Chip, Paper, Divider } from '@mui/material';
import { Article as ArticleIcon, CalendarToday as CalendarIcon } from '@mui/icons-material';
import { supabase } from '../../lib/supabase';
const NewsSection = ({ title = "Actualités BTP", maxNews = 3, showTitle = true }) => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        loadNews();
    }, []);
    const loadNews = async () => {
        try {
            setLoading(true);
            const { data, error } = await supabase
                .from('articles')
                .select('*')
                .eq('is_published', true)
                .order('created_at', { ascending: false })
                .limit(maxNews);
            if (error) {
                console.error('Error loading news:', error);
            }
            else {
                setNews(data || []);
            }
        }
        catch (err) {
            console.error('Error in loadNews:', err);
        }
        finally {
            setLoading(false);
        }
    };
    const displayNews = news.slice(0, maxNews);
    return (_jsxs(Box, { sx: { mb: 4 }, children: [showTitle && (_jsxs(Typography, { variant: "h4", sx: {
                    fontWeight: 700,
                    color: '#1f2937',
                    mb: 4,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    textAlign: 'center'
                }, children: [_jsx(ArticleIcon, { sx: { fontSize: 32, color: '#f97316' } }), title] })), _jsx(Grid, { container: true, spacing: 4, children: displayNews.map((article) => (_jsx(Grid, { item: true, xs: 12, md: 6, lg: 4, children: _jsxs(Paper, { elevation: 2, sx: {
                            border: '1px solid #e5e7eb',
                            borderRadius: 3,
                            overflow: 'hidden',
                            transition: 'all 0.3s ease',
                            backgroundColor: 'white',
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            '&:hover': {
                                transform: 'translateY(-4px)',
                                boxShadow: '0 12px 30px rgba(0,0,0,0.15)',
                            }
                        }, children: [article.image_url && (_jsx(Box, { sx: {
                                    height: 200,
                                    backgroundImage: `url(${article.image_url})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    position: 'relative'
                                } })), _jsxs(Box, { sx: { p: 3, flex: 1, display: 'flex', flexDirection: 'column' }, children: [_jsxs(Box, { sx: { mb: 2 }, children: [_jsxs(Box, { sx: { display: 'flex', alignItems: 'center', mb: 1 }, children: [_jsx(ArticleIcon, { sx: {
                                                            fontSize: 24,
                                                            mr: 1.5,
                                                            color: '#f97316'
                                                        } }), _jsx(Typography, { variant: "h6", sx: {
                                                            fontWeight: 700,
                                                            fontSize: '1.1rem',
                                                            lineHeight: 1.3,
                                                            color: '#1f2937'
                                                        }, children: article.title })] }), article.category && (_jsx(Chip, { label: article.category, size: "small", sx: {
                                                    backgroundColor: 'rgba(249, 115, 22, 0.1)',
                                                    color: '#f97316',
                                                    fontWeight: 600,
                                                    fontSize: '0.75rem'
                                                } }))] }), _jsx(Typography, { variant: "body2", sx: {
                                            color: '#374151',
                                            lineHeight: 1.6,
                                            mb: 2,
                                            flex: 1
                                        }, children: article.excerpt || article.content.substring(0, 150) + '...' }), _jsx(Divider, { sx: { my: 2, borderColor: '#e5e7eb' } }), _jsxs(Box, { sx: { display: 'flex', alignItems: 'center', justifyContent: 'space-between' }, children: [_jsxs(Box, { sx: { display: 'flex', alignItems: 'center' }, children: [_jsx(CalendarIcon, { sx: { fontSize: 16, color: '#6b7280', mr: 1 } }), _jsx(Typography, { variant: "body2", sx: { color: '#6b7280', fontSize: '0.85rem' }, children: new Date(article.created_at).toLocaleDateString('fr-FR') })] }), _jsx(Button, { variant: "contained", size: "small", sx: {
                                                    background: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
                                                    '&:hover': {
                                                        background: 'linear-gradient(135deg, #ea580c 0%, #dc2626 100%)',
                                                        transform: 'translateY(-1px)',
                                                        boxShadow: '0 4px 12px rgba(249, 115, 22, 0.4)'
                                                    },
                                                    color: 'white',
                                                    fontWeight: 600,
                                                    px: 2,
                                                    py: 1,
                                                    borderRadius: 2,
                                                    textTransform: 'none',
                                                    fontSize: '0.8rem'
                                                }, children: "Lire la suite" })] })] })] }) }, article.id))) })] }));
};
export default NewsSection;
