-- Désactiver RLS temporairement pour permettre les tests
ALTER TABLE public.advertisements DISABLE ROW LEVEL SECURITY;
ALTER TABLE public.services DISABLE ROW LEVEL SECURITY;
ALTER TABLE public.enterprises DISABLE ROW LEVEL SECURITY;
ALTER TABLE public.articles DISABLE ROW LEVEL SECURITY;

-- Permettre l'upload d'images sans authentification
CREATE POLICY "Allow all uploads" ON storage.objects
FOR ALL USING
(true);
