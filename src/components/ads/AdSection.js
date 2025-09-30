import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { Box, Card, CardContent, Typography, Button } from '@mui/material';
import { Campaign as CampaignIcon } from '@mui/icons-material';
const AdSection = ({ title = "Publicités", maxAds = 3, showTitle = true }) => {
    const [ads, setAds] = useState([]);
    useEffect(() => {
        loadAds();
        // Écouter les changements de localStorage
        const handleStorageChange = () => {
            loadAds();
        };
        window.addEventListener('storage', handleStorageChange);
        // Écouter les événements personnalisés pour les mises à jour locales
        window.addEventListener('adsUpdated', handleStorageChange);
        return () => {
            window.removeEventListener('storage', handleStorageChange);
            window.removeEventListener('adsUpdated', handleStorageChange);
        };
    }, []);
    const loadAds = async () => {
        try {
            console.log('Loading ads from localStorage...');
            const storedAds = localStorage.getItem('btp_advertisements');
            if (storedAds) {
                const parsedAds = JSON.parse(storedAds);
                const activeAds = parsedAds.filter((ad) => ad.is_active === true);
                console.log('Active ads loaded:', activeAds);
                setAds(activeAds);
            }
            else {
                console.log('No ads found in localStorage');
                setAds([]);
            }
        }
        catch (err) {
            console.error('Error in loadAds:', err);
        }
    };
    const displayAds = ads.slice(0, maxAds);
    return (_jsxs(Box, { sx: { mb: 4 }, children: [showTitle && (_jsxs(Typography, { variant: "h4", sx: {
                    fontWeight: 700,
                    color: '#1f2937',
                    mb: 4,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    textAlign: 'center'
                }, children: [_jsx(CampaignIcon, { sx: { fontSize: 32, color: '#f97316' } }), title] })), _jsx(Box, { sx: { display: 'flex', flexWrap: 'wrap', gap: 3 }, children: displayAds.map((ad) => (_jsx(Box, { sx: { flex: '1 1 300px', minWidth: '300px' }, children: _jsxs(Card, { sx: {
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                                transform: 'translateY(-4px)',
                                boxShadow: 4
                            }
                        }, children: [_jsx(Box, { sx: {
                                    height: 200,
                                    backgroundImage: `url(${ad.image_url})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    position: 'relative'
                                }, children: _jsx(Box, { sx: {
                                        position: 'absolute',
                                        bottom: 0,
                                        left: 0,
                                        right: 0,
                                        background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
                                        p: 2,
                                        color: 'white'
                                    }, children: _jsx(Typography, { variant: "h6", sx: { fontWeight: 600 }, children: ad.title }) }) }), _jsxs(CardContent, { sx: { flexGrow: 1, display: 'flex', flexDirection: 'column' }, children: [_jsx(Typography, { variant: "body2", color: "text.secondary", sx: { mb: 2 }, children: ad.description }), _jsx(Box, { sx: { mt: 'auto' }, children: ad.link_url ? (_jsx(Button, { variant: "contained", fullWidth: true, href: ad.link_url, target: "_blank", sx: {
                                                backgroundColor: '#f97316',
                                                '&:hover': { backgroundColor: '#ea580c' }
                                            }, children: "Voir la publicit\u00E9" })) : (_jsx(Button, { variant: "outlined", fullWidth: true, sx: {
                                                borderColor: '#f97316',
                                                color: '#f97316',
                                                '&:hover': {
                                                    borderColor: '#ea580c',
                                                    backgroundColor: 'rgba(249, 115, 22, 0.1)'
                                                }
                                            }, children: "Publicit\u00E9" })) })] })] }) }, ad.id))) })] }));
};
export default AdSection;
