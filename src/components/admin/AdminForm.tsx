import React, { useState, useEffect } from 'react'
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    TextField,
    Button,
    Grid,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Switch,
    FormControlLabel,
    Box
} from '@mui/material'
import ImageUpload from './ImageUpload'
import { uploadImage } from '../../lib/uploadService'

interface AdminFormProps {
    open: boolean
    onClose: () => void
    onSave: (data: any) => void
    type: 'ad' | 'service' | 'article' | 'enterprise'
    editingItem?: any
}

const AdminForm: React.FC<AdminFormProps> = ({
    open,
    onClose,
    onSave,
    type,
    editingItem
}) => {
    const [formData, setFormData] = useState<any>({})
    const [loading, setLoading] = useState(false)
    const [uploadedFiles, setUploadedFiles] = useState<{ [key: string]: File | null }>({})

    useEffect(() => {
        if (editingItem) {
            setFormData(editingItem)
        } else {
            // Réinitialiser le formulaire
            setFormData(getDefaultFormData())
        }
    }, [editingItem, type])

    const getDefaultFormData = () => {
        switch (type) {
            case 'ad':
                return {
                    title: '',
                    description: '',
                    company: '',
                    category: '',
                    location: '',
                    phone: '',
                    rating: 4.5,
                    reviews: 0,
                    featured: false,
                    discount: '',
                    price: '',
                    image_url: '',
                    is_active: true
                }
            case 'service':
                return {
                    name: '',
                    description: '',
                    category: '',
                    price: '',
                    duration: '',
                    is_active: true
                }
            case 'article':
                return {
                    title: '',
                    content: '',
                    excerpt: '',
                    image_url: '',
                    category: '',
                    is_published: false
                }
            case 'enterprise':
                return {
                    name: '',
                    description: '',
                    category: '',
                    location: '',
                    phone: '',
                    email: '',
                    website: '',
                    rating: 4.5,
                    reviews: 0,
                    image_url: '',
                    is_active: true
                }
            default:
                return {}
        }
    }

    const handleInputChange = (field: string, value: any) => {
        setFormData((prev: any) => ({
            ...prev,
            [field]: value
        }))
    }

    const handleImageUpload = (field: string, file: File | null, previewUrl: string) => {
        setUploadedFiles(prev => ({
            ...prev,
            [field]: file
        }))

        // Mettre à jour l'URL de l'image dans formData
        setFormData((prev: any) => ({
            ...prev,
            [field]: previewUrl
        }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)

        try {
            // Préparer les données à sauvegarder
            const dataToSave = { ...formData }

            // Uploader les images si nécessaire
            for (const [field, file] of Object.entries(uploadedFiles)) {
                if (file) {
                    const uploadResult = await uploadImage(file)
                    if (uploadResult.success && uploadResult.url) {
                        dataToSave[field] = uploadResult.url
                    } else {
                        console.error(`Erreur upload ${field}:`, uploadResult.error)
                        // Garder l'URL existante si l'upload échoue
                    }
                }
            }

            await onSave(dataToSave)
            onClose()
        } catch (error) {
            console.error('Error saving:', error)
        } finally {
            setLoading(false)
        }
    }

    const renderAdForm = () => (
        <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
                <TextField
                    fullWidth
                    label="Titre"
                    value={formData.title || ''}
                    onChange={(e) => handleInputChange('title', e.target.value)}
                    required
                />
            </Grid>
            <Grid item xs={12} md={6}>
                <TextField
                    fullWidth
                    label="Entreprise"
                    value={formData.company || ''}
                    onChange={(e) => handleInputChange('company', e.target.value)}
                    required
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    fullWidth
                    label="Description"
                    value={formData.description || ''}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    multiline
                    rows={3}
                    required
                />
            </Grid>
            <Grid item xs={12} md={6}>
                <TextField
                    fullWidth
                    label="Catégorie"
                    value={formData.category || ''}
                    onChange={(e) => handleInputChange('category', e.target.value)}
                    required
                />
            </Grid>
            <Grid item xs={12} md={6}>
                <TextField
                    fullWidth
                    label="Localisation"
                    value={formData.location || ''}
                    onChange={(e) => handleInputChange('location', e.target.value)}
                    required
                />
            </Grid>
            <Grid item xs={12} md={6}>
                <TextField
                    fullWidth
                    label="Téléphone"
                    value={formData.phone || ''}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    required
                />
            </Grid>
            <Grid item xs={12} md={6}>
                <TextField
                    fullWidth
                    label="Prix"
                    value={formData.price || ''}
                    onChange={(e) => handleInputChange('price', e.target.value)}
                />
            </Grid>
            <Grid item xs={12} md={6}>
                <TextField
                    fullWidth
                    label="Réduction"
                    value={formData.discount || ''}
                    onChange={(e) => handleInputChange('discount', e.target.value)}
                />
            </Grid>
            <Grid item xs={12}>
                <ImageUpload
                    value={formData.image_url}
                    onChange={(file, previewUrl) => handleImageUpload('image_url', file, previewUrl)}
                    label="Image de la publicité"
                />
            </Grid>
            <Grid item xs={12}>
                <Box sx={{ display: 'flex', gap: 2 }}>
                    <FormControlLabel
                        control={
                            <Switch
                                checked={formData.featured || false}
                                onChange={(e) => handleInputChange('featured', e.target.checked)}
                            />
                        }
                        label="Mise en avant"
                    />
                    <FormControlLabel
                        control={
                            <Switch
                                checked={formData.is_active || false}
                                onChange={(e) => handleInputChange('is_active', e.target.checked)}
                            />
                        }
                        label="Actif"
                    />
                </Box>
            </Grid>
        </Grid>
    )

    const renderServiceForm = () => (
        <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
                <TextField
                    fullWidth
                    label="Nom du service"
                    value={formData.name || ''}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    required
                />
            </Grid>
            <Grid item xs={12} md={6}>
                <TextField
                    fullWidth
                    label="Catégorie"
                    value={formData.category || ''}
                    onChange={(e) => handleInputChange('category', e.target.value)}
                    required
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    fullWidth
                    label="Description"
                    value={formData.description || ''}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    multiline
                    rows={3}
                    required
                />
            </Grid>
            <Grid item xs={12} md={6}>
                <TextField
                    fullWidth
                    label="Prix"
                    value={formData.price || ''}
                    onChange={(e) => handleInputChange('price', e.target.value)}
                />
            </Grid>
            <Grid item xs={12} md={6}>
                <TextField
                    fullWidth
                    label="Durée"
                    value={formData.duration || ''}
                    onChange={(e) => handleInputChange('duration', e.target.value)}
                />
            </Grid>
            <Grid item xs={12}>
                <FormControlLabel
                    control={
                        <Switch
                            checked={formData.is_active || false}
                            onChange={(e) => handleInputChange('is_active', e.target.checked)}
                        />
                    }
                    label="Service actif"
                />
            </Grid>
        </Grid>
    )

    const renderArticleForm = () => (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <TextField
                    fullWidth
                    label="Titre de l'article"
                    value={formData.title || ''}
                    onChange={(e) => handleInputChange('title', e.target.value)}
                    required
                />
            </Grid>
            <Grid item xs={12} md={6}>
                <FormControl fullWidth>
                    <InputLabel>Catégorie</InputLabel>
                    <Select
                        value={formData.category || ''}
                        onChange={(e) => handleInputChange('category', e.target.value)}
                        label="Catégorie"
                    >
                        <MenuItem value="Matériaux de construction">Matériaux de construction</MenuItem>
                        <MenuItem value="Équipements BTP">Équipements BTP</MenuItem>
                        <MenuItem value="Services de construction">Services de construction</MenuItem>
                        <MenuItem value="Architecture">Architecture</MenuItem>
                        <MenuItem value="Ingénierie">Ingénierie</MenuItem>
                        <MenuItem value="Formation BTP">Formation BTP</MenuItem>
                        <MenuItem value="Assurance BTP">Assurance BTP</MenuItem>
                        <MenuItem value="Autre">Autre</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={12}>
                <ImageUpload
                    value={formData.image_url}
                    onChange={(file, previewUrl) => handleImageUpload('image_url', file, previewUrl)}
                    label="Image de l'article"
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    fullWidth
                    label="Extrait"
                    value={formData.excerpt || ''}
                    onChange={(e) => handleInputChange('excerpt', e.target.value)}
                    multiline
                    rows={2}
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    fullWidth
                    label="Contenu"
                    value={formData.content || ''}
                    onChange={(e) => handleInputChange('content', e.target.value)}
                    multiline
                    rows={6}
                    required
                />
            </Grid>
            <Grid item xs={12}>
                <FormControlLabel
                    control={
                        <Switch
                            checked={formData.is_published || false}
                            onChange={(e) => handleInputChange('is_published', e.target.checked)}
                        />
                    }
                    label="Publier l'article"
                />
            </Grid>
        </Grid>
    )

    const renderEnterpriseForm = () => (
        <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
                <TextField
                    fullWidth
                    label="Nom de l'entreprise"
                    value={formData.name || ''}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    required
                />
            </Grid>
            <Grid item xs={12} md={6}>
                <FormControl fullWidth>
                    <InputLabel>Catégorie</InputLabel>
                    <Select
                        value={formData.category || ''}
                        onChange={(e) => handleInputChange('category', e.target.value)}
                        label="Catégorie"
                        required
                    >
                        <MenuItem value="Entrepreneur général">Entrepreneur général</MenuItem>
                        <MenuItem value="Spécialisé maçonnerie">Spécialisé maçonnerie</MenuItem>
                        <MenuItem value="Spécialisé électricité">Spécialisé électricité</MenuItem>
                        <MenuItem value="Spécialisé plomberie">Spécialisé plomberie</MenuItem>
                        <MenuItem value="Spécialisé menuiserie">Spécialisé menuiserie</MenuItem>
                        <MenuItem value="Spécialisé peinture">Spécialisé peinture</MenuItem>
                        <MenuItem value="Spécialisé carrelage">Spécialisé carrelage</MenuItem>
                        <MenuItem value="Architecte">Architecte</MenuItem>
                        <MenuItem value="Bureau d'études">Bureau d'études</MenuItem>
                        <MenuItem value="Fournisseur matériaux">Fournisseur matériaux</MenuItem>
                        <MenuItem value="Autre">Autre</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={12}>
                <TextField
                    fullWidth
                    label="Description"
                    value={formData.description || ''}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    multiline
                    rows={3}
                    required
                />
            </Grid>
            <Grid item xs={12} md={6}>
                <TextField
                    fullWidth
                    label="Localisation"
                    value={formData.location || ''}
                    onChange={(e) => handleInputChange('location', e.target.value)}
                    required
                />
            </Grid>
            <Grid item xs={12} md={6}>
                <TextField
                    fullWidth
                    label="Téléphone"
                    value={formData.phone || ''}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                />
            </Grid>
            <Grid item xs={12} md={6}>
                <TextField
                    fullWidth
                    label="Email"
                    value={formData.email || ''}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    type="email"
                />
            </Grid>
            <Grid item xs={12} md={6}>
                <TextField
                    fullWidth
                    label="Site web"
                    value={formData.website || ''}
                    onChange={(e) => handleInputChange('website', e.target.value)}
                />
            </Grid>
            <Grid item xs={12} md={6}>
                <TextField
                    fullWidth
                    label="Note (0-5)"
                    value={formData.rating || 4.5}
                    onChange={(e) => handleInputChange('rating', parseFloat(e.target.value))}
                    type="number"
                    inputProps={{ min: 0, max: 5, step: 0.1 }}
                />
            </Grid>
            <Grid item xs={12} md={6}>
                <TextField
                    fullWidth
                    label="Nombre d'avis"
                    value={formData.reviews || 0}
                    onChange={(e) => handleInputChange('reviews', parseInt(e.target.value))}
                    type="number"
                />
            </Grid>
            <Grid item xs={12}>
                <ImageUpload
                    value={formData.image_url}
                    onChange={(file, previewUrl) => handleImageUpload('image_url', file, previewUrl)}
                    label="Logo de l'entreprise"
                />
            </Grid>
            <Grid item xs={12}>
                <FormControlLabel
                    control={
                        <Switch
                            checked={formData.is_active || false}
                            onChange={(e) => handleInputChange('is_active', e.target.checked)}
                        />
                    }
                    label="Entreprise active"
                />
            </Grid>
        </Grid>
    )

    const getTitle = () => {
        switch (type) {
            case 'ad':
                return editingItem ? 'Modifier la publicité' : 'Nouvelle publicité'
            case 'service':
                return editingItem ? 'Modifier le service' : 'Nouveau service'
            case 'article':
                return editingItem ? 'Modifier l\'article' : 'Nouvel article'
            case 'enterprise':
                return editingItem ? 'Modifier l\'entreprise' : 'Nouvelle entreprise'
            default:
                return 'Formulaire'
        }
    }

    return (
        <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
            <DialogTitle>{getTitle()}</DialogTitle>
            <form onSubmit={handleSubmit}>
                <DialogContent>
                    {type === 'ad' && renderAdForm()}
                    {type === 'service' && renderServiceForm()}
                    {type === 'article' && renderArticleForm()}
                    {type === 'enterprise' && renderEnterpriseForm()}
                </DialogContent>
                <DialogActions>
                    <Button onClick={onClose}>Annuler</Button>
                    <Button type="submit" variant="contained" disabled={loading}>
                        {editingItem ? 'Modifier' : 'Créer'}
                    </Button>
                </DialogActions>
            </form>
        </Dialog>
    )
}

export default AdminForm
