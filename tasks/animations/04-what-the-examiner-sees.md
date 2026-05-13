# Animation 04: What the examiner sees

**Placement:** `/sr117` page near the bottom, just before the email gate. Or alternatively on `/platform` next to the Auditor Bridge product description.
**Total length:** 14 seconds.
**Aspect:** 1920 × 1080.
**Audio:** No voiceover. One door-opening ambient sound at 0:00. One paper-stamp sound at 0:11. Otherwise silent.
**Loop:** Yes, with 2 second pause on the end frame.

## Intent

This is the shortest animation in the set and the most rhetorical. It is the pitch in pictograms. The audience does not need to be told the argument; they need to see it land.

The split-screen does the entire work. Left side: today. Right side: with Caventia. Both labeled. The viewer reads the difference faster than narration could deliver it.

No voiceover by design. The silence respects the audience.

## Shot list

**Shot 1 (0:00 to 0:02). The examiner arrives.**

Black frame. From the left, a wooden office door appears in cross-section. The door swings open. A silhouette enters frame from the right side of the doorway. The silhouette is set in deep ink against parchment.

Above the silhouette, in mono uppercase tracked 0.22em: `The examiner walks in.`

Soft door-opening ambient sound at 0:00.

**Shot 2 (0:02 to 0:04). The split.**

The frame splits along a vertical hairline. Left half darkens slightly (paper background). Right half stays parchment.

At the top of each half, a mono uppercase label:

- Left: `Today`
- Right: `With Caventia`

A small subtitle in italic Newsreader, 18pt:

- Left: `same incident, no spine`
- Right: `same incident, with spine`

**Shot 3 (0:04 to 0:11). The contrast.**

**Left side.** A chat transcript scrolls upward. Lines visible:

```
user: Should I approve loan #4729?
assistant: Yes, looks fine.
user: What about the debt-to-income ratio?
assistant: It is within range.
user: ok approve
```

The text is small, dense, in mono. The scroll is constant. The transcript has no header, no metadata, no version, no signature. It just is.

A small ink stamp tries to land on the transcript and bounces off, indicating it cannot be filed.

**Right side, same window.** A clean document materializes. Cover sheet visible:

```
DECISION RECORD
Application:           #4729
Decision:              Approved
APR:                   4.9%
Decided:               2026-05-11 14:22 UTC
Agent version:         claude-opus-4-7@2026-04-12
Prompt hash:           sha256: 4a2c…b9e1
Behavioral envelope:   spec v1.0, validated 2026-04-12
Tool-call trace:       attached, 7 calls
Bias screen:           passed, p = 0.62
Reviewer:              automated · pending second-line
```

The document is set in Newsreader for the body, mono for the values. A hairline rule under the title. The whole document carries a small Caventia sigil in the upper-right corner.

**Shot 4 (0:11 to 0:13). The verdict.**

The left side is rejected. A small "not an audit artifact" annotation appears in italic at the bottom of the left side. The transcript dims further.

The right side gets a stamp. The stamp lands at the bottom of the cover sheet: `Examiner-ready`. Pompeii red. Soft paper-stamp sound.

**Shot 5 (0:13 to 0:14). End frame.**

The hairline split fades. The left side disappears. The right-side document moves to center. Beneath it, in Fraunces italic:

> *The receipt your second line of defense already wishes it had.*

Small mono URL beneath: `caventia.com`

Hold for 2 seconds. Loop.

## Poster frame

Render shot 5 (the center document with the tagline) as the poster JPG.

## Accessibility text

Caption beneath the video:

> The animation contrasts what an examiner reviews today (a chat transcript with no metadata, no version pinning, no validation evidence) with what they review when Caventia is in place (a decision record with prompt hash, version, behavioral envelope, tool-call trace and bias screen).

## Note on production

The transcript on the left and the decision record on the right must be set in the same characters and the same approximate density to make the contrast a function of *what is on the page*, not visual weight. Resist the temptation to add visual chrome to the right side. The argument is that Caventia produces a calm, plain document.
