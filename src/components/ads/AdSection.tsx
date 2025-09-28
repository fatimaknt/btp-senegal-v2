import React, { useState, useEffect } from 'react'
import {
    Box,
    Card,
    CardContent,
    Typography,
    Button,
    Grid,
    Avatar,
    Chip,
    Rating,
    Paper,
    Divider
} from '@mui/material'
import {
    Business as BusinessIcon,
    Star as StarIcon,
    LocationOn as LocationIcon,
    Phone as PhoneIcon,
    Campaign as CampaignIcon,
    Work as WorkIcon,
    Engineering as EngineeringIcon
} from '@mui/icons-material'
import { supabase } from '../../lib/supabase'

interface Ad {
    id: string
    title: string
    description: string
    company: string
    category: string
    location: string
    phone: string
    rating: number
    reviews: number
    image_url?: string
    featured?: boolean
    discount?: string
    price?: string
    is_active?: boolean
}

interface AdSectionProps {
    title?: string
    maxAds?: number
    showTitle?: boolean
}

const AdSection: React.FC<AdSectionProps> = ({
    title = "Publicités",
    maxAds = 3,
    showTitle = true
}) => {
    const [ads, setAds] = useState<Ad[]>([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        loadAds()
    }, [])

    const loadAds = async () => {
        try {
            setLoading(true)
            const { data, error } = await supabase
                .from('advertisements')
                .select('*')
                .eq('is_active', true)
                .order('created_at', { ascending: false })
                .limit(maxAds)

            if (error) {
                console.error('Error loading ads:', error)
            } else {
                setAds(data || [])
            }
        } catch (err) {
            console.error('Error in loadAds:', err)
        } finally {
            setLoading(false)
        }
    }

    const displayAds = ads.slice(0, maxAds)

    return (
        <Box sx={{ mb: 4 }}>
            {showTitle && (
                <Typography
                    variant="h4"
                    sx={{
                        fontWeight: 700,
                        color: '#1f2937',
                        mb: 4,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 2,
                        textAlign: 'center'
                    }}
                >
                    <CampaignIcon sx={{ fontSize: 32, color: '#f97316' }} />
                    {title}
                </Typography>
            )}

            <Grid container spacing={3}>
                {displayAds.map((ad) => (
                    <Grid item xs={12} key={ad.id}>
                        <Paper
                            elevation={3}
                            sx={{
                                border: '1px solid #e5e7eb',
                                borderRadius: 3,
                                overflow: 'hidden',
                                transition: 'all 0.3s ease',
                                backgroundColor: 'white',
                                '&:hover': {
                                    transform: 'translateY(-4px)',
                                    boxShadow: '0 12px 30px rgba(0,0,0,0.15)',
                                }
                            }}
                        >
                            <Box sx={{ display: 'flex', minHeight: 200 }}>
                                {/* Section gauche - En-tête avec icône et titre */}
                                <Box sx={{
                                    width: '35%',
                                    p: 3,
                                    background: ad.featured
                                        ? 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)'
                                        : 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
                                    color: ad.featured ? 'white' : '#374151',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center'
                                }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                        <CampaignIcon sx={{
                                            fontSize: 32,
                                            mr: 2,
                                            color: ad.featured ? 'white' : '#6b7280'
                                        }} />
                                        <Typography
                                            variant="h5"
                                            sx={{
                                                fontWeight: 700,
                                                fontSize: '1.3rem',
                                                textTransform: 'uppercase',
                                                letterSpacing: '0.5px',
                                                lineHeight: 1.2
                                            }}
                                        >
                                            {ad.title}
                                        </Typography>
                                    </Box>

                                    {ad.featured && (
                                        <Chip
                                            label="MIS EN AVANT"
                                            size="small"
                                            sx={{
                                                backgroundColor: 'rgba(255,255,255,0.25)',
                                                color: 'white',
                                                fontWeight: 600,
                                                fontSize: '0.75rem',
                                                backdropFilter: 'blur(10px)',
                                                alignSelf: 'flex-start'
                                            }}
                                        />
                                    )}
                                </Box>

                                {/* Section droite - Contenu principal */}
                                <Box sx={{
                                    width: '65%',
                                    p: 3,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between'
                                }}>
                                    {/* Informations entreprise et description */}
                                    <Box>
                                        <Typography variant="h6" sx={{
                                            color: '#1f2937',
                                            mb: 1,
                                            fontWeight: 600,
                                            fontSize: '1.2rem'
                                        }}>
                                            {ad.company}
                                        </Typography>

                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                                            <Rating value={ad.rating} precision={0.1} size="small" readOnly />
                                            <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 500 }}>
                                                {ad.rating} ({ad.reviews} avis)
                                            </Typography>
                                        </Box>

                                        <Typography
                                            variant="body1"
                                            sx={{
                                                color: '#374151',
                                                lineHeight: 1.6,
                                                mb: 2,
                                                fontSize: '0.95rem'
                                            }}
                                        >
                                            {ad.description}
                                        </Typography>
                                    </Box>

                                    {/* Informations de contact et bouton */}
                                    <Box>
                                        <Box sx={{ display: 'flex', gap: 3, mb: 2, flexWrap: 'wrap' }}>
                                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                <LocationIcon sx={{ fontSize: 18, color: '#f97316', mr: 1 }} />
                                                <Typography variant="body2" sx={{ color: '#374151', fontWeight: 500 }}>
                                                    {ad.location}
                                                </Typography>
                                            </Box>
                                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                <PhoneIcon sx={{ fontSize: 18, color: '#f97316', mr: 1 }} />
                                                <Typography variant="body2" sx={{ color: '#374151', fontWeight: 500 }}>
                                                    {ad.phone}
                                                </Typography>
                                            </Box>
                                            {ad.category && (
                                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                    <EngineeringIcon sx={{ fontSize: 18, color: '#f97316', mr: 1 }} />
                                                    <Typography variant="body2" sx={{ color: '#374151', fontWeight: 500 }}>
                                                        {ad.category}
                                                    </Typography>
                                                </Box>
                                            )}
                                        </Box>

                                        {/* Prix, remise et bouton */}
                                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                                {ad.discount && (
                                                    <Chip
                                                        label={ad.discount}
                                                        size="small"
                                                        sx={{
                                                            backgroundColor: '#dc2626',
                                                            color: 'white',
                                                            fontWeight: 600,
                                                            fontSize: '0.75rem'
                                                        }}
                                                    />
                                                )}
                                                {ad.price && (
                                                    <Typography variant="h6" sx={{
                                                        color: '#1f2937',
                                                        fontWeight: 700,
                                                        fontSize: '1.1rem'
                                                    }}>
                                                        {ad.price}
                                                    </Typography>
                                                )}
                                            </Box>

                                            <Button
                                                variant="contained"
                                                onClick={() => {
                                                    const phoneNumber = ad.phone.replace(/\D/g, '') // Nettoyer le numéro
                                                    const whatsappUrl = `https://wa.me/${phoneNumber}`
                                                    window.open(whatsappUrl, '_blank')
                                                }}
                                                sx={{
                                                    background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
                                                    '&:hover': {
                                                        background: 'linear-gradient(135deg, #128C7E 0%, #075E54 100%)',
                                                        transform: 'translateY(-2px)',
                                                        boxShadow: '0 8px 20px rgba(37, 211, 102, 0.4)'
                                                    },
                                                    color: 'white',
                                                    fontWeight: 600,
                                                    px: 3,
                                                    py: 1.5,
                                                    borderRadius: 2,
                                                    textTransform: 'none',
                                                    fontSize: '0.9rem',
                                                    letterSpacing: '0.5px'
                                                }}
                                            >
                                                📞 Contacter via WhatsApp
                                            </Button>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}

export default AdSection