import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { Box, Container, Typography, TextField, Button } from '@mui/material'
import { Search as SearchIcon } from '@mui/icons-material'

const HeroSection: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState('')
    const navigate = useNavigate()

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault()
        const params = new URLSearchParams()

        if (searchQuery.trim()) params.set('q', searchQuery.trim())

        navigate(`/annuaire?${params.toString()}`)
    }

    return (
        <Box
            sx={{
                position: 'relative',
                height: '100vh',
                backgroundImage: 'url(https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&h=1080&fit=crop&crop=center)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            {/* Overlay sombre pour la lisibilité */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(135deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.6) 100%)',
                    zIndex: 1
                }}
            />

            {/* Contenu principal */}
            <Container
                maxWidth="lg"
                sx={{
                    position: 'relative',
                    zIndex: 2,
                    textAlign: 'center',
                    color: 'white',
                    py: 8
                }}
            >
                {/* Titre principal */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <Typography
                        variant="h1"
                        sx={{
                            fontSize: { xs: '3rem', md: '5rem' },
                            fontWeight: 900,
                            mb: 3,
                            textShadow: '3px 3px 6px rgba(0,0,0,0.8)',
                            background: 'linear-gradient(45deg, #f97316 0%, #fb923c 100%)',
                            backgroundClip: 'text',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent'
                        }}
                    >
                        BTP Sénégal
                    </Typography>
                    <Typography
                        variant="h4"
                        sx={{
                            fontSize: { xs: '1.5rem', md: '2.2rem' },
                            fontWeight: 500,
                            mb: 6,
                            textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
                            opacity: 0.95,
                            maxWidth: '800px',
                            mx: 'auto',
                            lineHeight: 1.3
                        }}
                    >
                        Votre partenaire de confiance pour tous vos projets de construction au Sénégal
                    </Typography>
                </motion.div>

                {/* Barre de recherche simplifiée */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    style={{ width: '100%', maxWidth: '600px', margin: '0 auto' }}
                >
                    <Box
                        component="form"
                        onSubmit={handleSearch}
                        sx={{
                            display: 'flex',
                            gap: 2,
                            alignItems: 'center',
                            mb: 6
                        }}
                    >
                        <TextField
                            fullWidth
                            placeholder="Que recherchez-vous ?"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            InputProps={{
                                startAdornment: <SearchIcon sx={{ color: '#f97316', mr: 1 }} />
                            }}
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    borderRadius: '15px',
                                    backgroundColor: 'transparent',
                                    fontSize: '1.1rem',
                                    border: '2px solid rgba(255,255,255,0.3)',
                                    color: 'white',
                                    '&:hover': {
                                        border: '2px solid rgba(255,255,255,0.6)',
                                        backgroundColor: 'rgba(255,255,255,0.1)'
                                    },
                                    '&.Mui-focused': {
                                        border: '2px solid #f97316',
                                        backgroundColor: 'rgba(255,255,255,0.1)'
                                    }
                                },
                                '& .MuiInputBase-input': {
                                    color: 'white',
                                    '&::placeholder': {
                                        color: 'rgba(255,255,255,0.7)'
                                    }
                                }
                            }}
                        />
                        <Button
                            type="submit"
                            variant="contained"
                            sx={{
                                backgroundColor: '#f97316',
                                color: 'white',
                                fontWeight: 700,
                                py: 2,
                                px: 4,
                                borderRadius: '15px',
                                fontSize: '1.1rem',
                                textTransform: 'none',
                                minWidth: '140px',
                                '&:hover': {
                                    backgroundColor: '#ea580c',
                                    transform: 'translateY(-2px)',
                                    boxShadow: '0 8px 16px rgba(249, 115, 22, 0.4)'
                                },
                                transition: 'all 0.3s ease'
                            }}
                        >
                            🔍 Rechercher
                        </Button>
                    </Box>
                </motion.div>

            </Container>
        </Box>
    )
}

export default HeroSection