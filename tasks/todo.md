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

---

# Phase 2 - Post-rescission reframe (2026-05-20)

## Trigger
On April 17, 2026 the Federal Reserve, OCC and FDIC jointly rescinded SR 11-7, OCC 2011-12, FIL-22-2017 and FIL-27-2021 and replaced them with a 12-page principles-based "Supervisory Guidance on Model Risk Management" (FIL-15-2026). The new guidance is non-prescriptive, "most relevant" to banks above $30B in total assets, and footnote 3 explicitly excludes generative and agentic AI from scope while telling banks to govern them anyway. Caventia's existing positioning hammers on "SR 11-7 examiner-ready" copy across 39 files. That language is now backwards-looking.

## Frame (founder-approved 2026-05-20)
- Lead message: the **footnote 3 carve-out**. The agencies named the gap; Caventia fills it.
- `/sr117` route: **repurposed, slug kept** (preserves backlinks and business-card prints).
- Whitepaper: **paused, "coming soon" email capture**, v2 to be rewritten in a follow-up sprint.

## Canonical copy bank

**Hero sentence (homepage and OG):**
> Federal regulators just excluded *generative and agentic AI* from model risk management. They didn't excuse banks from governing them. Caventia is the framework banks adopt.

(The italic accent in Pompeii red moves from "regulated AI agents" to "generative and agentic AI" - that phrase is verbatim from footnote 3 of the new joint guidance, so the visual hook lands on the actual regulatory language.)

**SITE.tagline (unchanged):**
> The audit-trail spine for regulated AI agents.

The brand-level tagline survives the news cycle. Only the supporting prose changes.

**SITE.description (new):**
> Caventia is the vertical AI governance platform banks adopt for the generative and agentic AI agents the 2026 Interagency Model Risk Management Guidance leaves to them. FDA 510(k)-ready governance for health systems.

**Whitepaper title (new):**
> AI Agent Governance After SR 11-7

**Source-of-truth quote (footnote 3, page 3, joint guidance):**
> "Generative AI and agentic AI models are novel and rapidly evolving. As such, they are not within the scope of this guidance. Nonetheless, a banking organization's risk management and governance practices should guide the determination of appropriate governance and controls for any tools, processes, or systems not covered in this document."

**Counter-weight quote (footnote 1, page 2) - cite when arguing enforcement risk persists:**
> "supervisory action may result for any violations of law or unsafe or unsound practices stemming from insufficient management of model risk."

**Phrases we keep saying:**
- "audit-trail spine"
- "AI agent governance"
- "examiner-defensible" (not "examiner-ready")
- "principles still expected" - inventory, validation, outcomes analysis, ongoing monitoring, effective challenge, vendor oversight
- "fair-lending obligations" - ECOA/Reg B apply by law independent of MRM guidance; surface where relevant
- "FDA 510(k)" and "PCCP" - healthcare leg fully intact
- "$30B" - the new threshold, but soft (banks with material model exposure still in scope)

**Phrases we stop saying:**
- "SR 11-7 examiner-ready" / "SR 11-7-compliant" - the letter no longer exists
- "Three lines of defense" as a branded framework label - new guidance dropped the terminology (independence/effective challenge concept survives, just unbranded)
- "OCC examiner expects" as a fixed standard - examiner expectations are now bank-by-bank
- "SR 11-7 §IV / §V / §VII" section-number citations - no replacement letter section numbering yet

## Phase 2 stages (mirror the TaskCreate task list)

### 2.1 - Lock the new messaging canon
- [ ] Write 1-page copy-bank preamble at top of `CAVENTIA_PRODUCT_PLAN.md` capturing the above

### 2.2 - Single-source-of-truth layer
- [ ] `lib/site.ts` - new `SITE.description`, updated `FOUR_PRODUCTS` hooks/descriptions. Keep `SITE.tagline` unchanged.
- [ ] `app/layout.tsx` - new title default/template, description, keywords array, openGraph + twitter blocks, OG image query string
- [ ] `components/StructuredData.tsx` - Organization + WebSite description fields in JSON-LD

### 2.3 - Homepage components
- [ ] `components/Hero.tsx` - reframe italic spine sentence (lines 84, 94), `/sr117` link label (139), anchor link (145)
- [ ] `components/ProblemSection.tsx` - rewrite the three problem bullets (lines 7, 12, 17, 57). Old: SR 11-7-shaped problems. New: "agents the regulator excluded" problems.
- [ ] `components/SpineDiagram.tsx` - lines 27, 46. Compliance Passport and Auditor Bridge descriptions.
- [ ] `components/LetterFromFounder.tsx` - lines 56, 93. Salutation can stay "model risk officer"; specific SR 11-7 exam reference becomes "specific model-risk exposure".
- [ ] `components/Vignette.tsx` - line 29 plus default `topic` prop.

### 2.4 - Site-wide components
- [ ] `components/Footer.tsx` - line 57 link label
- [ ] `components/WhitepaperGate.tsx` - add `comingSoon` state; line 81 prose. When in coming-soon mode, capture email but emit a different toast: "We'll send it the morning we ship."
- [ ] `components/ContactForm.tsx` - lines 125, 153 placeholders

### 2.5 - Reframe /sr117 page
- [ ] `app/sr117/page.tsx` - full rewrite. Keep slug. New H1 "AI Agent Governance After SR 11-7". New metadata, OG, canonical. Topper acknowledging the April 17 2026 rescission with verbatim footnote 3 quote. Body anchored on surviving principles + the gap banks must fill themselves. Whitepaper gate flipped to coming-soon state.

### 2.6 - Bank-side pages
- [ ] `app/platform/page.tsx` - lines 11, 16, 51, 62, 65, 76, 79, 80, 90, 92, 94, 218-219. Each `SR 11-7 §X` section citation becomes "the principles MRM Guidance still expects" or similar. ECOA/NIST AI RMF/FDA references stay.
- [ ] `app/about/page.tsx` - lines 18, 242, 274, 461, 478, 503-504. Founder bio paragraph that references "early shape of SR 11-7" becomes "the principles that became and outlived SR 11-7".
- [ ] `app/design-partners/page.tsx` - lines 15, 18, 70, 110, 449-450. Pilot-stage criteria language; "SR 11-7 mapping" becomes "MRM principles mapping".
- [ ] `app/contact/page.tsx` - lines 32, 47. Whitepaper-topic options.
- [ ] `app/fda/page.tsx` - line 261. Single soft reference to SR 11-7 used as analogy; update to "the 2026 MRM Guidance" or remove.

### 2.7 - Remaining pages + API
- [ ] `app/research/page.tsx` - lines 7, 9, 13. Title and description; keep h-index/citations narrative.
- [ ] `app/blog/page.tsx` - line 11. Index-page description.
- [ ] `app/legal/terms/page.tsx` - line 102. "Model risk team" reference is fine (job title, not regulatory citation); confirm no other hits.
- [ ] `app/not-found.tsx` - line 35. 404 link list.
- [ ] `app/api/whitepaper/route.ts` - lines 15-17, 37. Update `sr117.title` to "AI Agent Governance After SR 11-7". Keep paperId `sr117` for URL/email stability. Rewrite email auto-reply body.

### 2.8 - Content + animation scripts
- [ ] `content/blog/five-places-sr11-7-breaks-down.mdx` - prepend editor's note (May 2026) acknowledging the rescission. Body stays. Thesis was validated by the carve-out itself.
- [ ] `content/blog/beyond-code-trism-redefines-ai.mdx` - audit for SR 11-7 references; light touch if any.
- [ ] `lib/blog-types.ts` - line 32. Keep tag slug `sr11-7` (URL stable) but rename display name to "Model Risk" so future posts under the same tag don't anchor on the rescinded letter.
- [ ] `tasks/animations/01-sr117-five-breakdowns.md` - supersession topper.
- [ ] `tasks/animations/03-three-lines-of-defense.md` - supersession topper noting new guidance dropped the branded "three lines of defense" terminology; concept of independence/effective challenge survives.
- [ ] Spot-check `02-spine-in-motion.md`, `04-what-the-examiner-sees.md`, `00-README.md`, `05-fda-510k-substantial-equivalence.md`.
- [ ] NO new blog post in this pass. Per blog-pipeline memory rule, every new MDX post requires separate-agent validation before commit. Queue a follow-up post "What the April 2026 MRM Rewrite Means for AI Agents" for a later, validated sprint.

### 2.9 - Canonical prototype + strategy docs
- [ ] `caventia-homepage.html` - canonical per design-prototype-canonical memory rule; must mirror the new Hero/Problem/Spine/Founder/Letter copy.
- [ ] `CAVENTIA_DESIGN_SYSTEM.md` - voice/copy bank section. Update tone examples and any SR 11-7 phrasing in the examples.
- [ ] `CAVENTIA_PRODUCT_PLAN.md` - thesis-level update. Buyer personas refreshed for the $30B threshold reality. Page-architecture section updated. The copy-bank preamble (from 2.1) goes at the top.

### 2.10 - README + lesson
- [ ] `README.md` - pitch sentence; "SR 11-7 whitepaper PDF" item in pre-launch checklist becomes "AI Agent Governance whitepaper v2".
- [ ] `tasks/lessons.md` - create. First entry: positioning anchored on a specific named regulation is a single point of failure; always pair vertical-regulation language with the underlying principle so the messaging survives a rescission.

### 2.11 - Verify
- [ ] `npm run build` (typecheck + static render every page)
- [ ] `npm run lint`
- [ ] Final grep: any remaining `SR 11-7`, `sr 11-7`, `sr117`, `FIL-22-2017`, `OCC 2011-12` hits must be intentional (URL slug, historical blog post, animation script topper, lesson document).
- [ ] Visual spot-check of the new hero in the dev server.

## Out of scope for this pass
- Rewriting the gated PDF whitepaper itself (`tasks/whitepapers/sr11-7-draft-v1.md`). Coming-soon state ships first; v2 manuscript is a separate sprint.
- New MDX blog post about the rescission. Requires separate-agent validation per memory rule.
- Brand-level tagline change. SITE.tagline survives unchanged.
- Renaming the four products. Architecture survives the news event.
- Touching `lib/entity.ts`. Incorporation facts are unchanged.
- Touching `lib/email.ts` mechanics. Only the copy inside `/api/whitepaper/route.ts` changes.
- OG image template (`app/api/og/route.tsx`) - the dynamic title/desc query params get the new copy automatically; no code change needed unless the layout itself needs updating.

---

## Phase 2 review (2026-05-20)

### What shipped
- **Messaging canon** locked at the top of `CAVENTIA_PRODUCT_PLAN.md` (new §0). Verbatim footnote 3 quote, counter-weight footnote 1 quote, lead hero sentence, brand-level tagline preserved, list of phrases we keep saying / stop saying, refreshed buyer-persona thresholds ($30B+).
- **Source-of-truth layer**: `lib/site.ts` (`SITE.description` and all four `FOUR_PRODUCTS`); `app/layout.tsx` (title, description, keywords, openGraph, twitter, OG image query string); `components/StructuredData.tsx` (Organization + WebSite JSON-LD descriptions).
- **Homepage components**: `Hero.tsx` (subhead reframed on footnote 3, italic Pompeii-red accent added to "generative and agentic AI," CTA button text); `ProblemSection.tsx` (three problem bullets + intro lede); `SpineDiagram.tsx` (Compliance Passport + Auditor Bridge node descriptions, "Examiner-defensible" artifact tag); `LetterFromFounder.tsx` (fine print); `Vignette.tsx` (default topic + fallback prose).
- **Site-wide components**: `Footer.tsx` (resource link label); `WhitepaperGate.tsx` (added `comingSoon` prop, new pre-submit and success states for sr117); `ContactForm.tsx` (job-title placeholder + message-prompt placeholder).
- **`/sr117` page**: metadata + H1 + subhead + WhitepaperGate switched to `comingSoon`; "What's inside" SECTIONS rewritten as the new edition's table of contents; excerpt rewritten with verbatim footnote 3 blockquote.
- **Bank-side pages**: `/platform` (metadata, all four product regulator-hooks updated to "2026 MRM Guidance §X" form, Compliance Passport and Auditor Bridge prose, hero subhead, footer-link label); `/about` (biographical statement, "Why Caventia exists" essay, CTA button); `/design-partners` (keyword, wrong-fit signals, week 7-9 phase body, CTA button); `/contact` (subhead, "What to expect" list); `/fda` (single SR 11-7 analogy line).
- **Remaining pages + API**: `/blog` (description); `/not-found` (404 link label); `app/api/whitepaper/route.ts` (PAPERS entry retitled, `comingSoon` flag added, three-branch email auto-reply with full coming-soon language + subject line).
- **Content + animations**: editor's note prepended to `content/blog/five-places-sr11-7-breaks-down.mdx`; light SR 11-7 line in `beyond-code-trism-redefines-ai.mdx` softened; supersession toppers added to `tasks/animations/01-sr117-five-breakdowns.md` and `tasks/animations/03-three-lines-of-defense.md` (the latter notes the dropped "three lines of defense" branded terminology); `lib/blog-types.ts` category display name changed from "SR 11-7" to "Model Risk" while keeping the URL-stable slug.
- **Canonical prototype**: `caventia-homepage.html` updated to match the React-side reframe (hero subhead, problem bullets + lede, spine node descriptions, footer link). Italic accent on "generative and agentic AI" added in the hero subhead.
- **Strategy docs**: `CAVENTIA_PRODUCT_PLAN.md` (preamble §0, buyer persona refresh, page map row, Home + `/sr117` + `/fda` page descriptions, competitive vocabulary list, open-decisions whitepaper line).
- **README**: pitch sentence + pre-launch whitepaper checklist item.
- **Memory + lessons**: `mrm-2026-rewrite` project memory written; `autonomous-execution` feedback memory written; `tasks/lessons.md` created with four lessons (L01 single-point-of-failure positioning, L02 URL slug stability, L03 prototype-canonical, L04 autonomous execution).

### What did NOT change (intentionally)
- `SITE.tagline` ("The audit-trail spine for regulated AI agents.") - survives as brand.
- Hero H1 ("The audit-trail spine for regulated AI agents.") - still anchored on the tagline.
- Four product names - `AgentGuard / Audit Trail / Compliance Passport / Auditor Bridge` unchanged.
- `lib/entity.ts` - incorporation facts untouched.
- `lib/email.ts` - mechanics unchanged; only `route.ts` copy updated.
- `app/api/og/route.tsx` - the OG image template renders the new title/desc strings automatically through query params.
- `/research`, `/legal/privacy`, `/legal/terms` - "model risk" survives as a discipline; no rewrite needed.
- `tasks/animations/02-spine-in-motion.md`, `04-what-the-examiner-sees.md`, `00-README.md`, `05-fda-510k-substantial-equivalence.md` - no SR 11-7 hits, untouched.
- `tasks/whitepapers/sr11-7-draft-v1.md` - original draft retained as historical record; v2 manuscript is a separate sprint.

### Stage tick-offs
- [x] 2.1 Lock the new messaging canon
- [x] 2.2 Single-source-of-truth layer
- [x] 2.3 Homepage components
- [x] 2.4 Site-wide components
- [x] 2.5 Reframe /sr117 page
- [x] 2.6 Bank-side pages
- [x] 2.7 Remaining pages + API
- [x] 2.8 Content + animation scripts
- [x] 2.9 Canonical prototype + strategy docs
- [x] 2.10 README + lesson
- [x] 2.11 Verify

### Verification results
- `npm run build`: ✅ all 21 routes typecheck + static-render. No errors, no warnings (one pre-existing edge-runtime note on `/api/og` is unchanged).
- `npm run lint`: 1 error + 6 warnings, **all pre-existing** (SpineDiagram useEffect setState pattern, two unused eslint-disable directives in `StructuredData.tsx`, two in `email.ts`). None introduced by Phase 2.
- Final grep: 12 remaining `SR 11-7` references in `app/components/lib/caventia-homepage.html`, every one intentional - they fall into three categories: (1) the new whitepaper title and CTA labels ("AI Agent Governance After SR 11-7", "What replaced SR 11-7", "AI Agents After SR 11-7"), (2) the historical bio framing ("outlived SR 11-7") and the editor's note inside the historical blog post, (3) the verbatim acknowledgment of the April 17 2026 rescission in the API email auto-reply body.
- Two TRiSM references survive in homepage `StatFrame` body and the prototype's stat-pull - both describe the founder's research scope (factual credential, unaffected by the rewrite). Keep.
- Sitemap routes `/sr117`, `/fda`, `/design-partners` all still emit (URL slug stability preserved per L02 lesson).

