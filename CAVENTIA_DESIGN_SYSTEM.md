# Caventia Design System

> Visual identity, typography, color, and component spec for Claude Code to execute.
> This is the design contract. Do not deviate without founder approval.

---

## 1. Aesthetic Direction

**"Editorial Institutional"** — reads as a serious financial publication or academic journal, executed with modern infrastructure-software precision.

### What this means in practice
- **NOT** dark mode with purple/blue gradients (generic AI startup)
- **NOT** white-and-blue corporate slick (generic SaaS)
- **NOT** cream-and-gold private bank (dated, stuffy)
- **YES** warm off-white paper background with deep ink text
- **YES** characterful serif display paired with precise modern sans
- **YES** restrained Pompeii red accent used sparingly (nods to the Latin etymology of *cavere* without being kitschy)
- **YES** generous whitespace, asymmetric grid, hairline rules
- **YES** small caps with wide letter-spacing for section labels

### Reference points
- Bloomberg.com (the cleaner editorial pages, not the terminal)
- Stripe Press (book pages — editorial gravitas + modern)
- Financial Times subscription page
- Anthropic's homepage (restraint, generous whitespace)
- The New York Times longform features
- NOT: any "AI compliance" competitor (Credo, Fiddler, Arthur, Robust Intelligence) — those are the aesthetic we're differentiating against

---

## 2. Typography

### Fonts (Use Google Fonts — accessible and CDN-cached)

```css
/* Display — characterful classical serif with modern proportions */
font-family: 'Fraunces', 'GT Sectra', 'Tiempos Headline', Georgia, serif;

/* Body — precise modern sans, NOT Inter (overused) */
font-family: 'Newsreader', 'Söhne', 'Inter Tight', system-ui, sans-serif;

/* Monospace — for data, code, IDs, technical labels */
font-family: 'JetBrains Mono', 'IBM Plex Mono', ui-monospace, monospace;
```

Load Fraunces with the SOFT and WONK axes available — gives more typographic character on display sizes.

### Type Scale

```css
/* Display (Fraunces) */
--type-display-xl:  72px / 1.05 / -0.03em   /* Hero headline */
--type-display-lg:  56px / 1.10 / -0.025em  /* Section heroes */
--type-display-md:  40px / 1.15 / -0.02em   /* Page headings */
--type-display-sm:  28px / 1.25 / -0.015em  /* Subheads */

/* Body (Newsreader / Söhne) */
--type-body-lg:     19px / 1.55 / -0.005em  /* Lead paragraphs */
--type-body-md:     16px / 1.65 / 0          /* Body text */
--type-body-sm:     14px / 1.55 / 0          /* Captions, metadata */

/* Labels (Newsreader, small caps + letter-spacing) */
--type-label:       12px / 1.20 / 0.12em    /* Section labels, eyebrows */
--type-label-uppercase: text-transform: uppercase;

/* Monospace */
--type-mono-md:     14px / 1.50 / 0          /* Technical labels, citations */
--type-mono-sm:     12px / 1.50 / 0          /* Footnotes, IDs */
```

### Typographic Rules

1. **Display always Fraunces.** No exceptions. Headline-only.
2. **Body always Newsreader.** No mixing serif body with serif display.
3. **Section eyebrows are small-caps Newsreader** with `letter-spacing: 0.12em`, weight 500.
4. **Numerals in display use lining figures.** In body, use oldstyle figures if the font supports it (Fraunces does).
5. **Drop caps on long-form pages** (`/sr117`, `/about` "Why Caventia exists" section). Three-line drop cap, Fraunces, accent color.
6. **Roman numerals for section dividers** on long pages (I., II., III.) — subtle nod to Latin etymology. Wide letter-spacing.

---

## 3. Color Palette

### Tokens

```css
:root {
  /* Backgrounds */
  --bg-primary:    #F7F4ED;  /* Parchment — main page background */
  --bg-secondary:  #FFFFFF;  /* Paper — cards, elevated surfaces */
  --bg-deep:       #0F1116;  /* Deep ink — footer, contrast sections */
  
  /* Text */
  --ink:           #0F1116;  /* Deep warm black — primary text */
  --ink-mute:      #5C5852;  /* Stone — secondary text */
  --ink-light:     #8E8980;  /* Light stone — captions, metadata */
  --ink-inverse:   #F7F4ED;  /* Parchment text on deep ink */
  
  /* Rules & dividers */
  --rule:          #D4CFC4;  /* Hairline — section dividers */
  --rule-strong:   #A8A296;  /* Stronger rule — emphasized dividers */
  
  /* Accent — Pompeii Red (USE SPARINGLY) */
  --accent:        #8B2C2C;  /* Pompeii red — single brand accent */
  --accent-soft:   #C4948E;  /* Soft terracotta — hover states */
  --accent-bg:     #F2E4E1;  /* Tinted background — alert callouts */
  
  /* Functional */
  --success:       #2E5C3E;  /* Verdigris green — successful submit */
  --warning:       #A87A2F;  /* Bronze amber — warning states */
  --link:          #8B2C2C;  /* Links use accent */
  --link-hover:    #6B2020;  /* Darker on hover */
}
```

### Usage Rules

1. **Pompeii red is precious.** Use only for: the "C" ornament in the wordmark, primary CTA buttons, link underlines, the single statistic emphasized on the home page. Never for body text, never for backgrounds at full saturation.
2. **Default background is parchment, NOT white.** White is for elevated cards and forms only.
3. **Deep ink footer** creates contrast and weight at the page bottom.
4. **No gradients.** This is institutional, not decorative.
5. **No drop shadows on cards.** Use hairline borders instead.
6. **Hairline rules** (`1px solid var(--rule)`) for nearly all separation. NOT boxes, NOT colored backgrounds.

---

## 4. Spacing & Layout

### Grid
- **Max content width**: 1200px
- **Default column**: 720px (reading width for body content)
- **Two-column asymmetric**: 240px (labels) / 720px (content) — used on `/platform`, `/sr117`

### Spacing scale (in px, 8-base)
```css
--space-1:   4px
--space-2:   8px
--space-3:   16px
--space-4:   24px
--space-5:   32px
--space-6:   48px
--space-7:   64px
--space-8:   96px
--space-9:   128px
--space-10:  192px   /* Used for hero vertical padding on large screens */
```

### Vertical Rhythm
- Section padding: `var(--space-9)` top and bottom on desktop, `var(--space-7)` on mobile
- Paragraph spacing: `var(--space-4)` between paragraphs
- Heading margin: top `var(--space-7)`, bottom `var(--space-4)` from prose

---

## 5. Components

### 5.1 Wordmark
The Caventia wordmark is the most important brand asset.

**Spec:**
- Font: Fraunces, weight 500, OPSZ axis at display size (72pt)
- Letterforms: lowercase "caventia"
- Tracking: -0.02em
- Color: `var(--ink)` (deep ink, almost black)
- **Accent ornament**: A single 12px-wide horizontal rule line in `var(--accent)` (Pompeii red), positioned 4px above the "c", aligned to the x-height of the "c"
- Mark: optional small dot/diamond above the "ti" ligature (only on full-size logo, never in nav)

For nav use: Small caps "CAVENTIA" in Newsreader, letter-spacing 0.18em, weight 500, color `var(--ink)`. The small accent rule still appears above the "C."

### 5.2 Primary Button
The single most-clicked element on the site.

```css
.btn-primary {
  background: var(--accent);
  color: var(--bg-primary);
  padding: 14px 28px;
  font-family: var(--font-body);
  font-weight: 500;
  font-size: 15px;
  letter-spacing: 0.01em;
  border: none;
  border-radius: 2px;  /* Sharp corners — institutional, not playful */
  cursor: pointer;
  transition: background 200ms ease;
}
.btn-primary:hover {
  background: var(--link-hover);
}
```

Buttons NEVER have shadows, gradients, or rounded corners larger than 2px. Sharp, restrained.

### 5.3 Secondary Button
For non-primary CTAs (e.g., "Read the paper").

```css
.btn-secondary {
  background: transparent;
  color: var(--ink);
  padding: 14px 28px;
  font-family: var(--font-body);
  font-weight: 500;
  font-size: 15px;
  border: 1px solid var(--ink);
  border-radius: 2px;
  cursor: pointer;
  transition: all 200ms ease;
}
.btn-secondary:hover {
  background: var(--ink);
  color: var(--bg-primary);
}
```

### 5.4 Section Label (Eyebrow)
Used above every section heading.

```html
<span class="section-label">I. Why this exists</span>
```

```css
.section-label {
  font-family: var(--font-body);
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--ink-mute);
}
```

### 5.5 Pull Quote / Featured Statistic
For the rare emphasized number on the home page.

```html
<div class="pull-stat">
  <span class="pull-stat__number">37</span>
  <span class="pull-stat__label">peer-reviewed citations on the founder's fraud-detection paper</span>
</div>
```

```css
.pull-stat__number {
  font-family: var(--font-display);
  font-size: 96px;
  font-weight: 400;
  color: var(--accent);  /* The ONLY use of accent red at this scale */
  line-height: 1;
  letter-spacing: -0.04em;
}
.pull-stat__label {
  font-family: var(--font-body);
  font-size: 15px;
  color: var(--ink-mute);
  max-width: 320px;
  display: block;
  margin-top: var(--space-3);
}
```

### 5.6 Spine Diagram
The signature visual on the home page and `/platform`. Custom SVG, NOT a stock illustration.

**Visual concept**: A horizontal flow showing the four products as a literal spine — a thick vertical line in the center represents the audit log, with the four products as horizontal segments branching off.

```
   AgentGuard  →  ─┬─  ←  Audit Trail
                   │
                   │  (spine — audit log)
                   │
   Compliance ←  ─┴─  →  Auditor Bridge
   Passport
```

Specs:
- 800px wide, 400px tall on desktop; scales down responsively
- Spine: 4px wide vertical line, `var(--ink)` color, with subtle 1px `var(--accent)` overlay
- Product nodes: hairline-bordered rectangles, 180×80px, parchment background
- Connecting lines: 1px `var(--rule)` color
- Labels on each node: Fraunces 18px for product name, Newsreader 12px small-caps for regulator hook

Animation on scroll-into-view: spine draws downward (1.2s ease-out), then nodes fade in one by one (200ms each, staggered). One animation event per page load.

### 5.7 Form Fields
Used in whitepaper email gate and contact form.

```css
.field {
  display: block;
  width: 100%;
  padding: 14px 16px;
  font-family: var(--font-body);
  font-size: 15px;
  color: var(--ink);
  background: var(--bg-secondary);
  border: 1px solid var(--rule-strong);
  border-radius: 2px;
  transition: border-color 150ms ease;
}
.field:focus {
  outline: none;
  border-color: var(--accent);
}
.field-label {
  display: block;
  font-family: var(--font-body);
  font-size: 13px;
  font-weight: 500;
  color: var(--ink);
  margin-bottom: var(--space-2);
}
```

No floating labels. No fancy focus animations. Functional, clear, accessible.

### 5.8 Card (used sparingly)
For the four-product strip on the home page.

```css
.card {
  background: var(--bg-secondary);
  border: 1px solid var(--rule);
  padding: var(--space-5);
  border-radius: 2px;
  /* NO box-shadow */
}
.card__title {
  font-family: var(--font-display);
  font-size: 24px;
  font-weight: 500;
  color: var(--ink);
  margin-bottom: var(--space-2);
}
.card__hook {
  font-family: var(--font-mono);
  font-size: 12px;
  letter-spacing: 0.06em;
  color: var(--accent);
  text-transform: uppercase;
  margin-bottom: var(--space-3);
}
.card__description {
  font-family: var(--font-body);
  font-size: 15px;
  color: var(--ink-mute);
  line-height: 1.55;
}
```

---

## 6. Motion & Interaction

### Principles
1. **One choreographed page-load reveal** — never scattered micro-interactions.
2. **Hover states are subtle** — color shifts, never scaling/transforming.
3. **Scroll-triggered reveals** for hero diagrams ONLY. Body text appears immediately.
4. **No parallax.** It's distracting and 2014.

### Page-Load Choreography (Home Page)
- 0ms: Nav fades in (200ms)
- 100ms: Eyebrow label fades in (200ms)
- 200ms: Hero headline fades in with subtle 8px upward translation (400ms)
- 400ms: Hero subhead fades in (300ms)
- 600ms: Primary CTA button fades in (200ms)
- 800ms: All below-fold content visible (no animation, just present)

### Spine Diagram Animation
- Triggers when 60% in viewport
- 0ms: Spine line draws from top to bottom (1200ms ease-out)
- 1200ms: First product node fades in (200ms)
- 1400ms: Second product node fades in
- 1600ms: Third product node fades in
- 1800ms: Fourth product node fades in
- Total: ~2 seconds, one time per page load

### Reduced Motion
Honor `prefers-reduced-motion: reduce` — disable all motion, show final state immediately.

---

## 7. Imagery Guidelines

### Founder Photo
- Professional headshot, color, neutral background (slate or warm gray)
- 600×600px minimum (1200×1200 ideal for retina)
- Square crop, head and shoulders
- Direct eye contact, slight smile, professional attire (suit or blazer)
- Color-graded to match the parchment palette — slightly warm tones

### Iconography
- **No emoji.** This is institutional, not casual.
- **No icon library** (Heroicons, Phosphor) — too generic.
- For the rare icon needed (download arrow, external link, menu hamburger), use custom 1.5px stroke SVG icons, monochrome, in `var(--ink)`.

### Photography (if any)
- Avoid stock photography entirely. No "diverse team in modern office" shots.
- If imagery beyond the founder photo is needed, prefer abstract architectural photography (Roman columns, classical buildings, library interiors) treated in monochrome with slight warmth.

---

## 8. Mobile Adaptations

### Breakpoints
```css
--bp-sm:  480px   /* Phone portrait */
--bp-md:  768px   /* Tablet portrait */
--bp-lg:  1024px  /* Tablet landscape / small laptop */
--bp-xl:  1280px  /* Desktop */
```

### Mobile-Specific Rules
1. **Hero headline scales down**: 72px → 44px on mobile.
2. **Spine diagram becomes vertical-only** — already vertical, just shrink to 90% viewport width.
3. **Nav collapses to hamburger** below 768px. Hamburger icon in `var(--ink)`, 1.5px stroke.
4. **Forms stay full-width** with adequate touch targets (44px minimum).
5. **CTAs remain prominent** — primary button takes 80% width on mobile, centered.
6. **Two-column asymmetric layouts collapse** to single column with section labels above content (not in left margin).

---

## 9. Accessibility

- **Color contrast**: All text meets WCAG AA. Ink on parchment exceeds 12:1.
- **Keyboard navigation**: All interactive elements tab-accessible. Focus rings visible (`outline: 2px solid var(--accent); outline-offset: 2px`).
- **Screen readers**: Proper semantic HTML. `<nav>`, `<main>`, `<article>`, `<section>` used correctly. Form labels properly associated.
- **Skip-to-content link** at top of page (visible on focus).
- **Alt text on all images**, including the founder photo and spine diagram.
- **`prefers-reduced-motion` honored**.

---

## 10. What to Avoid (Common AI-Generated Aesthetics)

Per the frontend-design skill, explicitly NOT this site:

- ❌ Purple/blue gradient backgrounds
- ❌ Inter or Roboto for everything
- ❌ Glassmorphism / frosted-glass cards
- ❌ Dark mode by default
- ❌ Lottie animations
- ❌ Gradient text effects on every heading
- ❌ Floating blob backgrounds
- ❌ "Hero with screenshot of dashboard" cliché
- ❌ Logo carousels with stock-photo brand marks
- ❌ Animated counters ticking up
- ❌ Bento-grid layouts
- ❌ Generic SaaS three-tier pricing table

What we ARE:
- ✅ Editorial gravitas with modern precision
- ✅ Restrained color, generous space, hairline rules
- ✅ Founder's authority visible immediately
- ✅ Regulator vocabulary throughout
- ✅ A document that feels like it was art-directed, not generated

---

## 11. Quality Bar

Before launch, the site should pass these tests:

1. **The CMRO test**: Show the home page to anyone with banking/compliance background. They should say within 30 seconds: "Oh, this is for me."
2. **The 90-second test**: Time how long it takes to reach the whitepaper download or contact form. Should be ≤ 90 seconds from landing.
3. **The "looks like AI" test**: Show the home page to a designer. They should NOT say "looks AI-generated." If they do, reduce gradient/blob/glow elements further.
4. **The print test**: Print the home page to PDF. Does it look like a serious document? If it looks like a webpage, the editorial register isn't there yet.
5. **The mobile test**: Open on iPhone SE (smallest modern viewport). Everything readable, forms usable, no horizontal scroll.

If any test fails, iterate before launch.

---

## 12. File Deliverables (What Claude Code Should Produce)

```
caventia.com/
├── README.md                  # Setup instructions
├── package.json
├── next.config.js
├── tailwind.config.ts         # Custom tokens from this doc
├── app/
│   ├── layout.tsx             # Global layout with nav + footer
│   ├── page.tsx               # Home (/)
│   ├── platform/page.tsx      # /platform
│   ├── about/page.tsx         # /about
│   ├── research/page.tsx      # /research
│   ├── contact/page.tsx       # /contact
│   ├── sr117/page.tsx         # /sr117 whitepaper landing
│   ├── legal/
│   │   ├── privacy/page.tsx
│   │   └── terms/page.tsx
│   └── api/
│       ├── contact/route.ts
│       └── whitepaper/route.ts
├── components/
│   ├── Nav.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Wordmark.tsx
│   ├── SpineDiagram.tsx       # Custom SVG with animation
│   ├── FourProductStrip.tsx
│   ├── FounderBlock.tsx
│   ├── WhitepaperGate.tsx
│   ├── ContactForm.tsx
│   └── ui/
│       ├── Button.tsx
│       ├── Field.tsx
│       └── Card.tsx
├── lib/
│   ├── email.ts               # Resend integration
│   └── analytics.ts           # Plausible config
├── styles/
│   └── globals.css            # CSS variables from this doc
└── public/
    ├── og/
    │   └── (auto-generated OG images)
    ├── founder.jpg            # Headshot (founder provides)
    └── whitepaper-sr117.pdf   # Whitepaper (founder provides)
```

---

## 13. Final Reminder

**Restraint is the design.** The temptation will be to add more — more color, more animation, more illustration, more "delight." Resist it.

The Chief Model Risk Officer at JPMorgan does not want delight. They want gravitas, specificity, and a clear next step. Every design decision serves those three.

The site should feel like a printed document that happens to live in a browser. That is the goal.
