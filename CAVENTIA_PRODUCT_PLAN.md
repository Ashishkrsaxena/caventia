# Caventia.com — The Vertical AI Governance Platform

## One-Liner
**"The audit-trail spine for regulated AI agents."**
Caventia.com is the marketing site and design-partner pipeline for Caventia, a vertical TRiSM platform that ships SR 11-7 model risk artifacts for banks and FDA 510(k)-ready governance artifacts for health systems. The site converts a tightly-defined buyer (Chief Model Risk Officers at $10B+ AUM banks; Chief Medical Information Officers at $1B+ health systems) into design-partner conversations.

---

## 1. Why This Exists (and What It Has to Accomplish)

Caventia is pre-revenue, pre-product, founder-led. The website's job is **not** to sell a product. There is no product to sell yet. The website's job is to:

1. Establish credibility with a Chief Model Risk Officer in 90 seconds
2. Convert that credibility into a design-partner discovery call
3. Provide a downloadable SR 11-7 whitepaper as the soft-conversion offer
4. Make the founder's authority (books, IJSR reviewer status, Amazon FinTech track record, IEEE awards) immediately visible
5. Differentiate from horizontal competitors (Credo AI, Fiddler, Arthur, Robust Intelligence) by leading with vertical regulatory depth

### What This Site Is NOT
- Not a product login page
- Not a free-trial signup
- Not a self-serve buying motion
- Not a generic "AI safety" pitch
- Not a feature comparison chart against horizontal competitors (premature)

### What This Site IS
- A credibility document, executable in browser
- A whitepaper distribution mechanism
- A discovery-call funnel
- The brand stake in the ground for an unborn category

### The Buyer's First-Visit Mental Model
A Chief Model Risk Officer arrives via:
- LinkedIn outreach with a link
- Conference handout / business card
- IJSR or IEEE colleague forward
- An SR 11-7 whitepaper download link
- A direct founder email from Ashish

In 90 seconds the visitor must conclude:
1. "This is for me" (vertical fit: banking / model risk / SR 11-7)
2. "These people know what they're talking about" (founder credentials visible immediately)
3. "I should take a 30-minute call" (clear CTA, low commitment)

If the site fails any of those three, the buyer closes the tab. There is no second chance.

---

## 2. The Buyer Personas (Who We're Designing For)

### Primary: Chief Model Risk Officer (FinTech)
- Title variants: Head of Model Risk Management, Chief Risk Officer, Director of Model Validation
- Institution: US bank $10B–$500B AUM, OR Series B+ fintech with lending/fraud product
- Reads: American Banker, Risk.net, Federal Reserve guidance, SR 11-7 examiner notes
- Pain: Manual SR 11-7 documentation, AI agents proliferating across business units, examiners asking new questions about AI, no playbook
- Trigger phrases that resonate: "SR 11-7," "model validation," "examiner exam," "third-party model risk," "OCC bulletin," "fair lending," "ECOA," "model inventory"
- Hostile to: generic AI hype, "AI for everyone" positioning, demo videos, gamified UX
- Friendly to: PDFs with citations, peer-reviewed papers, regulatory whitepapers, plain-spoken founders with bank experience

### Secondary: Chief Medical Information Officer (Healthcare)
- Title variants: Chief Clinical Informatics Officer, Head of Clinical AI, VP Digital Health Innovation
- Institution: $1B+ revenue health system OR Series B+ digital health with diagnostic/triage product
- Reads: NEJM AI, FDA guidance, JAMA, Health Affairs, ONC blog
- Pain: FDA PCCP confusion, HIPAA exposure on AI training data, clinical bias scrutiny, board nervous about AI rollout
- Trigger phrases: "510(k)," "PCCP," "HIPAA BAA," "clinical decision support," "ONC algorithm transparency," "FDA Q-Sub"
- Same hostility to AI hype; same friendliness to substantive papers and credentialed founders

### Tertiary: VC / Strategic Buyer (later)
- Title: Partner at fintech-focused VC, corp dev at ServiceNow/Datadog/Snowflake
- Will visit during diligence in Year 2+
- Needs to see: TAM, regulatory framing, founder background, design partner traction, defensibility narrative
- This audience is secondary now; design for primary buyer first

---

## 3. Site Architecture (Pages, Stories, Goals)

### Page Map

| Route | Purpose | Primary CTA |
|---|---|---|
| `/` | Home — credibility + thesis + CTA | Book discovery call |
| `/sr117` | SR 11-7 whitepaper landing | Download (email gated) |
| `/fda` | FDA 510(k) / PCCP positioning page | Download (email gated) |
| `/platform` | The four-product architecture | Book discovery call |
| `/about` | Founder bio + authority signals | LinkedIn / email |
| `/research` | Published papers, books, IJSR | External links |
| `/contact` | Design-partner inquiry form | Submit form |
| `/legal/privacy` | Privacy policy (required for forms) | — |
| `/legal/terms` | Terms (legal cover) | — |

### Story Each Page Tells

**Home (`/`)**
- Hero: "The audit-trail spine for regulated AI agents." Single sentence. Single button: "Talk to the founder."
- Below hero: 3-line problem statement — banks deploying AI agents face a compliance gauntlet they're not ready for; horizontal AI tools don't ship the SR 11-7 artifact regulators expect; we built the vertical platform that does.
- Four-product strip: AgentGuard / Audit Trail / Compliance Passport / Auditor Bridge — each with a one-line description and the regulator hook it satisfies.
- Founder credibility block: photo, name, 3 lines of credentials (Amazon FinTech / two books / IJSR reviewer / 42 papers / IEEE awards).
- Social proof preview: design-partner logos (anonymized "leading US regional bank" placeholder until logos confirmed).
- Final CTA: "We're taking 10 design partners in 2026. Talk to us."

**SR 11-7 Whitepaper Landing (`/sr117`)**
- Hero: "SR 11-7 Compliance for AI Agents: A Practical Framework."
- Subhead: Free 24-page whitepaper. Email required. Written by Ashish K. Saxena.
- Body: 5-paragraph excerpt teasing the framework
- Email gate: single field, submit → confirmation page with PDF link
- Secondary CTA on confirmation: "Want to discuss your specific exam? 30-min call."

**FDA Page (`/fda`)**
- Same template as SR 11-7 page, but for healthcare buyers
- Whitepaper: "FDA Q-Sub Strategy for AI Agent Governance Platforms"
- Email gate identical
- This page may not ship in MVP; deploy in Month 6 when Healthcare SKU enters planning

**Platform (`/platform`)**
- Four-product architecture explained in depth
- The "spine" diagram (visual: audit log as the central data structure feeding the other three products)
- Each product gets its own section with: what it does, what regulator hook it satisfies, what artifact it ships
- Pricing band per product (not exact pricing — bands like "$150K–$500K platform")
- CTA: "Walk through this with the founder."

**About (`/about`)**
- Full founder bio: Ashish K. Saxena
- Career arc: Amazon FinTech → AI ethics author → IJSR reviewer → Caventia founder
- Books: "Society and the Machine," "The Ethics of Artificial Intelligence"
- Awards: Best Technical Researcher of AI 2024, London Book Festival 2024, Marquis Who's Who
- IEEE TEMSCON and ISTAS presence
- Photo (professional headshot)
- Why Caventia exists in founder's words (3 paragraphs)

**Research (`/research`)**
- Curated list of Ashish's most relevant papers, with citation counts where possible
- "Machine Learning and Big Data Analytics for Fraud Detection in the U.S. FinTech Industry" (37 citations) — featured
- "LSTM Neural Network Approach to Resource Allocation in Hospital Management Systems" — featured
- "Beyond Code: How TRiSM Redefines AI's Promise" (Medium article) — featured
- Each entry: title, publication, year, citation count, link

**Contact (`/contact`)**
- Two paths: (1) design-partner inquiry, (2) press / general
- Design-partner form: Name, Title, Institution, AUM tier (drop-down), specific regulator pain (textarea), preferred call time
- Press form: simpler — name, outlet, deadline, topic
- Submission triggers: email to founder, optional Calendly link in confirmation

---

## 4. Conversion Strategy

### The Funnel

```
Outreach (LinkedIn / conference / referral)
         ↓
    Caventia.com (90-second credibility check)
         ↓
    SR 11-7 Whitepaper download (email captured)
         ↓
    Founder email follow-up (24h after download)
         ↓
    30-minute discovery call (Calendly)
         ↓
    Design-partner agreement ($50K/yr × 12 months)
```

### Email Capture Mechanics
- Whitepaper download is the **only** email gate. No newsletter signups, no "stay updated" forms.
- Form: single field (work email). NOT first name + last name + company + role — that's friction.
- Validation: business email only (reject gmail.com, yahoo.com, outlook.com). Show error: "Please use your work email."
- On submit: send the PDF as an email attachment AND show a download link on the confirmation page (avoid trapping the lead in inbox limbo).
- Confirmation page CTA: Calendly link to founder's 30-min discovery slot.

### Trust Signals to Surface Above the Fold
- Founder name + photo on the home page (not hidden in /about)
- Specific credentials in plain text: "37 citations," "Amazon FinTech alum," "IJSR reviewer," "two books on AI ethics"
- NOT "industry-leading," "best-in-class," "trusted by hundreds of banks" (we don't have hundreds of banks yet; lying erodes trust faster than silence)

### What to NOT Do
- No chatbots. CMROs do not chat.
- No "Get a Demo" pop-ups. Wait until they're ready.
- No animated counters ("47 banks served"). We don't have 47 banks.
- No cookie banners that block content. Use a minimal footer-band cookie notice.
- No video backgrounds. They're slow and they read as theater.
- No testimonial carousels with stock photos. Either real names + faces, or nothing.

---

## 5. Authority Signals (How to Show, Not Tell)

The founder's credibility IS the product right now. Visual design must amplify it without crossing into self-celebration.

### Home Page Authority Block
A specific block, ~200px tall, positioned mid-page:

```
Founded by Ashish K. Saxena
─────────────────────────────────────
Amazon FinTech alum · 42 peer-reviewed papers
Author, "The Ethics of Artificial Intelligence" (2024)
IJSR reviewer · IEEE TEMSCON & ISTAS contributor
Best Technical Researcher of AI 2024
```

Plain text, hairline rules, founder photo on the right. No badges, no logos cluttering. Restraint = gravitas.

### Research Page
A list, not a brag wall. Each paper:

```
Machine Learning and Big Data Analytics for Fraud Detection in the U.S. FinTech Industry
International Journal of Scientific Research, 2023 · 37 citations
[Read the paper →]
```

Citation counts are objective signals. Use them. If counts are below 5, omit the count and just show the paper.

### Founder Photo
- Professional headshot, NOT a stock photo
- Neutral background
- Eye contact with camera, slight smile, professional attire
- If no current professional headshot exists, this is a blocker — invest $300–500 to get one shot. Do not launch without it.

---

## 6. Competitive Positioning (How to Differentiate Without Naming Names)

The site should NOT include a comparison table. Comparison tables read as defensive and they elevate competitors who don't deserve elevation.

Instead, the positioning is implicit through:

1. **Vocabulary**: Use "SR 11-7," "510(k)," "Q-Sub," "PCCP," "model validation," "OCC examiner" — vocabulary horizontal competitors avoid because they don't know it.
2. **Specificity**: Every claim ties to a specific regulator framework, not "AI governance" abstractions.
3. **Founder credentials**: Vertical depth showing through citations, books, papers.
4. **The four-product diagram**: A complete bundle. Horizontal competitors solve one of four stages each.

The buyer figures out the comparison themselves. They prefer it that way.

---

## 7. Tech Stack

### Framework
- **Next.js 14+ (App Router)** — SSG for marketing pages, ISR for blog posts
- **TypeScript** — required, no excuses
- **Tailwind CSS** — for styling
- Deploy on **Vercel** (matches Anthropic/Stripe-tier expectations)

### Why Not Just HTML/CSS
The site is small enough that static HTML would work. Use Next.js anyway because:
- Easy to add the `/platform`, `/sr117`, `/fda` pages as MDX with author-driven content
- Form handling via Next.js API routes
- ISR for the future blog without a CMS yet
- Investors (during diligence) will check the tech stack and Next.js + Vercel signals competence

### Forms
- Server-side validation on `/api/contact` and `/api/whitepaper`
- Submissions write to **Resend** (transactional email) + a Notion database OR Supabase table
- For MVP: just email forward to founder. No CRM integration yet.

### Analytics
- **Plausible** or **Vercel Analytics** — privacy-respecting, no cookie banner needed
- NOT Google Analytics (GA4 cookie banner kills trust + adds friction)
- Track: page views, whitepaper downloads, contact form submits, demo bookings

### SEO
- Static OG images per page (generated via `@vercel/og`)
- Schema.org Organization markup
- Sitemap.xml + robots.txt
- Each page has a unique <title> and <meta description>

### What's NOT in the Stack
- No CMS (Sanity, Contentful) — overkill for ~10 pages
- No analytics platform with cookies (PostHog/Mixpanel) — premature
- No chatbot, no live chat
- No A/B testing platform — not enough traffic to be statistically meaningful

---

## 8. URL Structure & Navigation

### Main Navigation (Top)
```
caventia               [Platform]  [Research]  [About]      [Talk to us →]
```

5 items max in nav. The wordmark on the left, three category pages in middle, single primary CTA on the right.

### Footer Navigation
```
─────────────────────────────────────────────────────────────────────
caventia                                       Talk to us →

The audit-trail spine                          Platform
for regulated AI agents.                       Research
                                               About
                                               Whitepapers

© 2026 Caventia Inc.                           Privacy · Terms
─────────────────────────────────────────────────────────────────────
```

### Defensive Subdomain & Path Holds
- `www.caventia.com` → redirects to `caventia.com`
- `caventia.ai` → redirects to `caventia.com` (defensive)
- `app.caventia.com` → reserved for future product login (don't ship yet)
- `docs.caventia.com` → reserved for future
- `blog.caventia.com` → just use `/blog` for MVP, not subdomain

---

## 9. MVP Scope (What to Build First)

### Phase 1: Launch Site (Week 1–2)
Goal: ship a credibility document with whitepaper gate. Built by Claude Code.

**Required pages:**
- [ ] `/` — Home with hero, four-product strip, founder block, CTA
- [ ] `/sr117` — Whitepaper landing with email gate
- [ ] `/platform` — Four-product detail page with the spine diagram
- [ ] `/about` — Founder bio with photo
- [ ] `/research` — Curated paper list
- [ ] `/contact` — Design-partner inquiry form
- [ ] `/legal/privacy` and `/legal/terms` — minimal but real

**Required components:**
- [ ] Top navigation with mobile responsive menu
- [ ] Footer
- [ ] Spine diagram (custom SVG, NOT a stock illustration)
- [ ] Email gate form for whitepaper
- [ ] Design-partner inquiry form
- [ ] Founder photo + bio block
- [ ] Authority/credentials block

**Required infrastructure:**
- [ ] Next.js + TypeScript + Tailwind setup
- [ ] Deploy to Vercel
- [ ] Custom domain `caventia.com` configured with SSL
- [ ] Email forwarding via Resend (or Vercel-Resend integration)
- [ ] Plausible Analytics installed
- [ ] OG images for each page
- [ ] Mobile responsive (all breakpoints, including small tablet)

### Phase 2: Healthcare Expansion (Month 3–4)
- [ ] `/fda` — FDA 510(k)/PCCP whitepaper landing
- [ ] Healthcare SKU added to `/platform` page
- [ ] Secondary persona detection on home page (subtle, e.g., link "Healthcare buyer? Start here")

### Phase 3: Content Engine (Month 6+)
- [ ] `/blog` — MDX-based blog (founder writes, Claude Code does not auto-generate)
- [ ] Newsletter signup (only after blog is live, not before)
- [ ] Whitepaper #2: ECOA Fair Lending for AI Credit Models
- [ ] Whitepaper #3: HIPAA Architecture for Clinical AI Agents

### What NOT to Build in MVP
- Login / app shell — there's no product yet
- Documentation site — premature
- API reference — premature
- Pricing page with exact numbers — premature
- Customer logo carousel — no customers yet
- Comparison table vs. Credo/Fiddler/Arthur — wrong move (see Section 6)

---

## 10. Key Metrics (How to Measure)

### Hard Metrics (Track Weekly)
- Whitepaper downloads (target: 20/month by Month 3)
- Design-partner inquiry form submits (target: 4/month by Month 3)
- Discovery calls booked (target: 2/month by Month 3)
- Discovery → design partner conversion (target: 30%)

### Soft Metrics
- Page views on `/sr117` (the whitepaper page IS the primary conversion surface)
- Bounce rate on home page (should be <50% — if higher, hero isn't landing)
- Time on `/about` (if >90 seconds, founder credibility is working)
- LinkedIn referrers (signal that outreach is driving traffic)

### Vanity Metrics to Ignore
- Total page views (not the goal; targeted CMRO visits matter)
- Social media engagement (no social media strategy yet)
- Newsletter subscriber count (no newsletter yet)

---

## 11. Risks & Mitigations

| Risk | Mitigation |
|---|---|
| Site reads as generic AI startup | Strict commitment to vertical regulatory vocabulary. Lead every section with regulator framework, not AI capability. |
| Founder credentials feel like bragging | Plain-text presentation, hairline rules, restrained typography. Let the citations speak. |
| Whitepaper isn't actually written yet | Ship the site with a "Whitepaper coming Q1" notice if PDF isn't ready. Capture emails anyway. Send the PDF when ready. Do not fake-link to a 404. |
| Buyer arrives via mobile (subway commute, between meetings) | Mobile-first design. Test on iPhone 14 / iPhone SE / mid-Android. Forms must work on mobile. |
| Trademark dispute (Diligent Corp adjacent) | Don't say "trusted," "diligent," "diligence" in nav or hero — keep distance from the adjacent brand. Use "audit," "governance," "compliance," "model risk" instead. |
| GDPR / CCPA exposure on email capture | Plausible Analytics (no cookies). Email forms require explicit consent (checkbox: "I agree to receive a follow-up from Caventia"). Privacy policy real, not template. |
| Site looks too "art history professor" — wrong for bank | Test with 3 friendly CMROs before launch. Adjust accent color from Pompeii red toward more neutral if needed. Modern Institutional aesthetic, not Old World Stuffy. |

---

## 12. Open Decisions (Before Claude Code Starts)

These need founder input before build begins. Claude Code should ask if not provided.

1. **Founder photo**: Is there a professional headshot? If not, schedule a shoot. Block on this.
2. **Whitepaper PDF**: Is the SR 11-7 whitepaper drafted? If not, ship the site with "coming soon" gate; PDF can land in Week 4.
3. **Calendly link**: Set up the founder's discovery call calendar before the form goes live. 30-min slots, 2-3 days/week.
4. **Resend account**: Founder creates Resend account, gets API key, provides to Claude Code via environment variable.
5. **Plausible site key**: Founder creates Plausible account, provides site key.
6. **Logo / wordmark**: Does a designed wordmark exist? If not, Claude Code uses a Fraunces-set wordmark with a small red rule line above the "C" — design system spec provides exact treatment.
7. **Privacy policy text**: Boilerplate vs. counsel-drafted? Recommend counsel review before launch.

---

## 13. Cross-References

- **CAVENTIA_DESIGN_SYSTEM.md** — visual identity, typography, color tokens, component styling
- **caventia-homepage.html** — working visual prototype of the home page
- Original Caventia product plan (from conversation) — full company strategy
- Section 17 of the original plan — Year 1 action items the website supports
