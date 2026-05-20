# Caventia.com

The marketing site and design-partner pipeline for Caventia - the vertical AI governance platform banks adopt for the generative and agentic AI agents the 2026 Interagency Model Risk Management Guidance leaves to them. FDA 510(k)-ready governance for health systems.

Built with Next.js 16 (App Router), TypeScript, Tailwind v4 and `next/font`. Reads its design system from `CAVENTIA_DESIGN_SYSTEM.md` and its content/architecture from `CAVENTIA_PRODUCT_PLAN.md`.

## Getting started

```bash
npm install
cp .env.local.example .env.local   # then fill in values
npm run dev                        # http://localhost:3000
```

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Next.js dev server |
| `npm run build` | Production build (typechecks + statically renders pages) |
| `npm run start` | Serve the production build |
| `npm run lint` | ESLint |

## Environment variables

See `.env.local.example` - all values are optional. The site works in pure stub mode (no email, no analytics, no Calendly) when none are set; submissions are logged to the server console instead of sent.

| Var | Purpose |
| --- | --- |
| `RESEND_API_KEY` | Live transactional email (whitepaper + contact). Without it, submissions just log. |
| `RESEND_FROM_EMAIL` | The `From:` address used by Resend. |
| `CONTACT_FORWARD_EMAIL` | Where form submissions get forwarded (defaults to `ashish@caventia.com`). |
| `NEXT_PUBLIC_CALENDLY_URL` | Calendly link surfaced after whitepaper download and on the final CTA. |
| `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` | Plausible Analytics domain. Without it, the analytics script is omitted entirely. |
| `NEXT_PUBLIC_SITE_URL` | Site origin used in metadata + sitemap. Defaults to `https://caventia.com`. |

## Layout

```
app/                    # App Router pages + API routes + sitemap/robots
  api/{contact,whitepaper,og}/route.ts
  legal/{privacy,terms}/page.tsx
  {about,contact,platform,research,sr117}/page.tsx
  layout.tsx page.tsx sitemap.ts robots.ts globals.css
components/             # React components
  ui/                   # Button, Field, Card, SectionLabel, PullStat, Wordmark
  Nav.tsx Footer.tsx
  Hero.tsx ProblemSection.tsx SpineDiagram.tsx FounderBlock.tsx FinalCta.tsx
  WhitepaperGate.tsx ContactForm.tsx
lib/
  email.ts              # Resend wrapper + business-email validation
  site.ts               # constants
public/                 # static assets - drop founder.jpg here when ready
tasks/                  # build plan (todo.md), local artifacts
CAVENTIA_PRODUCT_PLAN.md
CAVENTIA_DESIGN_SYSTEM.md
caventia-homepage.html  # canonical homepage prototype (kept for reference)
```

## Pre-launch checklist

Asset / integration items the founder must wire up before going live:

- [ ] `public/founder.jpg` - 600x600 minimum professional headshot. Replaces the gradient placeholder in `components/FounderBlock.tsx` and `app/about/page.tsx`.
- [ ] `public/whitepaper-sr117.pdf` - the "AI Agent Governance After SR 11-7" whitepaper (v2; rewritten after the April 17 2026 MRM Rewrite, which rescinded SR 11-7 and excluded gen and agentic AI from the replacement). `/sr117` currently runs in coming-soon mode; flip the `comingSoon` flag in `app/api/whitepaper/route.ts` PAPERS entry once the PDF is ready and set `pdfPath` accordingly.
- [ ] `RESEND_API_KEY` + verified sender domain.
- [ ] `NEXT_PUBLIC_CALENDLY_URL` + surface it inside the whitepaper success state and the final CTA.
- [ ] `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` (or leave blank to skip analytics).
- [ ] OG image: drop `Fraunces` + `Newsreader` `.ttf` files into `public/fonts/` and wire them into `app/api/og/route.tsx` so social shares render in brand type.
- [ ] Counsel review of `app/legal/privacy/page.tsx` and `app/legal/terms/page.tsx`.

## Quality bar

Per `CAVENTIA_DESIGN_SYSTEM.md` section 11, before launch the site should pass:

1. **The CMRO test** - show home to anyone with banking/compliance background; they should say "this is for me" within 30 seconds.
2. **The 90-second test** - landing to whitepaper/contact in 90 seconds or less.
3. **The "looks like AI" test** - no purple gradients, no glassmorphism, no bento grids.
4. **The print test** - print the home to PDF; it should look like a serious document.
5. **The mobile test** - iPhone SE viewport; everything readable, forms usable.
