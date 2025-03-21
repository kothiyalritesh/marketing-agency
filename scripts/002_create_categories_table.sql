-- Create categories table
CREATE TABLE IF NOT EXISTS categories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT UNIQUE NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;

-- Policy: Anyone can read categories
CREATE POLICY "Anyone can view categories" 
  ON categories FOR SELECT 
  USING (true);

-- Policy: Authenticated users can manage categories
CREATE POLICY "Authenticated users can create categories" 
  ON categories FOR INSERT 
  WITH CHECK (auth.uid() IS NOT NULL);

CREATE POLICY "Authenticated users can update categories" 
  ON categories FOR UPDATE 
  USING (auth.uid() IS NOT NULL);

CREATE POLICY "Authenticated users can delete categories" 
  ON categories FOR DELETE 
  USING (auth.uid() IS NOT NULL);

-- Insert default categories
INSERT INTO categories (name, slug) VALUES
  ('Digital Marketing', 'digital-marketing'),
  ('Social Media', 'social-media'),
  ('SEO', 'seo'),
  ('Web Development', 'web-development'),
  ('Branding', 'branding'),
  ('Content Marketing', 'content-marketing')
ON CONFLICT (slug) DO NOTHING;
