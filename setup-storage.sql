-- Créer le bucket pour les images
INSERT INTO storage.buckets
    (id, name, public)
VALUES
    ('images', 'images', true)
ON CONFLICT
(id) DO NOTHING;

-- Politique pour permettre l'upload d'images (authentifiés seulement)
CREATE POLICY "Authenticated users can upload images" ON storage.objects
FOR
INSERT WITH CHECK
    (
    bucket_
    d = 'images'
 
 auth.role
  
() = 'authenticated'
);

-- Politique pour permettre la lecture des images (public)
CREATE POLICY "Public can view images" ON storage.objects
FOR
SELECT USING (bucket_id = 'images');

-- Politique pour permettre la suppression d'images (authentifiés seulement)
CREATE POLICY "Authenticated users can delete images" ON storage.objects
FOR
DELETE USING (
    bucket_id
= 'images' 
    AND auth.role
() = 'authenticated'
);

-- Politique pour permettre la mise à jour d'images (authentifiés seulement)
CREATE POLICY "Authenticated users can update images" ON storage.objects
FOR
UPDATE USING (
    bucket_id = 'images'
AND auth.role
() = 'authenticated'
);
