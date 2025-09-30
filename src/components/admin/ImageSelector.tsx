import React, { useState } from 'react'
import {
    Box,
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Grid,
    Card,
    CardMedia,
    Typography,
    IconButton,
    Chip
} from '@mui/material'
import {
    Close as CloseIcon,
    Check as CheckIcon
} from '@mui/icons-material'

interface ImageSelectorProps {
    open: boolean
    onClose: () => void
    onSelect: (imageUrl: string) => void
    currentImage?: string
}

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
}

const ImageSelector: React.FC<ImageSelectorProps> = ({
    open,
    onClose,
    onSelect,
    currentImage
}) => {
    const [selectedImage, setSelectedImage] = useState<string>(currentImage || '')
    const [selectedCategory, setSelectedCategory] = useState<string>('Services')

    const handleImageSelect = (imageUrl: string) => {
        setSelectedImage(imageUrl)
    }

    const handleConfirm = () => {
        if (selectedImage) {
            onSelect(selectedImage)
            onClose()
        }
    }

    const handleClose = () => {
        setSelectedImage(currentImage || '')
        onClose()
    }

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            maxWidth="lg"
            fullWidth
            PaperProps={{
                sx: { height: '80vh' }
            }}
        >
            <DialogTitle>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        Sélectionner une image
                    </Typography>
                    <IconButton onClick={handleClose} size="small">
                        <CloseIcon />
                    </IconButton>
                </Box>
            </DialogTitle>

            <DialogContent sx={{ p: 0 }}>
                <Box sx={{ p: 2, borderBottom: 1, borderColor: 'divider' }}>
                    {/* Sélecteur de catégorie */}
                    <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 2 }}>
                        {Object.keys(imageCategories).map((category) => (
                            <Chip
                                key={category}
                                label={category}
                                onClick={() => setSelectedCategory(category)}
                                color={selectedCategory === category ? 'primary' : 'default'}
                                variant={selectedCategory === category ? 'filled' : 'outlined'}
                                sx={{ cursor: 'pointer' }}
                            />
                        ))}
                    </Box>

                    {/* Image sélectionnée */}
                    {selectedImage && (
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, p: 2, bgcolor: '#f5f5f5', borderRadius: 1 }}>
                            <Typography variant="body2" sx={{ fontWeight: 600 }}>
                                Image sélectionnée :
                            </Typography>
                            <Box
                                component="img"
                                src={selectedImage}
                                alt="Selected"
                                sx={{
                                    width: 60,
                                    height: 40,
                                    objectFit: 'cover',
                                    borderRadius: 1,
                                    border: '2px solid #1976d2'
                                }}
                            />
                            <Typography variant="body2" sx={{ color: '#666', flex: 1 }}>
                                {selectedImage}
                            </Typography>
                        </Box>
                    )}
                </Box>

                {/* Grille d'images */}
                <Box sx={{ p: 2, maxHeight: '50vh', overflow: 'auto' }}>
                    <Grid container spacing={2}>
                        {imageCategories[selectedCategory as keyof typeof imageCategories].map((imageUrl) => (
                            <Grid item xs={6} sm={4} md={3} key={imageUrl}>
                                <Card
                                    sx={{
                                        cursor: 'pointer',
                                        border: selectedImage === imageUrl ? '2px solid #1976d2' : '1px solid #e0e0e0',
                                        borderRadius: 2,
                                        overflow: 'hidden',
                                        transition: 'all 0.2s ease',
                                        '&:hover': {
                                            transform: 'scale(1.02)',
                                            boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
                                        }
                                    }}
                                    onClick={() => handleImageSelect(imageUrl)}
                                >
                                    <CardMedia
                                        component="img"
                                        height="120"
                                        image={imageUrl}
                                        alt="Image option"
                                        sx={{ objectFit: 'cover' }}
                                    />
                                    {selectedImage === imageUrl && (
                                        <Box
                                            sx={{
                                                position: 'absolute',
                                                top: 8,
                                                right: 8,
                                                backgroundColor: '#1976d2',
                                                borderRadius: '50%',
                                                p: 0.5
                                            }}
                                        >
                                            <CheckIcon sx={{ color: 'white', fontSize: 16 }} />
                                        </Box>
                                    )}
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </DialogContent>

            <DialogActions sx={{ p: 2, borderTop: 1, borderColor: 'divider' }}>
                <Button onClick={handleClose}>
                    Annuler
                </Button>
                <Button
                    onClick={handleConfirm}
                    variant="contained"
                    disabled={!selectedImage}
                    sx={{ backgroundColor: '#f97316', '&:hover': { backgroundColor: '#ea580c' } }}
                >
                    Sélectionner
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default ImageSelector
