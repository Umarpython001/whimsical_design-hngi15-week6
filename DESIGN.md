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
  theme-toggle:
    backgroundColor: "{colors.card}"
    textColor: "{colors.muted}"
    rounded: "{rounded.pill}"
    padding: "8px 14px"
---

# Design System: start.ng

## Overview

**Creative North Star: "The Neighbourhood Arcade"**

This system is **inherited, not invented**: every token is copied verbatim from the real site https://start.ng (verified against `.impeccable/research/startng-real.css`), and the rebuild adds exactly two thin layers on top — a whimsy decorative kit and a time-boxed Halloween layer. The world is a warm neighbourhood arcade on cream paper: ink-black-olive type, a single signature lime doing real work, cream cards on 1px olive lines. It deliberately refuses the cold game-store default (dark glassy tiles, gradient heroes, anonymous thumbnail feeds) and the brief bans glassmorphism, glow, floating noise, and oversized rounding outright. Good vibes come from craft — the lime highlighter, confident 800-weight type, tactile cards — never from clutter.

**Key Characteristics:**
- Cream `#f6f5ee` ground, `#fffefa` cards, ink `#292a23` type, one lime accent `#d8fd71`; dark mode is the same shop at night (olive ground, cream ink), both themes equal citizens.
- Flat-by-default surfaces on 1px `--line` borders; depth appears only as a hard lime offset shadow or a scrim — never soft glow.
- One authored motion moment per visit: the hero highlighter draws itself in once; everything else is ≤300ms state response, all guarded by `prefers-reduced-motion`.
- Decorative art is hand-drawn inline SVG only (`.sngw-` kit), always `aria-hidden`, never interactive, never a new colour.

### Named Rules

**The Verbatim Token Rule.** The colour vocabulary is binding, copied from the real start.ng stylesheet. New surfaces consume tokens; they never introduce new hues. The single sanctioned exception is the Halloween layer's pumpkin orange, which is scoped, named, and time-boxed.

**The One Lime Rule.** `--lime` is the only loud colour on any screen, and it always does real work: highlighter `mark`, focus ring, hover ring, PLAY chip, step chip. If lime is decorating instead of signalling, delete it.

**The Drawn-Not-Stock Rule.** Every decorative mark is hand-drawn inline SVG in the page's own palette. No icon fonts, no stock emoji, no raster clip-art, no `<img>` decoratives.

## Colors

A warm paper-and-ink palette with exactly one accent. Light is cream paper; dark is the same room with the lights off — olive ground, cream ink, same lime. Values below are verbatim from the real site (`.impeccable/research/startng-real.css`), defined in `src/index.css` under `:root` and `:root[data-theme="dark"]`.

### Primary
- **Signature Lime** (`--lime #d8fd71`): the accent. Highlighter `mark` underline, `.btn:hover` ring, PLAY chip fill on card hover, `.how` step chips sit on its wash (`--banner-tint`), selection background, favicon glyph. On lime, text is always `--on-lime #292a23`.

### Neutral
- **Cream Ground** (`--bg #f6f5ee` / dark `#292a23`): page ground and the nav blur's base.
- **Card Cream** (`--card #fffefa` / dark `#33342c`): every card, menu, expander, FAQ panel.
- **Near-Black-Olive Ink** (`--ink #292a23` / dark `#f6f5ee`): display type, solid buttons, hover borders, drawn-SVG line work.
- **Olive Grey Muted** (`--muted #6b6c63` / dark `#b0b1a6`): secondary copy, nav links, meta rows, mono eyebrows.
- **Hairline** (`--line #e4e2d6` / dark `#4a4b41`): every 1px border, footer rules, scrollbar.
- **Body-2** (`--text-2 #3c3d35` / dark `#dedcd0`): denser body copy on inherited surfaces.
- **Shimmer** (`--shimmer #efede2` / dark `#44453b`): cover-art placeholder ground.
- **Banner Tint** (`--banner-tint #f1fbd2` / dark `#343b27`): lime wash behind step chips; quiet accent fills.
- **Dots** (`--dot rgba(41,42,35,.16)` / dark `rgba(246,245,238,.12)`): dotted texture, kept available, used sparingly.
- **Code** (`--code-bg #292a23` + `--legendary-bg #fafff0` text): inline `code` chips — dark olive pill, near-white-lime text, both themes.

### State & Semantic (inherited vocabulary)
- **Danger** `--danger #c0392b`/dark `#ff8a7d`; **OK** `--ok #2e7d32`/dark `#7fd884`.
- **Warn** trio `--warn-ink #8a6d00`, `--warn-bg #fff7d6`, `--warn-line #f0d77a` (dark: `#e6c34d`, `#4a4220`, `#7a6a2a`).
- **Bad** trio `--bad-bg #fdecea`, `--bad-line #f3b8b0` (dark: `#4a2a26`, `#7d4a43`).

### Rarity scale (game metadata, inherited)
`--r-common #75766c`, `--r-uncommon #278546`, `--r-rare #346fdf`, `--r-epic #8e4fd6`, `--r-legendary #a9630a`, `--r-limited #db2967` (dark: `#a6a79b`, `#5fcf82`, `#6f9bf0`, `#b383ef`, `#f5a640`, `#f27aa3`). Used via `.r-*` classes setting a local `--r`.

### Art overlays (cover imagery)
`--on-art #fff`, `--art-shade rgba(0,0,0,.5)`, `--art-text-shadow rgba(0,0,0,.35)` — text legibility over game cover art.

### Halloween exception (time-boxed)
- **Pumpkin Orange** (`#e8641e`): the one extended hue, defined only as `--sngw-pumpkin` inside `.sngw-hw`, fill-only, Halloween layer Oct 28–31. It never touches UI chrome, text, or tokens.

### Named Rules

**The Verbatim Token Rule.** See Overview. Values are never re-derived, approximated, or "improved" — including the `rgba()` scrims and dots, which stay in their native format.

**The One Lime Rule.** See Overview.

## Typography

**Display & Body Font:** Helvetica Neue system stack — `"Helvetica Neue", Helvetica, Arial, system-ui, sans-serif` (verbatim from the real site; no webfont is shipped).
**Label/Mono Font:** `ui-monospace, "SF Mono", Menlo, Consolas, monospace` (`--mono`) — eyebrows, step numbers, code, footer column headings.

**Character:** a plain-spoken Helvetica voice turned up loud: 800-weight, tight-tracked display; mono does all the quiet labelling. Warm, not decorative.

### Hierarchy
- **Display** (800, `clamp(2.8rem, 9vw, 6.2rem)`, line-height 0.98, tracking −0.055em): hero h1 only, two lines, second line carries the highlighter `mark`.
- **Headline** (700, 2.1rem, tracking −0.035em; 1.6rem ≤760px): section h2s.
- **Title** (700, 1.3rem, tracking −0.02em): about h3s, footer logo (1.35rem variant of the 1.3rem nav logo).
- **Card title** (700, 1.05rem→1rem mobile, tracking −0.015em): game names, clamped to 2 lines.
- **Lead** (400, 1.2rem, line-height 1.7, muted, max-width 720px): hero and about paragraphs.
- **Body** (400, 1rem, line-height 1.5): default; FAQ answers 1.6 line-height; step spans 1.55.
- **Label/Mono** (`--mono`, 0.8rem, +0.28em tracking, uppercase): hero eyebrow. Footer h2s use mono 0.72rem at +0.14em. Step chips use mono 0.8rem.
- **Meta** (0.82rem, muted): card "by <creator>" and play counts; 0.75rem descriptions.

### Named Rules

**The Mono-Sings-quiet Rule.** Mono type is always small, tracked-out, uppercase, and muted — it labels, it never shouts. Display work stays in the Helvetica stack.

## Layout

Single 960px container (`max-width: 960px; padding: 0 24px`) on a centered, vertically-sectioned page: sticky nav → hero (72px/80px padding) → `#games` grid → A–Z expander → how (96px/72px) → about/FAQ → footer. The game grid is `repeat(auto-fill, minmax(200px, 1fr))` with 16px gaps (12px, 2 columns ≤600px); the how steps are `repeat(auto-fit, minmax(200px, 1fr))`. Footer is a `minmax(0,1.6fr) repeat(3, minmax(0,1fr))` grid, 32px gaps, collapsing to 2 columns with the brand full-width ≤760px. `scroll-padding-top: 84px` reserves the sticky nav's height for anchor jumps. Breakpoints actually used: **760px** (nav collapses to menu button; footer 2-col; type steps down), **600px** (2-col game grid, full-width PLAY chip), **700px** (whimsy corner backdrops hide), **640px** (Halloween corner motifs hide).

## Elevation & Depth

Flat-by-default with **hard, structural shadows only** — no ambient blur anywhere in the UI. Depth is expressed three ways: (1) the lime **offset shadow** `6px 8px 0 var(--lime)` on lifted cards — a printed-sticker lift, not a float; (2) the **scrim** `--scrim` under the mobile menu; (3) the nav's 1px hairline `0 1px color-mix(in srgb, var(--line) 70%, transparent)`. Cover art gets `--art-shade`/`--art-text-shadow` for text-over-image legibility only. Glow, glass, and soft drop shadows are refused by brief.

### Shadow Vocabulary
- **Sticker lift** (`box-shadow: 6px 8px 0 var(--lime)`): `.game:hover` only, paired with the springy transform. Never on rest state, never on non-cards.
- **Focus ring** (`box-shadow: 0 0 0 3px var(--lime)`): `.btn:hover` halo; keyboard focus uses the global outline instead (below).
- **Hairline under nav** (`0 1px color-mix(in srgb, var(--line) 70%, transparent)`): the sticky bar's only separation.
- **Menu drop** (`0 10px 24px var(--scrim)`): mobile nav sheet.

### Named Rules

**The Hard-Shadow Rule.** Shadows are flat colour offsets or hairlines. A blurred, coloured, or glowing shadow has no place in this system.

## Shapes

Rounded but disciplined: the card radius ceiling is **18px** (constraint D8: cards ≥1px line, ≤18px radius). Scale: cards/expanders 18px → cover art 12px → buttons 10px → small chips/menu items 8px → step chips 6px → inline code 5px → full-round for pills (theme toggle) and circles. Every card surface carries a 1px `--line` border; borders darken to `--ink` on hover rather than thickening. Form language is friendly-print: rounded rectangles with drawn-SVG doodles kissing their corners (offset −0.6em/−0.7em, never overlapping content).

## Components

### Navigation
Sticky, full-bleed blurred cream bar: `::before` spans to viewport edges, `background: color-mix(in srgb, var(--bg) 86%, transparent)` + `backdrop-filter: blur(12px)`, 1px hairline shadow, 14px×24px padding, z-30. Logo: 26px favicon mark + `start` (800, 1.3rem, −0.03em) + `.ng` in `--muted`. Links 0.95rem muted → ink on hover, 0.15s. **Theme toggle:** pill (999px, card bg, 1px line, 0.85rem/600) that darkens border+text to ink on hover; pressed state is `aria-pressed`, icons are drawn SVG. **Mobile ≤760px:** links collapse into an absolutely-positioned card sheet (12px radius, scrim shadow, full-width 10px×16px rows); the toggle moves inside the sheet (`in-menu`), a 44px menu button appears.

### Hero
Centered, 72/80px padding. Mono eyebrow ("Big imagination. Played everywhere.") → display h1 with `<br>` before the marked line → muted lead (720px) → single solid `.btn` "Play now". **The signature moment:** the lime highlighter under `<mark>Good games.</mark>` draws itself in once — `::before` at `inset: 62% 0 8% 0`, `scaleY(0→1)` from `left bottom`, `0.7s cubic-bezier(0.22, 1, 0.36, 1)`, 0.25s delay; the gradient `mark` (transparent 62% → lime 62–92% → transparent) sits beneath as the settled state. Dark mode adds `-webkit-text-stroke: 0.075em var(--bg)` + `paint-order: stroke fill` to h1 and mark. Reduced motion: animation removed, highlighter shown fully drawn. Decorative sparkles/bats are absolutely positioned around the hero and never near text baselines.

### Buttons
- **Shape:** soft rectangle (10px radius), 12px×22px padding, 700 1rem.
- **Primary (`.btn`):** ink fill, `--on-solid` text; hover → `--solid-hover` fill + `0 0 0 3px var(--lime)` ring; active → `translateY(1px)`, ring cleared. 0.15s transitions.
- **Ghost (`.btn.ghost`):** card fill, 1px `--line` border; hover keeps card fill but borders go ink. Used for "Docs for your AI (.md)".

### Game card (`.game`)
Anatomy, top to bottom: **cover art** (`.art`, 16/10 aspect, 12px radius, `--shimmer` placeholder; unloading state `--banner-tint` with a mono uppercase fallback letterform at 2.4rem; image fades in 0.25s once loaded) → **info** (h3 clamped 2 lines + 0.75rem muted description) → **meta row** (muted "by <creator>" with ellipsis + play count, then the PLAY chip: 700, 6px×12px, 8px radius). **Springy hover:** `translateY(-4px) scale(1.03)` on `cubic-bezier(0.34, 1.56, 0.64, 1)` (0.28s) — a real overshoot spring — plus border → ink and the lime sticker shadow `6px 8px 0 var(--lime)`; the cover image scales 1.04 and the PLAY chip fills lime with `--on-lime` text. Reduced motion: transitions off, transform suppressed. Mobile ≤600px: PLAY chip becomes a full-width ink bar (10px radius, `--on-solid-accent` text).

### A–Z index (`.az-games`)
A `<details>` styled as a card: 18px radius, 1px line, summary row 14px×18px/600 with a masked chevron (10×7 drawn chevron in muted) rotating 180° over 0.2s. List: `columns: 3 200px`, 24px column gap, 0.95rem entries with hover underline (offset 3px), creator in muted 0.85rem. Every entry is a real game credited "by <creator>" — names are never fabricated.

### How-step chips (`.how li::before`)
Each step card (18px radius card, 22px padding) opens with a numbered chip: mono 0.8rem, `--banner-tint` fill, 6px radius, 3px×8px, content `"0" counter(step)` → 01…04. Step body: 1.15rem bold + muted 1.55 span; inline `code` allowed to wrap (`white-space: normal`).

### FAQ (`.faq`)
6 `<details>` cards, 10px apart, 18px radius, 1px line; summary as A–Z (shared chevron); answer paragraph muted, 1.6 line-height, 18px×16px padding.

### Footer
`--line` top rule, grid 1.6fr + 3×1fr, 32px gaps. Brand column: 1.35rem logo + 34ch muted mission line. Column headings: mono 0.72rem uppercase +0.14em muted; links ink/600 with hover underline. Base row: hairline top, 0.85rem, split "© 2026 start.ng" / "Games from Nigeria and across Africa.", stacking ≤760px.

### Whimsy layer (`.sngw-` kit, `src/components/startng-whimsy/`)
The sanctioned decorative layer. Rules, all evidenced in `startng-whimsy.css`:
- **Namespace:** everything under `.sngw-`; owned by the whimsy agent, never merged into global stylesheets.
- **Token-only colour:** components read `--ink/--muted/--lime/--line` via local aliases with light-mode fallbacks (`--sngw-ink: var(--ink, #292a23)` etc.); `--sngw-fill-*` / `--sngw-stroke-*` utilities. **No new colours** (pumpkin orange is the sole, scoped Halloween exception).
- **Drawn SVG only:** every motif is hand-authored inline SVG path data.
- **Inert by construction:** `aria-hidden="true"`, `focusable="false"`, `pointer-events: none` — decoratives can never take focus or clicks.
- **One-shot motion only:** entrance animations (`sngw-twinkle` 900ms, `sngw-pop` 600ms) run once with `both` fill and an opt-in `--sngw-delay`; **nothing loops**. Hover replies (sparkle replay, 2px pad lift at 180ms) are interaction-triggered, not idle. Lifts stay ≤3px and ≤200ms.
- **Reduced-motion guards:** every animation and hover transition has a `prefers-reduced-motion: reduce` block that disables it while keeping the artwork fully visible.
- **Placement discipline:** corner accents sit *outside* the anchor's corner (−0.6em/−0.7em em-based, anchor needs `position: relative`); backdrops are sparse corner marks (22–30px insets, optional `frame` mid-edge marks, `flip` mirror) that hide entirely ≤700px.

### Halloween layer (`Halloween.jsx`, Oct 28–31)
- **Kill switch:** `export const HALLOWEEN = true` at the top of `src/components/startng-whimsy/Halloween.jsx`; flip to false and the layer disappears (the "see all" PixelTrail doodles return in its place).
- **Scope:** four drawn motifs — `Bat` (scallop-wing silhouette, ink or lime), `Ghost` (card-fill with ink line work; stays visible on all screens), `Pumpkin` (jack-o'-lantern), `Cobweb` (quarter-web with spider, hung at hero's top-left corner). Motifs are placed absolutely in the hero and "see all" row.
- **One new colour:** `--sngw-pumpkin: #e8641e`, defined only inside `.sngw-hw`, consumed only by `.sngw-fill-pumpkin`. Ink/lime/muted come from the page's own tokens.
- **Motion:** hover-reply only — pumpkins wiggle (`sngw-wiggle`, 0.5s), bats flap-settle (`sngw-flap`, 0.6s); no idle animation; all disabled under reduced motion.
- **Small screens:** hero cobweb + bats and the see-all pumpkin hide ≤640px; the inline ghost remains.

## Do's and Don'ts

### Do:
- **Do** consume tokens from `src/index.css` and switch themes automatically via `[data-theme="dark"]` — never hardcode a theme's hex in a component.
- **Do** keep every card at 1px `--line` border with ≤18px radius; darken the border to ink on hover instead of adding depth.
- **Do** use `--lime` only where it signals: highlighter, focus/hover rings, PLAY chip, step chips, selection.
- **Do** write all decorative SVGs as drawn paths marked `aria-hidden="true" focusable="false"` with `pointer-events: none`, coloured only through the `.sngw-*` aliases.
- **Do** gate every animation behind `prefers-reduced-motion` and keep motion one-shot or hover-triggered — never looping.
- **Do** credit real creators ("by <name>") with real game data; fabricating games or names is out of bounds.

### Don't:
- **Don't** introduce a new colour outside the inherited vocabulary (the only exception is the scoped Halloween `--sngw-pumpkin #e8641e`, and only during Oct 28–31).
- **Don't** use glassmorphism, glow, gradient chrome, floating noise, soft drop shadows, or radii above 18px — all refused by brief.
- **Don't** loop, parallax, or auto-play any motion; don't ship an animation without its reduced-motion guard.
- **Don't** ship stock/emoji/icon-font decoratives, or place a decorative mark where it can cover text, intercept a click, or take focus.
- **Don't** exceed the sticker-lift vocabulary for depth (no elevation tiers, no blurred shadows).
- **Don't** let the Halloween layer touch UI chrome, text colour, or focus states — it decorates corners only.
