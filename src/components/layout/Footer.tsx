import React from 'react'
import {
    Box,
    Container,
    Typography,
    Button
} from '@mui/material'
import {
    Email as EmailIcon,
    Phone as PhoneIcon,
    LocationOn as LocationIcon,
    WhatsApp as WhatsAppIcon,
    Info as InfoIcon,
    ContactMail as ContactMailIcon,
    Help as HelpIcon,
    Home as HomeIcon,
    DirectionsCar as CarIcon,
    CalendarToday as CalendarIcon
} from '@mui/icons-material'

const Footer: React.FC = () => {

    return (
        <Box component="footer" sx={{
            backgroundColor: '#1e293b',
            color: 'white',
            py: 8
        }}>
            <Container maxWidth="lg">
                <Box sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    gap: 6,
                    justifyContent: 'space-between'
                }}>
                    {/* Services Column */}
                    <Box sx={{ flex: 1 }}>
                        <Typography variant="h6" sx={{
                            fontWeight: 600,
                            mb: 4,
                            color: 'white',
                            fontSize: '1.2rem'
                        }}>
                            Services
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                                <HomeIcon sx={{ color: '#3b82f6', fontSize: 20 }} />
                                <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                                    Appartements
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                                <CarIcon sx={{ color: '#3b82f6', fontSize: 20 }} />
                                <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                                    Voitures
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                                <CalendarIcon sx={{ color: '#3b82f6', fontSize: 20 }} />
                                <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                                    Réservation
                                </Typography>
                            </Box>
                        </Box>
                    </Box>

                    {/* Entreprise Column */}
                    <Box sx={{ flex: 1 }}>
                        <Typography variant="h6" sx={{
                            fontWeight: 600,
                            mb: 4,
                            color: 'white',
                            fontSize: '1.2rem'
                        }}>
                            Entreprise
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                                <InfoIcon sx={{ color: '#3b82f6', fontSize: 20 }} />
                                <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                                    À propos
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                                <ContactMailIcon sx={{ color: '#3b82f6', fontSize: 20 }} />
                                <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                                    Contact
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                                <HelpIcon sx={{ color: '#3b82f6', fontSize: 20 }} />
                                <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                                    FAQ
                                </Typography>
                            </Box>
                        </Box>
                    </Box>

                    {/* Contactez-nous Column */}
                    <Box sx={{ flex: 1 }}>
                        <Typography variant="h6" sx={{
                            fontWeight: 600,
                            mb: 4,
                            color: 'white',
                            fontSize: '1.2rem'
                        }}>
                            Contactez-nous
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mb: 3 }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                                <PhoneIcon sx={{ color: '#3b82f6', fontSize: 20 }} />
                                <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                                    +221 77 087 46 19
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                                <EmailIcon sx={{ color: '#3b82f6', fontSize: 20 }} />
                                <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                                    contact@btp-senegal.sn
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                                <LocationIcon sx={{ color: '#3b82f6', fontSize: 20 }} />
                                <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                                    Dakar, Sénégal
                                </Typography>
                            </Box>
                        </Box>

                        {/* WhatsApp Button */}
                        <Button
                            variant="contained"
                            startIcon={<WhatsAppIcon />}
                            component="a"
                            href="https://wa.me/221770874619"
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{
                                backgroundColor: '#25D366',
                                color: 'white',
                                borderRadius: 3,
                                px: 3,
                                py: 1.5,
                                fontWeight: 600,
                                textTransform: 'none',
                                fontSize: '0.9rem',
                                boxShadow: '0 4px 15px rgba(37, 211, 102, 0.3)',
                                textDecoration: 'none',
                                '&:hover': {
                                    backgroundColor: '#128C7E',
                                    transform: 'translateY(-2px)',
                                    boxShadow: '0 6px 20px rgba(37, 211, 102, 0.4)',
                                    textDecoration: 'none'
                                }
                            }}
                        >
                            WhatsApp
                        </Button>
                    </Box>
                </Box>

                {/* Bottom Border */}
                <Box sx={{
                    mt: 6,
                    height: '1px',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)'
                }} />

                {/* Footer Bottom */}
                <Box sx={{
                    mt: 4,
                    textAlign: 'center'
                }}>
                    <Typography variant="body2" sx={{
                        color: 'rgba(255, 255, 255, 0.6)',
                        fontSize: '0.9rem'
                    }}>
                        Développé par{' '}
                        <Typography
                            component="a"
                            href="https://wa.me/221770874619"
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{
                                color: '#25D366',
                                textDecoration: 'none',
                                fontWeight: 600,
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    color: '#128C7E',
                                    textDecoration: 'underline'
                                }
                            }}
                        >
                            Fatima Kanouté
                        </Typography>
                    </Typography>
                </Box>
            </Container>
        </Box>
    )
}

export default Footer