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

    // Identifiants admin par défaut
    const ADMIN_EMAIL = 'contact@btpsenegal.com'
    const ADMIN_PASSWORD = 'btp2025'

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)
        setShowError(false)

        try {
            // Vérification simple des identifiants
            if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
                // Stocker la session admin
                localStorage.setItem('btp_admin_session', 'true')
                localStorage.setItem('btp_admin_email', email)
                localStorage.setItem('btp_admin_login_time', new Date().toISOString())

                // Rediriger immédiatement vers l'admin
                console.log('Admin connecté, redirection vers /admin')
                navigate('/admin', { replace: true })
            } else {
                setErrorMessage('Email ou mot de passe incorrect')
                setShowError(true)
            }
        } catch (error) {
            setErrorMessage('Une erreur est survenue lors de la connexion')
            setShowError(true)
        } finally {
            setIsLoading(false)
        }
    }

    const handleTogglePasswordVisibility = () => {
        setShowPassword(!showPassword)
    }

    return (
        <Box sx={{
            minHeight: '100vh',
            background: 'linear-gradient(135deg, #f97316 0%, #fb923c 50%, #ea580c 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            py: 4
        }}>
            <Container maxWidth="sm">
                <Card sx={{
                    borderRadius: 3,
                    boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                    overflow: 'hidden'
                }}>
                    <CardContent sx={{ p: 4 }}>
                        {/* Header */}
                        <Box sx={{ textAlign: 'center', mb: 4 }}>
                            <Avatar sx={{
                                width: 80,
                                height: 80,
                                bgcolor: '#f97316',
                                mx: 'auto',
                                mb: 2
                            }}>
                                <EmailIcon sx={{ fontSize: 40 }} />
                            </Avatar>
                            <Typography variant="h4" sx={{
                                fontWeight: 700,
                                color: '#1e293b',
                                mb: 1
                            }}>
                                Connexion
                            </Typography>
                            <Typography variant="body1" sx={{
                                color: '#6b7280',
                                mb: 3
                            }}>
                                Connectez-vous à votre compte
                            </Typography>
                        </Box>

                        {/* Formulaire */}
                        <Box component="form" onSubmit={handleSubmit} sx={{ mb: 3 }}>
                            <TextField
                                fullWidth
                                label="Email"
                                type="email"
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

                            <TextField
                                fullWidth
                                label="Mot de passe"
                                type={showPassword ? 'text' : 'password'}
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
                                                onClick={handleTogglePasswordVisibility}
                                                edge="end"
                                            >
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                            />

                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                size="large"
                                disabled={isLoading}
                                sx={{
                                    bgcolor: '#f97316',
                                    color: 'white',
                                    py: 1.5,
                                    fontSize: '1.1rem',
                                    fontWeight: 600,
                                    borderRadius: 2,
                                    textTransform: 'none',
                                    '&:hover': {
                                        bgcolor: '#ea580c',
                                    }
                                }}
                                endIcon={<ArrowForwardIcon />}
                            >
                                {isLoading ? 'Connexion...' : 'Se connecter'}
                            </Button>
                        </Box>

                        <Divider sx={{ my: 3 }} />

                        {/* Liens */}
                        <Box sx={{ textAlign: 'center' }}>
                            <Link
                                to="/"
                                style={{
                                    color: '#f97316',
                                    textDecoration: 'none',
                                    fontWeight: 500
                                }}
                            >
                                ← Retour à l'accueil
                            </Link>
                        </Box>
                    </CardContent>
                </Card>
            </Container>

            {/* Snackbar pour les erreurs */}
            <Snackbar
                open={showError}
                autoHideDuration={6000}
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
        </Box>
    )
}

export default Login