import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
    Box,
    Container,
    Typography,
    Card,
    CardContent,
    CardMedia,
    Grid,
    Chip,
    Button,
    TextField,
    InputAdornment
} from '@mui/material'
import {
    Search as SearchIcon,
    CalendarToday as CalendarIcon,
    Person as PersonIcon,
    AccessTime as TimeIcon
} from '@mui/icons-material'
import { supabase } from '../../lib/supabase'
import PageTransition from '../../components/animations/PageTransition'

interface News {
    id: string
    title: string
    content: string
    excerpt?: string
    image_url?: string
    category?: string
    is_published: boolean
    created_at: string
    author?: string
    read_time?: string
}

const NewsPage: React.FC = () => {
    const [news, setNews] = useState<News[]>([])
    const [filteredNews, setFilteredNews] = useState<News[]>([])
    const [loading, setLoading] = useState(false)
    const [searchTerm, setSearchTerm] = useState('')
    const [selectedCategory, setSelectedCategory] = useState('all')

    const categories = ['all', 'Actualités', 'Réglementation', 'Technologie', 'Événements', 'Formation', 'Autre']

    useEffect(() => {
        loadNews()
    }, [])

    useEffect(() => {
        filterNews()
    }, [news, searchTerm, selectedCategory])

    const loadNews = async () => {
        try {
            setLoading(true)
            const { data, error } = await supabase
                .from('articles')
                .select('*')
                .eq('is_published', true)
                .order('created_at', { ascending: false })

            if (error) {
                console.error('Error loading news:', error)
            } else {
                // Ajouter des données mockées pour le design
                const newsWithMockData = (data || []).map(article => ({
                    ...article,
                    author: 'Rédaction BTP',
                    read_time: Math.floor(Math.random() * 5) + 3 + ' min'
                }))
                setNews(newsWithMockData)
            }
        } catch (err) {
            console.error('Error in loadNews:', err)
        } finally {
            setLoading(false)
        }
    }

    const filterNews = () => {
        let filtered = news

        if (searchTerm) {
            filtered = filtered.filter(article =>
                article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                article.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
                (article.excerpt && article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()))
            )
        }

        if (selectedCategory && selectedCategory !== 'all') {
            filtered = filtered.filter(article =>
                article.category === selectedCategory
            )
        }

        setFilteredNews(filtered)
    }

    return (
        <PageTransition>
            <Box sx={{ backgroundColor: '#f8fafc', minHeight: '100vh' }}>
                {/* Header */}
                <Box sx={{ backgroundColor: '#e67e22', color: 'white', py: 8 }}>
                    <Container maxWidth="lg">
                        <Typography
                            variant="h2"
                            sx={{
                                fontWeight: 800,
                                mb: 2,
                                background: 'linear-gradient(45deg, #ffffff 0%, #fbbf24 50%, #e67e22 100%)',
                                backgroundClip: 'text',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
                            }}
                        >
                            Actualités BTP Sénégal
                        </Typography>
                        <Typography variant="h5" sx={{ opacity: 0.9, maxWidth: '600px' }}>
                            Conseils, actualités et guides pour les professionnels du BTP
                        </Typography>
                    </Container>
                </Box>

                <Container maxWidth="lg" sx={{ py: 6 }}>
                    {/* Barre de recherche et filtres */}
                    <Card sx={{ mb: 4, p: 3 }}>
                        <Grid container spacing={3} alignItems="center">
                            <Grid item xs={12} md={6}>
                                <TextField
                                    fullWidth
                                    placeholder="Rechercher un article..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <SearchIcon sx={{ color: '#e67e22' }} />
                                            </InputAdornment>
                                        ),
                                    }}
                                    sx={{
                                        '& .MuiOutlinedInput-root': {
                                            '&:hover fieldset': { borderColor: '#e67e22' },
                                            '&.Mui-focused fieldset': { borderColor: '#e67e22' }
                                        }
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                                    {categories.map((category) => (
                                        <Chip
                                            key={category}
                                            label={category === 'all' ? 'Tous' : category}
                                            onClick={() => setSelectedCategory(category)}
                                            variant={selectedCategory === category ? 'filled' : 'outlined'}
                                            sx={{
                                                backgroundColor: selectedCategory === category ? '#e67e22' : 'transparent',
                                                color: selectedCategory === category ? 'white' : '#e67e22',
                                                borderColor: '#e67e22',
                                                '&:hover': {
                                                    backgroundColor: selectedCategory === category ? '#d35400' : 'rgba(230, 126, 34, 0.1)'
                                                }
                                            }}
                                        />
                                    ))}
                                </Box>
                            </Grid>
                        </Grid>
                    </Card>

                    {/* Articles */}
                    <Grid container spacing={4}>
                        {filteredNews.map((article) => (
                            <Grid item xs={12} md={6} lg={4} key={article.id}>
                                <Card sx={{
                                    height: '100%',
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        transform: 'translateY(-4px)',
                                        boxShadow: '0 12px 24px rgba(249, 115, 22, 0.15)'
                                    }
                                }}>
                                    {article.image_url && (
                                        <CardMedia
                                            component="img"
                                            height="200"
                                            image={article.image_url}
                                            alt={article.title}
                                        />
                                    )}
                                    <CardContent sx={{ p: 3 }}>
                                        <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
                                            <Chip
                                                label={article.category || 'Actualités'}
                                                size="small"
                                                sx={{
                                                    backgroundColor: 'rgba(249, 115, 22, 0.1)',
                                                    color: '#e67e22',
                                                    fontWeight: 600
                                                }}
                                            />
                                        </Box>

                                        <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, lineHeight: 1.3 }}>
                                            {article.title}
                                        </Typography>

                                        <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.5 }}>
                                            {article.excerpt || article.content.substring(0, 150) + '...'}
                                        </Typography>

                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3, flexWrap: 'wrap' }}>
                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                                                <PersonIcon sx={{ fontSize: 16, color: '#6b7280' }} />
                                                <Typography variant="caption" color="text.secondary">
                                                    {article.author}
                                                </Typography>
                                            </Box>
                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                                                <CalendarIcon sx={{ fontSize: 16, color: '#6b7280' }} />
                                                <Typography variant="caption" color="text.secondary">
                                                    {new Date(article.created_at).toLocaleDateString('fr-FR')}
                                                </Typography>
                                            </Box>
                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                                                <TimeIcon sx={{ fontSize: 16, color: '#6b7280' }} />
                                                <Typography variant="caption" color="text.secondary">
                                                    {article.read_time}
                                                </Typography>
                                            </Box>
                                        </Box>

                                        <Button
                                            fullWidth
                                            variant="outlined"
                                            sx={{
                                                borderColor: '#e67e22',
                                                color: '#e67e22',
                                                fontWeight: 600,
                                                '&:hover': {
                                                    background: 'linear-gradient(135deg, #e67e22 0%, #f39c12 100%)',
                                                    color: 'white',
                                                    borderColor: '#e67e22'
                                                }
                                            }}
                                        >
                                            Lire l'article 📖
                                        </Button>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>

                    {filteredNews.length === 0 && !loading && (
                        <Box sx={{ textAlign: 'center', py: 8 }}>
                            <Typography variant="h6" color="text.secondary" sx={{ mb: 2 }}>
                                Aucun article trouvé
                            </Typography>
                            <Typography variant="body1" color="text.secondary">
                                Essayez de modifier vos critères de recherche
                            </Typography>
                        </Box>
                    )}
                </Container>
            </Box>
        </PageTransition>
    )
}

export default NewsPage