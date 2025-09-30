import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button, Grid, FormControl, InputLabel, Select, MenuItem, Switch, FormControlLabel, Box } from '@mui/material';
import ImageUpload from './ImageUpload';
import { uploadImage } from '../../lib/uploadService';
const AdminForm = ({ open, onClose, onSave, type, editingItem }) => {
    const [formData, setFormData] = useState({});
    const [loading, setLoading] = useState(false);
    const [uploadedFiles, setUploadedFiles] = useState({});
    useEffect(() => {
        if (editingItem) {
            setFormData(editingItem);
        }
        else {
            // Réinitialiser le formulaire
            setFormData(getDefaultFormData());
        }
    }, [editingItem, type]);
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
                };
            case 'service':
                return {
                    name: '',
                    description: '',
                    category: '',
                    price: '',
                    duration: '',
                    is_active: true
                };
            case 'article':
                return {
                    title: '',
                    content: '',
                    excerpt: '',
                    image_url: '',
                    category: '',
                    is_published: false
                };
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
                };
            default:
                return {};
        }
    };
    const handleInputChange = (field, value) => {
        setFormData((prev) => ({
            ...prev,
            [field]: value
        }));
    };
    const handleImageUpload = (field, file, previewUrl) => {
        setUploadedFiles(prev => ({
            ...prev,
            [field]: file
        }));
        // Mettre à jour l'URL de l'image dans formData
        setFormData((prev) => ({
            ...prev,
            [field]: previewUrl
        }));
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            // Préparer les données à sauvegarder
            const dataToSave = { ...formData };
            // Uploader les images si nécessaire
            for (const [field, file] of Object.entries(uploadedFiles)) {
                if (file) {
                    const uploadResult = await uploadImage(file);
                    if (uploadResult.success && uploadResult.url) {
                        dataToSave[field] = uploadResult.url;
                    }
                    else {
                        console.error(`Erreur upload ${field}:`, uploadResult.error);
                        // Garder l'URL existante si l'upload échoue
                    }
                }
            }
            await onSave(dataToSave);
            onClose();
        }
        catch (error) {
            console.error('Error saving:', error);
        }
        finally {
            setLoading(false);
        }
    };
    const renderAdForm = () => (_jsxs(Grid, { container: true, spacing: 3, children: [_jsx(Grid, { item: true, xs: 12, md: 6, children: _jsx(TextField, { fullWidth: true, label: "Titre", value: formData.title || '', onChange: (e) => handleInputChange('title', e.target.value), required: true }) }), _jsx(Grid, { item: true, xs: 12, md: 6, children: _jsx(TextField, { fullWidth: true, label: "Entreprise", value: formData.company || '', onChange: (e) => handleInputChange('company', e.target.value), required: true }) }), _jsx(Grid, { item: true, xs: 12, children: _jsx(TextField, { fullWidth: true, label: "Description", value: formData.description || '', onChange: (e) => handleInputChange('description', e.target.value), multiline: true, rows: 3, required: true }) }), _jsx(Grid, { item: true, xs: 12, md: 6, children: _jsx(TextField, { fullWidth: true, label: "Cat\u00E9gorie", value: formData.category || '', onChange: (e) => handleInputChange('category', e.target.value), required: true }) }), _jsx(Grid, { item: true, xs: 12, md: 6, children: _jsx(TextField, { fullWidth: true, label: "Localisation", value: formData.location || '', onChange: (e) => handleInputChange('location', e.target.value), required: true }) }), _jsx(Grid, { item: true, xs: 12, md: 6, children: _jsx(TextField, { fullWidth: true, label: "T\u00E9l\u00E9phone", value: formData.phone || '', onChange: (e) => handleInputChange('phone', e.target.value), required: true }) }), _jsx(Grid, { item: true, xs: 12, md: 6, children: _jsx(TextField, { fullWidth: true, label: "Prix", value: formData.price || '', onChange: (e) => handleInputChange('price', e.target.value) }) }), _jsx(Grid, { item: true, xs: 12, md: 6, children: _jsx(TextField, { fullWidth: true, label: "R\u00E9duction", value: formData.discount || '', onChange: (e) => handleInputChange('discount', e.target.value) }) }), _jsx(Grid, { item: true, xs: 12, children: _jsx(ImageUpload, { value: formData.image_url, onChange: (file, previewUrl) => handleImageUpload('image_url', file, previewUrl), label: "Image de la publicit\u00E9" }) }), _jsx(Grid, { item: true, xs: 12, children: _jsxs(Box, { sx: { display: 'flex', gap: 2 }, children: [_jsx(FormControlLabel, { control: _jsx(Switch, { checked: formData.featured || false, onChange: (e) => handleInputChange('featured', e.target.checked) }), label: "Mise en avant" }), _jsx(FormControlLabel, { control: _jsx(Switch, { checked: formData.is_active || false, onChange: (e) => handleInputChange('is_active', e.target.checked) }), label: "Actif" })] }) })] }));
    const renderServiceForm = () => (_jsxs(Grid, { container: true, spacing: 3, children: [_jsx(Grid, { item: true, xs: 12, md: 6, children: _jsx(TextField, { fullWidth: true, label: "Nom du service", value: formData.name || '', onChange: (e) => handleInputChange('name', e.target.value), required: true }) }), _jsx(Grid, { item: true, xs: 12, md: 6, children: _jsx(TextField, { fullWidth: true, label: "Cat\u00E9gorie", value: formData.category || '', onChange: (e) => handleInputChange('category', e.target.value), required: true }) }), _jsx(Grid, { item: true, xs: 12, children: _jsx(TextField, { fullWidth: true, label: "Description", value: formData.description || '', onChange: (e) => handleInputChange('description', e.target.value), multiline: true, rows: 3, required: true }) }), _jsx(Grid, { item: true, xs: 12, md: 6, children: _jsx(TextField, { fullWidth: true, label: "Prix", value: formData.price || '', onChange: (e) => handleInputChange('price', e.target.value) }) }), _jsx(Grid, { item: true, xs: 12, md: 6, children: _jsx(TextField, { fullWidth: true, label: "Dur\u00E9e", value: formData.duration || '', onChange: (e) => handleInputChange('duration', e.target.value) }) }), _jsx(Grid, { item: true, xs: 12, children: _jsx(FormControlLabel, { control: _jsx(Switch, { checked: formData.is_active || false, onChange: (e) => handleInputChange('is_active', e.target.checked) }), label: "Service actif" }) })] }));
    const renderArticleForm = () => (_jsxs(Grid, { container: true, spacing: 3, children: [_jsx(Grid, { item: true, xs: 12, children: _jsx(TextField, { fullWidth: true, label: "Titre de l'article", value: formData.title || '', onChange: (e) => handleInputChange('title', e.target.value), required: true }) }), _jsx(Grid, { item: true, xs: 12, md: 6, children: _jsxs(FormControl, { fullWidth: true, children: [_jsx(InputLabel, { children: "Cat\u00E9gorie" }), _jsxs(Select, { value: formData.category || '', onChange: (e) => handleInputChange('category', e.target.value), label: "Cat\u00E9gorie", children: [_jsx(MenuItem, { value: "Mat\u00E9riaux de construction", children: "Mat\u00E9riaux de construction" }), _jsx(MenuItem, { value: "\u00C9quipements BTP", children: "\u00C9quipements BTP" }), _jsx(MenuItem, { value: "Services de construction", children: "Services de construction" }), _jsx(MenuItem, { value: "Architecture", children: "Architecture" }), _jsx(MenuItem, { value: "Ing\u00E9nierie", children: "Ing\u00E9nierie" }), _jsx(MenuItem, { value: "Formation BTP", children: "Formation BTP" }), _jsx(MenuItem, { value: "Assurance BTP", children: "Assurance BTP" }), _jsx(MenuItem, { value: "Autre", children: "Autre" })] })] }) }), _jsx(Grid, { item: true, xs: 12, children: _jsx(ImageUpload, { value: formData.image_url, onChange: (file, previewUrl) => handleImageUpload('image_url', file, previewUrl), label: "Image de l'article" }) }), _jsx(Grid, { item: true, xs: 12, children: _jsx(TextField, { fullWidth: true, label: "Extrait", value: formData.excerpt || '', onChange: (e) => handleInputChange('excerpt', e.target.value), multiline: true, rows: 2 }) }), _jsx(Grid, { item: true, xs: 12, children: _jsx(TextField, { fullWidth: true, label: "Contenu", value: formData.content || '', onChange: (e) => handleInputChange('content', e.target.value), multiline: true, rows: 6, required: true }) }), _jsx(Grid, { item: true, xs: 12, children: _jsx(FormControlLabel, { control: _jsx(Switch, { checked: formData.is_published || false, onChange: (e) => handleInputChange('is_published', e.target.checked) }), label: "Publier l'article" }) })] }));
    const renderEnterpriseForm = () => (_jsxs(Grid, { container: true, spacing: 3, children: [_jsx(Grid, { item: true, xs: 12, md: 6, children: _jsx(TextField, { fullWidth: true, label: "Nom de l'entreprise", value: formData.name || '', onChange: (e) => handleInputChange('name', e.target.value), required: true }) }), _jsx(Grid, { item: true, xs: 12, md: 6, children: _jsxs(FormControl, { fullWidth: true, children: [_jsx(InputLabel, { children: "Cat\u00E9gorie" }), _jsxs(Select, { value: formData.category || '', onChange: (e) => handleInputChange('category', e.target.value), label: "Cat\u00E9gorie", required: true, children: [_jsx(MenuItem, { value: "Entrepreneur g\u00E9n\u00E9ral", children: "Entrepreneur g\u00E9n\u00E9ral" }), _jsx(MenuItem, { value: "Sp\u00E9cialis\u00E9 ma\u00E7onnerie", children: "Sp\u00E9cialis\u00E9 ma\u00E7onnerie" }), _jsx(MenuItem, { value: "Sp\u00E9cialis\u00E9 \u00E9lectricit\u00E9", children: "Sp\u00E9cialis\u00E9 \u00E9lectricit\u00E9" }), _jsx(MenuItem, { value: "Sp\u00E9cialis\u00E9 plomberie", children: "Sp\u00E9cialis\u00E9 plomberie" }), _jsx(MenuItem, { value: "Sp\u00E9cialis\u00E9 menuiserie", children: "Sp\u00E9cialis\u00E9 menuiserie" }), _jsx(MenuItem, { value: "Sp\u00E9cialis\u00E9 peinture", children: "Sp\u00E9cialis\u00E9 peinture" }), _jsx(MenuItem, { value: "Sp\u00E9cialis\u00E9 carrelage", children: "Sp\u00E9cialis\u00E9 carrelage" }), _jsx(MenuItem, { value: "Architecte", children: "Architecte" }), _jsx(MenuItem, { value: "Bureau d'\u00E9tudes", children: "Bureau d'\u00E9tudes" }), _jsx(MenuItem, { value: "Fournisseur mat\u00E9riaux", children: "Fournisseur mat\u00E9riaux" }), _jsx(MenuItem, { value: "Autre", children: "Autre" })] })] }) }), _jsx(Grid, { item: true, xs: 12, children: _jsx(TextField, { fullWidth: true, label: "Description", value: formData.description || '', onChange: (e) => handleInputChange('description', e.target.value), multiline: true, rows: 3, required: true }) }), _jsx(Grid, { item: true, xs: 12, md: 6, children: _jsx(TextField, { fullWidth: true, label: "Localisation", value: formData.location || '', onChange: (e) => handleInputChange('location', e.target.value), required: true }) }), _jsx(Grid, { item: true, xs: 12, md: 6, children: _jsx(TextField, { fullWidth: true, label: "T\u00E9l\u00E9phone", value: formData.phone || '', onChange: (e) => handleInputChange('phone', e.target.value) }) }), _jsx(Grid, { item: true, xs: 12, md: 6, children: _jsx(TextField, { fullWidth: true, label: "Email", value: formData.email || '', onChange: (e) => handleInputChange('email', e.target.value), type: "email" }) }), _jsx(Grid, { item: true, xs: 12, md: 6, children: _jsx(TextField, { fullWidth: true, label: "Site web", value: formData.website || '', onChange: (e) => handleInputChange('website', e.target.value) }) }), _jsx(Grid, { item: true, xs: 12, md: 6, children: _jsx(TextField, { fullWidth: true, label: "Note (0-5)", value: formData.rating || 4.5, onChange: (e) => handleInputChange('rating', parseFloat(e.target.value)), type: "number", inputProps: { min: 0, max: 5, step: 0.1 } }) }), _jsx(Grid, { item: true, xs: 12, md: 6, children: _jsx(TextField, { fullWidth: true, label: "Nombre d'avis", value: formData.reviews || 0, onChange: (e) => handleInputChange('reviews', parseInt(e.target.value)), type: "number" }) }), _jsx(Grid, { item: true, xs: 12, children: _jsx(ImageUpload, { value: formData.image_url, onChange: (file, previewUrl) => handleImageUpload('image_url', file, previewUrl), label: "Logo de l'entreprise" }) }), _jsx(Grid, { item: true, xs: 12, children: _jsx(FormControlLabel, { control: _jsx(Switch, { checked: formData.is_active || false, onChange: (e) => handleInputChange('is_active', e.target.checked) }), label: "Entreprise active" }) })] }));
    const getTitle = () => {
        switch (type) {
            case 'ad':
                return editingItem ? 'Modifier la publicité' : 'Nouvelle publicité';
            case 'service':
                return editingItem ? 'Modifier le service' : 'Nouveau service';
            case 'article':
                return editingItem ? 'Modifier l\'article' : 'Nouvel article';
            case 'enterprise':
                return editingItem ? 'Modifier l\'entreprise' : 'Nouvelle entreprise';
            default:
                return 'Formulaire';
        }
    };
    return (_jsxs(Dialog, { open: open, onClose: onClose, maxWidth: "md", fullWidth: true, children: [_jsx(DialogTitle, { children: getTitle() }), _jsxs("form", { onSubmit: handleSubmit, children: [_jsxs(DialogContent, { children: [type === 'ad' && renderAdForm(), type === 'service' && renderServiceForm(), type === 'article' && renderArticleForm(), type === 'enterprise' && renderEnterpriseForm()] }), _jsxs(DialogActions, { children: [_jsx(Button, { onClick: onClose, children: "Annuler" }), _jsx(Button, { type: "submit", variant: "contained", disabled: loading, children: editingItem ? 'Modifier' : 'Créer' })] })] })] }));
};
export default AdminForm;
