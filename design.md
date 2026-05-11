# Justitia Legal - Design System

## Brand Identity

### Brand Essence
Professional, trustworthy, experienced, and specialist legal services for insolvency practitioners. The brand conveys authority, compliance, and expertise while maintaining approachability.

---

## Color Palette

### Primary Colors

#### Navy Blue (Primary)
- **HEX:** `#1a2332`
- **RGB:** `rgb(26, 35, 50)`
- **USAGE:** Primary brand color, headers, navigation, footer backgrounds
- **SYMBOLISM:** Trust, professionalism, authority, stability

#### Deep Charcoal
- **HEX:** `#2b2d42`
- **RGB:** `rgb(43, 45, 66)`
- **USAGE:** Secondary backgrounds, cards, alternating sections
- **SYMBOLISM:** Sophistication, seriousness, legal authority

### Accent Colors

#### Gold/Amber (Justice)
- **HEX:** `#d4af37`
- **RGB:** `rgb(212, 175, 55)`
- **USAGE:** CTA buttons, highlights, icons, important numbers/stats
- **SYMBOLISM:** Justice (scales of justice are gold), premium service, excellence

#### Copper Accent
- **HEX:** `#b8860b`
- **RGB:** `rgb(184, 134, 11)`
- **USAGE:** Hover states, secondary accents, decorative elements
- **SYMBOLISM:** Heritage, stability, value

### Neutral Colors

#### Pure White
- **HEX:** `#ffffff`
- **RGB:** `rgb(255, 255, 255)`
- **USAGE:** Background, text on dark backgrounds, cards

#### Light Grey
- **HEX:** `#f5f5f7`
- **RGB:** `rgb(245, 245, 247)`
- **USAGE:** Alternative backgrounds, section dividers

#### Medium Grey
- **HEX:** `#8a8a8f`
- **RGB:** `rgb(138, 138, 143)`
- **USAGE:** Secondary text, captions, metadata

#### Dark Grey (Text)
- **HEX:** `#333333`
- **RGB:** `rgb(51, 51, 51)`
- **USAGE:** Primary body text on light backgrounds

### Semantic Colors

#### Success Green
- **HEX:** `#2ecc71`
- **RGB:** `rgb(46, 204, 113)`
- **USAGE:** Success messages, completed cases, positive metrics

#### Warning Red
- **HEX:** `#e74c3c`
- **RGB:** `rgb(231, 76, 60)`
- **USAGE:** Important notices, urgent information (use sparingly)

#### Info Blue
- **HEX:** `#3498db`
- **RGB:** `rgb(52, 152, 219)`
- **USAGE:** Informational callouts, links, process steps

---

## Typography

### Font Families

#### Primary Font - Headings
**Recommended:** Playfair Display, Georgia, or Merriweather
- **Weight:** 700 (Bold), 600 (SemiBold)
- **USAGE:** H1, H2, large headlines
- **RATIONALE:** Serif fonts convey authority and professionalism in legal contexts

#### Secondary Font - Body
**Recommended:** Inter, Open Sans, or Roboto
- **Weight:** 400 (Regular), 500 (Medium), 600 (SemiBold)
- **USAGE:** Body text, paragraphs, UI elements
- **RATIONALE:** High legibility, modern, professional

### Type Scale

```
H1 (Hero): 48px / 3rem / Bold
H2 (Section): 36px / 2.25rem / SemiBold
H3 (Subsection): 28px / 1.75rem / SemiBold
H4 (Card Title): 22px / 1.375rem / Medium
H5 (Small Heading): 18px / 1.125rem / Medium
Body Large: 18px / 1.125rem / Regular
Body Regular: 16px / 1rem / Regular
Body Small: 14px / 0.875rem / Regular
Caption: 12px / 0.75rem / Regular
```

### Line Heights
- **Headings:** 1.2 - 1.3
- **Body Text:** 1.6 - 1.8
- **Captions:** 1.4

---

## Spacing System

### Base Unit: 8px

```
4px   - 0.25rem - XXS (micro spacing)
8px   - 0.5rem  - XS  (tight spacing)
16px  - 1rem    - SM  (small spacing)
24px  - 1.5rem  - MD  (medium spacing)
32px  - 2rem    - LG  (large spacing)
48px  - 3rem    - XL  (extra large spacing)
64px  - 4rem    - 2XL (section spacing)
96px  - 6rem    - 3XL (major section spacing)
128px - 8rem    - 4XL (hero spacing)
```

---

## Layout Components

### Container Widths
- **Max Width:** 1280px
- **Content Width:** 1140px
- **Narrow Content:** 800px (for reading content)
- **Padding:** 24px (mobile), 48px (desktop)

### Grid System
- **12-column grid** with 24px gutters
- **Responsive breakpoints:**
  - Mobile: 320px - 767px
  - Tablet: 768px - 1023px
  - Desktop: 1024px+
  - Large Desktop: 1440px+

---

## Component Styles

### Buttons

#### Primary Button (CTA)
```css
background: #d4af37 (Gold)
color: #1a2332 (Navy)
padding: 16px 32px
border-radius: 4px
font-weight: 600
font-size: 16px
transition: all 0.3s ease

hover:
  background: #b8860b (Darker gold)
  transform: translateY(-2px)
  box-shadow: 0 4px 12px rgba(212, 175, 55, 0.3)
```

#### Secondary Button
```css
background: transparent
color: #d4af37 (Gold)
border: 2px solid #d4af37
padding: 14px 30px
border-radius: 4px
font-weight: 600
font-size: 16px

hover:
  background: #d4af37
  color: #1a2332
```

### Cards

```css
background: #ffffff
border: 1px solid #e5e5e7
border-radius: 8px
padding: 32px
box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08)

hover:
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12)
  transform: translateY(-4px)
  transition: all 0.3s ease
```

### Process Steps

```css
Step Number Circle:
  background: #d4af37 (Gold)
  color: #1a2332 (Navy)
  width: 80px
  height: 80px
  border-radius: 50%
  font-size: 32px
  font-weight: bold
  box-shadow: 0 4px 12px rgba(212, 175, 55, 0.3)
```

### Stats/Numbers

```css
Number:
  font-size: 48px
  font-weight: 700
  color: #d4af37 (Gold)
  line-height: 1

Label:
  font-size: 16px
  font-weight: 500
  color: #8a8a8f (Medium Grey)
  text-transform: uppercase
  letter-spacing: 1px
```

---

## Visual Elements

### Shadows

```css
/* Subtle shadow for cards */
shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.08);

/* Medium shadow for hover states */
shadow-md: 0 4px 16px rgba(0, 0, 0, 0.12);

/* Large shadow for modals/overlays */
shadow-lg: 0 8px 32px rgba(0, 0, 0, 0.16);

/* Gold glow for accents */
shadow-gold: 0 4px 12px rgba(212, 175, 55, 0.3);
```

### Border Radius
- **Small:** 4px (buttons, inputs)
- **Medium:** 8px (cards, containers)
- **Large:** 16px (large cards, hero sections)
- **Circle:** 50% (avatars, process numbers)

### Borders
- **Default:** 1px solid #e5e5e7
- **Accent:** 2px solid #d4af37
- **Dark:** 1px solid #2b2d42

---

## Navigation

### Header/Navigation Bar
```css
background: #1a2332 (Navy)
height: 80px
position: sticky
box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1)

Logo:
  White version for dark background
  Height: 40px

Nav Links:
  color: #ffffff
  font-size: 16px
  font-weight: 500
  padding: 8px 16px
  
  hover:
    color: #d4af37 (Gold)
    transition: color 0.3s ease

CTA Button:
  background: #d4af37 (Gold)
  color: #1a2332 (Navy)
  padding: 12px 24px
  border-radius: 4px
```

### Footer
```css
background: #1a2332 (Navy)
color: #ffffff
padding: 64px 0 32px

Section Headings:
  color: #d4af37 (Gold)
  font-size: 18px
  font-weight: 600
  margin-bottom: 16px

Links:
  color: #ffffff
  opacity: 0.8
  
  hover:
    color: #d4af37
    opacity: 1

Company Info:
  color: #8a8a8f
  font-size: 14px
  opacity: 0.7
```

---

## Content Sections

### Hero Section
```css
background: linear-gradient(135deg, #1a2332 0%, #2b2d42 100%)
color: #ffffff
padding: 120px 0 80px
text-align: center

Headline:
  font-size: 56px
  font-weight: 700
  color: #ffffff
  margin-bottom: 24px

Subheading:
  font-size: 20px
  color: rgba(255, 255, 255, 0.85)
  max-width: 700px
  margin: 0 auto 40px
```

### Process Section
```css
background: #f5f5f7 (Light grey alternate)
padding: 80px 0

Each Step:
  display: flex
  align-items: start
  gap: 32px
  margin-bottom: 48px
  
  odd steps: flex-direction: row
  even steps: flex-direction: row-reverse
```

### Benefits Grid
```css
display: grid
grid-template-columns: repeat(auto-fit, minmax(300px, 1fr))
gap: 32px
padding: 80px 0

Each Benefit Card:
  background: #ffffff
  border-left: 4px solid #d4af37
  padding: 32px
  border-radius: 8px
```

### Testimonials
```css
background: #ffffff
padding: 80px 0

Testimonial Card:
  background: #f5f5f7
  padding: 40px
  border-radius: 8px
  border-top: 4px solid #d4af37
  
Quote:
  font-size: 18px
  font-style: italic
  color: #333333
  line-height: 1.7
  margin-bottom: 24px

Author:
  font-weight: 600
  color: #1a2332
  font-size: 16px

Location:
  color: #8a8a8f
  font-size: 14px
```

---

## Imagery Style

### Photography
- **Professional business imagery**
- **Muted color tones** (desaturated slightly)
- **High quality, authentic** (not overly stock-photo)
- **Focus on:** Handshakes, documents, professional settings, justice symbols

### Icons
- **Style:** Line icons, minimal, professional
- **Weight:** 2px stroke
- **Color:** Gold (#d4af37) for primary icons
- **Size:** 48px - 64px for feature icons

### Logo Usage
- **White version** on dark backgrounds (navy, charcoal)
- **Dark version** on light backgrounds
- **Minimum size:** 120px width
- **Clear space:** Minimum padding of 24px around logo

---

## Accessibility

### Color Contrast Ratios
- **Body text on white:** #333333 - Ratio 12.6:1 ✓ AAA
- **White on navy:** #ffffff on #1a2332 - Ratio 14.3:1 ✓ AAA
- **Gold on navy:** #d4af37 on #1a2332 - Ratio 7.8:1 ✓ AA

### Focus States
```css
outline: 2px solid #d4af37
outline-offset: 2px
```

### Interactive Elements
- **Minimum touch target:** 44x44px
- **Keyboard navigable:** All interactive elements
- **Alt text:** Required for all images

---

## Animation & Transitions

### Standard Transitions
```css
transition-timing: ease-in-out
transition-duration: 0.3s

Hover effects:
  transform: translateY(-4px)
  transition: all 0.3s ease

Button hover:
  transform: translateY(-2px)
  transition: all 0.3s ease
```

### Scroll Animations
- **Fade in on scroll:** opacity 0 to 1
- **Slide up on scroll:** translateY(20px) to 0
- **Duration:** 0.6s
- **Easing:** ease-out

---

## Design Principles

1. **Professional First:** Every design decision reinforces trust and expertise
2. **Clarity Over Complexity:** Legal services require clear, straightforward communication
3. **Hierarchy Matters:** Guide users through content with strong visual hierarchy
4. **Consistency:** Maintain consistent spacing, typography, and color usage
5. **Accessibility:** Design must be accessible to all users
6. **Responsive:** Mobile-first approach, scales beautifully to all devices

---

## File Assets Required

### Logos
- `justitia-logo-dark.svg` - For light backgrounds
- `justitia-logo-white.svg` - For dark backgrounds
- `justitia-logo-icon.svg` - Standalone icon/favicon

### Images
- Hero background images
- Team/office photos
- Process step illustrations
- Testimonial photos

### Icons
- Services icons (forensic accounting, negotiation, compliance, etc.)
- Benefits icons
- Process step numbers (1-7)
- Social media icons
- Contact icons (phone, email, location)

---

## CSS Variables (for Implementation)

```css
:root {
  /* Colors */
  --color-primary: #1a2332;
  --color-primary-dark: #0f1419;
  --color-secondary: #2b2d42;
  --color-accent: #d4af37;
  --color-accent-dark: #b8860b;
  
  --color-white: #ffffff;
  --color-grey-light: #f5f5f7;
  --color-grey-medium: #8a8a8f;
  --color-grey-dark: #333333;
  
  --color-success: #2ecc71;
  --color-warning: #e74c3c;
  --color-info: #3498db;
  
  /* Typography */
  --font-heading: 'Playfair Display', Georgia, serif;
  --font-body: 'Inter', -apple-system, sans-serif;
  
  /* Spacing */
  --space-xs: 0.5rem;
  --space-sm: 1rem;
  --space-md: 1.5rem;
  --space-lg: 2rem;
  --space-xl: 3rem;
  --space-2xl: 4rem;
  --space-3xl: 6rem;
  
  /* Shadows */
  --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.08);
  --shadow-md: 0 4px 16px rgba(0, 0, 0, 0.12);
  --shadow-lg: 0 8px 32px rgba(0, 0, 0, 0.16);
  --shadow-gold: 0 4px 12px rgba(212, 175, 55, 0.3);
  
  /* Border Radius */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 16px;
  --radius-full: 50%;
  
  /* Transitions */
  --transition-fast: 0.2s ease;
  --transition-base: 0.3s ease;
  --transition-slow: 0.6s ease;
}
```

---

## Notes for Implementation

1. **Maintain the professional legal aesthetic** - this is not a startup or creative agency
2. **Use gold sparingly** - it's an accent color, not a primary color
3. **Dark navy backgrounds** provide excellent contrast for white text and gold accents
4. **Numbered process steps** should use circular badges with gold backgrounds
5. **Stats/numbers** should be prominently displayed in gold
6. **Testimonials** need professional headshots and location attribution
7. **CTAs** should always be gold to stand out
8. **Footer** should be dark (navy) with white text and gold section headings
