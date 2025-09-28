import { supabase } from './supabase'

export interface UploadResult {
    success: boolean
    url?: string
    error?: string
}

export const uploadImage = async (file: File, bucket: string = 'images'): Promise<UploadResult> => {
    try {
        // Générer un nom de fichier unique
        const fileExt = file.name.split('.').pop()
        const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`

        // Upload vers Supabase Storage
        const { data, error } = await supabase.storage
            .from(bucket)
            .upload(fileName, file, {
                cacheControl: '3600',
                upsert: false
            })

        if (error) {
            console.error('Error uploading file:', error)
            return { success: false, error: error.message }
        }

        // Obtenir l'URL publique
        const { data: { publicUrl } } = supabase.storage
            .from(bucket)
            .getPublicUrl(fileName)

        return { success: true, url: publicUrl }
    } catch (error) {
        console.error('Error in uploadImage:', error)
        return {
            success: false,
            error: error instanceof Error ? error.message : 'Erreur inconnue'
        }
    }
}

export const deleteImage = async (url: string, bucket: string = 'images'): Promise<boolean> => {
    try {
        // Extraire le nom du fichier de l'URL
        const fileName = url.split('/').pop()
        if (!fileName) return false

        const { error } = await supabase.storage
            .from(bucket)
            .remove([fileName])

        if (error) {
            console.error('Error deleting file:', error)
            return false
        }

        return true
    } catch (error) {
        console.error('Error in deleteImage:', error)
        return false
    }
}
