# Caventia lessons

Working file for patterns and rules I want to keep across sessions on this project. Update when something corrects me or when a non-obvious approach pays off. Read at the start of every Caventia session.

---

## L01. Positioning anchored on a specific named regulation is a single point of failure

**Incident:** On 2026-04-17 the Federal Reserve, OCC and FDIC jointly rescinded SR 11-7 (and OCC 2011-12, FIL-22-2017, FIL-27-2021) and replaced them with a non-prescriptive principles-based guidance. Caventia's site copy, blog, whitepaper, animation scripts, design system and product plan all leaned on "SR 11-7 examiner-ready" as the lead keyword. 39 files needed touching for the reframe.

**Lesson:** When writing copy for a regulated-vertical product, always pair the named-regulation language with the underlying principle, so the messaging survives a rescission, sunset or rewrite. Lead with the principle and cite the regulation in support, not the other way around.

**How to apply:**
- ✅ "the principles examiners still expect" + "(SR 11-7, OCC 2011-12, the 2026 MRM Guidance)" as the supporting citation
- ❌ "SR 11-7 examiner-ready" used as the load-bearing brand promise
- When a new regulation lands or an old one is rescinded, the search for affected files should be: `grep -rn -iE "<old-cite>|<old-cite-alt-spelling>"` across `app/`, `components/`, `lib/`, `content/`, `tasks/`, `*.md`, `*.html`, plus the strategy docs.
- The April 2026 rewrite turned out to be a net tailwind for Caventia (footnote 3 explicitly excluded gen AI and agentic AI from the new guidance) - but only because the underlying principles map cleanly onto AI agents. Position around principles first; news cycles will then work in your favor instead of against you.

---

## L02. Keep URL slugs stable across reframes, even when the names change

**Incident:** During the 2026 MRM Rewrite reframe, the `/sr117` route was reframed from "SR 11-7 Compliance for AI Agents" to "AI Agent Governance After SR 11-7." The slug was kept the same so any inbound business-card prints, existing backlinks, conference-handout links and email forwards continue to resolve.

**Lesson:** When a page's content gets fully rewritten but the topical territory survives, keep the slug and rewrite the page rather than minting a new URL and redirecting. URL stability is part of the brand.

**How to apply:**
- Repurpose first, redirect second, retire third.
- When in doubt, keep the slug and update the H1 + metadata + canonical.
- For the `paperId` constant in `app/api/whitepaper/route.ts`, keep the same id (`sr117`) so the email-capture pipeline and any analytics-event mapping survive the content rewrite. Update the title and behavior inside the entry.

---

## L03. The prototype HTML is canonical; the design system doc is descriptive

**Incident (pre-existing):** When `caventia-homepage.html` and `CAVENTIA_DESIGN_SYSTEM.md` disagree on visuals or copy, the prototype wins. The prototype is art-directed and represents the founder's actual taste; the design system doc is a written description that can lag.

**Lesson:** During any visual or copy reframe, update the prototype first or in parallel with the React components. Then update the design system doc to match. Never let the design system doc go stale while the prototype evolves.

**How to apply:**
- Any time React components change copy that's also in the prototype, edit the prototype in the same session.
- This pairs with [[mrm-2026-rewrite]] - the post-rewrite copy bank was applied to both `components/` and `caventia-homepage.html` in Phase 2 of the reframe.

---

## L04. Memory governs whether to ask permission mid-execution

**Incident:** During the post-MRM-rewrite reframe, the user (2026-05-20) instructed: "dont ask for any permissions, I wil review final product only" - for a multi-file refactor with an approved plan. Pausing mid-execution to confirm copy choices broke flow.

**Lesson:** For Caventia-style multi-file refactors with a stamped plan, execute end-to-end. Mark tasks in_progress / completed via TaskUpdate as work proceeds (so progress is visible) but don't ask. Only break the flow if (a) an unrecoverable error blocks progress, (b) a discovery genuinely invalidates the plan or (c) an action falls outside the approved scope.

**How to apply:**
- Captured in [[autonomous-execution]] memory.
- The exception that survives this rule: new MDX blog posts still require separate-agent validation per [[blog-pipeline]], because that's a content-quality rule, not a workflow rule.
