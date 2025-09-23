import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import {
    Box,
    Container,
    Typography,
    Button,
    Card,
    CardContent,
    Grid,
    Chip,
    Avatar,
    Rating,
    Tab,
    Tabs,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    Paper
} from '@mui/material'
import {
    LocationOn as LocationIcon,
    Phone as PhoneIcon,
    Email as EmailIcon,
    Language as WebsiteIcon,
    AccessTime as TimeIcon,
    CheckCircle as CheckIcon,
    Business as BusinessIcon,
    Share as ShareIcon,
    Favorite as FavoriteIcon
} from '@mui/icons-material'
import PageTransition from '../../components/animations/PageTransition'

const EnterprisePage: React.FC = () => {
    const { id } = useParams()
    const [tabValue, setTabValue] = useState(0)

    // Données mockées pour la démo
    const enterprise = {
        id: id || '1',
        name: 'BTP Excellence Dakar',
        category: 'Construction générale',
        description: 'Entreprise spécialisée dans la construction résidentielle et commerciale depuis plus de 15 ans. Nous offrons des services complets de construction, rénovation et aménagement.',
        city: 'Dakar',
        address: '25 Avenue Léopold Sédar Senghor, Plateau',
        phone: '+221 33 825 12 34',
        email: 'contact@btpexcellence.sn',
        website: 'www.btpexcellence.sn',
        rating: 4.8,
        reviews: 45,
        verified: true,
        services: ['Construction neuve', 'Rénovation', 'Maçonnerie', 'Béton armé', 'Carrelage', 'Peinture'],
        workingHours: {
            'Lundi - Vendredi': '8h00 - 18h00',
            'Samedi': '8h00 - 14h00',
            'Dimanche': 'Fermé'
        }
    }

    const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
        setTabValue(newValue)
    }

    return (
        <PageTransition>
            <Box sx={{ backgroundColor: '#f8fafc', minHeight: '100vh' }}>
                {/* Header avec informations principales */}
                <Box sx={{
                    backgroundColor: '#f97316',
                    color: 'white',
                    py: 6
                }}>
                    <Container maxWidth="lg">
                        <Grid container spacing={4} alignItems="center">
                            <Grid item xs={12} md={2}>
                                <Avatar sx={{
                                    width: 120,
                                    height: 120,
                                    bgcolor: 'rgba(255, 255, 255, 0.2)',
                                    mx: 'auto'
                                }}>
                                    <BusinessIcon sx={{ fontSize: 60 }} />
                                </Avatar>
                            </Grid>
                            <Grid item xs={12} md={8}>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                                    <Typography variant="h3" sx={{ fontWeight: 700 }}>
                                        {enterprise.name}
                                    </Typography>
                                    {enterprise.verified && (
                                        <Chip
                                            icon={<CheckIcon />}
                                            label="Certifié"
                                            sx={{
                                                backgroundColor: '#00853f',
                                                color: 'white',
                                                fontWeight: 600
                                            }}
                                        />
                                    )}
                                </Box>
                                <Typography variant="h6" sx={{ mb: 2, opacity: 0.9 }}>
                                    {enterprise.category}
                                </Typography>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                                    <Rating value={enterprise.rating} precision={0.1} readOnly />
                                    <Typography variant="body1">
                                        {enterprise.rating} ({enterprise.reviews} avis)
                                    </Typography>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                    <LocationIcon />
                                    <Typography variant="body1">{enterprise.city}</Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={2}>
                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                                    <Button
                                        variant="contained"
                                        sx={{
                                            backgroundColor: 'white',
                                            color: '#f97316',
                                            fontWeight: 600,
                                            '&:hover': {
                                                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                                            }
                                        }}
                                    >
                                        📞 Contacter
                                    </Button>
                                    <Box sx={{ display: 'flex', gap: 1 }}>
                                        <Button
                                            variant="outlined"
                                            size="small"
                                            sx={{
                                                color: 'white',
                                                borderColor: 'white',
                                                '&:hover': {
                                                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                                }
                                            }}
                                        >
                                            <ShareIcon />
                                        </Button>
                                        <Button
                                            variant="outlined"
                                            size="small"
                                            sx={{
                                                color: 'white',
                                                borderColor: 'white',
                                                '&:hover': {
                                                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                                }
                                            }}
                                        >
                                            <FavoriteIcon />
                                        </Button>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>

                <Container maxWidth="lg" sx={{ py: 4 }}>
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={8}>
                            {/* Onglets */}
                            <Paper sx={{ mb: 3 }}>
                                <Tabs
                                    value={tabValue}
                                    onChange={handleTabChange}
                                    variant="fullWidth"
                                    sx={{
                                        '& .MuiTab-root': { fontWeight: 600 },
                                        '& .Mui-selected': { color: '#f97316' },
                                        '& .MuiTabs-indicator': { backgroundColor: '#f97316' }
                                    }}
                                >
                                    <Tab label="📋 À propos" />
                                    <Tab label="🔧 Services" />
                                    <Tab label="⭐ Avis" />
                                </Tabs>
                            </Paper>

                            {/* Contenu des onglets */}
                            <Card>
                                <CardContent sx={{ p: 4 }}>
                                    {tabValue === 0 && (
                                        <Box>
                                            <Typography variant="h5" sx={{ fontWeight: 600, mb: 3, color: '#f97316' }}>
                                                À propos de {enterprise.name}
                                            </Typography>
                                            <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.7 }}>
                                                {enterprise.description}
                                            </Typography>
                                            <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
                                                Avec une équipe d'experts qualifiés et une approche centrée sur la qualité,
                                                nous réalisons vos projets dans le respect des délais et budgets convenus.
                                                Notre savoir-faire reconnu au Sénégal nous permet d'intervenir sur tous types
                                                de chantiers, du résidentiel au commercial.
                                            </Typography>
                                        </Box>
                                    )}

                                    {tabValue === 1 && (
                                        <Box>
                                            <Typography variant="h5" sx={{ fontWeight: 600, mb: 3, color: '#f97316' }}>
                                                🔧 Nos services
                                            </Typography>
                                            <Grid container spacing={2}>
                                                {enterprise.services.map((service, index) => (
                                                    <Grid item xs={12} sm={6} key={index}>
                                                        <Card variant="outlined" sx={{
                                                            p: 3,
                                                            transition: 'all 0.3s ease',
                                                            '&:hover': {
                                                                borderColor: '#f97316',
                                                                boxShadow: '0 4px 12px rgba(249, 115, 22, 0.15)',
                                                                transform: 'translateY(-2px)'
                                                            }
                                                        }}>
                                                            <Typography variant="h6" sx={{ fontWeight: 600, color: '#f97316' }}>
                                                                ✓ {service}
                                                            </Typography>
                                                        </Card>
                                                    </Grid>
                                                ))}
                                            </Grid>
                                        </Box>
                                    )}

                                    {tabValue === 2 && (
                                        <Box>
                                            <Typography variant="h5" sx={{ fontWeight: 600, mb: 3, color: '#f97316' }}>
                                                ⭐ Avis clients ({enterprise.reviews})
                                            </Typography>
                                            <Card variant="outlined" sx={{ mb: 3 }}>
                                                <CardContent>
                                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                                                        <Typography variant="h6" sx={{ fontWeight: 600 }}>
                                                            Mamadou Diallo
                                                        </Typography>
                                                        <Typography variant="body2" color="text.secondary">
                                                            15 Jan 2024
                                                        </Typography>
                                                    </Box>
                                                    <Rating value={5} readOnly size="small" sx={{ mb: 2 }} />
                                                    <Typography variant="body1">
                                                        "Excellent travail, équipe très professionnelle et respectueuse des délais.
                                                        Je recommande vivement BTP Excellence !"
                                                    </Typography>
                                                </CardContent>
                                            </Card>
                                            <Card variant="outlined">
                                                <CardContent>
                                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                                                        <Typography variant="h6" sx={{ fontWeight: 600 }}>
                                                            Fatou Sall
                                                        </Typography>
                                                        <Typography variant="body2" color="text.secondary">
                                                            8 Jan 2024
                                                        </Typography>
                                                    </Box>
                                                    <Rating value={5} readOnly size="small" sx={{ mb: 2 }} />
                                                    <Typography variant="body1">
                                                        "Qualité irréprochable et prix corrects. L'équipe est à l'écoute et très compétente."
                                                    </Typography>
                                                </CardContent>
                                            </Card>
                                        </Box>
                                    )}
                                </CardContent>
                            </Card>
                        </Grid>

                        <Grid item xs={12} md={4}>
                            {/* Informations de contact */}
                            <Card sx={{ mb: 3 }}>
                                <CardContent>
                                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 3, color: '#f97316' }}>
                                        📞 Contact
                                    </Typography>
                                    <List>
                                        <ListItem>
                                            <ListItemIcon>
                                                <LocationIcon sx={{ color: '#f97316' }} />
                                            </ListItemIcon>
                                            <ListItemText
                                                primary={enterprise.address}
                                                secondary={enterprise.city}
                                            />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PhoneIcon sx={{ color: '#f97316' }} />
                                            </ListItemIcon>
                                            <ListItemText primary={enterprise.phone} />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemIcon>
                                                <EmailIcon sx={{ color: '#f97316' }} />
                                            </ListItemIcon>
                                            <ListItemText primary={enterprise.email} />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemIcon>
                                                <WebsiteIcon sx={{ color: '#f97316' }} />
                                            </ListItemIcon>
                                            <ListItemText primary={enterprise.website} />
                                        </ListItem>
                                    </List>
                                </CardContent>
                            </Card>

                            {/* Horaires */}
                            <Card>
                                <CardContent>
                                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 3, color: '#f97316' }}>
                                        <TimeIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
                                        🕐 Horaires d'ouverture
                                    </Typography>
                                    <List>
                                        {Object.entries(enterprise.workingHours).map(([day, hours]) => (
                                            <ListItem key={day} sx={{ py: 1 }}>
                                                <ListItemText
                                                    primary={day}
                                                    secondary={hours}
                                                    primaryTypographyProps={{ fontWeight: 500 }}
                                                />
                                            </ListItem>
                                        ))}
                                    </List>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </PageTransition>
    )
}

export default EnterprisePage