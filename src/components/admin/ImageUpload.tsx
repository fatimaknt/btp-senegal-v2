import React, { useState, useRef } from 'react'
import {
    Box,
    Button,
    Typography,
    IconButton,
    Alert
} from '@mui/material'
import {
    CloudUpload as CloudUploadIcon,
    Delete as DeleteIcon,
    Image as ImageIcon
} from '@mui/icons-material'

interface ImageUploadProps {
    value?: string
    onChange: (file: File | null, previewUrl: string) => void
    label?: string
    accept?: string
    maxSize?: number // en MB
}

const ImageUpload: React.FC<ImageUploadProps> = ({
    value,
    onChange,
    label = "Télécharger une image",
    accept = "image/*",
    maxSize = 5
}) => {
    const [preview, setPreview] = useState<string>(value || '')
    const [error, setError] = useState<string>('')
    const fileInputRef = useRef<HTMLInputElement>(null)

    const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0]
        if (!file) return

        // Vérifier la taille du fichier
        if (file.size > maxSize * 1024 * 1024) {
            setError(`Le fichier est trop volumineux. Taille maximale: ${maxSize}MB`)
            return
        }

        // Vérifier le type de fichier
        if (!file.type.startsWith('image/')) {
            setError('Veuillez sélectionner un fichier image valide')
            return
        }

        setError('')

        // Créer une URL de prévisualisation
        const previewUrl = URL.createObjectURL(file)
        setPreview(previewUrl)
        onChange(file, previewUrl)
    }

    const handleRemove = () => {
        if (preview) {
            URL.revokeObjectURL(preview)
        }
        setPreview('')
        onChange(null, '')
        setError('')
        if (fileInputRef.current) {
            fileInputRef.current.value = ''
        }
    }

    const handleUploadClick = () => {
        fileInputRef.current?.click()
    }

    return (
        <Box>
            <Typography variant="body2" sx={{ mb: 1, fontWeight: 500 }}>
                {label}
            </Typography>

            {error && (
                <Alert severity="error" sx={{ mb: 2 }}>
                    {error}
                </Alert>
            )}

            <Box
                sx={{
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
                }}
                onClick={handleUploadClick}
            >
                {preview ? (
                    <Box>
                        <Box
                            component="img"
                            src={preview}
                            alt="Preview"
                            sx={{
                                maxWidth: '100%',
                                maxHeight: 200,
                                borderRadius: 1,
                                mb: 2
                            }}
                        />
                        <Box sx={{ display: 'flex', gap: 1, justifyContent: 'center' }}>
                            <Button
                                variant="outlined"
                                size="small"
                                startIcon={<CloudUploadIcon />}
                                onClick={(e) => {
                                    e.stopPropagation()
                                    handleUploadClick()
                                }}
                            >
                                Changer
                            </Button>
                            <Button
                                variant="outlined"
                                color="error"
                                size="small"
                                startIcon={<DeleteIcon />}
                                onClick={(e) => {
                                    e.stopPropagation()
                                    handleRemove()
                                }}
                            >
                                Supprimer
                            </Button>
                        </Box>
                    </Box>
                ) : (
                    <Box>
                        <CloudUploadIcon sx={{ fontSize: 48, color: '#9ca3af', mb: 2 }} />
                        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                            Cliquez pour télécharger une image
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                            PNG, JPG, GIF jusqu'à {maxSize}MB
                        </Typography>
                    </Box>
                )}
            </Box>

            <input
                ref={fileInputRef}
                type="file"
                accept={accept}
                onChange={handleFileSelect}
                style={{ display: 'none' }}
            />
        </Box>
    )
}

export default ImageUpload
