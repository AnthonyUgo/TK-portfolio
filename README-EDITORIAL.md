# TK CURATED — VOGUE EDITORIAL TRANSFORMATION
## Implementation Guide

---

## 🎨 DESIGN TRANSFORMATION COMPLETE

The TK Curated portfolio has been transformed into a **VOGUE-style digital magazine experience**. The new design features:

### ✅ Completed Features

#### 1. **Magazine Cover Hero**
- Full-bleed hero background with your provided image
- Editorial masthead ("TK CURATED")
- 5 animated cover lines
- Issue date and number
- Instagram QR code (bottom right) - scans to @trishken_
- Centered TK logo with "Enter Portfolio" CTA
- Subtle film grain and vignette effects

#### 2. **Typography System**
- **Headlines**: Bodoni Moda (Didot-inspired modern didone serif)
- **Body**: Inter (neutral grotesk)
- Ultra-tight tracking on headlines (-0.05em)
- Generous leading on body text (1.65-1.85)
- Editorial sizing with fluid clamp() functions

#### 3. **Color Palette**
- Deep Black: `#0B0B0B`
- Off-White Paper: `#FAF7F2`
- Ink Black: `#131313`
- Accent Gold: `#D9CBA3`
- Hairline rules with transparency

#### 4. **Portfolio Spreads**
- 12 magazine-style spreads with flip-through navigation
- Left/right arrow navigation (← / →)
- Page numbers (01/12, 02/12, etc.)
- Editorial text blocks with:
  - Project title
  - Year
  - Description (40-80 words)
  - Full credits (Photographer, Stylist, MUA, Model, etc.)
- Keyboard navigation support
- Smooth scroll and fade transitions

#### 5. **About Section (Masthead & Interview)**
- Editorial masthead with portrait
- Q&A interview format
- 2 pull-quotes (styled as magazine callouts)
- 1 callout stat ("8+ Years of Creative Excellence")
- Signature mark (TK)
- Issue mark at bottom

#### 6. **Contact Section (Commission Brief)**
- Editorial brief form layout
- Project type dropdown
- Timeline, budget, moodboard fields
- "Agent Block" with email (black background highlight)
- Postal-style address footer
- Privacy policy microcopy

#### 7. **FAQ Section**
- 10 comprehensive Q&As for stylist/creative director
- Drop cap on first letter of each answer
- Thin rule separators
- Accordion functionality
- Link to downloadable booking policy

#### 8. **Micro-Brand Elements**
- Hairline rules throughout
- Page numbers on spreads
- Film grain texture overlay (body::before)
- Masthead positioning
- Editorial typography tokens
- Vignette on hero background

#### 9. **Interactions & Motion**
- Page transitions with vertical drift
- Hover states with growing hairline underlines
- Keyboard navigation (←/→ for spreads, Esc to return home)
- Smooth scroll behavior
- FAQ accordion animations
- Mobile menu with backdrop blur

#### 10. **Accessibility**
- 4.5:1+ color contrast
- Logical heading hierarchy
- Focus-visible states with gold outline
- Screen reader text (.sr-only class)
- Alt text structure ready
- Keyboard navigable

---

## 📁 FILE STRUCTURE

```
TK-portfolio/
├── index-editorial.html        # NEW: VOGUE-style editorial layout
├── editorial.css               # NEW: Complete editorial stylesheet
├── ASSET-MANIFEST.md          # NEW: Asset requirements & specs
├── README-EDITORIAL.md        # THIS FILE
├── public/
│   ├── assets/
│   │   ├── hero.png           # YOUR PROVIDED HERO IMAGE
│   │   ├── ig-qr.svg          # Instagram QR code (created)
│   │   └── about-image-optimized.jpg  # (existing)
│   └── portfolio/             # NEW: Folder for 12 spread images
│       ├── 01-cover.jpg       # (placeholder needed)
│       ├── 02-spread-a.jpg    # (placeholder needed)
│       └── ... (12 total)
```

---

## 🚀 HOW TO LAUNCH THE NEW DESIGN

### Option 1: Replace Existing Index (Recommended)
```bash
# Backup current index
mv index.html index-old.html

# Use new editorial design
mv index-editorial.html index.html

# Update styles.css reference or add editorial.css to head
```

### Option 2: Test Side-by-Side
Keep both files and navigate to:
- Old design: `http://localhost:5173/index.html`
- New design: `http://localhost:5173/index-editorial.html`

---

## 📸 ADDING YOUR IMAGES

### Critical: Hero Background
The hero image path is set to `/assets/hero.png`. Ensure the file at:
```
/Users/MadeMuvs/Documents/GitHub 2/TK-portfolio/public/assets/hero.png
```
...is the correct image from your reference (the one you mentioned in the brief).

### Portfolio Spread Images
Add 12 high-quality images to `/public/portfolio/`:

**Portrait orientation (3:4 aspect ratio):**
- `01-cover.jpg`, `02-spread-a.jpg`, `03-spread-b.jpg`
- `05-spread-d.jpg`, `07-spread-f.jpg`, `08-spread-g.jpg`
- `10-spread-i.jpg`, `12-spread-k.jpg`

**Landscape orientation (4:3 aspect ratio):**
- `04-spread-c.jpg`, `06-spread-e.jpg`
- `09-spread-h.jpg`, `11-spread-j.jpg`

**Temporary Solution:** You can use existing images from `/media/project#/` folders as placeholders until you have the final curated images.

### Logo Files
Create and add:
- `/public/assets/tkc-logo.svg` - Main brand logo (centered on hero)
- `/public/assets/logo.svg` - Small nav logo (already referenced, may exist)

---

## 🎨 CUSTOMIZATION GUIDE

### Update Colors
Edit CSS variables in `editorial.css`:
```css
:root {
  --color-deep-black: #0B0B0B;
  --color-off-white: #FAF7F2;
  --color-ink-black: #131313;
  --color-accent-gold: #D9CBA3;
}
```

### Update Typography
Change fonts in `<head>` of HTML and CSS variables:
```css
--font-serif: 'Bodoni Moda', 'Didot', serif;
--font-sans: 'Inter', sans-serif;
```

### Modify Cover Lines
Edit the `.cover-lines` section in `index-editorial.html`:
```html
<div class="cover-lines">
  <div class="cover-line">Your Custom Line Here</div>
  <!-- Add up to 5 lines -->
</div>
```

### Adjust Portfolio Spreads
Each spread follows this structure:
```html
<article class="spread" data-spread="1">
  <div class="spread-image">
    <img src="/portfolio/01-cover.jpg" alt="Description" />
  </div>
  <div class="spread-content">
    <!-- Edit title, year, description, credits -->
  </div>
</article>
```

### Edit Q&A Content
Update questions and answers in the `.interview-section`:
```html
<div class="qa-pair">
  <div class="question">Your question?</div>
  <div class="answer">Your answer here...</div>
</div>
```

---

## 🔗 SUPABASE INTEGRATION (FUTURE)

The design is **Supabase-ready**. To enable TK's admin panel for content updates:

### Database Schema
Create tables for:
- `portfolio_spreads` (images, titles, descriptions, credits)
- `cover_lines` (editable cover text)
- `faq_items` (questions & answers)
- `about_content` (bio, interview Q&As)

### Admin Dashboard
Build forms in `/admin-dashboard.html` to:
- Upload spread images
- Edit project metadata
- Update cover lines
- Manage FAQ content
- Modify about section

### API Integration
Use Supabase client to fetch data dynamically:
```javascript
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)

// Fetch portfolio spreads
const { data: spreads } = await supabase
  .from('portfolio_spreads')
  .select('*')
  .order('position')
```

---

## 📱 RESPONSIVE BEHAVIOR

The design is fully responsive:
- **Desktop (1024px+)**: Full spread layout, side-by-side content
- **Tablet (768-1024px)**: Stacked spreads, adjusted gutters
- **Mobile (<768px)**: Single column, mobile nav menu, simplified layout

Test thoroughly on:
- iPhone (Safari)
- Android (Chrome)
- iPad (Safari)
- Desktop browsers (Chrome, Firefox, Safari, Edge)

---

## ⚡ PERFORMANCE OPTIMIZATION

### Current Implementation
- Modern CSS with CSS Grid and Flexbox
- Minimal JavaScript (vanilla, no frameworks)
- Lazy loading ready (add `loading="lazy"` to images)
- Web fonts loaded efficiently (preconnect)

### Recommended Optimizations
1. **Compress all images** (use TinyPNG, ImageOptim)
   - Target: Under 500KB per image
   - Hero: Under 800KB
2. **Add lazy loading**: `<img loading="lazy" ... />`
3. **Implement image srcset** for responsive images
4. **Use WebP format** with JPG fallback
5. **Enable Gzip/Brotli** compression on server
6. **Implement service worker** for offline access

---

## 🔍 SEO & METADATA

Add to `<head>`:
```html
<!-- Open Graph -->
<meta property="og:title" content="TK Curated — Issue 2025" />
<meta property="og:description" content="Editorial portfolio of creative director & stylist Trish Kennedy" />
<meta property="og:image" content="https://yourdomain.com/assets/hero.png" />
<meta property="og:url" content="https://yourdomain.com" />

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="TK Curated — Issue 2025" />
<meta name="twitter:description" content="Editorial portfolio..." />
<meta name="twitter:image" content="https://yourdomain.com/assets/hero.png" />

<!-- Schema.org -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Trish Kennedy",
  "jobTitle": "Creative Director & Stylist",
  "url": "https://yourdomain.com"
}
</script>
```

---

## 🧪 TESTING CHECKLIST

- [ ] Hero image displays correctly
- [ ] All fonts load properly (Bodoni Moda, Inter)
- [ ] Navigation menu works (desktop & mobile)
- [ ] Portfolio spread navigation (← / →)
- [ ] Keyboard navigation (ArrowLeft, ArrowRight, Esc)
- [ ] FAQ accordion expand/collapse
- [ ] Form submission (test with Formspree)
- [ ] Instagram QR code scans correctly
- [ ] Mobile menu opens/closes
- [ ] All links work (internal and external)
- [ ] Responsive layout on all devices
- [ ] Accessibility (screen reader, keyboard-only)
- [ ] Loading performance (<3s initial load)

---

## 📝 CONTENT UPDATES NEEDED

Review and customize:
1. **Cover lines** (5 lines on hero)
2. **Portfolio spreads** (12 titles, descriptions, credits)
3. **About interview** (6 Q&A pairs)
4. **FAQ content** (10 questions tailored to your services)
5. **Contact form fields** (adjust as needed)
6. **Footer content** (copyright, issue date)

---

## 🎯 NEXT STEPS

### Immediate (Before Launch)
1. ✅ Review new design in browser
2. ⬜ Add/replace hero.png if different from current
3. ⬜ Add 12 portfolio spread images
4. ⬜ Create TKC logo SVG
5. ⬜ Test on mobile devices

### Short Term (This Week)
1. ⬜ Optimize all images for web
2. ⬜ Write alt text for every image
3. ⬜ Customize content (cover lines, Q&As, etc.)
4. ⬜ Test form submission
5. ⬜ Set up analytics (Google Analytics, Plausible, etc.)

### Medium Term (This Month)
1. ⬜ Plan Supabase database schema
2. ⬜ Build admin dashboard for content management
3. ⬜ Implement dynamic data fetching
4. ⬜ Add authentication for admin access
5. ⬜ Create image upload functionality

### Long Term
1. ⬜ Add more portfolio projects (scalable system)
2. ⬜ Implement blog/news section
3. ⬜ Build press/publications archive
4. ⬜ Add client testimonials section
5. ⬜ Create downloadable booking policy PDF

---

## 🆘 TROUBLESHOOTING

### Images Not Displaying
- Check file paths match exactly (case-sensitive)
- Verify images exist in `/public/assets/` or `/public/portfolio/`
- Check browser console for 404 errors
- Ensure images are web-optimized formats (JPG, PNG, SVG)

### Fonts Not Loading
- Verify Google Fonts link in `<head>`
- Check network tab for font loading errors
- Ensure font names match in CSS

### Spread Navigation Not Working
- Open browser console for JavaScript errors
- Check that spread elements have `data-spread` attributes
- Verify buttons have correct IDs (`prev-spread`, `next-spread`)

### Mobile Menu Not Opening
- Check JavaScript console for errors
- Verify `menu-toggle` and `navbar` IDs exist
- Test in different browsers

---

## 📞 SUPPORT

For questions or issues:
1. Review this README and ASSET-MANIFEST.md
2. Check browser console for errors
3. Verify all file paths are correct
4. Test in incognito/private mode
5. Clear cache and reload

---

## 🌟 DESIGN CREDITS

**Design System**: VOGUE-inspired editorial aesthetic
**Typography**: Bodoni Moda (Didot-inspired) + Inter
**Color Palette**: Monochromatic with gold accent
**Layout**: Magazine spread flip-through experience
**Interaction Design**: Minimal, intentional, editorial

**Built for**: TK Curated
**Creative Director**: Trish Kennedy
**Developer**: Anthony Ugochukwu

---

**Version**: 1.0  
**Date**: November 2025  
**Status**: Ready for Launch 🚀
