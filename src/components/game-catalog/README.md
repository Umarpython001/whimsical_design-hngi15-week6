# game-catalog — the start.ng games section component system

Reusable, self-contained build of the start.ng homepage's **#games section**:
heading → featured card grid → "See all N games →" → the A–Z expander.
Data is real (see `games.js`); zero new dependencies; dark-mode + reduced-motion
ready; the styles are scope-rooted on `.gcat` so nothing leaks.

> **Status**: dormant by design (`src/App.jsx` keeps MAIN's `<GamesSection />`
> as the single live `#games`; per MAIN's 14:38 ANSWER this directory is the
> swap-ready alternative + a parts-bin: Leaderboard link, Play pill, seasonal
> hooks are port-able into the live section on REQUEST). Nothing here renders
> on the live page until MAIN imports it.

## Files

| File | Role |
| --- | --- |
| `GameCatalog.jsx` | The section (heading, grid, see-all, A–Z `<details>`, doodles, seasonal layer). |
| `GameCard.jsx` | One game card (cover → letter fallback, title, address, by, Leaderboard, Play pill). |
| `games.js` | Verified data: `featuredGames` (Hangout + top-7 by plays), `communityGames` (188 A–Z entries), `titleCaseFromSlug`. |
| `game-catalog.css` | Scoped styles (tokens, dark theme, responsive, reduced motion, Halloween season). |

## Whimsy layer — "super duper" (user decree, 2026-10-28)

Palette-only, one-shot motion, reduced-motion safe:

- **Sticker-tilt cards** — hover/focus lifts −4px and tilts ±0.5° (alternating
  by row), landing the real site's hard candy shadow (lime, seasonal pumpkin).
- **Springy ink Play pill** — drawn triangle + "Play", lifts −2px on hover with
  a small candy shadow; full-width pill on mobile (real-site behaviour kept).
- **Drawn doodles** — lime squiggle under the heading start + a tiny ink/lime
  arcade joystick at the heading line (desktop only), both aria-hidden.
- **Cascading A–Z reveal** — rows ripple in (capped stagger, one-shot); the
  panel chevron rotates exactly like the real site's.
- **See-all bounce** — button lifts with a candy shadow; the drawn arrow scoots.
- **Halloween season** (`data-season="halloween"`, default `season="auto"` =
  October only, self-off Nov 1): pumpkin candy shadows + pumpkin letter tiles
  + chips + selection tint, a bat that swoops in with a zigzag when the A–Z
  opens, and a cobweb doodle tucked into the panel corner. One extra hue —
  `var(--pumpkin, #e8641e)` — matching WHIMSY's scoped `.sngw-pumpkin`.
- Motion stays short (150–260ms, ease-out; no loops, no idle animation).

## Data provenance (nothing invented)

- `https://api.start.ng/games` — names, creators, covers, `plays`, leaderboard flags (frozen 2026-10-28).
- Homepage SSR capture — A–Z titles/credits verified **188/188 string-for-string** against the live render.
- Live checks: all featured covers return **200**; `hangout.start.ng` is a **404** — The Hangout's real address is `start.ng/hangout` (art: `https://start.ng/hangout-cover.jpg`, verified).
- Only `alt` text is authored (The Hangout) — taken from the site's own OG meta.

## Component props

```jsx
<GameCatalog
  id="games"                    // section id + scroll anchor
  games={featuredGames}         // featured grid records (defaults to games.js)
  allGames={communityGames}     // A–Z records; length drives both counts
  heading="Games from the community"
  seeAllHref="/games"
  bare={false}                  // true = no max-width/padding (use inside your container)
  season="auto"                 // "auto" (October-only), "halloween", "off"
/>

<GameCard game={game} className="" />
```

## Game record shape (`games.js`)

```js
{
  slug: "lagos-bike-rush",       // unique key, derives fallback hrefs
  title: "Lagos Bike Rush",      // display name (verified); falls back to titleCaseFromSlug(slug)
  by: "OBA",                     // creator credit, rendered "by OBA"
  href: "https://lagos-bike-rush.start.ng", // real playable address (card link + Play)
  address: "lagos-bike-rush.start.ng",      // mono address line under the title
  coverUrl: "https://….start.ng/cover.png?(v=…)", // null ⇒ letter tile
  alt: "",                       // "" (decorative) unless a real asset alt exists
  leaderboard: true,             // renders the "Leaderboard" link when true
  gamePageHref: "/games/lagos-bike-rush",   // derived from slug when omitted
  plays: 40,                     // verified metadata (not rendered on cards)
  description: "…",              // verified metadata (not rendered on cards)
  category: "Endless runners",   // OPTIONAL — only shown when provided;
                                 // the API dump carries no categories, so default data doesn't set it
}
```

## Integration (for MAIN — one swap, nothing else)

```jsx
import GameCatalog from './components/game-catalog/GameCatalog.jsx'

// inside <main>, replacing the current <GamesSection /> tag:
<GameCatalog id="games" season="auto" />
```

No other file changes. `game-catalog.css` is imported by `GameCatalog.jsx`.
If your page already provides the 960px container, pass `bare` and keep the
padding on your side. Theme follows `<html data-theme="dark">` (D6); motion
honours `prefers-reduced-motion`; counts derive from `allGames.length`.

## Verification performed (2026-10-28)

- `npx eslint src/components/game-catalog --max-warnings=0` — pass.
- `npm run build` + repo `npm run lint` — pass (dormant dir changes nothing).
- Data: 188/188 A–Z slugs + names + credits byte-identical to the live SSR capture;
  featured set = D4 exactly; all 8 destination/cover URLs HTTP 200.
- Render/interaction captures of the isolated section: 1440/390, light/dark,
  hover/focus, reduced-motion, and no-cover fallback (scrathh harness, see board log).
