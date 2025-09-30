import React, { useState, useEffect } from 'react'
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
    FilterList as FilterIcon
} from '@mui/icons-material'
// import { supabase } from '../../lib/supabase'

interface Enterprise {
    id: string
    name: string
    description: string
    category: string
    address?: string
    phone: string
    email?: string
    image_url?: string
    is_active: boolean
    created_at: string
    rating?: number
    reviews?: number
    services?: string[]
    verified?: boolean
}

const AnnuairePage: React.FC = () => {
    const [enterprises, setEnterprises] = useState<Enterprise[]>([])
    const [filteredEnterprises, setFilteredEnterprises] = useState<Enterprise[]>([])
    const [loading, setLoading] = useState(false)
    const [searchQuery, setSearchQuery] = useState('')
    const [selectedCategory, setSelectedCategory] = useState('')
    const [selectedCity, setSelectedCity] = useState('')
    const [showFilters, setShowFilters] = useState(false)

    const categories = [
        'Entrepreneur général',
        'Spécialisé maçonnerie',
        'Spécialisé électricité',
        'Spécialisé plomberie',
        'Spécialisé menuiserie',
        'Spécialisé peinture',
        'Spécialisé carrelage',
        'Architecte',
        'Bureau d\'études',
        'Fournisseur matériaux',
        'Autre'
    ]
    const cities = ['Dakar', 'Thiès', 'Saint-Louis', 'Kaolack', 'Ziguinchor']

    useEffect(() => {
        loadEnterprises()

        // Écouter les mises à jour depuis l'admin
        const handleEnterprisesUpdate = () => {
            loadEnterprises()
        }

        window.addEventListener('enterprisesUpdated', handleEnterprisesUpdate)

        return () => {
            window.removeEventListener('enterprisesUpdated', handleEnterprisesUpdate)
        }
    }, [])

    useEffect(() => {
        filterEnterprises()
    }, [enterprises, searchQuery, selectedCategory, selectedCity])

    const loadEnterprises = () => {
        try {
            setLoading(true)
            const stored = localStorage.getItem('btp_enterprises')
            if (stored) {
                const enterprisesData = JSON.parse(stored)
                // Filtrer seulement les entreprises actives
                const activeEnterprises = enterprisesData.filter((enterprise: any) => enterprise.is_active)

                // Ajouter des données mockées pour le design
                const enterprisesWithMockData = activeEnterprises.map((enterprise: any) => ({
                    ...enterprise,
                    rating: 4.5 + Math.random() * 0.5,
                    reviews: Math.floor(Math.random() * 50) + 10,
                    services: ['Service 1', 'Service 2', 'Service 3'],
                    verified: Math.random() > 0.3
                }))

                setEnterprises(enterprisesWithMockData)
                console.log('Loaded enterprises from localStorage:', enterprisesWithMockData)
                console.log('Phone numbers:', enterprisesWithMockData.map(e => ({ name: e.name, phone: e.phone, contact_phone: e.contact_phone })))
            } else {
                setEnterprises([])
                console.log('No enterprises found in localStorage')
            }
        } catch (error) {
            console.error('Error loading enterprises:', error)
            setEnterprises([])
        } finally {
            setLoading(false)
        }
    }

    const filterEnterprises = () => {
        let filtered = enterprises

        if (searchQuery) {
            filtered = filtered.filter(enterprise =>
                enterprise.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                enterprise.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                enterprise.category.toLowerCase().includes(searchQuery.toLowerCase())
            )
        }

        if (selectedCategory) {
            filtered = filtered.filter(enterprise =>
                enterprise.category === selectedCategory
            )
        }

        setFilteredEnterprises(filtered)
    }

    const handleFilter = () => {
        setShowFilters(!showFilters)
        console.log('Recherche:', searchQuery)
        console.log('Catégorie:', selectedCategory)
        console.log('Ville:', selectedCity)
    }

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
                        {filteredEnterprises.length} entreprises trouvées
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
                    {filteredEnterprises.map((enterprise) => (
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
                                                <Rating value={enterprise.rating || 4.5} precision={0.1} size="small" readOnly />
                                                <Typography variant="body2" color="text.secondary">
                                                    {enterprise.rating?.toFixed(1)} ({enterprise.reviews} avis)
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </Box>

                                    <Typography variant="body2" sx={{ mb: 2, color: 'text.secondary' }}>
                                        {enterprise.description}
                                    </Typography>

                                    <Box sx={{ mb: 2 }}>
                                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                            {enterprise.services?.map((service, index) => (
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
                                        <Typography variant="body2">{enterprise.address || 'Dakar'}</Typography>
                                    </Box>

                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                                        <PhoneIcon sx={{ color: '#f97316', fontSize: 18 }} />
                                        <Typography variant="body2">
                                            {enterprise.phone || enterprise.contact_phone || 'Aucun numéro'}
                                        </Typography>
                                    </Box>

                                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                        <Button
                                            variant="contained"
                                            size="medium"
                                            onClick={() => window.open(`https://wa.me/${enterprise.phone.replace(/\D/g, '')}`, '_blank')}
                                            sx={{
                                                background: 'linear-gradient(135deg, #e67e22 0%, #f39c12 100%)',
                                                color: 'white',
                                                px: 4,
                                                py: 1.5,
                                                borderRadius: 2,
                                                fontWeight: 600,
                                                '&:hover': {
                                                    background: 'linear-gradient(135deg, #d35400 0%, #e67e22 100%)',
                                                    transform: 'translateY(-2px)',
                                                    boxShadow: '0 8px 25px rgba(230, 126, 34, 0.3)'
                                                }
                                            }}
                                        >
                                            📞 Contacter via WhatsApp
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

export default AnnuairePage
