# Content Creation Quick Reference

## Product Card Template

Copy this structure when adding new products:

```tsx
<div className="product-card">
  <h3>[Product Name]</h3>
  <p className="product-price">₹[Price]</p>
  
  <p><strong>The problem:</strong> [What annoys people about this situation]</p>
  
  <p><strong>Why this works:</strong></p>
  <ul className="product-features">
    <li>[Benefit 1 - specific and practical]</li>
    <li>[Benefit 2 - how it saves time/money]</li>
    <li>[Benefit 3 - unique feature]</li>
    <li>[Benefit 4 - durability/quality]</li>
  </ul>
  
  <p><strong>Best for:</strong> [Specific use cases, 2-3 examples]</p>
  
  <a 
    href="https://amzn.to/YOUR-AFFILIATE-LINK" 
    className="amazon-btn"
    target="_blank"
    rel="nofollow sponsored noopener"
  >
    Check price on Amazon
  </a>
</div>
```

## Writing Guidelines

### Product Names
✅ **Good:** "Microfiber Cleaning Cloth Set (Pack of 6)"
❌ **Bad:** "Amazing Super Cloth!!!"

- Be specific and descriptive
- Include quantity if relevant
- No hype words or exclamation marks

### The Problem
✅ **Good:** "Regular cloths leave streaks on glass and mirrors."
❌ **Bad:** "You HATE cleaning windows, right???"

- State the problem clearly
- Keep it relatable and specific
- No fake urgency or manipulation

### Why This Works (Benefits)
✅ **Good:** "Lint-free cleaning for windows and screens"
❌ **Bad:** "Revolutionary nano-technology!!!"

- Focus on practical benefits
- Explain HOW it helps
- Be honest about what it does
- 4-5 bullet points max

### Best For
✅ **Good:** "Kitchen counters, bathroom mirrors, laptop screens"
❌ **Bad:** "Everyone needs this!"

- Give specific use cases
- Help people visualize using it
- 2-4 examples

## Tone Checklist

### ✅ DO:
- Sound like a helpful friend
- Be honest about limitations
- Use simple, clear language
- Focus on solving problems
- Mention price range
- Give specific examples

### ❌ DON'T:
- Use hype words (amazing, revolutionary, must-have)
- Create fake urgency (limited time, hurry)
- Make exaggerated claims
- Use ALL CAPS or excessive punctuation
- Sound like a salesperson
- Promise unrealistic results

## Banned Words/Phrases

Never use these:
- "Amazing"
- "Revolutionary"
- "Life-changing"
- "Must-have"
- "Limited time"
- "Hurry"
- "Don't miss out"
- "Secret"
- "Hack" (unless genuinely a hack)
- "Game-changer"
- Multiple exclamation marks!!!

## Price Guidelines

### How to Present Prices:
```tsx
<p className="product-price">₹299</p>
```

### In Text:
- "Under ₹500" ✅
- "Just ₹299" ✅
- "Only ₹199!!!" ❌
- "Normally ₹999, now ₹299!" ❌ (no fake discounts)

## Product Selection Criteria

Only add products that meet ALL these:

1. **Price:** ₹299-₹999 range
2. **Problem:** Solves a clear, common problem
3. **Reviews:** 4+ stars on Amazon with 100+ reviews
4. **Practical:** Daily use, not a gimmick
5. **Target:** Suitable for Indian homes
6. **Honest:** You'd actually recommend it

## Research Checklist

Before adding a product:

- [ ] Read at least 20 Amazon reviews
- [ ] Check 1-star reviews for common complaints
- [ ] Verify current price is in range
- [ ] Confirm product is in stock
- [ ] Check if similar products exist (compare)
- [ ] Ensure it fits your site's niche

## Category Ideas

### Current Categories:
- Under ₹499 (main money page)
- Cleaning & Home Tools

### Future Category Ideas:
- Kitchen Helpers Under ₹500
- Bathroom Essentials
- Storage & Organization
- Daily Use Tools
- Monsoon Must-Haves (seasonal)
- Summer Cooling Products (seasonal)

## SEO Meta Template

When creating new pages:

```tsx
export const metadata: Metadata = {
  title: '[Primary Keyword] - Amazon Finds India',
  description: '[Clear description with keywords, 120-155 characters]',
  openGraph: {
    title: '[Engaging title for social sharing]',
    description: '[Benefit-focused description]',
    images: ['/og-[page-name].png']
  }
}
```

### Title Examples:
- "Kitchen Tools Under ₹500 - Amazon Finds India"
- "Monsoon Essentials for Indian Homes - Amazon Finds"
- "Bathroom Cleaning Tools - Amazon Finds India"

### Description Examples:
- "Practical kitchen tools under ₹500 that save time. Honest reviews of budget-friendly Amazon products for Indian homes."
- "Stay dry and comfortable this monsoon. Budget-friendly Amazon products that actually help during rainy season."

## Content Calendar Template

### Week 1-2: Launch Phase
- 3 products on homepage
- 8 products on Under ₹499 page
- 6 products on Cleaning Tools page
- Total: ~17 products

### Week 3-4: Growth Phase
- Add 5 new products to existing pages
- Create 15-20 Pinterest pins
- Join 5 group boards

### Month 2: Expansion
- Add new category page (Kitchen Tools)
- 10 new products
- Seasonal content (if relevant)

### Month 3: Optimization
- Analyze top performers
- Update low-performing products
- Create comparison content

## Pinterest Pin Ideas for Each Product

Create 3-5 variations:

1. **Problem-focused:** "Tired of [problem]?"
2. **Benefit-focused:** "This ₹[X] Tool [benefit]"
3. **List-style:** "X Products Under ₹[X]"
4. **Before/After:** Visual comparison
5. **Price-focused:** "Budget [Category] Under ₹[X]"

## Quick Quality Check

Before publishing any content:

- [ ] No hype words or fake urgency
- [ ] Problem is clearly stated
- [ ] Benefits are specific and honest
- [ ] Price is accurate and in range
- [ ] Affiliate link is correct format
- [ ] Mobile-friendly (test on phone)
- [ ] No spelling/grammar errors
- [ ] Tone is helpful, not salesy

## Example: Good vs. Bad

### ❌ BAD Example:
```
🔥 AMAZING Kitchen Tool! 🔥

This REVOLUTIONARY vegetable chopper will CHANGE YOUR LIFE! 
Don't miss out on this LIMITED TIME deal!

⭐⭐⭐⭐⭐ MUST HAVE!

Only ₹399 (normally ₹1999!!!)

BUY NOW before it's gone!!!
```

### ✅ GOOD Example:
```
Vegetable Chopper with Container
₹399

The problem: Chopping vegetables takes too long every day.

Why this works:
• Chops onions, tomatoes in seconds
• Container catches everything - less mess
• Sharp blades - works on hard veggies too
• Easy to clean and store

Best for: Daily cooking, meal prep, saving time
```

## Conversion Optimization

### CTA Placement:
- One CTA per product ✅
- At the end of product description ✅
- Clear, simple button text ✅
- Opens in new tab ✅

### Button Text Options:
- "Check price on Amazon" ✅ (recommended)
- "View on Amazon" ✅
- "See current price" ✅
- "BUY NOW!!!" ❌
- "Limited offer!" ❌

## Analytics to Track

### Weekly:
- Which pages get most traffic
- Which products get most clicks
- Pinterest pins with most saves
- Bounce rate by page

### Monthly:
- Total visitors
- Amazon click-through rate
- Earnings per product
- Top traffic sources

### Actions Based on Data:
- High traffic, low clicks → Improve CTAs
- High clicks, no earnings → Wrong products
- Low traffic → Better Pinterest strategy
- High bounce rate → Improve content quality

---

**Remember:** Quality over quantity. 10 well-researched products beat 50 random ones.
