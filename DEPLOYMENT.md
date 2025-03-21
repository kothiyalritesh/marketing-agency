# Deployment Guide

This guide will help you deploy your WeBeeSocial marketing agency website to various platforms.

## Prerequisites

Before deploying, ensure you have:
- ✅ Supabase project set up with all tables created
- ✅ Environment variables configured
- ✅ Code tested locally
- ✅ All dependencies installed

## Platform-Specific Deployment

### 1. Vercel (Recommended - Easiest)

Vercel is the easiest platform to deploy Next.js applications.

#### Steps:
1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/your-repo.git
   git push -u origin main
   ```

2. **Deploy to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Sign up/login with GitHub
   - Click "New Project"
   - Import your repository
   - Configure environment variables:
     - `NEXT_PUBLIC_SUPABASE_URL`
     - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
     - `SUPABASE_SERVICE_ROLE_KEY`
     - `NEXT_PUBLIC_SITE_URL` (use your Vercel domain)
   - Click "Deploy"

3. **Update Supabase Settings:**
   - In Supabase dashboard, go to Authentication > URL Configuration
   - Add your Vercel domain to "Site URL"
   - Add `https://your-domain.vercel.app/auth/callback` to "Redirect URLs"

### 2. Netlify

#### Steps:
1. **Build Command:** `npm run build`
2. **Publish Directory:** `.next`
3. **Environment Variables:** Add all required env vars
4. **Redirects:** Create `_redirects` file:
   ```
   /api/* /.netlify/functions/:splat 200
   /* /index.html 200
   ```

### 3. Railway

#### Steps:
1. **Connect GitHub repo to Railway**
2. **Add environment variables**
3. **Railway will auto-deploy**

### 4. DigitalOcean App Platform

#### Steps:
1. **Create new app from GitHub**
2. **Configure build settings:**
   - Build Command: `npm run build`
   - Run Command: `npm start`
3. **Add environment variables**

## Environment Variables for Production

Make sure to set these in your deployment platform:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

## Supabase Configuration

### 1. Authentication Settings
- **Site URL:** `https://your-domain.com`
- **Redirect URLs:** 
  - `https://your-domain.com/auth/callback`
  - `http://localhost:3000/auth/callback` (for development)

### 2. Database Setup
Run these SQL scripts in Supabase SQL Editor:

```sql
-- Enable RLS on all tables
ALTER TABLE blogs ENABLE ROW LEVEL SECURITY;
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

-- Create policies (adjust as needed)
CREATE POLICY "Public can read published blogs" ON blogs
  FOR SELECT USING (published = true);

CREATE POLICY "Authenticated users can manage their blogs" ON blogs
  FOR ALL USING (auth.uid() = user_id);
```

## Domain Configuration

### Custom Domain (Vercel)
1. Go to your project settings in Vercel
2. Click "Domains"
3. Add your custom domain
4. Update DNS records as instructed
5. Update `NEXT_PUBLIC_SITE_URL` environment variable

## SSL Certificate

Most platforms (Vercel, Netlify, Railway) provide automatic SSL certificates. For custom deployments:
- Use Let's Encrypt for free SSL
- Configure HTTPS redirects
- Update all URLs to use HTTPS

## Performance Optimization

### Before Deployment:
1. **Optimize Images:**
   ```bash
   # Install sharp for better image optimization
   npm install sharp
   ```

2. **Enable Compression:**
   - Most platforms enable gzip automatically
   - Vercel and Netlify handle this by default

3. **Bundle Analysis:**
   ```bash
   npm install @next/bundle-analyzer
   # Add to next.config.js for analysis
   ```

## Monitoring and Analytics

### 1. Vercel Analytics
Add to your layout.tsx:
```tsx
import { Analytics } from '@vercel/analytics/react'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
```

### 2. Google Analytics
Add Google Analytics tracking code to your site.

## Troubleshooting

### Common Issues:

1. **Build Errors:**
   - Check TypeScript errors: `npm run type-check`
   - Fix ESLint issues: `npm run lint`

2. **Environment Variables:**
   - Ensure all required vars are set
   - Check variable names (case-sensitive)

3. **Supabase Connection:**
   - Verify URLs and keys
   - Check network policies
   - Ensure RLS policies are correct

4. **Authentication Issues:**
   - Verify redirect URLs in Supabase
   - Check site URL configuration

### Logs and Debugging:
- **Vercel:** Check function logs in dashboard
- **Netlify:** Check deploy logs and function logs
- **Railway:** Check application logs

## Security Checklist

Before going live:
- ✅ Environment variables are secure
- ✅ Database RLS policies are configured
- ✅ HTTPS is enabled
- ✅ Admin routes are protected
- ✅ Input validation is in place
- ✅ Rate limiting is configured (if needed)

## Backup Strategy

1. **Database Backups:**
   - Supabase provides automatic backups
   - Consider additional backup solutions for critical data

2. **Code Backups:**
   - Use Git for version control
   - Keep repository backed up

## Post-Deployment

1. **Test all functionality:**
   - Contact form submission
   - Admin login/logout
   - Blog creation/editing
   - Image uploads

2. **Set up monitoring:**
   - Uptime monitoring
   - Error tracking
   - Performance monitoring

3. **SEO Setup:**
   - Submit sitemap to Google Search Console
   - Configure meta tags
   - Set up Google Analytics

## Support

If you encounter issues during deployment:
1. Check the platform-specific documentation
2. Review error logs carefully
3. Verify all environment variables
4. Test locally first
5. Check Supabase configuration

For additional help, create an issue in the repository with:
- Platform you're deploying to
- Error messages
- Steps you've already tried