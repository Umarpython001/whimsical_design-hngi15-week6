// ArcadeAccent — a tiny original doodle placed around existing content:
// beside headings inline, or kissing a corner of an anchored element.
// Purely decorative: aria-hidden, pointer-events none, never blocks content.
//
// Props:
//   variant    — 'sparkle' | 'cross' | 'dots' | 'pixels' | 'squiggle' | 'arc'
//                | 'star' | 'bolt' | 'burst'
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

const STAR4 =
  'M12 1C12.7 6.6 17.4 11.3 23 12C17.4 12.7 12.7 17.4 12 23C11.3 17.4 6.6 12.7 1 12C6.6 11.3 11.3 6.6 12 1Z';
const STAR5 =
  'M12 1.5L14.7 8.8 22.5 9.1 16.4 13.9 18.5 21.4 12 17.1 5.5 21.4 7.6 13.9 1.5 9.1 9.3 8.8Z';

const FILL = { ink: 'sngw-fill-ink', lime: 'sngw-fill-lime', muted: 'sngw-fill-muted' };
const STROKE = { ink: 'sngw-stroke-ink', lime: 'sngw-stroke-lime', muted: 'sngw-stroke-muted' };

const DEFAULT_SIZE = {
  sparkle: 14,
  cross: 12,
  dots: 12,
  pixels: 26,
  squiggle: 44,
  arc: 18,
  star: 15,
  bolt: 16,
  burst: 16,
};

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
    case 'star': {
      const d = variant === 'sparkle' ? STAR4 : STAR5;
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
            d={d}
            strokeWidth={tone === 'lime' ? 1.25 : undefined}
            strokeLinejoin="round"
          />
        </svg>
      );
    }
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
    case 'bolt':
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
            d="M14.6 1L4.8 13.6h5.4L7.6 23 19.2 9.2h-6L16.9 1Z"
            strokeWidth={tone === 'lime' ? 1.25 : undefined}
            strokeLinejoin="round"
          />
        </svg>
      );
    case 'burst':
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
            className={s}
            d="M17.5 12h4.2M12 2.5v4.2M6.5 12H2.3M12 21.5v-4.2M15.9 8.1l3-3M8.1 15.9l-3 3M15.9 15.9l3 3M8.1 8.1l-3-3"
            strokeWidth="2.4"
            strokeLinecap="round"
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
      className={`sngw sngw-accent sngw-accent--${place} sngw-accent--${variant}${className ? ` ${className}` : ''}`}
      style={style}
      aria-hidden="true"
      {...rest}
    >
      <Mark variant={variant} size={markSize} tone={tone} />
    </span>
  );
}
