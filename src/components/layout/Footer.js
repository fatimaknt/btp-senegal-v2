import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Container, Typography, Button } from '@mui/material';
import { Email as EmailIcon, Phone as PhoneIcon, WhatsApp as WhatsAppIcon, Info as InfoIcon, ContactMail as ContactMailIcon, Home as HomeIcon, DirectionsCar as CarIcon, CalendarToday as CalendarIcon, Facebook as FacebookIcon, Instagram as InstagramIcon, YouTube as YouTubeIcon } from '@mui/icons-material';
const Footer = () => {
    return (_jsx(Box, { component: "footer", sx: {
            backgroundColor: '#000000',
            color: 'white',
            py: 8
        }, children: _jsxs(Container, { maxWidth: "lg", children: [_jsxs(Box, { sx: {
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        gap: 6,
                        justifyContent: 'space-between'
                    }, children: [_jsxs(Box, { sx: { flex: 1 }, children: [_jsx(Typography, { variant: "h6", sx: {
                                        fontWeight: 600,
                                        mb: 4,
                                        color: 'white',
                                        fontSize: '1.2rem'
                                    }, children: "Services" }), _jsxs(Box, { sx: { display: 'flex', flexDirection: 'column', gap: 2 }, children: [_jsxs(Box, { sx: { display: 'flex', alignItems: 'center', gap: 1.5 }, children: [_jsx(HomeIcon, { sx: { color: '#e67e22', fontSize: 20 } }), _jsx(Typography, { variant: "body2", sx: { color: 'rgba(255, 255, 255, 0.8)' }, children: "Fourniture d'ouvriers" })] }), _jsxs(Box, { sx: { display: 'flex', alignItems: 'center', gap: 1.5 }, children: [_jsx(CarIcon, { sx: { color: '#e67e22', fontSize: 20 } }), _jsx(Typography, { variant: "body2", sx: { color: 'rgba(255, 255, 255, 0.8)' }, children: "Location de mat\u00E9riels" })] }), _jsxs(Box, { sx: { display: 'flex', alignItems: 'center', gap: 1.5 }, children: [_jsx(CalendarIcon, { sx: { color: '#e67e22', fontSize: 20 } }), _jsx(Typography, { variant: "body2", sx: { color: 'rgba(255, 255, 255, 0.8)' }, children: "Expertise et Appui technique" })] })] })] }), _jsxs(Box, { sx: { flex: 1 }, children: [_jsx(Typography, { variant: "h6", sx: {
                                        fontWeight: 600,
                                        mb: 4,
                                        color: 'white',
                                        fontSize: '1.2rem'
                                    }, children: "Navigation" }), _jsxs(Box, { sx: { display: 'flex', flexDirection: 'column', gap: 2 }, children: [_jsxs(Box, { sx: { display: 'flex', alignItems: 'center', gap: 1.5 }, children: [_jsx(HomeIcon, { sx: { color: '#e67e22', fontSize: 20 } }), _jsx(Typography, { variant: "body2", sx: { color: 'rgba(255, 255, 255, 0.8)' }, children: "Accueil" })] }), _jsxs(Box, { sx: { display: 'flex', alignItems: 'center', gap: 1.5 }, children: [_jsx(InfoIcon, { sx: { color: '#e67e22', fontSize: 20 } }), _jsx(Typography, { variant: "body2", sx: { color: 'rgba(255, 255, 255, 0.8)' }, children: "Annuaire" })] }), _jsxs(Box, { sx: { display: 'flex', alignItems: 'center', gap: 1.5 }, children: [_jsx(CalendarIcon, { sx: { color: '#e67e22', fontSize: 20 } }), _jsx(Typography, { variant: "body2", sx: { color: 'rgba(255, 255, 255, 0.8)' }, children: "Services" })] }), _jsxs(Box, { sx: { display: 'flex', alignItems: 'center', gap: 1.5 }, children: [_jsx(ContactMailIcon, { sx: { color: '#e67e22', fontSize: 20 } }), _jsx(Typography, { variant: "body2", sx: { color: 'rgba(255, 255, 255, 0.8)' }, children: "Actualit\u00E9" })] })] })] }), _jsxs(Box, { sx: { flex: 1 }, children: [_jsx(Typography, { variant: "h6", sx: {
                                        fontWeight: 600,
                                        mb: 4,
                                        color: 'white',
                                        fontSize: '1.2rem'
                                    }, children: "Contactez-nous" }), _jsxs(Box, { sx: { display: 'flex', flexDirection: 'column', gap: 2, mb: 3 }, children: [_jsxs(Box, { sx: { display: 'flex', alignItems: 'center', gap: 1.5 }, children: [_jsx(PhoneIcon, { sx: { color: '#e67e22', fontSize: 20 } }), _jsx(Typography, { variant: "body2", sx: { color: 'rgba(255, 255, 255, 0.8)' }, children: "+221774424223" })] }), _jsxs(Box, { sx: { display: 'flex', alignItems: 'center', gap: 1.5 }, children: [_jsx(EmailIcon, { sx: { color: '#e67e22', fontSize: 20 } }), _jsx(Typography, { variant: "body2", sx: { color: 'rgba(255, 255, 255, 0.8)' }, children: "contact@btpsenegal.com" })] })] }), _jsx(Button, { variant: "contained", startIcon: _jsx(WhatsAppIcon, {}), component: "a", href: "https://wa.me/221774424223", target: "_blank", rel: "noopener noreferrer", sx: {
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
                                    }, children: "WhatsApp" })] }), _jsxs(Box, { sx: { flex: 1 }, children: [_jsx(Typography, { variant: "h6", sx: {
                                        fontWeight: 600,
                                        mb: 4,
                                        color: 'white',
                                        fontSize: '1.2rem'
                                    }, children: "Suivez-nous" }), _jsxs(Box, { sx: { display: 'flex', flexDirection: 'column', gap: 2 }, children: [_jsx(Button, { variant: "outlined", component: "a", href: "https://www.tiktok.com/@btp.senegal?_t=ZN-908XgGfcAha&_r=1", target: "_blank", rel: "noopener noreferrer", sx: {
                                                color: 'white',
                                                borderColor: 'rgba(255, 255, 255, 0.3)',
                                                borderRadius: 2,
                                                px: 2,
                                                py: 1,
                                                textTransform: 'none',
                                                fontSize: '0.9rem',
                                                justifyContent: 'flex-start',
                                                '&:hover': {
                                                    borderColor: '#ff0050',
                                                    backgroundColor: 'rgba(255, 0, 80, 0.1)',
                                                    color: '#ff0050'
                                                }
                                            }, children: "TikTok" }), _jsx(Button, { variant: "outlined", component: "a", href: "https://www.instagram.com/btpsenegal?igsh=ZG1vN2hxeHZsd2E5&utm_source=qr", target: "_blank", rel: "noopener noreferrer", startIcon: _jsx(InstagramIcon, {}), sx: {
                                                color: 'white',
                                                borderColor: 'rgba(255, 255, 255, 0.3)',
                                                borderRadius: 2,
                                                px: 2,
                                                py: 1,
                                                textTransform: 'none',
                                                fontSize: '0.9rem',
                                                justifyContent: 'flex-start',
                                                '&:hover': {
                                                    borderColor: '#E4405F',
                                                    backgroundColor: 'rgba(228, 64, 95, 0.1)',
                                                    color: '#E4405F'
                                                }
                                            }, children: "Instagram" }), _jsx(Button, { variant: "outlined", component: "a", href: "https://www.facebook.com/share/19wgqdw5yz/?mibextid=wwXIfr", target: "_blank", rel: "noopener noreferrer", startIcon: _jsx(FacebookIcon, {}), sx: {
                                                color: 'white',
                                                borderColor: 'rgba(255, 255, 255, 0.3)',
                                                borderRadius: 2,
                                                px: 2,
                                                py: 1,
                                                textTransform: 'none',
                                                fontSize: '0.9rem',
                                                justifyContent: 'flex-start',
                                                '&:hover': {
                                                    borderColor: '#1877F2',
                                                    backgroundColor: 'rgba(24, 119, 242, 0.1)',
                                                    color: '#1877F2'
                                                }
                                            }, children: "Facebook" }), _jsx(Button, { variant: "outlined", component: "a", href: "https://youtube.com/@btpsenegaltv?si=s7SOBZfIO6Pezqwc", target: "_blank", rel: "noopener noreferrer", startIcon: _jsx(YouTubeIcon, {}), sx: {
                                                color: 'white',
                                                borderColor: 'rgba(255, 255, 255, 0.3)',
                                                borderRadius: 2,
                                                px: 2,
                                                py: 1,
                                                textTransform: 'none',
                                                fontSize: '0.9rem',
                                                justifyContent: 'flex-start',
                                                '&:hover': {
                                                    borderColor: '#FF0000',
                                                    backgroundColor: 'rgba(255, 0, 0, 0.1)',
                                                    color: '#FF0000'
                                                }
                                            }, children: "YouTube" })] })] })] }), _jsx(Box, { sx: {
                        mt: 6,
                        height: '1px',
                        backgroundColor: 'rgba(255, 255, 255, 0.1)'
                    } }), _jsx(Box, { sx: {
                        mt: 4,
                        textAlign: 'center'
                    }, children: _jsxs(Typography, { variant: "body2", sx: {
                            color: 'rgba(255, 255, 255, 0.6)',
                            fontSize: '0.9rem'
                        }, children: ["D\u00E9velopp\u00E9 par", ' ', _jsx(Typography, { component: "a", href: "https://wa.me/221774424223", target: "_blank", rel: "noopener noreferrer", sx: {
                                    color: '#e67e22',
                                    textDecoration: 'none',
                                    fontWeight: 600,
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        color: '#f39c12',
                                        textDecoration: 'underline'
                                    }
                                }, children: "Fatima Kanout\u00E9" })] }) })] }) }));
};
export default Footer;
