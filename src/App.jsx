import { useRef, useState } from 'react'
import { featuredGames, azGames, AZ_COUNT } from './data/games.js'
import './App.css'

/* Drawn sun/moon icons — no emoji chargers, one stroke weight */
function SunMoonIcon({ dark }) {
  return dark ? (
    <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
      <circle cx="8" cy="8" r="3.4" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8 1.2v1.6M8 13.2v1.6M1.2 8h1.6M13.2 8h1.6M3.2 3.2l1.1 1.1M11.7 11.7l1.1 1.1M12.8 3.2l-1.1 1.1M4.3 11.7l-1.1 1.1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ) : (
    <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
      <path d="M13.4 9.4A5.9 5.9 0 0 1 6.6 2.6a5.9 5.9 0 1 0 6.8 6.8Z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  )
}

function ThemeToggle({ theme, onToggle, className = '' }) {
  const dark = theme === 'dark'
  return (
    <button
      type="button"
      className={`theme-toggle ${className}`}
      onClick={onToggle}
      aria-pressed={dark}
      aria-label={dark ? 'Switch to light theme' : 'Switch to dark theme'}
      title={dark ? 'Lights on' : 'Lights off'}
    >
      <SunMoonIcon dark={dark} />
      <span>{dark ? 'Lights on' : 'Lights off'}</span>
    </button>
  )
}

function Header({ theme, onToggle }) {
  const [open, setOpen] = useState(false)
  const closeRef = useRef(null)
  return (
    <header className="container nav">
      <a className="logo" href="/" aria-label="start.ng home">
        <img src="/favicon.svg" alt="" width="26" height="26" />
        <b>
          start<span>.ng</span>
        </b>
      </a>
      <nav aria-label="Pages" id="page-links" className={open ? 'open' : ''}>
        <a href="/games">Games</a>
        <a href="/tournament">Tournament</a>
        <a href="/creators">Creators</a>
        <a href="/docs">Docs</a>
        <ThemeToggle theme={theme} onToggle={onToggle} className="in-menu" />
      </nav>
      <ThemeToggle theme={theme} onToggle={onToggle} className="in-bar" />
      <button
        type="button"
        ref={closeRef}
        className="menu-btn"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="page-links"
      >
        {open ? (
          <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
            <path d="M4 4l10 10M14 4L4 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        ) : (
          <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
            <path d="M2.5 5h13M2.5 9h13M2.5 13h13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        )}
      </button>
    </header>
  )
}

function GameCard({ game }) {
  const [loaded, setLoaded] = useState(false)
  const [failed, setFailed] = useState(false)
  const initials = game.name.replace(/[^A-Za-z0-9 ]/g, '').split(' ').filter(Boolean).slice(0, 2).map((w) => w[0]).join('')
  return (
    <article className="game">
      <a className="game-link" href={game.href} aria-label={`${game.name} by ${game.by} on start.ng`}>
        <div className={`art ${loaded ? 'on' : ''} ${failed ? 'off' : ''}`}>
          {!failed && (
            <img
              src={game.cover || `https://${game.slug}.start.ng/cover.png`}
              alt={`${game.name} cover art`}
              loading="lazy"
              onLoad={() => setLoaded(true)}
              onError={() => setFailed(true)}
            />
          )}
          <span className="art-fallback" aria-hidden="true">{initials}</span>
        </div>
        <div className="info">
          <h3>{game.name}</h3>
          <p>{game.domain}</p>
        </div>
      </a>
      <div className="meta">
        <span className="by">by {game.by}</span>
        <a className="play" href={game.play} target="_blank" rel="noreferrer">
          Play
        </a>
      </div>
    </article>
  )
}

function Hero() {
  return (
    <section className="container hero" id="top">
      <p className="eyebrow">Big imagination. Played everywhere.</p>
      <h1>
        Good vibes.
        <br />
        <mark>Good games.</mark>
      </h1>
      <p className="lead">
        Games made by builders in the community. Each one lives at its own start.ng
        address. Pick one and play right in your browser.
      </p>
      <div className="actions">
        <a className="btn" href="#games">
          Play now
        </a>
      </div>
    </section>
  )
}

function GamesSection() {
  return (
    <section id="games" className="container">
      <div className="section-head">
        <h2>Games from the community</h2>
      </div>
      <div className="grid">
        {featuredGames.map((g) => (
          <GameCard key={g.slug} game={g} />
        ))}
      </div>
      <div className="see-all">
        <a className="btn" href="/games">
          See all {AZ_COUNT} games →
        </a>
      </div>
      <details className="az-games">
        <summary>
          Every game on start.ng, A to Z ({AZ_COUNT})
          <span className="chev" aria-hidden="true" />
        </summary>
        <ul>
          {azGames.map((g) => (
            <li key={g.slug}>
              <a href={g.href}>{g.name}</a> <span>by {g.by}</span>
            </li>
          ))}
        </ul>
      </details>
    </section>
  )
}

const HOW_STEPS = [
  {
    b: 'Build it',
    span: 'Any static browser game: HTML, JavaScript, three.js, Phaser. Players bring their start.ng character, scores and friends.',
  },
  {
    b: 'Push it to GitHub',
    span: (
      <>
        A public repo with a ready-to-play <code>index.html</code> at the top or in{' '}
        <code>dist/</code>, plus a <code>cover.png</code> for its card.
      </>
    ),
  },
  {
    b: 'Publish it',
    span: (
      <>
        One API call with your repo link, no key needed. Or hand your AI{' '}
        <code>start.ng/docs</code> and let it do the lot.
      </>
    ),
  },
  {
    b: 'Approve it once',
    span: (
      <>
        Open the link you get back and it&rsquo;s live at <code>yourgame.start.ng</code>, with
        its own leaderboard if you want one. After that, every push updates it.
      </>
    ),
  },
]

function How() {
  return (
    <section id="how" className="container how">
      <h2>Got a game? Put it on start.ng</h2>
      <ol>
        {HOW_STEPS.map((s) => (
          <li key={s.b}>
            <b>{s.b}</b>
            <span>{s.span}</span>
          </li>
        ))}
      </ol>
      <div className="how-actions">
        <a className="btn" href="/docs">
          Read the docs
        </a>
        <a className="btn ghost" href="/docs.md">
          Docs for your AI (.md)
        </a>
      </div>
    </section>
  )
}

const FAQ = [
  ['What is start.ng?', 'A home for free browser games made by the HNG community. Each game has its own address, like yourgame.start.ng, and you play it right in your browser.'],
  ['Is it free?', 'Yes. Every game on start.ng is free to play in your browser, with nothing to download.'],
  ['Are there Nigerian or African web games?', 'Yes. Many games here are Naija-themed, from danfo rush hour to jollof and Lagos markets, and we welcome games from across Africa.'],
  ['Do I need an account to play?', 'No. Sign in to get your start.ng character, keep your scores on the leaderboards and join the daily tournament.'],
  ['What is the daily tournament?', 'Every day a few start.ng games are picked for 24 hours, and the best player wins. Points count towards the overall leaderboard.'],
  ['How do I put my game on start.ng?', 'Push your browser game to a public GitHub repo, publish it with one API call and approve it once. It goes live at yourgame.start.ng. The docs have every step.'],
]

function About() {
  return (
    <section id="about" className="container about">
      <h2>About start.ng</h2>
      <p>
        start.ng is Nigeria&rsquo;s home for browser games, built by the HNG community. Every
        game is free to play in your browser with no download, and many are made in Naija:
        danfo rush hour, jollof catching, Lagos markets and more.
      </p>
      <p>
        We&rsquo;re also building a home for web games from across Africa. If you make games
        anywhere on the continent, you can put yours on start.ng for free.
      </p>
      <p>
        <a className="more" href="/about">
          More about start.ng →
        </a>
      </p>
      <h3>Questions</h3>
      <div className="faq">
        {FAQ.map(([q, a]) => (
          <details key={q}>
            <summary>
              {q}
              <span className="chev" aria-hidden="true" />
            </summary>
            <p>{a}</p>
          </details>
        ))}
      </div>
    </section>
  )
}

const FOOTER_COLS = [
  ['Play', [['/games', 'All games'], ['/tournament', 'Daily tournament'], ['/leaderboard', 'Leaderboard'], ['/categories', 'Categories'], ['/hangout', 'The Hangout']]],
  ['Make games', [['/creators', 'Independent creators'], ['/docs', 'Build a game'], ['/docs.md', 'Docs for your AI (.md)']]],
  ['About', [['/about', 'About start.ng']]],
]

function Footer() {
  return (
    <footer className="container site-footer">
      <div className="site-footer-grid">
        <div className="site-footer-brand">
          <a className="logo" href="/">
            <b>
              start<span>.ng</span>
            </b>
          </a>
          <p>Nigeria's home for browser games, made by the community and by creators across Africa.</p>
        </div>
        {FOOTER_COLS.map(([title, links]) => (
          <nav aria-label={title} key={title}>
            <h2>{title}</h2>
            <ul>
              {links.map(([href, label]) => (
                <li key={href}>
                  <a href={href}>{label}</a>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
      <p className="site-footer-base">
        <span>© 2026 start.ng</span>
        <span>Games from Nigeria and across Africa.</span>
      </p>
    </footer>
  )
}

export default function App() {
  const [theme, setTheme] = useState(
    () => document.documentElement.getAttribute('data-theme') || 'light',
  )
  const toggle = () =>
    setTheme((t) => {
      const next = t === 'dark' ? 'light' : 'dark'
      document.documentElement.setAttribute('data-theme', next)
      try {
        localStorage.setItem('theme', next)
      } catch {
        /* private mode: theme won't persist */
      }
      return next
    })

  return (
    <>
      <Header theme={theme} onToggle={toggle} />
      <main>
        <Hero />
        <GamesSection />
        <How />
        <About />
      </main>
      <Footer />
    </>
  )
}
