-- Create blogs table with all necessary fields
CREATE TABLE IF NOT EXISTS blogs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  excerpt TEXT,
  content TEXT NOT NULL,
  cover_image TEXT,
  category TEXT DEFAULT 'General',
  author_name TEXT DEFAULT 'Admin',
  author_image TEXT,
  published BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE
);

-- Enable Row Level Security
ALTER TABLE blogs ENABLE ROW LEVEL SECURITY;

-- Policy: Anyone can read published blogs
CREATE POLICY "Anyone can view published blogs" 
  ON blogs FOR SELECT 
  USING (published = true);

-- Policy: Authenticated users can view all their own blogs (including unpublished)
CREATE POLICY "Users can view their own blogs" 
  ON blogs FOR SELECT 
  USING (auth.uid() = user_id);

-- Policy: Authenticated users can insert their own blogs
CREATE POLICY "Users can create their own blogs" 
  ON blogs FOR INSERT 
  WITH CHECK (auth.uid() = user_id);

-- Policy: Authenticated users can update their own blogs
CREATE POLICY "Users can update their own blogs" 
  ON blogs FOR UPDATE 
  USING (auth.uid() = user_id);

-- Policy: Authenticated users can delete their own blogs
CREATE POLICY "Users can delete their own blogs" 
  ON blogs FOR DELETE 
  USING (auth.uid() = user_id);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS blogs_slug_idx ON blogs(slug);
CREATE INDEX IF NOT EXISTS blogs_published_idx ON blogs(published);
CREATE INDEX IF NOT EXISTS blogs_category_idx ON blogs(category);
CREATE INDEX IF NOT EXISTS blogs_user_id_idx ON blogs(user_id);

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger for updated_at
DROP TRIGGER IF EXISTS update_blogs_updated_at ON blogs;
CREATE TRIGGER update_blogs_updated_at
  BEFORE UPDATE ON blogs
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();
