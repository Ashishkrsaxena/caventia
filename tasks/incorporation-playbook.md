# Caventia Inc. - Delaware C-Corp Incorporation Playbook

> Working document. Not legal advice. Get counsel review before executing any of this for keeps.

This is the end-to-end flow for incorporating Caventia as a Delaware C-Corp from your current "in formation" state. It assumes:

- Sole founder (you, Ashish K. Saxena)
- Operating from Redmond, WA
- Pursuing EB-1A immigrant visa
- Year 1 ARR target $2-5M with a Series A planned for end of year
- Auditor Bridge will eventually be a separately-incorporated subsidiary (Caventia Audit Services LLC) per product plan section 15

If any of those assumptions change, parts of this playbook change. The biggest variable is sole-founder vs co-founder, which affects equity allocation and vesting design.

---

## Phase 0: Pre-decisions (settle these before you start)

You need answers to these seven questions before any filing happens. Most have a default that works for 90% of single-founder startups; defaults are flagged.

### 0.1 Co-founder question

Are you definitely the sole founder? Or is there a chance a co-founder joins in the next six months?

- **Sole founder (default for Caventia):** You hold 100% of founder stock. Simpler in every way.
- **Co-founder possible:** Reserve room. Either issue smaller initial founder allocation and grant the rest later. Or set up a clear protocol for the co-founder grant. The latter is more common but creates timing complexity.

Recommendation: file as sole founder. If a co-founder shows up in month 1-6 they get a normal new-hire grant from the option pool. Cleaner than retroactively splitting founder stock.

### 0.2 Authorized share count

Standard for a VC-track startup: **10,000,000 authorized shares of common stock, par value $0.00001**.

- 8,000,000 issued to you as founder stock
- 2,000,000 reserved as the option pool (un-issued, ready to grant later)

The low par value matters. It minimizes Delaware franchise tax exposure under the assumed-par-value method. Don't use $0.01 par or $1 par; the math punishes you.

### 0.3 Founder vesting

Standard: **4 years with a 1-year cliff**.

- Cliff: first 25% (2,000,000 shares) vests on the one-year anniversary of the grant date
- Linear monthly vesting after that: 1/48 per month for the remaining 36 months

Why vest your own founder stock even though you're sole founder:
1. Protects you in a future dispute (you actually walked away after 6 months and now there's an investor demanding you return the unvested portion)
2. VCs in the Series A round will require vesting; cleaner if it's already in place
3. Acceleration on Change of Control (single-trigger or double-trigger) is standard

Decision: 4yr / 1yr cliff with single-trigger acceleration on Change of Control. Defensible default.

### 0.4 Initial capital

You buy your founder stock for fair market value at issuance. With 8M shares at $0.00001 par = $80 in total. You write a check (or transfer) to the company for $80. Document the stock purchase.

This sounds silly. It is. But it's load-bearing for the 83(b) election working correctly.

### 0.5 Registered agent

Delaware requires a registered agent with a physical Delaware street address. If you go Stripe Atlas, they bundle it. If DIY, pick one:

- **Northwest Registered Agent** - $125/yr - clean UX, no upsells
- **Harvard Business Services** - $50/yr - cheapest, no frills
- **Cogency Global** - $200/yr - lawyer-tier reliability
- **Stripe Atlas (bundled)** - free for year 1, $100/yr after

Recommendation: Atlas bundle for year 1. Switch to Northwest in year 2 if you want to consolidate vendors.

### 0.6 Caventia Audit Services LLC

Per product plan section 15, Auditor Bridge runs as a separate LLC for SR 11-7 independence. **Do NOT file this entity yet.** File it only when Auditor Bridge enters the pilot stage (Year 1 Q3 per the plan). Premature filing creates ongoing annual obligations with no operational purpose.

### 0.7 EB-1A coordination

Before you incorporate, send a one-paragraph note to your immigration counsel:

> I'm about to incorporate Caventia Inc. as a Delaware C-Corp with me as sole founder, 8M of 10M shares issued to me, 4yr / 1yr cliff vesting. EB-1A petition is in progress. Confirm: (a) this doesn't conflict with the petition timing, (b) my role title for the I-140 evidence package and (c) whether incorporation strengthens the "extraordinary ability" criteria or is timing-neutral.

If they say wait, wait. If they say proceed, proceed. Most likely answer: incorporate, then send them the certificate of incorporation as evidence material.

---

## Phase 1: Pick a route

Three real paths. Stripe Atlas is the recommended default for your situation.

### Route A: Stripe Atlas (recommended)

- **Cost:** $500 one-time, includes year 1 of registered agent
- **Time:** 2 weeks to fully incorporated with EIN and bank account
- **What you get:** Delaware C-Corp filing, EIN, US bank account (Mercury or Atlas-native), registered agent, basic cap table, 83(b) workflow, founder stock issuance with vesting
- **Trade-off:** Atlas has opinionated defaults. If you want custom share class structures, founder agreements with unusual terms or specific board composition rules, Atlas pushes back

Atlas covers ~95% of single-founder VC-track incorporations cleanly. The 5% it doesn't cover are usually multi-founder edge cases or unusual capital structures, neither of which applies to you.

### Route B: Clerky

- **Cost:** $499 incorporation + transactional fees on top
- **Time:** 1-2 weeks
- **What you get:** Lawyer-grade documents, post-incorporation flow that handles option pool grants, vesting schedules, SAFEs, priced rounds, all natively
- **Trade-off:** More UI complexity. You're expected to make more decisions yourself. Designed for founders who plan to raise within 6-12 months

Clerky is the YC and top-accelerator favorite. If you know you're raising soon, Clerky pays off after the first investment closes because the financing flow is faster.

### Route C: Full lawyer

- **Cost:** $3,000-$10,000 first year
- **Time:** 2-6 weeks
- **What you get:** Personalized stock structure, founder vesting agreement, IP assignment, board consents, all customized
- **Trade-off:** Slow. Expensive. Only worth it if you have complexity (multi-founder, family trust, foreign nationals, side hustles to clean up).

For Caventia: overkill.

### Recommendation: Stripe Atlas

Reasoning:
1. Fastest path to incorporated state
2. Cheapest with bundled essentials
3. 83(b) workflow is automated (this is where DIY founders most often mess up)
4. Mercury bank account works for B2B SaaS payments and is the default for YC-tier startups
5. You can migrate off Atlas to Clerky later if needed (Atlas exports clean cap table data)

---

## Phase 2: The Stripe Atlas filing flow (step by step)

Sign up at https://stripe.com/atlas.

### Screen 1: Company basics

- **Company name:** Caventia Inc.
- **Entity type:** C Corporation
- **State of incorporation:** Delaware

### Screen 2: Founder information

- **Legal name:** Ashish K. Saxena
- **Title:** Founder, CEO, sole director
- **Country of residence:** United States
- **State of residence:** Washington
- **Address:** Your Redmond address

If Atlas asks about other founders or initial shareholders: none.

### Screen 3: Share structure

- **Authorized shares:** 10,000,000 (Atlas default)
- **Par value:** $0.00001 (Atlas default)
- **Initial founder allocation:** 8,000,000 shares to Ashish K. Saxena
- **Option pool reserved:** 2,000,000 shares
- **Purchase price for founder stock:** $80 (8M shares x $0.00001)

### Screen 4: Vesting

- **Vesting schedule:** 4 years, 1-year cliff
- **Acceleration on Change of Control:** Single trigger (Atlas may default to no acceleration; explicitly turn this on)

### Screen 5: Founder details for tax / banking

You provide:
- SSN (required for IRS EIN)
- Date of birth
- Current home address
- Phone

### Screen 6: Registered agent

Use the Atlas-provided agent for year 1.

### Screen 7: Bank account preference

- **Mercury** (recommended) - free, decent UI, supports ACH and wires
- **Atlas Native** (built on Stripe/Brex partnership) - newer, less mature
- **Open later** - if you want to use Brex or another option

Pick Mercury.

### Screen 8: Review and submit

Atlas walks you through the final review. Pay the $500 fee. Submit.

### What happens next (Atlas-side)

- **Day 0:** Atlas files the Certificate of Incorporation with Delaware
- **Day 2-4:** Delaware accepts, returns the Certificate
- **Day 4-7:** Atlas applies for the EIN with the IRS
- **Day 7-14:** Mercury bank account opens
- **Day 14-21:** 83(b) election filing window begins (you have 30 days from stock issuance)

You receive a packet via Atlas dashboard with all signed documents. Read each one. Save copies offline. The Certificate of Incorporation, the stock purchase agreement, the bylaws and the action of sole incorporator are the documents you'll be asked for repeatedly during your first VC due diligence.

---

## Phase 3: The 83(b) election (critical)

This is the single most important post-incorporation action. Miss the 30-day window and your future tax bill compounds.

### What it does

Without an 83(b) election: every time your founder stock vests (the 25% cliff, then each month for 3 years), you owe ordinary income tax on the appreciated fair market value at vesting. If the company becomes worth $5M by year 2, you owe income tax on 2M shares x your share of $5M. Could be $400K+ in tax with no liquidity to pay it.

With an 83(b) election: you elect to pay tax NOW on the spread between purchase price ($80) and current fair market value ($80, since you just incorporated and FMV equals issuance price). Tax owed: $0. From then on, all appreciation is treated as capital gains, taxed only on sale.

The election is free to make. Missing it is catastrophic.

### How to file

Atlas automates this. Their workflow:
1. Atlas pre-fills the 83(b) form with your stock details
2. You sign electronically
3. Atlas prints the form (you must mail a paper original; the IRS does not accept e-filed 83(b) elections)
4. You mail two copies via USPS Certified Mail with Return Receipt to your IRS Service Center
5. Atlas retains a third copy for the company
6. Your tax preparer needs a fourth copy

You must mail it within **30 days of the stock grant date**. Not 30 days from Atlas signup. 30 days from when the stock was actually issued.

### IRS Service Center

You're in Washington State. Your IRS Service Center for 83(b) is:

```
Department of the Treasury
Internal Revenue Service
Ogden, UT 84201
```

Atlas pre-prints this address. Verify it matches.

### Confirmation

The IRS sends a stamped acknowledgement back. It takes 6-8 weeks. Save the certified mail receipt AND the IRS acknowledgement in a folder labeled "83(b) - critical." Your future investors will ask for both during due diligence.

### Backup

Some lawyers recommend a second mailing 1 week later just in case the first gets lost. Cheap insurance ($8 in postage). Recommended.

---

## Phase 4: Post-incorporation week 1 checklist

Once Atlas confirms incorporation, run through this list:

- [ ] Receive Certificate of Incorporation from Atlas dashboard. Save PDF in `Documents/Caventia/Corporate/`
- [ ] Sign and save: Action of Sole Incorporator (appoints you as sole director)
- [ ] Sign and save: Initial Board Resolutions (appoints you as CEO, approves bylaws, authorizes stock issuance)
- [ ] Sign and save: Stock Purchase Agreement (you buy 8M shares for $80)
- [ ] Sign and save: Founder vesting agreement (4yr / 1yr cliff)
- [ ] Sign and save: Bylaws
- [ ] Sign and save: Confidentiality and Invention Assignment Agreement (CIIA / PIIA) - assigns all your prior and future Caventia-related IP to the company
- [ ] Wire $80 from your personal bank to the Caventia Mercury account once it opens (consideration for founder stock)
- [ ] File 83(b) election within 30 days (see Phase 3)
- [ ] Confirm EIN receipt from IRS (Atlas relays)
- [ ] Mercury bank account opens; verify and link to your personal account for transfers
- [ ] Set up Mercury two-factor auth
- [ ] Create a Carta free-tier account, import the cap table from Atlas
- [ ] Update LinkedIn, your email signature and the Caventia site to read "Caventia Inc., a Delaware corporation"

---

## Phase 5: Operational setup (week 2-4)

These don't have to happen in week 1 but should happen within month 1.

### Washington State foreign qualification

Caventia is now a Delaware corporation operating in Washington. WA requires you to register as a foreign entity.

- File "Application for Certificate of Authority for Foreign Corporation" with WA Secretary of State
- Cost: $200 filing fee
- Annual report: $70/yr
- Atlas does NOT do this automatically; you have to do it yourself or via WA SOS online

Alternative: a service like Stripe Atlas Foreign Qualification or Northwest Registered Agent can do this for ~$100 + the state fee.

You have 30 days from "doing business" in WA to register. Filing within the first month is safe.

### Business insurance

Bind these before your first design partner contract:

- **General liability** - $1M per occurrence / $2M aggregate, ~$400/yr (Hiscox or Next)
- **Errors and Omissions (E&O) / Professional Liability** - $5M starter limit, ~$2,500/yr (Embroker or Vouch)
- **Cyber liability** - $5M starter limit, ~$2,000/yr (Coalition or Vouch)

For your eventual SR 11-7 sales: banks under OCC 2013-29 will require minimum E&O and cyber coverage in the master agreement. $5M is a common floor; $10M is common for any $250K+ contract.

Total year 1 insurance: ~$5,000.

### Bookkeeping

Three real options:

- **Pilot.com** - $250-500/mo, full-service, used by most YC startups. Worth it when you have ARR
- **Bench.co** - $300/mo, simpler
- **QuickBooks Online + you do it yourself** - $30/mo, fine for year 1 pre-revenue

Recommendation: QuickBooks year 1, switch to Pilot when ARR crosses $500K.

### Cap table

- **Carta** free tier covers up to $5M valuation. Migrate from Atlas to Carta when you hit the first priced round or when you have employees with grants
- **AngelList Stack** is the alternative; free up to first round

### Delaware franchise tax

Due **March 1 every year**, starting the year AFTER you incorporate. Atlas will email reminders. Calculate using the **Assumed Par Value Capital Method** (cheaper than the Authorized Shares method for your share structure). Year 1 amount: ~$400-450.

Set a calendar reminder for Feb 1 every year so you have time to pay before the deadline. Missing the deadline triggers a $200 penalty plus 1.5% monthly interest.

### 409A valuation

You need a 409A valuation before you grant any stock options to employees or contractors. Cost: $1,500-3,000 from Carta, Pulley or Eqvista. Validity: 12 months or until material event (financing round, key hire, business pivot).

Defer this until you actually need to grant options. Probably month 6-9.

---

## Phase 6: Code changes that flip on incorporation

Once you have a certificate of incorporation in hand, these touchpoints update in one PR:

| File | Current | New |
|---|---|---|
| `app/legal/privacy/page.tsx` line 17 | `Caventia (in formation as a Delaware C-Corp)` | `Caventia Inc., a Delaware corporation` |
| `app/legal/privacy/page.tsx` Contact section | `Caventia, Delaware, USA` | `Caventia Inc., Delaware, USA` |
| `app/legal/terms/page.tsx` line 25 | `Caventia (in formation as a Delaware C-Corp)` | `Caventia Inc., a Delaware corporation` |
| `components/StructuredData.tsx` JSON-LD | `foundingDate: "2026"` | `foundingDate: "2026-MM-DD"` (actual date) |
| `components/Footer.tsx` copyright | `© 2026 Caventia Inc.` | unchanged (already correct) |
| New file: `lib/entity.ts` | n/a | Centralized constants: legal name, state, incorporation date, registered agent address, EIN (private, env-gated if used) |

I can prep all of those as one PR once you have the date. About 15 minutes of work after you say "filed."

---

## Cost summary

### One-time costs (year 1)

| Item | Cost |
|---|---|
| Stripe Atlas (incorporation, EIN, registered agent year 1, bank, cap table) | $500 |
| WA foreign qualification filing | $200 |
| Sub-total one-time | **$700** |

### Recurring annual costs

| Item | Year 1 | Year 2+ |
|---|---|---|
| Delaware franchise tax | $0 (first year often prorated) | ~$450 |
| Delaware registered agent | $0 (Atlas year 1) | ~$125 |
| WA annual report | $70 | $70 |
| Mercury bank account | $0 | $0 |
| Business insurance (GL + E&O + cyber) | ~$5,000 | $5,000-15,000 (scales with revenue) |
| Bookkeeping (QuickBooks year 1) | $360 | $360 (or Pilot $3-6K) |
| Sub-total recurring | **~$5,430** | **~$6,000-21,000** |

### Year 1 total

Roughly **$6,100** all-in. Sub-1% of a $2-5M ARR target.

---

## Timeline summary

| When | Action |
|---|---|
| Day 0 | Submit Stripe Atlas application |
| Day 2-4 | Delaware accepts; certificate issued |
| Day 4-7 | IRS issues EIN |
| Day 7-14 | Mercury bank account opens |
| Within 30 days of stock issuance | File 83(b) election (CRITICAL) |
| Within 30 days of doing business in WA | File WA foreign qualification |
| Within 90 days | Bind insurance, set up QuickBooks, finalize cap table in Carta |
| Annually by Mar 1 | Pay Delaware franchise tax |
| Annually | Renew WA foreign registration ($70) |

---

## Risks and mitigations

| Risk | Mitigation |
|---|---|
| Missing the 30-day 83(b) window | Mail certified the same week you sign Atlas paperwork. Mail a backup copy 1 week later. Cost: $8 each. |
| Delaware franchise tax surprise (Authorized Shares method default is high for 10M shares; could hit $80K+ if calculated wrong) | Always use the Assumed Par Value Capital Method. Atlas defaults to this. If you ever see a $80K+ franchise tax bill, it's the wrong calculation method. |
| Choosing too high a par value | $0.00001 par is the standard. Anything higher punishes you on franchise tax. |
| Granting yourself stock before incorporating | Don't. Wait for the entity to exist before you "buy" your founder stock. |
| Mixing personal and corporate funds in the first weeks | Open Mercury immediately. Use only the corporate account for any company expense. Personal cards for company expenses = piercing the corporate veil. |
| EB-1A petition disruption | Notify immigration counsel before filing. Forward them the certificate of incorporation once issued. |
| Auditor Bridge entity confusion | Do NOT file Caventia Audit Services LLC at incorporation time. That's a Year 1 Q3 task per product plan section 15. |
| Founder stock IP not assigned to the company | Sign the CIIA / PIIA on day 1. This assigns all prior Caventia-related work to the company. Without it, ownership of your existing prompts, templates, whitepapers is ambiguous and a future investor will flag it. |

---

## EB-1A coordination notes

Per personal statement, you're pursuing EB-1A immigrant visa as an individual of extraordinary ability. Caventia incorporation interacts with the petition in a few specific ways:

1. **Strengthens evidence of founder role.** USCIS adjudicators look for documented founder activity. Certificate of Incorporation + your role as sole director + stock issuance is strong material under the "extraordinary ability" criteria.

2. **Provides equity-based compensation path.** EB-1A doesn't require employment but does benefit from documented ongoing professional activity. Equity grants tied to vesting schedule are evidence.

3. **Timing relative to I-140 / I-485 stages.** If your I-140 is filed but pending, incorporation is generally fine and supplementary. If you're at I-485 adjustment, incorporation timing should be coordinated with counsel.

4. **Travel and signing.** If you have any pending travel restrictions (advance parole), be available physically in the US during the Atlas filing flow because some IRS / Delaware document processing assumes US-resident signing.

5. **Don't add "President" titles unless meaningful.** "CEO, Founder, sole director" is enough. Multiple grand-sounding titles look like padding to adjudicators.

The cleanest sequence: notify counsel, incorporate, send counsel the certificate of incorporation. Counsel updates the I-140 evidence file with the new material.

---

## What I can do right now

I can't file the incorporation for you (it requires your SSN and personal verification). But once you've started Atlas and have a target incorporation date, I can:

1. Pre-write the entire code changeset listed in Phase 6. You commit it the day after Atlas confirms.
2. Pre-write the 83(b) election cover letter and the certified-mail label text.
3. Pre-write the WA foreign qualification application as far as I can without your incorporation date and DE certificate number.
4. Build a `lib/entity.ts` constant module so all entity references update from one place.
5. Update README and any developer-facing docs.

Tell me when you've started Atlas (or another route) and I'll execute on these in parallel.

---

## Sign-off checklist

When you're ready to actually file:

- [ ] I have answers to all seven Phase 0 questions
- [ ] I have notified immigration counsel of the incorporation plan
- [ ] I have decided on Atlas / Clerky / lawyer
- [ ] I have $700 set aside for one-time costs
- [ ] I have $5,000 set aside for year 1 insurance
- [ ] I understand the 83(b) deadline and have a plan to mail it the same week
- [ ] I have a folder structure ready for the corporate documents
- [ ] I will not commingle personal and corporate funds after Mercury opens

Tick all 8 boxes mentally before you click Submit on Atlas.
