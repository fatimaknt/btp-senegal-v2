import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useRef } from 'react';
import { Box, Button, Typography, Alert } from '@mui/material';
import { CloudUpload as CloudUploadIcon, Delete as DeleteIcon } from '@mui/icons-material';
const ImageUpload = ({ value, onChange, label = "Télécharger une image", accept = "image/*", maxSize = 5 }) => {
    const [preview, setPreview] = useState(value || '');
    const [error, setError] = useState('');
    const fileInputRef = useRef(null);
    const handleFileSelect = (event) => {
        const file = event.target.files?.[0];
        if (!file)
            return;
        // Vérifier la taille du fichier
        if (file.size > maxSize * 1024 * 1024) {
            setError(`Le fichier est trop volumineux. Taille maximale: ${maxSize}MB`);
            return;
        }
        // Vérifier le type de fichier
        if (!file.type.startsWith('image/')) {
            setError('Veuillez sélectionner un fichier image valide');
            return;
        }
        setError('');
        // Créer une URL de prévisualisation
        const previewUrl = URL.createObjectURL(file);
        setPreview(previewUrl);
        onChange(file, previewUrl);
    };
    const handleRemove = () => {
        if (preview) {
            URL.revokeObjectURL(preview);
        }
        setPreview('');
        onChange(null, '');
        setError('');
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };
    const handleUploadClick = () => {
        fileInputRef.current?.click();
    };
    return (_jsxs(Box, { children: [_jsx(Typography, { variant: "body2", sx: { mb: 1, fontWeight: 500 }, children: label }), error && (_jsx(Alert, { severity: "error", sx: { mb: 2 }, children: error })), _jsx(Box, { sx: {
                    border: '2px dashed #d1d5db',
                    borderRadius: 2,
                    p: 3,
                    textAlign: 'center',
                    backgroundColor: preview ? '#f9fafb' : '#fafafa',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    '&:hover': {
                        borderColor: '#f97316',
                        backgroundColor: '#fef3f2'
                    }
                }, onClick: handleUploadClick, children: preview ? (_jsxs(Box, { children: [_jsx(Box, { component: "img", src: preview, alt: "Preview", sx: {
                                maxWidth: '100%',
                                maxHeight: 200,
                                borderRadius: 1,
                                mb: 2
                            } }), _jsxs(Box, { sx: { display: 'flex', gap: 1, justifyContent: 'center' }, children: [_jsx(Button, { variant: "outlined", size: "small", startIcon: _jsx(CloudUploadIcon, {}), onClick: (e) => {
                                        e.stopPropagation();
                                        handleUploadClick();
                                    }, children: "Changer" }), _jsx(Button, { variant: "outlined", color: "error", size: "small", startIcon: _jsx(DeleteIcon, {}), onClick: (e) => {
                                        e.stopPropagation();
                                        handleRemove();
                                    }, children: "Supprimer" })] })] })) : (_jsxs(Box, { children: [_jsx(CloudUploadIcon, { sx: { fontSize: 48, color: '#9ca3af', mb: 2 } }), _jsx(Typography, { variant: "body2", color: "text.secondary", sx: { mb: 1 }, children: "Cliquez pour t\u00E9l\u00E9charger une image" }), _jsxs(Typography, { variant: "caption", color: "text.secondary", children: ["PNG, JPG, GIF jusqu'\u00E0 ", maxSize, "MB"] })] })) }), _jsx("input", { ref: fileInputRef, type: "file", accept: accept, onChange: handleFileSelect, style: { display: 'none' } })] }));
};
export default ImageUpload;
