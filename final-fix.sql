-- Désactiver complètement RLS pour toutes les tables
ALTER TABLE public.advertisements DISABLE ROW LEVEL SECURITY;
ALTER TABLE public.services DISABLE ROW LEVEL SECURITY;
ALTER TABLE public.enterprises DISABLE ROW LEVEL SECURITY;
ALTER TABLE public.articles DISABLE ROW LEVEL SECURITY;

-- Supprimer toutes les politiques existantes
DROP POLICY
IF EXISTS "Public can view active advertisements" ON public.advertisements;
DROP POLICY
IF EXISTS "Authenticated users can manage advertisements" ON public.advertisements;
DROP POLICY
IF EXISTS "Public can view active services" ON public.services;
DROP POLICY
IF EXISTS "Authenticated users can manage services" ON public.services;
DROP POLICY
IF EXISTS "Public can view active enterprises" ON public.enterprises;
DROP POLICY
IF EXISTS "Authenticated users can manage enterprises" ON public.enterprises;
DROP POLICY
IF EXISTS "Public can view published articles" ON public.articles;
DROP POLICY
IF EXISTS "Authenticated users can manage articles" ON public.articles;

-- Permettre l'upload d'images sans restriction
DROP POLICY
IF EXISTS "Authenticated users can upload images" ON storage.objects;
DROP POLICY
IF EXISTS "Public can view images" ON storage.objects;
DROP POLICY
IF EXISTS "Authenticated users can delete images" ON storage.objects;
DROP POLICY
IF EXISTS "Authenticated users can update images" ON storage.objects;
DROP POLICY
IF EXISTS "Allow all uploads" ON storage.objects;

CREATE POLICY "Allow all storage operations" ON storage.objects
FOR ALL USING
(true);
