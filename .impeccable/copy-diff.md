# Copy-fidelity diff — built page vs `home-ssr.html`

Source of truth: `.impeccable/research/home-ssr.html` (live start.ng SSR capture).
Target: production build served at `http://localhost:4173/` (`npm run build && npm run preview`).
Method: automated DOM text check (`/tmp/opencode/pw/make-copy-diff.mjs`). Text is normalised for
whitespace and typographic quotes before comparison; `details` are opened first.

**Result: 47/47 strings PASS.**

| # | Where | Element | Expected (verbatim) | Result |
|---|-------|---------|---------------------|--------|
| 1 | Nav | start.ng wordmark | start.ng | PASS |
| 2 | Nav | Games link | Games | PASS |
| 3 | Nav | Tournament link | Tournament | PASS |
| 4 | Nav | Creators link | Creators | PASS |
| 5 | Nav | Docs link | Docs | PASS |
| 6 | Hero | Eyebrow | Big imagination. Played everywhere. | PASS |
| 7 | Hero | H1 line 1 | Good vibes. | PASS |
| 8 | Hero | H1 line 2 (lime mark) | Good games. | PASS |
| 9 | Hero | Lead paragraph | Games made by builders in the community. Each one lives at its own start.ng address. Pick one and play right in your browser. | PASS |
| 10 | Hero | Primary CTA | Play now | PASS |
| 11 | #games | Section heading | Games from the community | PASS |
| 12 | #games | See-all button | See all 188 games | PASS |
| 13 | #games | A–Z summary | Every game on start.ng, A to Z (188) | PASS |
| 14 | #how | Section heading | Got a game? Put it on start.ng | PASS |
| 15 | #how | Step 1 title | Build it | PASS |
| 16 | #how | Step 2 title | Push it to GitHub | PASS |
| 17 | #how | Step 3 title | Publish it | PASS |
| 18 | #how | Step 4 title | Approve it once | PASS |
| 19 | #how | Step 1 body | Any static browser game: HTML, JavaScript, three.js, Phaser. Players bring their start.ng character, scores and friends. | PASS |
| 20 | #how | Step 2 body | A public repo with a ready-to-play index.html at the top or in dist/, plus a cover.png for its card. | PASS |
| 21 | #how | Step 3 body | One API call with your repo link, no key needed. Or hand your AI start.ng/docs and let it do the lot. | PASS |
| 22 | #how | Step 4 body | Open the link you get back and it's live at yourgame.start.ng, with its own leaderboard if you want one. After that, every push updates it. | PASS |
| 23 | #how | Docs CTA | Read the docs | PASS |
| 24 | #how | AI docs CTA | Docs for your AI (.md) | PASS |
| 25 | #about | Section heading | About start.ng | PASS |
| 26 | #about | Paragraph 1 | start.ng is Nigeria's home for browser games, built by the HNG community. Every game is free to play in your browser with no download, and many are made in Naija: danfo rush hour, jollof catching, Lagos markets and more. | PASS |
| 27 | #about | Paragraph 2 | We're also building a home for web games from across Africa. If you make games anywhere on the continent, you can put yours on start.ng for free. | PASS |
| 28 | #about | More link | More about start.ng | PASS |
| 29 | #about | FAQ heading | Questions | PASS |
| 30 | FAQ | Q1 | What is start.ng? | PASS |
| 31 | FAQ | A1 | A home for free browser games made by the HNG community. Each game has its own address, like yourgame.start.ng, and you play it right in your browser. | PASS |
| 32 | FAQ | Q2 | Is it free? | PASS |
| 33 | FAQ | A2 | Yes. Every game on start.ng is free to play in your browser, with nothing to download. | PASS |
| 34 | FAQ | Q3 | Are there Nigerian or African web games? | PASS |
| 35 | FAQ | A3 | Yes. Many games here are Naija-themed, from danfo rush hour to jollof and Lagos markets, and we welcome games from across Africa. | PASS |
| 36 | FAQ | Q4 | Do I need an account to play? | PASS |
| 37 | FAQ | A4 | No. Sign in to get your start.ng character, keep your scores on the leaderboards and join the daily tournament. | PASS |
| 38 | FAQ | Q5 | What is the daily tournament? | PASS |
| 39 | FAQ | A5 | Every day a few start.ng games are picked for 24 hours, and the best player wins. Points count towards the overall leaderboard. | PASS |
| 40 | FAQ | Q6 | How do I put my game on start.ng? | PASS |
| 41 | FAQ | A6 | Push your browser game to a public GitHub repo, publish it with one API call and approve it once. It goes live at yourgame.start.ng. The docs have every step. | PASS |
| 42 | Footer | Brand paragraph | Nigeria's home for browser games, made by the community and by creators across Africa. | PASS |
| 43 | Footer | Column heading | Play | PASS |
| 44 | Footer | Column heading | Make games | PASS |
| 45 | Footer | Column heading | About | PASS |
| 46 | Footer | Base line | © 2026 start.ng | PASS |
| 47 | Footer | Base line | Games from Nigeria and across Africa. | PASS |

## Links (10/10 PASS)

| Destination | Meaning | Result |
|---|---|---|
| `/games` | Games / All games | PASS |
| `/tournament` | Tournament | PASS |
| `/creators` | Creators | PASS |
| `/docs` | Docs / Read the docs / Build a game | PASS |
| `/docs.md` | Docs for your AI (.md) | PASS |
| `/about` | About start.ng | PASS |
| `/leaderboard` | Leaderboard (footer) | PASS |
| `/categories` | Categories (footer) | PASS |
| `/hangout` | The Hangout (footer) | PASS |
| `#games` | Play now anchor | PASS |

## Catalogue checks

- Featured cards rendered: **8** (The Hangout + top-7 by plays, D4).
- A–Z entries: **188**; links to `/games/<slug>`: **188**.
- Featured "Play" links absolute `https://`: **8/8** PASS.
- Covers hotlinked from each game's own address: `https://start.ng/hangout-cover.jpg`, `https://lagos-bike-rush.start.ng/cover.png?v=1792309258`, `https://boju-boju.start.ng/cover.png?v=1792338368`, `https://jemi-game-arcade.start.ng/cover.png?v=1792287546`, `https://job-hunt.start.ng/startng-cover.webp?v=1792208405`, `https://tesla-skyrun.start.ng/cover.png?v=1792500744`, `https://danfo-make-way.start.ng/cover.jpg?v=1792447533`, `https://inkbreak.start.ng/cover.png?v=1793088584`.

## Notes

- No copy was rewritten for the whimsical layer. All seasonal motifs are `aria-hidden` decorative SVGs.
- Two strings render uppercase via CSS `text-transform` (`.eyebrow`, footer column headings); the DOM source is identical to the SSR.
- Apostrophes in the about/how copy are straight (`'`) to stay byte-identical with the SSR.
