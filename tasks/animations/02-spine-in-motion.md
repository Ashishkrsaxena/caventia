# Animation 02 — The spine in motion

**Placement:** Home page, immediately below the existing SpineDiagram component.
**Total length:** 18 seconds.
**Aspect:** 1920 × 1080.
**Audio:** Voiceover, no music. One soft stamp sound when the row drops into the spine.
**Loop:** Yes, with a 1.5 second pause on the end frame before restart.

## Intent

The shipped SpineDiagram says, "these four products exist." This animation says, "watch one prompt become four examiner-ready documents." The viewer should leave understanding that the spine is the unit of work, and the four artifacts are downstream views into the same canonical record.

This is the conversion moment on the home page. It should feel inevitable, not flashy.

## Voiceover (read straight through)

> Every decision your agent makes becomes a row in the spine. From that one row, four artifacts assemble themselves. Examiner-ready. Audit-ready. The next time someone asks how the agent decided, you produce the answer.

## Shot list

**Shot 1 (0:00 to 0:02). The incoming request.**

A clean parchment frame. From the left, a small document slides in. It is a loan application. Visible at the top: `Application #4729 — $42,000 personal loan`. Below: three fields with sample values, all set in body. The document settles in the upper-left quadrant.

VO: "Every decision your agent makes..."

**Shot 2 (0:02 to 0:04). The agent processes.**

Centered slightly right of the document, an agent silhouette materializes. A faint thinking indicator (three small dots) pulses once. A tool-call notation appears briefly above the agent in mono: `→ score_credit(applicant)`. The notation fades.

VO: "...becomes a row in the spine."

**Shot 3 (0:04 to 0:06). The decision renders.**

A small decision card slides out the right side of the agent. Title: `Decision — Approve, 4.9% APR`. Below: a single line `confidence: 0.94`. The card is bordered in ink, hairline. No accent yet.

**Shot 4 (0:06 to 0:08). The row drops into the spine.**

Center frame, a vertical line draws downward: this is the spine. The decision card flies toward the spine, compresses into a single thin row, and inserts itself into the spine at the current timestamp. The row is rendered in Pompeii red for one beat, then settles into ink. Soft stamp sound.

The spine now shows three earlier rows (rendered in muted gray, dated yesterday and earlier) and the new row in ink.

VO: "From that one row..."

**Shot 5 (0:08 to 0:13). The fan-out.**

Four lines draw outward from the new row, one to each corner of the frame. Each line ends at an artifact stack.

- Top-left: a stack labeled `Model card`. Below the label: `inputs · architecture · validation`.
- Top-right: a stack labeled `Validation report`. Below: `envelope · drift · bias`.
- Bottom-left: a stack labeled `NIST AI RMF`. Below: `govern · map · measure · manage`.
- Bottom-right: a stack labeled `Examiner pack`. Below: `cover sheet · trace · attestation`.

Each artifact appears in sequence, 150ms stagger. As each artifact appears, a small regulator label tags it in mono.

- Model card: `SR 11-7 §III`
- Validation report: `SR 11-7 §IV`
- NIST AI RMF: `AI 100-1 Rev 1`
- Examiner pack: `12 CFR Part 30 App. D`

VO: "...four artifacts assemble themselves."

**Shot 6 (0:13 to 0:16). The bundle.**

The four artifact stacks fly toward the center and arrange into a single neat documentation bundle. The bundle is bound with a hairline. Title at the top of the bundle: `Decision #4729 — Documentation pack`. Below: `Generated 2026-05-11 14:22 UTC`.

VO: "Examiner-ready. Audit-ready."

**Shot 7 (0:16 to 0:18). The end frame.**

The bundle settles in the lower center. Above it, a small label in mono uppercase: `One row in the spine. Four artifacts.`

To the right of the bundle, a column sigil (the Caventia mark) at small scale, in deep ink with a Pompeii red shaft.

VO: "The next time someone asks how the agent decided, you produce the answer."

Hold 1.5 seconds. Fade. Loop.

## Poster frame

Render shot 7 (the bundle plus sigil) at frame 540 (around 0:18) as the poster JPG. This is the social share preview.

## Accessibility text

Surrounding copy on the page should already convey the same argument in prose. The video is supplementary. Suggested caption beneath the video:

> One agent decision generates four regulator-ready artifacts: the model card, the validation report, the NIST AI RMF mapping and the examiner pack. All four cite the same row in the audit log.
