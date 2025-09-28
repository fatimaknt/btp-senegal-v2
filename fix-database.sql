-- Créer la table enterprises
CREATE TABLE
IF NOT EXISTS public.enterprises
(
    id UUID DEFAULT gen_random_uuid
() PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT NOT NULL,
    category TEXT NOT NULL,
    location TEXT NOT NULL,
    phone TEXT NOT NULL,
    email TEXT,
    website TEXT,
    rating DECIMAL
(3,2) DEFAULT 4.5,
    reviews INTEGER DEFAULT 0,
    image_url TEXT,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP
WITH TIME ZONE DEFAULT NOW
(),
    updated_at TIMESTAMP
WITH TIME ZONE DEFAULT NOW
()
);

-- Créer la table articles
CREATE TABLE
IF NOT EXISTS public.articles
(
    id UUID DEFAULT gen_random_uuid
() PRIMARY KEY,
    title TEXT NOT NULL,
    content TEXT NOT NULL,
    excerpt TEXT,
    image_url TEXT,
    category TEXT,
    is_published BOOLEAN DEFAULT false,
    created_at TIMESTAMP
WITH TIME ZONE DEFAULT NOW
(),
    updated_at TIMESTAMP
WITH TIME ZONE DEFAULT NOW
()
);

-- Créer le bucket storage
INSERT INTO storage.buckets
    (id, name, public)
VALUES
    ('images', 'images', true)
ON CONFLICT
(id) DO NOTHING;

-- Politiques RLS pour enterprises
ALTER TABLE public.enterprises ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can view active enterprises" ON public.enterprises
FOR
SELECT USING (is_active = true);

CREATE POLICY "Authenticated users can manage enterprises" ON public.enterprises
FOR ALL USING
(auth.role
() = 'authenticated');

-- Politiques RLS pour articles
ALTER TABLE public.articles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can view published articles" ON public.articles
FOR
SELECT USING (is_published = true);

CREATE POLICY "Authenticated users can manage articles" ON public.articles
FOR ALL USING
(auth.role
() = 'authenticated');

-- Politiques pour le storage
CREATE POLICY "Authenticated users can upload images" ON storage.objects
FOR
INSERT WITH CHECK
    (
    bucket_
d = 'images'
    AND auth.role
() = 'authenticated'
);

CREATE POLICY "Public can view images" ON storage.objects
FOR
SELECT USING (bucket_id = 'images');

CREATE POLICY "Authenticated users can delete images" ON storage.objects
FOR
DELETE USING (
    bucket_id
= 'images' 
    AND auth.role
() = 'authenticated'
);

CREATE POLICY "Authenticated users can update images" ON storage.objects
FOR
UPDATE USING (
    bucket_id = 'images'
AND auth.role
() = 'authenticated'
);
