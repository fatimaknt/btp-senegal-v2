import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Box, Button, IconButton, Avatar, useMediaQuery, useTheme, Drawer, List, ListItem, ListItemText, ListItemButton } from '@mui/material';
import { Menu as MenuIcon, Phone as PhoneIcon, Email as EmailIcon, PersonAdd as PersonAddIcon, Login as LoginIcon, Home as HomeIcon, Business as BusinessIcon, Construction as ConstructionIcon, Article as ArticleIcon, Info as InfoIcon, ContactPhone as ContactIcon } from '@mui/icons-material';
const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const navigation = [
        { name: 'Accueil', href: '/', icon: _jsx(HomeIcon, {}) },
        { name: 'Services', href: '/services', icon: _jsx(ConstructionIcon, {}) },
        { name: 'Annuaire', href: '/annuaire', icon: _jsx(BusinessIcon, {}) },
        { name: 'Actualités', href: '/actualites', icon: _jsx(ArticleIcon, {}) },
        { name: 'À propos', href: '/about', icon: _jsx(InfoIcon, {}) },
        { name: 'Contact', href: '/contact', icon: _jsx(ContactIcon, {}) }
    ];
    const isActivePage = (href) => {
        if (href === '/') {
            return location.pathname === '/';
        }
        return location.pathname.startsWith(href);
    };
    return (_jsxs(_Fragment, {
        children: [_jsx(Box, {
            sx: {
                background: 'linear-gradient(135deg, #e67e22 0%, #f39c12 50%, #d35400 100%)',
                color: 'white',
                py: 1.5,
                display: { xs: 'none', md: 'block' },
                position: 'relative',
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '1px',
                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)'
                }
            }, children: _jsxs(Box, {
                sx: {
                    maxWidth: 'lg',
                    mx: 'auto',
                    px: 3,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    fontSize: '0.9rem'
                }, children: [_jsxs(Box, {
                    sx: { display: 'flex', alignItems: 'center', gap: 4 }, children: [_jsxs(Box, {
                        sx: {
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1,
                            background: 'rgba(255, 255, 255, 0.1)',
                            px: 2,
                            py: 0.5,
                            borderRadius: 2,
                            backdropFilter: 'blur(10px)'
                        }, children: [_jsx(PhoneIcon, { sx: { fontSize: 18, filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.2))' } }), _jsx(Typography, { variant: "body2", sx: { fontWeight: 500, textShadow: '0 1px 2px rgba(0,0,0,0.2)' }, children: "+221774424223" })]
                    }), _jsxs(Box, {
                        sx: {
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1,
                            background: 'rgba(255, 255, 255, 0.1)',
                            px: 2,
                            py: 0.5,
                            borderRadius: 2,
                            backdropFilter: 'blur(10px)'
                        }, children: [_jsx(EmailIcon, { sx: { fontSize: 18, filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.2))' } }), _jsx(Typography, { variant: "body2", sx: { fontWeight: 500, textShadow: '0 1px 2px rgba(0,0,0,0.2)' }, children: "contact@btpsenegal.com" })]
                    })]
                }), _jsx(Typography, {
                    variant: "body2", sx: {
                        fontWeight: 600,
                        textShadow: '0 1px 2px rgba(0,0,0,0.2)',
                        background: 'rgba(255, 255, 255, 0.1)',
                        px: 3,
                        py: 1,
                        borderRadius: 3,
                        backdropFilter: 'blur(10px)'
                    }, children: "\uD83C\uDFD7\uFE0F Annuaire BTP - Votre partenaire construction"
                })]
            })
        }), _jsx(AppBar, {
            position: "sticky", elevation: 0, sx: {
                background: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(20px)',
                color: 'primary.main',
                boxShadow: '0 8px 32px rgba(230, 126, 34, 0.15)',
                borderBottom: '1px solid rgba(230, 126, 34, 0.1)',
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '2px',
                    background: 'linear-gradient(90deg, #e67e22, #f39c12, #d35400)'
                }
            }, children: _jsxs(Toolbar, {
                sx: { minHeight: { xs: 64, md: 80 } }, children: [_jsxs(Box, {
                    component: Link, to: "/", sx: {
                        display: 'flex',
                        alignItems: 'center',
                        textDecoration: 'none',
                        color: 'inherit',
                        mr: 4,
                        transition: 'all 0.3s ease',
                        '&:hover': {
                            transform: 'translateY(-2px)'
                        }
                    }, children: [_jsx(Avatar, {
                        src: "/images/logos/logo.jpeg", sx: {
                            width: { xs: 45, md: 55 },
                            height: { xs: 45, md: 55 },
                            mr: 2,
                            background: 'linear-gradient(135deg, #e67e22 0%, #f39c12 100%)',
                            boxShadow: '0 4px 15px rgba(249, 115, 22, 0.3)',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                                transform: 'scale(1.1) rotate(5deg)',
                                boxShadow: '0 8px 25px rgba(249, 115, 22, 0.4)',
                            }
                        }, children: "\uD83C\uDFD7\uFE0F"
                    }), _jsxs(Box, {
                        sx: { display: { xs: 'none', sm: 'block' } }, children: [_jsx(Typography, {
                            variant: "h6", component: "div", sx: {
                                fontWeight: 800,
                                background: 'linear-gradient(45deg, #f97316 0%, #fb923c 50%, #ea580c 100%)',
                                backgroundClip: 'text',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                textShadow: '0 2px 4px rgba(249, 115, 22, 0.1)'
                            }, children: "BTP SENEGAL"
                        }), _jsx(Typography, {
                            variant: "caption", sx: {
                                color: 'text.secondary',
                                fontWeight: 500,
                                textTransform: 'uppercase',
                                letterSpacing: '0.5px'
                            }, children: "Le Digital au Service"
                        })]
                    })]
                }), !isMobile && (_jsx(Box, {
                    sx: { display: 'flex', alignItems: 'center', gap: 0.5 }, children: navigation.map((item) => (_jsx(Button, {
                        component: Link, to: item.href, sx: {
                            color: isActivePage(item.href) ? 'white' : 'text.primary',
                            fontWeight: isActivePage(item.href) ? 700 : 600,
                            background: isActivePage(item.href)
                                ? 'linear-gradient(135deg, #f97316 0%, #fb923c 100%)'
                                : 'transparent',
                            borderRadius: 3,
                            px: 2.5,
                            py: 1.5,
                            minWidth: 'auto',
                            transition: 'all 0.3s ease',
                            boxShadow: isActivePage(item.href)
                                ? '0 4px 15px rgba(249, 115, 22, 0.3)'
                                : 'none',
                            '&:hover': {
                                backgroundColor: isActivePage(item.href)
                                    ? 'linear-gradient(135deg, #ea580c 0%, #f97316 100%)'
                                    : 'rgba(249, 115, 22, 0.1)',
                                color: isActivePage(item.href) ? 'white' : 'primary.main',
                                transform: 'translateY(-2px)',
                                boxShadow: isActivePage(item.href)
                                    ? '0 6px 20px rgba(249, 115, 22, 0.4)'
                                    : '0 4px 12px rgba(249, 115, 22, 0.15)'
                            }
                        }, children: _jsxs(Box, { sx: { display: 'flex', alignItems: 'center', gap: 1 }, children: [item.icon, item.name] })
                    }, item.name)))
                })), _jsxs(Box, {
                    sx: { display: 'flex', alignItems: 'center', gap: 3, ml: 'auto' }, children: [!isMobile && (_jsxs(_Fragment, {
                        children: [_jsxs(Button, {
                            component: Link, to: "/auth/login", variant: "outlined", size: "small", sx: {
                                borderColor: 'primary.main',
                                color: 'primary.main',
                                borderRadius: 3,
                                px: 3,
                                py: 1.5,
                                fontWeight: 600,
                                borderWidth: '2px',
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    backgroundColor: 'primary.main',
                                    color: 'white',
                                    transform: 'translateY(-2px)',
                                    boxShadow: '0 6px 20px rgba(249, 115, 22, 0.3)',
                                    borderWidth: '2px'
                                }
                            }, children: [_jsx(LoginIcon, { sx: { mr: 1, fontSize: 18 } }), "Connexion"]
                        }), _jsxs(Button, {
                            component: Link, to: "/auth/register", variant: "contained", size: "small", sx: {
                                background: 'linear-gradient(135deg, #e67e22 0%, #f39c12 100%)',
                                borderRadius: 3,
                                px: 3,
                                py: 1.5,
                                fontWeight: 700,
                                boxShadow: '0 4px 15px rgba(249, 115, 22, 0.3)',
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    background: 'linear-gradient(135deg, #d35400 0%, #e67e22 100%)',
                                    transform: 'translateY(-2px)',
                                    boxShadow: '0 8px 25px rgba(249, 115, 22, 0.4)'
                                }
                            }, children: [_jsx(PersonAddIcon, { sx: { mr: 1, fontSize: 18 } }), "Inscription"]
                        })]
                    })), isMobile && (_jsx(IconButton, { onClick: () => setMobileMenuOpen(true), sx: { color: 'primary.main' }, children: _jsx(MenuIcon, {}) }))]
                })]
            })
        }), _jsxs(Drawer, {
            anchor: "right", open: mobileMenuOpen, onClose: () => setMobileMenuOpen(false), sx: {
                '& .MuiDrawer-paper': {
                    width: 280,
                    backgroundColor: 'background.paper'
                }
            }, children: [_jsxs(Box, { sx: { p: 2, borderBottom: '1px solid', borderColor: 'divider' }, children: [_jsx(Typography, { variant: "h6", sx: { fontWeight: 700, color: 'primary.main' }, children: "\uD83C\uDFD7\uFE0F BTP" }), _jsx(Typography, { variant: "body2", color: "text.secondary", children: "Navigation" })] }), _jsx(List, {
                children: navigation.map((item) => (_jsx(ListItem, {
                    disablePadding: true, children: _jsx(ListItemButton, {
                        component: Link, to: item.href, onClick: () => setMobileMenuOpen(false), sx: {
                            backgroundColor: isActivePage(item.href) ? 'rgba(249, 115, 22, 0.1)' : 'transparent',
                            '&:hover': {
                                backgroundColor: 'rgba(249, 115, 22, 0.1)'
                            }
                        }, children: _jsx(ListItemText, {
                            primary: _jsxs(Box, { sx: { display: 'flex', alignItems: 'center', gap: 1 }, children: [item.icon, item.name] }), sx: {
                                '& .MuiListItemText-primary': {
                                    color: isActivePage(item.href) ? 'primary.main' : 'text.primary',
                                    fontWeight: isActivePage(item.href) ? 600 : 400
                                }
                            }
                        })
                    })
                }, item.name)))
            }), _jsxs(Box, {
                sx: { p: 2, mt: 'auto', borderTop: '1px solid', borderColor: 'divider' }, children: [_jsxs(Button, {
                    component: Link, to: "/auth/login", fullWidth: true, variant: "outlined", sx: {
                        mb: 1,
                        borderColor: 'primary.main',
                        color: 'primary.main'
                    }, onClick: () => setMobileMenuOpen(false), children: [_jsx(LoginIcon, { sx: { mr: 1, fontSize: 18 } }), "Connexion"]
                }), _jsxs(Button, {
                    component: Link, to: "/auth/register", fullWidth: true, variant: "contained", sx: {
                        background: 'linear-gradient(135deg, #f97316 0%, #fb923c 100%)'
                    }, onClick: () => setMobileMenuOpen(false), children: [_jsx(PersonAddIcon, { sx: { mr: 1, fontSize: 18 } }), "Inscription"]
                })]
            })]
        })]
    }));
};
export default Header;
