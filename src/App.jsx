import { useEffect, useRef, useState } from 'react'
import { featuredGames, azGames, AZ_COUNT } from './data/games.js'
import './App.css'
import { ArcadeSparkle } from './components/startng-whimsy/ArcadeSparkle'
import { GamepadDoodle } from './components/startng-whimsy/GamepadDoodle'
import { PixelTrail } from './components/startng-whimsy/PixelTrail'
import { HALLOWEEN, Bat, CandyCorn, Cobweb, Ghost, Pumpkin, HalloweenTag } from './components/startng-whimsy/Halloween'
import { FlyingBats } from './components/startng-whimsy/FlyingBats'
import { SparkleTrail } from './components/startng-whimsy/SparkleTrail'
import { WhimsyBurst } from './components/startng-whimsy/WhimsyBurst'
import { initReveal } from './components/startng-whimsy/reveal'
import { GhostParade } from './components/startng-whimsy/GhostParade'

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
  const [boom, setBoom] = useState(0)
  return (
    <button
      type="button"
      className={`theme-toggle ${className}`}
      onClick={() => {
        onToggle()
        setBoom((b) => b + 1)
      }}
      aria-pressed={dark}
      aria-label={dark ? 'Switch to light theme' : 'Switch to dark theme'}
      title={dark ? 'Lights on' : 'Lights off'}
    >
      <SunMoonIcon key={dark ? 'moon' : 'sun'} dark={dark} />
      <WhimsyBurst
        play={boom}
        size={84}
        style={{ position: 'absolute', top: '50%', left: '50%', translate: '-50% -50%' }}
      />
    </button>
  )
}

function Header({ theme, onToggle }) {
  const [open, setOpen] = useState(false)
  const closeRef = useRef(null)
  return (
    <header className="container nav" style={{ position: 'relative' }}>
      {HALLOWEEN && (
        <Bat
          size={18}
          tone="ink"
          style={{ position: 'absolute', top: '-6px', left: '120px', opacity: 0.7 }}
        />
      )}
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
    <article className="game sngw-rise">
      {HALLOWEEN && <Bat size={22} className="card-bat" />}
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
    <section className="container hero sngw-anchor" id="top" style={{ position: 'relative' }}>
      {HALLOWEEN && (
        <Cobweb
          size={64}
          settle
          style={{ position: 'absolute', top: '6px', left: '14px', opacity: 0.9 }}
        />
      )}
      {HALLOWEEN && (
        <Cobweb
          size={52}
          settle
          style={{
            position: 'absolute',
            top: '6px',
            right: '14px',
            transform: 'scaleX(-1)',
            opacity: 0.75,
          }}
        />
      )}
      <ArcadeSparkle
        size={24}
        tone="duo"
        twinkle
        delay={200}
        style={{ position: 'absolute', top: '12%', left: '6%', opacity: 0.9 }}
      />
      <ArcadeSparkle
        size={18}
        tone="lime"
        twinkle
        delay={800}
        style={{ position: 'absolute', top: '18%', right: '10%', opacity: 0.8 }}
      />
      {HALLOWEEN && <FlyingBats />}
      <p className="eyebrow">Big imagination. Played everywhere.</p>
      <h1>
        Good vibes.
        <br />
        <mark>Good games.</mark>{' '}
        <ArcadeSparkle size={34} tone="duo" twinkle delay={400} />
      </h1>
      <p className="lead">
        Games made by builders in the community. Each one lives at its own start.ng
        address. Pick one and play right in your browser.
      </p>
      <div className="actions">
        <a className="btn btn-hw" href="#games">
          Play now
          {HALLOWEEN && <Pumpkin size={18} className="btn-pumpkin" />}
        </a>
      </div>
      {HALLOWEEN && (
        <Ghost
          size={30}
          hoverBoo
          style={{
            position: 'absolute',
            bottom: '10%',
            right: '8%',
            opacity: 0.95,
            rotate: '-6deg',
          }}
        />
      )}
      <ArcadeSparkle
        size={20}
        tone="muted"
        twinkle
        delay={1200}
        style={{ position: 'absolute', bottom: '14%', left: '12%', opacity: 0.7 }}
      />
    </section>
  )
}

function GamesSection() {
  return (
    <section id="games" className="container sngw-anchor" style={{ position: 'relative' }}>
      <div className="section-head">
        <h2 className="sngw-rise">Games from the community</h2>
      </div>
      <div className="grid">
        {featuredGames.map((g) => (
          <GameCard key={g.slug} game={g} />
        ))}
      </div>
      <div className="see-all sngw-anchor" style={{ position: 'relative' }}>
        {HALLOWEEN && (
          <Pumpkin
            size={34}
            style={{
              position: 'absolute',
              left: 'calc(50% - 208px)',
              top: '50%',
              transform: 'translateY(-50%)',
              opacity: 0.98,
            }}
          />
        )}
        {!HALLOWEEN && (
          <PixelTrail
            direction="right"
            steps={5}
            tone="fresh"
            style={{
              position: 'absolute',
              left: 'calc(50% - 200px)',
              top: '50%',
              transform: 'translateY(-50%)',
              opacity: 0.9,
            }}
          />
        )}
        <a className="btn" href="/games">
          See all {AZ_COUNT} games →
        </a>
        <ArcadeSparkle
          size={14}
          tone="duo"
          hoverTwinkle
          style={{
            position: 'absolute',
            left: 'calc(50% + 112px)',
            top: 'calc(50% - 34px)',
            opacity: 0.9,
          }}
        />
        <PixelTrail
          direction="left"
          steps={5}
          tone="fresh"
          style={{
            position: 'absolute',
            right: 'calc(50% - 200px)',
            top: '50%',
            transform: 'translateY(-50%) scaleX(-1)',
            opacity: 0.9,
          }}
        />
      </div>
      <details className="az-games">
        <summary>
          {HALLOWEEN && <Bat size={18} className="az-bat" />}
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
        Open the link you get back and it's live at <code>yourgame.start.ng</code>, with
        its own leaderboard if you want one. After that, every push updates it.
      </>
    ),
  },
]

function How() {
  return (
    <section id="how" className="container how sngw-anchor" style={{ position: 'relative' }}>
      {HALLOWEEN && (
        <Cobweb
          size={54}
          style={{
            position: 'absolute',
            top: '24px',
            left: '-6px',
            transform: 'scaleY(-1)',
            opacity: 0.6,
          }}
        />
      )}
      {HALLOWEEN && (
        <CandyCorn
          size={20}
          style={{ position: 'absolute', top: '18px', right: '84px', opacity: 0.95 }}
        />
      )}
      <GamepadDoodle
        width={56}
        tilt={-8}
        style={{ position: 'absolute', top: '60px', right: '10px', opacity: 0.9 }}
      />
      <h2 className="sngw-rise">Got a game? Put it on start.ng</h2>
      <ol>
        {HOW_STEPS.map((s) => (
          <li key={s.b} className="sngw-rise">
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
    <section id="about" className="container about" style={{ position: 'relative' }}>
      <ArcadeSparkle
        size={22}
        tone="duo"
        twinkle
        delay={600}
        style={{ position: 'absolute', top: '8px', right: '6px', opacity: 0.8 }}
      />
      <h2 className="sngw-rise">About start.ng</h2>
      <p>
        start.ng is Nigeria's home for browser games, built by the HNG community. Every
        game is free to play in your browser with no download, and many are made in Naija:
        danfo rush hour, jollof catching, Lagos markets and more.
      </p>
      <p>
        We're also building a home for web games from across Africa. If you make games
        anywhere on the continent, you can put yours on start.ng for free.
      </p>
      <p>
        <a className="more" href="/about">
          More about start.ng →
        </a>
      </p>
      <h3>
        Questions{' '}
        {HALLOWEEN && <Ghost size={22} style={{ verticalAlign: '-4px', opacity: 0.95 }} />}
      </h3>
      <div className="faq">
        {FAQ.map(([q, a]) => (
          <details key={q}>
            <summary>
              {HALLOWEEN && <Pumpkin size={17} className="faq-pumpkin" />}
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
    <footer className="container site-footer" style={{ position: 'relative' }}>
      {HALLOWEEN && (
        <Cobweb
          size={46}
          style={{
            position: 'absolute',
            top: '18px',
            right: '10px',
            transform: 'scale(-1, -1)',
            opacity: 0.55,
          }}
        />
      )}
      {HALLOWEEN && (
        <Bat
          size={20}
          tone="lime"
          className="footer-bat"
          style={{ position: 'absolute', top: '14px', right: '70px', opacity: 0.85 }}
        />
      )}
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

  useEffect(() => initReveal(), [])

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
      <SparkleTrail />
      <GhostParade />
      <HalloweenTag />
    </>
  )
}
