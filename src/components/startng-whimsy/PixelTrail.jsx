// PixelTrail — a short, restrained trail of pixels, like footprints fading
// toward the tail. Purely decorative and static (no animation by design).
//
// Props:
//   size       — px length of the long axis, default 22
//   steps      — 2–8 pixels, default 4
//   direction  — 'right' (default) | 'left' | 'up' | 'down'
//   fade       — tail fades out, default true
//   tone       — 'fresh' (lime head + ink tail, default) | 'ink' | 'muted'
//   className/style — passthrough

import './startng-whimsy.css';

const PX = 6; // pixel edge
const GAP = 4; // gap between pixels
const PAD = 1; // breathing room inside the viewBox

export function PixelTrail({
  size = 22,
  steps = 4,
  direction = 'right',
  fade = true,
  tone = 'fresh',
  className = '',
  style,
  ...rest
}) {
  const n = Math.max(2, Math.min(8, Math.round(steps)));
  const horizontal = direction === 'left' || direction === 'right';
  const span = PX + (n - 1) * (PX + GAP) + PAD * 2;
  const w = horizontal ? span : PX + PAD * 2;
  const h = horizontal ? PX + PAD * 2 : span;

  const stepClass =
    tone === 'muted' ? 'sngw-fill-muted' : 'sngw-fill-ink';

  const cells = Array.from({ length: n }, (_, i) => {
    const along = PAD + i * (PX + GAP);
    const x = horizontal
      ? direction === 'left'
        ? w - PAD - PX - i * (PX + GAP)
        : along
      : PAD;
    const y = horizontal
      ? PAD
      : direction === 'up'
        ? h - PAD - PX - i * (PX + GAP)
        : along;
    return { x, y, i };
  });

  const lengthStyle = horizontal ? { width: size } : { height: size };

  return (
    <svg
      className={`sngw sngw-trail${className ? ` ${className}` : ''}`}
      style={{ ...style, ...lengthStyle }}
      viewBox={`0 0 ${w} ${h}`}
      fill="none"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      {cells.map(({ x, y, i }) =>
        i === 0 && tone === 'fresh' ? (
          <rect
            key={i}
            className="sngw-trail__head sngw-fill-lime sngw-stroke-ink"
            x={x}
            y={y}
            width={PX}
            height={PX}
            rx={1.5}
            strokeWidth={1}
          />
        ) : (
          <rect
            key={i}
            className={`sngw-trail__step ${stepClass}`}
            x={x}
            y={y}
            width={PX}
            height={PX}
            rx={1.5}
            style={fade ? { opacity: Math.max(0.18, 0.85 - (i - 1) * 0.28) } : undefined}
          />
        ),
      )}
    </svg>
  );
}
