import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { Box, Container, Typography, TextField, Button, Card, CardContent, Grid, Chip, Avatar, Rating, InputAdornment } from '@mui/material';
import { Search as SearchIcon, LocationOn as LocationIcon, Business as BusinessIcon, Phone as PhoneIcon, FilterList as FilterIcon } from '@mui/icons-material';
import { allCompaniesData } from '../../data/companies';
const AnnuairePage = () => {
    const [enterprises, setEnterprises] = useState([]);
    const [filteredEnterprises, setFilteredEnterprises] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedCity, setSelectedCity] = useState('');
    const [showFilters, setShowFilters] = useState(false);
    const categories = [
        'Entrepreneur général',
        'Spécialisé maçonnerie',
        'Spécialisé électricité',
        'Spécialisé plomberie',
        'Spécialisé menuiserie',
        'Spécialisé peinture',
        'Spécialisé carrelage',
        'Architecte',
        'Bureau d\'études',
        'Fournisseur matériaux',
        'Autre'
    ];
    const cities = ['Dakar', 'Thiès', 'Saint-Louis', 'Kaolack', 'Ziguinchor'];
    useEffect(() => {
        loadEnterprises();
        // Écouter les mises à jour depuis l'admin
        const handleEnterprisesUpdate = () => {
            loadEnterprises();
        };
        window.addEventListener('enterprisesUpdated', handleEnterprisesUpdate);
        return () => {
            window.removeEventListener('enterprisesUpdated', handleEnterprisesUpdate);
        };
    }, []);
    useEffect(() => {
        filterEnterprises();
    }, [enterprises, searchQuery, selectedCategory, selectedCity]);
    const loadEnterprises = () => {
        try {
            setLoading(true);
            // Utiliser les données des entreprises depuis le fichier companies.js
            const enterprisesWithMockData = allCompaniesData.map((enterprise) => ({
                ...enterprise,
                rating: enterprise.rating?.overall || 4.5,
                reviews: enterprise.rating?.totalReviews || Math.floor(Math.random() * 50) + 10,
                services: enterprise.services || ['Service 1', 'Service 2', 'Service 3'],
                verified: enterprise.isVerified || Math.random() > 0.3,
                is_active: true
            }));
            setEnterprises(enterprisesWithMockData);
            console.log('Loaded enterprises from companies data:', enterprisesWithMockData.length);
        }
        catch (error) {
            console.error('Error loading enterprises:', error);
            setEnterprises([]);
        }
        finally {
            setLoading(false);
        }
    };
    const filterEnterprises = () => {
        let filtered = enterprises;
        if (searchQuery) {
            filtered = filtered.filter(enterprise => enterprise.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                enterprise.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                enterprise.category.toLowerCase().includes(searchQuery.toLowerCase()));
        }
        if (selectedCategory) {
            filtered = filtered.filter(enterprise => enterprise.category === selectedCategory);
        }
        setFilteredEnterprises(filtered);
    };
    const handleFilter = () => {
        setShowFilters(!showFilters);
        console.log('Recherche:', searchQuery);
        console.log('Catégorie:', selectedCategory);
        console.log('Ville:', selectedCity);
    };
    return (_jsxs(Box, {
        sx: { backgroundColor: '#f8fafc', minHeight: '100vh' }, children: [_jsx(Box, {
            sx: {
                backgroundColor: '#fb923c',
                color: 'white',
                py: 8
            }, children: _jsxs(Container, {
                maxWidth: "lg", children: [_jsx(Typography, {
                    variant: "h3", sx: {
                        fontWeight: 800,
                        textAlign: 'center',
                        mb: 2,
                        color: 'white',
                        textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                        filter: 'drop-shadow(0 2px 4px rgba(251,191,36,0.3))',
                    }, children: "\uD83C\uDFE2 Annuaire des Entreprises BTP"
                }), _jsx(Typography, { variant: "h6", sx: { textAlign: 'center', mb: 6, opacity: 0.9 }, children: "Trouvez le professionnel parfait pour vos projets au S\u00E9n\u00E9gal \uD83C\uDDF8\uD83C\uDDF3" }), _jsx(Card, {
                    sx: {
                        maxWidth: 900,
                        mx: 'auto',
                        background: 'rgba(255, 255, 255, 0.95)',
                        backdropFilter: 'blur(20px)',
                        borderRadius: 4,
                        boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                    }, children: _jsx(CardContent, {
                        sx: { p: 4 }, children: _jsxs(Grid, {
                            container: true, spacing: 2, alignItems: "center", children: [_jsx(Grid, {
                                item: true, xs: 12, md: 5, children: _jsx(TextField, {
                                    fullWidth: true, placeholder: "Rechercher...", value: searchQuery, onChange: (e) => setSearchQuery(e.target.value), InputProps: {
                                        startAdornment: (_jsx(InputAdornment, { position: "start", children: _jsx(SearchIcon, { sx: { color: '#f97316', fontSize: 24 } }) })),
                                    }, sx: {
                                        '& .MuiOutlinedInput-root': {
                                            height: '60px',
                                            borderRadius: 3,
                                            backgroundColor: 'rgba(255, 255, 255, 0.9)',
                                            '& fieldset': {
                                                border: '2px solid rgba(249, 115, 22, 0.2)',
                                            },
                                            '&:hover fieldset': {
                                                border: '2px solid rgba(249, 115, 22, 0.4)',
                                            },
                                            '&.Mui-focused fieldset': {
                                                border: '2px solid #f97316',
                                            }
                                        }
                                    }
                                })
                            }), _jsx(Grid, {
                                item: true, xs: 12, md: 3, children: _jsxs(TextField, {
                                    fullWidth: true, select: true, value: selectedCategory, onChange: (e) => setSelectedCategory(e.target.value), SelectProps: { native: true }, sx: {
                                        '& .MuiOutlinedInput-root': {
                                            height: '60px',
                                            borderRadius: 3,
                                            backgroundColor: 'rgba(255, 255, 255, 0.9)',
                                            '& fieldset': {
                                                border: '2px solid rgba(249, 115, 22, 0.2)',
                                            },
                                            '&:hover fieldset': {
                                                border: '2px solid rgba(249, 115, 22, 0.4)',
                                            },
                                            '&.Mui-focused fieldset': {
                                                border: '2px solid #f97316',
                                            }
                                        },
                                        '& .MuiInputLabel-root': {
                                            display: 'none'
                                        }
                                    }, children: [_jsx("option", { value: "", children: "Toutes cat\u00E9gories" }), categories.map((cat) => (_jsx("option", { value: cat, children: cat }, cat)))]
                                })
                            }), _jsx(Grid, {
                                item: true, xs: 12, md: 3, children: _jsxs(TextField, {
                                    fullWidth: true, select: true, value: selectedCity, onChange: (e) => setSelectedCity(e.target.value), SelectProps: { native: true }, sx: {
                                        '& .MuiOutlinedInput-root': {
                                            height: '60px',
                                            borderRadius: 3,
                                            backgroundColor: 'rgba(255, 255, 255, 0.9)',
                                            '& fieldset': {
                                                border: '2px solid rgba(249, 115, 22, 0.2)',
                                            },
                                            '&:hover fieldset': {
                                                border: '2px solid rgba(249, 115, 22, 0.4)',
                                            },
                                            '&.Mui-focused fieldset': {
                                                border: '2px solid #f97316',
                                            }
                                        },
                                        '& .MuiInputLabel-root': {
                                            display: 'none'
                                        }
                                    }, children: [_jsx("option", { value: "", children: "Toutes villes" }), cities.map((city) => (_jsx("option", { value: city, children: city }, city)))]
                                })
                            }), _jsx(Grid, {
                                item: true, xs: 12, md: 1, children: _jsx(Button, {
                                    fullWidth: true, variant: "contained", onClick: handleFilter, sx: {
                                        height: '60px',
                                        minWidth: '60px',
                                        background: 'linear-gradient(135deg, #f97316 0%, #fb923c 100%)',
                                        borderRadius: 3,
                                        '&:hover': {
                                            background: 'linear-gradient(135deg, #ea580c 0%, #f97316 100%)',
                                            transform: 'translateY(-2px)',
                                        }
                                    }, children: _jsx(FilterIcon, {})
                                })
                            })]
                        })
                    })
                })]
            })
        }), showFilters && (_jsx(Box, {
            sx: { backgroundColor: '#f8fafc', py: 4 }, children: _jsx(Container, {
                maxWidth: "lg", children: _jsxs(Card, {
                    sx: { p: 3, mb: 4 }, children: [_jsx(Typography, { variant: "h6", sx: { mb: 3, color: '#f97316', fontWeight: 600 }, children: "\uD83D\uDD0D Filtres avanc\u00E9s" }), _jsxs(Grid, { container: true, spacing: 3, children: [_jsxs(Grid, { item: true, xs: 12, md: 4, children: [_jsx(Typography, { variant: "body2", sx: { mb: 1, fontWeight: 500 }, children: "Note minimum" }), _jsxs(TextField, { fullWidth: true, select: true, value: "", SelectProps: { native: true }, sx: { '& .MuiOutlinedInput-root': { height: '50px' } }, children: [_jsx("option", { value: "", children: "Toutes les notes" }), _jsx("option", { value: "4", children: "4+ \u00E9toiles" }), _jsx("option", { value: "3", children: "3+ \u00E9toiles" }), _jsx("option", { value: "2", children: "2+ \u00E9toiles" })] })] }), _jsxs(Grid, { item: true, xs: 12, md: 4, children: [_jsx(Typography, { variant: "body2", sx: { mb: 1, fontWeight: 500 }, children: "Statut" }), _jsxs(TextField, { fullWidth: true, select: true, value: "", SelectProps: { native: true }, sx: { '& .MuiOutlinedInput-root': { height: '50px' } }, children: [_jsx("option", { value: "", children: "Tous" }), _jsx("option", { value: "verified", children: "V\u00E9rifi\u00E9es uniquement" }), _jsx("option", { value: "new", children: "Nouvelles entreprises" })] })] }), _jsxs(Grid, { item: true, xs: 12, md: 4, children: [_jsx(Typography, { variant: "body2", sx: { mb: 1, fontWeight: 500 }, children: "Services" }), _jsxs(TextField, { fullWidth: true, select: true, value: "", SelectProps: { native: true }, sx: { '& .MuiOutlinedInput-root': { height: '50px' } }, children: [_jsx("option", { value: "", children: "Tous les services" }), _jsx("option", { value: "emergency", children: "Urgences 24h" }), _jsx("option", { value: "consultation", children: "Consultation gratuite" }), _jsx("option", { value: "warranty", children: "Garantie" })] })] })] }), _jsxs(Box, {
                        sx: { display: 'flex', gap: 2, mt: 3, justifyContent: 'flex-end' }, children: [_jsx(Button, { variant: "outlined", onClick: () => setShowFilters(false), sx: { borderColor: '#f97316', color: '#f97316' }, children: "Annuler" }), _jsx(Button, {
                            variant: "contained", sx: {
                                background: 'linear-gradient(135deg, #f97316 0%, #fb923c 100%)',
                                '&:hover': {
                                    background: 'linear-gradient(135deg, #ea580c 0%, #f97316 100%)',
                                }
                            }, children: "Appliquer les filtres"
                        })]
                    })]
                })
            })
        })), _jsxs(Container, {
            maxWidth: "lg", sx: { py: 6 }, children: [_jsxs(Box, {
                sx: { mb: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }, children: [_jsxs(Typography, { variant: "h5", sx: { fontWeight: 600, color: '#1f2937' }, children: [filteredEnterprises.length, " entreprises trouv\u00E9es"] }), _jsx(Box, {
                    sx: { display: 'flex', gap: 1, flexWrap: 'wrap' }, children: ['Vérifiées', 'Mieux notées', 'À proximité'].map((filter) => (_jsx(Chip, {
                        label: filter, clickable: true, sx: {
                            backgroundColor: 'rgba(249, 115, 22, 0.1)',
                            color: '#f97316',
                            '&:hover': {
                                backgroundColor: 'rgba(249, 115, 22, 0.2)',
                            }
                        }
                    }, filter)))
                })]
            }), _jsx(Box, {
                sx: { display: 'flex', flexDirection: 'column', gap: 3 },
                children: filteredEnterprises.map((enterprise) => (_jsx(Card, {
                    key: enterprise.id,
                    sx: {
                        width: '100%',
                        transition: 'all 0.3s ease',
                        borderRadius: 3,
                        border: '1px solid #e5e7eb',
                        '&:hover': {
                            transform: 'translateY(-4px)',
                            boxShadow: '0 15px 35px rgba(249, 115, 22, 0.15)',
                            border: '1px solid #f97316',
                        }
                    },
                    children: _jsxs(CardContent, {
                        sx: { p: 4 },
                        children: [
                            // Header avec avatar, nom et rating
                            _jsxs(Box, {
                                sx: {
                                    display: 'flex',
                                    alignItems: 'center',
                                    mb: 3,
                                    gap: 3
                                },
                                children: [
                                    _jsx(Avatar, {
                                        sx: {
                                            bgcolor: '#f97316',
                                            width: 70,
                                            height: 70,
                                            fontSize: '1.5rem'
                                        },
                                        children: _jsx(BusinessIcon, {})
                                    }),
                                    _jsxs(Box, {
                                        sx: { flex: 1 },
                                        children: [
                                            _jsxs(Box, {
                                                sx: {
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: 2,
                                                    mb: 1
                                                },
                                                children: [
                                                    _jsx(Typography, {
                                                        variant: "h5",
                                                        sx: {
                                                            fontWeight: 600,
                                                            color: '#1f2937'
                                                        },
                                                        children: enterprise.name
                                                    }),
                                                    enterprise.verified && (_jsx(Chip, {
                                                        label: "✓ Vérifié",
                                                        size: "small",
                                                        sx: {
                                                            backgroundColor: '#10b981',
                                                            color: 'white',
                                                            fontWeight: 600
                                                        }
                                                    }))
                                                ]
                                            }),
                                            _jsx(Typography, {
                                                variant: "h6",
                                                color: "text.secondary",
                                                sx: {
                                                    mb: 1,
                                                    fontWeight: 500
                                                },
                                                children: enterprise.category
                                            }),
                                            _jsxs(Box, {
                                                sx: {
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: 1
                                                },
                                                children: [
                                                    _jsx(Rating, {
                                                        value: enterprise.rating || 4.5,
                                                        precision: 0.1,
                                                        size: "medium",
                                                        readOnly: true
                                                    }),
                                                    _jsxs(Typography, {
                                                        variant: "body1",
                                                        color: "text.secondary",
                                                        sx: { fontWeight: 500 },
                                                        children: [
                                                            (enterprise.rating || 4.5).toFixed(1),
                                                            " (",
                                                            enterprise.reviews || 0,
                                                            " avis)"
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    // Bouton d'action à droite
                                    _jsx(Button, {
                                        variant: "contained",
                                        size: "large",
                                        onClick: () => {
                                            const phone = enterprise.phone || enterprise.contact_phone;
                                            if (phone) {
                                                window.open(`https://wa.me/${phone.replace(/\D/g, '')}`, '_blank');
                                            }
                                        },
                                        sx: {
                                            background: 'linear-gradient(135deg, #f97316 0%, #fb923c 100%)',
                                            color: 'white',
                                            px: 4,
                                            py: 2,
                                            borderRadius: 3,
                                            fontWeight: 600,
                                            fontSize: '1rem',
                                            textTransform: 'none',
                                            minWidth: '180px',
                                            '&:hover': {
                                                background: 'linear-gradient(135deg, #ea580c 0%, #f97316 100%)',
                                                transform: 'translateY(-2px)',
                                                boxShadow: '0 8px 25px rgba(249, 115, 22, 0.3)'
                                            }
                                        },
                                        children: "📞 Contacter"
                                    })
                                ]
                            }),

                            // Description
                            _jsx(Typography, {
                                variant: "body1",
                                sx: {
                                    mb: 3,
                                    color: 'text.secondary',
                                    lineHeight: 1.6
                                },
                                children: enterprise.description
                            }),

                            // Services et informations
                            _jsxs(Box, {
                                sx: {
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'flex-start',
                                    flexWrap: 'wrap',
                                    gap: 3
                                },
                                children: [
                                    // Services
                                    _jsx(Box, {
                                        sx: { flex: 1, minWidth: '300px' },
                                        children: _jsxs(Box, {
                                            sx: {
                                                display: 'flex',
                                                flexWrap: 'wrap',
                                                gap: 1
                                            },
                                            children: [
                                                _jsx(Typography, {
                                                    variant: "subtitle2",
                                                    sx: {
                                                        width: '100%',
                                                        mb: 1,
                                                        fontWeight: 600,
                                                        color: '#f97316'
                                                    },
                                                    children: "Services :"
                                                }),
                                                enterprise.services?.map((service, index) => (_jsx(Chip, {
                                                    key: index,
                                                    label: service,
                                                    size: "medium",
                                                    sx: {
                                                        backgroundColor: 'rgba(249, 115, 22, 0.1)',
                                                        color: '#f97316',
                                                        fontWeight: 500,
                                                        '&:hover': {
                                                            backgroundColor: 'rgba(249, 115, 22, 0.2)',
                                                        }
                                                    }
                                                }, index)))
                                            ]
                                        })
                                    }),

                                    // Informations de contact
                                    _jsxs(Box, {
                                        sx: {
                                            display: 'flex',
                                            flexDirection: 'column',
                                            gap: 2,
                                            minWidth: '300px'
                                        },
                                        children: [
                                            _jsxs(Box, {
                                                sx: {
                                                    display: 'flex',
                                                    alignItems: 'flex-start',
                                                    gap: 2
                                                },
                                                children: [
                                                    _jsx(LocationIcon, {
                                                        sx: {
                                                            color: '#f97316',
                                                            fontSize: 20,
                                                            mt: 0.5
                                                        }
                                                    }),
                                                    _jsx(Typography, {
                                                        variant: "body1",
                                                        sx: {
                                                            lineHeight: 1.4,
                                                            color: '#374151'
                                                        },
                                                        children: enterprise.address || 'Dakar'
                                                    })
                                                ]
                                            }),
                                            _jsxs(Box, {
                                                sx: {
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: 2
                                                },
                                                children: [
                                                    _jsx(PhoneIcon, {
                                                        sx: {
                                                            color: '#f97316',
                                                            fontSize: 20
                                                        }
                                                    }),
                                                    _jsx(Typography, {
                                                        variant: "body1",
                                                        sx: {
                                                            fontWeight: 500,
                                                            color: '#374151'
                                                        },
                                                        children: enterprise.phone || enterprise.contact_phone || 'Aucun numéro'
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                }, enterprise.id)))
            }), _jsx(Box, {
                sx: { display: 'flex', justifyContent: 'center', mt: 6 }, children: _jsx(Button, {
                    variant: "contained", sx: {
                        background: 'linear-gradient(135deg, #f97316 0%, #fb923c 100%)',
                        px: 4,
                        '&:hover': {
                            background: 'linear-gradient(135deg, #ea580c 0%, #f97316 100%)',
                        }
                    }, children: "Charger plus d'entreprises"
                })
            })]
        })]
    }));
};
export default AnnuairePage;
