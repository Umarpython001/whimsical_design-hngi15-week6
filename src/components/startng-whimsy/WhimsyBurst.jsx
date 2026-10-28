// WhimsyBurst — a one-shot celebration: pixel confetti flies out from the
// centre and fades, like a high-score poof. Playful but earned: it only plays
// when the caller changes the `play` counter, runs once, and hides entirely
// under prefers-reduced-motion (D7).
//
// Props:
//   size  — px, default 96 (the burst spreads to roughly the full box)
//   play  — number; bump it (0 → 1 → 2 …) to fire the burst again.
//           `play={0}` renders nothing. Pair with a button or a milestone.
//   className/style — passthrough
//
// Example:
//   const [boom, setBoom] = useState(0);
//   <button onClick={() => setBoom(b => b + 1)}>Celebrate</button>
//   <WhimsyBurst play={boom} />

import './startng-whimsy.css';

// Deterministic scatter (angle°, distance 0–1, spin°, pixel size, tone) so
// the celebration is identical every time.
const PIECES = [
  { a: 8, d: 0.48, r: 38, s: 6, c: 'lime' },
  { a: 37, d: 0.36, r: -28, s: 5, c: 'ink' },
  { a: 63, d: 0.52, r: 20, s: 4.5, c: 'muted' },
  { a: 96, d: 0.4, r: -44, s: 6, c: 'ink' },
  { a: 124, d: 0.5, r: 30, s: 5, c: 'lime' },
  { a: 153, d: 0.34, r: -18, s: 7, c: 'ink' },
  { a: 182, d: 0.46, r: 42, s: 4.5, c: 'muted' },
  { a: 211, d: 0.38, r: -34, s: 6, c: 'lime' },
  { a: 241, d: 0.52, r: 22, s: 5, c: 'ink' },
  { a: 268, d: 0.42, r: -40, s: 4.5, c: 'muted' },
  { a: 297, d: 0.5, r: 26, s: 6, c: 'ink' },
  { a: 327, d: 0.36, r: -22, s: 5, c: 'lime' },
];

const TONE_CLASS = {
  ink: 'sngw-fill-ink',
  muted: 'sngw-fill-muted',
  lime: 'sngw-fill-lime sngw-stroke-ink',
};

export function WhimsyBurst({
  size = 96,
  play = 1,
  className = '',
  style,
  ...rest
}) {
  if (!play) return null;

  return (
    <svg
      className={`sngw sngw-burst${className ? ` ${className}` : ''}`}
      style={style}
      width={size}
      height={size}
      viewBox="-50 -50 100 100"
      fill="none"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      {/* key on `play`: bumping it remounts the group so the one-shot
          animation replays without any state of our own. */}
      <g key={play}>
        {PIECES.map(({ a, d, r, s, c }, i) => {
          const dx = Math.round(Math.cos((a * Math.PI) / 180) * d * 44);
          const dy = Math.round(Math.sin((a * Math.PI) / 180) * d * 44);
          return (
            <rect
              key={i}
              className={`sngw-burst__piece ${TONE_CLASS[c]}`}
              x={-s / 2}
              y={-s / 2}
              width={s}
              height={s}
              rx="1.2"
              strokeWidth={c === 'lime' ? 1.2 : undefined}
              style={{
                '--sngw-dx': `${dx}px`,
                '--sngw-dy': `${dy}px`,
                '--sngw-dr': `${r}deg`,
              }}
            />
          );
        })}
      </g>
    </svg>
  );
}
