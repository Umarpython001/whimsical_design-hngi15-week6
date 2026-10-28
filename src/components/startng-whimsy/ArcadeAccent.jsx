// ArcadeAccent — a tiny original doodle placed around existing content:
// beside headings inline, or kissing a corner of an anchored element.
// Purely decorative: aria-hidden, pointer-events none, never blocks content.
//
// Props:
//   variant    — 'sparkle' | 'cross' | 'dots' | 'pixels' | 'squiggle' | 'arc'
//   placement  — 'inline-end' (default) | 'inline-start' |
//                'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
//                Corner placements need a positioned ancestor
//                (`position: relative`, e.g. the `sngw-anchor` class).
//   size       — px of the mark's long dimension (per-variant default)
//   tone       — 'ink' (default) | 'lime' | 'muted'
//                'lime' adds a thin ink outline so it stays visible on cream.
//   className/style — passthrough for positioning from the caller

import './startng-whimsy.css';
import { PixelTrail } from './PixelTrail.jsx';

const STAR =
  'M12 1C12.7 6.6 17.4 11.3 23 12C17.4 12.7 12.7 17.4 12 23C11.3 17.4 6.6 12.7 1 12C6.6 11.3 11.3 6.6 12 1Z';

const FILL = { ink: 'sngw-fill-ink', lime: 'sngw-fill-lime', muted: 'sngw-fill-muted' };
const STROKE = { ink: 'sngw-stroke-ink', lime: 'sngw-stroke-lime', muted: 'sngw-stroke-muted' };

const DEFAULT_SIZE = { sparkle: 14, cross: 12, dots: 12, pixels: 26, squiggle: 44, arc: 18 };

const PLACEMENTS = [
  'inline-end',
  'inline-start',
  'top-left',
  'top-right',
  'bottom-left',
  'bottom-right',
];

function Mark({ variant, size, tone }) {
  const f = FILL[tone] ?? FILL.ink;
  const s = STROKE[tone] ?? STROKE.ink;

  switch (variant) {
    case 'sparkle':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
          focusable="false"
        >
          <path
            className={tone === 'lime' ? 'sngw-fill-lime sngw-stroke-ink' : f}
            d={STAR}
            strokeWidth={tone === 'lime' ? 1.25 : undefined}
          />
        </svg>
      );
    case 'cross':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
          focusable="false"
        >
          <path className={s} d="M12 5v14M5 12h14" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      );
    case 'dots':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 12 12"
          fill="none"
          aria-hidden="true"
          focusable="false"
        >
          {[
            [3, 3],
            [9, 3],
            [3, 9],
            [9, 9],
          ].map(([cx, cy]) => (
            <circle key={`${cx}-${cy}`} className={f} cx={cx} cy={cy} r="1.4" />
          ))}
        </svg>
      );
    case 'pixels':
      return (
        <PixelTrail
          size={size}
          steps={3}
          direction="right"
          tone={tone === 'lime' ? 'fresh' : tone}
        />
      );
    case 'squiggle':
      return (
        <svg
          style={{ width: size }}
          viewBox="0 0 52 10"
          fill="none"
          aria-hidden="true"
          focusable="false"
        >
          <path
            className={s}
            d="M2 5q4-5 8 0t8 0t8 0t8 0t8 0t8 0"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
        </svg>
      );
    case 'arc':
      return (
        <svg
          width={size}
          height={size * (14 / 24)}
          viewBox="0 0 24 14"
          fill="none"
          aria-hidden="true"
          focusable="false"
        >
          <path
            className={s}
            d="M2 12Q12 -4 22 12"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="3 3.4"
          />
          <circle
            className={tone === 'muted' ? f : 'sngw-fill-lime sngw-stroke-ink'}
            cx="22"
            cy="12"
            r="2.2"
            strokeWidth={tone === 'muted' ? undefined : 1.2}
          />
        </svg>
      );
    default:
      return null;
  }
}

export function ArcadeAccent({
  variant = 'sparkle',
  placement = 'inline-end',
  size,
  tone = 'ink',
  className = '',
  style,
  ...rest
}) {
  const markSize = size ?? DEFAULT_SIZE[variant] ?? 14;
  const place = PLACEMENTS.includes(placement) ? placement : 'inline-end';

  return (
    <span
      className={`sngw sngw-accent sngw-accent--${place}${className ? ` ${className}` : ''}`}
      style={style}
      aria-hidden="true"
      {...rest}
    >
      <Mark variant={variant} size={markSize} tone={tone} />
    </span>
  );
}
