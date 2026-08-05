# Gemini image prompt: hero for "The five controls"

Post: `content/blog/five-controls-examiner-can-open.mdx`
Save the result to: `public/blog/five-controls-hero.png`
Target: 16:9, at least 1600x900, ideally 3200x1800

Tell me the filename when it's done and I'll wire it into the post with alt text.

---

## Brand palette (paste these hexes into the prompt, Gemini honors them reasonably well)

| Role | Hex |
| --- | --- |
| Cream ground | `#F5F1E8` |
| Ink | `#14110D` |
| Muted ink | `#5C5346` |
| Pompeii red accent | `#8B2C2C` |
| Rule / hairline | `#D4CCBA` |

The accent is used sparingly. One red element in the whole frame, never two.

---

## PROMPT A - recommended

> Editorial overhead flat-lay photograph, shot straight down on a warm cream paper surface, color `#F5F1E8`. Five distinct paper documents laid out left to right in a precise row, slightly overlapping like a sequence being dealt out. Each document is visually different in structure: the first is a test report covered in a small grid of tick marks, the second is a single sheet with a dense block of monospace characters, the third is a long narrow continuous-feed printout that trails off the right edge of the frame, the fourth is two stapled sheets sitting side by side as a pair, the fifth is a formal certificate with an embossed blind seal in the corner. A single thin thread in deep oxblood red, color `#8B2C2C`, runs across all five documents and continues off the frame. Paper is warm off-white with visible fiber texture and soft natural shadow. Restrained, archival, serious. Muted earth tones only: cream, warm off-white, ink black `#14110D`, warm grey `#5C5346`, one accent of oxblood `#8B2C2C`. Soft diffused daylight from the upper left. No legible text, no readable words, no letterforms that resolve into language. Fine art editorial photography, shallow depth of field, high detail on paper grain.

**Why this one:** the five documents are literally the five artifacts the post says each control must terminate in. The red thread is the audit trail. It reads as an evidence pack without needing a single word.

---

## PROMPT B - alternate, more austere

> Editorial photograph of a single archival file drawer pulled fully open, shot from slightly above at a three-quarter angle. Inside, five hanging file folders in warm cream `#F5F1E8`, evenly spaced, each with a blank tab. One tab, the second from the front, is deep oxblood red `#8B2C2C`. Every other element is cream, warm off-white and aged paper. The drawer front is matte dark ink `#14110D` with a brushed metal pull. Warm diffused light falling from above, soft long shadows inside the drawer. Institutional, quiet, slightly severe. No text, no labels, no readable letterforms. Muted palette, no saturated color anywhere except the single red tab. Large format film photography aesthetic, fine grain.

**Why:** matches the title's "what an examiner can actually open" more literally. Simpler, more likely to come out clean on the first generation.

---

## PROMPT C - abstract fallback if the photographic ones come out fussy

> Minimal abstract editorial composition on a warm cream ground `#F5F1E8`. Five vertical columns of varying height rise from a single horizontal hairline rule in warm grey `#D4CCBA`. Each column is built from stacked thin horizontal bars suggesting layered documents seen edge-on. Four columns are ink black `#14110D` and warm grey `#5C5346`. The third column is deep oxblood red `#8B2C2C`. Generous negative space above the columns. Flat vector illustration, letterpress print aesthetic, subtle paper texture, no gradients, no glow, no shadows. No text, no numbers, no letterforms.

---

## Negative guidance - append to whichever prompt you use

> Avoid: any legible text or words, robots, humanoid figures, glowing blue circuitry, neon, holograms, floating UI panels, brain imagery, gavels, scales of justice, courthouse columns, lock and shield icons, stock-photo businesspeople, lens flare, bokeh light orbs, teal and orange grading, chrome, 3D render sheen, generic AI-generated gloss.

That list is doing real work. Every one of those is where an image model drifts by default on a prompt about AI and regulation, and every one of them would look wrong next to this post.

---

## If you want to try a text-bearing version

Gemini 3 Pro Image handles short text better than earlier models. If you want the title on the image, append this and keep the string short, since long strings are where it garbles:

> Set the words "THE FIVE CONTROLS" in a small classical serif, letterspaced wide, in ink black `#14110D`, positioned in the lower left with generous margin. Nothing else in the frame contains text.

I'd skip it. The site renders the title above the image already, so text in the image duplicates it and gives the model a way to fail.

---

## Checks before you hand it back

- Nothing in the frame reads as a word. Squint at it. Garbled pseudo-text is the most common tell.
- Exactly one red element, not several.
- No blue or teal anywhere.
- Crops acceptably to 1200x630 for the OG card, with the important content near center.
