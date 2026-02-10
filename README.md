# Amazon Finds India - Affiliate Website

A clean, fast, conversion-focused Amazon affiliate site built for Pinterest traffic.

## 🎯 Project Goal

Earn side income by promoting practical Amazon products (₹299-₹999) to Indian audiences via Pinterest.

## 📁 Project Structure

```
amazon-finds/
├── app/
│   ├── layout.tsx          # Root layout with header/footer
│   ├── page.tsx            # Homepage with featured products
│   ├── globals.css         # Minimal CSS (mobile-first, fast)
│   ├── under-499/          # Main money page
│   │   └── page.tsx
│   ├── cleaning-tools/     # Category page
│   │   └── page.tsx
│   ├── about/              # About page
│   │   └── page.tsx
│   └── disclosure/         # Affiliate disclosure
│       └── page.tsx
├── public/                 # Images for Pinterest pins
├── package.json
├── next.config.js          # Static export config
└── tsconfig.json
```

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production (static export)
npm run build

# Preview production build
npx serve@latest out
```

## 📌 Pinterest Optimization

### Image Requirements
- **Size:** 1000x1500px or 1000x1800px (vertical)
- **Format:** PNG or JPG
- **Text overlay:** Large, readable fonts
- **Branding:** Subtle site name at bottom

### Pin-Worthy Content Ideas
1. "8 Amazon Products Under ₹499 That'll Make Cleaning Easy"
2. "This ₹299 Tool Solved My Kitchen Mess Problem"
3. "Budget Home Products Indian Homes Actually Need"
4. "Stop Wasting Money - Buy These Instead"

### SEO Meta Tags (Already Included)
Each page has:
- Optimized title tags
- Meta descriptions
- Open Graph images for Pinterest
- Proper heading hierarchy

## 🔗 Amazon Affiliate Setup

### Before Going Live:

1. **Get Amazon Associate ID**
   - Sign up at: https://affiliate.amazon.in
   - Get your tracking ID (format: `yourname-21`)

2. **Replace Placeholder Links**
   - Find all instances of `https://amzn.to/YOUR-AFFILIATE-LINK`
   - Replace with actual Amazon affiliate links
   - Use Amazon's link builder tool

3. **Link Format Example**
   ```html
   <a 
     href="https://amzn.to/abc123" 
     className="amazon-btn"
     target="_blank"
     rel="nofollow sponsored noopener"
   >
     Check price on Amazon
   </a>
   ```

### Amazon Link Best Practices:
- Always use `rel="nofollow sponsored"`
- Open in new tab (`target="_blank"`)
- Use short links (amzn.to) for cleaner URLs
- Test links before publishing

## 📱 Mobile-First Design

- Clean, readable typography
- Fast loading (no heavy images in code)
- Touch-friendly buttons (min 44px height)
- No popups or intrusive elements
- Works perfectly on 360px width screens

## 🎨 Design Philosophy

**What This Site IS:**
- Clean and trustworthy
- Problem-solution focused
- Fast and minimal
- Conversion-optimized

**What This Site is NOT:**
- A portfolio site
- Over-designed with animations
- Cluttered with ads
- Aggressive or salesy

## 📊 Content Strategy

### Product Selection Criteria:
- ₹299-₹999 price range
- Solves a real daily problem
- Good reviews on Amazon
- High search volume on Pinterest
- Practical for Indian homes

### Content Format:
```
Problem → Why it's annoying
Solution → How product helps
Features → Bullet points (4-5)
Best for → Specific use cases
CTA → "Check price on Amazon"
```

## 🚢 Deployment (Vercel)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Production deployment
vercel --prod
```

### Vercel Configuration:
- Framework: Next.js
- Build command: `npm run build`
- Output directory: `out`
- Node version: 18.x

## 📈 Traffic Strategy

### Pinterest Focus:
1. Create 5-10 pins per product
2. Use different headlines/images
3. Pin to relevant boards
4. Schedule pins consistently
5. Join group boards in home/lifestyle niche

### Pin Frequency:
- 5-10 pins per day
- Mix of new and re-pins
- Best times: 8-11 PM IST

## ✅ Pre-Launch Checklist

- [ ] Replace all `YOUR-AFFILIATE-LINK` with real links
- [ ] Add Amazon Associate ID to all links
- [ ] Create Pinterest-optimized images (1000x1800)
- [ ] Test all links on mobile
- [ ] Verify page load speed (<2s)
- [ ] Check affiliate disclosure is visible
- [ ] Add Google Analytics (optional)
- [ ] Submit sitemap to Google Search Console

## 🎯 Success Metrics (Till June 2026)

- **Traffic Goal:** 1,000+ monthly visitors from Pinterest
- **Conversion Goal:** 2-3% click-through to Amazon
- **Income Goal:** ₹5,000-₹15,000/month
- **Content Goal:** 20-30 products listed

## 🛠️ Future Enhancements (Optional)

Only add if traffic grows:
- Search functionality
- More category pages
- Newsletter signup
- Comparison tables
- Seasonal product roundups

## 📝 Content Calendar

**Week 1-2:** Launch with existing products
**Week 3-4:** Add 5 more products
**Month 2:** Create seasonal content
**Month 3:** Analyze top performers, double down

## ⚠️ Important Notes

- **No fake urgency** - No "Limited time!" or countdown timers
- **No popups** - Clean browsing experience
- **No ads** - Only affiliate links
- **Honest reviews** - Don't recommend bad products
- **Mobile-first** - Most Pinterest traffic is mobile

## 📚 Resources

- [Amazon Associates Program](https://affiliate.amazon.in)
- [Pinterest Business](https://business.pinterest.com)
- [Next.js Docs](https://nextjs.org/docs)
- [Vercel Deployment](https://vercel.com/docs)

---

**Built with:** Next.js 14 + TypeScript + Minimal CSS
**Optimized for:** Speed, conversions, Pinterest traffic
**Target:** Side income from Amazon affiliate commissions
