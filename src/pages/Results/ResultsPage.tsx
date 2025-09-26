import React from 'react'
import { useSearchParams } from 'react-router-dom'
import {
    Typography,
    Container,
    Box,
    Card,
    CardContent,
    Button,
    TextField
} from '@mui/material'
import {
    LocationOn as LocationIcon,
    Phone as PhoneIcon,
    AccessTime as AccessTimeIcon,
    Place as PlaceIcon
} from '@mui/icons-material'
import PageTransition from '../../components/animations/PageTransition'

const ResultsPage: React.FC = () => {
    const [searchParams] = useSearchParams()
    const ville = searchParams.get('ville') || 'Dakar'
    const companies = [
        {
            id: 1,
            name: "Sococim Industries",
            category: "MATÉRIAUX & MATÉRIELS",
            status: "Ouvert maintenant",
            location: "Km 33 ancienne route de Thiès BP 29, Rufisque",
            phone: "+221774424223",
            image: "/images/partners/sococim.jpg",
            isAd: true
        },
        {
            id: 2,
            name: "ALMETAL",
            category: "MENUISERIE",
            status: "Ouvert maintenant",
            location: "Sébikotane - BP : 22 SEBIKOTANE",
            phone: "+221774424223",
            isAd: false
        },
        {
            id: 3,
            name: "QUINCAILLERIE GAFFARI",
            category: "MATÉRIAUX & MATÉRIELS",
            status: "Ouvert maintenant",
            location: "Avenue El Hadji Malick Sy Mbour",
            phone: "+221774424223",
            isAd: false
        },
        {
            id: 4,
            name: "LES CIMENTS DU SAHEL",
            category: "MATÉRIAUX & MATÉRIELS",
            status: "Ouvert maintenant",
            location: "Communauté Rural de Ndiass - Route de Mbour",
            phone: "+221774424223",
            isAd: false
        }
    ]

    return (
        <PageTransition>
            <Box sx={{
                backgroundColor: '#f8fafc',
                minHeight: '100vh',
                py: 4
            }}>
                <Container maxWidth="lg">
                    <Typography
                        variant="h4"
                        sx={{
                            fontWeight: 700,
                            mb: 4,
                            color: '#1f2937',
                            textAlign: 'center'
                        }}
                    >
                        Résultats pour {ville.charAt(0).toUpperCase() + ville.slice(1)} Entreprises
                    </Typography>

                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                        {companies.map((company) => (
                            <Card
                                key={company.id}
                                sx={{
                                    borderRadius: 2,
                                    overflow: 'hidden',
                                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                                    transition: 'all 0.3s ease',
                                    cursor: 'pointer',
                                    '&:hover': {
                                        transform: 'translateY(-2px)',
                                        boxShadow: '0 8px 30px rgba(0, 0, 0, 0.15)'
                                    }
                                }}
                            >
                                {company.isAd && (
                                    <Box sx={{
                                        height: 200,
                                        backgroundImage: `url(${company.image})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        position: 'relative'
                                    }} />
                                )}

                                <CardContent sx={{ p: 4, backgroundColor: 'white' }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                        <Box sx={{
                                            background: '#e67e22',
                                            color: 'white',
                                            px: 2,
                                            py: 0.5,
                                            borderRadius: 1,
                                            fontSize: '0.7rem',
                                            fontWeight: 600,
                                            textTransform: 'uppercase'
                                        }}>
                                            {company.category}
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
                                            fontSize: '1.2rem'
                                        }}>
                                            {company.name}
                                        </Typography>
                                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                            <AccessTimeIcon sx={{ fontSize: 12, color: '#10b981', mr: 0.5 }} />
                                            <Typography variant="body2" sx={{
                                                color: '#10b981',
                                                fontSize: '0.7rem',
                                                fontWeight: 600
                                            }}>
                                                {company.status}
                                            </Typography>
                                        </Box>
                                    </Box>


                                    <Box sx={{ mb: 2 }}>
                                        <TextField
                                            fullWidth
                                            multiline
                                            rows={2}
                                            placeholder="Laissez votre avis sur cette entreprise..."
                                            variant="outlined"
                                            size="small"
                                            sx={{
                                                '& .MuiOutlinedInput-root': {
                                                    borderRadius: 2,
                                                    fontSize: '0.9rem'
                                                }
                                            }}
                                        />
                                        <Button
                                            variant="contained"
                                            size="small"
                                            sx={{
                                                mt: 1,
                                                backgroundColor: '#e67e22',
                                                '&:hover': {
                                                    backgroundColor: '#d35400'
                                                }
                                            }}
                                        >
                                            Publier
                                        </Button>
                                    </Box>

                                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                        <LocationIcon sx={{ fontSize: 16, color: '#6b7280', mr: 1 }} />
                                        <Typography variant="body2" sx={{ color: '#6b7280', fontSize: '0.9rem', fontWeight: 600 }}>
                                            {company.location}
                                        </Typography>
                                    </Box>

                                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                        <PhoneIcon sx={{ fontSize: 16, color: '#6b7280', mr: 1 }} />
                                        <Typography variant="body2" sx={{ color: '#6b7280', fontSize: '0.9rem', fontWeight: 600 }}>
                                            {company.phone}
                                        </Typography>
                                    </Box>

                                    <Box sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        gap: 2
                                    }}>
                                        <Button
                                            variant="outlined"
                                            size="small"
                                            startIcon={<PhoneIcon />}
                                            sx={{
                                                borderColor: '#e67e22',
                                                color: '#e67e22',
                                                borderRadius: 2,
                                                px: 3,
                                                py: 1.5,
                                                fontWeight: 700,
                                                fontSize: '0.8rem',
                                                textTransform: 'none',
                                                minWidth: '120px',
                                                boxShadow: '0 2px 8px rgba(249, 115, 22, 0.1)',
                                                transition: 'all 0.3s ease',
                                                '&:hover': {
                                                    backgroundColor: '#e67e22',
                                                    color: 'white',
                                                    borderColor: '#e67e22',
                                                    transform: 'translateY(-2px)',
                                                    boxShadow: '0 4px 12px rgba(249, 115, 22, 0.3)'
                                                }
                                            }}
                                        >
                                            Appelez
                                        </Button>

                                        <Button
                                            variant="outlined"
                                            size="small"
                                            startIcon={<PlaceIcon />}
                                            sx={{
                                                borderColor: '#e67e22',
                                                color: '#e67e22',
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
                                                    backgroundColor: '#e67e22',
                                                    color: 'white',
                                                    borderColor: '#e67e22',
                                                    transform: 'translateY(-2px)',
                                                    boxShadow: '0 4px 12px rgba(249, 115, 22, 0.3)'
                                                }
                                            }}
                                        >
                                            Afficher La Carte
                                        </Button>
                                    </Box>
                                </CardContent>
                            </Card>
                        ))}
                    </Box>
                </Container>
            </Box>
        </PageTransition>
    )
}

export default ResultsPage
