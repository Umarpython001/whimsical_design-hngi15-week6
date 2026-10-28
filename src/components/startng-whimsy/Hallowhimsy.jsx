// Hallowhimsy — Halloween‑themed whimsical motifs for start.ng
// —∎— strictly within the existing design system
// – Uses ONLY existing sngw CSS classes: sngw-fill-lime, sngw-fill-ink, sngw-fill-muted
// – Decorative only: aria-hidden, focusable="false", pointer-events: none
// – One‑shot motion; honours prefers-reduce-motion (no CSS animations in these SVGs)
// – Seasonal: active Oct 25–31 only; after 31 Oct motifs switch to ink colour
// – No invented content, no campaigns, no new copy, no new .sngw-* classes

import './startng-whimsy.css'

// Hallowe'en window: Oct 25 through Oct 31 inclusive.
// Respects if the author has opted out via <html data-halloween-disabled>.
const IN_HALLOWEEN_WINDOW =
  !document.documentElement.hasAttribute('data-halloween-disabled') &&
  new Date().getMonth() === 9 /* Oct */ &&
  new Date().getDate() >= 25 &&
  new Date().getDate() <= 31

// Whether the author has opt‑ed in to the seasonal layer.
const HAS_HALLOWEEN_HTML = document.documentElement.hasAttribute('data-halloween')

// Colour mode: 'lime' when both the window is active AND the html opt‑in is present;
// 'ink' otherwise. This uses only existing sngw fill classes — no new colours.
const MOUSE_IS_LIME = IN_HALLOWEEN_WINDOW && HAS_HALLOWEEN_HTML

export function Bat({ size = 22, className = '', style, ...rest }) {
  const fillCls = MOUSE_IS_LIME ? 'sngw-fill-lime' : 'sngw-fill-ink'
  return (
    <svg
      className={`sngw sngw-bat ${className}`}
      style={{ ...style }}
      viewBox="0 0 32 16"
      width={size}
      height={size * 0.5}
      fill="none"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      <path className={fillCls} d="M16 5.2c.9 0 1.9.35 2.6 1l.9-.6c1.1-1.9 3-3.3 5.4-3.4-1.2 1.9-1.5 3.4-1 5.4l4.4 2.6c1.6.9 2.9 1.2 4.7 1.2-1.3 1.7-3 2.4-5 2.2l-4.5-.4c-.9-.1-1.7.5-2.5 1.2-.9.8-2 1.2-3.1 1.2h-1.8c-1.1 0-2.2-.4-3.1-1.2-.8-.7-1.6-1.3-2.5-1.2l-4.5.4c-2 .2-3.7-.5-5-2.2 1.8 0 3.1-.3 4.7-1.2l4.4-2.6c.5-2 .2-3.5-1-5.4 2.4.1 4.3 1.5 5.4 3.4l.9.6c.7-.65 1.7-1 2.6-1Z" />
      <circle className={fillCls} cx="14.6" cy="7.4" r="0.8" />
      <circle className={fillCls} cx="17.4" cy="7.4" r="0.8" />
    </svg>
  )
}

export function Ghost({ size = 26, className = '', style, ...rest }) {
  return (
    <svg
      className={`sngw sngw-ghost ${className}`}
      style={{ ...style }}
      viewBox="0 0 27 28"
      width={size}
      height={size}
      fill="none"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      <path
        className="sngw-fill-ink"
        stroke="var(--sngw-ink)"
        strokeWidth="1.6"
        strokeLinejoin="round"
        d="M13.5 2.4c4.4 0 7.3 3.4 7.3 7.6v15.2c0 .7-.8 1-1.3.6l-2-1.8c-.4-.4-1-.4-1.4 0l-1.5 1.5c-.4.4-1 .4-1.4 0l-1.5-1.5c-.4.4-1 .4-1.4 0l-1.5 1.5c-.4.4-1 .4-1.4 0l-2-1.8c-.5-.4-1.3-.1-1.3.6V10c0-4.2 2.9-7.6 7.4-7.6Z"
      />
      <circle className="sngw-fill-ink" cx="9.9" cy="9.6" r="1.7" />
      <circle className="sngw-fill-ink" cx="17.1" cy="9.6" r="1.7" />
      <path stroke="var(--sngw-ink)" strokeWidth="1.4" strokeLinecap="round" d="M11.5 13.4c1.2 1.1 2.8 1.1 4 0" />
    </svg>
  )
}

// Pumpkin‑shaped lantern drawn with the existing lime fill (no orange hue — D2 compliance).
export function Pumpkin({ size = 26, className = '', style, ...rest }) {
  const fillCls = MOUSE_IS_LIME ? 'sngw-fill-lime' : 'sngw-fill-ink'
  return (
    <svg
      className={`sngw sngw-pumpkin ${className}`}
      style={{ ...style }}
      viewBox="0 0 28 27"
      width={size}
      height={size}
      fill="none"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      <ellipse
        className={fillCls}
        stroke="var(--sngw-ink)"
        strokeWidth="1.5"
        cx="14"
        cy="16"
        rx="12"
        ry="9.6"
      />
      <path stroke="var(--sngw-ink)" strokeWidth="1.4" strokeLinecap="round" d="M14.6 6.2c.1-2.2 1-3.6 2.4-4.4" />
      <path
        className={fillCls}
        d="M8.6 12.2l2.6 2-3 1.6c-1.2-1-1.3-2.3.4-3.6ZM19.4 12.2l-2.6 2 3 1.6c1.2-1 1.3-2.3-.4-3.6Z"
      />
      <path
        className={fillCls}
        d="M10.4 17.6h7.2c.8 0 1.2.7.7 1.4l-3 3c-.5.6-1.4.6-1.9 0l-3.7-3c-.5-.7-.1-1.4.7-1.4Z"
      />
      <path
        className={fillCls}
        d="M9.6 17.2c1.4-1.2 3-1.8 4.4-1.8s3 .6 4.4 1.8l1.2.6c-1.9-.9-3.7-1.3-5.6-1.3s-3.7.4-5.6 1.3l1.2-.6Z"
        opacity="0.9"
      />
      <path
        stroke="var(--sngw-ink)"
        strokeWidth="1.2"
        strokeLinecap="round"
        d="M12.6 15c.3-.8.3-1.4.1-2M15.4 14.8a2.7 2.7 0 0 0 0-2"
        opacity="0.85"
      />
    </svg>
  )
}

// Cobweb drawn with the muted fill — always uses an existing token.
export function Cobweb({ size = 44, className = '', style, ...rest }) {
  return (
    <svg
      className={`sngw sngw-cobweb ${className}`}
      style={{ ...style }}
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      <g stroke="var(--sngw-muted)" strokeWidth="1.1" strokeLinecap="round">
        <path d="M0 0h13M0 0v13M0 0l13 13M0 0l20 20" />
        <path d="M2.4 4.9c2.9 1.6 5.3 4 6.7 7.7M4.9 2.4C6.5 5.3 8.9 7.7 12.6 9.1M0 9.4l9.1-.5M9.4 0l-.5 9.1" />
      </g>
      <circle className="sngw-fill-muted" cx="15.5" cy="15.6" r="1" />
    </svg>
  )
}