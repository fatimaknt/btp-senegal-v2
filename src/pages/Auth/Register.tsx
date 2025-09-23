import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
    Box,
    Container,
    Typography,
    TextField,
    Button,
    Card,
    CardContent,
    FormControlLabel,
    Checkbox,
    InputAdornment,
    MenuItem,
    Grid,
    Alert,
    Snackbar,
    Avatar,
    Divider
} from '@mui/material'
import {
    Business as BusinessIcon,
    Person as PersonIcon,
    Email as EmailIcon,
    Phone as PhoneIcon,
    LocationOn as LocationIcon,
    Lock as LockIcon,
    ArrowForward as ArrowForwardIcon
} from '@mui/icons-material'

const Register: React.FC = () => {
    const [formData, setFormData] = useState({
        companyName: '',
        ownerName: '',
        email: '',
        phone: '',
        city: '',
        password: '',
        confirmPassword: ''
    })
    const [isLoading, setIsLoading] = useState(false)
    const [showSuccess, setShowSuccess] = useState(false)
    const [showError, setShowError] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const navigate = useNavigate()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)
        setShowError(false)

        // Validation des mots de passe
        if (formData.password !== formData.confirmPassword) {
            setErrorMessage('Les mots de passe ne correspondent pas')
            setShowError(true)
            setIsLoading(false)
            return
        }

        try {
            // Simulation d'inscription - remplacez par votre vraie logique
            await new Promise(resolve => setTimeout(resolve, 2000))

            // Ici vous pouvez ajouter votre logique d'inscription
            // Par exemple : await signUp(formData)

            setShowSuccess(true)
            setTimeout(() => {
                navigate('/auth/login')
            }, 2000)
        } catch (error) {
            setErrorMessage('Erreur lors de l\'inscription. Veuillez réessayer.')
            setShowError(true)
        } finally {
            setIsLoading(false)
        }
    }

    const handleInputChange = (field: string, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }))
    }

    const cities = [
        'Dakar', 'Pikine', 'Thiès', 'Rufisque', 'Saint-Louis',
        'Kaolack', 'Ziguinchor', 'Diourbel', 'Tambacounda', 'Kolda'
    ]

    return (
        <Box sx={{
            minHeight: '100vh',
            background: 'linear-gradient(135deg, #f97316 0%, #fb923c 50%, #ea580c 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            py: 4,
            px: 2,
            position: 'relative',
            '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'radial-gradient(circle at 20% 80%, rgba(251, 191, 36, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(249, 115, 22, 0.2) 0%, transparent 50%)',
                pointerEvents: 'none'
            }
        }}>
            <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
                {/* En-tête */}
                <Box sx={{ textAlign: 'center', mb: 6 }}>
                    <Avatar
                        src="/logo.jpeg"
                        sx={{
                            width: 100,
                            height: 100,
                            mx: 'auto',
                            mb: 4,
                            background: 'rgba(255, 255, 255, 0.2)',
                            backdropFilter: 'blur(20px)',
                            border: '2px solid rgba(255, 255, 255, 0.3)',
                            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
                        }}
                    />
                    <Typography
                        variant="h2"
                        sx={{
                            fontWeight: 900,
                            mb: 3,
                            color: '#ffffff',
                            textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                            fontSize: { xs: '2rem', md: '3rem' }
                        }}
                    >
                        Inscription Professionnelle
                    </Typography>
                    <Typography
                        variant="h5"
                        sx={{
                            color: 'rgba(255, 255, 255, 0.9)',
                            fontWeight: 500,
                            textShadow: '1px 1px 2px rgba(0,0,0,0.2)',
                            maxWidth: '600px',
                            mx: 'auto',
                            lineHeight: 1.4
                        }}
                    >
                        Rejoignez +1000 professionnels du BTP au Sénégal 🇸🇳
                    </Typography>
                </Box>


                {/* Formulaire d'inscription */}
                <Card sx={{
                    background: 'rgba(255, 255, 255, 0.95)',
                    backdropFilter: 'blur(20px)',
                    borderRadius: 4,
                    border: '2px solid rgba(255, 255, 255, 0.3)',
                    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
                    overflow: 'hidden'
                }}>
                    <CardContent sx={{ p: 5 }}>
                        <Typography
                            variant="h4"
                            sx={{
                                textAlign: 'center',
                                mb: 5,
                                fontWeight: 800,
                                background: 'linear-gradient(45deg, #f97316 0%, #fb923c 50%, #ea580c 100%)',
                                backgroundClip: 'text',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                textShadow: '2px 2px 4px rgba(249, 115, 22, 0.1)'
                            }}
                        >
                            Informations de votre entreprise
                        </Typography>

                        <Box component="form" onSubmit={handleSubmit}>
                            <Grid container spacing={3}>
                                {/* Informations entreprise */}
                                <Grid item xs={12} md={6}>
                                    <TextField
                                        fullWidth
                                        label="Nom de l'entreprise"
                                        placeholder="Ex: BTP Services Dakar"
                                        value={formData.companyName}
                                        onChange={(e) => handleInputChange('companyName', e.target.value)}
                                        required
                                        sx={{ mb: 3 }}
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <BusinessIcon sx={{ color: '#f97316' }} />
                                                </InputAdornment>
                                            ),
                                        }}
                                    />
                                </Grid>

                                <Grid item xs={12} md={6}>
                                    <TextField
                                        fullWidth
                                        label="Nom du responsable"
                                        placeholder="Votre nom complet"
                                        value={formData.ownerName}
                                        onChange={(e) => handleInputChange('ownerName', e.target.value)}
                                        required
                                        sx={{ mb: 3 }}
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <PersonIcon sx={{ color: '#f97316' }} />
                                                </InputAdornment>
                                            ),
                                        }}
                                    />
                                </Grid>

                                {/* Contact */}
                                <Grid item xs={12} md={6}>
                                    <TextField
                                        fullWidth
                                        label="Email professionnel"
                                        type="email"
                                        placeholder="contact@votre-entreprise.sn"
                                        value={formData.email}
                                        onChange={(e) => handleInputChange('email', e.target.value)}
                                        required
                                        sx={{ mb: 3 }}
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <EmailIcon sx={{ color: '#f97316' }} />
                                                </InputAdornment>
                                            ),
                                        }}
                                    />
                                </Grid>

                                <Grid item xs={12} md={6}>
                                    <TextField
                                        fullWidth
                                        label="Téléphone"
                                        type="tel"
                                        placeholder="+221 XX XXX XX XX"
                                        value={formData.phone}
                                        onChange={(e) => handleInputChange('phone', e.target.value)}
                                        required
                                        sx={{ mb: 3 }}
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <PhoneIcon sx={{ color: '#f97316' }} />
                                                </InputAdornment>
                                            ),
                                        }}
                                    />
                                </Grid>

                                {/* Localisation */}
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        select
                                        label="Ville principale d'activité"
                                        value={formData.city}
                                        onChange={(e) => handleInputChange('city', e.target.value)}
                                        required
                                        sx={{ mb: 3, '& .MuiOutlinedInput-root': { height: '60px' } }}
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <LocationIcon sx={{ color: '#f97316' }} />
                                                </InputAdornment>
                                            ),
                                        }}
                                    >
                                        <MenuItem value="">Sélectionnez votre ville</MenuItem>
                                        {cities.map((city) => (
                                            <MenuItem key={city} value={city}>{city}</MenuItem>
                                        ))}
                                    </TextField>
                                </Grid>

                                {/* Mot de passe */}
                                <Grid item xs={12} md={6}>
                                    <TextField
                                        fullWidth
                                        label="Mot de passe"
                                        type="password"
                                        placeholder="Minimum 8 caractères"
                                        value={formData.password}
                                        onChange={(e) => handleInputChange('password', e.target.value)}
                                        required
                                        sx={{ mb: 3 }}
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <LockIcon sx={{ color: '#f97316' }} />
                                                </InputAdornment>
                                            ),
                                        }}
                                    />
                                </Grid>

                                <Grid item xs={12} md={6}>
                                    <TextField
                                        fullWidth
                                        label="Confirmer le mot de passe"
                                        type="password"
                                        placeholder="Confirmer votre mot de passe"
                                        value={formData.confirmPassword}
                                        onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                                        required
                                        sx={{ mb: 3 }}
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <LockIcon sx={{ color: '#f97316' }} />
                                                </InputAdornment>
                                            ),
                                        }}
                                    />
                                </Grid>

                                {/* Conditions */}
                                <Grid item xs={12}>
                                    <FormControlLabel
                                        control={<Checkbox sx={{ color: '#f97316' }} required />}
                                        label={
                                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                                J'accepte les{' '}
                                                <Typography
                                                    component={Link}
                                                    to="/legal/terms"
                                                    sx={{ color: '#f97316', textDecoration: 'none' }}
                                                >
                                                    conditions d'utilisation
                                                </Typography>
                                                {' '}et la{' '}
                                                <Typography
                                                    component={Link}
                                                    to="/legal/privacy"
                                                    sx={{ color: '#f97316', textDecoration: 'none' }}
                                                >
                                                    politique de confidentialité
                                                </Typography>
                                            </Typography>
                                        }
                                    />
                                </Grid>

                                {/* Bouton d'inscription */}
                                <Grid item xs={12}>
                                    <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        disabled={isLoading}
                                        sx={{
                                            height: 60,
                                            background: 'linear-gradient(135deg, #f97316 0%, #fb923c 100%)',
                                            borderRadius: 4,
                                            fontWeight: 800,
                                            fontSize: '1.2rem',
                                            textTransform: 'none',
                                            boxShadow: '0 8px 25px rgba(249, 115, 22, 0.4)',
                                            border: '2px solid rgba(255, 255, 255, 0.2)',
                                            '&:hover': {
                                                background: 'linear-gradient(135deg, #ea580c 0%, #f97316 100%)',
                                                transform: 'translateY(-3px)',
                                                boxShadow: '0 12px 35px rgba(249, 115, 22, 0.5)'
                                            },
                                            '&:disabled': {
                                                background: 'rgba(249, 115, 22, 0.3)',
                                                transform: 'none'
                                            }
                                        }}
                                        endIcon={isLoading ? null : <ArrowForwardIcon sx={{ fontSize: 28 }} />}
                                    >
                                        {isLoading ? 'Création du compte...' : 'Créer mon compte professionnel'}
                                    </Button>
                                </Grid>
                            </Grid>
                        </Box>

                        {/* Divider */}
                        <Divider sx={{ my: 3 }}>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                Ou
                            </Typography>
                        </Divider>

                        {/* Lien vers connexion */}
                        <Box sx={{ textAlign: 'center' }}>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                Déjà un compte ?{' '}
                                <Typography
                                    component={Link}
                                    to="/auth/login"
                                    sx={{
                                        color: '#f97316',
                                        fontWeight: 600,
                                        textDecoration: 'none',
                                        '&:hover': { textDecoration: 'underline' }
                                    }}
                                >
                                    Se connecter
                                </Typography>
                            </Typography>
                        </Box>
                    </CardContent>
                </Card>

                {/* Garanties */}
                <Box sx={{ mt: 6 }}>
                    <Box sx={{
                        background: 'rgba(255, 255, 255, 0.15)',
                        backdropFilter: 'blur(20px)',
                        borderRadius: 4,
                        p: 4,
                        border: '2px solid rgba(255, 255, 255, 0.2)',
                        textAlign: 'center',
                        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
                    }}>
                        <Typography variant="h5" sx={{ fontWeight: 800, mb: 3, color: '#ffffff', textShadow: '1px 1px 2px rgba(0,0,0,0.3)' }}>
                            🛡️ Garanties de sérieux
                        </Typography>
                        <Grid container spacing={3} sx={{ justifyContent: 'center' }}>
                            <Grid item>
                                <Typography variant="h6" sx={{ color: 'rgba(255, 255, 255, 0.9)', fontWeight: 600, textShadow: '1px 1px 2px rgba(0,0,0,0.2)' }}>
                                    ✓ Vérification manuelle
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="h6" sx={{ color: 'rgba(255, 255, 255, 0.9)', fontWeight: 600, textShadow: '1px 1px 2px rgba(0,0,0,0.2)' }}>
                                    ✓ Support dédié
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="h6" sx={{ color: 'rgba(255, 255, 255, 0.9)', fontWeight: 600, textShadow: '1px 1px 2px rgba(0,0,0,0.2)' }}>
                                    ✓ Satisfaction garantie
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>

                {/* Notifications */}
                <Snackbar
                    open={showSuccess}
                    autoHideDuration={4000}
                    onClose={() => setShowSuccess(false)}
                    anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                >
                    <Alert
                        onClose={() => setShowSuccess(false)}
                        severity="success"
                        sx={{ width: '100%' }}
                    >
                        ✅ Inscription réussie ! Redirection vers la connexion...
                    </Alert>
                </Snackbar>

                <Snackbar
                    open={showError}
                    autoHideDuration={4000}
                    onClose={() => setShowError(false)}
                    anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                >
                    <Alert
                        onClose={() => setShowError(false)}
                        severity="error"
                        sx={{ width: '100%' }}
                    >
                        {errorMessage}
                    </Alert>
                </Snackbar>
            </Container>
        </Box>
    )
}

export default Register
