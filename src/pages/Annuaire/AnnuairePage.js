import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { Box, Container, Typography, TextField, Button, Card, CardContent, Grid, Chip, Avatar, Rating, InputAdornment } from '@mui/material';
import { Search as SearchIcon, LocationOn as LocationIcon, Business as BusinessIcon, Phone as PhoneIcon, FilterList as FilterIcon } from '@mui/icons-material';
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
            const stored = localStorage.getItem('btp_enterprises');
            if (stored) {
                const enterprisesData = JSON.parse(stored);
                // Filtrer seulement les entreprises actives
                const activeEnterprises = enterprisesData.filter((enterprise) => enterprise.is_active);
                // Ajouter des données mockées pour le design
                const enterprisesWithMockData = activeEnterprises.map((enterprise) => ({
                    ...enterprise,
                    rating: 4.5 + Math.random() * 0.5,
                    reviews: Math.floor(Math.random() * 50) + 10,
                    services: ['Service 1', 'Service 2', 'Service 3'],
                    verified: Math.random() > 0.3
                }));
                setEnterprises(enterprisesWithMockData);
                console.log('Loaded enterprises from localStorage:', enterprisesWithMockData);
                console.log('Phone numbers:', enterprisesWithMockData.map(e => ({ name: e.name, phone: e.phone, contact_phone: e.contact_phone })));
            }
            else {
                setEnterprises([]);
                console.log('No enterprises found in localStorage');
            }
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
            }), _jsx(Grid, {
                container: true, spacing: 3, children: filteredEnterprises.map((enterprise) => (_jsx(Grid, {
                    item: true, xs: 12, md: 6, lg: 4, children: _jsx(Card, {
                        sx: {
                            height: '100%',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                                transform: 'translateY(-5px)',
                                boxShadow: '0 15px 35px rgba(249, 115, 22, 0.15)',
                            }
                        }, children: _jsxs(CardContent, {
                            sx: { p: 3 }, children: [_jsxs(Box, {
                                sx: { display: 'flex', alignItems: 'start', mb: 2 }, children: [_jsx(Avatar, {
                                    sx: {
                                        bgcolor: '#f97316',
                                        mr: 2,
                                        width: 56,
                                        height: 56
                                    }, children: _jsx(BusinessIcon, {})
                                }), _jsxs(Box, {
                                    sx: { flex: 1 }, children: [_jsxs(Box, {
                                        sx: { display: 'flex', alignItems: 'center', gap: 1, mb: 1 }, children: [_jsx(Typography, { variant: "h6", sx: { fontWeight: 600 }, children: enterprise.name }), enterprise.verified && (_jsx(Chip, {
                                            label: "\u2713", size: "small", sx: {
                                                backgroundColor: '#00853f',
                                                color: 'white',
                                                minWidth: '24px',
                                                height: '24px'
                                            }
                                        }))]
                                    }), _jsx(Typography, { variant: "body2", color: "text.secondary", sx: { mb: 1 }, children: enterprise.category }), _jsxs(Box, { sx: { display: 'flex', alignItems: 'center', gap: 1 }, children: [_jsx(Rating, { value: enterprise.rating || 4.5, precision: 0.1, size: "small", readOnly: true }), _jsxs(Typography, { variant: "body2", color: "text.secondary", children: [enterprise.rating?.toFixed(1), " (", enterprise.reviews, " avis)"] })] })]
                                })]
                            }), _jsx(Typography, { variant: "body2", sx: { mb: 2, color: 'text.secondary' }, children: enterprise.description }), _jsx(Box, {
                                sx: { mb: 2 }, children: _jsx(Box, {
                                    sx: { display: 'flex', flexWrap: 'wrap', gap: 0.5 }, children: enterprise.services?.map((service, index) => (_jsx(Chip, {
                                        label: service, size: "small", sx: {
                                            backgroundColor: 'rgba(249, 115, 22, 0.1)',
                                            color: '#f97316',
                                        }
                                    }, index)))
                                })
                            }), _jsxs(Box, { sx: { display: 'flex', alignItems: 'center', gap: 1, mb: 2 }, children: [_jsx(LocationIcon, { sx: { color: '#f97316', fontSize: 18 } }), _jsx(Typography, { variant: "body2", children: enterprise.address || 'Dakar' })] }), _jsxs(Box, { sx: { display: 'flex', alignItems: 'center', gap: 1, mb: 3 }, children: [_jsx(PhoneIcon, { sx: { color: '#f97316', fontSize: 18 } }), _jsx(Typography, { variant: "body2", children: enterprise.phone || enterprise.contact_phone || 'Aucun numéro' })] }), _jsx(Box, {
                                sx: { display: 'flex', justifyContent: 'center' }, children: _jsx(Button, {
                                    variant: "contained", size: "medium", onClick: () => window.open(`https://wa.me/${enterprise.phone.replace(/\D/g, '')}`, '_blank'), sx: {
                                        background: 'linear-gradient(135deg, #e67e22 0%, #f39c12 100%)',
                                        color: 'white',
                                        px: 4,
                                        py: 1.5,
                                        borderRadius: 2,
                                        fontWeight: 600,
                                        '&:hover': {
                                            background: 'linear-gradient(135deg, #d35400 0%, #e67e22 100%)',
                                            transform: 'translateY(-2px)',
                                            boxShadow: '0 8px 25px rgba(230, 126, 34, 0.3)'
                                        }
                                    }, children: "\uD83D\uDCDE Contacter via WhatsApp"
                                })
                            })]
                        })
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
