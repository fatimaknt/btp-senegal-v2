import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Box, Container, Typography, TextField, Button, Card, CardContent, InputAdornment, IconButton, Alert, Snackbar, Avatar, Divider } from '@mui/material';
import { Email as EmailIcon, Lock as LockIcon, Visibility, VisibilityOff, ArrowForward as ArrowForwardIcon } from '@mui/icons-material';
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [showError, setShowError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();
    // Identifiants admin par défaut
    const ADMIN_EMAIL = 'contact@btpsenegal.com';
    const ADMIN_PASSWORD = 'btp2025';
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setShowError(false);
        try {
            // Vérification simple des identifiants
            if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
                // Stocker la session admin
                localStorage.setItem('btp_admin_session', 'true');
                localStorage.setItem('btp_admin_email', email);
                localStorage.setItem('btp_admin_login_time', new Date().toISOString());
                // Rediriger immédiatement vers l'admin
                console.log('Admin connecté, redirection vers /admin');
                navigate('/admin', { replace: true });
            }
            else {
                setErrorMessage('Email ou mot de passe incorrect');
                setShowError(true);
            }
        }
        catch (error) {
            setErrorMessage('Une erreur est survenue lors de la connexion');
            setShowError(true);
        }
        finally {
            setIsLoading(false);
        }
    };
    const handleTogglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    return (_jsxs(Box, { sx: {
            minHeight: '100vh',
            background: 'linear-gradient(135deg, #f97316 0%, #fb923c 50%, #ea580c 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            py: 4
        }, children: [_jsx(Container, { maxWidth: "sm", children: _jsx(Card, { sx: {
                        borderRadius: 3,
                        boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                        overflow: 'hidden'
                    }, children: _jsxs(CardContent, { sx: { p: 4 }, children: [_jsxs(Box, { sx: { textAlign: 'center', mb: 4 }, children: [_jsx(Avatar, { sx: {
                                            width: 80,
                                            height: 80,
                                            bgcolor: '#f97316',
                                            mx: 'auto',
                                            mb: 2
                                        }, children: _jsx(EmailIcon, { sx: { fontSize: 40 } }) }), _jsx(Typography, { variant: "h4", sx: {
                                            fontWeight: 700,
                                            color: '#1e293b',
                                            mb: 1
                                        }, children: "Connexion" }), _jsx(Typography, { variant: "body1", sx: {
                                            color: '#6b7280',
                                            mb: 3
                                        }, children: "Connectez-vous \u00E0 votre compte" })] }), _jsxs(Box, { component: "form", onSubmit: handleSubmit, sx: { mb: 3 }, children: [_jsx(TextField, { fullWidth: true, label: "Email", type: "email", value: email, onChange: (e) => setEmail(e.target.value), required: true, sx: { mb: 3 }, InputProps: {
                                            startAdornment: (_jsx(InputAdornment, { position: "start", children: _jsx(EmailIcon, { sx: { color: '#f97316' } }) })),
                                        } }), _jsx(TextField, { fullWidth: true, label: "Mot de passe", type: showPassword ? 'text' : 'password', value: password, onChange: (e) => setPassword(e.target.value), required: true, sx: { mb: 3 }, InputProps: {
                                            startAdornment: (_jsx(InputAdornment, { position: "start", children: _jsx(LockIcon, { sx: { color: '#f97316' } }) })),
                                            endAdornment: (_jsx(InputAdornment, { position: "end", children: _jsx(IconButton, { onClick: handleTogglePasswordVisibility, edge: "end", children: showPassword ? _jsx(VisibilityOff, {}) : _jsx(Visibility, {}) }) })),
                                        } }), _jsx(Button, { type: "submit", fullWidth: true, variant: "contained", size: "large", disabled: isLoading, sx: {
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
                                        }, endIcon: _jsx(ArrowForwardIcon, {}), children: isLoading ? 'Connexion...' : 'Se connecter' })] }), _jsx(Divider, { sx: { my: 3 } }), _jsx(Box, { sx: { textAlign: 'center' }, children: _jsx(Link, { to: "/", style: {
                                        color: '#f97316',
                                        textDecoration: 'none',
                                        fontWeight: 500
                                    }, children: "\u2190 Retour \u00E0 l'accueil" }) })] }) }) }), _jsx(Snackbar, { open: showError, autoHideDuration: 6000, onClose: () => setShowError(false), anchorOrigin: { vertical: 'top', horizontal: 'center' }, children: _jsx(Alert, { onClose: () => setShowError(false), severity: "error", sx: { width: '100%' }, children: errorMessage }) })] }));
};
export default Login;
