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
    Email as EmailIcon,
    Language as WebsiteIcon,
    Engineering as EngineeringIcon
} from '@mui/icons-material'
import { supabase } from '../../lib/supabase'

interface Enterprise {
    id: string
    name: string
    description: string
    category: string
    location: string
    phone: string
    email?: string
    website?: string
    rating: number
    reviews: number
    image_url?: string
    is_active?: boolean
}

interface EnterpriseSectionProps {
    title?: string
    maxEnterprises?: number
    showTitle?: boolean
}

const EnterpriseSection: React.FC<EnterpriseSectionProps> = ({
    title = "Annuaire des Entreprises BTP",
    maxEnterprises = 6,
    showTitle = true
}) => {
    const [enterprises, setEnterprises] = useState<Enterprise[]>([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        loadEnterprises()
    }, [])

    const loadEnterprises = async () => {
        try {
            setLoading(true)
            const { data, error } = await supabase
                .from('enterprises')
                .select('*')
                .eq('is_active', true)
                .order('created_at', { ascending: false })
                .limit(maxEnterprises)

            if (error) {
                console.error('Error loading enterprises:', error)
            } else {
                setEnterprises(data || [])
            }
        } catch (err) {
            console.error('Error in loadEnterprises:', err)
        } finally {
            setLoading(false)
        }
    }

    const displayEnterprises = enterprises.slice(0, maxEnterprises)

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
                    <BusinessIcon sx={{ fontSize: 32, color: '#f97316' }} />
                    {title}
                </Typography>
            )}

            <Grid container spacing={3}>
                {displayEnterprises.map((enterprise) => (
                    <Grid item xs={12} md={6} lg={4} key={enterprise.id}>
                        <Paper
                            elevation={2}
                            sx={{
                                border: '1px solid #e5e7eb',
                                borderRadius: 3,
                                overflow: 'hidden',
                                transition: 'all 0.3s ease',
                                backgroundColor: 'white',
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                '&:hover': {
                                    transform: 'translateY(-4px)',
                                    boxShadow: '0 12px 30px rgba(0,0,0,0.15)',
                                }
                            }}
                        >
                            {/* En-tête avec icône et nom */}
                            <Box sx={{
                                p: 3,
                                pb: 2,
                                background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
                                color: '#374151'
                            }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                                    <BusinessIcon sx={{
                                        fontSize: 28,
                                        mr: 2,
                                        color: '#6b7280'
                                    }} />
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            fontWeight: 700,
                                            fontSize: '1.1rem',
                                            lineHeight: 1.2
                                        }}
                                    >
                                        {enterprise.name}
                                    </Typography>
                                </Box>

                                <Chip
                                    label={enterprise.category}
                                    size="small"
                                    sx={{
                                        backgroundColor: 'rgba(249, 115, 22, 0.1)',
                                        color: '#f97316',
                                        fontWeight: 600,
                                        fontSize: '0.75rem'
                                    }}
                                />
                            </Box>

                            {/* Contenu principal */}
                            <Box sx={{ p: 3, flex: 1, display: 'flex', flexDirection: 'column' }}>
                                {/* Note et avis */}
                                <Box sx={{ mb: 2 }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                                        <Rating value={enterprise.rating} precision={0.1} size="small" readOnly />
                                        <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 500 }}>
                                            {enterprise.rating} ({enterprise.reviews} avis)
                                        </Typography>
                                    </Box>
                                </Box>

                                {/* Description */}
                                <Typography
                                    variant="body2"
                                    sx={{
                                        color: '#374151',
                                        lineHeight: 1.6,
                                        mb: 2,
                                        flex: 1
                                    }}
                                >
                                    {enterprise.description}
                                </Typography>

                                <Divider sx={{ my: 2, borderColor: '#e5e7eb' }} />

                                {/* Informations de contact */}
                                <Box sx={{ mb: 2 }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                                        <LocationIcon sx={{ fontSize: 18, color: '#f97316', mr: 1 }} />
                                        <Typography variant="body2" sx={{ color: '#374151', fontWeight: 500 }}>
                                            {enterprise.location}
                                        </Typography>
                                    </Box>
                                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                                        <PhoneIcon sx={{ fontSize: 18, color: '#f97316', mr: 1 }} />
                                        <Typography variant="body2" sx={{ color: '#374151', fontWeight: 500 }}>
                                            {enterprise.phone}
                                        </Typography>
                                    </Box>
                                    {enterprise.email && (
                                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                                            <EmailIcon sx={{ fontSize: 18, color: '#f97316', mr: 1 }} />
                                            <Typography variant="body2" sx={{ color: '#374151', fontWeight: 500 }}>
                                                {enterprise.email}
                                            </Typography>
                                        </Box>
                                    )}
                                    {enterprise.website && (
                                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                            <WebsiteIcon sx={{ fontSize: 18, color: '#f97316', mr: 1 }} />
                                            <Typography variant="body2" sx={{ color: '#374151', fontWeight: 500 }}>
                                                {enterprise.website}
                                            </Typography>
                                        </Box>
                                    )}
                                </Box>

                                {/* Bouton d'action */}
                                <Button
                                    variant="contained"
                                    fullWidth
                                    sx={{
                                        background: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
                                        '&:hover': {
                                            background: 'linear-gradient(135deg, #ea580c 0%, #dc2626 100%)',
                                            transform: 'translateY(-2px)',
                                            boxShadow: '0 8px 20px rgba(249, 115, 22, 0.4)'
                                        },
                                        color: 'white',
                                        fontWeight: 600,
                                        py: 1.5,
                                        borderRadius: 2,
                                        textTransform: 'none',
                                        fontSize: '0.9rem',
                                        letterSpacing: '0.5px'
                                    }}
                                >
                                    Voir l'entreprise
                                </Button>
                            </Box>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}

export default EnterpriseSection
