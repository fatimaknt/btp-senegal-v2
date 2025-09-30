import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography, Container, Box, Card, CardContent, TextField, Button, Dialog, DialogTitle, DialogContent, DialogActions, IconButton } from '@mui/material';
import { Search as SearchIcon, Business as BusinessIcon, LocationOn as LocationIcon, Star as StarIcon, Phone as PhoneIcon, AccessTime as AccessTimeIcon, Place as PlaceIcon, Close as CloseIcon, Visibility as VisibilityIcon, GpsFixed as TargetIcon, Handshake as NetworkIcon } from '@mui/icons-material';
import PageTransition from '../../components/animations/PageTransition';
import AdSection from '../../components/ads/AdSection';
const HomePage = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [mapOpen, setMapOpen] = useState(false);
    const [selectedCompany, setSelectedCompany] = useState('');
    const navigate = useNavigate();
    const handleSearch = (e) => {
        e.preventDefault();
        const params = new URLSearchParams();
        if (searchQuery.trim())
            params.set('search', searchQuery.trim());
        navigate(`/annuaire?${params.toString()}`);
    };
    const handleOpenMap = (companyName) => {
        setSelectedCompany(companyName);
        setMapOpen(true);
    };
    // Les données publicitaires sont maintenant chargées depuis Supabase dans AdSection
    return (_jsxs(PageTransition, {
        children: [_jsx(Box, {
            sx: {
                    background: `
                    linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4)),
                    url('/images/partners/btp.jpg') center/cover
                `,
                    color: 'white',
                    py: { xs: 16, md: 19 },
                    position: 'relative',
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'url("/images/partners/sococim.jpg") center/cover',
                        opacity: 0.6,
                        zIndex: -1
                    },
                    '&::after': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'linear-gradient(135deg, rgba(230, 126, 34, 0.2) 0%, rgba(243, 153, 18, 0.2) 50%, rgba(211, 84, 0, 0.2) 100%)',
                        zIndex: -1
                    }
            }, children: _jsxs(Container, {
                maxWidth: "lg", children: [_jsxs(Box, {
                    sx: { textAlign: 'center', mb: 6 }, children: [_jsx(Typography, {
                        variant: "h2", component: "h1", sx: {
                                        fontWeight: 900,
                                        mb: 3,
                                        color: '#e67e22',
                                        textShadow: '3px 3px 6px rgba(0,0,0,0.5)',
                                        letterSpacing: '-0.02em',
                                        fontSize: { xs: '2.5rem', md: '4rem' }
                        }, children: "LE DIGITAL AU SERVICE DU BTP"
                    }), _jsx(Typography, {
                        variant: "h5", sx: {
                                        mb: 10,
                                        color: 'rgba(255, 255, 255, 0.95)',
                                        maxWidth: '700px',
                                        mx: 'auto',
                                        lineHeight: 1.6,
                                        fontWeight: 500,
                                        textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                                        fontSize: { xs: '1.2rem', md: '1.5rem' },
                                        letterSpacing: '0.01em'
                        }, children: "Innovation num\u00E9rique - Expertise Technique - Excellence/Qualit\u00E9 - D\u00E9veloppement & Collaboration! \uD83C\uDDF8\uD83C\uDDF3"
                    })]
                }), _jsx(Box, {
                    sx: { maxWidth: 1200, mx: 'auto', mb: 3 }, children: _jsx(Card, {
                        sx: {
                                    background: 'rgba(255, 255, 255, 0.15)',
                                    backdropFilter: 'blur(30px)',
                                    borderRadius: 6,
                                    boxShadow: '0 25px 50px rgba(0, 0, 0, 0.15)',
                                    border: '1px solid rgba(255, 255, 255, 0.2)',
                                    position: 'relative',
                                    '&::before': {
                                        content: '""',
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        height: '1px',
                                        background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.5), transparent)'
                                    }
                        }, children: _jsxs(CardContent, {
                            sx: { p: 5 }, children: [_jsx(Box, {
                                component: "form", onSubmit: handleSearch, sx: { mb: 5 }, children: _jsxs(Box, {
                                    sx: {
                                                    display: 'flex',
                                                    flexDirection: { xs: 'column', sm: 'row' },
                                                    gap: 3,
                                                    alignItems: 'stretch'
                                    }, children: [_jsx(TextField, {
                                        fullWidth: true, placeholder: "Service ou entreprise recherch\u00E9e...", value: searchQuery, onChange: (e) => setSearchQuery(e.target.value), InputProps: {
                                            startAdornment: (_jsx(SearchIcon, {
                                                sx: {
                                                                    color: '#e67e22',
                                                                    mr: 2,
                                                                    fontSize: 32,
                                                                    filter: 'drop-shadow(0 2px 4px rgba(249,115,22,0.4))'
                                                }
                                            })),
                                                        }, sx: {
                                                            '& .MuiOutlinedInput-root': {
                                                                height: '70px',
                                                                borderRadius: 6,
                                                                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                                                                boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
                                                                border: '2px solid rgba(255, 255, 255, 0.2)',
                                                                backdropFilter: 'blur(20px)',
                                                                '& fieldset': {
                                                                    border: 'none'
                                                                },
                                                                '&:hover': {
                                                                    backgroundColor: 'rgba(255, 255, 255, 0.98)',
                                                                    boxShadow: '0 12px 35px rgba(0, 0, 0, 0.2)',
                                                                    transform: 'translateY(-2px)'
                                                                },
                                                                '&.Mui-focused': {
                                                                    backgroundColor: 'white',
                                                                    boxShadow: '0 15px 40px rgba(249, 115, 22, 0.25)',
                                                                    border: '2px solid rgba(249, 115, 22, 0.3)'
                                                                }
                                                            },
                                                            '& input': {
                                                                fontSize: '1.2rem',
                                                                fontWeight: 500,
                                                                '&::placeholder': {
                                                                    color: 'rgba(107, 114, 128, 0.7)',
                                                                    fontWeight: 500
                                                                }
                                                            }
                                        }
                                    }), _jsx(Button, {
                                        type: "submit", variant: "contained", sx: {
                                                            height: '70px',
                                                            px: 6,
                                                            py: 3,
                                                            background: 'linear-gradient(135deg, #e67e22 0%, #f39c12 100%)',
                                                            color: 'white',
                                                            borderRadius: 6,
                                                            fontWeight: 700,
                                                            fontSize: '1.3rem',
                                                            textTransform: 'none',
                                                            border: '2px solid rgba(255, 255, 255, 0.2)',
                                                            boxShadow: '0 8px 25px rgba(249, 115, 22, 0.3)',
                                                            minWidth: { xs: '100%', sm: '180px' },
                                                            backdropFilter: 'blur(10px)',
                                                            '&:hover': {
                                                                background: 'linear-gradient(135deg, #d35400 0%, #e67e22 100%)',
                                                                transform: 'translateY(-3px)',
                                                                boxShadow: '0 15px 35px rgba(249, 115, 22, 0.4)',
                                                                border: '2px solid rgba(255, 255, 255, 0.4)'
                                                            }
                                        }, children: "Rechercher"
                                    })]
                                })
                            }), _jsxs(Box, {
                                sx: { textAlign: 'center' }, children: [_jsx(Typography, { variant: "body2", sx: { mb: 2, color: 'rgba(255, 255, 255, 0.8)' }, children: "Recherches populaires :" }), _jsx(Box, {
                                    sx: { display: 'flex', flexWrap: 'wrap', gap: 1, justifyContent: 'center' }, children: ['Construction', 'Rénovation', 'Maçonnerie', 'Électricité', 'Plomberie', 'Peinture'].map((tag) => (_jsx(Box, {
                                        component: "button", onClick: () => setSearchQuery(tag), sx: {
                                                            background: 'rgba(249, 115, 22, 0.8)',
                                                            backdropFilter: 'blur(10px)',
                                                            border: '1px solid rgba(249, 115, 22, 0.9)',
                                                            borderRadius: 2,
                                                            color: 'white',
                                                            px: 2,
                                                            py: 1,
                                                            fontSize: '0.8rem',
                                                            cursor: 'pointer',
                                                            transition: 'all 0.3s ease',
                                                            '&:hover': {
                                                                background: 'rgba(249, 115, 22, 1)',
                                                                transform: 'translateY(-1px)',
                                                                boxShadow: '0 4px 12px rgba(249, 115, 22, 0.4)'
                                                            }
                                        }, children: tag
                                    }, tag)))
                                })]
                            })]
                        })
                    })
                })]
            })
        }), _jsx(Box, {
            sx: {
                    backgroundColor: '#ffffff',
                    color: '#1f2937',
                    py: 12
            }, children: _jsxs(Container, {
                maxWidth: "lg", children: [_jsxs(Box, {
                    sx: { textAlign: 'center', mb: 8 }, children: [_jsx(Typography, {
                        variant: "h2", sx: {
                                        fontWeight: 800,
                                        mb: 3,
                                        background: 'linear-gradient(45deg, #e67e22 0%, #f39c12 50%, #d35400 100%)',
                                        backgroundClip: 'text',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        textShadow: '2px 2px 4px rgba(249, 115, 22, 0.1)'
                        }, children: "\uD83C\uDFD7\uFE0F Vous \u00EAtes un professionnel du BTP ?"
                    }), _jsx(Typography, {
                        variant: "h5", sx: {
                                        mb: 6,
                                        color: 'rgba(31, 41, 55, 0.8)',
                                        maxWidth: '600px',
                                        mx: 'auto',
                                        textShadow: 'none'
                        }, children: "Rejoignez notre annuaire et d\u00E9veloppez votre activit\u00E9 avec +1000 professionnels"
                    })]
                }), _jsx(Box, {
                    sx: {
                                display: 'grid',
                                gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
                                gap: 4,
                                maxWidth: '1200px',
                                mx: 'auto'
                            }, children: [
                                {
                                    icon: VisibilityIcon,
                                    title: 'Visibilité',
                                    desc: 'Augmentez votre visibilité auprès de milliers de clients potentiels'
                                },
                                {
                                    icon: TargetIcon,
                                    title: 'Ciblage',
                                    desc: 'Atteignez votre clientèle cible grâce à notre système de recherche avancée'
                                },
                                {
                                    icon: NetworkIcon,
                                    title: 'Réseau',
                                    desc: 'Développez votre réseau professionnel avec d\'autres entreprises du BTP'
                                }
                    ].map((advantage, index) => (_jsxs(Card, {
                        sx: {
                                    background: 'rgba(249, 115, 22, 0.05)',
                                    border: '2px solid rgba(249, 115, 22, 0.2)',
                                    borderRadius: 1,
                                    p: 4,
                                    textAlign: 'center',
                                    minHeight: '200px',
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        background: 'rgba(249, 115, 22, 0.1)',
                                        transform: 'translateY(-4px)',
                                        boxShadow: '0 12px 24px rgba(249, 115, 22, 0.15)',
                                        border: '2px solid rgba(249, 115, 22, 0.4)'
                                    }
                        }, children: [_jsx(Box, { sx: { mb: 3, display: 'flex', justifyContent: 'center' }, children: _jsx(advantage.icon, { sx: { fontSize: '4rem', color: '#f97316' } }) }), _jsx(Typography, { variant: "h5", sx: { fontWeight: 600, color: '#e67e22', mb: 2 }, children: advantage.title }), _jsx(Typography, { variant: "body1", sx: { color: 'rgba(31, 41, 55, 0.8)', lineHeight: 1.6 }, children: advantage.desc })]
                    }, index)))
                })]
            })
        }), _jsx(Box, {
            sx: {
                    backgroundColor: '#f8fafc',
                    py: 12
            }, children: _jsxs(Container, {
                maxWidth: "lg", children: [_jsxs(Box, {
                    sx: { textAlign: 'center', mb: 8 }, children: [_jsx(Typography, {
                        variant: "h2", sx: {
                                        fontWeight: 800,
                                        mb: 3,
                                        background: 'linear-gradient(45deg, #e67e22 0%, #f39c12 50%, #d35400 100%)',
                                        backgroundClip: 'text',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent'
                        }, children: "Entreprises Partenaires"
                    }), _jsx(Typography, {
                        variant: "h5", sx: {
                                        mb: 6,
                                        color: 'rgba(31, 41, 55, 0.8)',
                                        maxWidth: '600px',
                                        mx: 'auto'
                        }, children: "D\u00E9couvrez nos entreprises partenaires de confiance"
                    })]
                }), _jsxs(Box, {
                    sx: {
                                display: 'grid',
                                gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' },
                                gap: 6,
                                mb: 8,
                                maxWidth: '3000px',
                                mx: 'auto'
                    }, children: [_jsxs(Card, {
                        sx: {
                                        borderRadius: 2,
                                        overflow: 'hidden',
                                        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            transform: 'translateY(-4px)',
                                            boxShadow: '0 8px 30px rgba(0, 0, 0, 0.15)'
                                        }
                        }, children: [_jsx(Box, {
                            onClick: () => navigate('/entreprise/emas-construction'), sx: {
                                                height: 220,
                                                backgroundImage: 'url(/images/partners/btp.jpg)',
                                                backgroundSize: 'cover',
                                                backgroundPosition: 'center',
                                                position: 'relative',
                                                display: 'flex',
                                                alignItems: 'flex-start',
                                                justifyContent: 'flex-start',
                                                p: 2,
                                                cursor: 'pointer',
                                                transition: 'all 0.3s ease',
                                                '&:hover': {
                                                    transform: 'scale(1.02)',
                                                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)'
                                                }
                            }
                        }), _jsxs(CardContent, {
                            sx: { p: 4, backgroundColor: 'white' }, children: [_jsx(Box, {
                                sx: { display: 'flex', alignItems: 'center', mb: 2 }, children: _jsx(Box, {
                                    sx: {
                                                            background: '#e67e22',
                                                            color: 'white',
                                                            px: 2,
                                                            py: 0.5,
                                                            borderRadius: 1,
                                                            fontSize: '0.7rem',
                                                            fontWeight: 600,
                                                            textTransform: 'uppercase'
                                    }, children: "BTP"
                                })
                            }), _jsxs(Box, {
                                sx: {
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'space-between',
                                                        mb: 2
                                }, children: [_jsx(Typography, {
                                    variant: "h5", sx: {
                                                                fontWeight: 600,
                                                                color: '#1f2937',
                                                                fontSize: '0.8rem'
                                    }, children: "EMAS CONSTRUCTION"
                                }), _jsxs(Box, {
                                    sx: { display: 'flex', alignItems: 'center' }, children: [_jsx(AccessTimeIcon, { sx: { fontSize: 12, color: '#10b981', mr: 0.5 } }), _jsx(Typography, {
                                        variant: "body2", sx: {
                                                                        color: '#10b981',
                                                                        fontSize: '0.6rem',
                                                                        fontWeight: 600
                                        }, children: "Ouvert maintenant"
                                    })]
                                })]
                            }), _jsx(Box, {
                                sx: {
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'space-between',
                                                        mb: 2,
                                                        gap: 2
                                }, children: _jsxs(Box, { sx: { display: 'flex', alignItems: 'center' }, children: [_jsx(PhoneIcon, { sx: { fontSize: 16, color: '#6b7280', mr: 1 } }), _jsx(Typography, { variant: "body2", sx: { color: '#6b7280', fontSize: '0.8rem', fontWeight: 600 }, children: "+221774424223" })] })
                            }), _jsx(Button, {
                                variant: "outlined", size: "small", startIcon: _jsx(PlaceIcon, {}), onClick: () => handleOpenMap('EMAS CONSTRUCTION'), sx: {
                                                        borderColor: '#e67e22',
                                                        color: '#e67e22',
                                                        borderRadius: 2,
                                                        px: 3,
                                                        py: 1.5,
                                                        fontWeight: 700,
                                                        fontSize: '0.8rem',
                                                        textTransform: 'none',
                                                        minWidth: '160px',
                                                        boxShadow: '0 2px 8px rgba(249, 115, 22, 0.1)',
                                                        transition: 'all 0.3s ease',
                                                        '&:hover': {
                                                            backgroundColor: '#e67e22',
                                                            color: 'white',
                                                            borderColor: '#e67e22',
                                                            transform: 'translateY(-2px)',
                                                            boxShadow: '0 4px 12px rgba(249, 115, 22, 0.3)'
                                                        }
                                }, children: "Afficher La Carte"
                            })]
                        })]
                    }), _jsxs(Card, {
                        sx: {
                                        borderRadius: 2,
                                        overflow: 'hidden',
                                        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            transform: 'translateY(-4px)',
                                            boxShadow: '0 8px 30px rgba(0, 0, 0, 0.15)'
                                        }
                        }, children: [_jsx(Box, {
                            onClick: () => navigate('/entreprise/sococim-industries'), sx: {
                                                height: 220,
                                                backgroundImage: 'url(/images/partners/sococim.jpg)',
                                                backgroundSize: 'cover',
                                                backgroundPosition: 'center',
                                                position: 'relative',
                                                display: 'flex',
                                                alignItems: 'flex-start',
                                                justifyContent: 'flex-start',
                                                p: 2,
                                                cursor: 'pointer',
                                                transition: 'all 0.3s ease',
                                                '&:hover': {
                                                    transform: 'scale(1.02)',
                                                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)'
                                                }
                            }
                        }), _jsxs(CardContent, {
                            sx: { p: 4, backgroundColor: 'white' }, children: [_jsx(Box, {
                                sx: { display: 'flex', alignItems: 'center', mb: 2 }, children: _jsx(Box, {
                                    sx: {
                                                            background: '#3b82f6',
                                                            color: 'white',
                                                            px: 2,
                                                            py: 0.5,
                                                            borderRadius: 1,
                                                            fontSize: '0.6rem',
                                                            fontWeight: 600,
                                                            textTransform: 'uppercase'
                                    }, children: "MAT\u00C9RIAUX & MAT\u00C9RIELS"
                                })
                            }), _jsxs(Box, {
                                sx: {
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'space-between',
                                                        mb: 2
                                }, children: [_jsx(Typography, {
                                    variant: "h6", sx: {
                                                                fontWeight: 500,
                                                                color: '#1f2937',
                                                                fontSize: '1rem'
                                    }, children: "Sococim Industries"
                                }), _jsxs(Box, {
                                    sx: { display: 'flex', alignItems: 'center' }, children: [_jsx(AccessTimeIcon, { sx: { fontSize: 12, color: '#10b981', mr: 0.5 } }), _jsx(Typography, {
                                        variant: "body2", sx: {
                                                                        color: '#10b981',
                                                                        fontSize: '0.7rem',
                                                                        fontWeight: 600
                                        }, children: "Ouvert maintenant"
                                    })]
                                })]
                            }), _jsx(Box, {
                                sx: {
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'space-between',
                                                        mb: 2,
                                                        gap: 2
                                }, children: _jsxs(Box, { sx: { display: 'flex', alignItems: 'center' }, children: [_jsx(PhoneIcon, { sx: { fontSize: 16, color: '#6b7280', mr: 1 } }), _jsx(Typography, { variant: "body2", sx: { color: '#6b7280', fontSize: '0.8rem', fontWeight: 600 }, children: "+221774424223" })] })
                            }), _jsx(Button, {
                                variant: "outlined", size: "small", startIcon: _jsx(PlaceIcon, {}), onClick: () => handleOpenMap('EMAS CONSTRUCTION'), sx: {
                                                        borderColor: '#e67e22',
                                                        color: '#e67e22',
                                                        borderRadius: 2,
                                                        px: 3,
                                                        py: 1.5,
                                                        fontWeight: 700,
                                                        fontSize: '0.8rem',
                                                        textTransform: 'none',
                                                        minWidth: '160px',
                                                        boxShadow: '0 2px 8px rgba(249, 115, 22, 0.1)',
                                                        transition: 'all 0.3s ease',
                                                        '&:hover': {
                                                            backgroundColor: '#e67e22',
                                                            color: 'white',
                                                            borderColor: '#e67e22',
                                                            transform: 'translateY(-2px)',
                                                            boxShadow: '0 4px 12px rgba(249, 115, 22, 0.3)'
                                                        }
                                }, children: "Afficher La Carte"
                            })]
                        })]
                    }), _jsxs(Card, {
                        sx: {
                                        borderRadius: 2,
                                        overflow: 'hidden',
                                        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            transform: 'translateY(-4px)',
                                            boxShadow: '0 8px 30px rgba(0, 0, 0, 0.15)'
                                        }
                        }, children: [_jsx(Box, {
                            onClick: () => navigate('/entreprise/matoutils'), sx: {
                                                height: 220,
                                                backgroundImage: 'url(/images/partners/matoutils.jpg)',
                                                backgroundSize: 'cover',
                                                backgroundPosition: 'center',
                                                position: 'relative',
                                                display: 'flex',
                                                alignItems: 'flex-start',
                                                justifyContent: 'flex-start',
                                                p: 2,
                                                cursor: 'pointer',
                                                transition: 'all 0.3s ease',
                                                '&:hover': {
                                                    transform: 'scale(1.02)',
                                                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)'
                                                }
                            }
                        }), _jsxs(CardContent, {
                            sx: { p: 4, backgroundColor: 'white' }, children: [_jsx(Box, {
                                sx: { display: 'flex', alignItems: 'center', mb: 2 }, children: _jsx(Box, {
                                    sx: {
                                                            background: '#8b5cf6',
                                                            color: 'white',
                                                            px: 2,
                                                            py: 0.5,
                                                            borderRadius: 1,
                                                            fontSize: '0.7rem',
                                                            fontWeight: 600,
                                                            textTransform: 'uppercase'
                                    }, children: "PLOMBERIE"
                                })
                            }), _jsxs(Box, {
                                sx: {
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'space-between',
                                                        mb: 2
                                }, children: [_jsx(Typography, {
                                    variant: "h6", sx: {
                                                                fontWeight: 600,
                                                                color: '#1f2937',
                                                                fontSize: '1rem'
                                    }, children: "Mat-outils"
                                }), _jsxs(Box, {
                                    sx: { display: 'flex', alignItems: 'center' }, children: [_jsx(AccessTimeIcon, { sx: { fontSize: 12, color: '#10b981', mr: 0.5 } }), _jsx(Typography, {
                                        variant: "body2", sx: {
                                                                        color: '#10b981',
                                                                        fontSize: '0.7rem',
                                                                        fontWeight: 600
                                        }, children: "Ouvert maintenant"
                                    })]
                                })]
                            }), _jsx(Box, {
                                sx: {
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'space-between',
                                                        mb: 2,
                                                        gap: 2
                                }, children: _jsxs(Box, { sx: { display: 'flex', alignItems: 'center' }, children: [_jsx(PhoneIcon, { sx: { fontSize: 16, color: '#6b7280', mr: 1 } }), _jsx(Typography, { variant: "body2", sx: { color: '#6b7280', fontSize: '0.8rem', fontWeight: 600 }, children: "+221774424223" })] })
                            }), _jsx(Button, {
                                variant: "outlined", size: "small", startIcon: _jsx(PlaceIcon, {}), onClick: () => handleOpenMap('EMAS CONSTRUCTION'), sx: {
                                                        borderColor: '#e67e22',
                                                        color: '#e67e22',
                                                        borderRadius: 2,
                                                        px: 3,
                                                        py: 1.5,
                                                        fontWeight: 700,
                                                        fontSize: '0.8rem',
                                                        textTransform: 'none',
                                                        minWidth: '160px',
                                                        boxShadow: '0 2px 8px rgba(249, 115, 22, 0.1)',
                                                        transition: 'all 0.3s ease',
                                                        '&:hover': {
                                                            backgroundColor: '#e67e22',
                                                            color: 'white',
                                                            borderColor: '#e67e22',
                                                            transform: 'translateY(-2px)',
                                                            boxShadow: '0 4px 12px rgba(249, 115, 22, 0.3)'
                                                        }
                                }, children: "Afficher La Carte"
                            })]
                        })]
                    }), _jsxs(Card, {
                        sx: {
                                        borderRadius: 2,
                                        overflow: 'hidden',
                                        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            transform: 'translateY(-4px)',
                                            boxShadow: '0 8px 30px rgba(0, 0, 0, 0.15)'
                                        }
                        }, children: [_jsx(Box, {
                            onClick: () => navigate('/entreprise/btp-senegal-collage'), sx: {
                                                height: 220,
                                                backgroundImage: 'url(/images/partners/btpsenegal.webp)',
                                                backgroundSize: 'cover',
                                                backgroundPosition: 'center',
                                                position: 'relative',
                                                display: 'flex',
                                                alignItems: 'flex-start',
                                                justifyContent: 'flex-start',
                                                p: 2,
                                                cursor: 'pointer',
                                                transition: 'all 0.3s ease',
                                                '&:hover': {
                                                    transform: 'scale(1.02)',
                                                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)'
                                                }
                            }
                        }), _jsxs(CardContent, {
                            sx: { p: 4, backgroundColor: 'white' }, children: [_jsx(Box, {
                                sx: { display: 'flex', alignItems: 'center', mb: 2 }, children: _jsx(Box, {
                                    sx: {
                                                            background: '#e67e22',
                                                            color: 'white',
                                                            px: 2,
                                                            py: 0.5,
                                                            borderRadius: 1,
                                                            fontSize: '0.7rem',
                                                            fontWeight: 600,
                                                            textTransform: 'uppercase'
                                    }, children: "BTP"
                                })
                            }), _jsxs(Box, {
                                sx: {
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'space-between',
                                                        mb: 2
                                }, children: [_jsx(Typography, {
                                    variant: "h5", sx: {
                                                                fontWeight: 600,
                                                                color: '#1f2937',
                                                                fontSize: '0.8rem'
                                    }, children: "BTP SENEGAL (Collage)"
                                }), _jsxs(Box, {
                                    sx: { display: 'flex', alignItems: 'center' }, children: [_jsx(AccessTimeIcon, { sx: { fontSize: 12, color: '#10b981', mr: 0.5 } }), _jsx(Typography, {
                                        variant: "body2", sx: {
                                                                        color: '#10b981',
                                                                        fontSize: '0.6rem',
                                                                        fontWeight: 600
                                        }, children: "Ouvert maintenant"
                                    })]
                                })]
                            }), _jsx(Box, {
                                sx: {
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'space-between',
                                                        mb: 2,
                                                        gap: 2
                                }, children: _jsxs(Box, { sx: { display: 'flex', alignItems: 'center' }, children: [_jsx(PhoneIcon, { sx: { fontSize: 16, color: '#6b7280', mr: 1 } }), _jsx(Typography, { variant: "body2", sx: { color: '#6b7280', fontSize: '0.8rem', fontWeight: 600 }, children: "+221774424223" })] })
                            }), _jsx(Button, {
                                variant: "outlined", size: "small", startIcon: _jsx(PlaceIcon, {}), onClick: () => handleOpenMap('EMAS CONSTRUCTION'), sx: {
                                                        borderColor: '#e67e22',
                                                        color: '#e67e22',
                                                        borderRadius: 2,
                                                        px: 3,
                                                        py: 1.5,
                                                        fontWeight: 700,
                                                        fontSize: '0.8rem',
                                                        textTransform: 'none',
                                                        minWidth: '160px',
                                                        boxShadow: '0 2px 8px rgba(249, 115, 22, 0.1)',
                                                        transition: 'all 0.3s ease',
                                                        '&:hover': {
                                                            backgroundColor: '#e67e22',
                                                            color: 'white',
                                                            borderColor: '#e67e22',
                                                            transform: 'translateY(-2px)',
                                                            boxShadow: '0 4px 12px rgba(249, 115, 22, 0.3)'
                                                        }
                                }, children: "Afficher La Carte"
                            })]
                        })]
                    }), _jsxs(Card, {
                        sx: {
                                        borderRadius: 2,
                                        overflow: 'hidden',
                                        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            transform: 'translateY(-4px)',
                                            boxShadow: '0 8px 30px rgba(0, 0, 0, 0.15)'
                                        }
                        }, children: [_jsx(Box, {
                            onClick: () => navigate('/entreprise/btp-senegal-excavator'), sx: {
                                                height: 220,
                                                backgroundImage: 'url(/images/partners/btp2.gif)',
                                                backgroundSize: 'cover',
                                                backgroundPosition: 'center',
                                                position: 'relative',
                                                display: 'flex',
                                                alignItems: 'flex-start',
                                                justifyContent: 'flex-start',
                                                p: 2,
                                                cursor: 'pointer',
                                                transition: 'all 0.3s ease',
                                                '&:hover': {
                                                    transform: 'scale(1.02)',
                                                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)'
                                                }
                            }
                        }), _jsxs(CardContent, {
                            sx: { p: 4, backgroundColor: 'white' }, children: [_jsx(Box, {
                                sx: { display: 'flex', alignItems: 'center', mb: 2 }, children: _jsx(Box, {
                                    sx: {
                                                            background: '#e67e22',
                                                            color: 'white',
                                                            px: 2,
                                                            py: 0.5,
                                                            borderRadius: 1,
                                                            fontSize: '0.7rem',
                                                            fontWeight: 600,
                                                            textTransform: 'uppercase'
                                    }, children: "BTP"
                                })
                            }), _jsxs(Box, {
                                sx: {
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'space-between',
                                                        mb: 2
                                }, children: [_jsx(Typography, {
                                    variant: "h5", sx: {
                                                                fontWeight: 600,
                                                                color: '#1f2937',
                                                                fontSize: '0.8rem'
                                    }, children: "BTP SENEGAL (Excavator)"
                                }), _jsxs(Box, {
                                    sx: { display: 'flex', alignItems: 'center' }, children: [_jsx(AccessTimeIcon, { sx: { fontSize: 12, color: '#10b981', mr: 0.5 } }), _jsx(Typography, {
                                        variant: "body2", sx: {
                                                                        color: '#10b981',
                                                                        fontSize: '0.6rem',
                                                                        fontWeight: 600
                                        }, children: "Ouvert maintenant"
                                    })]
                                })]
                            }), _jsx(Box, {
                                sx: {
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'space-between',
                                                        mb: 2,
                                                        gap: 2
                                }, children: _jsxs(Box, { sx: { display: 'flex', alignItems: 'center' }, children: [_jsx(PhoneIcon, { sx: { fontSize: 16, color: '#6b7280', mr: 1 } }), _jsx(Typography, { variant: "body2", sx: { color: '#6b7280', fontSize: '0.8rem', fontWeight: 600 }, children: "+221774424223" })] })
                            }), _jsx(Button, {
                                variant: "outlined", size: "small", startIcon: _jsx(PlaceIcon, {}), onClick: () => handleOpenMap('EMAS CONSTRUCTION'), sx: {
                                                        borderColor: '#e67e22',
                                                        color: '#e67e22',
                                                        borderRadius: 2,
                                                        px: 3,
                                                        py: 1.5,
                                                        fontWeight: 700,
                                                        fontSize: '0.8rem',
                                                        textTransform: 'none',
                                                        minWidth: '160px',
                                                        boxShadow: '0 2px 8px rgba(249, 115, 22, 0.1)',
                                                        transition: 'all 0.3s ease',
                                                        '&:hover': {
                                                            backgroundColor: '#e67e22',
                                                            color: 'white',
                                                            borderColor: '#e67e22',
                                                            transform: 'translateY(-2px)',
                                                            boxShadow: '0 4px 12px rgba(249, 115, 22, 0.3)'
                                                        }
                                }, children: "Afficher La Carte"
                            })]
                        })]
                    }), _jsxs(Card, {
                        sx: {
                                        borderRadius: 2,
                                        overflow: 'hidden',
                                        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            transform: 'translateY(-4px)',
                                            boxShadow: '0 8px 30px rgba(0, 0, 0, 0.15)'
                                        }
                        }, children: [_jsx(Box, {
                            onClick: () => navigate('/entreprise/soger-bat-architecture'), sx: {
                                                height: 220,
                                                backgroundImage: 'url(/images/partners/archi.webp)',
                                                backgroundSize: 'cover',
                                                backgroundPosition: 'center',
                                                position: 'relative',
                                                display: 'flex',
                                                alignItems: 'flex-start',
                                                justifyContent: 'flex-start',
                                                p: 2,
                                                cursor: 'pointer',
                                                transition: 'all 0.3s ease',
                                                '&:hover': {
                                                    transform: 'scale(1.02)',
                                                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)'
                                                }
                            }
                        }), _jsxs(CardContent, {
                            sx: { p: 4, backgroundColor: 'white' }, children: [_jsx(Box, {
                                sx: { display: 'flex', alignItems: 'center', mb: 2 }, children: _jsx(Box, {
                                    sx: {
                                                            background: '#8b5cf6',
                                                            color: 'white',
                                                            px: 2,
                                                            py: 0.5,
                                                            borderRadius: 1,
                                                            fontSize: '0.7rem',
                                                            fontWeight: 600,
                                                            textTransform: 'uppercase'
                                    }, children: "ARCHITECTURE"
                                })
                            }), _jsxs(Box, {
                                sx: {
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'space-between',
                                                        mb: 2
                                }, children: [_jsx(Typography, {
                                    variant: "h5", sx: {
                                                                fontWeight: 600,
                                                                color: '#1f2937',
                                                                fontSize: '0.8rem'
                                    }, children: "SOGER BAT - Architecture"
                                }), _jsxs(Box, {
                                    sx: { display: 'flex', alignItems: 'center' }, children: [_jsx(AccessTimeIcon, { sx: { fontSize: 12, color: '#10b981', mr: 0.5 } }), _jsx(Typography, {
                                        variant: "body2", sx: {
                                                                        color: '#10b981',
                                                                        fontSize: '0.6rem',
                                                                        fontWeight: 600
                                        }, children: "Ouvert maintenant"
                                    })]
                                })]
                            }), _jsx(Box, {
                                sx: {
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'space-between',
                                                        mb: 2,
                                                        gap: 2
                                }, children: _jsxs(Box, { sx: { display: 'flex', alignItems: 'center' }, children: [_jsx(PhoneIcon, { sx: { fontSize: 16, color: '#6b7280', mr: 1 } }), _jsx(Typography, { variant: "body2", sx: { color: '#6b7280', fontSize: '0.8rem', fontWeight: 600 }, children: "+221774424223" })] })
                            }), _jsx(Button, {
                                variant: "outlined", size: "small", startIcon: _jsx(PlaceIcon, {}), onClick: () => handleOpenMap('EMAS CONSTRUCTION'), sx: {
                                                        borderColor: '#e67e22',
                                                        color: '#e67e22',
                                                        borderRadius: 2,
                                                        px: 3,
                                                        py: 1.5,
                                                        fontWeight: 700,
                                                        fontSize: '0.8rem',
                                                        textTransform: 'none',
                                                        minWidth: '160px',
                                                        boxShadow: '0 2px 8px rgba(249, 115, 22, 0.1)',
                                                        transition: 'all 0.3s ease',
                                                        '&:hover': {
                                                            backgroundColor: '#e67e22',
                                                            color: 'white',
                                                            borderColor: '#e67e22',
                                                            transform: 'translateY(-2px)',
                                                            boxShadow: '0 4px 12px rgba(249, 115, 22, 0.3)'
                                                        }
                                }, children: "Afficher La Carte"
                            })]
                        })]
                    }), _jsxs(Card, {
                        sx: {
                            borderRadius: 2,
                            overflow: 'hidden',
                            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                                transform: 'translateY(-4px)',
                                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.15)'
                            }
                        }, children: [_jsx(Box, {
                            onClick: () => navigate('/entreprise/ebinka-group'), sx: {
                                height: 220,
                                backgroundImage: 'url(/entreprises/entreprise.jpeg)',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                position: 'relative',
                                display: 'flex',
                                alignItems: 'flex-start',
                                justifyContent: 'flex-start',
                                p: 2,
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    transform: 'scale(1.02)',
                                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)'
                                }
                            }
                        }), _jsxs(CardContent, {
                            sx: { p: 4, backgroundColor: 'white' }, children: [_jsx(Box, {
                                sx: { display: 'flex', alignItems: 'center', mb: 2 }, children: _jsx(Box, {
                                    sx: {
                                        background: '#e67e22',
                                        color: 'white',
                                        px: 2,
                                        py: 0.5,
                                        borderRadius: 1,
                                        fontSize: '0.7rem',
                                        fontWeight: 600,
                                        textTransform: 'uppercase'
                                    }, children: "BTP"
                                })
                            }), _jsxs(Box, {
                                sx: {
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    mb: 2
                                }, children: [_jsx(Typography, {
                                    variant: "h5", sx: {
                                        fontWeight: 600,
                                        color: '#1f2937',
                                        fontSize: '0.8rem'
                                    }, children: "EBINKA GROUP"
                                }), _jsxs(Box, {
                                    sx: { display: 'flex', alignItems: 'center' }, children: [_jsx(AccessTimeIcon, { sx: { fontSize: 12, color: '#10b981', mr: 0.5 } }), _jsx(Typography, {
                                        variant: "body2", sx: {
                                            color: '#10b981',
                                            fontSize: '0.6rem',
                                            fontWeight: 600
                                        }, children: "Ouvert maintenant"
                                    })]
                                })]
                            }), _jsx(Typography, { variant: "body2", sx: { color: '#6b7280', fontSize: '0.75rem', mb: 2, lineHeight: 1.6 }, children: "VOTRE PARTENAIRE EN CONSTRUCTION" }), _jsx(Typography, { variant: "body2", sx: { color: '#6b7280', fontSize: '0.7rem', mb: 1.5, lineHeight: 1.4 }, children: "THIES NGINTH en face station total Thiès - Sénégal" }), _jsx(Box, {
                                sx: {
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    mb: 2,
                                    gap: 2
                                }, children: _jsxs(Box, { sx: { display: 'flex', alignItems: 'center' }, children: [_jsx(PhoneIcon, { sx: { fontSize: 16, color: '#6b7280', mr: 1 } }), _jsx(Typography, { variant: "body2", sx: { color: '#6b7280', fontSize: '0.8rem', fontWeight: 600 }, children: "+221 77 386 42 53" })] })
                            }), _jsx(Button, {
                                variant: "outlined", size: "small", startIcon: _jsx(PlaceIcon, {}), onClick: () => handleOpenMap('EBINKA GROUP'), sx: {
                                    borderColor: '#e67e22',
                                    color: '#e67e22',
                                    borderRadius: 2,
                                    px: 3,
                                    py: 1.5,
                                    fontWeight: 700,
                                    fontSize: '0.8rem',
                                    textTransform: 'none',
                                    minWidth: '160px',
                                    boxShadow: '0 2px 8px rgba(249, 115, 22, 0.1)',
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        backgroundColor: '#e67e22',
                                        color: 'white',
                                        borderColor: '#e67e22',
                                        transform: 'translateY(-2px)',
                                        boxShadow: '0 4px 12px rgba(249, 115, 22, 0.3)'
                                    }
                                }, children: "Afficher La Carte"
                            })]
                        })]
                    })]
                })]
            })
        }), _jsx(Box, {
            sx: { py: 8, backgroundColor: '#f8fafc' }, children: _jsx(Container, {
                maxWidth: "lg", children: _jsxs(Box, {
                    sx: {
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            mb: 6
                    }, children: [_jsx("img", {
                        src: "/images/partners/btpscom.webp", alt: "BTPSENEGAL.COM Features", style: {
                                    maxWidth: '100%',
                                    height: 'auto',
                                    borderRadius: '8px',
                                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                                    marginBottom: '24px'
                        }
                    }), _jsxs(Box, {
                        sx: {
                                    backgroundColor: 'white',
                                    borderRadius: 2,
                                    p: 4,
                                    textAlign: 'center',
                                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                                    maxWidth: '600px'
                        }, children: [_jsx(Typography, {
                            variant: "h4", sx: {
                                            color: '#e67e22',
                                            fontWeight: 700,
                                            mb: 2
                            }, children: "Agenda BTP S\u00E9n\u00E9gal"
                        }), _jsx(Typography, {
                            variant: "h6", sx: {
                                            color: '#6b7280',
                                            fontWeight: 400
                            }, children: "Restez \u00E0 jour avec les \u00E9v\u00E9nements majeurs du BTP au S\u00E9n\u00E9gal"
                        })]
                    })]
                })
            })
        }), _jsx(Box, {
            sx: {
                    backgroundColor: '#ffff',
                    py: 7
            }, children: _jsxs(Container, {
                maxWidth: "lg", children: [_jsxs(Box, {
                    sx: { textAlign: 'center', mb: 6 }, children: [_jsx(Typography, {
                        variant: "h3", sx: {
                                        fontWeight: 700,
                                        color: '#e67e22',
                                        mb: 2
                        }, children: "Nos Statistiques"
                    }), _jsx(Typography, {
                        variant: "h6", sx: {
                                        color: 'rgba(9, 8, 8, 0.7)',
                                        maxWidth: '600px',
                                        mx: 'auto'
                        }, children: "Des chiffres qui t\u00E9moignent de notre impact dans le secteur BTP"
                    })]
                }), _jsx(Box, {
                    sx: {
                                display: 'flex',
                                justifyContent: 'center',
                                gap: { xs: 3, md: 8 },
                                flexWrap: 'wrap'
                            }, children: [
                                {
                                    icon: _jsx(BusinessIcon, { sx: { fontSize: 60, color: '#e67e22' } }),
                                    value: '1000+',
                                    label: 'Entreprises'
                                },
                                {
                                    icon: _jsx(LocationIcon, { sx: { fontSize: 60, color: '#e67e22' } }),
                                    value: '14',
                                    label: 'Régions'
                                },
                                {
                                    icon: _jsx(StarIcon, { sx: { fontSize: 60, color: '#e67e22' } }),
                                    value: '4.8/5',
                                    label: 'Satisfaction'
                                }
                    ].map((stat, index) => (_jsxs(Box, {
                        sx: {
                                    background: 'linear-gradient(135deg,rgb(244, 216, 196) 0%,rgb(238, 216, 180) 100%)',
                                    borderRadius: 2,
                                    p: 4,
                                    textAlign: 'center',
                                    minWidth: 300,
                                    border: '1px solid #e2e8f0',
                                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        transform: 'translateY(-4px)',
                                        boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)'
                                    }
                        }, children: [_jsx(Box, { sx: { mb: 2 }, children: stat.icon }), _jsx(Typography, {
                            variant: "h3", sx: {
                                            fontWeight: 900,
                                            color: '#e67e22',
                                            mb: 1
                            }, children: stat.value
                        }), _jsx(Typography, {
                            variant: "h6", sx: {
                                            color: '#64748b',
                                            fontWeight: 600
                            }, children: stat.label
                        })]
                    }, index)))
                })]
            })
        }), _jsx(Box, {
            sx: { py: 8, backgroundColor: 'white' }, children: _jsxs(Container, {
                maxWidth: "lg", children: [_jsxs(Box, {
                    sx: { textAlign: 'center', mb: 6 }, children: [_jsx(Typography, {
                        variant: "h3", sx: {
                                        color: '#e67e22',
                                        fontWeight: 700,
                                        mb: 2
                        }, children: "Actualit\u00E9s BTP"
                    }), _jsx(Typography, {
                        variant: "h6", sx: {
                                        color: '#6b7280',
                                        fontWeight: 400
                        }, children: "Consultez les derni\u00E8res nouvelles et articles de notre blog"
                    })]
                }), _jsxs(Box, {
                    sx: {
                                display: 'grid',
                                gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
                                gap: 4
                    }, children: [_jsxs(Card, {
                        sx: {
                                        borderRadius: 2,
                                        overflow: 'hidden',
                                        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            transform: 'translateY(-4px)',
                                            boxShadow: '0 8px 30px rgba(0, 0, 0, 0.15)'
                                        }
                        }, children: [_jsxs(Box, {
                            sx: {
                                                position: 'relative',
                                                height: 200,
                                                backgroundImage: 'url(/images/actualite/infrastructure.jpg)',
                                                backgroundSize: 'cover',
                                                backgroundPosition: 'center',
                                                overflow: 'hidden',
                                                transition: 'all 0.3s ease',
                                                '&:hover': {
                                                    '& .image-overlay': {
                                                        opacity: 1
                                                    },
                                                    '& .image-zoom': {
                                                        transform: 'scale(1.1)'
                                                    }
                                                }
                            }, children: [_jsx(Box, {
                                className: "image-zoom", sx: {
                                                        position: 'absolute',
                                                        top: 0,
                                                        left: 0,
                                                        right: 0,
                                                        bottom: 0,
                                                        backgroundImage: 'url(/images/actualite/infrastructure.jpg)',
                                                        backgroundSize: 'cover',
                                                        backgroundPosition: 'center',
                                                        transition: 'transform 0.3s ease'
                                }
                            }), _jsxs(Box, {
                                className: "image-overlay", sx: {
                                                        position: 'absolute',
                                                        top: 0,
                                                        left: 0,
                                                        right: 0,
                                                        bottom: 0,
                                                        background: 'rgba(0, 0, 0, 0.8)',
                                                        display: 'flex',
                                                        flexDirection: 'column',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        p: 3,
                                                        opacity: 0,
                                                        transition: 'opacity 0.3s ease',
                                                        color: 'white'
                                }, children: [_jsx(Typography, {
                                    variant: "h6", sx: {
                                                                color: 'white',
                                                                fontWeight: 600,
                                                                textAlign: 'center',
                                                                mb: 2,
                                                                fontSize: '1.1rem'
                                    }, children: "S\u00C9N\u00C9GAL : LA R\u00C9VOLUTION INFRASTRU..."
                                }), _jsx(Typography, {
                                    variant: "body2", sx: {
                                                                color: 'rgba(255, 255, 255, 0.8)',
                                                                textAlign: 'center',
                                                                mb: 3,
                                                                fontSize: '0.9rem'
                                    }, children: "D\u00E9couvrez les derni\u00E8res innovations dans le secteur du BTP au S\u00E9n\u00E9gal"
                                }), _jsx(Typography, {
                                    variant: "body2", sx: {
                                                                color: '#e67e22',
                                                                fontWeight: 600,
                                                                fontSize: '0.8rem'
                                    }, children: "Le digital au service du BTP"
                                })]
                            }), _jsx(Box, {
                                sx: {
                                                        position: 'absolute',
                                                        bottom: 16,
                                                        left: '50%',
                                                        transform: 'translateX(-50%)',
                                                        width: 60,
                                                        height: 60,
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center'
                                }, children: _jsx("img", {
                                    src: "/images/logos/logo.jpeg", alt: "BTP Senegal Logo", style: {
                                                            width: '100%',
                                                            height: '100%',
                                                            objectFit: 'contain',
                                                            borderRadius: '50%'
                                    }
                                })
                            })]
                        }), _jsxs(CardContent, {
                            sx: { p: 3 }, children: [_jsx(Typography, { variant: "body2", sx: { color: '#6b7280', mb: 1 }, children: "Btpsenegal.Com" }), _jsx(Typography, {
                                variant: "h6", sx: {
                                                        fontWeight: 600,
                                                        color: '#1f2937',
                                                        mb: 2,
                                                        lineHeight: 1.3
                                }, children: "S\u00C9N\u00C9GAL : LA R\u00C9VOLUTION INFRASTRU..."
                            }), _jsxs(Box, { sx: { display: 'flex', alignItems: 'center', justifyContent: 'space-between' }, children: [_jsx(Typography, { variant: "body2", sx: { color: '#6b7280', fontWeight: 600 }, children: "Actus BTP" }), _jsxs(Box, { sx: { display: 'flex', alignItems: 'center' }, children: [_jsx(Typography, { variant: "body2", sx: { color: '#6b7280', mr: 1 }, children: "\uD83D\uDCC5" }), _jsx(Typography, { variant: "body2", sx: { color: '#6b7280' }, children: "17 Janvier 2025" })] })] })]
                        })]
                    }), _jsxs(Card, {
                        sx: {
                                        borderRadius: 2,
                                        overflow: 'hidden',
                                        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            transform: 'translateY(-4px)',
                                            boxShadow: '0 8px 30px rgba(0, 0, 0, 0.15)'
                                        }
                        }, children: [_jsxs(Box, {
                            sx: {
                                                position: 'relative',
                                                height: 200,
                                                backgroundImage: 'url(/images/actualite/projet.webp)',
                                                backgroundSize: 'cover',
                                                backgroundPosition: 'center',
                                                overflow: 'hidden',
                                                transition: 'all 0.3s ease',
                                                '&:hover': {
                                                    '& .image-overlay': {
                                                        opacity: 1
                                                    },
                                                    '& .image-zoom': {
                                                        transform: 'scale(1.1)'
                                                    }
                                                }
                            }, children: [_jsx(Box, {
                                className: "image-zoom", sx: {
                                                        position: 'absolute',
                                                        top: 0,
                                                        left: 0,
                                                        right: 0,
                                                        bottom: 0,
                                                        backgroundImage: 'url(/images/actualite/projet.webp)',
                                                        backgroundSize: 'cover',
                                                        backgroundPosition: 'center',
                                                        transition: 'transform 0.3s ease'
                                }
                            }), _jsxs(Box, {
                                className: "image-overlay", sx: {
                                                        position: 'absolute',
                                                        top: 0,
                                                        left: 0,
                                                        right: 0,
                                                        bottom: 0,
                                                        background: 'rgba(0, 0, 0, 0.8)',
                                                        display: 'flex',
                                                        flexDirection: 'column',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        p: 3,
                                                        opacity: 0,
                                                        transition: 'opacity 0.3s ease',
                                                        color: 'white'
                                }, children: [_jsx(Typography, {
                                    variant: "h6", sx: {
                                                                color: 'white',
                                                                fontWeight: 600,
                                                                textAlign: 'center',
                                                                mb: 2,
                                                                fontSize: '1.1rem'
                                    }, children: "S\u00E9n\u00E9gal : La SICAP SA et IMMOSEN SAR..."
                                }), _jsx(Typography, {
                                    variant: "body2", sx: {
                                                                color: 'rgba(255, 255, 255, 0.8)',
                                                                textAlign: 'center',
                                                                mb: 3,
                                                                fontSize: '0.9rem'
                                    }, children: "Partenariats strat\u00E9giques dans le secteur immobilier"
                                }), _jsx(Typography, {
                                    variant: "body2", sx: {
                                                                color: '#e67e22',
                                                                fontWeight: 600,
                                                                fontSize: '0.8rem'
                                    }, children: "Le digital au service du BTP"
                                })]
                            }), _jsx(Box, {
                                sx: {
                                                        position: 'absolute',
                                                        bottom: 16,
                                                        left: '50%',
                                                        transform: 'translateX(-50%)',
                                                        width: 60,
                                                        height: 60,
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center'
                                }, children: _jsx("img", {
                                    src: "/images/logos/logo.jpeg", alt: "BTP Senegal Logo", style: {
                                                            width: '100%',
                                                            height: '100%',
                                                            objectFit: 'contain',
                                                            borderRadius: '50%'
                                    }
                                })
                            })]
                        }), _jsxs(CardContent, {
                            sx: { p: 3 }, children: [_jsx(Typography, { variant: "body2", sx: { color: '#6b7280', mb: 1 }, children: "Btpsenegal.Com" }), _jsx(Typography, {
                                variant: "h6", sx: {
                                                        fontWeight: 600,
                                                        color: '#1f2937',
                                                        mb: 2,
                                                        lineHeight: 1.3
                                }, children: "S\u00E9n\u00E9gal : La SICAP SA et IMMOSEN SAR..."
                            }), _jsxs(Box, { sx: { display: 'flex', alignItems: 'center', justifyContent: 'space-between' }, children: [_jsx(Typography, { variant: "body2", sx: { color: '#6b7280', fontWeight: 600 }, children: "Actus BTP" }), _jsxs(Box, { sx: { display: 'flex', alignItems: 'center' }, children: [_jsx(Typography, { variant: "body2", sx: { color: '#6b7280', mr: 1 }, children: "\uD83D\uDCC5" }), _jsx(Typography, { variant: "body2", sx: { color: '#6b7280' }, children: "17 Janvier 2025" })] })] })]
                        })]
                    }), _jsxs(Card, {
                        sx: {
                                        borderRadius: 2,
                                        overflow: 'hidden',
                                        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            transform: 'translateY(-4px)',
                                            boxShadow: '0 8px 30px rgba(0, 0, 0, 0.15)'
                                        }
                        }, children: [_jsxs(Box, {
                            sx: {
                                                position: 'relative',
                                                height: 200,
                                                backgroundImage: 'url(/images/actualite/ascenseur.jpg)',
                                                backgroundSize: 'cover',
                                                backgroundPosition: 'center',
                                                overflow: 'hidden',
                                                transition: 'all 0.3s ease',
                                                '&:hover': {
                                                    '& .image-overlay': {
                                                        opacity: 1
                                                    },
                                                    '& .image-zoom': {
                                                        transform: 'scale(1.1)'
                                                    }
                                                }
                            }, children: [_jsx(Box, {
                                className: "image-zoom", sx: {
                                                        position: 'absolute',
                                                        top: 0,
                                                        left: 0,
                                                        right: 0,
                                                        bottom: 0,
                                                        backgroundImage: 'url(/images/actualite/ascenseur.jpg)',
                                                        backgroundSize: 'cover',
                                                        backgroundPosition: 'center',
                                                        transition: 'transform 0.3s ease'
                                }
                            }), _jsxs(Box, {
                                className: "image-overlay", sx: {
                                                        position: 'absolute',
                                                        top: 0,
                                                        left: 0,
                                                        right: 0,
                                                        bottom: 0,
                                                        background: 'rgba(0, 0, 0, 0.8)',
                                                        display: 'flex',
                                                        flexDirection: 'column',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        p: 3,
                                                        opacity: 0,
                                                        transition: 'opacity 0.3s ease',
                                                        color: 'white'
                                }, children: [_jsx(Typography, {
                                    variant: "h6", sx: {
                                                                color: 'white',
                                                                fontWeight: 600,
                                                                textAlign: 'center',
                                                                mb: 2,
                                                                fontSize: '1.1rem'
                                    }, children: "Construire un Ascenseur Sur-Mesure au..."
                                }), _jsx(Typography, {
                                    variant: "body2", sx: {
                                                                color: 'rgba(255, 255, 255, 0.8)',
                                                                textAlign: 'center',
                                                                mb: 3,
                                                                fontSize: '0.9rem'
                                    }, children: "Solutions d'ascenseurs personnalis\u00E9es pour tous vos projets"
                                }), _jsx(Typography, {
                                    variant: "body2", sx: {
                                                                color: '#e67e22',
                                                                fontWeight: 600,
                                                                fontSize: '0.8rem'
                                    }, children: "Le digital au service du BTP"
                                })]
                            }), _jsx(Box, {
                                sx: {
                                                        position: 'absolute',
                                                        bottom: 16,
                                                        left: '50%',
                                                        transform: 'translateX(-50%)',
                                                        width: 60,
                                                        height: 60,
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center'
                                }, children: _jsx("img", {
                                    src: "/images/logos/logo.jpeg", alt: "BTP Senegal Logo", style: {
                                                            width: '100%',
                                                            height: '100%',
                                                            objectFit: 'contain',
                                                            borderRadius: '50%'
                                    }
                                })
                            })]
                        }), _jsxs(CardContent, {
                            sx: { p: 3 }, children: [_jsx(Typography, { variant: "body2", sx: { color: '#6b7280', mb: 1 }, children: "Btpsenegal.Com" }), _jsx(Typography, {
                                variant: "h6", sx: {
                                                        fontWeight: 600,
                                                        color: '#1f2937',
                                                        mb: 2,
                                                        lineHeight: 1.3
                                }, children: "Construire un Ascenseur Sur-Mesure au..."
                            }), _jsxs(Box, { sx: { display: 'flex', alignItems: 'center', justifyContent: 'space-between' }, children: [_jsx(Typography, { variant: "body2", sx: { color: '#6b7280', fontWeight: 600 }, children: "Actus BTP" }), _jsxs(Box, { sx: { display: 'flex', alignItems: 'center' }, children: [_jsx(Typography, { variant: "body2", sx: { color: '#6b7280', mr: 1 }, children: "\uD83D\uDCC5" }), _jsx(Typography, { variant: "body2", sx: { color: '#6b7280' }, children: "27 F\u00E9vrier 2021" })] })] })]
                        })]
                    }), _jsxs(Card, {
                        sx: {
                                        borderRadius: 2,
                                        overflow: 'hidden',
                                        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            transform: 'translateY(-4px)',
                                            boxShadow: '0 8px 30px rgba(0, 0, 0, 0.15)'
                                        }
                        }, children: [_jsxs(Box, {
                            sx: {
                                                position: 'relative',
                                                height: 200,
                                                backgroundImage: 'url(/images/actualite/btpsenegal.webp)',
                                                backgroundSize: 'cover',
                                                backgroundPosition: 'center',
                                                overflow: 'hidden',
                                                transition: 'all 0.3s ease',
                                                '&:hover': {
                                                    '& .image-overlay': {
                                                        opacity: 1
                                                    },
                                                    '& .image-zoom': {
                                                        transform: 'scale(1.1)'
                                                    }
                                                }
                            }, children: [_jsx(Box, {
                                className: "image-zoom", sx: {
                                                        position: 'absolute',
                                                        top: 0,
                                                        left: 0,
                                                        right: 0,
                                                        bottom: 0,
                                                        backgroundImage: 'url(/images/actualite/btpsenegal.webp)',
                                                        backgroundSize: 'cover',
                                                        backgroundPosition: 'center',
                                                        transition: 'transform 0.3s ease'
                                }
                            }), _jsxs(Box, {
                                className: "image-overlay", sx: {
                                                        position: 'absolute',
                                                        top: 0,
                                                        left: 0,
                                                        right: 0,
                                                        bottom: 0,
                                                        background: 'rgba(0, 0, 0, 0.8)',
                                                        display: 'flex',
                                                        flexDirection: 'column',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        p: 3,
                                                        opacity: 0,
                                                        transition: 'opacity 0.3s ease',
                                                        color: 'white'
                                }, children: [_jsx(Typography, {
                                    variant: "h6", sx: {
                                                                color: 'white',
                                                                fontWeight: 600,
                                                                textAlign: 'center',
                                                                mb: 2,
                                                                fontSize: '1.1rem'
                                    }, children: "Votre satisfaction au coeur de notre STRATEGIE"
                                }), _jsx(Typography, {
                                    variant: "body2", sx: {
                                                                color: 'rgba(255, 255, 255, 0.8)',
                                                                textAlign: 'center',
                                                                mb: 3,
                                                                fontSize: '0.9rem'
                                    }, children: "Notre engagement pour votre r\u00E9ussite"
                                }), _jsx(Typography, {
                                    variant: "body2", sx: {
                                                                color: '#e67e22',
                                                                fontWeight: 600,
                                                                fontSize: '0.8rem'
                                    }, children: "Le digital au service du BTP"
                                })]
                            }), _jsx(Box, {
                                sx: {
                                                        position: 'absolute',
                                                        bottom: 16,
                                                        left: '50%',
                                                        transform: 'translateX(-50%)',
                                                        width: 60,
                                                        height: 60,
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center'
                                }, children: _jsx("img", {
                                    src: "/images/logos/logo.jpeg", alt: "BTP Senegal Logo", style: {
                                                            width: '100%',
                                                            height: '100%',
                                                            objectFit: 'contain',
                                                            borderRadius: '50%'
                                    }
                                })
                            })]
                        }), _jsxs(CardContent, {
                            sx: { p: 3 }, children: [_jsx(Typography, { variant: "body2", sx: { color: '#6b7280', mb: 1 }, children: "Btpsenegal.Com" }), _jsx(Typography, {
                                variant: "h6", sx: {
                                                        fontWeight: 600,
                                                        color: '#1f2937',
                                                        mb: 2,
                                                        lineHeight: 1.3
                                }, children: "Votre satisfaction au coeur de notre STRATEGIE"
                            }), _jsxs(Box, { sx: { display: 'flex', alignItems: 'center', justifyContent: 'space-between' }, children: [_jsx(Typography, { variant: "body2", sx: { color: '#6b7280', fontWeight: 600 }, children: "Actus BTP" }), _jsxs(Box, { sx: { display: 'flex', alignItems: 'center' }, children: [_jsx(Typography, { variant: "body2", sx: { color: '#6b7280', mr: 1 }, children: "\uD83D\uDCC5" }), _jsx(Typography, { variant: "body2", sx: { color: '#6b7280' }, children: "25 F\u00E9vrier 2021" })] })] })]
                        })]
                    }), _jsxs(Card, {
                        sx: {
                                        borderRadius: 2,
                                        overflow: 'hidden',
                                        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            transform: 'translateY(-4px)',
                                            boxShadow: '0 8px 30px rgba(0, 0, 0, 0.15)'
                                        }
                        }, children: [_jsxs(Box, {
                            sx: {
                                                position: 'relative',
                                                height: 200,
                                                backgroundImage: 'url(/images/actualite/6581da8ba6aaa-2116-x-600-3-372x240.gif)',
                                                backgroundSize: 'cover',
                                                backgroundPosition: 'center',
                                                overflow: 'hidden',
                                                transition: 'all 0.3s ease',
                                                '&:hover': {
                                                    '& .image-overlay': {
                                                        opacity: 1
                                                    },
                                                    '& .image-zoom': {
                                                        transform: 'scale(1.1)'
                                                    }
                                                }
                            }, children: [_jsx(Box, {
                                className: "image-zoom", sx: {
                                                        position: 'absolute',
                                                        top: 0,
                                                        left: 0,
                                                        right: 0,
                                                        bottom: 0,
                                                        backgroundImage: 'url(/images/actualite/6581da8ba6aaa-2116-x-600-3-372x240.gif)',
                                                        backgroundSize: 'cover',
                                                        backgroundPosition: 'center',
                                                        transition: 'transform 0.3s ease'
                                }
                            }), _jsxs(Box, {
                                className: "image-overlay", sx: {
                                                        position: 'absolute',
                                                        top: 0,
                                                        left: 0,
                                                        right: 0,
                                                        bottom: 0,
                                                        background: 'rgba(0, 0, 0, 0.8)',
                                                        display: 'flex',
                                                        flexDirection: 'column',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        p: 3,
                                                        opacity: 0,
                                                        transition: 'opacity 0.3s ease',
                                                        color: 'white'
                                }, children: [_jsx(Typography, {
                                    variant: "h6", sx: {
                                                                color: 'white',
                                                                fontWeight: 600,
                                                                textAlign: 'center',
                                                                mb: 2,
                                                                fontSize: '1.1rem'
                                    }, children: "Les Projets de BTP les Plus Innovants a..."
                                }), _jsx(Typography, {
                                    variant: "body2", sx: {
                                                                color: 'rgba(255, 255, 255, 0.8)',
                                                                textAlign: 'center',
                                                                mb: 3,
                                                                fontSize: '0.9rem'
                                    }, children: "D\u00E9couvrez les projets les plus avanc\u00E9s du secteur"
                                }), _jsx(Typography, {
                                    variant: "body2", sx: {
                                                                color: '#e67e22',
                                                                fontWeight: 600,
                                                                fontSize: '0.8rem'
                                    }, children: "Le digital au service du BTP"
                                })]
                            }), _jsx(Box, {
                                sx: {
                                                        position: 'absolute',
                                                        bottom: 16,
                                                        left: '50%',
                                                        transform: 'translateX(-50%)',
                                                        width: 60,
                                                        height: 60,
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center'
                                }, children: _jsx("img", {
                                    src: "/images/logos/logo.jpeg", alt: "BTP Senegal Logo", style: {
                                                            width: '100%',
                                                            height: '100%',
                                                            objectFit: 'contain',
                                                            borderRadius: '50%'
                                    }
                                })
                            })]
                        }), _jsxs(CardContent, {
                            sx: { p: 3 }, children: [_jsx(Typography, { variant: "body2", sx: { color: '#6b7280', mb: 1 }, children: "Btpsenegal.Com" }), _jsx(Typography, {
                                variant: "h6", sx: {
                                                        fontWeight: 600,
                                                        color: '#1f2937',
                                                        mb: 2,
                                                        lineHeight: 1.3
                                }, children: "Les Projets de BTP les Plus Innovants a..."
                            }), _jsxs(Box, { sx: { display: 'flex', alignItems: 'center', justifyContent: 'space-between' }, children: [_jsx(Typography, { variant: "body2", sx: { color: '#6b7280', fontWeight: 600 }, children: "Actus BTP" }), _jsxs(Box, { sx: { display: 'flex', alignItems: 'center' }, children: [_jsx(Typography, { variant: "body2", sx: { color: '#6b7280', mr: 1 }, children: "\uD83D\uDCC5" }), _jsx(Typography, { variant: "body2", sx: { color: '#6b7280' }, children: "18 F\u00E9vrier 2021" })] })] })]
                        })]
                    })]
                })]
            })
        }), _jsxs(Box, {
            sx: {
                    py: 8,
                    backgroundImage: 'url(/images/actualite/imag.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    position: 'relative'
            }, children: [_jsx(Box, {
                sx: {
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: 'rgba(0, 0, 0, 0.7)'
                }
            }), _jsx(Container, {
                maxWidth: "lg", sx: { position: 'relative', zIndex: 1 }, children: _jsxs(Box, {
                    sx: {
                                display: 'flex',
                                alignItems: 'center',
                                minHeight: '500px',
                                gap: 6
                    }, children: [_jsxs(Box, {
                        sx: { flex: 1, color: 'white' }, children: [_jsx(Typography, {
                            variant: "h2", sx: {
                                                fontWeight: 700,
                                                mb: 3,
                                                fontSize: { xs: '2rem', md: '3rem' },
                                                lineHeight: 1.2
                            }, children: "\u00CAtes-vous une entreprise locale?"
                        }), _jsx(Typography, {
                            variant: "h5", sx: {
                                                mb: 4,
                                                color: 'rgba(255, 255, 255, 0.9)',
                                                fontWeight: 400,
                                                lineHeight: 1.4
                            }, children: "Rejoignez la communaut\u00E9 de centaines d'entreprises locales florissantes dans votre ville."
                        }), _jsxs(Box, {
                            sx: { display: 'flex', gap: 3, flexWrap: 'wrap' }, children: [_jsx(Button, {
                                variant: "contained", size: "large", sx: {
                                                        backgroundColor: '#e67e22',
                                                        color: 'white',
                                                        px: 4,
                                                        py: 2,
                                                        fontSize: '1.1rem',
                                                        fontWeight: 600,
                                                        borderRadius: 2,
                                                        textTransform: 'none',
                                                        boxShadow: '0 4px 20px rgba(249, 115, 22, 0.3)',
                                                        '&:hover': {
                                                            backgroundColor: '#d35400',
                                                            transform: 'translateY(-2px)',
                                                            boxShadow: '0 6px 25px rgba(249, 115, 22, 0.4)'
                                                        }
                                }, children: "Commencer"
                            }), _jsx(Button, {
                                variant: "outlined", size: "large", sx: {
                                                        borderColor: 'white',
                                                        color: 'white',
                                                        px: 4,
                                                        py: 2,
                                                        fontSize: '1.1rem',
                                                        fontWeight: 600,
                                                        borderRadius: 2,
                                                        textTransform: 'none',
                                                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                                        backdropFilter: 'blur(10px)',
                                                        '&:hover': {
                                                            backgroundColor: 'rgba(255, 255, 255, 0.2)',
                                                            borderColor: 'white',
                                                            transform: 'translateY(-2px)'
                                                        }
                                }, children: "R\u00E9clamez votre entreprise"
                            })]
                        })]
                    }), _jsx(Box, {
                        sx: {
                                        flex: 1,
                                        display: { xs: 'none', md: 'flex' },
                                        justifyContent: 'center',
                                        alignItems: 'center'
                        }, children: _jsx(Box, {
                            sx: {
                                            width: '100%',
                                            maxWidth: '400px',
                                            height: '400px',
                                            backgroundImage: 'url(/images/actualite/imag.jpg)',
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center',
                                            borderRadius: 3,
                                            boxShadow: '0 8px 30px rgba(0, 0, 0, 0.3)'
                            }
                        })
                    })]
                })
            })]
        }), _jsx("style", {
            children: `
        @keyframes glow {
          from {
            text-shadow: 2px 2px 4px rgba(0,0,0,0.3), 0 0 10px rgba(251, 191, 36, 0.5);
            filter: drop-shadow(0 2px 4px rgba(0,0,0,0.1)) drop-shadow(0 0 10px rgba(251, 191, 36, 0.3));
          }
          to {
            text-shadow: 2px 2px 4px rgba(0,0,0,0.3), 0 0 20px rgba(251, 191, 36, 0.8), 0 0 30px rgba(249, 115, 22, 0.6);
            filter: drop-shadow(0 2px 4px rgba(0,0,0,0.1)) drop-shadow(0 0 15px rgba(251, 191, 36, 0.5)) drop-shadow(0 0 25px rgba(249, 115, 22, 0.4));
          }
        }
      ` }), _jsxs(Dialog, {
                open: mapOpen, onClose: () => setMapOpen(false), maxWidth: "md", fullWidth: true, sx: {
                    '& .MuiDialog-paper': {
                        borderRadius: 3,
                        overflow: 'hidden'
                    }
                }, children: [_jsxs(DialogTitle, {
                    sx: {
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            backgroundColor: '#e67e22',
                            color: 'white',
                            py: 2
                    }, children: [_jsxs(Box, { sx: { display: 'flex', alignItems: 'center', gap: 1 }, children: [_jsx(LocationIcon, {}), _jsxs(Typography, { variant: "h6", sx: { fontWeight: 600 }, children: ["Localisation - ", selectedCompany] })] }), _jsx(IconButton, { onClick: () => setMapOpen(false), sx: { color: 'white' }, children: _jsx(CloseIcon, {}) })]
                }), _jsx(DialogContent, {
                    sx: { p: 0, height: '400px' }, children: _jsx(Box, {
                        sx: {
                                width: '100%',
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: '#f5f5f5',
                                position: 'relative'
                        }, children: _jsxs(Box, {
                            sx: {
                                    width: '100%',
                                    height: '100%',
                                    background: 'linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    position: 'relative',
                                    '&::before': {
                                        content: '""',
                                        position: 'absolute',
                                        top: '50%',
                                        left: '50%',
                                        transform: 'translate(-50%, -50%)',
                                        width: '20px',
                                        height: '20px',
                                        backgroundColor: '#e67e22',
                                        borderRadius: '50%',
                                        border: '3px solid white',
                                        boxShadow: '0 0 0 3px rgba(249, 115, 22, 0.3)',
                                        animation: 'pulse 2s infinite'
                                    }
                            }, children: [_jsx(LocationIcon, { sx: { fontSize: 60, color: '#e67e22', mb: 2 } }), _jsx(Typography, { variant: "h6", sx: { color: '#1976d2', fontWeight: 600, mb: 1 }, children: selectedCompany }), _jsx(Typography, { variant: "body2", sx: { color: '#666', textAlign: 'center', maxWidth: '300px' }, children: "Adresse principale de l'entreprise" }), _jsx(Typography, { variant: "caption", sx: { color: '#999', mt: 2 }, children: "Cliquez sur \"Ouvrir dans Google Maps\" pour voir la localisation exacte" })]
                        })
                    })
                }), _jsxs(DialogActions, {
                    sx: { p: 3, backgroundColor: '#fafafa' }, children: [_jsx(Button, { onClick: () => setMapOpen(false), variant: "outlined", sx: { mr: 1 }, children: "Fermer" }), _jsx(Button, {
                        variant: "contained", startIcon: _jsx(LocationIcon, {}), sx: {
                                    backgroundColor: '#e67e22',
                                    '&:hover': {
                                        backgroundColor: '#d35400'
                                    }
                                }, onClick: () => {
                                    // Ouvrir Google Maps avec l'adresse
                                    window.open('https://maps.google.com', '_blank');
                        }, children: "Ouvrir dans Google Maps"
                    })]
                })]
            })]
    }));
};
export default HomePage;
