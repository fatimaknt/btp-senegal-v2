import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {
    Box,
    Container,
    Typography,
    Button,
    Card,
    CardContent,
    Alert,
    Tabs,
    Tab,
    IconButton,
    Chip,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    TextField,
    Switch,
    FormControlLabel
} from '@mui/material'
import {
    Add as AddIcon,
    Edit as EditIcon,
    Delete as DeleteIcon,
    Visibility as VisibilityIcon,
    VisibilityOff as VisibilityOffIcon
} from '@mui/icons-material'
import ImageSelector from '../../components/admin/ImageSelector'

const AdminPage: React.FC = () => {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(true)
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [tabValue, setTabValue] = useState(0)
    const [advertisements, setAdvertisements] = useState<any[]>([])
    const [articles, setArticles] = useState<any[]>([])
    const [enterprises, setEnterprises] = useState<any[]>([])
    const [openDialog, setOpenDialog] = useState(false)
    const [dialogType, setDialogType] = useState<'ad' | 'article' | 'enterprise'>('ad')
    const [editingItem, setEditingItem] = useState<any>(null)
    const [imageSelectorOpen, setImageSelectorOpen] = useState(false)

    useEffect(() => {
        // Vérifier l'authentification
        const adminSession = localStorage.getItem('btp_admin_session')
        const adminEmail = localStorage.getItem('btp_admin_email')

        if (adminSession === 'true' && adminEmail) {
            setIsAuthenticated(true)
            // Charger toutes les données
            const storedAds = localStorage.getItem('btp_advertisements')
            if (storedAds) setAdvertisements(JSON.parse(storedAds))

            const storedArticles = localStorage.getItem('btp_articles')
            if (storedArticles) setArticles(JSON.parse(storedArticles))

            const storedEnterprises = localStorage.getItem('btp_enterprises')
            if (storedEnterprises) setEnterprises(JSON.parse(storedEnterprises))
        } else {
            navigate('/auth/login')
        }
        setLoading(false)
    }, [navigate])

    const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
        setTabValue(newValue)
    }

    const handleAdd = (type: 'ad' | 'article' | 'enterprise') => {
        setDialogType(type)
        if (type === 'article') {
            setEditingItem({
                id: Date.now().toString(),
                title: '',
                content: '',
                author: '',
                image_url: '',
                is_active: true,
                created_at: new Date().toISOString()
            })
        } else if (type === 'enterprise') {
            setEditingItem({
                id: Date.now().toString(),
                name: '',
                description: '',
                contact_email: '',
                phone: '',
                location: '',
                image_url: '',
                is_active: true,
                created_at: new Date().toISOString()
            })
        } else {
            setEditingItem({
                id: Date.now().toString(),
                title: '',
                description: '',
                image_url: '',
                link_url: '',
                is_active: true,
                created_at: new Date().toISOString()
            })
        }
        setOpenDialog(true)
    }

    const handleEdit = (item: any) => {
        if (item.content !== undefined) {
            // C'est un article
            setDialogType('article')
        } else if (item.name !== undefined) {
            // C'est une entreprise
            setDialogType('enterprise')
        } else {
            // C'est une publicité
            setDialogType('ad')
        }
        setEditingItem(item)
        setOpenDialog(true)
    }

    const handleSave = () => {
        if (dialogType === 'ad') {
            const existingIndex = advertisements.findIndex(ad => ad.id === editingItem.id)

            if (existingIndex >= 0) {
                // Modification
                const updatedAds = [...advertisements]
                updatedAds[existingIndex] = editingItem
                setAdvertisements(updatedAds)
                localStorage.setItem('btp_advertisements', JSON.stringify(updatedAds))
                alert('Publicité modifiée avec succès!')
            } else {
                // Ajout
                const updatedAds = [...advertisements, editingItem]
                setAdvertisements(updatedAds)
                localStorage.setItem('btp_advertisements', JSON.stringify(updatedAds))
                alert('Publicité ajoutée avec succès!')
            }
        } else if (dialogType === 'article') {
            const existingIndex = articles.findIndex(article => article.id === editingItem.id)

            if (existingIndex >= 0) {
                // Modification
                const updatedArticles = [...articles]
                updatedArticles[existingIndex] = editingItem
                setArticles(updatedArticles)
                localStorage.setItem('btp_articles', JSON.stringify(updatedArticles))
                // Déclencher l'événement pour mettre à jour la page actualités
                window.dispatchEvent(new CustomEvent('articlesUpdated'))
                alert('Actualité modifiée avec succès!')
            } else {
                // Ajout
                const updatedArticles = [...articles, editingItem]
                setArticles(updatedArticles)
                localStorage.setItem('btp_articles', JSON.stringify(updatedArticles))
                console.log('Article saved with ID:', editingItem.id)
                console.log('All articles after save:', updatedArticles.map(a => ({ id: a.id, title: a.title })))
                // Déclencher l'événement pour mettre à jour la page actualités
                window.dispatchEvent(new CustomEvent('articlesUpdated'))
                alert('Actualité ajoutée avec succès!')
            }
        } else if (dialogType === 'enterprise') {
            const existingIndex = enterprises.findIndex(enterprise => enterprise.id === editingItem.id)

            if (existingIndex >= 0) {
                // Modification
                const updatedEnterprises = [...enterprises]
                updatedEnterprises[existingIndex] = editingItem
                setEnterprises(updatedEnterprises)
                localStorage.setItem('btp_enterprises', JSON.stringify(updatedEnterprises))
                // Déclencher l'événement pour mettre à jour la page annuaire
                window.dispatchEvent(new CustomEvent('enterprisesUpdated'))
                alert('Entreprise modifiée avec succès!')
            } else {
                // Ajout
                const updatedEnterprises = [...enterprises, editingItem]
                setEnterprises(updatedEnterprises)
                localStorage.setItem('btp_enterprises', JSON.stringify(updatedEnterprises))
                // Déclencher l'événement pour mettre à jour la page annuaire
                window.dispatchEvent(new CustomEvent('enterprisesUpdated'))
                alert('Entreprise ajoutée avec succès!')
            }
        }
        setOpenDialog(false)
        setEditingItem(null)
    }

    const handleDelete = (id: string) => {
        console.log('Suppression directe de l\'élément avec ID:', id)
        const updatedAds = advertisements.filter(ad => ad.id !== id)
        setAdvertisements(updatedAds)
        localStorage.setItem('btp_advertisements', JSON.stringify(updatedAds))
        alert('Publicité supprimée avec succès!')
    }

    const toggleActive = (id: string) => {
        const updatedAds = advertisements.map(ad =>
            ad.id === id ? { ...ad, is_active: !ad.is_active } : ad
        )
        setAdvertisements(updatedAds)
        localStorage.setItem('btp_advertisements', JSON.stringify(updatedAds))
        alert('Statut de la publicité modifié!')
    }

    const handleOpenImageSelector = () => {
        setImageSelectorOpen(true)
    }

    const handleImageSelect = (imageUrl: string) => {
        setEditingItem({ ...editingItem, image_url: imageUrl })
        setImageSelectorOpen(false)
    }

    const handleDeleteArticle = (id: string) => {
        const updatedArticles = articles.filter(article => article.id !== id)
        setArticles(updatedArticles)
        localStorage.setItem('btp_articles', JSON.stringify(updatedArticles))
        // Déclencher l'événement pour mettre à jour la page actualités
        window.dispatchEvent(new CustomEvent('articlesUpdated'))
        alert('Actualité supprimée avec succès!')
    }

    const toggleActiveArticle = (id: string) => {
        const updatedArticles = articles.map(article =>
            article.id === id ? { ...article, is_active: !article.is_active } : article
        )
        setArticles(updatedArticles)
        localStorage.setItem('btp_articles', JSON.stringify(updatedArticles))
        // Déclencher l'événement pour mettre à jour la page actualités
        window.dispatchEvent(new CustomEvent('articlesUpdated'))
        alert('Statut de l\'actualité modifié!')
    }

    const handleDeleteEnterprise = (id: string) => {
        const updatedEnterprises = enterprises.filter(enterprise => enterprise.id !== id)
        setEnterprises(updatedEnterprises)
        localStorage.setItem('btp_enterprises', JSON.stringify(updatedEnterprises))
        // Déclencher l'événement pour mettre à jour la page annuaire
        window.dispatchEvent(new CustomEvent('enterprisesUpdated'))
        alert('Entreprise supprimée avec succès!')
    }

    const toggleActiveEnterprise = (id: string) => {
        const updatedEnterprises = enterprises.map(enterprise =>
            enterprise.id === id ? { ...enterprise, is_active: !enterprise.is_active } : enterprise
        )
        setEnterprises(updatedEnterprises)
        localStorage.setItem('btp_enterprises', JSON.stringify(updatedEnterprises))
        // Déclencher l'événement pour mettre à jour la page annuaire
        window.dispatchEvent(new CustomEvent('enterprisesUpdated'))
        alert('Statut de l\'entreprise modifié!')
    }

    if (loading) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <Typography>Chargement...</Typography>
            </Box>
        )
    }

    if (!isAuthenticated) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <Alert severity="error">Accès non autorisé</Alert>
            </Box>
        )
    }

    return (
        <Box sx={{ backgroundColor: '#f8fafc', minHeight: '100vh' }}>
            <Container maxWidth="xl" sx={{ py: 4 }}>
                <Typography variant="h4" sx={{ mb: 4, fontWeight: 700 }}>
                    Administration
                </Typography>

                <Card>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={tabValue} onChange={handleTabChange}>
                            <Tab label={`Publicités (${advertisements.length})`} />
                            <Tab label={`Actualités (${articles.length})`} />
                            <Tab label={`Annuaire (${enterprises.length})`} />
                        </Tabs>
                    </Box>

                    <CardContent>
                        {tabValue === 0 && (
                            <Box>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                                    <Typography variant="h6">Gestion des Publicités</Typography>
                                    <Button
                                        variant="contained"
                                        startIcon={<AddIcon />}
                                        onClick={() => handleAdd('ad')}
                                        sx={{ backgroundColor: '#f97316', '&:hover': { backgroundColor: '#ea580c' } }}
                                    >
                                        Ajouter une publicité
                                    </Button>
                                </Box>

                                {advertisements.length === 0 ? (
                                    <Typography color="textSecondary">
                                        Aucune publicité trouvée
                                    </Typography>
                                ) : (
                                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                                        {advertisements.map((ad) => (
                                            <Card key={ad.id} variant="outlined">
                                                <CardContent>
                                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                        <Box>
                                                            <Typography variant="h6">{ad.title}</Typography>
                                                            <Typography variant="body2" color="textSecondary">
                                                                {ad.description}
                                                            </Typography>
                                                            <Chip
                                                                label={ad.is_active ? 'Actif' : 'Inactif'}
                                                                color={ad.is_active ? 'success' : 'error'}
                                                                size="small"
                                                                sx={{ mt: 1 }}
                                                            />
                                                        </Box>
                                                        <Box sx={{ display: 'flex', gap: 1 }}>
                                                            <IconButton
                                                                size="small"
                                                                color="primary"
                                                                onClick={() => handleEdit(ad)}
                                                                title="Modifier"
                                                            >
                                                                <EditIcon />
                                                            </IconButton>
                                                            <IconButton
                                                                size="small"
                                                                color={ad.is_active ? "warning" : "success"}
                                                                onClick={() => toggleActive(ad.id)}
                                                                title={ad.is_active ? "Désactiver" : "Activer"}
                                                            >
                                                                {ad.is_active ? <VisibilityOffIcon /> : <VisibilityIcon />}
                                                            </IconButton>
                                                            <IconButton
                                                                size="small"
                                                                color="error"
                                                                onClick={() => handleDelete(ad.id)}
                                                                title="Supprimer"
                                                            >
                                                                <DeleteIcon />
                                                            </IconButton>
                                                        </Box>
                                                    </Box>
                                                </CardContent>
                                            </Card>
                                        ))}
                                    </Box>
                                )}
                            </Box>
                        )}

                        {tabValue === 1 && (
                            <Box>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                                    <Typography variant="h6">Gestion des Actualités</Typography>
                                    <Button
                                        variant="contained"
                                        startIcon={<AddIcon />}
                                        onClick={() => handleAdd('article')}
                                        sx={{ backgroundColor: '#f97316', '&:hover': { backgroundColor: '#ea580c' } }}
                                    >
                                        Ajouter une actualité
                                    </Button>
                                </Box>

                                {articles.length === 0 ? (
                                    <Typography color="textSecondary">
                                        Aucune actualité trouvée
                                    </Typography>
                                ) : (
                                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                                        {articles.map((article) => (
                                            <Card key={article.id} variant="outlined">
                                                <CardContent>
                                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                        <Box>
                                                            <Typography variant="h6">{article.title}</Typography>
                                                            <Typography variant="body2" color="textSecondary">
                                                                {article.content?.substring(0, 100)}...
                                                            </Typography>
                                                            <Typography variant="caption" color="textSecondary">
                                                                Par {article.author}
                                                            </Typography>
                                                            <Chip
                                                                label={article.is_active ? 'Actif' : 'Inactif'}
                                                                color={article.is_active ? 'success' : 'error'}
                                                                size="small"
                                                                sx={{ mt: 1, ml: 1 }}
                                                            />
                                                        </Box>
                                                        <Box sx={{ display: 'flex', gap: 1 }}>
                                                            <IconButton
                                                                size="small"
                                                                color="primary"
                                                                onClick={() => handleEdit(article)}
                                                                title="Modifier"
                                                            >
                                                                <EditIcon />
                                                            </IconButton>
                                                            <IconButton
                                                                size="small"
                                                                color={article.is_active ? "warning" : "success"}
                                                                onClick={() => toggleActiveArticle(article.id)}
                                                                title={article.is_active ? "Désactiver" : "Activer"}
                                                            >
                                                                {article.is_active ? <VisibilityOffIcon /> : <VisibilityIcon />}
                                                            </IconButton>
                                                            <IconButton
                                                                size="small"
                                                                color="error"
                                                                onClick={() => handleDeleteArticle(article.id)}
                                                                title="Supprimer"
                                                            >
                                                                <DeleteIcon />
                                                            </IconButton>
                                                        </Box>
                                                    </Box>
                                                </CardContent>
                                            </Card>
                                        ))}
                                    </Box>
                                )}
                            </Box>
                        )}

                        {tabValue === 2 && (
                            <Box>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                                    <Typography variant="h6">Gestion de l'Annuaire</Typography>
                                    <Button
                                        variant="contained"
                                        startIcon={<AddIcon />}
                                        onClick={() => handleAdd('enterprise')}
                                        sx={{ backgroundColor: '#f97316', '&:hover': { backgroundColor: '#ea580c' } }}
                                    >
                                        Ajouter une entreprise
                                    </Button>
                                </Box>

                                {enterprises.length === 0 ? (
                                    <Typography color="textSecondary">
                                        Aucune entreprise trouvée
                                    </Typography>
                                ) : (
                                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                                        {enterprises.map((enterprise) => (
                                            <Card key={enterprise.id} variant="outlined">
                                                <CardContent>
                                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                        <Box>
                                                            <Typography variant="h6">{enterprise.name}</Typography>
                                                            <Typography variant="body2" color="textSecondary">
                                                                {enterprise.description}
                                                            </Typography>
                                                            <Typography variant="caption" color="textSecondary">
                                                                📧 {enterprise.contact_email} | 📞 {enterprise.phone}
                                                            </Typography>
                                                            <Typography variant="caption" color="textSecondary" sx={{ display: 'block' }}>
                                                                📍 {enterprise.location}
                                                            </Typography>
                                                            <Chip
                                                                label={enterprise.is_active ? 'Actif' : 'Inactif'}
                                                                color={enterprise.is_active ? 'success' : 'error'}
                                                                size="small"
                                                                sx={{ mt: 1 }}
                                                            />
                                                        </Box>
                                                        <Box sx={{ display: 'flex', gap: 1 }}>
                                                            <IconButton
                                                                size="small"
                                                                color="primary"
                                                                onClick={() => handleEdit(enterprise)}
                                                                title="Modifier"
                                                            >
                                                                <EditIcon />
                                                            </IconButton>
                                                            <IconButton
                                                                size="small"
                                                                color={enterprise.is_active ? "warning" : "success"}
                                                                onClick={() => toggleActiveEnterprise(enterprise.id)}
                                                                title={enterprise.is_active ? "Désactiver" : "Activer"}
                                                            >
                                                                {enterprise.is_active ? <VisibilityOffIcon /> : <VisibilityIcon />}
                                                            </IconButton>
                                                            <IconButton
                                                                size="small"
                                                                color="error"
                                                                onClick={() => handleDeleteEnterprise(enterprise.id)}
                                                                title="Supprimer"
                                                            >
                                                                <DeleteIcon />
                                                            </IconButton>
                                                        </Box>
                                                    </Box>
                                                </CardContent>
                                            </Card>
                                        ))}
                                    </Box>
                                )}
                            </Box>
                        )}
                    </CardContent>
                </Card>

                {/* Dialog d'ajout/modification */}
                <Dialog open={openDialog} onClose={() => setOpenDialog(false)} maxWidth="sm" fullWidth>
                    <DialogTitle>
                        {dialogType === 'article' ?
                            (articles.find(article => article.id === editingItem?.id) ? 'Modifier' : 'Ajouter') + ' une actualité' :
                            dialogType === 'enterprise' ?
                                (enterprises.find(enterprise => enterprise.id === editingItem?.id) ? 'Modifier' : 'Ajouter') + ' une entreprise' :
                                (advertisements.find(ad => ad.id === editingItem?.id) ? 'Modifier' : 'Ajouter') + ' une publicité'
                        }
                    </DialogTitle>
                    <DialogContent>
                        {dialogType === 'enterprise' ? (
                            <TextField
                                fullWidth
                                label="Nom de l'entreprise"
                                value={editingItem?.name || ''}
                                onChange={(e) => setEditingItem({ ...editingItem, name: e.target.value })}
                                sx={{ mb: 2, mt: 2 }}
                            />
                        ) : (
                            <TextField
                                fullWidth
                                label="Titre"
                                value={editingItem?.title || ''}
                                onChange={(e) => setEditingItem({ ...editingItem, title: e.target.value })}
                                sx={{ mb: 2, mt: 2 }}
                            />
                        )}
                        {dialogType === 'article' ? (
                            <TextField
                                fullWidth
                                multiline
                                rows={4}
                                label="Contenu de l'actualité"
                                value={editingItem?.content || ''}
                                onChange={(e) => setEditingItem({ ...editingItem, content: e.target.value })}
                                sx={{ mb: 2 }}
                            />
                        ) : (
                            <TextField
                                fullWidth
                                multiline
                                rows={3}
                                label="Description"
                                value={editingItem?.description || ''}
                                onChange={(e) => setEditingItem({ ...editingItem, description: e.target.value })}
                                sx={{ mb: 2 }}
                            />
                        )}

                        {dialogType === 'article' && (
                            <TextField
                                fullWidth
                                label="Auteur"
                                value={editingItem?.author || ''}
                                onChange={(e) => setEditingItem({ ...editingItem, author: e.target.value })}
                                sx={{ mb: 2 }}
                            />
                        )}

                        {dialogType === 'enterprise' && (
                            <>
                                <TextField
                                    fullWidth
                                    label="Email de contact"
                                    value={editingItem?.contact_email || ''}
                                    onChange={(e) => setEditingItem({ ...editingItem, contact_email: e.target.value })}
                                    sx={{ mb: 2 }}
                                />
                                <TextField
                                    fullWidth
                                    label="Téléphone"
                                    value={editingItem?.phone || ''}
                                    onChange={(e) => setEditingItem({ ...editingItem, phone: e.target.value })}
                                    sx={{ mb: 2 }}
                                />
                                <TextField
                                    fullWidth
                                    label="Localisation"
                                    value={editingItem?.location || ''}
                                    onChange={(e) => setEditingItem({ ...editingItem, location: e.target.value })}
                                    sx={{ mb: 2 }}
                                />
                            </>
                        )}
                        <Box sx={{ mb: 2 }}>
                            <Typography variant="body2" sx={{ fontWeight: 600, mb: 1 }}>
                                {dialogType === 'article' ? 'Image de l\'actualité' :
                                    dialogType === 'enterprise' ? 'Image de l\'entreprise' : 'Image de la publicité'}
                            </Typography>
                            <Typography variant="caption" sx={{ color: '#666', mb: 2, display: 'block' }}>
                                💡 Sélectionnez une image pour améliorer l'affichage
                            </Typography>
                            {editingItem?.image_url ? (
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, p: 2, border: 1, borderColor: 'divider', borderRadius: 1 }}>
                                    <Box
                                        component="img"
                                        src={editingItem.image_url}
                                        alt="Selected"
                                        sx={{
                                            width: 80,
                                            height: 60,
                                            objectFit: 'cover',
                                            borderRadius: 1
                                        }}
                                    />
                                    <Box sx={{ flex: 1 }}>
                                        <Typography variant="body2" sx={{ fontWeight: 600 }}>
                                            Image sélectionnée
                                        </Typography>
                                        <Typography variant="caption" sx={{ color: '#666' }}>
                                            {editingItem.image_url}
                                        </Typography>
                                    </Box>
                                    <Button
                                        size="small"
                                        onClick={handleOpenImageSelector}
                                        sx={{ backgroundColor: '#f97316', color: 'white', '&:hover': { backgroundColor: '#ea580c' } }}
                                    >
                                        Changer
                                    </Button>
                                </Box>
                            ) : (
                                <Button
                                    variant="outlined"
                                    onClick={handleOpenImageSelector}
                                    sx={{
                                        borderColor: '#f97316',
                                        color: '#f97316',
                                        '&:hover': {
                                            borderColor: '#ea580c',
                                            backgroundColor: '#fff7ed'
                                        }
                                    }}
                                >
                                    Sélectionner une image
                                </Button>
                            )}
                        </Box>
                        {dialogType === 'ad' && (
                            <TextField
                                fullWidth
                                label="Lien URL (optionnel)"
                                value={editingItem?.link_url || ''}
                                onChange={(e) => setEditingItem({ ...editingItem, link_url: e.target.value })}
                                sx={{ mb: 2 }}
                            />
                        )}
                        <FormControlLabel
                            control={
                                <Switch
                                    checked={editingItem?.is_active || false}
                                    onChange={(e) => setEditingItem({ ...editingItem, is_active: e.target.checked })}
                                />
                            }
                            label={dialogType === 'article' ? 'Actualité active' :
                                dialogType === 'enterprise' ? 'Entreprise active' : 'Publicité active'}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => setOpenDialog(false)}>Annuler</Button>
                        <Button onClick={handleSave} variant="contained">
                            Sauvegarder
                        </Button>
                    </DialogActions>
                </Dialog>

                {/* Sélecteur d'images */}
                <ImageSelector
                    open={imageSelectorOpen}
                    onClose={() => setImageSelectorOpen(false)}
                    onSelect={handleImageSelect}
                    currentImage={editingItem?.image_url || ''}
                />
            </Container>
        </Box>
    )
}

export default AdminPage
