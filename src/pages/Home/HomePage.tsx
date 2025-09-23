import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
    ThemeProvider,
    createTheme,
    CssBaseline,
    Typography,
    Container,
    Box,
    Card,
    CardContent,
    TextField,
    Button,
    Avatar,
    Paper
} from '@mui/material'
import {
    Search as SearchIcon,
    Business as BusinessIcon,
    LocationOn as LocationIcon,
    Star as StarIcon
} from '@mui/icons-material'
import PageTransition from '../../components/animations/PageTransition'

const HomePage: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState('')
    const [selectedCategory, setSelectedCategory] = useState('')
    const [selectedCity, setSelectedCity] = useState('')
    const navigate = useNavigate()

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault()
        const params = new URLSearchParams()
        if (searchQuery.trim()) params.set('search', searchQuery.trim())
        if (selectedCategory) params.set('category', selectedCategory)
        if (selectedCity) params.set('city', selectedCity)
        navigate(`/annuaire?${params.toString()}`)
    }

    return (
        <PageTransition>
            {/* Hero Section avec recherche moderne */}
            <Box sx={{
                backgroundColor: '#f97316',
                color: 'white',
                py: { xs: 8, md: 12 },
                position: 'relative'
            }}>
                <Container maxWidth="lg">
                    <Box sx={{ textAlign: 'center', mb: 6 }}>
                        <Typography
                            variant="h2"
                            component="h1"
                            sx={{
                                fontWeight: 900,
                                mb: 3,
                                color: '#ffffff',
                                textShadow: '3px 3px 6px rgba(0,0,0,0.5)',
                                letterSpacing: '-0.02em',
                                fontSize: { xs: '2.5rem', md: '4rem' }
                            }}
                        >
                            🏗️ Annuaire BTP Sénégal
                        </Typography>
                        <Typography
                            variant="h5"
                            sx={{
                                mb: 6,
                                color: 'rgba(255, 255, 255, 0.95)',
                                maxWidth: '700px',
                                mx: 'auto',
                                lineHeight: 1.6,
                                fontWeight: 500,
                                textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                                fontSize: { xs: '1.2rem', md: '1.5rem' },
                                letterSpacing: '0.01em'
                            }}
                        >
                            Trouvez les meilleurs professionnels du BTP au Sénégal.
                            Plus de 1000 entreprises certifiées à votre service ! 🇸🇳
                        </Typography>
                    </Box>

                    {/* Barre de recherche glassmorphisme moderne */}
                    <Box sx={{ maxWidth: 900, mx: 'auto', mb: 8 }}>
                        <Card sx={{
                            background: 'rgba(255, 255, 255, 0.15)',
                            backdropFilter: 'blur(30px)',
                            borderRadius: 6,
                            boxShadow: '0 25px 50px rgba(0, 0, 0, 0.15)',
                            border: '1px solid rgba(255, 255, 255, 0.2)',
                            position: 'relative',
                            '&::before': {
                                content: '""',
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                height: '1px',
                                background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.5), transparent)'
                            }
                        }}>
                            <CardContent sx={{ p: 5 }}>
                                <Typography variant="h5" sx={{ mb: 4, fontWeight: 700, color: 'white', textAlign: 'center' }}>
                                    🔍 Trouvez votre professionnel BTP
                                </Typography>

                                <Box component="form" onSubmit={handleSearch} sx={{ mb: 4 }}>
                                    <Box sx={{
                                        display: 'flex',
                                        flexDirection: { xs: 'column', sm: 'row' },
                                        gap: 3,
                                        alignItems: 'stretch'
                                    }}>
                                        <TextField
                                            fullWidth
                                            placeholder="Service ou entreprise recherchée..."
                                            value={searchQuery}
                                            onChange={(e) => setSearchQuery(e.target.value)}
                                            InputProps={{
                                                startAdornment: (
                                                    <SearchIcon sx={{
                                                        color: '#f97316',
                                                        mr: 2,
                                                        fontSize: 32,
                                                        filter: 'drop-shadow(0 2px 4px rgba(249,115,22,0.4))'
                                                    }} />
                                                ),
                                            }}
                                            sx={{
                                                '& .MuiOutlinedInput-root': {
                                                    height: '70px',
                                                    borderRadius: 6,
                                                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                                                    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
                                                    border: '2px solid rgba(255, 255, 255, 0.2)',
                                                    backdropFilter: 'blur(20px)',
                                                    '& fieldset': {
                                                        border: 'none'
                                                    },
                                                    '&:hover': {
                                                        backgroundColor: 'rgba(255, 255, 255, 0.98)',
                                                        boxShadow: '0 12px 35px rgba(0, 0, 0, 0.2)',
                                                        transform: 'translateY(-2px)'
                                                    },
                                                    '&.Mui-focused': {
                                                        backgroundColor: 'white',
                                                        boxShadow: '0 15px 40px rgba(249, 115, 22, 0.25)',
                                                        border: '2px solid rgba(249, 115, 22, 0.3)'
                                                    }
                                                },
                                                '& input': {
                                                    fontSize: '1.2rem',
                                                    fontWeight: 500,
                                                    '&::placeholder': {
                                                        color: 'rgba(107, 114, 128, 0.7)',
                                                        fontWeight: 500
                                                    }
                                                }
                                            }}
                                        />

                                        <Button
                                            type="submit"
                                            variant="contained"
                                            sx={{
                                                height: '70px',
                                                px: 6,
                                                py: 3,
                                                background: 'linear-gradient(135deg, #f97316 0%, #fb923c 100%)',
                                                color: 'white',
                                                borderRadius: 6,
                                                fontWeight: 700,
                                                fontSize: '1.3rem',
                                                textTransform: 'none',
                                                border: '2px solid rgba(255, 255, 255, 0.2)',
                                                boxShadow: '0 8px 25px rgba(249, 115, 22, 0.3)',
                                                minWidth: { xs: '100%', sm: '180px' },
                                                backdropFilter: 'blur(10px)',
                                                '&:hover': {
                                                    background: 'linear-gradient(135deg, #ea580c 0%, #f97316 100%)',
                                                    transform: 'translateY(-3px)',
                                                    boxShadow: '0 15px 35px rgba(249, 115, 22, 0.4)',
                                                    border: '2px solid rgba(255, 255, 255, 0.4)'
                                                }
                                            }}
                                        >
                                            Rechercher
                                        </Button>
                                    </Box>
                                </Box>

                                {/* Tags populaires */}
                                <Box sx={{ textAlign: 'center' }}>
                                    <Typography variant="body2" sx={{ mb: 2, color: 'rgba(255, 255, 255, 0.8)' }}>
                                        Recherches populaires :
                                    </Typography>
                                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, justifyContent: 'center' }}>
                                        {['Construction', 'Rénovation', 'Maçonnerie', 'Électricité', 'Plomberie', 'Peinture'].map((tag) => (
                                            <Box
                                                key={tag}
                                                component="button"
                                                onClick={() => setSearchQuery(tag)}
                                                sx={{
                                                    background: 'rgba(255, 255, 255, 0.2)',
                                                    backdropFilter: 'blur(10px)',
                                                    border: '1px solid rgba(255, 255, 255, 0.3)',
                                                    borderRadius: 2,
                                                    color: 'white',
                                                    px: 2,
                                                    py: 1,
                                                    fontSize: '0.8rem',
                                                    cursor: 'pointer',
                                                    transition: 'all 0.3s ease',
                                                    '&:hover': {
                                                        background: 'rgba(255, 255, 255, 0.3)',
                                                        transform: 'translateY(-1px)'
                                                    }
                                                }}
                                            >
                                                {tag}
                                            </Box>
                                        ))}
                                    </Box>
                                </Box>
                            </CardContent>
                        </Card>
                    </Box>

                    {/* Statistiques glassmorphisme */}
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: { xs: 2, md: 6 },
                        flexWrap: 'wrap'
                    }}>
                        {[
                            {
                                icon: <BusinessIcon sx={{ fontSize: 80, color: '#fbbf24', filter: 'drop-shadow(0 6px 12px rgba(251,191,36,0.4))' }} />,
                                value: '1000+',
                                label: 'Entreprises'
                            },
                            {
                                icon: <LocationIcon sx={{ fontSize: 80, color: '#fbbf24', filter: 'drop-shadow(0 6px 12px rgba(251,191,36,0.4))' }} />,
                                value: '14',
                                label: 'Régions'
                            },
                            {
                                icon: <StarIcon sx={{ fontSize: 80, color: '#fbbf24', filter: 'drop-shadow(0 6px 12px rgba(251,191,36,0.4))' }} />,
                                value: '4.8/5',
                                label: 'Satisfaction'
                            }
                        ].map((stat, index) => (
                            <Box
                                key={index}
                                sx={{
                                    background: 'rgba(255, 255, 255, 0.15)',
                                    backdropFilter: 'blur(30px)',
                                    borderRadius: 4,
                                    p: 4,
                                    textAlign: 'center',
                                    border: '2px solid rgba(255, 255, 255, 0.2)',
                                    minWidth: 303,
                                    minHeight: 140,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                    cursor: 'pointer',
                                    position: 'relative',
                                    overflow: 'hidden',
                                    '&::before': {
                                        content: '""',
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        height: '2px',
                                        background: 'linear-gradient(90deg, #fbbf24, #f97316, #ea580c)',
                                        opacity: 0,
                                        transition: 'opacity 0.3s ease'
                                    },
                                    '&:hover': {
                                        background: 'rgba(255, 255, 255, 0.25)',
                                        transform: 'translateY(-8px) scale(1.02)',
                                        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.25)',
                                        border: '2px solid rgba(255, 255, 255, 0.4)',
                                        '&::before': {
                                            opacity: 1
                                        }
                                    }
                                }}
                            >
                                <Box sx={{ mb: 2 }}>
                                    {stat.icon}
                                </Box>
                                <Typography
                                    variant="h4"
                                    sx={{
                                        fontWeight: 900,
                                        color: '#fbbf24',
                                        textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                                        filter: 'drop-shadow(0 2px 4px rgba(251,191,36,0.3))',
                                        mb: 1
                                    }}
                                >
                                    {stat.value}
                                </Typography>
                                <Typography
                                    variant="body1"
                                    sx={{
                                        color: 'rgba(255, 255, 255, 0.9)',
                                        fontWeight: 600,
                                        textShadow: '1px 1px 2px rgba(0,0,0,0.3)'
                                    }}
                                >
                                    {stat.label}
                                </Typography>
                            </Box>
                        ))}
                    </Box>
                </Container>
            </Box>

            {/* Section CTA Professionnels */}
            <Box sx={{
                backgroundColor: '#ffffff',
                color: '#1f2937',
                py: 12
            }}>
                <Container maxWidth="lg">
                    <Box sx={{ textAlign: 'center', mb: 8 }}>
                        <Typography
                            variant="h2"
                            sx={{
                                fontWeight: 800,
                                mb: 3,
                                background: 'linear-gradient(45deg, #f97316 0%, #fb923c 50%, #ea580c 100%)',
                                backgroundClip: 'text',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                textShadow: '2px 2px 4px rgba(249, 115, 22, 0.1)'
                            }}
                        >
                            🏗️ Vous êtes un professionnel du BTP ?
                        </Typography>
                        <Typography
                            variant="h5"
                            sx={{
                                mb: 6,
                                color: 'rgba(31, 41, 55, 0.8)',
                                maxWidth: '600px',
                                mx: 'auto',
                                textShadow: 'none'
                            }}
                        >
                            Rejoignez notre annuaire et développez votre activité avec +1000 professionnels du Sénégal 🇸🇳
                        </Typography>

                        <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', flexWrap: 'wrap', mb: 8 }}>
                            <Button
                                variant="contained"
                                size="large"
                                onClick={() => navigate('/auth/register')}
                                sx={{
                                    background: 'linear-gradient(135deg, #f97316 0%, #fb923c 100%)',
                                    color: 'white',
                                    borderRadius: 4,
                                    fontWeight: 700,
                                    fontSize: '1.4rem',
                                    px: 8,
                                    py: 4,
                                    textTransform: 'none',
                                    border: '2px solid rgba(255, 255, 255, 0.3)',
                                    boxShadow: '0 6px 20px rgba(249, 115, 22, 0.3)',
                                    minHeight: '70px',
                                    '&:hover': {
                                        background: 'linear-gradient(135deg, #ea580c 0%, #f97316 100%)',
                                        transform: 'translateY(-3px)',
                                        boxShadow: '0 12px 30px rgba(249, 115, 22, 0.4)'
                                    }
                                }}
                            >
                                📝 Inscrire mon entreprise
                            </Button>
                            <Button
                                variant="outlined"
                                size="large"
                                onClick={() => navigate('/contact')}
                                sx={{
                                    color: '#f97316',
                                    borderColor: '#f97316',
                                    borderRadius: 4,
                                    fontWeight: 600,
                                    fontSize: '1.4rem',
                                    px: 8,
                                    py: 4,
                                    textTransform: 'none',
                                    backgroundColor: 'rgba(249, 115, 22, 0.05)',
                                    backdropFilter: 'blur(10px)',
                                    minHeight: '70px',
                                    borderWidth: '2px',
                                    '&:hover': {
                                        backgroundColor: 'rgba(249, 115, 22, 0.1)',
                                        transform: 'translateY(-3px)',
                                        borderWidth: '2px'
                                    }
                                }}
                            >
                                📞 Nous contacter
                            </Button>
                        </Box>
                    </Box>

                    {/* Cartes d'avantages */}
                    <Box sx={{
                        display: 'grid',
                        gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
                        gap: 3,
                        maxWidth: '800px',
                        mx: 'auto'
                    }}>
                        {[
                            {
                                icon: '📈',
                                title: 'Visibilité',
                                desc: 'Augmentez votre visibilité auprès de milliers de clients potentiels au Sénégal'
                            },
                            {
                                icon: '🎯',
                                title: 'Ciblage',
                                desc: 'Atteignez votre clientèle locale grâce à notre système de géolocalisation'
                            },
                            {
                                icon: '🤝',
                                title: 'Réseau',
                                desc: 'Développez votre réseau professionnel avec d\'autres entreprises du BTP'
                            }
                        ].map((advantage, index) => (
                            <Card
                                key={index}
                                sx={{
                                    background: 'rgba(249, 115, 22, 0.05)',
                                    border: '2px solid rgba(249, 115, 22, 0.2)',
                                    borderRadius: 3,
                                    p: 3,
                                    textAlign: 'center',
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        background: 'rgba(249, 115, 22, 0.1)',
                                        transform: 'translateY(-4px)',
                                        boxShadow: '0 12px 24px rgba(249, 115, 22, 0.15)',
                                        border: '2px solid rgba(249, 115, 22, 0.4)'
                                    }
                                }}
                            >
                                <Typography variant="h4" sx={{ mb: 2 }}>
                                    {advantage.icon}
                                </Typography>
                                <Typography variant="h6" sx={{ fontWeight: 600, color: '#f97316', mb: 2 }}>
                                    {advantage.title}
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'rgba(31, 41, 55, 0.8)', lineHeight: 1.6 }}>
                                    {advantage.desc}
                                </Typography>
                            </Card>
                        ))}
                    </Box>
                </Container>
            </Box>

            {/* Keyframes pour l'animation glow */}
            <style>{`
        @keyframes glow {
          from {
            text-shadow: 2px 2px 4px rgba(0,0,0,0.3), 0 0 10px rgba(251, 191, 36, 0.5);
            filter: drop-shadow(0 2px 4px rgba(0,0,0,0.1)) drop-shadow(0 0 10px rgba(251, 191, 36, 0.3));
          }
          to {
            text-shadow: 2px 2px 4px rgba(0,0,0,0.3), 0 0 20px rgba(251, 191, 36, 0.8), 0 0 30px rgba(249, 115, 22, 0.6);
            filter: drop-shadow(0 2px 4px rgba(0,0,0,0.1)) drop-shadow(0 0 15px rgba(251, 191, 36, 0.5)) drop-shadow(0 0 25px rgba(249, 115, 22, 0.4));
          }
        }
      `}</style>
        </PageTransition>
    )
}

export default HomePage