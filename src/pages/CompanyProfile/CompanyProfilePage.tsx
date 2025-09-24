import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getCompanyById, companiesData } from '../../data/companies'
import {
    Box,
    Typography,
    Container,
    Card,
    CardContent,
    Button,
    TextField,
    Rating,
    Grid,
    Paper,
    Divider,
    IconButton,
    Chip
} from '@mui/material'
import {
    LocationOn as LocationIcon,
    Phone as PhoneIcon,
    Email as EmailIcon,
    AccessTime as AccessTimeIcon,
    Star as StarIcon,
    Upload as UploadIcon,
    Send as SendIcon,
    WhatsApp as WhatsAppIcon,
    Map as MapIcon
} from '@mui/icons-material'
import PageTransition from '../../components/animations/PageTransition'

const CompanyProfilePage: React.FC = () => {
    const { companyId } = useParams()
    const navigate = useNavigate()

    // État pour les formulaires
    const [reviewForm, setReviewForm] = useState({
        userName: 'john',
        email: 'you@website.com',
        title: '',
        review: '',
        overallRating: 0,
        cleanliness: 0,
        service: 0,
        ambience: 0,
        price: 0
    })

    const [contactForm, setContactForm] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    })

    const [showReviewForm, setShowReviewForm] = useState(false)

    // Récupération des données de l'entreprise depuis la base de données
    const companyData = getCompanyById(companyId || '') || companiesData[0]

    const handleReviewSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log('Review submitted:', reviewForm)
        // Ici on enverra les données à la base de données
        alert('Avis soumis avec succès!')
        setReviewForm({
            userName: 'john',
            email: 'you@website.com',
            title: '',
            review: '',
            overallRating: 0,
            cleanliness: 0,
            service: 0,
            ambience: 0,
            price: 0
        })
    }

    const handleContactSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log('Contact form submitted:', contactForm)
        // Ici on enverra les données à la base de données
        alert('Message envoyé avec succès!')
        setContactForm({ name: '', email: '', phone: '', message: '' })
    }

    return (
        <PageTransition>
            <Box sx={{ backgroundColor: '#f8fafc', minHeight: '100vh' }}>
                {/* Bannière de l'entreprise */}
                <Box sx={{
                    position: 'relative',
                    height: '400px',
                    backgroundImage: `url(${companyData.bannerImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    display: 'flex',
                    alignItems: 'flex-end',
                    mb: 4
                }}>
                    {/* Overlay sombre */}
                    <Box sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.7))'
                    }} />

                    {/* Contenu de la bannière */}
                    <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, pb: 4 }}>
                        <Box sx={{ display: 'flex', alignItems: 'flex-end', gap: 4 }}>
                            {/* Logo et nom */}
                            <Box>
                                <Typography variant="h3" sx={{
                                    color: 'white',
                                    fontWeight: 700,
                                    mb: 1,
                                    textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
                                }}>
                                    {companyData.name}
                                </Typography>

                                {/* Mots-clés */}
                                <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
                                    {['INNOVER', 'TRANSFORMER', 'CONSTRUIRE'].map((word) => (
                                        <Chip
                                            key={word}
                                            label={word}
                                            sx={{
                                                backgroundColor: '#f97316',
                                                color: 'white',
                                                fontWeight: 600,
                                                fontSize: '0.8rem'
                                            }}
                                        />
                                    ))}
                                </Box>

                                {/* Informations de contact */}
                                <Box sx={{ color: 'white' }}>
                                    <Typography variant="body2" sx={{ mb: 0.5 }}>
                                        📍 {companyData.address}
                                    </Typography>
                                    {companyData.poBox && (
                                        <Typography variant="body2" sx={{ mb: 0.5 }}>
                                            📦 {companyData.poBox}
                                        </Typography>
                                    )}
                                    <Typography variant="body2" sx={{ mb: 0.5 }}>
                                        ✉️ {companyData.email}
                                    </Typography>
                                    <Typography variant="body2">
                                        📞 Tél.: {companyData.phone}
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Container>
                </Box>

                <Container maxWidth="lg">
                    <Grid container spacing={4}>
                        {/* Colonne principale */}
                        <Grid item xs={12} md={8}>
                            {/* Section Services */}
                            <Card sx={{ mb: 4 }}>
                                <CardContent sx={{ p: 4 }}>
                                    <Typography variant="h5" sx={{ fontWeight: 600, mb: 3, color: '#1f2937' }}>
                                        Nos Services
                                    </Typography>
                                    <Typography variant="body1" sx={{ mb: 3, color: '#6b7280', lineHeight: 1.6 }}>
                                        {companyData.services.join(', ')}...
                                    </Typography>

                                    <Button
                                        variant="contained"
                                        startIcon={<StarIcon />}
                                        onClick={() => setShowReviewForm(!showReviewForm)}
                                        sx={{
                                            backgroundColor: '#f97316',
                                            '&:hover': { backgroundColor: '#ea580c' },
                                            px: 3,
                                            py: 1.5,
                                            fontWeight: 600
                                        }}
                                    >
                                        Rédiger Un Avis
                                    </Button>
                                </CardContent>
                            </Card>

                            {/* Formulaire d'avis */}
                            {showReviewForm && (
                                <Card sx={{ mb: 4 }}>
                                    <CardContent sx={{ p: 4 }}>
                                        <Typography variant="h6" sx={{ fontWeight: 600, mb: 3, color: '#1f2937' }}>
                                            Rédiger Un Avis
                                        </Typography>

                                        <form onSubmit={handleReviewSubmit}>
                                            {/* Note globale */}
                                            <Box sx={{ mb: 3 }}>
                                                <Typography variant="body2" sx={{ mb: 1, fontWeight: 600, color: '#374151' }}>
                                                    Votre note *
                                                </Typography>
                                                <Rating
                                                    value={reviewForm.overallRating}
                                                    onChange={(event, newValue) => {
                                                        setReviewForm({ ...reviewForm, overallRating: newValue || 0 })
                                                    }}
                                                    size="large"
                                                    sx={{ color: '#f97316' }}
                                                />
                                            </Box>

                                            {/* Upload d'images */}
                                            <Box sx={{ mb: 3 }}>
                                                <Typography variant="body2" sx={{ mb: 1, fontWeight: 600, color: '#374151' }}>
                                                    Sélectionnez des images
                                                </Typography>
                                                <Button
                                                    variant="outlined"
                                                    startIcon={<UploadIcon />}
                                                    sx={{ borderColor: '#d1d5db', color: '#6b7280' }}
                                                >
                                                    Parcourir
                                                </Button>
                                            </Box>

                                            {/* Notes par catégorie */}
                                            <Grid container spacing={2} sx={{ mb: 3 }}>
                                                {[
                                                    { key: 'cleanliness', label: 'Cleanliness' },
                                                    { key: 'service', label: 'Service' },
                                                    { key: 'ambience', label: 'Ambience' },
                                                    { key: 'price', label: 'Price' }
                                                ].map((category) => (
                                                    <Grid item xs={6} key={category.key}>
                                                        <Typography variant="body2" sx={{ mb: 1, fontWeight: 600, color: '#374151' }}>
                                                            {category.label}
                                                        </Typography>
                                                        <Rating
                                                            value={reviewForm[category.key as keyof typeof reviewForm] as number}
                                                            onChange={(event, newValue) => {
                                                                setReviewForm({ ...reviewForm, [category.key]: newValue || 0 })
                                                            }}
                                                            sx={{ color: '#f97316' }}
                                                        />
                                                    </Grid>
                                                ))}
                                            </Grid>

                                            {/* Champs de saisie */}
                                            <Grid container spacing={2} sx={{ mb: 3 }}>
                                                <Grid item xs={6}>
                                                    <Typography variant="body2" sx={{ mb: 1, fontWeight: 600, color: '#3b82f6' }}>
                                                        User Name *
                                                    </Typography>
                                                    <TextField
                                                        fullWidth
                                                        value={reviewForm.userName}
                                                        onChange={(e) => setReviewForm({ ...reviewForm, userName: e.target.value })}
                                                        size="small"
                                                        sx={{ '& .MuiOutlinedInput-root': { borderRadius: 2 } }}
                                                    />
                                                </Grid>
                                                <Grid item xs={6}>
                                                    <Typography variant="body2" sx={{ mb: 1, fontWeight: 600, color: '#3b82f6' }}>
                                                        Email *
                                                    </Typography>
                                                    <TextField
                                                        fullWidth
                                                        value={reviewForm.email}
                                                        onChange={(e) => setReviewForm({ ...reviewForm, email: e.target.value })}
                                                        size="small"
                                                        sx={{ '& .MuiOutlinedInput-root': { borderRadius: 2 } }}
                                                    />
                                                </Grid>
                                            </Grid>

                                            <Box sx={{ mb: 3 }}>
                                                <Typography variant="body2" sx={{ mb: 1, fontWeight: 600, color: '#3b82f6' }}>
                                                    Titre *
                                                </Typography>
                                                <TextField
                                                    fullWidth
                                                    placeholder="Exemple : C'était une expérience formidable d'être là"
                                                    value={reviewForm.title}
                                                    onChange={(e) => setReviewForm({ ...reviewForm, title: e.target.value })}
                                                    size="small"
                                                    sx={{ '& .MuiOutlinedInput-root': { borderRadius: 2 } }}
                                                />
                                            </Box>

                                            <Box sx={{ mb: 3 }}>
                                                <Typography variant="body2" sx={{ mb: 1, fontWeight: 600, color: '#3b82f6' }}>
                                                    Avis *
                                                </Typography>
                                                <TextField
                                                    fullWidth
                                                    multiline
                                                    rows={4}
                                                    value={reviewForm.review}
                                                    onChange={(e) => setReviewForm({ ...reviewForm, review: e.target.value })}
                                                    placeholder="Tip: A great review covers food, service, and ambiance. Got recommendations for your favorite dishes and drinks, or something everyone should try here? Include that too! And remember."
                                                    sx={{ '& .MuiOutlinedInput-root': { borderRadius: 2 } }}
                                                />
                                                <Typography variant="caption" sx={{ color: '#6b7280', mt: 1, display: 'block' }}>
                                                    Your review recommended to be at least 140 characters long :)
                                                </Typography>
                                            </Box>

                                            <Button
                                                type="submit"
                                                variant="contained"
                                                startIcon={<SendIcon />}
                                                sx={{
                                                    backgroundColor: '#f97316',
                                                    '&:hover': { backgroundColor: '#ea580c' },
                                                    px: 4,
                                                    py: 1.5,
                                                    fontWeight: 600
                                                }}
                                            >
                                                Signup & Submit Review
                                            </Button>
                                        </form>
                                    </CardContent>
                                </Card>
                            )}
                        </Grid>

                        {/* Colonne latérale */}
                        <Grid item xs={12} md={4}>
                            {/* Informations de contact */}
                            <Card sx={{ mb: 4 }}>
                                <CardContent sx={{ p: 4 }}>
                                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 3, color: '#1f2937' }}>
                                        Informations
                                    </Typography>

                                    <Box sx={{ mb: 2 }}>
                                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                                            <LocationIcon sx={{ fontSize: 20, color: '#6b7280', mr: 1 }} />
                                            <Typography variant="body2" sx={{ color: '#6b7280' }}>
                                                Hlm Fass Dakar - Sénégal
                                            </Typography>
                                        </Box>
                                        <Button
                                            variant="text"
                                            sx={{ color: '#f97316', textTransform: 'none', p: 0, fontSize: '0.9rem' }}
                                        >
                                            Obtenir des instructions
                                        </Button>
                                    </Box>

                                    <Box sx={{ mb: 2 }}>
                                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                                            <PhoneIcon sx={{ fontSize: 20, color: '#6b7280', mr: 1 }} />
                                            <Typography variant="body2" sx={{ color: '#6b7280' }}>
                                                {companyData.phone}
                                            </Typography>
                                        </Box>
                                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                            <WhatsAppIcon sx={{ fontSize: 20, color: '#6b7280', mr: 1 }} />
                                            <Typography variant="body2" sx={{ color: '#6b7280' }}>
                                                Whatsapp
                                            </Typography>
                                        </Box>
                                    </Box>

                                    <Box sx={{ mb: 3 }}>
                                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1 }}>
                                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                <AccessTimeIcon sx={{ fontSize: 20, color: '#6b7280', mr: 1 }} />
                                                <Typography variant="body2" sx={{ color: '#6b7280' }}>
                                                    Aujourd'hui
                                                </Typography>
                                            </Box>
                                            <Typography variant="body2" sx={{ color: '#ef4444', fontWeight: 600 }}>
                                                {companyData.status}
                                            </Typography>
                                        </Box>
                                        <Button
                                            variant="outlined"
                                            size="small"
                                            sx={{ borderColor: '#f97316', color: '#f97316', fontSize: '0.8rem' }}
                                        >
                                            + Ouvrir
                                        </Button>
                                    </Box>

                                    <Box sx={{ mb: 3 }}>
                                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                                            <MapIcon sx={{ fontSize: 20, color: '#6b7280', mr: 1 }} />
                                            <Typography variant="body2" sx={{ color: '#6b7280' }}>
                                                Posséder ou travailler ici ?
                                            </Typography>
                                        </Box>
                                        <Button
                                            variant="text"
                                            sx={{ color: '#f97316', fontWeight: 600, textTransform: 'none', p: 0, fontSize: '0.9rem' }}
                                        >
                                            Réclamez maintenant !
                                        </Button>
                                    </Box>

                                    <Divider sx={{ my: 3 }} />

                                    {/* Formulaire de contact */}
                                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 3, color: '#1f2937' }}>
                                        Contact Avec Le Propriétaire De L'entreprise
                                    </Typography>

                                    <form onSubmit={handleContactSubmit}>
                                        <Box sx={{ mb: 2 }}>
                                            <Typography variant="body2" sx={{ mb: 1, fontWeight: 600, color: '#374151' }}>
                                                Nom :
                                            </Typography>
                                            <TextField
                                                fullWidth
                                                value={contactForm.name}
                                                onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                                                size="small"
                                                sx={{ '& .MuiOutlinedInput-root': { borderRadius: 2 } }}
                                            />
                                        </Box>

                                        <Box sx={{ mb: 2 }}>
                                            <Typography variant="body2" sx={{ mb: 1, fontWeight: 600, color: '#374151' }}>
                                                Email:
                                            </Typography>
                                            <TextField
                                                fullWidth
                                                value={contactForm.email}
                                                onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                                                size="small"
                                                sx={{ '& .MuiOutlinedInput-root': { borderRadius: 2 } }}
                                            />
                                        </Box>

                                        <Box sx={{ mb: 2 }}>
                                            <Typography variant="body2" sx={{ mb: 1, fontWeight: 600, color: '#374151' }}>
                                                téléphone
                                            </Typography>
                                            <TextField
                                                fullWidth
                                                value={contactForm.phone}
                                                onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                                                size="small"
                                                sx={{ '& .MuiOutlinedInput-root': { borderRadius: 2 } }}
                                            />
                                        </Box>

                                        <Box sx={{ mb: 3 }}>
                                            <Typography variant="body2" sx={{ mb: 1, fontWeight: 600, color: '#374151' }}>
                                                Message:
                                            </Typography>
                                            <TextField
                                                fullWidth
                                                multiline
                                                rows={3}
                                                value={contactForm.message}
                                                onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                                                sx={{ '& .MuiOutlinedInput-root': { borderRadius: 2 } }}
                                            />
                                        </Box>

                                        <Button
                                            type="submit"
                                            variant="contained"
                                            startIcon={<SendIcon />}
                                            fullWidth
                                            sx={{
                                                backgroundColor: '#f97316',
                                                '&:hover': { backgroundColor: '#ea580c' },
                                                py: 1.5,
                                                fontWeight: 600
                                            }}
                                        >
                                            Envoyer
                                        </Button>
                                    </form>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </PageTransition>
    )
}

export default CompanyProfilePage
