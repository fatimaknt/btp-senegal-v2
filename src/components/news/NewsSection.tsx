import React, { useState, useEffect } from 'react'
import {
    Box,
    Card,
    CardContent,
    Typography,
    Button,
    Grid,
    Avatar,
    Chip,
    Paper,
    Divider
} from '@mui/material'
import {
    Article as ArticleIcon,
    CalendarToday as CalendarIcon,
    Person as PersonIcon,
    Category as CategoryIcon
} from '@mui/icons-material'
import { supabase } from '../../lib/supabase'

interface News {
    id: string
    title: string
    content: string
    excerpt?: string
    image_url?: string
    category?: string
    is_published: boolean
    created_at: string
}

interface NewsSectionProps {
    title?: string
    maxNews?: number
    showTitle?: boolean
}

const NewsSection: React.FC<NewsSectionProps> = ({
    title = "Actualités BTP",
    maxNews = 3,
    showTitle = true
}) => {
    const [news, setNews] = useState<News[]>([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        loadNews()
    }, [])

    const loadNews = async () => {
        try {
            setLoading(true)
            const { data, error } = await supabase
                .from('articles')
                .select('*')
                .eq('is_published', true)
                .order('created_at', { ascending: false })
                .limit(maxNews)
            
            if (error) {
                console.error('Error loading news:', error)
            } else {
                setNews(data || [])
            }
        } catch (err) {
            console.error('Error in loadNews:', err)
        } finally {
            setLoading(false)
        }
    }

    const displayNews = news.slice(0, maxNews)

    return (
        <Box sx={{ mb: 4 }}>
            {showTitle && (
                <Typography
                    variant="h4"
                    sx={{
                        fontWeight: 700,
                        color: '#1f2937',
                        mb: 4,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 2,
                        textAlign: 'center'
                    }}
                >
                    <ArticleIcon sx={{ fontSize: 32, color: '#f97316' }} />
                    {title}
                </Typography>
            )}

            <Grid container spacing={4}>
                {displayNews.map((article) => (
                    <Grid item xs={12} md={6} lg={4} key={article.id}>
                        <Paper 
                            elevation={2}
                            sx={{
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
                            }}
                        >
                            {/* Image si disponible */}
                            {article.image_url && (
                                <Box
                                    sx={{
                                        height: 200,
                                        backgroundImage: `url(${article.image_url})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        position: 'relative'
                                    }}
                                />
                            )}

                            {/* Contenu */}
                            <Box sx={{ p: 3, flex: 1, display: 'flex', flexDirection: 'column' }}>
                                {/* En-tête avec icône et titre */}
                                <Box sx={{ mb: 2 }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                                        <ArticleIcon sx={{ 
                                            fontSize: 24, 
                                            mr: 1.5,
                                            color: '#f97316'
                                        }} />
                                        <Typography 
                                            variant="h6" 
                                            sx={{ 
                                                fontWeight: 700,
                                                fontSize: '1.1rem',
                                                lineHeight: 1.3,
                                                color: '#1f2937'
                                            }}
                                        >
                                            {article.title}
                                        </Typography>
                                    </Box>
                                    
                                    {article.category && (
                                        <Chip
                                            label={article.category}
                                            size="small"
                                            sx={{
                                                backgroundColor: 'rgba(249, 115, 22, 0.1)',
                                                color: '#f97316',
                                                fontWeight: 600,
                                                fontSize: '0.75rem'
                                            }}
                                        />
                                    )}
                                </Box>

                                {/* Extrait ou contenu */}
                                <Typography 
                                    variant="body2" 
                                    sx={{ 
                                        color: '#374151',
                                        lineHeight: 1.6,
                                        mb: 2,
                                        flex: 1
                                    }}
                                >
                                    {article.excerpt || article.content.substring(0, 150) + '...'}
                                </Typography>

                                <Divider sx={{ my: 2, borderColor: '#e5e7eb' }} />

                                {/* Date et bouton */}
                                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                        <CalendarIcon sx={{ fontSize: 16, color: '#6b7280', mr: 1 }} />
                                        <Typography variant="body2" sx={{ color: '#6b7280', fontSize: '0.85rem' }}>
                                            {new Date(article.created_at).toLocaleDateString('fr-FR')}
                                        </Typography>
                                    </Box>

                                    <Button
                                        variant="contained"
                                        size="small"
                                        sx={{
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
                                        }}
                                    >
                                        Lire la suite
                                    </Button>
                                </Box>
                            </Box>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}

export default NewsSection

