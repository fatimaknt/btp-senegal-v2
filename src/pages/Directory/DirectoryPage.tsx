import React, { useState } from 'react'
import {
    Box,
    Container,
    Typography,
    TextField,
    Button,
    Card,
    CardContent,
    Grid,
    Chip,
    Avatar,
    Rating,
    InputAdornment
} from '@mui/material'
import {
    Search as SearchIcon,
    LocationOn as LocationIcon,
    Business as BusinessIcon,
    Phone as PhoneIcon,
    Star as StarIcon,
    FilterList as FilterIcon
} from '@mui/icons-material'

const DirectoryPage: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState('')
    const [selectedCategory, setSelectedCategory] = useState('')
    const [selectedCity, setSelectedCity] = useState('')
    const [showFilters, setShowFilters] = useState(false)

    const handleFilter = () => {
        // Logique de filtrage - pour l'instant on affiche juste les filtres
        setShowFilters(!showFilters)
        console.log('Recherche:', searchQuery)
        console.log('Catégorie:', selectedCategory)
        console.log('Ville:', selectedCity)
    }

    // Données mockées pour la démo
    const enterprises = [
        {
            id: 1,
            name: 'BTP Excellence Dakar',
            category: 'Construction générale',
            city: 'Dakar',
            rating: 4.8,
            reviews: 45,
            phone: '+221 33 825 XX XX',
            description: 'Spécialiste en construction résidentielle et commerciale depuis 15 ans.',
            services: ['Maçonnerie', 'Béton armé', 'Rénovation'],
            verified: true
        },
        {
            id: 2,
            name: 'Plomberie Pro Sénégal',
            category: 'Plomberie',
            city: 'Thiès',
            rating: 4.6,
            reviews: 32,
            phone: '+221 33 951 XX XX',
            description: 'Installation et réparation de plomberie pour particuliers et entreprises.',
            services: ['Installation', 'Réparation', 'Urgences 24h'],
            verified: true
        },
        {
            id: 3,
            name: 'Électricité Moderne',
            category: 'Électricité',
            city: 'Dakar',
            rating: 4.7,
            reviews: 28,
            phone: '+221 33 864 XX XX',
            description: 'Solutions électriques complètes pour tous types de bâtiments.',
            services: ['Installation électrique', 'Dépannage', 'Éclairage'],
            verified: false
        }
    ]

    const categories = ['Construction générale', 'Plomberie', 'Électricité', 'Peinture', 'Carrelage']
    const cities = ['Dakar', 'Thiès', 'Saint-Louis', 'Kaolack', 'Ziguinchor']

    return (
        <Box sx={{ backgroundColor: '#f8fafc', minHeight: '100vh' }}>
            {/* Header avec recherche */}
            <Box sx={{
                backgroundColor: '#f97316',
                color: 'white',
                py: 8
            }}>
                <Container maxWidth="lg">
                    <Typography
                        variant="h3"
                        sx={{
                            fontWeight: 800,
                            textAlign: 'center',
                            mb: 2,
                            color: '#fbbf24',
                            textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                            filter: 'drop-shadow(0 2px 4px rgba(251,191,36,0.3))',
                        }}
                    >
                        🏢 Annuaire des Entreprises BTP
                    </Typography>
                    <Typography variant="h6" sx={{ textAlign: 'center', mb: 6, opacity: 0.9 }}>
                        Trouvez le professionnel parfait pour vos projets au Sénégal 🇸🇳
                    </Typography>

                    {/* Barre de recherche moderne */}
                    <Card sx={{
                        maxWidth: 900,
                        mx: 'auto',
                        background: 'rgba(255, 255, 255, 0.95)',
                        backdropFilter: 'blur(20px)',
                        borderRadius: 4,
                        boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                    }}>
                        <CardContent sx={{ p: 4 }}>
                            <Grid container spacing={2} alignItems="center">
                                <Grid item xs={12} md={5}>
                                    <TextField
                                        fullWidth
                                        placeholder="Rechercher..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <SearchIcon sx={{ color: '#f97316', fontSize: 24 }} />
                                                </InputAdornment>
                                            ),
                                        }}
                                        sx={{
                                            '& .MuiOutlinedInput-root': {
                                                height: '60px',
                                                borderRadius: 3,
                                                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                                                '& fieldset': {
                                                    border: '2px solid rgba(249, 115, 22, 0.2)',
                                                },
                                                '&:hover fieldset': {
                                                    border: '2px solid rgba(249, 115, 22, 0.4)',
                                                },
                                                '&.Mui-focused fieldset': {
                                                    border: '2px solid #f97316',
                                                }
                                            }
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12} md={3}>
                                    <TextField
                                        fullWidth
                                        select
                                        value={selectedCategory}
                                        onChange={(e) => setSelectedCategory(e.target.value)}
                                        SelectProps={{ native: true }}
                                        sx={{
                                            '& .MuiOutlinedInput-root': {
                                                height: '60px',
                                                borderRadius: 3,
                                                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                                                '& fieldset': {
                                                    border: '2px solid rgba(249, 115, 22, 0.2)',
                                                },
                                                '&:hover fieldset': {
                                                    border: '2px solid rgba(249, 115, 22, 0.4)',
                                                },
                                                '&.Mui-focused fieldset': {
                                                    border: '2px solid #f97316',
                                                }
                                            },
                                            '& .MuiInputLabel-root': {
                                                display: 'none'
                                            }
                                        }}
                                    >
                                        <option value="">Toutes catégories</option>
                                        {categories.map((cat) => (
                                            <option key={cat} value={cat}>{cat}</option>
                                        ))}
                                    </TextField>
                                </Grid>
                                <Grid item xs={12} md={3}>
                                    <TextField
                                        fullWidth
                                        select
                                        value={selectedCity}
                                        onChange={(e) => setSelectedCity(e.target.value)}
                                        SelectProps={{ native: true }}
                                        sx={{
                                            '& .MuiOutlinedInput-root': {
                                                height: '60px',
                                                borderRadius: 3,
                                                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                                                '& fieldset': {
                                                    border: '2px solid rgba(249, 115, 22, 0.2)',
                                                },
                                                '&:hover fieldset': {
                                                    border: '2px solid rgba(249, 115, 22, 0.4)',
                                                },
                                                '&.Mui-focused fieldset': {
                                                    border: '2px solid #f97316',
                                                }
                                            },
                                            '& .MuiInputLabel-root': {
                                                display: 'none'
                                            }
                                        }}
                                    >
                                        <option value="">Toutes villes</option>
                                        {cities.map((city) => (
                                            <option key={city} value={city}>{city}</option>
                                        ))}
                                    </TextField>
                                </Grid>
                                <Grid item xs={12} md={1}>
                                    <Button
                                        fullWidth
                                        variant="contained"
                                        onClick={handleFilter}
                                        sx={{
                                            height: '60px',
                                            minWidth: '60px',
                                            background: 'linear-gradient(135deg, #f97316 0%, #fb923c 100%)',
                                            borderRadius: 3,
                                            '&:hover': {
                                                background: 'linear-gradient(135deg, #ea580c 0%, #f97316 100%)',
                                                transform: 'translateY(-2px)',
                                            }
                                        }}
                                    >
                                        <FilterIcon />
                                    </Button>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Container>
            </Box>

            {/* Filtres avancés */}
            {showFilters && (
                <Box sx={{ backgroundColor: '#f8fafc', py: 4 }}>
                    <Container maxWidth="lg">
                        <Card sx={{ p: 3, mb: 4 }}>
                            <Typography variant="h6" sx={{ mb: 3, color: '#f97316', fontWeight: 600 }}>
                                🔍 Filtres avancés
                            </Typography>
                            <Grid container spacing={3}>
                                <Grid item xs={12} md={4}>
                                    <Typography variant="body2" sx={{ mb: 1, fontWeight: 500 }}>
                                        Note minimum
                                    </Typography>
                                    <TextField
                                        fullWidth
                                        select
                                        value=""
                                        SelectProps={{ native: true }}
                                        sx={{ '& .MuiOutlinedInput-root': { height: '50px' } }}
                                    >
                                        <option value="">Toutes les notes</option>
                                        <option value="4">4+ étoiles</option>
                                        <option value="3">3+ étoiles</option>
                                        <option value="2">2+ étoiles</option>
                                    </TextField>
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <Typography variant="body2" sx={{ mb: 1, fontWeight: 500 }}>
                                        Statut
                                    </Typography>
                                    <TextField
                                        fullWidth
                                        select
                                        value=""
                                        SelectProps={{ native: true }}
                                        sx={{ '& .MuiOutlinedInput-root': { height: '50px' } }}
                                    >
                                        <option value="">Tous</option>
                                        <option value="verified">Vérifiées uniquement</option>
                                        <option value="new">Nouvelles entreprises</option>
                                    </TextField>
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <Typography variant="body2" sx={{ mb: 1, fontWeight: 500 }}>
                                        Services
                                    </Typography>
                                    <TextField
                                        fullWidth
                                        select
                                        value=""
                                        SelectProps={{ native: true }}
                                        sx={{ '& .MuiOutlinedInput-root': { height: '50px' } }}
                                    >
                                        <option value="">Tous les services</option>
                                        <option value="emergency">Urgences 24h</option>
                                        <option value="consultation">Consultation gratuite</option>
                                        <option value="warranty">Garantie</option>
                                    </TextField>
                                </Grid>
                            </Grid>
                            <Box sx={{ display: 'flex', gap: 2, mt: 3, justifyContent: 'flex-end' }}>
                                <Button
                                    variant="outlined"
                                    onClick={() => setShowFilters(false)}
                                    sx={{ borderColor: '#f97316', color: '#f97316' }}
                                >
                                    Annuler
                                </Button>
                                <Button
                                    variant="contained"
                                    sx={{
                                        background: 'linear-gradient(135deg, #f97316 0%, #fb923c 100%)',
                                        '&:hover': {
                                            background: 'linear-gradient(135deg, #ea580c 0%, #f97316 100%)',
                                        }
                                    }}
                                >
                                    Appliquer les filtres
                                </Button>
                            </Box>
                        </Card>
                    </Container>
                </Box>
            )}

            {/* Résultats */}
            <Container maxWidth="lg" sx={{ py: 6 }}>
                <Box sx={{ mb: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="h5" sx={{ fontWeight: 600, color: '#1f2937' }}>
                        {enterprises.length} entreprises trouvées
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                        {['Vérifiées', 'Mieux notées', 'À proximité'].map((filter) => (
                            <Chip
                                key={filter}
                                label={filter}
                                clickable
                                sx={{
                                    backgroundColor: 'rgba(249, 115, 22, 0.1)',
                                    color: '#f97316',
                                    '&:hover': {
                                        backgroundColor: 'rgba(249, 115, 22, 0.2)',
                                    }
                                }}
                            />
                        ))}
                    </Box>
                </Box>

                <Grid container spacing={3}>
                    {enterprises.map((enterprise) => (
                        <Grid item xs={12} md={6} lg={4} key={enterprise.id}>
                            <Card sx={{
                                height: '100%',
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    transform: 'translateY(-5px)',
                                    boxShadow: '0 15px 35px rgba(249, 115, 22, 0.15)',
                                }
                            }}>
                                <CardContent sx={{ p: 3 }}>
                                    <Box sx={{ display: 'flex', alignItems: 'start', mb: 2 }}>
                                        <Avatar sx={{
                                            bgcolor: '#f97316',
                                            mr: 2,
                                            width: 56,
                                            height: 56
                                        }}>
                                            <BusinessIcon />
                                        </Avatar>
                                        <Box sx={{ flex: 1 }}>
                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                                                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                                                    {enterprise.name}
                                                </Typography>
                                                {enterprise.verified && (
                                                    <Chip
                                                        label="✓"
                                                        size="small"
                                                        sx={{
                                                            backgroundColor: '#00853f',
                                                            color: 'white',
                                                            minWidth: '24px',
                                                            height: '24px'
                                                        }}
                                                    />
                                                )}
                                            </Box>
                                            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                                                {enterprise.category}
                                            </Typography>
                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                                <Rating value={enterprise.rating} precision={0.1} size="small" readOnly />
                                                <Typography variant="body2" color="text.secondary">
                                                    {enterprise.rating} ({enterprise.reviews} avis)
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </Box>

                                    <Typography variant="body2" sx={{ mb: 2, color: 'text.secondary' }}>
                                        {enterprise.description}
                                    </Typography>

                                    <Box sx={{ mb: 2 }}>
                                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                            {enterprise.services.map((service, index) => (
                                                <Chip
                                                    key={index}
                                                    label={service}
                                                    size="small"
                                                    sx={{
                                                        backgroundColor: 'rgba(249, 115, 22, 0.1)',
                                                        color: '#f97316',
                                                    }}
                                                />
                                            ))}
                                        </Box>
                                    </Box>

                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                                        <LocationIcon sx={{ color: '#f97316', fontSize: 18 }} />
                                        <Typography variant="body2">{enterprise.city}</Typography>
                                    </Box>

                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                                        <PhoneIcon sx={{ color: '#f97316', fontSize: 18 }} />
                                        <Typography variant="body2">{enterprise.phone}</Typography>
                                    </Box>

                                    <Box sx={{ display: 'flex', gap: 1 }}>
                                        <Button
                                            variant="contained"
                                            size="small"
                                            sx={{
                                                flex: 1,
                                                background: 'linear-gradient(135deg, #f97316 0%, #fb923c 100%)',
                                                '&:hover': {
                                                    background: 'linear-gradient(135deg, #ea580c 0%, #f97316 100%)',
                                                }
                                            }}
                                        >
                                            Voir profil
                                        </Button>
                                        <Button
                                            variant="outlined"
                                            size="small"
                                            sx={{
                                                borderColor: '#f97316',
                                                color: '#f97316',
                                                '&:hover': {
                                                    backgroundColor: 'rgba(249, 115, 22, 0.1)',
                                                    borderColor: '#f97316',
                                                }
                                            }}
                                        >
                                            Contacter
                                        </Button>
                                    </Box>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>

                {/* Pagination */}
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 6 }}>
                    <Button
                        variant="contained"
                        sx={{
                            background: 'linear-gradient(135deg, #f97316 0%, #fb923c 100%)',
                            px: 4,
                            '&:hover': {
                                background: 'linear-gradient(135deg, #ea580c 0%, #f97316 100%)',
                            }
                        }}
                    >
                        Charger plus d'entreprises
                    </Button>
                </Box>
            </Container>
        </Box>
    )
}

export default DirectoryPage
