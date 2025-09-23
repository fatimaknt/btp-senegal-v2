import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
    Box,
    Container,
    Typography,
    Grid,
    TextField,
    Button,
    IconButton,
    Divider,
    Avatar,
    Snackbar,
    Alert
} from '@mui/material'
import {
    Email as EmailIcon,
    Phone as PhoneIcon,
    LocationOn as LocationIcon,
    Facebook as FacebookIcon,
    Twitter as TwitterIcon,
    Instagram as InstagramIcon,
    LinkedIn as LinkedInIcon
} from '@mui/icons-material'

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear()
    const [email, setEmail] = useState('')
    const [isSubscribing, setIsSubscribing] = useState(false)
    const [showSuccess, setShowSuccess] = useState(false)
    const [showError, setShowError] = useState(false)

    const handleNewsletterSubscribe = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!email.trim()) return

        setIsSubscribing(true)
        try {
            // Simulation d'un appel API - remplacez par votre vraie logique
            await new Promise(resolve => setTimeout(resolve, 1000))

            // Ici vous pouvez ajouter votre logique d'abonnement
            // Par exemple : await subscribeToNewsletter(email)

            setShowSuccess(true)
            setEmail('')
        } catch (error) {
            setShowError(true)
        } finally {
            setIsSubscribing(false)
        }
    }

    const footerSections = [
        {
            title: 'Annuaire',
            links: [
                { name: 'Rechercher une entreprise', href: '/annuaire' },
                { name: 'Catégories', href: '/categories' },
                { name: 'Villes du Sénégal', href: '/villes' },
                { name: 'Entreprises certifiées', href: '/annuaire?verified=true' }
            ]
        },
        {
            title: 'Services',
            links: [
                { name: 'Inscrire mon entreprise', href: '/auth/register' },
                { name: 'Espace professionnel', href: '/dashboard' },
                { name: 'Support client', href: '/support' },
                { name: 'API Développeurs', href: '/api' }
            ]
        },
        {
            title: 'Informations',
            links: [
                { name: 'À propos', href: '/about' },
                { name: 'Blog BTP', href: '/blog' },
                { name: 'Actualités secteur', href: '/actualites' },
                { name: 'Guides pratiques', href: '/guides' }
            ]
        }
    ]

    const socialLinks = [
        { name: 'Facebook', icon: FacebookIcon, href: '#', color: '#1877F2' },
        { name: 'Twitter', icon: TwitterIcon, href: '#', color: '#1DA1F2' },
        { name: 'Instagram', icon: InstagramIcon, href: '#', color: '#E4405F' },
        { name: 'LinkedIn', icon: LinkedInIcon, href: '#', color: '#0A66C2' }
    ]

    return (
        <Box component="footer">
            {/* Newsletter Section */}
            <Box sx={{
                backgroundColor: '#f97316',
                color: 'white',
                py: 10,
                position: 'relative',
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '3px',
                    background: 'linear-gradient(90deg, #fbbf24, #f97316, #ea580c)'
                },
                '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '1px',
                    background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)'
                }
            }}>
                <Container maxWidth="lg">
                    <Box sx={{ textAlign: 'center', maxWidth: '600px', mx: 'auto' }}>
                        <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
                            📧 Restez informé des actualités BTP au Sénégal
                        </Typography>
                        <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
                            Recevez chaque semaine notre newsletter avec les dernières entreprises, actualités et opportunités du secteur.
                        </Typography>
                        <Box
                            component="form"
                            onSubmit={handleNewsletterSubscribe}
                            sx={{
                                display: 'flex',
                                flexDirection: { xs: 'column', sm: 'row' },
                                gap: 2,
                                maxWidth: '400px',
                                mx: 'auto'
                            }}
                        >
                            <TextField
                                fullWidth
                                placeholder="Votre adresse email"
                                variant="outlined"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                type="email"
                                required
                                disabled={isSubscribing}
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        backgroundColor: 'white',
                                        borderRadius: 2,
                                        '& fieldset': {
                                            borderColor: 'rgba(255, 255, 255, 0.3)'
                                        },
                                        '&:hover fieldset': {
                                            borderColor: 'rgba(255, 255, 255, 0.5)'
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: 'white'
                                        }
                                    }
                                }}
                            />
                            <Button
                                type="submit"
                                variant="contained"
                                disabled={isSubscribing || !email.trim()}
                                sx={{
                                    backgroundColor: 'white',
                                    color: '#f97316',
                                    fontWeight: 600,
                                    px: 4,
                                    py: 2,
                                    borderRadius: 2,
                                    minWidth: '120px',
                                    '&:hover': {
                                        backgroundColor: '#f8fafc',
                                        transform: 'translateY(-1px)'
                                    },
                                    '&:disabled': {
                                        backgroundColor: 'rgba(255, 255, 255, 0.5)',
                                        color: 'rgba(249, 115, 22, 0.5)'
                                    }
                                }}
                            >
                                {isSubscribing ? 'Abonnement...' : 'S\'abonner'}
                            </Button>
                        </Box>
                    </Box>
                </Container>
            </Box>

            {/* Main Footer Content */}
            <Box sx={{
                py: 10,
                background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #374151 100%)',
                color: 'white',
                position: 'relative',
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '2px',
                    background: 'linear-gradient(90deg, transparent, rgba(249, 115, 22, 0.8), transparent)'
                },
                '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '1px',
                    background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent)'
                }
            }}>
                <Container maxWidth="lg">
                    <Grid container spacing={8}>
                        {/* Logo et description */}
                        <Grid item xs={12} md={4}>
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                                <Avatar
                                    src="/images/logos/logo.jpeg"
                                    sx={{
                                        width: 60,
                                        height: 60,
                                        mr: 2,
                                        border: '3px solid rgba(249, 115, 22, 0.3)',
                                        boxShadow: '0 4px 15px rgba(249, 115, 22, 0.3)'
                                    }}
                                >
                                    🏗️
                                </Avatar>
                                <Box>
                                    <Typography variant="h5" sx={{ fontWeight: 700, color: 'white' }}>
                                        BTP Sénégal
                                    </Typography>
                                    <Typography variant="caption" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                                        Annuaire professionnel
                                    </Typography>
                                </Box>
                            </Box>

                            <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)', mb: 4, lineHeight: 1.6 }}>
                                La plateforme de référence pour trouver les meilleurs professionnels du BTP au Sénégal.
                                Plus de 1000 entreprises certifiées. 🇸🇳
                            </Typography>

                            {/* Emojis features */}



                            {/* Contact Info */}
                            <Box sx={{ space: 2 }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                    <LocationIcon sx={{ color: '#f97316', mr: 1, fontSize: 20 }} />
                                    <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                                        Dakar, Sénégal
                                    </Typography>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                    <PhoneIcon sx={{ color: '#f97316', mr: 1, fontSize: 20 }} />
                                    <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                                        +221 33 XXX XX XX
                                    </Typography>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <EmailIcon sx={{ color: '#f97316', mr: 1, fontSize: 20 }} />
                                    <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                                        contact@btp-senegal.sn
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>

                        {/* Footer Sections */}
                        <Grid item xs={12} sm={4} md={2.67} sx={{ pr: { md: 4 } }}>
                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'flex-start'
                            }}>
                                <Typography variant="h6" sx={{ fontWeight: 600, mb: 3, color: '#f97316' }}>
                                    Annuaire
                                </Typography>
                                <Box sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: 1.5
                                }}>
                                    {footerSections[0].links.map((link) => (
                                        <Typography
                                            key={link.name}
                                            component={Link}
                                            to={link.href}
                                            variant="body2"
                                            sx={{
                                                color: 'rgba(255, 255, 255, 0.8)',
                                                textDecoration: 'none',
                                                transition: 'all 0.3s ease',
                                                '&:hover': {
                                                    color: '#f97316',
                                                    transform: 'translateX(4px)'
                                                }
                                            }}
                                        >
                                            {link.name}
                                        </Typography>
                                    ))}
                                </Box>
                            </Box>
                        </Grid>

                        <Grid item xs={12} sm={4} md={2.67} sx={{ px: { md: 2 } }}>
                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center'
                            }}>
                                <Typography variant="h6" sx={{ fontWeight: 600, mb: 3, color: '#f97316' }}>
                                    Services
                                </Typography>
                                <Box sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: 1.5
                                }}>
                                    {footerSections[1].links.map((link) => (
                                        <Typography
                                            key={link.name}
                                            component={Link}
                                            to={link.href}
                                            variant="body2"
                                            sx={{
                                                color: 'rgba(255, 255, 255, 0.8)',
                                                textDecoration: 'none',
                                                transition: 'all 0.3s ease',
                                                '&:hover': {
                                                    color: '#f97316',
                                                    transform: 'translateX(4px)'
                                                }
                                            }}
                                        >
                                            {link.name}
                                        </Typography>
                                    ))}
                                </Box>
                            </Box>
                        </Grid>

                        <Grid item xs={12} sm={4} md={2.67} sx={{ pl: { md: 4 } }}>
                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'flex-end'
                            }}>
                                <Typography variant="h6" sx={{ fontWeight: 600, mb: 3, color: '#f97316' }}>
                                    Informations
                                </Typography>
                                <Box sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: 1.5
                                }}>
                                    {footerSections[2].links.map((link) => (
                                        <Typography
                                            key={link.name}
                                            component={Link}
                                            to={link.href}
                                            variant="body2"
                                            sx={{
                                                color: 'rgba(255, 255, 255, 0.8)',
                                                textDecoration: 'none',
                                                transition: 'all 0.3s ease',
                                                '&:hover': {
                                                    color: '#f97316',
                                                    transform: 'translateX(4px)'
                                                }
                                            }}
                                        >
                                            {link.name}
                                        </Typography>
                                    ))}
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* Bottom Footer */}
            <Box sx={{
                py: 4,
                backgroundColor: '#0f172a',
                borderTop: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
                <Container maxWidth="lg">
                    <Box sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: 2
                    }}>
                        <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.6)' }}>
                            © {currentYear} Annuaire BTP Sénégal. Tous droits réservés.
                        </Typography>

                        {/* Social Links */}
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.6)', mr: 2 }}>
                                Suivez-nous :
                            </Typography>
                            {socialLinks.map((social) => (
                                <IconButton
                                    key={social.name}
                                    component="a"
                                    href={social.href}
                                    sx={{
                                        color: 'rgba(255, 255, 255, 0.6)',
                                        '&:hover': {
                                            color: social.color,
                                            transform: 'translateY(-2px)',
                                            backgroundColor: 'rgba(255, 255, 255, 0.1)'
                                        }
                                    }}
                                >
                                    <social.icon />
                                </IconButton>
                            ))}
                        </Box>

                        {/* Legal Links */}
                        <Box sx={{ display: 'flex', gap: 2 }}>
                            <Typography
                                component={Link}
                                to="/legal/privacy"
                                variant="body2"
                                sx={{
                                    color: 'rgba(255, 255, 255, 0.6)',
                                    textDecoration: 'none',
                                    '&:hover': { color: '#f97316' }
                                }}
                            >
                                Confidentialité
                            </Typography>
                            <Typography
                                component={Link}
                                to="/legal/terms"
                                variant="body2"
                                sx={{
                                    color: 'rgba(255, 255, 255, 0.6)',
                                    textDecoration: 'none',
                                    '&:hover': { color: '#f97316' }
                                }}
                            >
                                CGU
                            </Typography>
                        </Box>
                    </Box>
                </Container>
            </Box>

            {/* Notifications */}
            <Snackbar
                open={showSuccess}
                autoHideDuration={4000}
                onClose={() => setShowSuccess(false)}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            >
                <Alert
                    onClose={() => setShowSuccess(false)}
                    severity="success"
                    sx={{ width: '100%' }}
                >
                    ✅ Abonnement réussi ! Vous recevrez bientôt notre newsletter.
                </Alert>
            </Snackbar>

            <Snackbar
                open={showError}
                autoHideDuration={4000}
                onClose={() => setShowError(false)}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            >
                <Alert
                    onClose={() => setShowError(false)}
                    severity="error"
                    sx={{ width: '100%' }}
                >
                    ❌ Erreur lors de l'abonnement. Veuillez réessayer.
                </Alert>
            </Snackbar>
        </Box>
    )
}

export default Footer