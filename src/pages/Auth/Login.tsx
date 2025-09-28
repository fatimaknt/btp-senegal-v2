import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
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
    IconButton,
    Alert,
    Snackbar,
    Avatar,
    Divider
} from '@mui/material'
import {
    Email as EmailIcon,
    Lock as LockIcon,
    Visibility,
    VisibilityOff,
    ArrowForward as ArrowForwardIcon
} from '@mui/icons-material'

const Login: React.FC = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [showError, setShowError] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const navigate = useNavigate()
    const { signIn, isAuthenticated, isAdmin } = useAuth()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)
        setShowError(false)

        try {
            const { data, error } = await signIn(email, password)

            if (error) {
                setErrorMessage(error.message)
                setShowError(true)
                return
            }

            // Redirection après connexion réussie
            if (isAdmin()) {
                navigate('/admin')
            } else {
                navigate('/')
            }
        } catch (error) {
            setErrorMessage('Email ou mot de passe incorrect')
            setShowError(true)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <Box sx={{
            minHeight: '100vh',
            background: 'linear-gradient(135deg, rgba(249, 115, 22, 0.05) 0%, rgba(251, 191, 36, 0.1) 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            py: 4,
            px: 2
        }}>
            <Container maxWidth="sm">
                {/* Logo et titre */}
                <Box sx={{ textAlign: 'center', mb: 6 }}>
                    <Avatar
                        src="/logo.jpeg"
                        sx={{
                            width: 80,
                            height: 80,
                            mx: 'auto',
                            mb: 3,
                            background: 'linear-gradient(135deg, #f97316 0%, #fb923c 100%)',
                            boxShadow: '0 8px 25px rgba(249, 115, 22, 0.3)'
                        }}
                    />
                    <Typography variant="h3" sx={{ fontWeight: 800, mb: 2, color: '#1f2937' }}>
                        Connexion
                    </Typography>
                    <Typography variant="h6" sx={{ color: 'text.secondary', fontWeight: 500 }}>
                        Accédez à votre espace professionnel BTP
                    </Typography>
                </Box>

                {/* Formulaire de connexion */}
                <Card sx={{
                    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
                    borderRadius: 4,
                    border: '1px solid rgba(249, 115, 22, 0.1)'
                }}>
                    <CardContent sx={{ p: 4 }}>
                        <Typography variant="h5" sx={{ textAlign: 'center', mb: 4, fontWeight: 700, color: '#f97316' }}>
                            Bienvenue ! 🇸🇳
                        </Typography>

                        <Box component="form" onSubmit={handleSubmit} sx={{ mb: 3 }}>
                            {/* Email */}
                            <TextField
                                fullWidth
                                label="Adresse email"
                                type="email"
                                placeholder="votre@email.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
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

                            {/* Mot de passe */}
                            <TextField
                                fullWidth
                                label="Mot de passe"
                                type={showPassword ? 'text' : 'password'}
                                placeholder="Votre mot de passe"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                sx={{ mb: 3 }}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <LockIcon sx={{ color: '#f97316' }} />
                                        </InputAdornment>
                                    ),
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                onClick={() => setShowPassword(!showPassword)}
                                                edge="end"
                                            >
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                            />

                            {/* Options */}
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                                <FormControlLabel
                                    control={<Checkbox sx={{ color: '#f97316' }} />}
                                    label="Se souvenir de moi"
                                />
                                <Typography
                                    component={Link}
                                    to="/auth/forgot-password"
                                    sx={{
                                        color: '#f97316',
                                        textDecoration: 'none',
                                        fontSize: '0.875rem',
                                        '&:hover': { textDecoration: 'underline' }
                                    }}
                                >
                                    Mot de passe oublié ?
                                </Typography>
                            </Box>

                            {/* Bouton de connexion */}
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                disabled={isLoading}
                                sx={{
                                    height: 50,
                                    background: 'linear-gradient(135deg, #f97316 0%, #fb923c 100%)',
                                    borderRadius: 3,
                                    fontWeight: 700,
                                    fontSize: '1.1rem',
                                    textTransform: 'none',
                                    boxShadow: '0 4px 15px rgba(249, 115, 22, 0.3)',
                                    '&:hover': {
                                        background: 'linear-gradient(135deg, #ea580c 0%, #f97316 100%)',
                                        transform: 'translateY(-2px)',
                                        boxShadow: '0 8px 25px rgba(249, 115, 22, 0.4)'
                                    },
                                    '&:disabled': {
                                        background: 'rgba(249, 115, 22, 0.3)'
                                    }
                                }}
                                endIcon={isLoading ? null : <ArrowForwardIcon />}
                            >
                                {isLoading ? 'Connexion...' : 'Se connecter'}
                            </Button>
                        </Box>

                        {/* Divider */}
                        <Divider sx={{ my: 3 }}>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                Ou
                            </Typography>
                        </Divider>

                        {/* Lien vers inscription */}
                        <Box sx={{ textAlign: 'center' }}>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                Pas encore de compte ?{' '}
                                <Typography
                                    component={Link}
                                    to="/auth/register"
                                    sx={{
                                        color: '#f97316',
                                        fontWeight: 600,
                                        textDecoration: 'none',
                                        '&:hover': { textDecoration: 'underline' }
                                    }}
                                >
                                    Créer un compte professionnel
                                </Typography>
                            </Typography>
                        </Box>
                    </CardContent>
                </Card>

                {/* Avantages */}
                <Box sx={{ mt: 4, textAlign: 'center' }}>
                    <Box sx={{
                        background: 'rgba(255, 255, 255, 0.8)',
                        backdropFilter: 'blur(10px)',
                        borderRadius: 3,
                        p: 3,
                        border: '1px solid rgba(249, 115, 22, 0.1)'
                    }}>
                        <Typography variant="body2" sx={{ mb: 2, fontWeight: 600, color: '#f97316' }}>
                            Rejoignez +1000 professionnels
                        </Typography>
                        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 4, flexWrap: 'wrap' }}>
                            <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                                ✓ Gestion complète
                            </Typography>
                            <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                                ✓ Plus de visibilité
                            </Typography>
                            <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                                ✓ Support 24/7
                            </Typography>
                        </Box>
                    </Box>
                </Box>

                {/* Notifications */}
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

export default Login
