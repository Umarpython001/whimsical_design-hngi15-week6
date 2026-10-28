// GamepadDoodle — an original, hand-drawn browser-game controller.
// Ink line art with one lime face button; the tilt gives it a doodled feel.
// Purely decorative and scale-friendly: everything lives in a 64×40 viewBox.
//
// Props:
//   width       — rendered width in px, default 48 (height follows 64:40)
//   tilt        — degrees of rotation, default -6 (use 0 for a level pad)
//   hoverWiggle — lift the pad ~2px while a `.sngw-anchor` ancestor is hovered
//                 (≤3px, 180ms, off under prefers-reduced-motion — decision D7)
//   className/style — passthrough

import './startng-whimsy.css';

const BODY =
  'M14 8h36c7 0 10 5 10 12s-4 14-12 14c-7 0-9-4-13-6H29c-4 2-6 6-13 6C8 34 4 27 4 20S7 8 14 8Z';

export function GamepadDoodle({
  width = 48,
  tilt = -6,
  hoverWiggle = false,
  className = '',
  style,
  ...rest
}) {
  const height = Math.round(width * (40 / 64));

  const classes = [
    'sngw',
    'sngw-pad',
    hoverWiggle && 'sngw-pad--hover',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <svg
      className={classes}
      style={{ ...style, '--sngw-tilt': `${tilt}deg` }}
      width={width}
      height={height}
      viewBox="0 0 64 40"
      fill="none"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      <g
        className="sngw-stroke-ink"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d={BODY} />
        {/* d-pad */}
        <path d="M15 15.5v9M10.5 20h9" strokeWidth={3.4} />
        {/* face buttons */}
        <circle className="sngw-fill-lime" cx="45" cy="17" r="3" strokeWidth={1.6} />
        <circle cx="51.5" cy="22" r="3" strokeWidth={1.6} />
        {/* start + select */}
        <circle className="sngw-fill-ink" cx="29.5" cy="13" r="1.1" stroke="none" />
        <circle className="sngw-fill-ink" cx="34.5" cy="13" r="1.1" stroke="none" />
      </g>
    </svg>
  );
}
