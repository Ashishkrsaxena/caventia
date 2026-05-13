# Animation 01: The five places SR 11-7 breaks down

**Placement:** Inline in `/blog/five-places-sr11-7-breaks-down`. One vignette under each numbered section heading.
**Total length:** ~100 seconds across five vignettes (~18 to 22s each).
**Aspect:** 1920 × 1080.
**Audio:** Voiceover + light ambient bed.
**Render as:** Five separate MP4 files. They are watched separately, so each must stand on its own.

## Intent

Each vignette opens with the SR 11-7 expectation as it was written for traditional models. It then shows the AI agent in the same role. It shows the specific place that breakdown happens. It lands on the fix Caventia provides. The viewer leaves understanding both the gap and what closes it.

Visual vocabulary: traditional models are rendered as **schematic diagrams** (boxes, arrows, labels). AI agents are rendered as a **stylized agent silhouette** with a faint shimmer to suggest stochasticity. Caventia mechanisms are rendered with the **Pompeii red accent**, which appears nowhere else.

## Shared open and close

### Open (0:00 to 0:01)

Common to all five. A small Roman numeral fades up center-top: **I.**, **II.**, **III.**, **IV.**, **V.**.

Below it, in mono uppercase tracked 0.18em: **SR 11-7 / breakdown**.

The numeral and label fade and slide off as the vignette begins.

### Close (last 0:02)

The vignette ends with a flat title card.

> **I. Non-determinism.**

> **II. Prompt as feature.**

> **III. Tool use and emergent behavior.**

> **IV. Model provider opacity.**

> **V. Continuous capability evolution.**

Fraunces, 84pt, deep ink. Parchment background. Hairline rule at the bottom. Below the rule, in small mono: **caventia.com**.

---

## Vignette I: Non-determinism (~22s)

### Voiceover (read straight through)

> SR 11-7 expects identical inputs to produce identical decisions. Traditional models honor that. They are deterministic by construction. AI agents are not. The same prompt today and tomorrow can produce different answers, even with temperature pinned to zero. What breaks is reproducibility-based validation. The fix is to validate the behavioral envelope, not the exact output.

### Shot list

**Shot 1 (0:01 to 0:04).** A clean equation appears center: `f(x) = y`. Below it, two example evaluations: same x, same y, both marked with a small check in ink (no green). A label below in mono: `deterministic`.

**Shot 2 (0:04 to 0:08).** The equation transforms. The function symbol `f` reshapes into a stylized agent silhouette. The same `x` is plugged in twice. First evaluation: `y₁`. Second evaluation: `y₂`. The two outputs sit side by side. A faint shimmer animates between them.

**Shot 3 (0:08 to 0:12).** A red-tracked label fades in: `reproducibility-based validation`. A single hairline strikes through it. The strike is the only Pompeii red moment so far in the shot.

**Shot 4 (0:12 to 0:18).** A horizontal band appears, drawn as two parallel hairlines bounded above and below the agent's output region. The band is labeled `behavioral envelope`. Sample outputs (small dots) fall inside the band. One falls outside; it gets flagged with a small ink circle.

**Shot 5 (0:18 to 0:20).** The envelope is replaced with a small artifact card titled `Envelope spec, v1.0`. Beneath it, the line `Validated 2026-04-12`. The card stamps softly.

**Shot 6 (0:20 to 0:22).** Title card: **I. Non-determinism.**

---

## Vignette II: Prompt as feature (~20s)

### Voiceover

> Traditional models had features. Income, utilization, months on book. Each one had a distribution you could monitor. AI agents do not. The system prompt is a feature. The user input is a feature. Both are paragraphs of text. Feature-importance analysis breaks. The fix is to treat the prompt as a versioned component and track outputs against demographics at the population level.

### Shot list

**Shot 1 (0:01 to 0:05).** A feature matrix slides in from the left. Three columns visible: `income`, `utilization`, `months_on_book`. Under each, a small histogram. Each histogram has a clean mean line and standard-deviation markers.

**Shot 2 (0:05 to 0:08).** Cut. A paragraph of text appears centered. It is a system prompt, set in body. First two lines visible: `You are a credit decision assistant. Apply the bank's underwriting standards...` The paragraph is highlighted as a single unit.

**Shot 3 (0:08 to 0:11).** Try to slot the paragraph into the matrix. Visual: the paragraph hovers over an empty column, then bounces back. The matrix briefly fragments at the edges.

**Shot 4 (0:11 to 0:14).** A SHA-style hash appears next to the prompt: `sha256: 4a2c…b9e1`. Mono. The hash anchors the prompt. The prompt is now version-controlled.

**Shot 5 (0:14 to 0:18).** The matrix reforms. The column header changes from individual features to population segments: `applicants_25_34`, `applicants_35_44`, etc. Beneath, decision outcomes are tracked at the population level. A small "disparate impact, p < 0.05" check ticks at the bottom.

**Shot 6 (0:18 to 0:20).** Title card: **II. Prompt as feature.**

---

## Vignette III: Tool use and emergent behavior (~22s)

### Voiceover

> Agents pick their own paths. Same input on Monday, a different tool call on Tuesday. Provider updates can change tool selection. A small rewording of the system prompt can change tool selection. You can not enumerate every execution path in advance. The fix is to capture the actual production trace and make the trace itself the audit artifact.

### Shot list

**Shot 1 (0:01 to 0:04).** A traditional decision tree draws on screen. Three levels deep. Each branch labeled with a feature threshold. The full tree is enumerated, visible, finite.

**Shot 2 (0:04 to 0:08).** Smash cut. The tree is gone. An agent silhouette processes an input. From the agent, lines fan out to three tool icons: `score_credit`, `fetch_history`, `policy_lookup`. The agent picks one. Tool returns a value. Agent picks another. Returns a value. A small trace builds.

**Shot 3 (0:08 to 0:13).** Two traces appear side by side, labeled `Monday` and `Tuesday`. Same input both days. The two traces differ: Monday uses two tool calls; Tuesday uses four, in a different order. A red-tracked annotation: `provider update, 2026-04-21`.

**Shot 4 (0:13 to 0:18).** A recorder element appears below the agent. Every tool call streams into it as a row: timestamp, tool name, arguments, return value. The recorder is labeled `trace`. The trace builds in real time as the agent acts.

**Shot 5 (0:18 to 0:20).** The recorder transforms into a document card titled `Tool-call trace, decision #4729`. Stamps. The trace is now the artifact.

**Shot 6 (0:20 to 0:22).** Title card: **III. Tool use and emergent behavior.**

---

## Vignette IV: Model provider opacity (~18s)

### Voiceover

> When you train your own model, you write the model card. Training data, hyperparameters, validation methodology, all yours. When you use a foundation model behind an API, your view ends at the API boundary. Documentation completeness breaks. The fix is to document your layer and the vendor layer separately and to treat a vendor model version change as a model change.

### Shot list

**Shot 1 (0:01 to 0:04).** Three sources flow into a single document: `training_data`, `hyperparameters`, `validation`. The document assembles cleanly. Title at the top: `Model Card`. Author line: `Internal`.

**Shot 2 (0:04 to 0:08).** Smash cut. The clean assembly is replaced. Instead, a stylized wall stretches across the middle of the frame. On the near side: your prompts, your retrieval architecture, your post-processing. On the far side: a foundation model API endpoint. The wall is solid. The far side is rendered as a silhouette only.

**Shot 3 (0:08 to 0:11).** Two stacked documents appear at the bottom. Left: `Your layer` (detailed: prompts versioned, retrieval architecture diagrammed, post-processing rules listed). Right: `Vendor layer` (sparse: model name, version, provider representations, contractual notes only).

**Shot 4 (0:11 to 0:15).** A version label on the vendor layer changes from `claude-opus-4-7` to `claude-opus-4-8`. The change pulses. A stamp lands on `Your layer`: `re-validation required`. Pompeii red.

**Shot 5 (0:15 to 0:18).** Title card: **IV. Model provider opacity.**

---

## Vignette V: Continuous capability evolution (~22s)

### Voiceover

> Foundation model providers ship updates. Sometimes those updates meaningfully change agent behavior. Validated against which version? This week's? Or the one that ships next Tuesday? Version becomes a first-class governance control. The fix is to pin specific versions, require re-validation before upgrades and negotiate behavior-change notification into the provider contract.

### Shot list

**Shot 1 (0:01 to 0:05).** A horizontal timeline draws across the frame. Markers along it: provider release dates over the last six months. At each marker, a small pill: `v4.5`, `v4.6`, `v4.7`, `v4.8`.

**Shot 2 (0:05 to 0:09).** A fixed test case sits above the timeline. As the timeline ticks past each release, the test result shifts slightly: a sentiment score moves from 0.81 to 0.79 to 0.83 to 0.74. The drift is visible.

**Shot 3 (0:09 to 0:12).** A "validated" stamp floats over the test, dated `2026-01-15`. As the timeline advances past three releases, the stamp begins to fade and tilt. It looks stale.

**Shot 4 (0:12 to 0:15).** A version pin (lock icon) snaps onto the agent. The pinned version is rendered in mono: `claude-opus-4-7@2026-04-12`. The drift stops. The fixed test result stabilizes.

**Shot 5 (0:15 to 0:18).** A new release ticks onto the timeline. A gate fires in front of the agent labeled `re-validation required`. The agent does not auto-upgrade. The gate holds.

**Shot 6 (0:18 to 0:20).** A contract page slides in. One clause highlighted: `provider shall notify customer of any behavior-impacting model update at least 30 days in advance`. Pompeii red underline.

**Shot 7 (0:20 to 0:22).** Title card: **V. Continuous capability evolution.**

---

## Closing card (after vignette V only)

Used only on the standalone end-of-series cut, not on individual vignettes.

> **Five breakdowns. Five fixes.**
> **caventia.com**

Fraunces 84pt for the headline. JetBrains Mono 18pt for the URL. Both deep ink on parchment. Hold for 2 seconds, then fade.
