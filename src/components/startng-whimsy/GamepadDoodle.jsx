// GamepadDoodle — an original, hand-drawn browser-game controller.
// Ink line art with one lime face button; the tilt gives it a doodled feel.
// Purely decorative. Scale-friendly: everything lives in a 64×40 viewBox.
//
// Props:
//   width  — rendered width in px, default 48 (height follows the 64:40 ratio)
//   tilt   — degrees of rotation, default -6 (use 0 for a level pad)
//   className/style — passthrough

import './startng-whimsy.css';

const BODY =
  'M14 8h36c7 0 10 5 10 12s-4 14-12 14c-7 0-9-4-13-6H29c-4 2-6 6-13 6C8 34 4 27 4 20S7 8 14 8Z';

export function GamepadDoodle({
  width = 48,
  tilt = -6,
  className = '',
  style,
  ...rest
}) {
  const height = Math.round(width * (40 / 64));

  return (
    <svg
      className={`sngw sngw-pad${className ? ` ${className}` : ''}`}
      style={{ ...style, transform: tilt ? `rotate(${tilt}deg)` : undefined }}
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
