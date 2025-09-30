import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Container, Typography, Button, Card, CardContent, Alert, Tabs, Tab, IconButton, Chip, Dialog, DialogTitle, DialogContent, DialogActions, TextField, Switch, FormControlLabel } from '@mui/material';
import { Add as AddIcon, Edit as EditIcon, Delete as DeleteIcon, Visibility as VisibilityIcon, VisibilityOff as VisibilityOffIcon } from '@mui/icons-material';
import ImageSelector from '../../components/admin/ImageSelector';
const AdminPage = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [tabValue, setTabValue] = useState(0);
    const [advertisements, setAdvertisements] = useState([]);
    const [articles, setArticles] = useState([]);
    const [enterprises, setEnterprises] = useState([]);
    const [openDialog, setOpenDialog] = useState(false);
    const [dialogType, setDialogType] = useState('ad');
    const [editingItem, setEditingItem] = useState(null);
    const [imageSelectorOpen, setImageSelectorOpen] = useState(false);
    useEffect(() => {
        // Vérifier l'authentification
        const adminSession = localStorage.getItem('btp_admin_session');
        const adminEmail = localStorage.getItem('btp_admin_email');
        if (adminSession === 'true' && adminEmail) {
            setIsAuthenticated(true);
            // Charger toutes les données
            const storedAds = localStorage.getItem('btp_advertisements');
            if (storedAds)
                setAdvertisements(JSON.parse(storedAds));
            const storedArticles = localStorage.getItem('btp_articles');
            if (storedArticles)
                setArticles(JSON.parse(storedArticles));
            const storedEnterprises = localStorage.getItem('btp_enterprises');
            if (storedEnterprises)
                setEnterprises(JSON.parse(storedEnterprises));
        }
        else {
            navigate('/auth/login');
        }
        setLoading(false);
    }, [navigate]);
    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);
    };
    const handleAdd = (type) => {
        setDialogType(type);
        if (type === 'article') {
            setEditingItem({
                id: Date.now().toString(),
                title: '',
                content: '',
                author: '',
                image_url: '',
                is_active: true,
                created_at: new Date().toISOString()
            });
        }
        else if (type === 'enterprise') {
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
            });
        }
        else {
            setEditingItem({
                id: Date.now().toString(),
                title: '',
                description: '',
                image_url: '',
                link_url: '',
                is_active: true,
                created_at: new Date().toISOString()
            });
        }
        setOpenDialog(true);
    };
    const handleEdit = (item) => {
        if (item.content !== undefined) {
            // C'est un article
            setDialogType('article');
        }
        else if (item.name !== undefined) {
            // C'est une entreprise
            setDialogType('enterprise');
        }
        else {
            // C'est une publicité
            setDialogType('ad');
        }
        setEditingItem(item);
        setOpenDialog(true);
    };
    const handleSave = () => {
        if (dialogType === 'ad') {
            const existingIndex = advertisements.findIndex(ad => ad.id === editingItem.id);
            if (existingIndex >= 0) {
                // Modification
                const updatedAds = [...advertisements];
                updatedAds[existingIndex] = editingItem;
                setAdvertisements(updatedAds);
                localStorage.setItem('btp_advertisements', JSON.stringify(updatedAds));
                alert('Publicité modifiée avec succès!');
            }
            else {
                // Ajout
                const updatedAds = [...advertisements, editingItem];
                setAdvertisements(updatedAds);
                localStorage.setItem('btp_advertisements', JSON.stringify(updatedAds));
                alert('Publicité ajoutée avec succès!');
            }
        }
        else if (dialogType === 'article') {
            const existingIndex = articles.findIndex(article => article.id === editingItem.id);
            if (existingIndex >= 0) {
                // Modification
                const updatedArticles = [...articles];
                updatedArticles[existingIndex] = editingItem;
                setArticles(updatedArticles);
                localStorage.setItem('btp_articles', JSON.stringify(updatedArticles));
                // Déclencher l'événement pour mettre à jour la page actualités
                window.dispatchEvent(new CustomEvent('articlesUpdated'));
                alert('Actualité modifiée avec succès!');
            }
            else {
                // Ajout
                const updatedArticles = [...articles, editingItem];
                setArticles(updatedArticles);
                localStorage.setItem('btp_articles', JSON.stringify(updatedArticles));
                console.log('Article saved with ID:', editingItem.id);
                console.log('All articles after save:', updatedArticles.map(a => ({ id: a.id, title: a.title })));
                // Déclencher l'événement pour mettre à jour la page actualités
                window.dispatchEvent(new CustomEvent('articlesUpdated'));
                alert('Actualité ajoutée avec succès!');
            }
        }
        else if (dialogType === 'enterprise') {
            const existingIndex = enterprises.findIndex(enterprise => enterprise.id === editingItem.id);
            if (existingIndex >= 0) {
                // Modification
                const updatedEnterprises = [...enterprises];
                updatedEnterprises[existingIndex] = editingItem;
                setEnterprises(updatedEnterprises);
                localStorage.setItem('btp_enterprises', JSON.stringify(updatedEnterprises));
                // Déclencher l'événement pour mettre à jour la page annuaire
                window.dispatchEvent(new CustomEvent('enterprisesUpdated'));
                alert('Entreprise modifiée avec succès!');
            }
            else {
                // Ajout
                const updatedEnterprises = [...enterprises, editingItem];
                setEnterprises(updatedEnterprises);
                localStorage.setItem('btp_enterprises', JSON.stringify(updatedEnterprises));
                // Déclencher l'événement pour mettre à jour la page annuaire
                window.dispatchEvent(new CustomEvent('enterprisesUpdated'));
                alert('Entreprise ajoutée avec succès!');
            }
        }
        setOpenDialog(false);
        setEditingItem(null);
    };
    const handleDelete = (id) => {
        console.log('Suppression directe de l\'élément avec ID:', id);
        const updatedAds = advertisements.filter(ad => ad.id !== id);
        setAdvertisements(updatedAds);
        localStorage.setItem('btp_advertisements', JSON.stringify(updatedAds));
        alert('Publicité supprimée avec succès!');
    };
    const toggleActive = (id) => {
        const updatedAds = advertisements.map(ad => ad.id === id ? { ...ad, is_active: !ad.is_active } : ad);
        setAdvertisements(updatedAds);
        localStorage.setItem('btp_advertisements', JSON.stringify(updatedAds));
        alert('Statut de la publicité modifié!');
    };
    const handleOpenImageSelector = () => {
        setImageSelectorOpen(true);
    };
    const handleImageSelect = (imageUrl) => {
        setEditingItem({ ...editingItem, image_url: imageUrl });
        setImageSelectorOpen(false);
    };
    const handleDeleteArticle = (id) => {
        const updatedArticles = articles.filter(article => article.id !== id);
        setArticles(updatedArticles);
        localStorage.setItem('btp_articles', JSON.stringify(updatedArticles));
        // Déclencher l'événement pour mettre à jour la page actualités
        window.dispatchEvent(new CustomEvent('articlesUpdated'));
        alert('Actualité supprimée avec succès!');
    };
    const toggleActiveArticle = (id) => {
        const updatedArticles = articles.map(article => article.id === id ? { ...article, is_active: !article.is_active } : article);
        setArticles(updatedArticles);
        localStorage.setItem('btp_articles', JSON.stringify(updatedArticles));
        // Déclencher l'événement pour mettre à jour la page actualités
        window.dispatchEvent(new CustomEvent('articlesUpdated'));
        alert('Statut de l\'actualité modifié!');
    };
    const handleDeleteEnterprise = (id) => {
        const updatedEnterprises = enterprises.filter(enterprise => enterprise.id !== id);
        setEnterprises(updatedEnterprises);
        localStorage.setItem('btp_enterprises', JSON.stringify(updatedEnterprises));
        // Déclencher l'événement pour mettre à jour la page annuaire
        window.dispatchEvent(new CustomEvent('enterprisesUpdated'));
        alert('Entreprise supprimée avec succès!');
    };
    const toggleActiveEnterprise = (id) => {
        const updatedEnterprises = enterprises.map(enterprise => enterprise.id === id ? { ...enterprise, is_active: !enterprise.is_active } : enterprise);
        setEnterprises(updatedEnterprises);
        localStorage.setItem('btp_enterprises', JSON.stringify(updatedEnterprises));
        // Déclencher l'événement pour mettre à jour la page annuaire
        window.dispatchEvent(new CustomEvent('enterprisesUpdated'));
        alert('Statut de l\'entreprise modifié!');
    };
    if (loading) {
        return (_jsx(Box, { sx: { display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }, children: _jsx(Typography, { children: "Chargement..." }) }));
    }
    if (!isAuthenticated) {
        return (_jsx(Box, { sx: { display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }, children: _jsx(Alert, { severity: "error", children: "Acc\u00E8s non autoris\u00E9" }) }));
    }
    return (_jsx(Box, { sx: { backgroundColor: '#f8fafc', minHeight: '100vh' }, children: _jsxs(Container, { maxWidth: "xl", sx: { py: 4 }, children: [_jsx(Typography, { variant: "h4", sx: { mb: 4, fontWeight: 700 }, children: "Administration" }), _jsxs(Card, { children: [_jsx(Box, { sx: { borderBottom: 1, borderColor: 'divider' }, children: _jsxs(Tabs, { value: tabValue, onChange: handleTabChange, children: [_jsx(Tab, { label: `Publicités (${advertisements.length})` }), _jsx(Tab, { label: `Actualités (${articles.length})` }), _jsx(Tab, { label: `Annuaire (${enterprises.length})` })] }) }), _jsxs(CardContent, { children: [tabValue === 0 && (_jsxs(Box, { children: [_jsxs(Box, { sx: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }, children: [_jsx(Typography, { variant: "h6", children: "Gestion des Publicit\u00E9s" }), _jsx(Button, { variant: "contained", startIcon: _jsx(AddIcon, {}), onClick: () => handleAdd('ad'), sx: { backgroundColor: '#f97316', '&:hover': { backgroundColor: '#ea580c' } }, children: "Ajouter une publicit\u00E9" })] }), advertisements.length === 0 ? (_jsx(Typography, { color: "textSecondary", children: "Aucune publicit\u00E9 trouv\u00E9e" })) : (_jsx(Box, { sx: { display: 'flex', flexDirection: 'column', gap: 2 }, children: advertisements.map((ad) => (_jsx(Card, { variant: "outlined", children: _jsx(CardContent, { children: _jsxs(Box, { sx: { display: 'flex', justifyContent: 'space-between', alignItems: 'center' }, children: [_jsxs(Box, { children: [_jsx(Typography, { variant: "h6", children: ad.title }), _jsx(Typography, { variant: "body2", color: "textSecondary", children: ad.description }), _jsx(Chip, { label: ad.is_active ? 'Actif' : 'Inactif', color: ad.is_active ? 'success' : 'error', size: "small", sx: { mt: 1 } })] }), _jsxs(Box, { sx: { display: 'flex', gap: 1 }, children: [_jsx(IconButton, { size: "small", color: "primary", onClick: () => handleEdit(ad), title: "Modifier", children: _jsx(EditIcon, {}) }), _jsx(IconButton, { size: "small", color: ad.is_active ? "warning" : "success", onClick: () => toggleActive(ad.id), title: ad.is_active ? "Désactiver" : "Activer", children: ad.is_active ? _jsx(VisibilityOffIcon, {}) : _jsx(VisibilityIcon, {}) }), _jsx(IconButton, { size: "small", color: "error", onClick: () => handleDelete(ad.id), title: "Supprimer", children: _jsx(DeleteIcon, {}) })] })] }) }) }, ad.id))) }))] })), tabValue === 1 && (_jsxs(Box, { children: [_jsxs(Box, { sx: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }, children: [_jsx(Typography, { variant: "h6", children: "Gestion des Actualit\u00E9s" }), _jsx(Button, { variant: "contained", startIcon: _jsx(AddIcon, {}), onClick: () => handleAdd('article'), sx: { backgroundColor: '#f97316', '&:hover': { backgroundColor: '#ea580c' } }, children: "Ajouter une actualit\u00E9" })] }), articles.length === 0 ? (_jsx(Typography, { color: "textSecondary", children: "Aucune actualit\u00E9 trouv\u00E9e" })) : (_jsx(Box, { sx: { display: 'flex', flexDirection: 'column', gap: 2 }, children: articles.map((article) => (_jsx(Card, { variant: "outlined", children: _jsx(CardContent, { children: _jsxs(Box, { sx: { display: 'flex', justifyContent: 'space-between', alignItems: 'center' }, children: [_jsxs(Box, { children: [_jsx(Typography, { variant: "h6", children: article.title }), _jsxs(Typography, { variant: "body2", color: "textSecondary", children: [article.content?.substring(0, 100), "..."] }), _jsxs(Typography, { variant: "caption", color: "textSecondary", children: ["Par ", article.author] }), _jsx(Chip, { label: article.is_active ? 'Actif' : 'Inactif', color: article.is_active ? 'success' : 'error', size: "small", sx: { mt: 1, ml: 1 } })] }), _jsxs(Box, { sx: { display: 'flex', gap: 1 }, children: [_jsx(IconButton, { size: "small", color: "primary", onClick: () => handleEdit(article), title: "Modifier", children: _jsx(EditIcon, {}) }), _jsx(IconButton, { size: "small", color: article.is_active ? "warning" : "success", onClick: () => toggleActiveArticle(article.id), title: article.is_active ? "Désactiver" : "Activer", children: article.is_active ? _jsx(VisibilityOffIcon, {}) : _jsx(VisibilityIcon, {}) }), _jsx(IconButton, { size: "small", color: "error", onClick: () => handleDeleteArticle(article.id), title: "Supprimer", children: _jsx(DeleteIcon, {}) })] })] }) }) }, article.id))) }))] })), tabValue === 2 && (_jsxs(Box, { children: [_jsxs(Box, { sx: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }, children: [_jsx(Typography, { variant: "h6", children: "Gestion de l'Annuaire" }), _jsx(Button, { variant: "contained", startIcon: _jsx(AddIcon, {}), onClick: () => handleAdd('enterprise'), sx: { backgroundColor: '#f97316', '&:hover': { backgroundColor: '#ea580c' } }, children: "Ajouter une entreprise" })] }), enterprises.length === 0 ? (_jsx(Typography, { color: "textSecondary", children: "Aucune entreprise trouv\u00E9e" })) : (_jsx(Box, { sx: { display: 'flex', flexDirection: 'column', gap: 2 }, children: enterprises.map((enterprise) => (_jsx(Card, { variant: "outlined", children: _jsx(CardContent, { children: _jsxs(Box, { sx: { display: 'flex', justifyContent: 'space-between', alignItems: 'center' }, children: [_jsxs(Box, { children: [_jsx(Typography, { variant: "h6", children: enterprise.name }), _jsx(Typography, { variant: "body2", color: "textSecondary", children: enterprise.description }), _jsxs(Typography, { variant: "caption", color: "textSecondary", children: ["\uD83D\uDCE7 ", enterprise.contact_email, " | \uD83D\uDCDE ", enterprise.phone] }), _jsxs(Typography, { variant: "caption", color: "textSecondary", sx: { display: 'block' }, children: ["\uD83D\uDCCD ", enterprise.location] }), _jsx(Chip, { label: enterprise.is_active ? 'Actif' : 'Inactif', color: enterprise.is_active ? 'success' : 'error', size: "small", sx: { mt: 1 } })] }), _jsxs(Box, { sx: { display: 'flex', gap: 1 }, children: [_jsx(IconButton, { size: "small", color: "primary", onClick: () => handleEdit(enterprise), title: "Modifier", children: _jsx(EditIcon, {}) }), _jsx(IconButton, { size: "small", color: enterprise.is_active ? "warning" : "success", onClick: () => toggleActiveEnterprise(enterprise.id), title: enterprise.is_active ? "Désactiver" : "Activer", children: enterprise.is_active ? _jsx(VisibilityOffIcon, {}) : _jsx(VisibilityIcon, {}) }), _jsx(IconButton, { size: "small", color: "error", onClick: () => handleDeleteEnterprise(enterprise.id), title: "Supprimer", children: _jsx(DeleteIcon, {}) })] })] }) }) }, enterprise.id))) }))] }))] })] }), _jsxs(Dialog, { open: openDialog, onClose: () => setOpenDialog(false), maxWidth: "sm", fullWidth: true, children: [_jsx(DialogTitle, { children: dialogType === 'article' ?
                                (articles.find(article => article.id === editingItem?.id) ? 'Modifier' : 'Ajouter') + ' une actualité' :
                                dialogType === 'enterprise' ?
                                    (enterprises.find(enterprise => enterprise.id === editingItem?.id) ? 'Modifier' : 'Ajouter') + ' une entreprise' :
                                    (advertisements.find(ad => ad.id === editingItem?.id) ? 'Modifier' : 'Ajouter') + ' une publicité' }), _jsxs(DialogContent, { children: [dialogType === 'enterprise' ? (_jsx(TextField, { fullWidth: true, label: "Nom de l'entreprise", value: editingItem?.name || '', onChange: (e) => setEditingItem({ ...editingItem, name: e.target.value }), sx: { mb: 2, mt: 2 } })) : (_jsx(TextField, { fullWidth: true, label: "Titre", value: editingItem?.title || '', onChange: (e) => setEditingItem({ ...editingItem, title: e.target.value }), sx: { mb: 2, mt: 2 } })), dialogType === 'article' ? (_jsx(TextField, { fullWidth: true, multiline: true, rows: 4, label: "Contenu de l'actualit\u00E9", value: editingItem?.content || '', onChange: (e) => setEditingItem({ ...editingItem, content: e.target.value }), sx: { mb: 2 } })) : (_jsx(TextField, { fullWidth: true, multiline: true, rows: 3, label: "Description", value: editingItem?.description || '', onChange: (e) => setEditingItem({ ...editingItem, description: e.target.value }), sx: { mb: 2 } })), dialogType === 'article' && (_jsx(TextField, { fullWidth: true, label: "Auteur", value: editingItem?.author || '', onChange: (e) => setEditingItem({ ...editingItem, author: e.target.value }), sx: { mb: 2 } })), dialogType === 'enterprise' && (_jsxs(_Fragment, { children: [_jsx(TextField, { fullWidth: true, label: "Email de contact", value: editingItem?.contact_email || '', onChange: (e) => setEditingItem({ ...editingItem, contact_email: e.target.value }), sx: { mb: 2 } }), _jsx(TextField, { fullWidth: true, label: "T\u00E9l\u00E9phone", value: editingItem?.phone || '', onChange: (e) => setEditingItem({ ...editingItem, phone: e.target.value }), sx: { mb: 2 } }), _jsx(TextField, { fullWidth: true, label: "Localisation", value: editingItem?.location || '', onChange: (e) => setEditingItem({ ...editingItem, location: e.target.value }), sx: { mb: 2 } })] })), _jsxs(Box, { sx: { mb: 2 }, children: [_jsx(Typography, { variant: "body2", sx: { fontWeight: 600, mb: 1 }, children: dialogType === 'article' ? 'Image de l\'actualité' :
                                                dialogType === 'enterprise' ? 'Image de l\'entreprise' : 'Image de la publicité' }), _jsx(Typography, { variant: "caption", sx: { color: '#666', mb: 2, display: 'block' }, children: "\uD83D\uDCA1 S\u00E9lectionnez une image pour am\u00E9liorer l'affichage" }), editingItem?.image_url ? (_jsxs(Box, { sx: { display: 'flex', alignItems: 'center', gap: 2, p: 2, border: 1, borderColor: 'divider', borderRadius: 1 }, children: [_jsx(Box, { component: "img", src: editingItem.image_url, alt: "Selected", sx: {
                                                        width: 80,
                                                        height: 60,
                                                        objectFit: 'cover',
                                                        borderRadius: 1
                                                    } }), _jsxs(Box, { sx: { flex: 1 }, children: [_jsx(Typography, { variant: "body2", sx: { fontWeight: 600 }, children: "Image s\u00E9lectionn\u00E9e" }), _jsx(Typography, { variant: "caption", sx: { color: '#666' }, children: editingItem.image_url })] }), _jsx(Button, { size: "small", onClick: handleOpenImageSelector, sx: { backgroundColor: '#f97316', color: 'white', '&:hover': { backgroundColor: '#ea580c' } }, children: "Changer" })] })) : (_jsx(Button, { variant: "outlined", onClick: handleOpenImageSelector, sx: {
                                                borderColor: '#f97316',
                                                color: '#f97316',
                                                '&:hover': {
                                                    borderColor: '#ea580c',
                                                    backgroundColor: '#fff7ed'
                                                }
                                            }, children: "S\u00E9lectionner une image" }))] }), dialogType === 'ad' && (_jsx(TextField, { fullWidth: true, label: "Lien URL (optionnel)", value: editingItem?.link_url || '', onChange: (e) => setEditingItem({ ...editingItem, link_url: e.target.value }), sx: { mb: 2 } })), _jsx(FormControlLabel, { control: _jsx(Switch, { checked: editingItem?.is_active || false, onChange: (e) => setEditingItem({ ...editingItem, is_active: e.target.checked }) }), label: dialogType === 'article' ? 'Actualité active' :
                                        dialogType === 'enterprise' ? 'Entreprise active' : 'Publicité active' })] }), _jsxs(DialogActions, { children: [_jsx(Button, { onClick: () => setOpenDialog(false), children: "Annuler" }), _jsx(Button, { onClick: handleSave, variant: "contained", children: "Sauvegarder" })] })] }), _jsx(ImageSelector, { open: imageSelectorOpen, onClose: () => setImageSelectorOpen(false), onSelect: handleImageSelect, currentImage: editingItem?.image_url || '' })] }) }));
};
export default AdminPage;
