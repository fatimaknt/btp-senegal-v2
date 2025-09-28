import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {
    Box,
    Container,
    Typography,
    Tabs,
    Tab,
    Card,
    CardContent,
    Button,
    Switch,
    FormControlLabel,
    Chip,
    IconButton,
    Alert
} from '@mui/material'
import {
    Add as AddIcon,
    Edit as EditIcon,
    Delete as DeleteIcon
} from '@mui/icons-material'
import { supabase } from '../../lib/supabase'
// import { useAuth } from '../../hooks/useAuth'
import PageTransition from '../../components/animations/PageTransition'
import AdminForm from '../../components/admin/AdminForm'

interface Advertisement {
    id: string
    title: string
    description: string
    is_active: boolean
}

interface Article {
    id: string
    title: string
    content: string
    excerpt?: string
    is_published: boolean
}

interface Enterprise {
    id: string
    name: string
    description: string
    is_active: boolean
}

interface TabPanelProps {
    children?: React.ReactNode
    index: number
    value: number
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`admin-tabpanel-${index}`}
            aria-labelledby={`admin-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </div>
    )
}

const AdminPage: React.FC = () => {
    const navigate = useNavigate()
    // const { user, profile, isAdmin, isAuthenticated, loading } = useAuth()
    const [isAdmin, setIsAdmin] = useState(false)
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [loading, setLoading] = useState(true)
    const [tabValue, setTabValue] = useState(0)
    const [advertisements, setAdvertisements] = useState<Advertisement[]>([])
    const [articles, setArticles] = useState<Article[]>([])
    const [enterprises, setEnterprises] = useState<Enterprise[]>([])
    const [openDialog, setOpenDialog] = useState(false)
    const [dialogType, setDialogType] = useState<'ad' | 'article' | 'enterprise'>('ad')
    const [editingItem, setEditingItem] = useState<Advertisement | Article | Enterprise | null>(null)

    // Vérifier l'authentification au chargement
    useEffect(() => {
        const checkAuth = async () => {
            try {
                // Vérifier localStorage d'abord
                const storedSession = localStorage.getItem('supabase_session')
                const storedUser = localStorage.getItem('supabase_user')

                if (storedSession && storedUser) {
                    const userData = JSON.parse(storedUser)

                    setIsAuthenticated(true)

                    // Vérifier le profil admin
                    const { data: profileData } = await supabase
                        .from('profiles')
                        .select('*')
                        .eq('id', userData.id)
                        .single()

                    if (profileData && profileData.role === 'admin') {
                        setIsAdmin(true)
                    }
                }

                setLoading(false)
            } catch (error) {
                console.error('Error checking auth:', error)
                setLoading(false)
            }
        }

        checkAuth()
    }, [])

    // Rediriger si pas admin
    useEffect(() => {
        console.log('AdminPage - Loading:', loading, 'Authenticated:', isAuthenticated, 'IsAdmin:', isAdmin)
        if (!loading && (!isAuthenticated || !isAdmin)) {
            console.log('Redirecting to home - not admin')
            navigate('/')
        }
    }, [loading, isAuthenticated, isAdmin, navigate])

    // Charger les données
    useEffect(() => {
        console.log('useEffect - isAdmin:', isAdmin)
        if (isAdmin) {
            console.log('Loading data...')
            loadAdvertisements()
            loadArticles()
            loadEnterprises()
        }
    }, [isAdmin])

    const loadAdvertisements = async () => {
        try {
            console.log('Loading advertisements...')
            const { data, error } = await supabase
                .from('advertisements')
                .select('*')
                .order('created_at', { ascending: false })

            if (error) {
                console.error('Error loading advertisements:', error)
            } else {
                console.log('Advertisements loaded:', data)
                setAdvertisements(data || [])
            }
        } catch (err) {
            console.error('Error in loadAdvertisements:', err)
        }
    }


    const loadArticles = async () => {
        const { data, error } = await supabase
            .from('articles')
            .select('*')
            .order('created_at', { ascending: false })

        if (!error) setArticles(data || [])
    }

    const loadEnterprises = async () => {
        try {
            console.log('Loading enterprises...')
            const { data, error } = await supabase
                .from('enterprises')
                .select('*')
                .order('created_at', { ascending: false })

            if (error) {
                console.error('Error loading enterprises:', error)
            } else {
                console.log('Enterprises loaded:', data)
                setEnterprises(data || [])
            }
        } catch (err) {
            console.error('Error in loadEnterprises:', err)
        }
    }

    const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
        setTabValue(newValue)
    }

    const handleOpenDialog = (type: 'ad' | 'article' | 'enterprise', item?: Advertisement | Article | Enterprise) => {
        setDialogType(type)
        setEditingItem(item || null)
        setOpenDialog(true)
    }

    const handleCloseDialog = () => {
        setOpenDialog(false)
        setEditingItem(null)
    }

    const handleSave = async (formData: Record<string, unknown>) => {
        try {
            console.log('Saving data:', formData)

            if (dialogType === 'ad') {
                if (editingItem) {
                    const { error } = await supabase
                        .from('advertisements')
                        .update(formData)
                        .eq('id', (editingItem as Advertisement).id)
                    if (error) throw error
                } else {
                    const { error } = await supabase
                        .from('advertisements')
                        .insert(formData)
                    if (error) throw error
                }
                loadAdvertisements()
            } else if (dialogType === 'article') {
                if (editingItem) {
                    const { error } = await supabase
                        .from('articles')
                        .update(formData)
                        .eq('id', (editingItem as Article).id)
                    if (error) throw error
                } else {
                    const { error } = await supabase
                        .from('articles')
                        .insert(formData)
                    if (error) throw error
                }
                loadArticles()
            } else if (dialogType === 'enterprise') {
                if (editingItem) {
                    const { error } = await supabase
                        .from('enterprises')
                        .update(formData)
                        .eq('id', (editingItem as Enterprise).id)
                    if (error) throw error
                } else {
                    const { error } = await supabase
                        .from('enterprises')
                        .insert(formData)
                    if (error) throw error
                }
                loadEnterprises()
            }
            handleCloseDialog()
        } catch (error) {
            console.error('Error saving:', error)
            alert('Erreur lors de la sauvegarde: ' + (error as Error)?.message)
        }
    }

    const handleDelete = async (type: string, id: string) => {
        if (window.confirm('Êtes-vous sûr de vouloir supprimer cet élément ?')) {
            try {
                await supabase
                    .from(type)
                    .delete()
                    .eq('id', id)

                if (type === 'advertisements') loadAdvertisements()
                else if (type === 'articles') loadArticles()
                else if (type === 'enterprises') loadEnterprises()
            } catch (error) {
                console.error('Error deleting:', error)
            }
        }
    }

    const toggleActive = async (type: string, id: string, currentStatus: boolean) => {
        try {
            await supabase
                .from(type)
                .update({ is_active: !currentStatus })
                .eq('id', id)

            if (type === 'advertisements') loadAdvertisements()
            else if (type === 'articles') loadArticles()
            else if (type === 'enterprises') loadEnterprises()
        } catch (error) {
            console.error('Error updating status:', error)
        }
    }

    if (loading) {
        return (
            <Container maxWidth="lg" sx={{ py: 4 }}>
                <Typography variant="h4" sx={{ mb: 4 }}>
                    🛠️ Administration BTP Senegal
                </Typography>
                <Box sx={{ textAlign: 'center', py: 8 }}>
                    <Typography variant="h6">Chargement de l'authentification...</Typography>
                    <Typography variant="body2" sx={{ mt: 2 }}>
                        Vérification des permissions...
                    </Typography>
                </Box>
            </Container>
        )
    }

    if (!isAuthenticated) {
        return (
            <Container maxWidth="lg" sx={{ py: 4 }}>
                <Alert severity="error">
                    Vous devez être connecté pour accéder à cette page.
                </Alert>
            </Container>
        )
    }

    if (!isAdmin) {
        return (
            <Container maxWidth="lg" sx={{ py: 4 }}>
                <Typography variant="h4" sx={{ mb: 4 }}>
                    🛠️ Administration BTP Senegal
                </Typography>
                <Alert severity="error" sx={{ mb: 2 }}>
                    Accès refusé. Vous devez être administrateur pour accéder à cette page.
                </Alert>
                <Box sx={{ p: 2, backgroundColor: '#f5f5f5', borderRadius: 1 }}>
                    <Typography variant="body2" sx={{ mb: 1 }}>
                        <strong>Debug Info:</strong>
                    </Typography>
                    <Typography variant="body2">
                        • Authentifié: {isAuthenticated ? 'Oui' : 'Non'}
                    </Typography>
                    <Typography variant="body2">
                        • Admin: {isAdmin ? 'Oui' : 'Non'}
                    </Typography>
                    <Typography variant="body2">
                        • Loading: {loading ? 'Oui' : 'Non'}
                    </Typography>
                    <Typography variant="body2">
                        • Timeout: Non
                    </Typography>
                </Box>
            </Container>
        )
    }

    return (
        <PageTransition>
            <Container maxWidth="lg" sx={{ py: 4 }}>
                <Typography variant="h4" sx={{ mb: 4, fontWeight: 600 }}>
                    🛠️ Administration BTP Senegal
                </Typography>

                <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
                    <Tabs value={tabValue} onChange={handleTabChange}>
                        <Tab label="📢 Publicités" />
                        <Tab label="🏢 Annuaire" />
                        <Tab label="📰 Actualités" />
                    </Tabs>
                </Box>

                {/* Onglet Publicités */}
                <TabPanel value={tabValue} index={0}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
                        <Typography variant="h6">Gestion des Publicités</Typography>
                        <Button
                            variant="contained"
                            startIcon={<AddIcon />}
                            onClick={() => handleOpenDialog('ad')}
                        >
                            Ajouter une publicité
                        </Button>
                    </Box>

                    <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }, gap: 3 }}>
                        {advertisements.map((ad) => (
                            <Box key={ad.id}>
                                <Card>
                                    <CardContent>
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                                            <Typography variant="h6">{(ad as Advertisement).title}</Typography>
                                            <Box>
                                                <IconButton
                                                    onClick={() => handleOpenDialog('ad', ad)}
                                                    size="small"
                                                >
                                                    <EditIcon />
                                                </IconButton>
                                                <IconButton
                                                    onClick={() => handleDelete('advertisements', ad.id)}
                                                    size="small"
                                                    color="error"
                                                >
                                                    <DeleteIcon />
                                                </IconButton>
                                            </Box>
                                        </Box>
                                        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                                            {(ad as Advertisement).description}
                                        </Typography>
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <Chip
                                                label={(ad as Advertisement).is_active ? 'Actif' : 'Inactif'}
                                                color={(ad as Advertisement).is_active ? 'success' : 'default'}
                                                size="small"
                                            />
                                            <FormControlLabel
                                                control={
                                                    <Switch
                                                        checked={(ad as Advertisement).is_active}
                                                        onChange={() => toggleActive('advertisements', (ad as Advertisement).id, (ad as Advertisement).is_active)}
                                                    />
                                                }
                                                label=""
                                            />
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Box>
                        ))}
                    </Box>
                </TabPanel>


                {/* Onglet Annuaire */}
                <TabPanel value={tabValue} index={1}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
                        <Typography variant="h6">Gestion de l'Annuaire</Typography>
                        <Button
                            variant="contained"
                            startIcon={<AddIcon />}
                            onClick={() => handleOpenDialog('enterprise')}
                        >
                            Ajouter une entreprise
                        </Button>
                    </Box>

                    <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }, gap: 3 }}>
                        {enterprises.map((enterprise) => (
                            <Box key={enterprise.id}>
                                <Card>
                                    <CardContent>
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                                            <Typography variant="h6">{(enterprise as Enterprise).name}</Typography>
                                            <Box>
                                                <IconButton
                                                    onClick={() => handleOpenDialog('enterprise', enterprise)}
                                                    size="small"
                                                >
                                                    <EditIcon />
                                                </IconButton>
                                                <IconButton
                                                    onClick={() => handleDelete('enterprises', enterprise.id)}
                                                    size="small"
                                                    color="error"
                                                >
                                                    <DeleteIcon />
                                                </IconButton>
                                            </Box>
                                        </Box>
                                        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                                            {(enterprise as Enterprise).description}
                                        </Typography>
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <Chip
                                                label={(enterprise as Enterprise).is_active ? 'Actif' : 'Inactif'}
                                                color={(enterprise as Enterprise).is_active ? 'success' : 'default'}
                                                size="small"
                                            />
                                            <FormControlLabel
                                                control={
                                                    <Switch
                                                        checked={(enterprise as Enterprise).is_active}
                                                        onChange={() => toggleActive('enterprises', (enterprise as Enterprise).id, (enterprise as Enterprise).is_active)}
                                                    />
                                                }
                                                label=""
                                            />
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Box>
                        ))}
                    </Box>
                </TabPanel>

                {/* Onglet Actualités */}
                <TabPanel value={tabValue} index={2}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
                        <Typography variant="h6">Gestion des Actualités</Typography>
                        <Button
                            variant="contained"
                            startIcon={<AddIcon />}
                            onClick={() => handleOpenDialog('article')}
                        >
                            Ajouter un article
                        </Button>
                    </Box>

                    <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }, gap: 3 }}>
                        {articles.map((article) => (
                            <Box key={article.id}>
                                <Card>
                                    <CardContent>
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                                            <Typography variant="h6">{(article as Article).title}</Typography>
                                            <Box>
                                                <IconButton
                                                    onClick={() => handleOpenDialog('article', article)}
                                                    size="small"
                                                >
                                                    <EditIcon />
                                                </IconButton>
                                                <IconButton
                                                    onClick={() => handleDelete('articles', article.id)}
                                                    size="small"
                                                    color="error"
                                                >
                                                    <DeleteIcon />
                                                </IconButton>
                                            </Box>
                                        </Box>
                                        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                                            {(article as Article).excerpt || (article as Article).content.substring(0, 100)}...
                                        </Typography>
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <Chip
                                                label={(article as Article).is_published ? 'Publié' : 'Brouillon'}
                                                color={(article as Article).is_published ? 'success' : 'default'}
                                                size="small"
                                            />
                                            <FormControlLabel
                                                control={
                                                    <Switch
                                                        checked={(article as Article).is_published}
                                                        onChange={() => toggleActive('articles', (article as Article).id, (article as Article).is_published)}
                                                    />
                                                }
                                                label=""
                                            />
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Box>
                        ))}
                    </Box>
                </TabPanel>

                {/* Formulaire de dialogue */}
                <AdminForm
                    open={openDialog}
                    onClose={handleCloseDialog}
                    onSave={handleSave}
                    type={dialogType}
                    editingItem={editingItem}
                />
            </Container>
        </PageTransition>
    )
}

export default AdminPage
