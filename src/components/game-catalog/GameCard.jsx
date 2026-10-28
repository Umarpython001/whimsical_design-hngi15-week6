import { useState } from 'react'
import { titleCaseFromSlug } from './games.js'
import './game-catalog.css'

/**
 * GameCard — one card from the start.ng community shelf.
 *
 * Faithful to the real card anatomy (cream card, 1px line, 18px radius:
 * link → art + info, then a meta row):
 *   [ cover art / lime letter tile ] [ title; `<name>.start.ng` address in mono ]
 *   [ by <creator> · Leaderboard link (only when the game has one) · Play ]
 *
 * The whole art + info block is a single link to the game's real playable
 * address, so one click (or one Enter) starts the game.
 *
 * Props:
 *   game      — required record; see `games.js` for the exact shape.
 *   className — optional extra class on the outer <article>.
 *
 * Missing artwork never breaks the layout: a null/failed cover falls back to
 * the real site's documented fallback — the game's first letter on a lime tile
 * (pumpkin during the Halloween season).
 */
export default function GameCard({ game, className = '' }) {
  if (!game) return null

  const title = game.title || titleCaseFromSlug(game.slug) || game.slug || ''
  const gameHref = game.href || (game.slug ? `https://${game.slug}.start.ng` : undefined)
  const gamePageHref = game.gamePageHref ?? (game.slug ? `/games/${game.slug}` : undefined)

  const face = (
    <>
      <GameArt game={game} title={title} />
      <div className="gcat-info">
        <h3 className="gcat-title">{title}</h3>
        {game.address ? <p className="gcat-address">{game.address}</p> : null}
      </div>
    </>
  )

  return (
    <article className={`gcat-card${className ? ` ${className}` : ''}`}>
      {gameHref ? (
        <a className="gcat-game-link" href={gameHref}>
          {face}
        </a>
      ) : (
        face
      )}

      <div className="gcat-meta">
        {game.category ? <span className="gcat-chip">{game.category}</span> : null}
        {game.by ? <span className="gcat-by">by {game.by}</span> : null}
        {game.leaderboard && gamePageHref ? (
          <a className="gcat-board" href={gamePageHref}>
            Leaderboard
          </a>
        ) : null}
        {gameHref ? (
          <a className="gcat-play" href={gameHref} aria-label={`Play ${title}`}>
            <svg viewBox="0 0 10 10" aria-hidden="true" focusable="false">
              <path d="M2 1.2v7.6a.8.8 0 0 0 1.22.68l6-3.8a.8.8 0 0 0 0-1.36l-6-3.8A.8.8 0 0 0 2 1.2z" fill="currentColor" />
            </svg>
            Play
          </a>
        ) : null}
      </div>
    </article>
  )
}

/**
 * Cover art with the real site's fallback: a tile carrying the first letter of
 * the game's name (lime normally, pumpkin during the Halloween season). A
 * failed image load degrades to the same tile, so the layout never breaks.
 */
function GameArt({ game, title }) {
  const [broken, setBroken] = useState(false)
  const cover = !broken && game.coverUrl ? game.coverUrl : null

  return (
    <div className={`gcat-art${cover ? '' : ' is-letter'}`}>
      {cover ? (
        <img
          className="gcat-cover"
          src={cover}
          alt={game.alt || ''}
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          onError={() => setBroken(true)}
        />
      ) : (
        <span className="gcat-letter" aria-hidden="true">
          {letterFromTitle(title)}
        </span>
      )}
    </div>
  )
}

/** First usable character of a game name, for the fallback tile. */
function letterFromTitle(name) {
  const match = (name || '').trim().match(/[a-z0-9]/i)
  return match ? match[0].toUpperCase() : '?'
}
