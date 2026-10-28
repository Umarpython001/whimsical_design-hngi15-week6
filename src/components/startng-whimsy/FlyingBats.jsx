// FlyingBats — ambient looping bat flight for the hero sky (user-ordered).
// --------------------------------------------------------------------------
// This is the ONE continuously-animated element in the whimsy kit, and it is
// engineered to feel like weather, not like motion:
//   - 5 bats only, 16–30px, svg opacity 0.9 (≤ 0.95)
//   - slow closed-loop drift paths, 13–19s per bat, each with its own
//     duration, negative delay and path shape so they never look synced
//     (negative delays start every bat mid-loop; there is no take-off moment)
//   - a gentle wing flap via scale on a nested <g>, also desynced per bat
//   - positioned in the hero's upper/side margins only — never crosses the
//     headline text, never approaches the CTA row
//   - the layer is pointer-events: none and aria-hidden; z-index 2 keeps it
//     above the background but far below the nav's z-30
//   - under prefers-reduced-motion every animation is switched off and the
//     bats sit static at their base spots (see startng-whimsy.css)
//
// The bat itself reuses the seasonal silhouette from Halloween.jsx (same wing
// path), redrawn with a nested wing group so the flap can scale the wings
// alone. Palette discipline: ink silhouettes (auto-inverted in dark mode),
// one lime cousin, card-coloured eyes.

import './startng-whimsy.css';

const WING =
  'M15.5 7.5C10.8 3.4 5.2 3.2 1.2 6.2c2 .5 3.2 1.5 3.7 3 1.5-.3 2.7.1 3.5 1.2 1.4-.4 2.7 0 3.6 1.1 1.5-.6 2.7-1.9 3.5-4Z';

// Position, loop duration, negative delay and wing tempo live in
// startng-whimsy.css (`.sngw-batfly__bat--x`); the JSX carries only the
// inline size so the svg scales crisply.
const BATS = [
  { flight: 'a', tone: 'ink', size: 26 },
  { flight: 'b', tone: 'ink', size: 18 },
  { flight: 'c', tone: 'ink', size: 22 },
  { flight: 'd', tone: 'lime', size: 30 },
  { flight: 'e', tone: 'ink', size: 16 },
];

function FlightBat({ flight, tone, size }) {
  const body = tone === 'lime' ? 'sngw-fill-lime sngw-stroke-ink' : 'sngw-fill-ink';
  const eye = tone === 'lime' ? 'sngw-fill-ink' : 'sngw-fill-card';

  return (
    <div className={`sngw-batfly__bat sngw-batfly__bat--${flight}`}>
      <svg
        className="sngw sngw-bat sngw-batfly__svg"
        width={size}
        height={size * 0.5}
        viewBox="0 0 36 18"
        fill="none"
        aria-hidden="true"
        focusable="false"
      >
        <g className="sngw-batfly__wings">
          <path className={body} d={WING} />
          <path className={body} d={WING} transform="matrix(-1 0 0 1 36 0)" />
        </g>
        <ellipse className={body} cx="18" cy="9.4" rx="2.7" ry="3.6" />
        <path className={body} stroke="none" d="M16.5 6.4l.7-2.2 1 1.9zM19.5 6.4l-.7-2.2-1 1.9z" />
        <circle className={eye} cx="17" cy="8.6" r="0.85" stroke="none" />
        <circle className={eye} cx="19" cy="8.6" r="0.85" stroke="none" />
      </svg>
    </div>
  );
}

export function FlyingBats({ className = '', style }) {
  return (
    <div
      className={`sngw-batfly${className ? ` ${className}` : ''}`}
      style={style}
      aria-hidden="true"
    >
      {BATS.map((bat) => (
        <FlightBat key={bat.flight} {...bat} />
      ))}
    </div>
  );
}
