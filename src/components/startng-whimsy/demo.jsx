// Isolated demo for the startng-whimsy kit. Dev-server only — NOT a build
// entry (Vite's default build uses /index.html and ignores this file).
// Open with `npm run dev`, then:
//   /src/components/startng-whimsy/demo.html        (light)
//   /src/components/startng-whimsy/demo.html?dark   (dark)

import { useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArcadeSparkle,
  PixelTrail,
  GamepadDoodle,
  ArcadeAccent,
  WhimsyBackdrop,
  WhimsyBurst,
  HALLOWEEN,
  Bat,
  Ghost,
  Pumpkin,
  Cobweb,
  CandyCorn,
} from './index.js';

export function Demo() {
  const [dark, setDark] = useState(
    () => new URLSearchParams(window.location.search).has('dark'),
  );
  const [burst, setBurst] = useState(0); // re-key to replay the one-shot twinkle
  const [boom, setBoom] = useState(0); // fire the confetti burst

  return (
    <>
      <header className="bar">
        <strong>startng-whimsy</strong>
        <span className="bar-note">decorative SVG kit · isolated demo (dev only)</span>
        <button type="button" className="bar-btn" onClick={() => setDark(!dark)}>
          {dark ? 'Light' : 'Dark'}
        </button>
      </header>

      <main>
        {/* Hero-style section: halloween backdrop + headline accent + CTA trail */}
        <section className="hero sngw-anchor">
          {HALLOWEEN ? <WhimsyBackdrop variant="halloween" /> : <WhimsyBackdrop variant="corners" />}
          <p className="eyebrow">
            <ArcadeSparkle size={15} tone="duo" hoverTwinkle />
            Big imagination. Played everywhere.
          </p>
          <h1>
            Good vibes. <mark>Good games.</mark>
            <ArcadeAccent variant="sparkle" tone="lime" placement="top-right" size={20} />
          </h1>
          <p className="lead">
            Games made by builders in the community. Pick one and play right in your browser.
          </p>
          <p className="cta-row">
            <a className="btn" href="#play">Play now</a>
            <PixelTrail size={40} steps={4} direction="right" />
          </p>
        </section>

        {/* Halloween seasonal layer (user-ordered) */}
        {HALLOWEEN && (
          <section className="how sngw-anchor">
            <h2>Halloween layer</h2>
            <p className="hw-row">
              <Bat size={26} hoverSwoop />
              <Ghost size={30} hoverBoo />
              <Pumpkin size={30} />
              <CandyCorn size={20} />
              <Bat size={18} tone="lime" />
              <Ghost size={20} tone="ink" />
              <Pumpkin size={22} tone="ink" />
            </p>
            <p className="hw-corner-demo sngw-anchor">
              <Cobweb size={44} />
            </p>
            <p className="note">
              Palette-only Halloween: lime lantern, ink bat & ghost, silk web — no new colours.
              Hover the bat and ghost (one-shot, ≤3px, reduced-motion safe).
            </p>
          </section>
        )}

        {/* Card corner accents must never block hover or clicks */}
        <section>
          <h2>Card corner accents</h2>
          <div className="cards">
            {[0, 1, 2].map((i) => (
              <article key={i} className="card sngw-anchor">
                <div className="card-cover" />
                <h3>Sample game {i + 1}</h3>
                <p className="muted">by a community creator</p>
                {i === 0 && (
                  <ArcadeAccent variant="sparkle" tone="ink" placement="top-right" size={14} />
                )}
                {i === 1 && (
                  <ArcadeAccent variant="pixels" tone="fresh" placement="bottom-left" size={30} />
                )}
                {i === 2 && HALLOWEEN && (
                  <span className="sngw-backdrop__mark" style={{ top: 10, right: 12 }}>
                    <Bat size={20} />
                  </span>
                )}
              </article>
            ))}
          </div>
          <p className="note">
            Accents kiss the card corners; pointer-events are off, so card hover still works.
          </p>
        </section>

        {/* Doodle controller for the "how to publish" moment */}
        <section className="how sngw-anchor">
          <h2>Got a game? Put it on start.ng</h2>
          <GamepadDoodle width={64} hoverWiggle />
          <p className="note">Hover the pad — a ~2px lift over 180ms, off under reduced motion.</p>
        </section>

        {/* Super-duper playground (user-ordered amplification) */}
        <section className="sngw-anchor">
          <h2>Super-duper playground</h2>
          <p className="motion-row">
            <button type="button" className="bar-btn" onClick={() => setBoom(boom + 1)}>
              Burst!
            </button>
            <span className="burst-slot">
              <WhimsyBurst play={boom} size={96} />
            </span>
            <button type="button" className="bar-btn" onClick={() => setBurst(burst + 1)}>
              Replay twinkle
            </button>
            <span className="motion-sparkles" key={burst}>
              <ArcadeSparkle twinkle size={22} delay={0} />
              <ArcadeSparkle twinkle size={16} tone="ink" delay={140} />
              <ArcadeSparkle twinkle size={12} tone="muted" delay={280} />
            </span>
          </p>
          <p className="hw-row">
            <ArcadeAccent variant="star" tone="lime" size={18} />
            <ArcadeAccent variant="bolt" tone="ink" size={16} />
            <ArcadeAccent variant="burst" tone="muted" size={16} />
            <ArcadeSparkle idle size={18} />
            <ArcadeAccent variant="squiggle" tone="lime" size={44} />
          </p>
          <p className="note">
            Burst fires once per click; sparkles settle in once; the last sparkle floats gently
            (opt-in <code>idle</code>); the squiggle wiggles on hover. All reduced-motion safe.
          </p>
        </section>
      </main>
    </>
  );
}

createRoot(document.getElementById('demo-root')).render(<Demo />);
