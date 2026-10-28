# startng-whimsy

Original, decorative SVG components that add a **subtle arcade personality** to the
start.ng rebuild. Owned by the whimsy agent; self-contained; **no dependencies**.

Everything reads the site's real design tokens (`--ink`, `--muted`, `--lime`,
`--line` — see `.impeccable/research/startng-real.css`) with light-mode
fallbacks, so components render correctly even before the global tokens are
wired, and follow dark mode automatically once `[data-theme=dark]` tokens exist.
**No new colours** are introduced.

## Imports

```jsx
import {
  ArcadeSparkle,
  PixelTrail,
  GamepadDoodle,
  ArcadeAccent,
  WhimsyBackdrop,
} from './components/startng-whimsy';
```

Always import from the barrel (`src/components/startng-whimsy`); the stylesheet
is loaded for you and all classes are namespaced `sngw-`.

## Components

| Component | Purpose | Key props |
|---|---|---|
| `ArcadeSparkle` | Four-point star + lime satellite; inline with headings or CTAs | `size=20`, `tone='duo'\|'ink'\|'lime'\|'muted'`, `twinkle`, `hoverTwinkle`, `delay` |
| `PixelTrail` | Restrained fading pixel trail ("footprints") | `size=22`, `steps=4 (2–8)`, `direction='right'\|'left'\|'up'\|'down'`, `fade`, `tone='fresh'\|'ink'\|'muted'` |
| `GamepadDoodle` | Original hand-drawn controller line art | `width=48`, `tilt=-6`, `hoverWiggle` |
| `ArcadeAccent` | Tiny doodle placed around content: sparkle / cross / dots / pixels / squiggle / arc | `variant`, `placement`, `size`, `tone='ink'\|'lime'\|'muted'` |
| `WhimsyBackdrop` | Sparse corner-mark composition for a section background | `variant='corners'\|'frame'`, `flip`, `hideOnSmall=true` |

All are decorative: `aria-hidden="true"`, `focusable="false"`,
`pointer-events: none`. None of them can cover interactive elements by design —
corner accents sit **outside** the anchor's corner, backdrops hug section edges.

## Usage examples

```jsx
// Hero: sparkle accent on the headline, pixel trail after the CTA,
// quiet corner marks behind the section.
<section className="sngw-anchor" style={{ position: 'relative' }}>
  <WhimsyBackdrop variant="corners" />
  <h1>
    Good vibes. <mark>Good games.</mark>
    <ArcadeAccent variant="sparkle" tone="lime" placement="top-right" size={20} />
  </h1>
  <p className="cta-row">
    <a className="btn" href="#games">Play now</a>
    <PixelTrail size={40} steps={4} />
  </p>
</section>

// "How to publish" section: doodle controller.
<GamepadDoodle width={64} hoverWiggle />

// Card corner: accent kisses the corner (card needs position:relative).
<article className="game sngw-anchor">
  ...
  <ArcadeAccent variant="arc" tone="lime" placement="top-left" size={20} />
</article>

// One-shot celebration (e.g. when a publish step is completed):
{published && <ArcadeSparkle twinkle size={22} />}
```

## Integration requirements

1. **Positioned anchor** — corner `ArcadeAccent` placements and
   `WhimsyBackdrop` need an ancestor with `position: relative`. Add the
   provided marker class `sngw-anchor` (no styles of its own) or your own.
   `WhimsyBackdrop` logs a console warning if you forget.
2. **Stacking** — render `WhimsyBackdrop` as the section's **first child**; if
   section content is statically positioned, give the content wrapper
   `position: relative; z-index: 1` so it always paints above the marks.
3. **Hover micro-interactions** (`hoverTwinkle`, `hoverWiggle`) fire while a
   `.sngw-anchor` ancestor is hovered — ≤3px movement, 180ms, no loops.
4. **Tokens** — components expect the real-site tokens (`--ink`, `--muted`,
   `--lime`, `--line`) to be defined globally (as in the real stylesheet).
   Until then, built-in light-mode fallbacks (the exact real values) apply.

## Motion policy (D7)

- Nothing loops or idles. `twinkle`/`hoverTwinkle` are one-shot (≤900ms).
- All motion is disabled under `prefers-reduced-motion` — elements render
  fully visible and static.
- No new dependencies, no animation libraries.

## Try it

```bash
npm run dev   # then open:
# http://localhost:5173/src/components/startng-whimsy/demo.html        (light)
# http://localhost:5173/src/components/startng-whimsy/demo.html?dark   (dark)
```

The demo is an isolated page (not a build entry; `npm run build` ignores it)
showing every component in light/dark, with hover states and one-shot motion.

## Halloween seasonal layer (user-ordered, Oct 2026)

`import { Bat, Ghost, Pumpkin, Cobweb, CandyCorn, HALLOWEEN } from './components/startng-whimsy'`

| Component | Look | Props |
|---|---|---|
| `Bat` | Ink silhouette, scalloped wings, card-coloured eyes | `size=22`, `tone='ink'\|'lime'`, `hoverSwoop` |
| `Ghost` | Lime ghost with ink face (duo) or ink silhouette | `size=26`, `tone='duo'\|'ink'`, `hoverBoo` |
| `Pumpkin` | Lime jack-o'-lantern, carved ink face, or ink outline | `size=26`, `tone='duo'\|'ink'` |
| `Cobweb` | Quarter web of silk lines, muted — hang in top-left corners | `size=40` |
| `CandyCorn` | Abstract candy corn: lime / card / ink bands | `size=16` |

- `HALLOWEEN` (boolean, currently `true`): every Halloween component renders
  `null` when it is false — flip it after the season and the layer vanishes
  with zero layout edits. MAIN can also read it to conditionally adapt copy.
- **No new colours**: the layer is drawn in ink / lime / muted / card. The
  lantern body resolves `var(--pumpkin, var(--lime))` — if MAIN ever defines a
  `--pumpkin` token, the pumpkin turns orange everywhere, automatically.
- Backdrop: `<WhimsyBackdrop variant="halloween" />` composes cobweb (top-left),
  bat, pumpkin, ghost in the same corner slots as `corners`.
- Suggested placements: cobweb top-left of the hero card, a bat pair near the
  nav/hero edge, the pumpkin beside the "Publish it" how-step, ghost in the
  footer, candy corn sparingly (one or two per page).

## Limitations

- `PixelTrail` vertical modes are meant for short runs (2–8 steps) — the trail
  is a doodle, not a progress bar.
- Corner placements use `em` offsets tuned for text-sized anchors (headings,
  buttons, cards). For very large anchors, pass a `style` override.
- The kit does not theme `mark`, buttons or cards — that belongs to the main
  build's global stylesheet.
