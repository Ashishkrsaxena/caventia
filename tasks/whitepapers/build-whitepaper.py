#!/usr/bin/env python3
"""
Build the Caventia SR 11-7 whitepaper PDF.

Reads tasks/whitepapers/sr11-7-draft-v1.md, splits front matter from body,
converts body markdown to HTML, wraps in brand-styled template, renders to
public/whitepaper-sr117.pdf via Playwright with proper pagination.
"""

import asyncio
import re
from pathlib import Path

import markdown
from playwright.async_api import async_playwright

REPO = Path("/Users/ashish/Documents/CaventiaV2")
SOURCE_MD = REPO / "tasks/whitepapers/sr11-7-draft-v1.md"
RENDERED_HTML = REPO / "tasks/whitepapers/sr11-7-rendered.html"
OUTPUT_PDF = REPO / "public/whitepaper-sr117.pdf"


def load_body() -> str:
    """Return everything after the first '---' separator in the markdown source."""
    text = SOURCE_MD.read_text()
    parts = text.split("\n---\n", 1)
    if len(parts) != 2:
        raise RuntimeError("Could not split front matter from body")
    return parts[1].strip()


def md_to_html(body: str) -> str:
    """Convert body markdown to HTML with the extensions we need."""
    return markdown.markdown(
        body,
        extensions=["tables", "fenced_code", "attr_list", "sane_lists", "md_in_html"],
        output_format="html5",
    )


def build_full_html(body_html: str) -> str:
    """Wrap the rendered body in the brand template (cover page + pagination)."""
    return TEMPLATE.replace("{{BODY}}", body_html)


TEMPLATE = r"""<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<title>Caventia · SR 11-7 Compliance for AI Agents</title>
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,500;9..144,600;9..144,700&family=Newsreader:ital,opsz,wght@0,6..72,300;0,6..72,400;0,6..72,500;1,6..72,400;1,6..72,500&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
<style>
:root {
  --parchment: #F5F1E8;
  --paper: #FBF8EE;
  --parchment-warm: #EDE6D3;
  --ink: #14110D;
  --ink-soft: #3D362C;
  --muted: #5C5346;
  --muted-soft: #8E8275;
  --rule: #D4CCBA;
  --rule-soft: #E5DDC9;
  --pompeii: #8B2C2C;
}

@page {
  size: letter;
  margin: 0.85in 0.85in 0.95in 0.85in;
}

* { box-sizing: border-box; margin: 0; padding: 0; }

html, body {
  background: var(--parchment);
  color: var(--ink);
  font-family: 'Newsreader', Georgia, serif;
  font-size: 11.5pt;
  line-height: 1.55;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}

/* ============ COVER PAGE ============ */
.cover {
  width: 100%;
  min-height: 9in;
  padding: 0.5in 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  page-break-after: always;
  position: relative;
}

.cover::after {
  content: '';
  position: absolute;
  inset: 0;
  pointer-events: none;
  background-image:
    radial-gradient(circle at 23% 41%, rgba(20,17,13,0.025) 1px, transparent 1.5px),
    radial-gradient(circle at 67% 19%, rgba(20,17,13,0.022) 1px, transparent 1.5px),
    radial-gradient(circle at 89% 73%, rgba(20,17,13,0.020) 1px, transparent 1.5px),
    radial-gradient(circle at 12% 87%, rgba(20,17,13,0.018) 1px, transparent 1.5px);
  background-size: 9px 9px, 13px 13px, 15px 15px, 19px 19px;
  mix-blend-mode: multiply;
}

.cover-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 24px;
  border-bottom: 1px solid var(--rule);
}

.cover-top .left {
  display: flex;
  align-items: center;
  gap: 14px;
}

.cover-sigil {
  width: 36px;
  height: 48px;
}

.cover-wordmark {
  font-family: 'Fraunces', Georgia, serif;
  font-weight: 500;
  font-size: 22pt;
  letter-spacing: -0.025em;
  color: var(--ink);
  font-variation-settings: "opsz" 96, "SOFT" 40;
}

.cover-top .right {
  font-family: 'JetBrains Mono', monospace;
  font-size: 9pt;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--muted);
}

.cover-top .right .pompeii { color: var(--pompeii); }

.cover-middle {
  padding: 1.5in 0 1in 0;
}

.cover-eyebrow {
  font-family: 'JetBrains Mono', monospace;
  font-size: 10pt;
  letter-spacing: 0.32em;
  text-transform: uppercase;
  color: var(--pompeii);
  margin-bottom: 32px;
}

.cover-title {
  font-family: 'Fraunces', Georgia, serif;
  font-weight: 400;
  font-size: 56pt;
  line-height: 0.96;
  letter-spacing: -0.035em;
  color: var(--ink);
  margin-bottom: 28px;
  font-variation-settings: "opsz" 144, "SOFT" 30;
}

.cover-title em {
  font-style: italic;
  color: var(--pompeii);
  font-variation-settings: "opsz" 144, "SOFT" 100, "WONK" 1;
}

.cover-subtitle {
  font-family: 'Fraunces', Georgia, serif;
  font-style: italic;
  font-size: 22pt;
  line-height: 1.3;
  color: var(--ink-soft);
  margin-bottom: 48px;
  font-variation-settings: "opsz" 60, "SOFT" 80;
  max-width: 5.5in;
}

.cover-byline {
  border-top: 1px solid var(--rule);
  padding-top: 24px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 10pt;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--muted);
  line-height: 2;
}

.cover-byline .author {
  color: var(--ink);
  font-weight: 500;
}

.cover-bottom {
  padding-top: 24px;
  border-top: 1px solid var(--rule);
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  font-family: 'JetBrains Mono', monospace;
  font-size: 9pt;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--muted);
}

.cover-bottom em {
  font-family: 'Fraunces', Georgia, serif;
  font-style: italic;
  text-transform: none;
  letter-spacing: 0;
  font-size: 12pt;
  color: var(--pompeii);
  font-variation-settings: "opsz" 36, "SOFT" 100;
}

/* ============ BODY CONTENT ============ */
.content {
  padding-top: 0.3in;
}

.content h2 {
  font-family: 'Fraunces', Georgia, serif;
  font-weight: 500;
  font-size: 28pt;
  line-height: 1.05;
  letter-spacing: -0.025em;
  color: var(--ink);
  margin-bottom: 18px;
  page-break-before: always;
  page-break-after: avoid;
  font-variation-settings: "opsz" 96, "SOFT" 40;
}

/* First h2 (Executive Summary) shouldn't force a page break since the cover already did */
.content > h2:first-child {
  page-break-before: avoid;
}

.content h2::before {
  content: '';
  display: block;
  width: 36px;
  height: 2px;
  background: var(--pompeii);
  margin-bottom: 22px;
}

.content h3 {
  font-family: 'Fraunces', Georgia, serif;
  font-weight: 500;
  font-size: 16pt;
  letter-spacing: -0.015em;
  color: var(--ink);
  margin-top: 26pt;
  margin-bottom: 8pt;
  page-break-after: avoid;
  font-variation-settings: "opsz" 36, "SOFT" 30;
}

.content h4 {
  font-family: 'Fraunces', Georgia, serif;
  font-weight: 500;
  font-size: 13pt;
  letter-spacing: -0.01em;
  color: var(--ink);
  margin-top: 18pt;
  margin-bottom: 6pt;
  page-break-after: avoid;
}

.content p {
  margin-bottom: 11pt;
  color: var(--ink-soft);
  text-align: justify;
  hyphens: auto;
  orphans: 3;
  widows: 3;
}

.content p:first-of-type {
  font-family: 'Newsreader', Georgia, serif;
  font-size: 12.5pt;
}

/* Drop cap on first paragraph after a chapter h2 */
.content h2 + p::first-letter {
  font-family: 'Fraunces', Georgia, serif;
  font-weight: 400;
  font-size: 54pt;
  line-height: 0.85;
  float: left;
  margin-right: 7px;
  margin-top: 4px;
  color: var(--pompeii);
  font-variation-settings: "opsz" 144, "SOFT" 30;
}

.content strong {
  font-weight: 500;
  color: var(--ink);
}

.content em {
  font-style: italic;
  color: var(--ink);
}

.content a {
  color: var(--pompeii);
  text-decoration: none;
  border-bottom: 1px solid var(--pompeii);
}

/* Lists */
.content ul, .content ol {
  margin: 12pt 0 12pt 24pt;
  padding: 0;
}

.content li {
  margin-bottom: 6pt;
  color: var(--ink-soft);
  padding-left: 6pt;
}

.content ul li::marker {
  color: var(--pompeii);
}

.content ol li::marker {
  color: var(--pompeii);
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.92em;
  font-weight: 500;
}

/* Nested list (used in TOC) */
.content ul ul {
  margin-top: 4pt;
  margin-bottom: 4pt;
}

.content ul ul li {
  margin-bottom: 3pt;
}

.content ul ul li::marker {
  color: var(--muted);
}

/* Tables (appendix B) */
.content table {
  width: 100%;
  border-collapse: collapse;
  margin: 16pt 0;
  page-break-inside: avoid;
  font-size: 10pt;
}

.content table thead {
  border-bottom: 1.5px solid var(--ink);
}

.content table thead th {
  text-align: left;
  padding: 8pt 10pt;
  font-family: 'JetBrains Mono', monospace;
  font-size: 8.5pt;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--muted);
  font-weight: 500;
  vertical-align: bottom;
}

.content table tbody tr {
  border-bottom: 1px solid var(--rule-soft);
}

.content table tbody tr:last-child {
  border-bottom: 1px solid var(--rule);
}

.content table tbody td {
  padding: 8pt 10pt;
  color: var(--ink);
  vertical-align: top;
  line-height: 1.45;
}

.content table tbody td:first-child {
  font-family: 'JetBrains Mono', monospace;
  font-size: 9pt;
  color: var(--ink);
  white-space: nowrap;
}

/* Code blocks (ASCII spine diagram) */
.content pre {
  font-family: 'JetBrains Mono', monospace;
  font-size: 9.5pt;
  line-height: 1.4;
  background: var(--ink);
  color: var(--parchment);
  padding: 18pt 22pt;
  border-left: 3px solid var(--pompeii);
  margin: 16pt 0;
  page-break-inside: avoid;
  white-space: pre;
  overflow-x: hidden;
}

.content code {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.92em;
  background: var(--parchment-warm);
  padding: 1px 5px;
  border-radius: 2px;
  color: var(--ink);
}

.content pre code {
  background: transparent;
  padding: 0;
  color: inherit;
  font-size: inherit;
}

/* Horizontal rules become section separators */
.content hr {
  border: none;
  border-top: 1px solid var(--rule);
  margin: 32pt 0;
}

/* Definition box (the behavioral envelope, etc.) */
.content .definition {
  background: var(--parchment-warm);
  border-left: 3px solid var(--pompeii);
  padding: 14pt 18pt;
  margin: 16pt 0;
  page-break-inside: avoid;
}
.content .definition p {
  margin: 0;
  font-family: 'Fraunces', Georgia, serif;
  font-size: 12pt;
  line-height: 1.5;
  color: var(--ink);
  text-align: left;
  font-variation-settings: "opsz" 36, "SOFT" 30;
}
.content .definition strong {
  font-weight: 500;
  color: var(--pompeii);
}

/* Ask-your-second-line callout */
.content .ask {
  border-top: 1px solid var(--rule);
  border-bottom: 1px solid var(--rule);
  padding: 10pt 0;
  margin: 18pt 0 6pt 0;
  page-break-inside: avoid;
}
.content .ask p {
  margin: 0;
  text-align: center;
  font-family: 'Fraunces', Georgia, serif;
  font-style: italic;
  font-size: 11.5pt;
  color: var(--ink-soft);
  font-variation-settings: "opsz" 36, "SOFT" 80;
}
.content .ask em {
  color: var(--pompeii);
  font-style: italic;
}

/* Closing CTA box */
.content .cta {
  background: var(--ink);
  color: var(--parchment);
  padding: 22pt 26pt;
  margin: 18pt 0;
  border-left: 4px solid var(--pompeii);
  page-break-inside: avoid;
}
.content .cta p {
  color: var(--parchment);
  text-align: left;
  margin-bottom: 9pt;
  font-size: 11pt;
  line-height: 1.55;
}
.content .cta p:last-child { margin-bottom: 0; }
.content .cta p:first-child {
  font-family: 'Fraunces', Georgia, serif;
  font-size: 14pt;
  font-weight: 500;
  line-height: 1.3;
  color: var(--parchment);
  margin-bottom: 12pt;
  font-variation-settings: "opsz" 60, "SOFT" 40;
}
.content .cta strong {
  color: var(--parchment);
  font-weight: 500;
}
.content .cta a {
  color: #C4948E;
  border-bottom: 1px solid #C4948E;
  text-decoration: none;
  font-weight: 500;
}

/* Trailing legal disclaimer paragraph */
.content > p:last-child em {
  display: block;
  font-style: italic;
  font-size: 9pt;
  color: var(--muted);
  text-align: center;
  margin-top: 8pt;
}

/* Final two paragraphs are typically the disclaimer + copyright */
.content > hr + p em,
.content > p:nth-last-child(-n+2) em {
  font-style: italic;
  font-size: 9.5pt;
  color: var(--muted);
  text-align: left;
}

</style>
</head>
<body>

<!-- ===================== COVER PAGE ===================== -->
<section class="cover">
  <div class="cover-top">
    <div class="left">
      <svg class="cover-sigil" viewBox="0 0 18 24" xmlns="http://www.w3.org/2000/svg">
        <rect x="0" y="0" width="18" height="2" fill="#14110D"/>
        <line x1="9" y1="3" x2="9" y2="21" stroke="#8B2C2C" stroke-width="2" stroke-linecap="square"/>
        <line x1="6" y1="4" x2="6" y2="20" stroke="#14110D" stroke-width="0.5" opacity="0.4"/>
        <line x1="12" y1="4" x2="12" y2="20" stroke="#14110D" stroke-width="0.5" opacity="0.4"/>
        <rect x="0" y="22" width="18" height="2" fill="#14110D"/>
      </svg>
      <span class="cover-wordmark">caventia</span>
    </div>
    <div class="right">
      Whitepaper <span class="pompeii">·</span> No. 001
    </div>
  </div>

  <div class="cover-middle">
    <div class="cover-eyebrow">A practical framework</div>
    <h1 class="cover-title">SR 11-7 compliance for <em>regulated AI agents.</em></h1>
    <p class="cover-subtitle">
      The framework holds. The artifacts do not. Here are the five places
      SR 11-7 strains under AI agents, and the artifact that closes each gap.
    </p>
    <div class="cover-byline">
      <div><span class="author">Ashish K. Saxena</span></div>
      <div>Founder · Caventia</div>
      <div>2026 · For Chief Model Risk Officers at US banks</div>
    </div>
  </div>

  <div class="cover-bottom">
    <div>Caventia, Inc. (in formation) <span style="color:var(--pompeii)">·</span> caventia.com</div>
    <div><em>cavēre necesse est</em></div>
  </div>
</section>

<!-- ===================== BODY ===================== -->
<div class="content">
{{BODY}}
</div>

</body>
</html>
"""


async def render_pdf(html_path: Path, pdf_path: Path) -> None:
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()
        await page.goto(f"file://{html_path}")
        await page.evaluate("document.fonts.ready")
        await page.wait_for_timeout(1500)
        await page.pdf(
            path=str(pdf_path),
            format="Letter",
            print_background=True,
            display_header_footer=True,
            margin={"top": "0.85in", "bottom": "0.95in", "left": "0.85in", "right": "0.85in"},
            header_template="""
                <div style="font-family: 'JetBrains Mono', monospace; font-size: 8pt; letter-spacing: 0.18em; text-transform: uppercase; color: #5C5346; width: 100%; padding: 0 0.85in; display: flex; justify-content: space-between;">
                  <span><b style="color:#14110D; font-weight: 500;">Caventia</b> <span style="color:#8B2C2C">·</span> SR 11-7 Compliance for AI Agents</span>
                  <span>Whitepaper No. 001</span>
                </div>
            """,
            footer_template="""
                <div style="font-family: 'JetBrains Mono', monospace; font-size: 8pt; letter-spacing: 0.18em; text-transform: uppercase; color: #5C5346; width: 100%; padding: 0 0.85in; display: flex; justify-content: space-between;">
                  <span>caventia.com</span>
                  <span><span class="pageNumber"></span> <span style="color:#8B2C2C">/</span> <span class="totalPages"></span></span>
                </div>
            """,
            prefer_css_page_size=False,
        )
        await browser.close()


async def main() -> None:
    print(f"Reading source: {SOURCE_MD}")
    body_md = load_body()
    body_html = md_to_html(body_md)
    full_html = build_full_html(body_html)

    RENDERED_HTML.write_text(full_html)
    print(f"Wrote intermediate HTML: {RENDERED_HTML}")

    OUTPUT_PDF.parent.mkdir(parents=True, exist_ok=True)
    await render_pdf(RENDERED_HTML, OUTPUT_PDF)
    print(f"Wrote PDF: {OUTPUT_PDF}")
    print(f"PDF size: {OUTPUT_PDF.stat().st_size / 1024:.1f} KB")


if __name__ == "__main__":
    asyncio.run(main())
