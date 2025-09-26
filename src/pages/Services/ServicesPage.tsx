import React from 'react'
import {
    Box,
    Typography,
    Container,
    Grid,
    Card,
    CardContent,
    Button,
    Paper
} from '@mui/material'
import {
    Construction as ConstructionIcon,
    Build as BuildIcon,
    Engineering as EngineeringIcon,
    ArrowForward as ArrowForwardIcon
} from '@mui/icons-material'
import PageTransition from '../../components/animations/PageTransition'

const ServicesPage: React.FC = () => {
    const services = [
        {
            id: 1,
            title: "Fourniture d'ouvriers",
            description: "Une équipe distinguée pour chaque mission",
            icon: <ConstructionIcon sx={{ fontSize: 60, color: '#e67e22' }} />,
            details: [
                "Ouvriers qualifiés et expérimentés",
                "Équipes spécialisées par domaine",
                "Formation continue et certification",
                "Suivi de performance et qualité",
                "Disponibilité 24h/24, 7j/7"
            ],
            image: "/images/services/services.jpg"
        },
        {
            id: 2,
            title: "Location de matériels",
            description: "Une gamme complète pour chaque projet",
            icon: <BuildIcon sx={{ fontSize: 60, color: '#e67e22' }} />,
            details: [
                "Matériels de construction modernes",
                "Engins de chantier de dernière génération",
                "Outillage professionnel complet",
                "Maintenance et réparation incluse",
                "Livraison et installation sur site"
            ],
            image: "/images/services/location.jpg"
        },
        {
            id: 3,
            title: "Expertise et Appui technique",
            description: "Des solutions précises pour chaque défi",
            icon: <EngineeringIcon sx={{ fontSize: 60, color: '#e67e22' }} />,
            details: [
                "Conseil technique spécialisé",
                "Études de faisabilité",
                "Plans et devis détaillés",
                "Suivi de projet et contrôle qualité",
                "Formation des équipes"
            ],
            image: "/images/services/expert.jpg"
        }
    ]

    return (
        <PageTransition>
            <Box sx={{ backgroundColor: '#f8fafc', minHeight: '100vh' }}>
                {/* Hero Section */}
                <Box sx={{
                    background: 'linear-gradient(135deg, #e67e22 0%, #d35400 100%)',
                    py: 8,
                    color: 'white'
                }}>
                    <Container maxWidth="lg">
                        <Box sx={{ textAlign: 'center' }}>
                            <Typography variant="h2" sx={{
                                fontWeight: 700,
                                mb: 3,
                                fontSize: { xs: '2.5rem', md: '3.5rem' }
                            }}>
                                Nos Services
                            </Typography>
                            <Typography variant="h5" sx={{
                                mb: 4,
                                opacity: 0.9,
                                maxWidth: '800px',
                                mx: 'auto',
                                lineHeight: 1.6
                            }}>
                                Des solutions complètes pour tous vos projets de construction et travaux publics
                            </Typography>
                        </Box>
                    </Container>
                </Box>

                {/* Services Section */}
                <Box sx={{ py: 8 }}>
                    <Container maxWidth="lg">
                        <Grid container spacing={6}>
                            {services.map((service, index) => (
                                <Grid item xs={12} md={4} key={service.id}>
                                    <Card sx={{
                                        height: '100%',
                                        borderRadius: 3,
                                        overflow: 'hidden',
                                        boxShadow: '0 8px 30px rgba(0, 0, 0, 0.1)',
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            transform: 'translateY(-8px)',
                                            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)'
                                        }
                                    }}>
                                        {/* Image Section */}
                                        <Box sx={{
                                            height: 250,
                                            backgroundImage: `url(${service.image})`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center',
                                            position: 'relative',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}>
                                            {/* Overlay */}
                                            <Box sx={{
                                                position: 'absolute',
                                                top: 0,
                                                left: 0,
                                                right: 0,
                                                bottom: 0,
                                                background: 'rgba(0, 0, 0, 0.4)'
                                            }} />

                                            {/* Icon */}
                                            <Box sx={{
                                                position: 'relative',
                                                zIndex: 1,
                                                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                                                borderRadius: '50%',
                                                width: 100,
                                                height: 100,
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                backdropFilter: 'blur(10px)'
                                            }}>
                                                {service.icon}
                                            </Box>
                                        </Box>

                                        {/* Content Section */}
                                        <CardContent sx={{ p: 4 }}>
                                            <Typography variant="h4" sx={{
                                                fontWeight: 700,
                                                color: '#1f2937',
                                                mb: 2
                                            }}>
                                                {service.title}
                                            </Typography>

                                            <Typography variant="h6" sx={{
                                                color: '#6b7280',
                                                mb: 3,
                                                lineHeight: 1.5
                                            }}>
                                                {service.description}
                                            </Typography>

                                            {/* Details List */}
                                            <Box sx={{ mb: 4 }}>
                                                {service.details.map((detail, detailIndex) => (
                                                    <Box key={detailIndex} sx={{
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        mb: 1.5
                                                    }}>
                                                        <Box sx={{
                                                            width: 6,
                                                            height: 6,
                                                            backgroundColor: '#e67e22',
                                                            borderRadius: '50%',
                                                            mr: 2,
                                                            flexShrink: 0
                                                        }} />
                                                        <Typography variant="body2" sx={{
                                                            color: '#4b5563',
                                                            fontSize: '0.9rem'
                                                        }}>
                                                            {detail}
                                                        </Typography>
                                                    </Box>
                                                ))}
                                            </Box>

                                            <Button
                                                variant="contained"
                                                endIcon={<ArrowForwardIcon />}
                                                sx={{
                                                    backgroundColor: '#e67e22',
                                                    color: 'white',
                                                    px: 4,
                                                    py: 1.5,
                                                    fontWeight: 600,
                                                    borderRadius: 2,
                                                    textTransform: 'none',
                                                    fontSize: '1rem',
                                                    boxShadow: '0 4px 15px rgba(249, 115, 22, 0.3)',
                                                    '&:hover': {
                                                        backgroundColor: '#d35400',
                                                        transform: 'translateY(-2px)',
                                                        boxShadow: '0 6px 20px rgba(249, 115, 22, 0.4)'
                                                    }
                                                }}
                                            >
                                                En savoir plus
                                            </Button>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Container>
                </Box>

                {/* CTA Section */}
                <Box sx={{
                    background: 'linear-gradient(135deg, #1f2937 0%, #374151 100%)',
                    py: 8,
                    color: 'white'
                }}>
                    <Container maxWidth="lg">
                        <Box sx={{ textAlign: 'center' }}>
                            <Typography variant="h3" sx={{
                                fontWeight: 700,
                                mb: 3
                            }}>
                                Prêt à démarrer votre projet ?
                            </Typography>
                            <Typography variant="h6" sx={{
                                mb: 4,
                                opacity: 0.9,
                                maxWidth: '600px',
                                mx: 'auto'
                            }}>
                                Contactez-nous dès aujourd'hui pour discuter de vos besoins et obtenir un devis personnalisé.
                            </Typography>
                            <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', flexWrap: 'wrap' }}>
                                <Button
                                    variant="contained"
                                    size="large"
                                    sx={{
                                        backgroundColor: '#e67e22',
                                        color: 'white',
                                        px: 6,
                                        py: 2,
                                        fontSize: '1.1rem',
                                        fontWeight: 600,
                                        borderRadius: 2,
                                        textTransform: 'none',
                                        '&:hover': {
                                            backgroundColor: '#d35400'
                                        }
                                    }}
                                >
                                    Demander un devis
                                </Button>
                                <Button
                                    variant="outlined"
                                    size="large"
                                    sx={{
                                        borderColor: 'white',
                                        color: 'white',
                                        px: 6,
                                        py: 2,
                                        fontSize: '1.1rem',
                                        fontWeight: 600,
                                        borderRadius: 2,
                                        textTransform: 'none',
                                        '&:hover': {
                                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                            borderColor: 'white'
                                        }
                                    }}
                                >
                                    Nous contacter
                                </Button>
                            </Box>
                        </Box>
                    </Container>
                </Box>
            </Box>
        </PageTransition>
    )
}

export default ServicesPage
