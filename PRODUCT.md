# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Casual players with a few spare minutes who want a delightful game they can open in a browser tab and play instantly — mostly Nigerian/African visitors looking for Naija-themed web games. Community game-creators (HNG community and independent makers across Africa) are the second audience: they publish their games here.

## Product Purpose

start.ng is "Nigeria's home for free browser games, built by the HNG community" (tagline: **Good vibes. Good games.**). Every community game is free to play in the browser, no download, each lives at its own `<slug>.start.ng` address. The homepage's job: get a visitor onto a playable game in seconds, and show makers how to publish theirs.

## Positioning

One home where community-built Naija-themed browser games (danfo rush hour, jollof catching, Lagos markets) are all deployed, discoverable, and addressable at `yourgame.start.ng` — publishing is one API call with a public GitHub repo, no key needed, docs readable by an AI (`/docs.md`). A neighboring product could not truthfully copy the existing catalog of 189 community games plus the Hangout multiplayer hub and the daily tournament.

## Operating Context

- Games are judged against the live real site: https://start.ng (SSR HTML + `--assets` CSS studied; API `https://api.start.ng/games` supplies names, creators, descriptions, `cover_url`, `plays`, leaderboard flags).
- Play data is live (games updated daily; "1–20 of 189" pagination on /games).
- The rebuild in this repo is a single-page React + Vite app (homepage only) deployed locally by the user; the real site remains the upstream reference.

## Capabilities and Constraints

- Homepage sections, in order (real site): sticky `nav` (logo `start.ng`, links Games / Tournament / Creators / Docs) → `hero` (eyebrow "Big imagination. Played everywhere.", h1 "Good vibes. *Good games.*" with lime highlighter `<mark>`, lead, "Play now" → #games) → `#games` ("Games from the community" + featured cards + "See all 188 games →" + A–Z `<details>` of every game "by <creator>") → `#how` ("Got a game? Put it on start.ng" — 4 steps: Build it / Push it to GitHub / Publish it / Approve it once; CTAs "Read the docs" + ghost "Docs for your AI (.md)") → `#about` (about copy, "More about start.ng →", FAQ with 6 `<details>`) → `site-footer` (brand + Play / Make games / About columns + "© 2026 start.ng" "Games from Nigeria and across Africa.").
- Theme system: `data-theme="dark|light"` on `<html>`, persisted under `localStorage.theme`, applied pre-paint to avoid flash; `color-scheme` follows.
- Real-site hero card data comes from the API: creator credit `by <name>`, cover images per game, descriptions, play counts.
- Real games/creators/descriptions must not be fabricated into claims — the A–Z list and featured picks use authentic entries with correct credits.
- The Hangout (by start.ng) is the site's own multiplayer game and OG image subject (`hangout-cover.jpg`), pinned first on /games.

## Brand Commitments

- Name and logo: **start.ng** ("start" bold + ".ng"), favicon = lime rounded square with dark play glyph (real asset fetched: `https://start.ng/favicon.svg`).
- Tagline voice: "Good vibes. Good games." — warm, playful, plain-spoken; eyebrow in tracked uppercase mono.
- Colour system is binding (real-site tokens): cream `--bg #f6f5ee`, card `#fffefa`, ink `#292a23`, muted `#6b6c63`, line `#e4e2d6`, signature lime `--lime #d8fd71`, highlighter-gradient `mark`, dark equivalents (bg `#292a23`, card `#33342c`, ink `#f6f5ee`, line `#4a4b41`).
- Bound motifs: lime highlighter underline on `mark`; warm cream/dark-olive wood-panel vibe; NO new colour scheme introduced.
- The user's brief (master_prompt.md) is binding: visual refinement, not redesign — preserve section order, content, links, themes; add a subtle whimsical arcade feel; no glassmorphism/glow/floating-noise/oversized rounding; respect reduced motion.

## Evidence on Hand

- `/tmp/opencode/startng-real.css` — real stylesheet (105 KB) with all tokens and component rules.
- `/tmp/opencode/all-games.json` — full 189-game API dump (name, by, description, cover_url, plays, leaderboard, repo).
- Homepage + /games SSR HTML captures (real copy quoted verbatim above).
- `playwright` browser caches exist locally (chromium-1248), so rendered verification is possible.

## Product Principles

1. Play in seconds: any path from first paint to a running game should be one glance and one click.
2. The community is the catalogue: real names, real covers, real credits, always credited "by <creator>".
3. Good vibes are visual, not noisy: warmth comes from craft (lime highlighter, confident type, tactile cards) never from clutter, glow or fake marketing.
4. Makers are first-class: the "put it on start.ng" path stays honest, concrete, and one click from the docs.
5. Both themes deserve the real experience: light cream and dark olive are equals, with no flash on load.

## Accessibility & Inclusion

- Keyboard-reachable nav, cards, expanders, FAQ; visible focus states.
- `prefers-reduced-motion` respected for all motion.
- No account needed to play (sign-in only for scores/leaderboards) — keep the homepage friction-free. Naija copy kept in plain English.
