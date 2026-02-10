# Deployment Guide - Amazon Finds India

## Pre-Deployment Checklist

### 1. Amazon Affiliate Setup
- [ ] Sign up for Amazon Associates India: https://affiliate.amazon.in
- [ ] Get your tracking ID (format: `yourname-21`)
- [ ] Create affiliate links for all products
- [ ] Replace all `YOUR-AFFILIATE-LINK` placeholders in code

### 2. Update Site Configuration

**In `app/sitemap.ts`:**
```typescript
const baseUrl = 'https://your-actual-domain.vercel.app'
```

**In `public/robots.txt`:**
```
Sitemap: https://your-actual-domain.vercel.app/sitemap.xml
```

### 3. Create Pinterest Images
- Create 1000x1500px images for each page
- Save as: `og-home.png`, `og-under-499.png`, `og-cleaning.png`
- Place in `/public` folder
- Follow PINTEREST_GUIDE.md for design tips

### 4. Test Locally

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Open http://localhost:3000
# Test all pages and links
```

## Vercel Deployment

### Option 1: Deploy via Vercel Dashboard (Easiest)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Amazon Finds India"
   git branch -M main
   git remote add origin https://github.com/yourusername/amazon-finds.git
   git push -u origin main
   ```

2. **Import to Vercel**
   - Go to https://vercel.com
   - Click "New Project"
   - Import your GitHub repository
   - Vercel auto-detects Next.js settings
   - Click "Deploy"

3. **Configure Domain (Optional)**
   - Go to Project Settings → Domains
   - Add custom domain or use `.vercel.app` subdomain

### Option 2: Deploy via CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy to preview
vercel

# Deploy to production
vercel --prod
```

## Post-Deployment Tasks

### 1. Verify Deployment
- [ ] Visit your live URL
- [ ] Test all pages load correctly
- [ ] Click all Amazon affiliate links
- [ ] Test on mobile device
- [ ] Check page load speed (should be <2s)

### 2. SEO Setup

**Google Search Console:**
1. Go to https://search.google.com/search-console
2. Add your property (domain or URL prefix)
3. Verify ownership
4. Submit sitemap: `https://your-domain.vercel.app/sitemap.xml`

**Pinterest Business Account:**
1. Convert to Pinterest Business account
2. Claim your website
3. Add Pinterest tag (optional, for analytics)

### 3. Analytics (Optional)

**Google Analytics 4:**
```typescript
// Add to app/layout.tsx in <head>
<Script
  src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  `}
</Script>
```

## Environment Variables (If Needed)

If you add features that need env variables:

```bash
# In Vercel Dashboard → Settings → Environment Variables
NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
```

## Continuous Deployment

Once connected to GitHub:
- Every push to `main` branch auto-deploys to production
- Pull requests create preview deployments
- Rollback to previous versions anytime

## Performance Optimization

### Already Implemented:
✅ Static export (fastest possible)
✅ Minimal CSS (no framework overhead)
✅ No JavaScript bloat
✅ Mobile-first responsive design
✅ Semantic HTML

### Optional Improvements:
- Add image optimization for Pinterest pins
- Enable Vercel Analytics
- Add service worker for offline support

## Monitoring

### Check These Metrics Weekly:

**Vercel Dashboard:**
- Page views
- Unique visitors
- Top pages
- Load times

**Google Search Console:**
- Impressions
- Clicks
- Average position
- Coverage errors

**Pinterest Analytics:**
- Pin impressions
- Saves
- Clicks to website
- Top performing pins

**Amazon Associates:**
- Clicks
- Conversions
- Earnings
- Top products

## Troubleshooting

### Build Fails
```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

### Links Don't Work
- Check affiliate links are correct format
- Verify `rel="nofollow sponsored"` is present
- Test links in incognito mode

### Slow Loading
- Check image sizes in `/public`
- Verify no large dependencies added
- Use Vercel Analytics to identify bottlenecks

### SEO Issues
- Verify sitemap is accessible
- Check robots.txt allows crawling
- Ensure meta tags are present on all pages

## Updating Content

### Adding New Products:

1. Edit the relevant page file (e.g., `app/under-499/page.tsx`)
2. Copy existing product card structure
3. Update product details and affiliate link
4. Commit and push to GitHub
5. Vercel auto-deploys in ~30 seconds

### Adding New Pages:

1. Create new folder in `app/` (e.g., `app/kitchen-tools/`)
2. Add `page.tsx` with metadata and content
3. Update navigation in `app/layout.tsx`
4. Update `app/sitemap.ts`
5. Commit and push

## Security

### Already Implemented:
✅ No user data collection
✅ No backend/database
✅ Static files only
✅ HTTPS via Vercel

### Best Practices:
- Never commit API keys to GitHub
- Use environment variables for secrets
- Keep dependencies updated: `npm audit`

## Backup Strategy

- Code is backed up on GitHub
- Vercel keeps deployment history
- Export content regularly for safety

## Cost Breakdown

**Free Tier (Vercel):**
- ✅ Unlimited bandwidth
- ✅ Automatic HTTPS
- ✅ 100 GB-hours compute
- ✅ Perfect for this project

**Paid Only If:**
- You exceed 100 GB-hours/month (unlikely)
- You want custom domain (₹500-1000/year)
- You add premium analytics

## Launch Checklist

Final checks before announcing:

- [ ] All affiliate links work and have correct tracking ID
- [ ] Disclosure page is linked in footer
- [ ] Mobile experience is smooth
- [ ] Page load time < 2 seconds
- [ ] All meta tags and OG images present
- [ ] Sitemap submitted to Google
- [ ] Pinterest business account claimed website
- [ ] At least 10 Pinterest pins created
- [ ] Analytics tracking (if using)
- [ ] Tested on multiple devices

## Next Steps After Launch

**Week 1:**
- Create 20-30 Pinterest pins
- Join 5-10 relevant group boards
- Pin 5-10 times daily

**Week 2:**
- Monitor which pins perform best
- Create more variations of top performers
- Add 2-3 new products

**Month 2:**
- Analyze traffic sources
- Double down on what works
- Consider adding seasonal content

**Month 3:**
- Review Amazon earnings
- Optimize low-performing pages
- Plan content expansion

---

**Support Resources:**
- Vercel Docs: https://vercel.com/docs
- Next.js Docs: https://nextjs.org/docs
- Amazon Associates Help: https://affiliate.amazon.in/help
- Pinterest Business: https://business.pinterest.com/en

Good luck! 🚀
