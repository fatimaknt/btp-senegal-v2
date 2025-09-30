import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Box, Button, Dialog, DialogTitle, DialogContent, DialogActions, Grid, Card, CardMedia, Typography, IconButton, Chip } from '@mui/material';
import { Close as CloseIcon, Check as CheckIcon } from '@mui/icons-material';
// Liste des images disponibles organisées par catégorie
const imageCategories = {
    'Services': [
        '/images/services/services.jpg',
        '/images/services/expert.jpg',
        '/images/services/location.jpg',
        '/images/services/3-1-305x200.webp'
    ],
    'Actualités': [
        '/images/actualite/infrastructure.jpg',
        '/images/actualite/projet.webp',
        '/images/actualite/ascenseur.jpg',
        '/images/actualite/btpsenegal.webp',
        '/images/actualite/imag.jpg',
        '/images/actualite/WhatsApp-Image-2025-01-17-a-17.23.17_cc9c6eba-1024x751.webp'
    ],
    'Partenaires': [
        '/images/partners/btp.jpg',
        '/images/partners/sococim.jpg',
        '/images/partners/matoutils.jpg',
        '/images/partners/btpsenegal.webp',
        '/images/partners/btpscom.webp',
        '/images/partners/archi.webp',
        '/images/partners/btp2.gif'
    ],
    'Blog': [
        '/images/blog/655342640495f-COUVERTURE-SOGER-BAT-2116-600-4-372x240.webp',
        '/images/blog/WhatsApp-Image-2025-01-09-a-11.39.20_e5ce5dac-2-372x240.webp',
        '/images/blog/WhatsApp-Image-2025-01-09-a-12.26.50_158df8c5.webp',
        '/images/blog/WhatsApp-Image-2025-01-11-a-11.46.24_d3b2b3d1-372x240.webp',
        '/images/blog/WhatsApp-Image-2025-01-11-a-13.55.46_a0f78575-372x240.webp',
        '/images/blog/WhatsApp-Image-2025-01-13-a-13.48.56_99cd0fe1-372x240.webp'
    ],
    'Logos': [
        '/images/logos/logo.jpeg'
    ]
};
const ImageSelector = ({ open, onClose, onSelect, currentImage }) => {
    const [selectedImage, setSelectedImage] = useState(currentImage || '');
    const [selectedCategory, setSelectedCategory] = useState('Services');
    const handleImageSelect = (imageUrl) => {
        setSelectedImage(imageUrl);
    };
    const handleConfirm = () => {
        if (selectedImage) {
            onSelect(selectedImage);
            onClose();
        }
    };
    const handleClose = () => {
        setSelectedImage(currentImage || '');
        onClose();
    };
    return (_jsxs(Dialog, { open: open, onClose: handleClose, maxWidth: "lg", fullWidth: true, PaperProps: {
            sx: { height: '80vh' }
        }, children: [_jsx(DialogTitle, { children: _jsxs(Box, { sx: { display: 'flex', justifyContent: 'space-between', alignItems: 'center' }, children: [_jsx(Typography, { variant: "h6", sx: { fontWeight: 600 }, children: "S\u00E9lectionner une image" }), _jsx(IconButton, { onClick: handleClose, size: "small", children: _jsx(CloseIcon, {}) })] }) }), _jsxs(DialogContent, { sx: { p: 0 }, children: [_jsxs(Box, { sx: { p: 2, borderBottom: 1, borderColor: 'divider' }, children: [_jsx(Box, { sx: { display: 'flex', gap: 1, flexWrap: 'wrap', mb: 2 }, children: Object.keys(imageCategories).map((category) => (_jsx(Chip, { label: category, onClick: () => setSelectedCategory(category), color: selectedCategory === category ? 'primary' : 'default', variant: selectedCategory === category ? 'filled' : 'outlined', sx: { cursor: 'pointer' } }, category))) }), selectedImage && (_jsxs(Box, { sx: { display: 'flex', alignItems: 'center', gap: 2, p: 2, bgcolor: '#f5f5f5', borderRadius: 1 }, children: [_jsx(Typography, { variant: "body2", sx: { fontWeight: 600 }, children: "Image s\u00E9lectionn\u00E9e :" }), _jsx(Box, { component: "img", src: selectedImage, alt: "Selected", sx: {
                                            width: 60,
                                            height: 40,
                                            objectFit: 'cover',
                                            borderRadius: 1,
                                            border: '2px solid #1976d2'
                                        } }), _jsx(Typography, { variant: "body2", sx: { color: '#666', flex: 1 }, children: selectedImage })] }))] }), _jsx(Box, { sx: { p: 2, maxHeight: '50vh', overflow: 'auto' }, children: _jsx(Grid, { container: true, spacing: 2, children: imageCategories[selectedCategory].map((imageUrl) => (_jsx(Grid, { item: true, xs: 6, sm: 4, md: 3, children: _jsxs(Card, { sx: {
                                        cursor: 'pointer',
                                        border: selectedImage === imageUrl ? '2px solid #1976d2' : '1px solid #e0e0e0',
                                        borderRadius: 2,
                                        overflow: 'hidden',
                                        transition: 'all 0.2s ease',
                                        '&:hover': {
                                            transform: 'scale(1.02)',
                                            boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
                                        }
                                    }, onClick: () => handleImageSelect(imageUrl), children: [_jsx(CardMedia, { component: "img", height: "120", image: imageUrl, alt: "Image option", sx: { objectFit: 'cover' } }), selectedImage === imageUrl && (_jsx(Box, { sx: {
                                                position: 'absolute',
                                                top: 8,
                                                right: 8,
                                                backgroundColor: '#1976d2',
                                                borderRadius: '50%',
                                                p: 0.5
                                            }, children: _jsx(CheckIcon, { sx: { color: 'white', fontSize: 16 } }) }))] }) }, imageUrl))) }) })] }), _jsxs(DialogActions, { sx: { p: 2, borderTop: 1, borderColor: 'divider' }, children: [_jsx(Button, { onClick: handleClose, children: "Annuler" }), _jsx(Button, { onClick: handleConfirm, variant: "contained", disabled: !selectedImage, sx: { backgroundColor: '#f97316', '&:hover': { backgroundColor: '#ea580c' } }, children: "S\u00E9lectionner" })] })] }));
};
export default ImageSelector;
