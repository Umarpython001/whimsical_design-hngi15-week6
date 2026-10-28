# QA findings — start.ng whimsical rebuild (Halloween pass)

Verified against the **production build** (`npm run build && npm run preview`, http://localhost:4173)
on 2026-10-28, after the Halloween layer landed.

Environment note: the cached Playwright browsers are **arm64** and the system lacks
`libnspr4`/`libnss3`/`libasound2`. Extract the `.deb`s in `/tmp/opencode/pw/libs` once, then run
browsers with:

```bash
cd /tmp/opencode/pw
LD_LIBRARY_PATH=/tmp/opencode/pw/libs/ex/usr/lib/aarch64-linux-gnu node <script>.mjs
# executablePath: ~/.cache/ms-playwright/chromium-1248/chrome-linux-arm64/chrome
```

## Gate results

| Check | Result |
|---|---|
| `npm run build` | **PASS** — 23 modules, no warnings from project code |
| `npm run lint` | **PASS** — 0 errors, 0 warnings |
| Console / page errors | **0** at every viewport tested |
| Horizontal overflow | **0 px** at 1440 / 1024 / 760 / 600 / 390 |
| Copy fidelity | **47/47 strings**, **10/10 links**, 188/188 A–Z rows (`.impeccable/copy-diff.md`) |
| Detector | **18 findings, 0 blockers** (`.impeccable/review/detect.json`) |

## Findings (severity-ordered)

### [MAJOR] 390 px horizontal scrollbar caused by the decorative pixel trail — FIXED
`src/App.css` → `.see-all .sngw-trail` sat at `right: calc(50% - 200px)`, which is `-5px` on a
390 px viewport, pushing `document.scrollWidth` to 395 px.
Expected: no horizontal scroll at any width. Actual: 5 px of dead scroll on phones.
Fix: hide `.see-all .sngw-trail` at `≤760px` (the two decorative trails flank the centered
"See all 188 games →" button; the button is unaffected). Re-measured: 390 px → 0.

### [MINOR] Elastic easing read as dated in the detector — FIXED
`src/App.css` lines 342/413 used `cubic-bezier(0.34, 1.56, 0.64, 1)` (Impeccable
`bounce-easing`, advisory). Replaced with `cubic-bezier(0.16, 1, 0.3, 1)` (ease-out-expo) on the
card lift and cover zoom — same tactility, no overshoot. Detector now reports 0 `bounce-easing`.

### [NIT] Typographic apostrophes deviated from the SSR copy — FIXED
`src/App.jsx` used `&rsquo;` in three sentences ("Nigeria’s", "We’re", "it’s"); `home-ssr.html`
uses straight `'`. A verbatim copy diff would have failed. Normalised to `'` — copy is now
byte-identical apart from whitespace.

### [NIT] 16 font sizes sit off the DESIGN.md type ramp — ACCEPTED
All are inherited values from the real site (nav links `0.95rem`, art fallback `2.4rem`, card
title `1.05rem`…). Locked decision D3 keeps the real site's type scale; the ramp in `DESIGN.md`
is documentation, not a constraint on inherited sizes.

### [NIT] `cream-palette` warning in `src/components/startng-whimsy/demo.html` — ACCEPTED
Dev-server-only demo page for the SVG kit. Not a build entry, not shipped in `dist/`.

### [NIT] `overused-font` warning on the Helvetica Neue stack — ACCEPTED
`index.css` — binding brand font inherited from the real start.ng stylesheet. Changing it would
break the rebuild's core constraint.

## Interaction checks (1440 px unless noted)

| Interaction | Expected | Actual |
|---|---|---|
| Theme toggle (header) | `data-theme` flips, `localStorage.theme` set | light → dark, stored `dark`, **persists after reload** |
| A–Z `<details>` | opens, reveals 188 rows | 188 rows, bat swoops once (`az-bat-swoop`) |
| FAQ `<details>` ×6 | each opens | 6/6 open |
| Featured card hover | lift ≤4 px, cover zoom, bat fades in, "Play" turns lime | bat `opacity: 0 → 1`, transform applied |
| Card keyboard focus | focus ring on card link and Play | 2 px solid outline, offset 2 px |
| Tab order | logo → nav → theme → hero CTA → cards | 10/10 stops with visible 2 px focus ring |
| CTA pumpkin | wiggles once on hover/focus only | one-shot keyframe, no idle loop |
| Mobile menu (`<760px`) | hamburger toggles nav panel, theme moves into panel | open/close + `aria-expanded` correct |

## Reduced motion (`reducedMotion: 'reduce'`)

All new motion resolves to `animation: none` and transitions to `0.00001s`:
A–Z bat, card bat, FAQ lantern, CTA pumpkin, hero highlighter draw-in, card lift/cover zoom.
Nothing loops in either motion mode.

## Decorative-layer safety

- Every motif is `aria-hidden="true"`, `focusable="false"`, `pointer-events: none` — never a tab
  stop, never a click target.
- Glyph-level collision test (text `Range` rects vs motif boxes) at 1440 / 1024 / 900 / 800 px:
  **0 overlaps** with the eyebrow, H1, lead, section headings or about copy.
- Motif/hit-target centre test at all five widths: **0 motifs over an interactive element**.
- `≤760px` hides corner motifs (cobwebs, hero bats/ghost, how cobweb/candy corn, footer web/bat,
  card bat, pixel trails); inline motifs (CTA pumpkin, FAQ lanterns) stay.

## Artifacts

- `desktop-light.png`, `desktop-dark.png` — 1440 px, full page
- `mobile-light.png`, `mobile-dark.png` — 390 px, full page
- `detect.json` — raw Impeccable detector output
- Re-capture script pattern: `/tmp/opencode/pw/final-shots.mjs`
