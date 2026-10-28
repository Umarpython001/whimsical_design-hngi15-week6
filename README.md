# start.ng — whimsical rebuild

A from-scratch, single-page rebuild of the [start.ng](https://start.ng) homepage —
_Nigeria's home for free browser games, built by the HNG community._
**Good vibes. Good games.** Same structure, palette, copy and links as the real
site, with a subtle arcade layer and a Halloween seasonal treatment on top.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production bundle → dist/
npm run preview  # serve the build → http://localhost:4173
npm run lint
```

## What's on the page

`nav` → hero ("Good vibes. _Good games._") → `#games` (8 featured cards, real
covers hotlinked, "See all 188 games →", A–Z expander of all 188 community
games) → `#how` (4 publishing steps) → `#about` (+ 6-question FAQ) → footer.

- **Real data only** — games, creators and covers from `https://api.start.ng/games`
  (frozen 2026-10-28) in `src/data/games.js`.
- **Themes** — light cream default + dark olive toggle, `data-theme` on `<html>`,
  `localStorage.theme`, applied pre-paint (no flash).
- **Whimsy** — drawn SVG motifs in `src/components/startng-whimsy/`: sparkles,
  pixel trail, gamepad, cobwebs, bats, ghost, pumpkins, candy corn. Decorative,
  one-shot motion, `prefers-reduced-motion` honoured, nothing loops.
- **Seasonal** — `HALLOWEEN` flag in `Halloween.jsx`; flip to `false` after Oct 31
  and every motif disappears with no layout edits.

## Governing documents

`master_prompt.md` (binding brief: refine, don't redesign) · `PRODUCT.md`
(product facts + locked decisions D1–D8) · `DESIGN.md` (inherited design system
+ what was added) · `agents_communicate.md` (coordination board + work log).

## Artifacts

`.impeccable/research/` live-site captures · `.impeccable/review/` 1440/390 px
shots in both themes + `detect.json` · `.impeccable/QA-FINDINGS.md` ·
`.impeccable/copy-diff.md` · `.impeccable/design.json`.
