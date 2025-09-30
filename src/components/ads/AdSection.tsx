import React, { useState, useEffect } from 'react'
import {
    Box,
    Card,
    CardContent,
    Typography,
    Button
} from '@mui/material'
import { Campaign as CampaignIcon } from '@mui/icons-material'
interface Ad {
    id: string
    title: string
    description: string
    image_url: string
    link_url?: string
    is_active: boolean
    created_at: string
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

    useEffect(() => {
        loadAds()

        // Écouter les changements de localStorage
        const handleStorageChange = () => {
            loadAds()
        }

        window.addEventListener('storage', handleStorageChange)

        // Écouter les événements personnalisés pour les mises à jour locales
        window.addEventListener('adsUpdated', handleStorageChange)

        return () => {
            window.removeEventListener('storage', handleStorageChange)
            window.removeEventListener('adsUpdated', handleStorageChange)
        }
    }, [])

    const loadAds = async () => {
        try {
            console.log('Loading ads from localStorage...')
            const storedAds = localStorage.getItem('btp_advertisements')
            if (storedAds) {
                const parsedAds = JSON.parse(storedAds)
                const activeAds = parsedAds.filter((ad: Ad) => ad.is_active === true)
                console.log('Active ads loaded:', activeAds)
                setAds(activeAds)
            } else {
                console.log('No ads found in localStorage')
                setAds([])
            }
        } catch (err) {
            console.error('Error in loadAds:', err)
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

            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
                {displayAds.map((ad) => (
                    <Box key={ad.id} sx={{ flex: '1 1 300px', minWidth: '300px' }}>
                        <Card
                            sx={{
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    transform: 'translateY(-4px)',
                                    boxShadow: 4
                                }
                            }}
                        >
                            {/* Image de la publicité */}
                            <Box
                                sx={{
                                    height: 200,
                                    backgroundImage: `url(${ad.image_url})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    position: 'relative'
                                }}
                            >
                                {/* Overlay avec titre */}
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        bottom: 0,
                                        left: 0,
                                        right: 0,
                                        background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
                                        p: 2,
                                        color: 'white'
                                    }}
                                >
                                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                                        {ad.title}
                                    </Typography>
                                </Box>
                            </Box>

                            <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                                    {ad.description}
                                </Typography>

                                {/* Bouton d'action */}
                                <Box sx={{ mt: 'auto' }}>
                                    {ad.link_url ? (
                                        <Button
                                            variant="contained"
                                            fullWidth
                                            href={ad.link_url}
                                            target="_blank"
                                            sx={{
                                                backgroundColor: '#f97316',
                                                '&:hover': { backgroundColor: '#ea580c' }
                                            }}
                                        >
                                            Voir la publicité
                                        </Button>
                                    ) : (
                                        <Button
                                            variant="outlined"
                                            fullWidth
                                            sx={{
                                                borderColor: '#f97316',
                                                color: '#f97316',
                                                '&:hover': {
                                                    borderColor: '#ea580c',
                                                    backgroundColor: 'rgba(249, 115, 22, 0.1)'
                                                }
                                            }}
                                        >
                                            Publicité
                                        </Button>
                                    )}
                                </Box>
                            </CardContent>
                        </Card>
                    </Box>
                ))}
            </Box>
        </Box>
    )
}

export default AdSection