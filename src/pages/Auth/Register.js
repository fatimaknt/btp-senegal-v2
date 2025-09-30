import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { Box, Container, Typography, TextField, Button, Card, CardContent, FormControlLabel, Checkbox, InputAdornment, MenuItem, Grid, Alert, Snackbar, Avatar, Divider } from '@mui/material';
import { Business as BusinessIcon, Person as PersonIcon, Email as EmailIcon, Phone as PhoneIcon, LocationOn as LocationIcon, Lock as LockIcon, ArrowForward as ArrowForwardIcon } from '@mui/icons-material';
const Register = () => {
    const [formData, setFormData] = useState({
        companyName: '',
        ownerName: '',
        email: '',
        phone: '',
        city: '',
        password: '',
        confirmPassword: ''
    });
    const [isLoading, setIsLoading] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [showError, setShowError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();
    const { signUp } = useAuth();
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setShowError(false);
        // Validation des mots de passe
        if (formData.password !== formData.confirmPassword) {
            setErrorMessage('Les mots de passe ne correspondent pas');
            setShowError(true);
            setIsLoading(false);
            return;
        }
        try {
            const { data, error } = await signUp(formData.email, formData.password, formData.ownerName);
            if (error) {
                setErrorMessage(error.message);
                setShowError(true);
                return;
            }
            setShowSuccess(true);
            setTimeout(() => {
                navigate('/auth/login');
            }, 2000);
        }
        catch (error) {
            setErrorMessage('Erreur lors de l\'inscription. Veuillez réessayer.');
            setShowError(true);
        }
        finally {
            setIsLoading(false);
        }
    };
    const handleInputChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };
    const cities = [
        'Dakar', 'Pikine', 'Thiès', 'Rufisque', 'Saint-Louis',
        'Kaolack', 'Ziguinchor', 'Diourbel', 'Tambacounda', 'Kolda'
    ];
    return (_jsx(Box, { sx: {
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
        }, children: _jsxs(Container, { maxWidth: "md", sx: { position: 'relative', zIndex: 1 }, children: [_jsxs(Box, { sx: { textAlign: 'center', mb: 6 }, children: [_jsx(Avatar, { src: "/logo.jpeg", sx: {
                                width: 100,
                                height: 100,
                                mx: 'auto',
                                mb: 4,
                                background: 'rgba(255, 255, 255, 0.2)',
                                backdropFilter: 'blur(20px)',
                                border: '2px solid rgba(255, 255, 255, 0.3)',
                                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
                            } }), _jsx(Typography, { variant: "h2", sx: {
                                fontWeight: 900,
                                mb: 3,
                                color: '#ffffff',
                                textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                                fontSize: { xs: '2rem', md: '3rem' }
                            }, children: "Inscription Professionnelle" }), _jsx(Typography, { variant: "h5", sx: {
                                color: 'rgba(255, 255, 255, 0.9)',
                                fontWeight: 500,
                                textShadow: '1px 1px 2px rgba(0,0,0,0.2)',
                                maxWidth: '600px',
                                mx: 'auto',
                                lineHeight: 1.4
                            }, children: "Rejoignez +1000 professionnels du BTP au S\u00E9n\u00E9gal \uD83C\uDDF8\uD83C\uDDF3" })] }), _jsx(Card, { sx: {
                        background: 'rgba(255, 255, 255, 0.95)',
                        backdropFilter: 'blur(20px)',
                        borderRadius: 4,
                        border: '2px solid rgba(255, 255, 255, 0.3)',
                        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
                        overflow: 'hidden'
                    }, children: _jsxs(CardContent, { sx: { p: 5 }, children: [_jsx(Typography, { variant: "h4", sx: {
                                    textAlign: 'center',
                                    mb: 5,
                                    fontWeight: 800,
                                    background: 'linear-gradient(45deg, #f97316 0%, #fb923c 50%, #ea580c 100%)',
                                    backgroundClip: 'text',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    textShadow: '2px 2px 4px rgba(249, 115, 22, 0.1)'
                                }, children: "Informations de votre entreprise" }), _jsx(Box, { component: "form", onSubmit: handleSubmit, children: _jsxs(Grid, { container: true, spacing: 3, children: [_jsx(Grid, { item: true, xs: 12, md: 6, children: _jsx(TextField, { fullWidth: true, label: "Nom de l'entreprise", placeholder: "Ex: BTP Services Dakar", value: formData.companyName, onChange: (e) => handleInputChange('companyName', e.target.value), required: true, sx: { mb: 3 }, InputProps: {
                                                    startAdornment: (_jsx(InputAdornment, { position: "start", children: _jsx(BusinessIcon, { sx: { color: '#f97316' } }) })),
                                                } }) }), _jsx(Grid, { item: true, xs: 12, md: 6, children: _jsx(TextField, { fullWidth: true, label: "Nom du responsable", placeholder: "Votre nom complet", value: formData.ownerName, onChange: (e) => handleInputChange('ownerName', e.target.value), required: true, sx: { mb: 3 }, InputProps: {
                                                    startAdornment: (_jsx(InputAdornment, { position: "start", children: _jsx(PersonIcon, { sx: { color: '#f97316' } }) })),
                                                } }) }), _jsx(Grid, { item: true, xs: 12, md: 6, children: _jsx(TextField, { fullWidth: true, label: "Email professionnel", type: "email", placeholder: "contact@votre-entreprise.sn", value: formData.email, onChange: (e) => handleInputChange('email', e.target.value), required: true, sx: { mb: 3 }, InputProps: {
                                                    startAdornment: (_jsx(InputAdornment, { position: "start", children: _jsx(EmailIcon, { sx: { color: '#f97316' } }) })),
                                                } }) }), _jsx(Grid, { item: true, xs: 12, md: 6, children: _jsx(TextField, { fullWidth: true, label: "T\u00E9l\u00E9phone", type: "tel", placeholder: "+221 XX XXX XX XX", value: formData.phone, onChange: (e) => handleInputChange('phone', e.target.value), required: true, sx: { mb: 3 }, InputProps: {
                                                    startAdornment: (_jsx(InputAdornment, { position: "start", children: _jsx(PhoneIcon, { sx: { color: '#f97316' } }) })),
                                                } }) }), _jsx(Grid, { item: true, xs: 12, children: _jsxs(TextField, { fullWidth: true, select: true, label: "Ville principale d'activit\u00E9", value: formData.city, onChange: (e) => handleInputChange('city', e.target.value), required: true, sx: { mb: 3, '& .MuiOutlinedInput-root': { height: '60px' } }, InputProps: {
                                                    startAdornment: (_jsx(InputAdornment, { position: "start", children: _jsx(LocationIcon, { sx: { color: '#f97316' } }) })),
                                                }, children: [_jsx(MenuItem, { value: "", children: "S\u00E9lectionnez votre ville" }), cities.map((city) => (_jsx(MenuItem, { value: city, children: city }, city)))] }) }), _jsx(Grid, { item: true, xs: 12, md: 6, children: _jsx(TextField, { fullWidth: true, label: "Mot de passe", type: "password", placeholder: "Minimum 8 caract\u00E8res", value: formData.password, onChange: (e) => handleInputChange('password', e.target.value), required: true, sx: { mb: 3 }, InputProps: {
                                                    startAdornment: (_jsx(InputAdornment, { position: "start", children: _jsx(LockIcon, { sx: { color: '#f97316' } }) })),
                                                } }) }), _jsx(Grid, { item: true, xs: 12, md: 6, children: _jsx(TextField, { fullWidth: true, label: "Confirmer le mot de passe", type: "password", placeholder: "Confirmer votre mot de passe", value: formData.confirmPassword, onChange: (e) => handleInputChange('confirmPassword', e.target.value), required: true, sx: { mb: 3 }, InputProps: {
                                                    startAdornment: (_jsx(InputAdornment, { position: "start", children: _jsx(LockIcon, { sx: { color: '#f97316' } }) })),
                                                } }) }), _jsx(Grid, { item: true, xs: 12, children: _jsx(FormControlLabel, { control: _jsx(Checkbox, { sx: { color: '#f97316' }, required: true }), label: _jsxs(Typography, { variant: "body2", sx: { color: 'text.secondary' }, children: ["J'accepte les", ' ', _jsx(Typography, { component: Link, to: "/legal/terms", sx: { color: '#f97316', textDecoration: 'none' }, children: "conditions d'utilisation" }), ' ', "et la", ' ', _jsx(Typography, { component: Link, to: "/legal/privacy", sx: { color: '#f97316', textDecoration: 'none' }, children: "politique de confidentialit\u00E9" })] }) }) }), _jsx(Grid, { item: true, xs: 12, children: _jsx(Button, { type: "submit", fullWidth: true, variant: "contained", disabled: isLoading, sx: {
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
                                                }, endIcon: isLoading ? null : _jsx(ArrowForwardIcon, { sx: { fontSize: 28 } }), children: isLoading ? 'Création du compte...' : 'Créer mon compte professionnel' }) })] }) }), _jsx(Divider, { sx: { my: 3 }, children: _jsx(Typography, { variant: "body2", sx: { color: 'text.secondary' }, children: "Ou" }) }), _jsx(Box, { sx: { textAlign: 'center' }, children: _jsxs(Typography, { variant: "body2", sx: { color: 'text.secondary' }, children: ["D\u00E9j\u00E0 un compte ?", ' ', _jsx(Typography, { component: Link, to: "/auth/login", sx: {
                                                color: '#f97316',
                                                fontWeight: 600,
                                                textDecoration: 'none',
                                                '&:hover': { textDecoration: 'underline' }
                                            }, children: "Se connecter" })] }) })] }) }), _jsx(Box, { sx: { mt: 6 }, children: _jsxs(Box, { sx: {
                            background: 'rgba(255, 255, 255, 0.15)',
                            backdropFilter: 'blur(20px)',
                            borderRadius: 4,
                            p: 4,
                            border: '2px solid rgba(255, 255, 255, 0.2)',
                            textAlign: 'center',
                            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
                        }, children: [_jsx(Typography, { variant: "h5", sx: { fontWeight: 800, mb: 3, color: '#ffffff', textShadow: '1px 1px 2px rgba(0,0,0,0.3)' }, children: "\uD83D\uDEE1\uFE0F Garanties de s\u00E9rieux" }), _jsxs(Grid, { container: true, spacing: 3, sx: { justifyContent: 'center' }, children: [_jsx(Grid, { item: true, children: _jsx(Typography, { variant: "h6", sx: { color: 'rgba(255, 255, 255, 0.9)', fontWeight: 600, textShadow: '1px 1px 2px rgba(0,0,0,0.2)' }, children: "\u2713 V\u00E9rification manuelle" }) }), _jsx(Grid, { item: true, children: _jsx(Typography, { variant: "h6", sx: { color: 'rgba(255, 255, 255, 0.9)', fontWeight: 600, textShadow: '1px 1px 2px rgba(0,0,0,0.2)' }, children: "\u2713 Support d\u00E9di\u00E9" }) }), _jsx(Grid, { item: true, children: _jsx(Typography, { variant: "h6", sx: { color: 'rgba(255, 255, 255, 0.9)', fontWeight: 600, textShadow: '1px 1px 2px rgba(0,0,0,0.2)' }, children: "\u2713 Satisfaction garantie" }) })] })] }) }), _jsx(Snackbar, { open: showSuccess, autoHideDuration: 4000, onClose: () => setShowSuccess(false), anchorOrigin: { vertical: 'top', horizontal: 'center' }, children: _jsx(Alert, { onClose: () => setShowSuccess(false), severity: "success", sx: { width: '100%' }, children: "\u2705 Inscription r\u00E9ussie ! Redirection vers la connexion..." }) }), _jsx(Snackbar, { open: showError, autoHideDuration: 4000, onClose: () => setShowError(false), anchorOrigin: { vertical: 'top', horizontal: 'center' }, children: _jsx(Alert, { onClose: () => setShowError(false), severity: "error", sx: { width: '100%' }, children: errorMessage }) })] }) }));
};
export default Register;
