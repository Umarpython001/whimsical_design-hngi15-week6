// ArcadeSparkle — a small four-point arcade star with an optional lime
// satellite dot. Purely decorative: aria-hidden and non-interactive; safe to
// place inline with headings or beside CTAs.
//
// Props:
//   size        — px, default 20
//   tone        — 'duo' (ink star + lime satellite, default) | 'ink' | 'lime' | 'muted'
//   twinkle     — one-shot ~0.9s settle-in animation (opt-in, never loops,
//                 disabled under prefers-reduced-motion)
//   hoverTwinkle— replay the twinkle while a `.sngw-anchor` ancestor is
//                 hovered (opt-in micro-interaction, also reduced-motion safe)
//   idle        — gentle ≤3px floating loop (opt-in! use sparingly, e.g. one
//                 hero sparkle; ignored when `twinkle` is set; reduced-motion safe)
//   delay       — ms before the twinkle starts, for staggering a pair
//   className/style — passthrough for positioning from the caller

import './startng-whimsy.css';

const STAR =
  'M12 1C12.7 6.6 17.4 11.3 23 12C17.4 12.7 12.7 17.4 12 23C11.3 17.4 6.6 12.7 1 12C6.6 11.3 11.3 6.6 12 1Z';

export function ArcadeSparkle({
  size = 20,
  tone = 'duo',
  twinkle = false,
  hoverTwinkle = false,
  idle = false,
  delay = 0,
  className = '',
  style,
  ...rest
}) {
  const classes = [
    'sngw',
    'sngw-sparkle',
    twinkle && 'sngw-sparkle--twinkle',
    hoverTwinkle && 'sngw-sparkle--hover',
    idle && !twinkle && 'sngw-idle',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const starClass =
    tone === 'lime'
      ? 'sngw-sparkle__star sngw-fill-lime sngw-stroke-ink'
      : tone === 'muted'
        ? 'sngw-sparkle__star sngw-fill-muted'
        : 'sngw-sparkle__star sngw-fill-ink';

  return (
    <svg
      className={classes}
      style={{ ...style, '--sngw-delay': `${delay}ms` }}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      <path
        className={starClass}
        d={STAR}
        strokeWidth={tone === 'lime' ? 1.25 : undefined}
      />
      {tone === 'duo' && (
        <circle
          className="sngw-sparkle__sat sngw-fill-lime sngw-stroke-ink"
          cx="20"
          cy="4"
          r="2.75"
          strokeWidth="1.25"
        />
      )}
    </svg>
  );
}
