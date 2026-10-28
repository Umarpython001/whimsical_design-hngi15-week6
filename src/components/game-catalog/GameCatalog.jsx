import GameCard from './GameCard.jsx'
import { featuredGames as defaultFeatured, communityGames as defaultCommunity } from './games.js'
import './game-catalog.css'

/**
 * GameCatalog — the "Games from the community" section of the start.ng homepage.
 *
 * Three parts, in the real site's order:
 *   1. Section heading + the featured card grid (The Hangout + top community games).
 *   2. "See all N games →" button → /games.
 *   3. The A–Z expander listing every community game "by <creator>" → /games/<slug>.
 *
 * Props (all optional — defaults come from the verified data in `games.js`):
 *   id          — section id and scroll anchor (default "games").
 *   games       — records for the featured grid (array).
 *   allGames    — records for the A–Z list (array); its length drives both counts.
 *   heading     — the section heading text.
 *   seeAllHref  — destination of the "See all" button (default "/games").
 *   bare        — when true, no section container (max-width/padding) is applied;
 *                 use it to slot the section inside the app's own container.
 *   season      — "auto" (default), "halloween", or "off". The auto default shows
 *                 the subtle Halloween layer (pumpkin hover shadow + fallback
 *                 tiles + a bat swoop and cobweb doodle on the A–Z reveal)
 *                 during October and turns itself off afterwards.
 *
 * Whimsy layer (kept super-duper per user direction, still palette-only and
 * one-shot motion): sticker-tilt card hover, springy ink Play pill, a
 * hand-drawn squiggle + joystick by the heading, and a cascading A–Z reveal.
 * All of it settles instantly under prefers-reduced-motion.
 *
 * Theme: follows the app's `data-theme="dark"` attribute on <html>, exactly like
 * the real site. No state, no effects — safe to drop anywhere.
 */
export default function GameCatalog({
  id = 'games',
  games = defaultFeatured,
  allGames = defaultCommunity,
  heading = 'Games from the community',
  seeAllHref = '/games',
  bare = false,
  season = 'auto',
}) {
  const resolvedSeason = resolveSeason(season)
  const className = bare ? 'gcat is-bare' : 'gcat'
  const seasonProps = resolvedSeason === 'halloween' ? { 'data-season': 'halloween' } : undefined
  const headingId = `${id}-heading`
  const hasFeatured = Array.isArray(games) && games.length > 0
  const hasDirectory = Array.isArray(allGames) && allGames.length > 0

  return (
    <section id={id} className={className} aria-labelledby={headingId} {...seasonProps}>
      <div className="gcat-head">
        <h2 id={headingId}>
          {heading}
          <span className="gcat-squiggle" aria-hidden="true">
            <Squiggle />
          </span>
        </h2>
        <span className="gcat-joystick" aria-hidden="true">
          <Joystick />
        </span>
      </div>

      {hasFeatured ? (
        <ul className="gcat-grid">
          {games.map((game) => (
            <li key={game.slug || game.title} className="gcat-cell">
              <GameCard game={game} />
            </li>
          ))}
        </ul>
      ) : null}

      {hasDirectory && seeAllHref ? (
        <p className="gcat-see-all">
          <a className="gcat-btn" href={seeAllHref}>
            See all {allGames.length} games <span className="gcat-btn-arrow" aria-hidden="true">→</span>
          </a>
        </p>
      ) : null}

      {hasDirectory ? (
        <details className="gcat-az">
          {resolvedSeason === 'halloween' ? (
            <span className="gcat-web" aria-hidden="true">
              <Cobweb />
            </span>
          ) : null}
          <summary>
            Every game on start.ng, A to Z ({allGames.length})
            {resolvedSeason === 'halloween' ? <GameBat /> : null}
          </summary>
          <ul className="gcat-az-list">
            {allGames.map((game, index) => {
              // The real A–Z list links to each game's page on start.ng.
              const href = game.slug ? `/games/${game.slug}` : game.href
              return (
                <li key={`${game.slug ?? game.title ?? index}`} style={{ '--gi': Math.min(index, 8) }}>
                  {href ? (
                    <a href={href}>{game.title ?? game.slug}</a>
                  ) : (
                    <span className="gcat-az-title">{game.title ?? game.slug}</span>
                  )}{' '}
                  {game.by ? <span>by {game.by}</span> : null}
                </li>
              )
            })}
          </ul>
        </details>
      ) : null}
    </section>
  )
}

/** Hand-drawn squiggle that sits under the start of the section heading. */
function Squiggle() {
  return (
    <svg viewBox="0 0 92 10" width="92" height="10" role="presentation">
      <path
        d="M2 8 Q9 2 16 8 T30 8 T44 8 T58 8 T72 8 T86 8"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
    </svg>
  )
}

/** Small drawn arcade joystick for the heading line (desktop only). */
function Joystick() {
  return (
    <svg viewBox="0 0 28 30" width="26" height="28" role="presentation">
      <circle className="gcat-joystick-ball" cx="14" cy="8" r="5.6" />
      <rect x="12.6" y="12" width="2.8" height="12" rx="1.4" fill="currentColor" />
      <ellipse cx="14" cy="25.4" rx="10" ry="3.4" fill="currentColor" />
    </svg>
  )
}

/** Quarter cobweb doodle for the A–Z panel corner (Halloween only). */
function Cobweb() {
  return (
    <svg viewBox="0 0 34 34" width="34" height="34" role="presentation">
      <g fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
        <path d="M34 0 L4 7 M34 0 L2 19 M34 0 L10 32 M34 0 L26 34 M34 0 L34 34" />
        <path d="M8 15 Q22 14 26 27 M8 15 Q20 12 32 18 M2 19 Q18 20 26 27 M10 32 Q20 22 32 18" />
      </g>
    </svg>
  )
}

/**
 * Only during the Halloween season: one drawn bat silhouette that swoops in
 * (with a happy zigzag) when the A–Z expander opens. Decorative, one-shot,
 * reduced-motion guarded.
 */
function GameBat() {
  return (
    <span className="gcat-bat" aria-hidden="true">
      <svg viewBox="0 0 32 14" width="24" height="11" fill="currentColor" role="presentation">
        <path d="M16 3.1c-1.1-1.3-2.5-2-3.9-2.2.5 1.2.3 2.2-.5 2.9-1.8-.9-4.6-1.3-7.2-.9 1.9.9 2.9 1.9 3 3.6.1 1.7-.9 3.2-2.7 4.3 2.4-.2 4.4-1.2 5.6-3 .9 1.1 2.2 1.9 3.9 2.2l1.1-1.9c.2-.4.9-.4 1.1 0l1.1 1.9c1.7-.3 3-1.1 3.9-2.2 1.2 1.8 3.2 2.8 5.6 3-1.8-1.1-2.8-2.6-2.7-4.3.1-1.7 1.1-2.7 3-3.6-2.6-.4-5.4 0-7.2.9-.8-.7-1-1.7-.5-2.9-1.4.2-2.8.9-3.9 2.2z" />
      </svg>
    </span>
  )
}

/** Resolve the season prop. "auto" = Halloween during October only. */
function resolveSeason(season) {
  if (season === 'halloween') return 'halloween'
  if (season === 'off' || season == null) return null
  const month = new Date().getMonth() // 9 = October
  return month === 9 ? 'halloween' : null
}
