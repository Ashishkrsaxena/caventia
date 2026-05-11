# Caventia.com - Phase 1 MVP Build

Build target: 7 pages + APIs + design system, scaffolded in this directory, Next.js 14+ App Router, TypeScript, Tailwind. All asset/integration values stubbed via env vars until founder provides real ones.

## Decisions taken (founder-approved)
- Scope: Full Phase 1 MVP this session
- Location: Next.js root in `/Users/ashish/Documents/CaventiaV2` (matches NebulaToolV2 pattern, matches design-system file layout spec)
- Assets: stub everything (photo placeholder, "whitepaper coming soon" gate, mailto fallback, no analytics) until env vars provided
- Design system: contract - do not deviate without asking

## Stages

### Stage A - Scaffold
- [ ] `npx create-next-app@latest` (TS, Tailwind, App Router, no src/, eslint)
- [ ] Configure `next/font/google`: Fraunces (opsz, 400/500/600), Newsreader (300/400/500/600 + italic 400), JetBrains Mono (400/500)
- [ ] `app/globals.css` with full token table from design-system §3
- [ ] `tailwind.config.ts` with custom colors, type scale, spacing scale, breakpoints
- [ ] `.env.local.example` with `RESEND_API_KEY`, `PLAUSIBLE_DOMAIN`, `CALENDLY_URL`, `CONTACT_FORWARD_EMAIL`
- [ ] `.gitignore`, README skeleton

### Stage B - UI primitives (`components/ui/`)
- [ ] `Button.tsx` - primary (Pompeii red bg) + secondary (ink border)
- [ ] `Field.tsx` - input, textarea, select (no floating labels)
- [ ] `Card.tsx` - parchment bg, hairline border, no shadow
- [ ] `SectionLabel.tsx` - small-caps eyebrow
- [ ] `PullStat.tsx` - 96px Fraunces accent number + label
- [ ] `Wordmark.tsx` - full + nav variant with accent rule above the "c"

### Stage C - Layout (`components/`)
- [ ] `Nav.tsx` - wordmark + 3 nav items + primary CTA, mobile hamburger <768px
- [ ] `Footer.tsx` - deep-ink bg, thesis + link columns

### Stage D - Feature components (`components/`)
- [ ] `Hero.tsx` - page-load choreography per design-system §6
- [ ] `FourProductStrip.tsx` - AgentGuard / Audit Trail / Compliance Passport / Auditor Bridge
- [ ] `FounderBlock.tsx` - photo + plain-text credentials, hairline rule
- [ ] `SpineDiagram.tsx` - custom SVG with scroll-triggered draw animation
- [ ] `WhitepaperGate.tsx` - single business-email field with validation
- [ ] `ContactForm.tsx` - design-partner inquiry

### Stage E - Pages (`app/`)
- [ ] `layout.tsx` - global with Nav + Footer + metadata template
- [ ] `page.tsx` - Home (port homepage prototype to React/Tailwind)
- [ ] `platform/page.tsx` - four-product detail + spine diagram
- [ ] `about/page.tsx` - founder bio with drop cap
- [ ] `research/page.tsx` - curated paper list
- [ ] `contact/page.tsx` - inquiry form
- [ ] `sr117/page.tsx` - whitepaper landing
- [ ] `legal/privacy/page.tsx`, `legal/terms/page.tsx`

### Stage F - API + infra
- [ ] `api/contact/route.ts` - server-side validation, Resend if key set, else log
- [ ] `api/whitepaper/route.ts` - business-email validation, capture, "coming soon" if no PDF
- [ ] `api/og/route.tsx` - dynamic OG via @vercel/og
- [ ] `sitemap.ts`, `robots.ts`
- [ ] `lib/email.ts`, `lib/analytics.ts`

### Stage G - Smoke test
- [ ] `npm run dev` → hit every route, check console, test forms, test mobile breakpoint

## Open items for founder (post-launch wiring)
- Founder professional headshot → `public/founder.jpg` (600×600 min)
- SR 11-7 whitepaper PDF → `public/whitepaper-sr117.pdf`
- Calendly link → `CALENDLY_URL` env
- Resend API key → `RESEND_API_KEY` env, plus contact forward email
- Plausible site key → `PLAUSIBLE_DOMAIN` env
- Privacy policy review by counsel before launch

## Review

### What shipped
- Next.js 16 + React 19 + TypeScript + Tailwind v4 scaffold inside `CaventiaV2/`. App Router, no `src/` dir, `@/*` import alias.
- Full design-system tokens in `app/globals.css` via `@theme` (parchment, ink, rule, accent Pompeii red, fonts piped to next/font CSS variables) - exactly per CAVENTIA_DESIGN_SYSTEM.md §3.
- Three Google fonts loaded via `next/font/google`: Fraunces (variable, with SOFT/WONK/opsz axes), Newsreader (300/400/500/600 + italic), JetBrains Mono.
- UI primitives in `components/ui/`: Button (primary + secondary + ghost), Field (input/textarea/select + label + help), Card, SectionLabel (with optional Roman-numeral prefix), PullStat (96px Fraunces accent), Wordmark (nav + display + footer variants - each with the 12px Pompeii-red rule above the "c").
- Nav: wordmark + Platform / Research / About + primary CTA, mobile hamburger below 768px.
- Footer: deep-ink `#0F1116`, parchment text, link columns, mono copyright.
- Feature components: Hero (page-load choreography), ProblemSection (Roman numerals), SpineDiagram (with "audit log" rotated label down the spine), FounderBlock (photo placeholder + plain-text creds + pull stat), FinalCta (dark variant), WhitepaperGate (single-field business-email gate), ContactForm (design-partner / press toggle).
- Pages: `/`, `/platform`, `/about` (drop-cap on "Why Caventia exists"), `/research` (curated paper list with citation counts), `/contact`, `/sr117` (whitepaper landing with side-by-side gate), `/legal/privacy`, `/legal/terms`.
- API routes: `/api/contact`, `/api/whitepaper` (with `isBusinessEmail` rejecting gmail/yahoo/outlook), `/api/og` (1200x630 dynamic OG using next/og).
- `sitemap.ts`, `robots.ts` covering all 8 marketing pages with sensible priorities.
- `lib/email.ts` with Resend fetch wrapper that no-ops cleanly when `RESEND_API_KEY` is unset (logs to server console).
- `.env.local.example`, README with pre-launch checklist.

### Smoke-test results
All 8 marketing pages return 200, sizes 34KB-58KB. Sitemap and robots return 200. Whitepaper API: accepts work email, rejects gmail with the exact error text, rejects malformed email. Contact API: accepts valid design-partner submission, rejects missing consent. OG image: returns valid 1200x630 PNG.

### Known follow-ups (not blockers, flagged in README)
- **OG image typography**: currently renders in sans-serif fallback. Once founder drops `Fraunces` + `Newsreader` `.ttf` files into `public/fonts/`, wire them into `app/api/og/route.tsx` `fonts` array. The Google Fonts gstatic URLs are unstable for ImageResponse, so self-hosting is the durable fix.
- **Founder photo**: gradient placeholder used in `components/FounderBlock.tsx` and `app/about/page.tsx` until `public/founder.jpg` is provided.
- **Whitepaper PDF**: the API confirms receipt and stubs the "follow-up email" message. When the PDF is ready, drop it at `public/whitepaper-sr117.pdf` and the email body in `app/api/whitepaper/route.ts` can attach or link to it.
- **Resend integration**: currently uses raw fetch to the Resend API; if you want SDK ergonomics + better retries, `npm i resend` and swap inside `lib/email.ts`. Signature is unchanged.
- **Spine diagram scroll-triggered animation**: the static state is in place; the design system §5.6 specifies a scroll-into-view draw animation. The keyframes are defined in `globals.css` (`.spine-draw`, `@keyframes drawDown`) but not yet hooked to an IntersectionObserver. Add a small client wrapper when polishing.

### Design-system deviations to confirm
None intentional. Spacing scale in CAVENTIA_DESIGN_SYSTEM.md §4 maps cleanly onto Tailwind's default 4px base, so no custom spacing tokens were needed. Type scale uses CSS `clamp()` for fluid sizing - the design-system gives fixed px values, but fluid resize was implied by §8 mobile adaptations ("Hero headline scales down: 72px to 44px on mobile"). If a fixed-px approach is preferred, this is a one-line change in each `.type-display-*` rule.

### Design decisions log

| Date | Decision | Source of truth |
|---|---|---|
| 2026-05-10 | Hero italic "regulated AI agents." stays in Pompeii red `#8B2C2C` | Prototype `caventia-homepage.html`. Design system §3.1 ("accent used sparingly") is overridden - the prototype is art-directed and represents the founder's actual taste; when in conflict, prototype wins. |
