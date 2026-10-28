---
name: start.ng
description: Nigeria's home for free browser games — warm cream arcade, one lime accent, inherited verbatim from the real site
colors:
  bg: "#f6f5ee"
  card: "#fffefa"
  ink: "#292a23"
  muted: "#6b6c63"
  line: "#e4e2d6"
  lime: "#d8fd71"
  text-2: "#3c3d35"
  on-solid: "#fff"
  on-solid-accent: "#d8fd71"
  on-lime: "#292a23"
  solid-hover: "#000"
  scrim: "rgba(41, 42, 35, 0.45)"
  shimmer: "#efede2"
  code-bg: "#292a23"
  legendary-bg: "#fafff0"
  banner-tint: "#f1fbd2"
  dot: "rgba(41, 42, 35, 0.16)"
  danger: "#c0392b"
  ok: "#2e7d32"
  warn-ink: "#8a6d00"
  warn-bg: "#fff7d6"
  warn-line: "#f0d77a"
  bad-bg: "#fdecea"
  bad-line: "#f3b8b0"
  on-art: "#fff"
  art-shade: "rgba(0, 0, 0, 0.5)"
  art-text-shadow: "rgba(0, 0, 0, 0.35)"
  r-common: "#75766c"
  r-uncommon: "#278546"
  r-rare: "#346fdf"
  r-epic: "#8e4fd6"
  r-legendary: "#a9630a"
  r-limited: "#db2967"
  bg-dark: "#292a23"
  card-dark: "#33342c"
  ink-dark: "#f6f5ee"
  muted-dark: "#b0b1a6"
  line-dark: "#4a4b41"
  text-2-dark: "#dedcd0"
  on-solid-dark: "#292a23"
  on-solid-accent-dark: "#292a23"
  solid-hover-dark: "#fff"
  scrim-dark: "rgba(20, 21, 17, 0.65)"
  shimmer-dark: "#44453b"
  code-bg-dark: "#1f201b"
  legendary-bg-dark: "#38402a"
  banner-tint-dark: "#343b27"
  dot-dark: "rgba(246, 245, 238, 0.12)"
  danger-dark: "#ff8a7d"
  ok-dark: "#7fd884"
  warn-ink-dark: "#e6c34d"
  warn-bg-dark: "#4a4220"
  warn-line-dark: "#7a6a2a"
  bad-bg-dark: "#4a2a26"
  bad-line-dark: "#7d4a43"
  r-common-dark: "#a6a79b"
  r-uncommon-dark: "#5fcf82"
  r-rare-dark: "#6f9bf0"
  r-epic-dark: "#b383ef"
  r-legendary-dark: "#f5a640"
  r-limited-dark: "#f27aa3"
  halloween-pumpkin: "#e8641e"
typography:
  display:
    fontFamily: '"Helvetica Neue", Helvetica, Arial, system-ui, sans-serif'
    fontSize: "clamp(2.8rem, 9vw, 6.2rem)"
    fontWeight: 800
    lineHeight: 0.98
    letterSpacing: "-0.055em"
  headline:
    fontFamily: '"Helvetica Neue", Helvetica, Arial, system-ui, sans-serif'
    fontSize: "2.1rem"
    fontWeight: 700
    letterSpacing: "-0.035em"
  title:
    fontFamily: '"Helvetica Neue", Helvetica, Arial, system-ui, sans-serif'
    fontSize: "1.3rem"
    fontWeight: 700
    letterSpacing: "-0.02em"
  body:
    fontFamily: '"Helvetica Neue", Helvetica, Arial, system-ui, sans-serif'
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.5
  lead:
    fontFamily: '"Helvetica Neue", Helvetica, Arial, system-ui, sans-serif'
    fontSize: "1.2rem"
    lineHeight: 1.7
  eyebrow:
    fontFamily: 'ui-monospace, "SF Mono", Menlo, Consolas, monospace'
    fontSize: "0.8rem"
    fontWeight: 400
    letterSpacing: "0.28em"
    textTransform: "uppercase"
  label:
    fontFamily: '"Helvetica Neue", Helvetica, Arial, system-ui, sans-serif'
    fontSize: "0.85rem"
    fontWeight: 600
rounded:
  card: "18px"
  art: "12px"
  button: "10px"
  chip: "8px"
  step-chip: "6px"
  code: "5px"
  pill: "999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "12px"
  lg: "16px"
  xl: "24px"
  2xl: "32px"
  section: "72px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-solid}"
    rounded: "{rounded.button}"
    padding: "12px 22px"
  button-primary-hover:
    backgroundColor: "{colors.solid-hover}"
  button-ghost:
    backgroundColor: "{colors.card}"
    textColor: "{colors.ink}"
    rounded: "{rounded.button}"
    padding: "12px 22px"
  game-card:
    backgroundColor: "{colors.card}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: "10px"
  step-chip:
    backgroundColor: "{colors.banner-tint}"
    textColor: "{colors.ink}"
    rounded: "{rounded.step-chip}"
    padding: "3px 8px"
---

# Design System: start.ng

## Overview

**Creative North Star: "The Neighbourhood Arcade"**

This system is **inherited, not invented**: every colour token is copied verbatim from the real site https://start.ng (verified against `.impeccable/research/startng-real.css` and shipped in `src/index.css`), and the rebuild layers exactly two thin additions on top — the `.sngw-` whimsy/decorative kit (with its Halloween season) and the user-ordered FlyingBats hero loop. The world is a warm neighbourhood arcade on cream paper: ink-black-olive type, a single signature lime doing real work, cream cards on 1px olive lines. It refuses the cold game-store default (dark glassy tiles, gradient heroes, anonymous thumbnail feeds) and the brief bans glassmorphism, glow, floating noise, and radii above 18px. Good vibes come from craft — the lime highlighter, confident 800-weight type, tactile cards — never from clutter.

**Key Characteristics:**
- Cream `#f6f5ee` ground, `#fffefa` cards, ink `#292a23` type, one lime accent `#d8fd71`; dark mode is the same shop at night (olive ground, cream ink), both themes equal citizens.
- Flat-by-default surfaces on 1px `--line` borders; depth appears only as a hard lime offset shadow or a scrim — never soft glow.
- Motion grammar: one-shot entrances (highlighter draw-in, cobweb settle, sparkle settle) + interaction-triggered hover replies — plus exactly ONE continuously-animated element, the user-ordered FlyingBats hero loop, engineered to read as weather, not animation. Every effect dies under `prefers-reduced-motion`.
- Decorative art is hand-drawn inline SVG only (`.sngw-` kit), always `aria-hidden`, never interactive; its only colour beyond the page tokens is the scoped Halloween pumpkin orange.

### Named Rules

**The Verbatim Token Rule.** The colour vocabulary is binding, copied from the real start.ng stylesheet. New surfaces consume tokens; they never introduce new hues. The single sanctioned exception is the Halloween layer's pumpkin orange `#e8641e` — scoped, named, and time-boxed.

**The One Lime Rule.** `--lime` is the only loud colour on any screen, and it always does real work: highlighter `mark`, hover rings, PLAY chip, step chips, selection, the one lime flying bat. If lime is decorating instead of signalling, delete it.

**The Drawn-Not-Stock Rule.** Every decorative mark is hand-drawn inline SVG in the page's own palette. No icon fonts, no stock emoji, no raster clip-art, no `<img>` decoratives.

## Colors

A warm paper-and-ink palette with exactly one accent. Light is cream paper; dark is the same room with the lights off. Values below are verbatim from the real site, defined in `src/index.css` under `:root` and `:root[data-theme="dark"]`.

### Primary
- **Signature Lime** (`--lime #d8fd71`): the accent. Highlighter `mark`, `.btn:hover` ring, PLAY chip fill, `.how` step-chip wash (`--banner-tint`), selection background, favicon glyph, the one lime flying bat (bat `d`). On lime, text is `--on-lime #292a23`.

### Neutral
- **Cream Ground** (`--bg #f6f5ee` / dark `#292a23`): page ground and the nav blur's base.
- **Card Cream** (`--card #fffefa` / dark `#33342c`): every card, menu, expander, FAQ panel; flying-bat eyes.
- **Near-Black-Olive Ink** (`--ink #292a23` / dark `#f6f5ee`): display type, solid buttons, hover borders, all drawn-SVG line work.
- **Olive Grey Muted** (`--muted #6b6c63` / dark `#b0b1a6`): secondary copy, nav links, mono eyebrows, cobweb thread.
- **Hairline** (`--line #e4e2d6` / dark `#4a4b41`): every 1px border, footer rules, scrollbar.
- **Body-2** (`--text-2 #3c3d35` / dark `#dedcd0`): denser body copy on inherited surfaces.
- **Shimmer** (`--shimmer #efede2` / dark `#44453b`): cover-art placeholder ground.
- **Banner Tint** (`--banner-tint #f1fbd2` / dark `#343b27`): lime wash behind step chips; quiet accent fills.
- **Dots** (`--dot rgba(41,42,35,.16)` / dark `rgba(246,245,238,.12)`): dotted texture, kept available, used sparingly.
- **Code** (`--code-bg #292a23` + `--legendary-bg #fafff0` text): inline `code` chips, both themes.

### State & Semantic (inherited vocabulary)
- **Danger** `--danger #c0392b`/dark `#ff8a7d`; **OK** `--ok #2e7d32`/dark `#7fd884`.
- **Warn** trio `--warn-ink #8a6d00`, `--warn-bg #fff7d6`, `--warn-line #f0d77a` (dark: `#e6c34d`, `#4a4220`, `#7a6a2a`).
- **Bad** trio `--bad-bg #fdecea`, `--bad-line #f3b8b0` (dark: `#4a2a26`, `#7d4a43`).

### Rarity scale (game metadata, inherited)
`--r-common #75766c`, `--r-uncommon #278546`, `--r-rare #346fdf`, `--r-epic #8e4fd6`, `--r-legendary #a9630a`, `--r-limited #db2967` (dark: `#a6a79b`, `#5fcf82`, `#6f9bf0`, `#b383ef`, `#f5a640`, `#f27aa3`), consumed via `.r-*` classes setting a local `--r`.

### Art overlays (cover imagery)
`--on-art #fff`, `--art-shade rgba(0,0,0,.5)`, `--art-text-shadow rgba(0,0,0,.35)` — text legibility over game cover art.

### Halloween exception (time-boxed, rebuild addition)
- **Pumpkin Orange** (`#e8641e`): the one extended hue in the entire kit, defined only as `--sngw-pumpkin` on `.sngw-pumpkin`/`.sngw-hw` elements themselves and consumed only by `.sngw-fill-pumpkin` (and the lantern alias `--sngw-lantern: var(--sngw-pumpkin, var(--lime))`, which resolves orange because the token is set on the pumpkin element). It never touches UI chrome, text, or page tokens, and renders identically in both themes.

### Named Rules

**The Verbatim Token Rule.** See Overview. Values are never re-derived or approximated — including the `rgba()` scrims and dots, kept in their native format.

**The One Lime Rule.** See Overview.

## Typography

**Display & Body Font:** `"Helvetica Neue", Helvetica, Arial, system-ui, sans-serif` (verbatim from the real site; no webfont is shipped).
**Label/Mono Font:** `ui-monospace, "SF Mono", Menlo, Consolas, monospace` (`--mono`) — eyebrows, step numbers, code, footer column headings.

**Character:** a plain-spoken Helvetica voice turned up loud: 800-weight, tight-tracked display; mono does all the quiet labelling. Warm, not decorative.

### Hierarchy
- **Display** (800, `clamp(2.8rem, 9vw, 6.2rem)`, line-height 0.98, tracking −0.055em): hero h1 only; second line carries the highlighter `mark`.
- **Headline** (700, 2.1rem, tracking −0.035em; 1.6rem ≤760px): section h2s.
- **Title** (700, 1.3rem, tracking −0.02em): about h3s; nav/footer logo at 1.3rem/1.35rem.
- **Card title** (700, 1.05rem→1rem mobile, tracking −0.015em): game names, clamped to 2 lines.
- **Lead** (400, 1.2rem, line-height 1.7, muted, max-width 720px): hero and about paragraphs.
- **Body** (400, 1rem, line-height 1.5): default; FAQ answers 1.6; step spans 1.55.
- **Label/Mono** (`--mono`, 0.8rem, +0.28em tracking, uppercase): hero eyebrow. Footer h2s mono 0.72rem at +0.14em; step chips mono 0.8rem.
- **Meta** (0.82rem muted): "by <creator>" and play counts; 0.75rem descriptions.

### Named Rules

**The Mono-Sings-Quiet Rule.** Mono type is always small, tracked-out, uppercase, and muted — it labels, it never shouts. Display work stays in the Helvetica stack.

## Layout

Single 960px container (`max-width: 960px; padding: 0 24px`), vertically sectioned: sticky nav → hero (72/80px) → `#games` grid → A–Z expander → how (96/72px) → about/FAQ → footer. Game grid `repeat(auto-fill, minmax(200px, 1fr))`, 16px gaps (12px, 2 columns ≤600px); how steps `repeat(auto-fit, minmax(200px, 1fr))`. Footer grid `minmax(0,1.6fr) repeat(3, minmax(0,1fr))`, 32px gaps, collapsing to 2 columns ≤760px with the brand full-width. `scroll-padding-top: 84px` clears the sticky nav for anchors. Breakpoints in use: **760px** (nav collapses; footer 2-col; mobile hideout list for corner decoratives), **700px** (whimsy backdrops hide), **640px** (full Halloween/bats hideout list, below), **600px** (2-col game grid, full-width PLAY chip).

## Elevation & Depth

Flat-by-default with **hard, structural shadows only** — no ambient blur in the UI. Depth is expressed three ways: the lime **sticker lift** `6px 8px 0 var(--lime)` on hovered cards; the **scrim** `--scrim` under the mobile menu; and the nav's 1px hairline `0 1px color-mix(in srgb, var(--line) 70%, transparent)`. Cover art uses `--art-shade`/`--art-text-shadow` for text-over-image legibility only. Glow, glass, and soft drop shadows are refused by brief.

### Shadow Vocabulary
- **Sticker lift** (`box-shadow: 6px 8px 0 var(--lime)`): `.game:hover` only, paired with the springy transform. Never at rest, never on non-cards.
- **Focus ring** (`box-shadow: 0 0 0 3px var(--lime)`): `.btn:hover` halo; keyboard focus uses the global `outline: 2px solid var(--ink)` + 2px offset instead.
- **Hairline under nav** (`0 1px color-mix(in srgb, var(--line) 70%, transparent)`): the sticky bar's only separation.
- **Menu drop** (`0 10px 24px var(--scrim)`): mobile nav sheet.

### Named Rules

**The Hard-Shadow Rule.** Shadows are flat colour offsets or hairlines. A blurred, coloured, or glowing shadow has no place in this system.

## Shapes

Rounded but disciplined: card radius ceiling **18px** (cards keep a ≥1px `--line` border, ≤18px radius). Scale: cards/expanders 18px → cover art 12px → buttons 10px → small chips/menu items 8px → step chips 6px → inline code 5px → full-round for pills (theme toggle) and circles. Every card carries a 1px `--line` border that darkens to `--ink` on hover rather than thickening. Form language is friendly-print: rounded rectangles with drawn-SVG doodles kissing their corners (offsets −0.6em/−0.7em, never covering content).

## Components

### Navigation
Sticky, full-bleed blurred cream bar: `::before` spans to viewport edges, `background: color-mix(in srgb, var(--bg) 86%, transparent)` + `backdrop-filter: blur(12px)`, 1px hairline shadow, 14px×24px padding, z-30 (the bat layer's z-2 sits far below). Logo: 26px favicon mark + `start` (800, 1.3rem, −0.03em) + `.ng` in `--muted`. Links 0.95rem muted → ink on hover, 0.15s. **Theme toggle:** now an icon-only round control (40×40px, `border-radius: 50%`, card fill, 1px line, drawn SVG sun/moon) matching the real site's round switcher; pressed state is `aria-pressed`. **Mobile ≤760px:** links collapse into an absolute card sheet (12px radius, scrim shadow, full-width rows); the toggle moves inside the sheet; a 44px menu button appears.

### Hero
Centered, 72/80px padding. Mono eyebrow → display h1 with `<br>` before the marked line → muted lead (720px) → single solid `.btn` "Play now". **The signature moment:** the lime highlighter under `<mark>Good games.</mark>` draws itself in once — `::before` at `inset: 62% 0 8% 0`, `scaleY(0→1)` from `left bottom`, `0.7s cubic-bezier(0.22, 1, 0.36, 1)`, 0.25s delay; the gradient `mark` (transparent 62% → lime 62–92% → transparent, verbatim real-site CSS) is the settled state. Dark mode adds `-webkit-text-stroke: 0.075em var(--bg)` + `paint-order: stroke fill` to h1 and mark. Reduced motion: animation removed, highlighter shown fully drawn. *(Provenance: the `mark` gradient is verbatim; the draw-in animation and all hero decoratives are rebuild additions.)*

The hero is the sky for the whimsy layer: mirrored cobwebs hang in the top corners with the settle one-shot, sparkles sit in the side margins, a ghost swells on hover at bottom-right, the CTA carries a small lantern that wiggles on hover/focus, and — in season — the FlyingBats layer drifts through the upper/side margins only, never crossing the headline band, the lead, or the CTA row.

### Buttons
- **Shape:** soft rectangle (10px radius), 12px×22px padding, 700 1rem.
- **Primary (`.btn`):** ink fill, `--on-solid` text; hover → `--solid-hover` fill + `0 0 0 3px var(--lime)` ring; active → `translateY(1px)`, ring cleared. 0.15s transitions.
- **Ghost (`.btn.ghost`):** card fill, 1px `--line` border; hover borders ink. Used for "Docs for your AI (.md)".
- **Halloween CTA (`.btn-hw`, rebuild addition):** the one CTA carries an 18px lantern inline (8px gap); it wiggles once on hover *or* focus-visible (`btn-pumpkin-wiggle`, 0.5s, rotate −9°/7°, `cubic-bezier(0.22, 0.9, 0.3, 1)`); disabled under reduced motion. Never on idle.

### Game card (`.game`)
Anatomy: **cover art** (`.art`, 16/10 aspect, 12px radius, `--shimmer` placeholder; failed loads get `--banner-tint` with a mono uppercase fallback letterform at 2.4rem; image fades in 0.25s once loaded) → **info** (h3 clamped 2 lines + 0.75rem muted description) → **meta row** (muted "by <creator>" ellipsized + play count, then PLAY chip: 700, 6px×12px, 8px radius). A 22px bat may perch on the card corner (`card-bat`, Halloween only). **Springy hover:** `translateY(-4px) scale(1.03)` on `cubic-bezier(0.34, 1.56, 0.64, 1)` (0.28s) — a real overshoot spring — plus border → ink and the lime sticker shadow `6px 8px 0 var(--lime)`; cover scales 1.04 and PLAY fills lime with `--on-lime` text. Reduced motion: transitions off, transform suppressed. Mobile ≤600px: PLAY becomes a full-width ink bar (10px radius, `--on-solid-accent` text).

### A–Z index (`.az-games`)
A `<details>` styled as a card: 18px radius, 1px line; summary row 14px×18px/600 with a masked 10×7 drawn chevron (muted) rotating 180° over 0.2s. List: `columns: 3 200px`, 24px column gap, 0.95rem entries, hover underline (offset 3px), creator in muted 0.85rem. Every entry is a real game credited "by <creator>" — names are never fabricated.

### How-step chips (`.how li::before`)
Each step card (18px radius, 22px padding) opens with a numbered chip: mono 0.8rem, `--banner-tint` fill, 6px radius, 3px×8px, content `"0" counter(step)` → 01…04. Body: 1.15rem bold + muted 1.55 span; inline `code` wraps (`white-space: normal`). The how section carries a tilted GamepadDoodle (−8°) and, in season, a candy-corn mark.

### FAQ (`.faq`)
6 `<details>` cards, 10px apart, 18px radius, 1px line; shared summary/chevron treatment; answer paragraphs muted, 1.6 line-height, 18px×16px padding.

### Footer
`--line` top rule, grid 1.6fr + 3×1fr, 32px gaps. Brand column: 1.35rem logo + 34ch muted mission line. Column headings mono 0.72rem uppercase +0.14em muted; links ink/600, hover underline. Base row: hairline top, 0.85rem, split "© 2026 start.ng" / "Games from Nigeria and across Africa.", stacking ≤760px. In season a muted cobweb and a lime bat hang in its top-right corner.

### Whimsy layer (`.sngw-` kit, `src/components/startng-whimsy/`) — rebuild addition
The sanctioned decorative layer. Rules, all evidenced in `startng-whimsy.css`:
- **Namespace:** everything under `.sngw-`; owned by the whimsy agent, never merged into global stylesheets.
- **Token-only colour:** components read `--ink/--muted/--lime/--line/--card` via local aliases with light-mode fallbacks (`--sngw-ink: var(--ink, #292a23)` etc.); `--sngw-fill-*` / `--sngw-stroke-*` utilities. The sole new hue is the scoped pumpkin orange (above).
- **Drawn SVG only:** every motif is hand-authored inline SVG path data.
- **Inert by construction:** `aria-hidden="true"`, `focusable="false"`, `pointer-events: none` — decoratives can never take focus or clicks.
- **Placement discipline:** corner accents sit *outside* the anchor's corner (em-based −0.6em/−0.7em; anchor needs `position: relative`); backdrops are sparse corner marks (22–30px insets, optional `frame` marks, `flip` mirror) that hide ≤700px.

#### Motion grammar
1. **One-shot entrances (opt-in, run once, `both` fill, `--sngw-delay` stagger):** sparkle settle-in (`sngw-twinkle` 900ms + satellite `sngw-pop` 600ms at +240ms); cobweb settle (`sngw-web--settle`, 800ms `cubic-bezier(0.22, 0.9, 0.3, 1)` — the web drops the last inch of silk: `translate 0 −10px → 0 2px → −1px → 0`, `rotate −5° → 2° → −1° → 0`, keyframed on the individual `translate`/`rotate` properties so it composes with the mirrored cobwebs' inline `transform: scaleX(-1)` rather than replacing it). **Nothing loops.**
2. **Hover replies (interaction-triggered, never idle):** opt-in via a `.sngw-anchor` ancestor (hero, `#games`, see-all row, how are anchors). Sparkles replay twinkle/pop on anchor hover; the pumpkin lantern wiggles (`sngw-wiggle`, 0.5s, rotate −7°/5°); the bat does a wing-flap settle (`sngw-flap`, 0.6s, scale 1.12×0.82 → 0.94×1.1); Bat/Ghost variants add a one-shot swoop (`sngw-swoop`, 700ms, ≤3px rise) and boo (`sngw-boo`, 600ms, scale 1.08); squiggle accents wiggle twice (260ms ×2); a 14px hover-twinkle sparkle sits by the See-all button and fires on row hover. Lifts stay ≤3px and 150–200ms.
3. **The one ambient loop — FlyingBats (explicit user-ordered exception):** documented in full below. It is the ONLY continuously-animated element in the kit; no other idle motion is permitted without the same explicit user order.
4. **Reduced-motion guards:** every animation and hover transition has a `prefers-reduced-motion: reduce` block that disables it while keeping the artwork fully visible (the global kill-switch in `index.css` also clamps all durations to 0.01ms).

#### FlyingBats (`FlyingBats.jsx` + `.sngw-batfly*`) — the ONE continuously-animated element (explicit user-ordered exception)
- **The swarm:** exactly 5 bats — 4 ink silhouettes + 1 lime cousin (bat `d`, ink eyes) — at 16–30px, svg `opacity: 0.9`. Same seasonal silhouette as the Halloween Bat, redrawn with a nested wing group so the flap can scale the wings alone.
- **Flight loops:** slow, closed-loop drift paths (`0% == 100%`, seamless), each bat with its own duration, shape and negative delay so the swarm never looks synced: `a` 15s @ −3s, `b` 19s @ −11s, `c` 13s @ −6.5s, `d` 17s @ −1.5s, `e` 13.5s @ −16s, all `ease-in-out infinite`. **Negative delays start every bat mid-loop — there is no take-off moment on load.** Amplitudes are small (≤64px translate) with gentle banking (≤8deg).
- **Wing flap:** a soft squash on the nested wing `<g>` only — `sngw-wingbeat` `scale(1.05, 0.86)` at 50%, `ease-in-out infinite`, tempo per bat via `--sngw-wing-ms` (1300/1050/1500/1400/1150ms, default 1200ms). It loops only as part of the flight and dies with it under reduced motion.
- **Layer:** `.sngw-batfly` absolute `inset: 0`, `z-index: 2` (above the backdrop, below the nav's z-30), `pointer-events: none`, `aria-hidden` on the layer and each svg.
- **Confinement:** paths are tuned to the hero's geometry — base spots in the top ~28% (`top: 6–23%`) and outer ~10% side margins (`left: 2.5–9.5%`, `right: 3.5–7%`); bats never cross the headline, lead, or CTA row.
- **Reduced motion:** `animation: none` on both `.sngw-batfly__bat` and `.sngw-batfly__wings` — flight and flap fully stop and the bats sit static at their base spots.

### Halloween layer (`Halloween.jsx`, season-gated) — rebuild addition
- **Switches:** `export const HALLOWEEN = true` in `Halloween.jsx` (flip to false after the season and the whole layer disappears, returning the PixelTrail doodles beside "See all"). The CSS also honours a `data-halloween` opt-in on `<html>` with `data-halloween-disabled` opt-out for the alternate `Hallowhimsy` motif set (Oct 25–31 window).
- **Motifs:** `Bat` (scallop-wing silhouette, ink or lime, optional hover swoop), `Ghost` (duo: lime body + ink face, optional hover boo), `Pumpkin` (lantern with carved ink face; duo body reads `--sngw-lantern`, which resolves to the scoped pumpkin orange `#e8641e` in both themes), `Cobweb` (quarter-web in muted strokes, optional settle one-shot), `CandyCorn` (ink/card/lime, how-section corner).
- **Placement:** hero corners (cobwebs top-left/top-right, ghost bottom-right), one bat per featured card, cobweb + lime bat in the footer corner, candy corn in how, lantern inside the CTA, pumpkin beside the see-all row.
- **Motion:** hover replies only (wiggle/flap/swoop/boo, above) — no idle animation; all guarded by reduced motion.
- **Mobile hideouts:** ≤640px the hero cobwebs + hero bats, the whole `.sngw-batfly` layer, the see-all pumpkin, the see-all trail dots, and the see-all sparkle drop out; a further ≤760px App.css list hides hero web/bat/ghost, how web/corn, footer web/bat, `card-bat`, and the see-all trail — narrow viewports keep the copy's room and the small inline motifs.

## Do's and Don'ts

### Do:
- **Do** consume tokens from `src/index.css` and let themes switch via `[data-theme="dark"]` — never hardcode a theme's hex in a component.
- **Do** keep every card at 1px `--line` border with ≤18px radius; darken the border to ink on hover instead of adding depth.
- **Do** use `--lime` only where it signals: highlighter, focus/hover rings, PLAY chip, step chips, selection, the one lime bat.
- **Do** write decorative SVGs as drawn paths marked `aria-hidden="true" focusable="false"` with `pointer-events: none`, coloured only through the `.sngw-*` aliases.
- **Do** gate every animation behind `prefers-reduced-motion` and keep motion one-shot or hover-triggered — with the single, user-ordered exception of the FlyingBats loop (and its opt-in `.sngw-idle` ≤3px float cousin, unused on the homepage).
- **Do** credit real creators ("by <name>") with real game data; fabricating games or names is out of bounds.

### Don't:
- **Don't** introduce a new colour outside the inherited vocabulary (the only exception is the scoped Halloween `--sngw-pumpkin #e8641e`, in season only).
- **Don't** use glassmorphism, glow, gradient chrome, floating noise, soft drop shadows, or radii above 18px — all refused by brief.
- **Don't** add a second ambient loop: FlyingBats is the one continuous animation, user-ordered; everything else must be one-shot or hover-triggered, and nothing ships without its reduced-motion guard.
- **Don't** ship stock/emoji/icon-font decoratives, or place a decorative mark where it can cover text, intercept a click, or take focus (flying bats stay in the hero's upper/side margins).
- **Don't** exceed the sticker-lift vocabulary for depth (no elevation tiers, no blurred shadows).
- **Don't** let the Halloween layer touch UI chrome, text colour, or focus states — it decorates corners only, and clears out of narrow viewports entirely.

## Addendum — super-whimsy pass (Oct 28, MAIN)

Shipped after the flight layer; all palette-clean, all one-shot or interaction-triggered:

- **SparkleTrail** (`SparkleTrail.jsx`): pointer-driven sparkle pops — fixed overlay `z-80`, spawns ≤9/s on `pointermove` (`pointer: fine` only), ≤12 concurrent, each a 520–700ms one-shot scale+fade in lime / pumpkin / ink. Entirely off under reduced motion.
- **Scroll reveal** (`reveal.js` + `.sngw-rise`): one-shot rise+fade (14px, ~0.5s) on featured cards (60ms stagger steps), how-step chips (70ms), and the three section H2s. The hiding class is armed from JS only — without JS or under reduced motion everything is simply visible; a 900ms failsafe force-reveals all.
- **Theme toggle**: the sun/moon icon is keyed and remounts on every flip, replaying a one-shot `sngw-twirl` (−140°→0°, 0.45s); `WhimsyBurst` (one-shot pixel-confetti poof, ~84px, from the kit) fires from the button centre on each toggle.
- **FAQ**: `details[open]` plays the shared `sngw-wiggle` once on that row's pumpkin marker.

Motion-policy status: still exactly ONE looping animation on the page (FlyingBats, user-ordered). Everything else is one-shot or responds to user input.
