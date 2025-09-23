import React, { useState } from 'react'
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
import PageTransition from '../../components/animations/PageTransition'

const BlogPage: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const [selectedCategory, setSelectedCategory] = useState('all')

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
    ]

    const categories = ['all', 'Tendances', 'Matériaux', 'Juridique', 'Innovation']

    const filteredArticles = articles.filter(article => {
        const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            article.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
        const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory
        return matchesSearch && matchesCategory
    })

    return (
        <PageTransition>
            <Box sx={{ backgroundColor: '#f8fafc', minHeight: '100vh' }}>
                {/* Header */}
                <Box sx={{ backgroundColor: '#f97316', color: 'white', py: 8 }}>
                    <Container maxWidth="lg">
                        <Typography
                            variant="h2"
                            sx={{
                                fontWeight: 800,
                                mb: 2,
                                background: 'linear-gradient(45deg, #ffffff 0%, #fbbf24 50%, #f97316 100%)',
                                backgroundClip: 'text',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
                            }}
                        >
                            📝 Blog BTP Sénégal
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
                                                <SearchIcon sx={{ color: '#f97316' }} />
                                            </InputAdornment>
                                        ),
                                    }}
                                    sx={{
                                        '& .MuiOutlinedInput-root': {
                                            '&:hover fieldset': { borderColor: '#f97316' },
                                            '&.Mui-focused fieldset': { borderColor: '#f97316' }
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
                                                backgroundColor: selectedCategory === category ? '#f97316' : 'transparent',
                                                color: selectedCategory === category ? 'white' : '#f97316',
                                                borderColor: '#f97316',
                                                '&:hover': {
                                                    backgroundColor: selectedCategory === category ? '#ea580c' : 'rgba(249, 115, 22, 0.1)'
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
                        {filteredArticles.map((article) => (
                            <Grid item xs={12} md={6} lg={4} key={article.id}>
                                <Card sx={{
                                    height: '100%',
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        transform: 'translateY(-4px)',
                                        boxShadow: '0 12px 24px rgba(249, 115, 22, 0.15)'
                                    }
                                }}>
                                    <CardMedia
                                        component="img"
                                        height="200"
                                        image={article.image}
                                        alt={article.title}
                                    />
                                    <CardContent sx={{ p: 3 }}>
                                        <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
                                            <Chip
                                                label={article.category}
                                                size="small"
                                                sx={{
                                                    backgroundColor: 'rgba(249, 115, 22, 0.1)',
                                                    color: '#f97316',
                                                    fontWeight: 600
                                                }}
                                            />
                                        </Box>

                                        <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, lineHeight: 1.3 }}>
                                            {article.title}
                                        </Typography>

                                        <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.5 }}>
                                            {article.excerpt}
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
                                                    {new Date(article.date).toLocaleDateString('fr-FR')}
                                                </Typography>
                                            </Box>
                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                                                <TimeIcon sx={{ fontSize: 16, color: '#6b7280' }} />
                                                <Typography variant="caption" color="text.secondary">
                                                    {article.readTime}
                                                </Typography>
                                            </Box>
                                        </Box>

                                        <Button
                                            component={Link}
                                            to={`/blog/${article.slug}`}
                                            fullWidth
                                            variant="outlined"
                                            sx={{
                                                borderColor: '#f97316',
                                                color: '#f97316',
                                                fontWeight: 600,
                                                '&:hover': {
                                                    background: 'linear-gradient(135deg, #f97316 0%, #fb923c 100%)',
                                                    color: 'white',
                                                    borderColor: '#f97316'
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

                    {filteredArticles.length === 0 && (
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

export default BlogPage