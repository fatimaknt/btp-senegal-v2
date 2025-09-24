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
    Star as StarIcon,
    Favorite as FavoriteIcon,
    Phone as PhoneIcon,
    Map as MapIcon,
    AccessTime as AccessTimeIcon,
    Call as CallIcon,
    MapOutlined as MapOutlinedIcon,
    Place as PlaceIcon
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
                            LE DIGITAL AU SERVICE DU BTP
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
                            Innovation numérique - Expertise Technique - Excellence/Qualité - Développement & Collaboration! 🇸🇳
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

            {/* Section Entreprises Partenaires */}
            <Box sx={{
                backgroundColor: '#f8fafc',
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
                                WebkitTextFillColor: 'transparent'
                            }}
                        >
                            Entreprises Partenaires
                        </Typography>
                        <Typography
                            variant="h5"
                            sx={{
                                mb: 6,
                                color: 'rgba(31, 41, 55, 0.8)',
                                maxWidth: '600px',
                                mx: 'auto'
                            }}
                        >
                            Découvrez nos entreprises partenaires de confiance
                        </Typography>
                    </Box>

                    {/* Grille des entreprises partenaires - Design exact comme l'image */}
                    <Box sx={{
                        display: 'grid',
                        gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' },
                        gap: 6,
                        mb: 8,
                        maxWidth: '3000px',
                        mx: 'auto'
                    }}>
                        {/* EMAS CONSTRUCTION */}
                        <Card sx={{
                            borderRadius: 2,
                            overflow: 'hidden',
                            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                                transform: 'translateY(-4px)',
                                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.15)'
                            }
                        }}>
                            {/* Image Section */}
                            <Box
                                onClick={() => navigate('/entreprise/emas-construction')}
                                sx={{
                                    height: 220,
                                    backgroundImage: 'url(/images/partners/btp.jpg)',
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    position: 'relative',
                                    display: 'flex',
                                    alignItems: 'flex-start',
                                    justifyContent: 'flex-start',
                                    p: 2,
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        transform: 'scale(1.02)',
                                        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)'
                                    }
                                }}
                            >
                            </Box>

                            {/* Content Section */}
                            <CardContent sx={{ p: 4, backgroundColor: 'white' }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                    <Box sx={{
                                        background: '#f97316',
                                        color: 'white',
                                        px: 2,
                                        py: 0.5,
                                        borderRadius: 1,
                                        fontSize: '0.7rem',
                                        fontWeight: 600,
                                        textTransform: 'uppercase'
                                    }}>
                                        BTP
                                    </Box>
                                </Box>

                                <Box sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    mb: 2
                                }}>
                                    <Typography variant="h5" sx={{
                                        fontWeight: 600,
                                        color: '#1f2937',
                                        fontSize: '0.8rem'
                                    }}>
                                        EMAS CONSTRUCTION
                                    </Typography>
                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                        <AccessTimeIcon sx={{ fontSize: 12, color: '#10b981', mr: 0.5 }} />
                                        <Typography variant="body2" sx={{
                                            color: '#10b981',
                                            fontSize: '0.6rem',
                                            fontWeight: 600
                                        }}>
                                            Ouvert maintenant
                                        </Typography>
                                    </Box>
                                </Box>

                                <Box sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    mb: 2,
                                    gap: 2
                                }}>

                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                        <PhoneIcon sx={{ fontSize: 16, color: '#6b7280', mr: 1 }} />
                                        <Typography variant="body2" sx={{ color: '#6b7280', fontSize: '0.8rem', fontWeight: 600 }}>
                                            (+221) 77 691 20 76
                                        </Typography>
                                    </Box>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            cursor: 'pointer',
                                            transition: 'all 0.3s ease',
                                            '&:hover': {
                                                transform: 'scale(1.05)',
                                                '& .location-icon': {
                                                    color: '#f97316'
                                                },
                                                '& .location-text': {
                                                    color: '#f97316'
                                                }
                                            },
                                            '&:active': {
                                                transform: 'scale(0.95)',
                                                '& .location-icon': {
                                                    color: '#ea580c'
                                                },
                                                '& .location-text': {
                                                    color: '#ea580c'
                                                }
                                            }
                                        }}
                                        onClick={() => navigate('/resultats?ville=dakar')}
                                    >
                                        <LocationIcon className="location-icon" sx={{ fontSize: 16, color: '#6b7280', mr: 1, transition: 'color 0.3s ease' }} />
                                        <Typography className="location-text" variant="body2" sx={{ color: '#6b7280', fontSize: '0.8rem', fontWeight: 600, transition: 'color 0.3s ease' }}>
                                            Dakar
                                        </Typography>
                                    </Box>
                                </Box>

                                <Button
                                    variant="outlined"
                                    size="small"
                                    startIcon={<PlaceIcon />}
                                    sx={{
                                        borderColor: '#f97316',
                                        color: '#f97316',
                                        borderRadius: 2,
                                        px: 3,
                                        py: 1.5,
                                        fontWeight: 700,
                                        fontSize: '0.8rem',
                                        textTransform: 'none',
                                        minWidth: '160px',
                                        boxShadow: '0 2px 8px rgba(249, 115, 22, 0.1)',
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            backgroundColor: '#f97316',
                                            color: 'white',
                                            borderColor: '#f97316',
                                            transform: 'translateY(-2px)',
                                            boxShadow: '0 4px 12px rgba(249, 115, 22, 0.3)'
                                        }
                                    }}
                                >
                                    Afficher La Carte
                                </Button>
                            </CardContent>
                        </Card>

                        {/* SOCOCIM Industries */}
                        <Card sx={{
                            borderRadius: 2,
                            overflow: 'hidden',
                            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                                transform: 'translateY(-4px)',
                                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.15)'
                            }
                        }}>
                            {/* Image Section */}
                            <Box
                                onClick={() => navigate('/entreprise/sococim-industries')}
                                sx={{
                                    height: 220,
                                    backgroundImage: 'url(/images/partners/sococim.jpg)',
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    position: 'relative',
                                    display: 'flex',
                                    alignItems: 'flex-start',
                                    justifyContent: 'flex-start',
                                    p: 2,
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        transform: 'scale(1.02)',
                                        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)'
                                    }
                                }}
                            >
                            </Box>

                            {/* Content Section */}
                            <CardContent sx={{ p: 4, backgroundColor: 'white' }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                    <Box sx={{
                                        background: '#3b82f6',
                                        color: 'white',
                                        px: 2,
                                        py: 0.5,
                                        borderRadius: 1,
                                        fontSize: '0.6rem',
                                        fontWeight: 600,
                                        textTransform: 'uppercase'
                                    }}>
                                        MATÉRIAUX & MATÉRIELS
                                    </Box>
                                </Box>
                                <Box sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    mb: 2
                                }}>
                                    <Typography variant="h6" sx={{
                                        fontWeight: 500,
                                        color: '#1f2937',
                                        fontSize: '1rem'
                                    }}>
                                        Sococim Industries
                                    </Typography>
                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                        <AccessTimeIcon sx={{ fontSize: 12, color: '#10b981', mr: 0.5 }} />
                                        <Typography variant="body2" sx={{
                                            color: '#10b981',
                                            fontSize: '0.7rem',
                                            fontWeight: 600
                                        }}>
                                            Ouvert maintenant
                                        </Typography>
                                    </Box>
                                </Box>



                                <Box sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    mb: 2,
                                    gap: 2
                                }}>

                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                        <PhoneIcon sx={{ fontSize: 16, color: '#6b7280', mr: 1 }} />
                                        <Typography variant="body2" sx={{ color: '#6b7280', fontSize: '0.8rem', fontWeight: 600 }}>
                                            +221 33 839 88 60
                                        </Typography>
                                    </Box>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            cursor: 'pointer',
                                            transition: 'all 0.3s ease',
                                            '&:hover': {
                                                transform: 'scale(1.05)',
                                                '& .location-icon': {
                                                    color: '#f97316'
                                                },
                                                '& .location-text': {
                                                    color: '#f97316'
                                                }
                                            },
                                            '&:active': {
                                                transform: 'scale(0.95)',
                                                '& .location-icon': {
                                                    color: '#ea580c'
                                                },
                                                '& .location-text': {
                                                    color: '#ea580c'
                                                }
                                            }
                                        }}
                                        onClick={() => navigate('/resultats?ville=thies')}
                                    >
                                        <LocationIcon className="location-icon" sx={{ fontSize: 16, color: '#6b7280', mr: 1, transition: 'color 0.3s ease' }} />
                                        <Typography className="location-text" variant="body2" sx={{ color: '#6b7280', fontSize: '0.8rem', fontWeight: 600, transition: 'color 0.3s ease' }}>
                                            Thiés
                                        </Typography>
                                    </Box>
                                </Box>

                                <Button
                                    variant="outlined"
                                    size="small"
                                    startIcon={<PlaceIcon />}
                                    sx={{
                                        borderColor: '#f97316',
                                        color: '#f97316',
                                        borderRadius: 2,
                                        px: 3,
                                        py: 1.5,
                                        fontWeight: 700,
                                        fontSize: '0.8rem',
                                        textTransform: 'none',
                                        minWidth: '160px',
                                        boxShadow: '0 2px 8px rgba(249, 115, 22, 0.1)',
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            backgroundColor: '#f97316',
                                            color: 'white',
                                            borderColor: '#f97316',
                                            transform: 'translateY(-2px)',
                                            boxShadow: '0 4px 12px rgba(249, 115, 22, 0.3)'
                                        }
                                    }}
                                >
                                    Afficher La Carte
                                </Button>
                            </CardContent>
                        </Card>

                        {/* MATOUTILS */}
                        <Card sx={{
                            borderRadius: 2,
                            overflow: 'hidden',
                            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                                transform: 'translateY(-4px)',
                                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.15)'
                            }
                        }}>
                            {/* Image Section */}
                            <Box
                                onClick={() => navigate('/entreprise/matoutils')}
                                sx={{
                                    height: 220,
                                    backgroundImage: 'url(/images/partners/matoutils.jpg)',
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    position: 'relative',
                                    display: 'flex',
                                    alignItems: 'flex-start',
                                    justifyContent: 'flex-start',
                                    p: 2,
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        transform: 'scale(1.02)',
                                        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)'
                                    }
                                }}
                            >
                                {/* <Box sx={{
                                    background: 'rgba(255, 255, 255, 0.9)',
                                    borderRadius: '50%',
                                    width: 32,
                                    height: 32,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)'
                                }}>
                                    <FavoriteIcon sx={{ color: '#f97316', fontSize: 18 }} />
                                </Box> */}
                            </Box>

                            {/* Content Section */}
                            <CardContent sx={{ p: 4, backgroundColor: 'white' }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                    <Box sx={{
                                        background: '#8b5cf6',
                                        color: 'white',
                                        px: 2,
                                        py: 0.5,
                                        borderRadius: 1,
                                        fontSize: '0.7rem',
                                        fontWeight: 600,
                                        textTransform: 'uppercase'
                                    }}>
                                        PLOMBERIE
                                    </Box>
                                </Box>
                                <Box sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    mb: 2
                                }}>
                                    <Typography variant="h6" sx={{
                                        fontWeight: 600,
                                        color: '#1f2937',
                                        fontSize: '1rem'
                                    }}>
                                        Mat-outils
                                    </Typography>
                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                        <AccessTimeIcon sx={{ fontSize: 12, color: '#10b981', mr: 0.5 }} />
                                        <Typography variant="body2" sx={{
                                            color: '#10b981',
                                            fontSize: '0.7rem',
                                            fontWeight: 600
                                        }}>
                                            Ouvert maintenant
                                        </Typography>
                                    </Box>
                                </Box>



                                <Box sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    mb: 2,
                                    gap: 2
                                }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                        <PhoneIcon sx={{ fontSize: 16, color: '#6b7280', mr: 1 }} />
                                        <Typography variant="body2" sx={{ color: '#6b7280', fontSize: '0.8rem', fontWeight: 600 }}>
                                            +221 77 747 51 51
                                        </Typography>
                                    </Box>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            cursor: 'pointer',
                                            transition: 'all 0.3s ease',
                                            '&:hover': {
                                                transform: 'scale(1.05)',
                                                '& .location-icon': {
                                                    color: '#f97316'
                                                },
                                                '& .location-text': {
                                                    color: '#f97316'
                                                }
                                            },
                                            '&:active': {
                                                transform: 'scale(0.95)',
                                                '& .location-icon': {
                                                    color: '#ea580c'
                                                },
                                                '& .location-text': {
                                                    color: '#ea580c'
                                                }
                                            }
                                        }}
                                        onClick={() => navigate('/resultats?ville=dakar')}
                                    >
                                        <LocationIcon className="location-icon" sx={{ fontSize: 16, color: '#6b7280', mr: 1, transition: 'color 0.3s ease' }} />
                                        <Typography className="location-text" variant="body2" sx={{ color: '#6b7280', fontSize: '0.8rem', fontWeight: 600, transition: 'color 0.3s ease' }}>
                                            Dakar
                                        </Typography>
                                    </Box>

                                </Box>

                                <Button
                                    variant="outlined"
                                    size="small"
                                    startIcon={<PlaceIcon />}
                                    sx={{
                                        borderColor: '#f97316',
                                        color: '#f97316',
                                        borderRadius: 2,
                                        px: 3,
                                        py: 1.5,
                                        fontWeight: 700,
                                        fontSize: '0.8rem',
                                        textTransform: 'none',
                                        minWidth: '160px',
                                        boxShadow: '0 2px 8px rgba(249, 115, 22, 0.1)',
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            backgroundColor: '#f97316',
                                            color: 'white',
                                            borderColor: '#f97316',
                                            transform: 'translateY(-2px)',
                                            boxShadow: '0 4px 12px rgba(249, 115, 22, 0.3)'
                                        }
                                    }}
                                >
                                    Afficher La Carte
                                </Button>
                            </CardContent>
                        </Card>

                        {/* BTP SENEGAL (Collage) */}
                        <Card sx={{
                            borderRadius: 2,
                            overflow: 'hidden',
                            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                                transform: 'translateY(-4px)',
                                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.15)'
                            }
                        }}>
                            {/* Image Section */}
                            <Box
                                onClick={() => navigate('/entreprise/btp-senegal-collage')}
                                sx={{
                                    height: 220,
                                    backgroundImage: 'url(/images/partners/btpsenegal.webp)',
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    position: 'relative',
                                    display: 'flex',
                                    alignItems: 'flex-start',
                                    justifyContent: 'flex-start',
                                    p: 2,
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        transform: 'scale(1.02)',
                                        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)'
                                    }
                                }}
                            >
                            </Box>

                            {/* Content Section */}
                            <CardContent sx={{ p: 4, backgroundColor: 'white' }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                    <Box sx={{
                                        background: '#f97316',
                                        color: 'white',
                                        px: 2,
                                        py: 0.5,
                                        borderRadius: 1,
                                        fontSize: '0.7rem',
                                        fontWeight: 600,
                                        textTransform: 'uppercase'
                                    }}>
                                        BTP
                                    </Box>
                                </Box>
                                <Box sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    mb: 2
                                }}>
                                    <Typography variant="h5" sx={{
                                        fontWeight: 600,
                                        color: '#1f2937',
                                        fontSize: '0.8rem'
                                    }}>
                                        BTP SENEGAL (Collage)
                                    </Typography>
                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                        <AccessTimeIcon sx={{ fontSize: 12, color: '#10b981', mr: 0.5 }} />
                                        <Typography variant="body2" sx={{
                                            color: '#10b981',
                                            fontSize: '0.6rem',
                                            fontWeight: 600
                                        }}>
                                            Ouvert maintenant
                                        </Typography>
                                    </Box>
                                </Box>

                                <Box sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    mb: 2,
                                    gap: 2
                                }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                        <PhoneIcon sx={{ fontSize: 16, color: '#6b7280', mr: 1 }} />
                                        <Typography variant="body2" sx={{ color: '#6b7280', fontSize: '0.8rem', fontWeight: 600 }}>
                                            (+221) 77 123 45 67
                                        </Typography>
                                    </Box>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            cursor: 'pointer',
                                            transition: 'all 0.3s ease',
                                            '&:hover': {
                                                transform: 'scale(1.05)',
                                                '& .location-icon': {
                                                    color: '#f97316'
                                                },
                                                '& .location-text': {
                                                    color: '#f97316'
                                                }
                                            },
                                            '&:active': {
                                                transform: 'scale(0.95)',
                                                '& .location-icon': {
                                                    color: '#ea580c'
                                                },
                                                '& .location-text': {
                                                    color: '#ea580c'
                                                }
                                            }
                                        }}
                                        onClick={() => navigate('/resultats?ville=dakar')}
                                    >
                                        <LocationIcon className="location-icon" sx={{ fontSize: 16, color: '#6b7280', mr: 1, transition: 'color 0.3s ease' }} />
                                        <Typography className="location-text" variant="body2" sx={{ color: '#6b7280', fontSize: '0.8rem', fontWeight: 600, transition: 'color 0.3s ease' }}>
                                            Dakar
                                        </Typography>
                                    </Box>
                                </Box>

                                <Button
                                    variant="outlined"
                                    size="small"
                                    startIcon={<PlaceIcon />}
                                    sx={{
                                        borderColor: '#f97316',
                                        color: '#f97316',
                                        borderRadius: 2,
                                        px: 3,
                                        py: 1.5,
                                        fontWeight: 700,
                                        fontSize: '0.8rem',
                                        textTransform: 'none',
                                        minWidth: '160px',
                                        boxShadow: '0 2px 8px rgba(249, 115, 22, 0.1)',
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            backgroundColor: '#f97316',
                                            color: 'white',
                                            borderColor: '#f97316',
                                            transform: 'translateY(-2px)',
                                            boxShadow: '0 4px 12px rgba(249, 115, 22, 0.3)'
                                        }
                                    }}
                                >
                                    Afficher La Carte
                                </Button>
                            </CardContent>
                        </Card>

                        {/* BTP SENEGAL (Excavator) */}
                        <Card sx={{
                            borderRadius: 2,
                            overflow: 'hidden',
                            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                                transform: 'translateY(-4px)',
                                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.15)'
                            }
                        }}>
                            {/* Image Section */}
                            <Box
                                onClick={() => navigate('/entreprise/btp-senegal-excavator')}
                                sx={{
                                    height: 220,
                                    backgroundImage: 'url(/images/partners/btp2.gif)',
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    position: 'relative',
                                    display: 'flex',
                                    alignItems: 'flex-start',
                                    justifyContent: 'flex-start',
                                    p: 2,
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        transform: 'scale(1.02)',
                                        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)'
                                    }
                                }}
                            >
                            </Box>

                            {/* Content Section */}
                            <CardContent sx={{ p: 4, backgroundColor: 'white' }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                    <Box sx={{
                                        background: '#f97316',
                                        color: 'white',
                                        px: 2,
                                        py: 0.5,
                                        borderRadius: 1,
                                        fontSize: '0.7rem',
                                        fontWeight: 600,
                                        textTransform: 'uppercase'
                                    }}>
                                        BTP
                                    </Box>
                                </Box>
                                <Box sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    mb: 2
                                }}>
                                    <Typography variant="h5" sx={{
                                        fontWeight: 600,
                                        color: '#1f2937',
                                        fontSize: '0.8rem'
                                    }}>
                                        BTP SENEGAL (Excavator)
                                    </Typography>
                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                        <AccessTimeIcon sx={{ fontSize: 12, color: '#10b981', mr: 0.5 }} />
                                        <Typography variant="body2" sx={{
                                            color: '#10b981',
                                            fontSize: '0.6rem',
                                            fontWeight: 600
                                        }}>
                                            Ouvert maintenant
                                        </Typography>
                                    </Box>
                                </Box>

                                <Box sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    mb: 2,
                                    gap: 2
                                }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                        <PhoneIcon sx={{ fontSize: 16, color: '#6b7280', mr: 1 }} />
                                        <Typography variant="body2" sx={{ color: '#6b7280', fontSize: '0.8rem', fontWeight: 600 }}>
                                            (+221) 77 234 56 78
                                        </Typography>
                                    </Box>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            cursor: 'pointer',
                                            transition: 'all 0.3s ease',
                                            '&:hover': {
                                                transform: 'scale(1.05)',
                                                '& .location-icon': {
                                                    color: '#f97316'
                                                },
                                                '& .location-text': {
                                                    color: '#f97316'
                                                }
                                            },
                                            '&:active': {
                                                transform: 'scale(0.95)',
                                                '& .location-icon': {
                                                    color: '#ea580c'
                                                },
                                                '& .location-text': {
                                                    color: '#ea580c'
                                                }
                                            }
                                        }}
                                        onClick={() => navigate('/resultats?ville=dakar')}
                                    >
                                        <LocationIcon className="location-icon" sx={{ fontSize: 16, color: '#6b7280', mr: 1, transition: 'color 0.3s ease' }} />
                                        <Typography className="location-text" variant="body2" sx={{ color: '#6b7280', fontSize: '0.8rem', fontWeight: 600, transition: 'color 0.3s ease' }}>
                                            Dakar
                                        </Typography>
                                    </Box>
                                </Box>

                                <Button
                                    variant="outlined"
                                    size="small"
                                    startIcon={<PlaceIcon />}
                                    sx={{
                                        borderColor: '#f97316',
                                        color: '#f97316',
                                        borderRadius: 2,
                                        px: 3,
                                        py: 1.5,
                                        fontWeight: 700,
                                        fontSize: '0.8rem',
                                        textTransform: 'none',
                                        minWidth: '160px',
                                        boxShadow: '0 2px 8px rgba(249, 115, 22, 0.1)',
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            backgroundColor: '#f97316',
                                            color: 'white',
                                            borderColor: '#f97316',
                                            transform: 'translateY(-2px)',
                                            boxShadow: '0 4px 12px rgba(249, 115, 22, 0.3)'
                                        }
                                    }}
                                >
                                    Afficher La Carte
                                </Button>
                            </CardContent>
                        </Card>

                        {/* SOGER BAT - Architecture */}
                        <Card sx={{
                            borderRadius: 2,
                            overflow: 'hidden',
                            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                                transform: 'translateY(-4px)',
                                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.15)'
                            }
                        }}>
                            {/* Image Section */}
                            <Box
                                onClick={() => navigate('/entreprise/soger-bat-architecture')}
                                sx={{
                                    height: 220,
                                    backgroundImage: 'url(/images/partners/archi.webp)',
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    position: 'relative',
                                    display: 'flex',
                                    alignItems: 'flex-start',
                                    justifyContent: 'flex-start',
                                    p: 2,
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        transform: 'scale(1.02)',
                                        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)'
                                    }
                                }}
                            >
                            </Box>

                            {/* Content Section */}
                            <CardContent sx={{ p: 4, backgroundColor: 'white' }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                    <Box sx={{
                                        background: '#8b5cf6',
                                        color: 'white',
                                        px: 2,
                                        py: 0.5,
                                        borderRadius: 1,
                                        fontSize: '0.7rem',
                                        fontWeight: 600,
                                        textTransform: 'uppercase'
                                    }}>
                                        ARCHITECTURE
                                    </Box>
                                </Box>
                                <Box sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    mb: 2
                                }}>
                                    <Typography variant="h5" sx={{
                                        fontWeight: 600,
                                        color: '#1f2937',
                                        fontSize: '0.8rem'
                                    }}>
                                        SOGER BAT - Architecture
                                    </Typography>
                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                        <AccessTimeIcon sx={{ fontSize: 12, color: '#10b981', mr: 0.5 }} />
                                        <Typography variant="body2" sx={{
                                            color: '#10b981',
                                            fontSize: '0.6rem',
                                            fontWeight: 600
                                        }}>
                                            Ouvert maintenant
                                        </Typography>
                                    </Box>
                                </Box>

                                <Box sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    mb: 2,
                                    gap: 2
                                }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                        <PhoneIcon sx={{ fontSize: 16, color: '#6b7280', mr: 1 }} />
                                        <Typography variant="body2" sx={{ color: '#6b7280', fontSize: '0.8rem', fontWeight: 600 }}>
                                            (+221) 77 345 67 89
                                        </Typography>
                                    </Box>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            cursor: 'pointer',
                                            transition: 'all 0.3s ease',
                                            '&:hover': {
                                                transform: 'scale(1.05)',
                                                '& .location-icon': {
                                                    color: '#f97316'
                                                },
                                                '& .location-text': {
                                                    color: '#f97316'
                                                }
                                            },
                                            '&:active': {
                                                transform: 'scale(0.95)',
                                                '& .location-icon': {
                                                    color: '#ea580c'
                                                },
                                                '& .location-text': {
                                                    color: '#ea580c'
                                                }
                                            }
                                        }}
                                        onClick={() => navigate('/resultats?ville=dakar')}
                                    >
                                        <LocationIcon className="location-icon" sx={{ fontSize: 16, color: '#6b7280', mr: 1, transition: 'color 0.3s ease' }} />
                                        <Typography className="location-text" variant="body2" sx={{ color: '#6b7280', fontSize: '0.8rem', fontWeight: 600, transition: 'color 0.3s ease' }}>
                                            Dakar
                                        </Typography>
                                    </Box>
                                </Box>

                                <Button
                                    variant="outlined"
                                    size="small"
                                    startIcon={<PlaceIcon />}
                                    sx={{
                                        borderColor: '#f97316',
                                        color: '#f97316',
                                        borderRadius: 2,
                                        px: 3,
                                        py: 1.5,
                                        fontWeight: 700,
                                        fontSize: '0.8rem',
                                        textTransform: 'none',
                                        minWidth: '160px',
                                        boxShadow: '0 2px 8px rgba(249, 115, 22, 0.1)',
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            backgroundColor: '#f97316',
                                            color: 'white',
                                            borderColor: '#f97316',
                                            transform: 'translateY(-2px)',
                                            boxShadow: '0 4px 12px rgba(249, 115, 22, 0.3)'
                                        }
                                    }}
                                >
                                    Afficher La Carte
                                </Button>
                            </CardContent>
                        </Card>
                    </Box>
                </Container>
            </Box>

            {/* Section BTPSENEGAL.COM Features */}
            <Box sx={{ py: 8, backgroundColor: '#f8fafc' }}>
                <Container maxWidth="lg">
                    {/* Image BTPSENEGAL.COM */}
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        mb: 6
                    }}>
                        <img
                            src="/images/partners/btpscom.webp"
                            alt="BTPSENEGAL.COM Features"
                            style={{
                                maxWidth: '100%',
                                height: 'auto',
                                borderRadius: '8px',
                                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                                marginBottom: '24px'
                            }}
                        />

                        {/* Texte en bas */}
                        <Box sx={{
                            backgroundColor: 'white',
                            borderRadius: 2,
                            p: 4,
                            textAlign: 'center',
                            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                            maxWidth: '600px'
                        }}>
                            <Typography variant="h4" sx={{
                                color: '#1e40af',
                                fontWeight: 700,
                                mb: 2
                            }}>
                                Agenda BTP Sénégal
                            </Typography>
                            <Typography variant="h6" sx={{
                                color: '#6b7280',
                                fontWeight: 400
                            }}>
                                Restez à jour avec les événements majeurs du BTP au Sénégal
                            </Typography>
                        </Box>
                    </Box>
                </Container>
            </Box>

            {/* Section Actualités BTP */}
            <Box sx={{ py: 8, backgroundColor: 'white' }}>
                <Container maxWidth="lg">
                    {/* Titre de la section */}
                    <Box sx={{ textAlign: 'center', mb: 6 }}>
                        <Typography variant="h3" sx={{
                            color: '#1e40af',
                            fontWeight: 700,
                            mb: 2
                        }}>
                            Actualités BTP
                        </Typography>
                        <Typography variant="h6" sx={{
                            color: '#6b7280',
                            fontWeight: 400
                        }}>
                            Consultez les dernières nouvelles et articles de notre blog
                        </Typography>
                    </Box>

                    {/* Grille des articles */}
                    <Box sx={{
                        display: 'grid',
                        gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
                        gap: 4
                    }}>
                        {/* Article 1 - Infrastructure */}
                        <Card sx={{
                            borderRadius: 2,
                            overflow: 'hidden',
                            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                                transform: 'translateY(-4px)',
                                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.15)'
                            }
                        }}>
                            <Box sx={{
                                position: 'relative',
                                height: 200,
                                backgroundImage: 'url(/images/actualite/infrastructure.jpg)',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                overflow: 'hidden',
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    '& .image-overlay': {
                                        opacity: 1
                                    },
                                    '& .image-zoom': {
                                        transform: 'scale(1.1)'
                                    }
                                }
                            }}>
                                {/* Image de fond avec zoom */}
                                <Box
                                    className="image-zoom"
                                    sx={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        bottom: 0,
                                        backgroundImage: 'url(/images/actualite/infrastructure.jpg)',
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        transition: 'transform 0.3s ease'
                                    }}
                                />

                                {/* Overlay avec texte au survol */}
                                <Box
                                    className="image-overlay"
                                    sx={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        bottom: 0,
                                        background: 'rgba(0, 0, 0, 0.8)',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        p: 3,
                                        opacity: 0,
                                        transition: 'opacity 0.3s ease',
                                        color: 'white'
                                    }}
                                >
                                    <Typography variant="h6" sx={{
                                        color: 'white',
                                        fontWeight: 600,
                                        textAlign: 'center',
                                        mb: 2,
                                        fontSize: '1.1rem'
                                    }}>
                                        SÉNÉGAL : LA RÉVOLUTION INFRASTRU...
                                    </Typography>
                                    <Typography variant="body2" sx={{
                                        color: 'rgba(255, 255, 255, 0.8)',
                                        textAlign: 'center',
                                        mb: 3,
                                        fontSize: '0.9rem'
                                    }}>
                                        Découvrez les dernières innovations dans le secteur du BTP au Sénégal
                                    </Typography>
                                    <Typography variant="body2" sx={{
                                        color: '#f97316',
                                        fontWeight: 600,
                                        fontSize: '0.8rem'
                                    }}>
                                        Le digital au service du BTP
                                    </Typography>
                                </Box>
                                {/* Logo BTP SENEGAL */}
                                <Box sx={{
                                    position: 'absolute',
                                    bottom: 16,
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    width: 60,
                                    height: 60,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <img
                                        src="/images/logos/logo.jpeg"
                                        alt="BTP Senegal Logo"
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'contain',
                                            borderRadius: '50%'
                                        }}
                                    />
                                </Box>
                            </Box>

                            <CardContent sx={{ p: 3 }}>
                                <Typography variant="body2" sx={{ color: '#6b7280', mb: 1 }}>
                                    Btpsenegal.Com
                                </Typography>
                                <Typography variant="h6" sx={{
                                    fontWeight: 600,
                                    color: '#1f2937',
                                    mb: 2,
                                    lineHeight: 1.3
                                }}>
                                    SÉNÉGAL : LA RÉVOLUTION INFRASTRU...
                                </Typography>

                                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <Typography variant="body2" sx={{ color: '#6b7280', fontWeight: 600 }}>
                                        Actus BTP
                                    </Typography>
                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                        <Typography variant="body2" sx={{ color: '#6b7280', mr: 1 }}>
                                            📅
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: '#6b7280' }}>
                                            17 Janvier 2025
                                        </Typography>
                                    </Box>
                                </Box>
                            </CardContent>
                        </Card>

                        {/* Article 2 - Projet */}
                        <Card sx={{
                            borderRadius: 2,
                            overflow: 'hidden',
                            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                                transform: 'translateY(-4px)',
                                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.15)'
                            }
                        }}>
                            <Box sx={{
                                position: 'relative',
                                height: 200,
                                backgroundImage: 'url(/images/actualite/projet.webp)',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                overflow: 'hidden',
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    '& .image-overlay': {
                                        opacity: 1
                                    },
                                    '& .image-zoom': {
                                        transform: 'scale(1.1)'
                                    }
                                }
                            }}>
                                {/* Image de fond avec zoom */}
                                <Box
                                    className="image-zoom"
                                    sx={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        bottom: 0,
                                        backgroundImage: 'url(/images/actualite/projet.webp)',
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        transition: 'transform 0.3s ease'
                                    }}
                                />

                                {/* Overlay avec texte au survol */}
                                <Box
                                    className="image-overlay"
                                    sx={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        bottom: 0,
                                        background: 'rgba(0, 0, 0, 0.8)',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        p: 3,
                                        opacity: 0,
                                        transition: 'opacity 0.3s ease',
                                        color: 'white'
                                    }}
                                >
                                    <Typography variant="h6" sx={{
                                        color: 'white',
                                        fontWeight: 600,
                                        textAlign: 'center',
                                        mb: 2,
                                        fontSize: '1.1rem'
                                    }}>
                                        Sénégal : La SICAP SA et IMMOSEN SAR...
                                    </Typography>
                                    <Typography variant="body2" sx={{
                                        color: 'rgba(255, 255, 255, 0.8)',
                                        textAlign: 'center',
                                        mb: 3,
                                        fontSize: '0.9rem'
                                    }}>
                                        Partenariats stratégiques dans le secteur immobilier
                                    </Typography>
                                    <Typography variant="body2" sx={{
                                        color: '#f97316',
                                        fontWeight: 600,
                                        fontSize: '0.8rem'
                                    }}>
                                        Le digital au service du BTP
                                    </Typography>
                                </Box>
                                {/* Logo BTP SENEGAL */}
                                <Box sx={{
                                    position: 'absolute',
                                    bottom: 16,
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    width: 60,
                                    height: 60,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <img
                                        src="/images/logos/logo.jpeg"
                                        alt="BTP Senegal Logo"
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'contain',
                                            borderRadius: '50%'
                                        }}
                                    />
                                </Box>
                            </Box>

                            <CardContent sx={{ p: 3 }}>
                                <Typography variant="body2" sx={{ color: '#6b7280', mb: 1 }}>
                                    Btpsenegal.Com
                                </Typography>
                                <Typography variant="h6" sx={{
                                    fontWeight: 600,
                                    color: '#1f2937',
                                    mb: 2,
                                    lineHeight: 1.3
                                }}>
                                    Sénégal : La SICAP SA et IMMOSEN SAR...
                                </Typography>

                                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <Typography variant="body2" sx={{ color: '#6b7280', fontWeight: 600 }}>
                                        Actus BTP
                                    </Typography>
                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                        <Typography variant="body2" sx={{ color: '#6b7280', mr: 1 }}>
                                            📅
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: '#6b7280' }}>
                                            17 Janvier 2025
                                        </Typography>
                                    </Box>
                                </Box>
                            </CardContent>
                        </Card>

                        {/* Article 3 - Ascenseur */}
                        <Card sx={{
                            borderRadius: 2,
                            overflow: 'hidden',
                            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                                transform: 'translateY(-4px)',
                                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.15)'
                            }
                        }}>
                            <Box sx={{
                                position: 'relative',
                                height: 200,
                                backgroundImage: 'url(/images/actualite/ascenseur.jpg)',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                overflow: 'hidden',
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    '& .image-overlay': {
                                        opacity: 1
                                    },
                                    '& .image-zoom': {
                                        transform: 'scale(1.1)'
                                    }
                                }
                            }}>
                                {/* Image de fond avec zoom */}
                                <Box
                                    className="image-zoom"
                                    sx={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        bottom: 0,
                                        backgroundImage: 'url(/images/actualite/ascenseur.jpg)',
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        transition: 'transform 0.3s ease'
                                    }}
                                />

                                {/* Overlay avec texte au survol */}
                                <Box
                                    className="image-overlay"
                                    sx={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        bottom: 0,
                                        background: 'rgba(0, 0, 0, 0.8)',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        p: 3,
                                        opacity: 0,
                                        transition: 'opacity 0.3s ease',
                                        color: 'white'
                                    }}
                                >
                                    <Typography variant="h6" sx={{
                                        color: 'white',
                                        fontWeight: 600,
                                        textAlign: 'center',
                                        mb: 2,
                                        fontSize: '1.1rem'
                                    }}>
                                        Construire un Ascenseur Sur-Mesure au...
                                    </Typography>
                                    <Typography variant="body2" sx={{
                                        color: 'rgba(255, 255, 255, 0.8)',
                                        textAlign: 'center',
                                        mb: 3,
                                        fontSize: '0.9rem'
                                    }}>
                                        Solutions d'ascenseurs personnalisées pour tous vos projets
                                    </Typography>
                                    <Typography variant="body2" sx={{
                                        color: '#f97316',
                                        fontWeight: 600,
                                        fontSize: '0.8rem'
                                    }}>
                                        Le digital au service du BTP
                                    </Typography>
                                </Box>
                                {/* Logo BTP SENEGAL */}
                                <Box sx={{
                                    position: 'absolute',
                                    bottom: 16,
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    width: 60,
                                    height: 60,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <img
                                        src="/images/logos/logo.jpeg"
                                        alt="BTP Senegal Logo"
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'contain',
                                            borderRadius: '50%'
                                        }}
                                    />
                                </Box>
                            </Box>

                            <CardContent sx={{ p: 3 }}>
                                <Typography variant="body2" sx={{ color: '#6b7280', mb: 1 }}>
                                    Btpsenegal.Com
                                </Typography>
                                <Typography variant="h6" sx={{
                                    fontWeight: 600,
                                    color: '#1f2937',
                                    mb: 2,
                                    lineHeight: 1.3
                                }}>
                                    Construire un Ascenseur Sur-Mesure au...
                                </Typography>

                                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <Typography variant="body2" sx={{ color: '#6b7280', fontWeight: 600 }}>
                                        Actus BTP
                                    </Typography>
                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                        <Typography variant="body2" sx={{ color: '#6b7280', mr: 1 }}>
                                            📅
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: '#6b7280' }}>
                                            27 Février 2021
                                        </Typography>
                                    </Box>
                                </Box>
                            </CardContent>
                        </Card>

                        {/* Article 4 - BTP Senegal */}
                        <Card sx={{
                            borderRadius: 2,
                            overflow: 'hidden',
                            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                                transform: 'translateY(-4px)',
                                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.15)'
                            }
                        }}>
                            <Box sx={{
                                position: 'relative',
                                height: 200,
                                backgroundImage: 'url(/images/actualite/btpsenegal.webp)',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                overflow: 'hidden',
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    '& .image-overlay': {
                                        opacity: 1
                                    },
                                    '& .image-zoom': {
                                        transform: 'scale(1.1)'
                                    }
                                }
                            }}>
                                {/* Image de fond avec zoom */}
                                <Box
                                    className="image-zoom"
                                    sx={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        bottom: 0,
                                        backgroundImage: 'url(/images/actualite/btpsenegal.webp)',
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        transition: 'transform 0.3s ease'
                                    }}
                                />

                                {/* Overlay avec texte au survol */}
                                <Box
                                    className="image-overlay"
                                    sx={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        bottom: 0,
                                        background: 'rgba(0, 0, 0, 0.8)',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        p: 3,
                                        opacity: 0,
                                        transition: 'opacity 0.3s ease',
                                        color: 'white'
                                    }}
                                >
                                    <Typography variant="h6" sx={{
                                        color: 'white',
                                        fontWeight: 600,
                                        textAlign: 'center',
                                        mb: 2,
                                        fontSize: '1.1rem'
                                    }}>
                                        Votre satisfaction au coeur de notre STRATEGIE
                                    </Typography>
                                    <Typography variant="body2" sx={{
                                        color: 'rgba(255, 255, 255, 0.8)',
                                        textAlign: 'center',
                                        mb: 3,
                                        fontSize: '0.9rem'
                                    }}>
                                        Notre engagement pour votre réussite
                                    </Typography>
                                    <Typography variant="body2" sx={{
                                        color: '#f97316',
                                        fontWeight: 600,
                                        fontSize: '0.8rem'
                                    }}>
                                        Le digital au service du BTP
                                    </Typography>
                                </Box>
                                {/* Logo BTP SENEGAL */}
                                <Box sx={{
                                    position: 'absolute',
                                    bottom: 16,
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    width: 60,
                                    height: 60,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <img
                                        src="/images/logos/logo.jpeg"
                                        alt="BTP Senegal Logo"
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'contain',
                                            borderRadius: '50%'
                                        }}
                                    />
                                </Box>
                            </Box>

                            <CardContent sx={{ p: 3 }}>
                                <Typography variant="body2" sx={{ color: '#6b7280', mb: 1 }}>
                                    Btpsenegal.Com
                                </Typography>
                                <Typography variant="h6" sx={{
                                    fontWeight: 600,
                                    color: '#1f2937',
                                    mb: 2,
                                    lineHeight: 1.3
                                }}>
                                    Votre satisfaction au coeur de notre STRATEGIE
                                </Typography>

                                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <Typography variant="body2" sx={{ color: '#6b7280', fontWeight: 600 }}>
                                        Actus BTP
                                    </Typography>
                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                        <Typography variant="body2" sx={{ color: '#6b7280', mr: 1 }}>
                                            📅
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: '#6b7280' }}>
                                            25 Février 2021
                                        </Typography>
                                    </Box>
                                </Box>
                            </CardContent>
                        </Card>

                        {/* Article 5 - Projets innovants */}
                        <Card sx={{
                            borderRadius: 2,
                            overflow: 'hidden',
                            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                                transform: 'translateY(-4px)',
                                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.15)'
                            }
                        }}>
                            <Box sx={{
                                position: 'relative',
                                height: 200,
                                backgroundImage: 'url(/images/actualite/6581da8ba6aaa-2116-x-600-3-372x240.gif)',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                overflow: 'hidden',
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    '& .image-overlay': {
                                        opacity: 1
                                    },
                                    '& .image-zoom': {
                                        transform: 'scale(1.1)'
                                    }
                                }
                            }}>
                                {/* Image de fond avec zoom */}
                                <Box
                                    className="image-zoom"
                                    sx={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        bottom: 0,
                                        backgroundImage: 'url(/images/actualite/6581da8ba6aaa-2116-x-600-3-372x240.gif)',
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        transition: 'transform 0.3s ease'
                                    }}
                                />

                                {/* Overlay avec texte au survol */}
                                <Box
                                    className="image-overlay"
                                    sx={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        bottom: 0,
                                        background: 'rgba(0, 0, 0, 0.8)',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        p: 3,
                                        opacity: 0,
                                        transition: 'opacity 0.3s ease',
                                        color: 'white'
                                    }}
                                >
                                    <Typography variant="h6" sx={{
                                        color: 'white',
                                        fontWeight: 600,
                                        textAlign: 'center',
                                        mb: 2,
                                        fontSize: '1.1rem'
                                    }}>
                                        Les Projets de BTP les Plus Innovants a...
                                    </Typography>
                                    <Typography variant="body2" sx={{
                                        color: 'rgba(255, 255, 255, 0.8)',
                                        textAlign: 'center',
                                        mb: 3,
                                        fontSize: '0.9rem'
                                    }}>
                                        Découvrez les projets les plus avancés du secteur
                                    </Typography>
                                    <Typography variant="body2" sx={{
                                        color: '#f97316',
                                        fontWeight: 600,
                                        fontSize: '0.8rem'
                                    }}>
                                        Le digital au service du BTP
                                    </Typography>
                                </Box>
                                {/* Logo BTP SENEGAL */}
                                <Box sx={{
                                    position: 'absolute',
                                    bottom: 16,
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    width: 60,
                                    height: 60,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <img
                                        src="/images/logos/logo.jpeg"
                                        alt="BTP Senegal Logo"
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'contain',
                                            borderRadius: '50%'
                                        }}
                                    />
                                </Box>
                            </Box>

                            <CardContent sx={{ p: 3 }}>
                                <Typography variant="body2" sx={{ color: '#6b7280', mb: 1 }}>
                                    Btpsenegal.Com
                                </Typography>
                                <Typography variant="h6" sx={{
                                    fontWeight: 600,
                                    color: '#1f2937',
                                    mb: 2,
                                    lineHeight: 1.3
                                }}>
                                    Les Projets de BTP les Plus Innovants a...
                                </Typography>

                                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <Typography variant="body2" sx={{ color: '#6b7280', fontWeight: 600 }}>
                                        Actus BTP
                                    </Typography>
                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                        <Typography variant="body2" sx={{ color: '#6b7280', mr: 1 }}>
                                            📅
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: '#6b7280' }}>
                                            18 Février 2021
                                        </Typography>
                                    </Box>
                                </Box>
                            </CardContent>
                        </Card>
                    </Box>
                </Container>
            </Box>

            {/* Section Entreprise Locale */}
            <Box sx={{
                py: 8,
                backgroundImage: 'url(/images/actualite/imag.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative'
            }}>
                {/* Overlay sombre */}
                <Box sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'rgba(0, 0, 0, 0.7)'
                }} />

                <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        minHeight: '500px',
                        gap: 6
                    }}>
                        {/* Contenu texte */}
                        <Box sx={{ flex: 1, color: 'white' }}>
                            <Typography variant="h2" sx={{
                                fontWeight: 700,
                                mb: 3,
                                fontSize: { xs: '2rem', md: '3rem' },
                                lineHeight: 1.2
                            }}>
                                Êtes-vous une entreprise locale?
                            </Typography>

                            <Typography variant="h5" sx={{
                                mb: 4,
                                color: 'rgba(255, 255, 255, 0.9)',
                                fontWeight: 400,
                                lineHeight: 1.4
                            }}>
                                Rejoignez la communauté de centaines d'entreprises locales florissantes dans votre ville.
                            </Typography>

                            <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap' }}>
                                <Button
                                    variant="contained"
                                    size="large"
                                    sx={{
                                        backgroundColor: '#f97316',
                                        color: 'white',
                                        px: 4,
                                        py: 2,
                                        fontSize: '1.1rem',
                                        fontWeight: 600,
                                        borderRadius: 2,
                                        textTransform: 'none',
                                        boxShadow: '0 4px 20px rgba(249, 115, 22, 0.3)',
                                        '&:hover': {
                                            backgroundColor: '#ea580c',
                                            transform: 'translateY(-2px)',
                                            boxShadow: '0 6px 25px rgba(249, 115, 22, 0.4)'
                                        }
                                    }}
                                >
                                    Commencer
                                </Button>

                                <Button
                                    variant="outlined"
                                    size="large"
                                    sx={{
                                        borderColor: 'white',
                                        color: 'white',
                                        px: 4,
                                        py: 2,
                                        fontSize: '1.1rem',
                                        fontWeight: 600,
                                        borderRadius: 2,
                                        textTransform: 'none',
                                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                        backdropFilter: 'blur(10px)',
                                        '&:hover': {
                                            backgroundColor: 'rgba(255, 255, 255, 0.2)',
                                            borderColor: 'white',
                                            transform: 'translateY(-2px)'
                                        }
                                    }}
                                >
                                    Réclamez votre entreprise
                                </Button>
                            </Box>
                        </Box>

                        {/* Image de l'homme avec casque */}
                        <Box sx={{
                            flex: 1,
                            display: { xs: 'none', md: 'flex' },
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Box sx={{
                                width: '100%',
                                maxWidth: '400px',
                                height: '400px',
                                backgroundImage: 'url(/images/actualite/imag.jpg)',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                borderRadius: 3,
                                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.3)'
                            }} />
                        </Box>
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