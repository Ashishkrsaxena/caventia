# Caventia Animation Scripts

Six scripts in this folder. One README (this file), five animation briefs. Each brief is self-contained: voiceover script, shot-by-shot breakdown, timing, on-screen text, end frame. Feed any one directly into the Manim workflow.

## Shared brand constants

These apply to every animation. Override only when the script explicitly says so.

### Color palette

| Token | Hex | Use |
|---|---|---|
| Parchment | `#F5F1E8` | Default background |
| Paper | `#FBF8EE` | Secondary surface (cards, callouts) |
| Deep ink | `#14110D` | Primary foreground (lines, strokes, primary text) |
| Ink soft | `#3D362C` | Body text |
| Muted | `#5C5346` | Captions, labels |
| Muted soft | `#8E8275` | Tertiary text |
| Rule | `#D4CCBA` | Hairline dividers, faint structure |
| Pompeii red | `#8B2C2C` | The single accent. Use sparingly. |
| Terracotta | `#C4948E` | Accent for dark-ink scenes |

Default scene: parchment background, deep ink foreground, Pompeii red used only for the single visual element that matters most in the shot.

### Typography

| Role | Family | Notes |
|---|---|---|
| Display | Fraunces | Variable: opsz 96 to 144, SOFT axis 30 to 100, WONK axis 0 to 1 for italics |
| Body | Newsreader | 400 weight, italic available |
| Mono | JetBrains Mono | For code, hashes, version strings, regulator citations |
| Signature | Caveat | Reserved for founder voice. Do not use in product animations. |

### Tone

Editorial. Restrained. Examiner-friendly. The audience is second-line-of-defense at regulated institutions; they read carefully and trust nothing that feels marketing-y. Skip exclamation points, skip emoji, skip motion that exists only to entertain. Every transition should land somewhere informative.

## Render specs

| Spec | Value |
|---|---|
| Resolution | 1920 × 1080 |
| Aspect | 16:9 |
| Frame rate | 30 fps |
| Codec | H.264, MP4 |
| Audio | AAC, stereo, 192 kbps |
| Container max size | 4 MB per 20-second clip target |

Optional second cut for social: **1080 × 1920** vertical, same content reflowed for LinkedIn and mobile feeds.

## Audio direction

Voiceover: one speaker, calm cadence, no fake urgency. The text in each script is the exact read. Do not improvise.

Ambient bed: optional. If used, keep it under -24 dB and stop it on the closing card. Suggested: light room tone, no music. The brand is a regulator-facing document, not a SaaS demo reel.

Sound design: one or two punctuation sounds only. The audit-log row appearing in script 02 can get a soft stamp. The examiner door opening in script 04 can get an ambient creak. Nothing else.

## File index

| File | Animation | Length | Placement |
|---|---|---|---|
| `01-sr117-five-breakdowns.md` | The five SR 11-7 breakdowns | ~100s across 5 vignettes | Inline in `/blog/five-places-sr11-7-breaks-down` |
| `02-spine-in-motion.md` | One agent action becomes four artifacts | 18s | Home page, below current SpineDiagram |
| `03-three-lines-of-defense.md` | Where AI agents break the three lines | 35s | `/sr117`, above the email gate |
| `04-what-the-examiner-sees.md` | Chat transcript vs Caventia artifact | 14s | `/sr117` or `/platform` |
| `05-fda-510k-substantial-equivalence.md` | Predicate to new device comparison | 26s | `/fda` page |

## Embedding on the site

When rendered MP4s are ready, drop them under `public/animations/`. Embed inline with:

```tsx
<video
  src="/animations/spine-in-motion.mp4"
  poster="/animations/spine-in-motion-poster.jpg"
  autoPlay
  muted
  loop
  playsInline
  preload="metadata"
  aria-label="Caventia spine in motion"
/>
```

For animations longer than 20 seconds (scripts 03 and 05), drop `loop` and use a play-on-scroll trigger. For scripts 02 and 04 under 20 seconds, autoplay+loop is fine.

Always provide an accessible text alternative in the surrounding copy. The animation is supplementary, not load-bearing for the argument.

## Render a poster frame

For each clip, also render a single frame at the most visually complete moment (usually the end frame, sometimes the midpoint reveal). Save as `*-poster.jpg`. This is what shows before the video loads and is also the social share preview.
