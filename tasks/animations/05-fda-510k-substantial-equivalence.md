# Animation 05: FDA 510(k) substantial equivalence

**Placement:** `/fda` page, above the email gate.
**Total length:** 26 seconds.
**Aspect:** 1920 × 1080.
**Audio:** Voiceover + light ambient. One paper-stamp sound at 0:23 for the determination.
**Loop:** No. Play once on scroll-into-view, hold end frame.

## Intent

The FDA 510(k) pathway clears medical devices by showing they are *substantially equivalent* to a legally marketed predicate device. The framework was written for medical devices with static specifications. AI-enabled medical software ships behavior changes between releases.

The viewer should leave understanding that the 510(k) comparison framework, on its own, can not hold an AI device steady. They should also leave understanding that the fix is not to abandon the framework. It is to pin a model version and attach the production performance monitoring evidence that the framework was always supposed to require.

Audience: regulatory affairs leads, quality directors, AI product owners at hospital systems and medical device companies. They know what a predicate device is. Do not over-explain.

## Voiceover (read straight through)

> The 510(k) pathway clears a new device by showing substantial equivalence to one already on the market. Indications match. Technology matches. Performance matches. Safety matches. The framework was written for devices with fixed specifications. AI-enabled software has weights that change between releases. Substantial equivalence becomes ambiguous. Caventia pins the device to a specific model version, attaches the production performance evidence and stabilizes the comparison.

## Shot list

**Shot 1 (0:00 to 0:04). The predicate device.**

A card slides in from the left. Title: `Predicate device`. Subtitle in mono: `K183285 · cleared 2019`. Beneath, four fields:

```
Indication:      adult chest radiography, triage
Technology:      convolutional neural network
Performance:     AUC 0.88, sensitivity 0.91
Safety profile:  no SCDs reported, 18 months
```

The card is set in body. Hairline border. Parchment background.

VO: "The 510(k) pathway clears a new device by showing substantial equivalence..."

**Shot 2 (0:04 to 0:08). The new device.**

A second card slides in from the right. Title: `New device`. Subtitle in mono: `2026 · AI-assisted chest radiography`. Same four fields:

```
Indication:      adult chest radiography, triage
Technology:      transformer + CNN ensemble
Performance:     AUC 0.92, sensitivity 0.94
Safety profile:  pending, 8 months pilot
```

The two cards now sit on either side of the frame.

VO: "...to one already on the market."

**Shot 3 (0:08 to 0:13). The comparison matrix.**

Between the two cards, a comparison matrix materializes. Each row corresponds to one of the four fields. Each row has a small evaluation:

```
Indication:      ✓ equivalent
Technology:      ≈ comparable, neural-network class
Performance:     ✓ non-inferior
Safety profile:  ⊙ pending real-world monitoring
```

The matrix is set in mono for the labels, Newsreader for the evaluations. Three rows tick green-equivalent (rendered as ink check marks, not green). The fourth row is rendered with a small open circle, indicating pending.

VO: "Indications match. Technology matches. Performance matches. Safety matches."

**Shot 4 (0:13 to 0:18). The crack appears.**

A new row appears at the bottom of the matrix, in Pompeii red:

```
Model state:     ⚠ weights updated quarterly
```

The "performance" row's check mark begins to flicker. The performance numbers themselves animate slightly: AUC 0.92 becomes 0.93 becomes 0.91 becomes 0.94. The matrix can no longer hold the comparison still.

A speech bubble appears beside the new device card, in body italic: *"Equivalent to which version?"*

VO: "The framework was written for devices with fixed specifications. AI-enabled software has weights that change between releases. Substantial equivalence becomes ambiguous."

**Shot 5 (0:18 to 0:22). Caventia stabilizes.**

A module slides in below the matrix, rendered with the Pompeii red shaft accent of the brand sigil. Title: `Caventia 510(k) module`.

The module performs three actions in sequence, each rendered as a small badge attaching to the new device card:

1. A version pin lands: `model_version: v3.2.1 @ 2026-04-12`. The performance numbers stop flickering and lock at AUC 0.92.
2. A real-world performance attachment lands: `RWE attached: 12 months, 18 sites, drift monitoring`. The fourth matrix row's open circle resolves to a check mark.
3. A change-control commitment lands: `version updates trigger re-submission`. The Pompeii red warning row at the bottom converts to deep ink and reads `version-pinned, monitored`.

VO: "Caventia pins the device to a specific model version, attaches the production performance evidence and stabilizes the comparison."

**Shot 6 (0:22 to 0:25). The determination.**

The matrix is now stable. All four rows show check marks. The bottom row reads `version-pinned, monitored`.

A determination stamp falls onto the new device card: `Substantially Equivalent`. Pompeii red border, deep ink type. Soft paper-stamp sound.

**Shot 7 (0:25 to 0:26). End frame.**

The two cards and the stable matrix sit centered. Below, in mono uppercase tracked 0.18em:

`One version pinned. One comparison held still.`

To the right, the Caventia sigil.

Hold on this frame.

## Poster frame

Render shot 7 as the poster JPG.

## Accessibility text

Caption beneath the video:

> The FDA 510(k) substantial-equivalence framework compares a new medical device to a cleared predicate device across indication, technology, performance and safety. AI-enabled devices break the comparison because their model weights change between releases. Caventia pins a specific model version, attaches real-world performance evidence and triggers re-submission on version updates, which stabilizes the comparison.

## Note on production

This animation has more on-screen text than the others by design. The audience is regulatory affairs and they read carefully. Do not race the matrix. Each evaluation symbol should hold long enough to be read. If the animation feels slow at 26 seconds, it is correct.

The performance-number flickering in Shot 4 should be subtle, three or four changes over five seconds. It should feel like quiet drift, not stop-motion chaos.
