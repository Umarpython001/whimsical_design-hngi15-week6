// Halloween whimsy layer — start.ng × Halloween Oct 28–31.
// All motifs are drawn SVG in the page's own palette (ink / lime / muted);
// the ONLY extended hue is the pumpkin's orange, scoped to these components.
// Static by default; motion is interaction-triggered (hover) or one-shot
// settle-in, and every animation is disabled under prefers-reduced-motion.
// Flip HALLOWEEN to false after Halloween and the layer disappears.

import './startng-whimsy.css'

export const HALLOWEEN = true

export function Bat({ size = 22, tone = 'ink', delay = 0, className = '', style, ...rest }) {
  // Scalloped-wing bat silhouette, viewBox 0 0 32 16
  const body = tone === 'lime' ? 'sngw-fill-lime' : 'sngw-fill-ink'
  const eye = tone === 'lime' ? 'sngw-fill-ink' : 'sngw-fill-lime'
  return (
    <svg
      className={`sngw sngw-hw sngw-bat ${className}`}
      style={{ ...style, '--sngw-delay': `${delay}ms` }}
      viewBox="0 0 32 16"
      width={size}
      height={size * 0.5}
      fill="none"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      <path
        className={body}
        d="M16 5.2c.9 0 1.9.35 2.6 1l.9-.6c1.1-1.9 3-3.3 5.4-3.4-1.2 1.9-1.5 3.4-1 5.4l4.4 2.6c1.6.9 2.9 1.2 4.7 1.2-1.3 1.7-3 2.4-5 2.2l-4.5-.4c-.9-.1-1.7.5-2.5 1.2-.9.8-2 1.2-3.1 1.2h-1.8c-1.1 0-2.2-.4-3.1-1.2-.8-.7-1.6-1.3-2.5-1.2l-4.5.4c-2 .2-3.7-.5-5-2.2 1.8 0 3.1-.3 4.7-1.2l4.4-2.6c.5-2 .2-3.5-1-5.4 2.4.1 4.3 1.5 5.4 3.4l.9.6c.7-.65 1.7-1 2.6-1Z"
      />
      <circle className={eye} cx="14.6" cy="7.4" r="0.8" />
      <circle className={eye} cx="17.4" cy="7.4" r="0.8" />
    </svg>
  )
}

export function Ghost({ size = 26, tone = 'duo', className = '', style, ...rest }) {
  // Friendly wandering ghost with ink eyes; viewBox 0 0 27 28
  return (
    <svg
      className={`sngw sngw-hw sngw-ghost ${className}`}
      style={{ ...style, '--sngw-delay': '0ms' }}
      viewBox="0 0 27 28"
      width={size}
      height={size}
      fill="none"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      <path
        className={tone === 'duo' ? 'sngw-fill-card' : 'sngw-fill-ink'}
        stroke="var(--sngw-ink)"
        strokeWidth="1.6"
        strokeLinejoin="round"
        d="M13.5 2.4c4.4 0 7.3 3.4 7.3 7.6v15.2c0 .7-.8 1-1.3.6l-2-1.8c-.4-.4-1-.4-1.4 0l-1.5 1.5c-.4.4-1 .4-1.4 0l-1.5-1.5c-.4-.4-1-.4-1.4 0l-1.5 1.5c-.4.4-1 .4-1.4 0l-2-1.8c-.5-.4-1.3-.1-1.3.6V10c0-4.2 2.9-7.6 7.4-7.6Z"
      />
      <circle className="sngw-fill-ink" cx="9.9" cy="9.6" r="1.7" />
      <circle className="sngw-fill-ink" cx="17.1" cy="9.6" r="1.7" />
      <path stroke="var(--sngw-ink)" strokeWidth="1.4" strokeLinecap="round" d="M11.5 13.4c1.2 1.1 2.8 1.1 4 0" />
    </svg>
  )
}

export function Pumpkin({ size = 26, className = '', style, ...rest }) {
  // Jack-o'-lantern: body in the one pumpkin-orange, carved ink face, lime smile glow
  return (
    <svg
      className={`sngw sngw-hw sngw-pumpkin ${className}`}
      style={{ ...style, '--sngw-delay': '0ms' }}
      viewBox="0 0 28 27"
      width={size}
      height={size}
      fill="none"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      <ellipse
        className="sngw-fill-pumpkin"
        stroke="var(--sngw-ink)"
        strokeWidth="1.5"
        cx="14"
        cy="16"
        rx="12"
        ry="9.6"
      />
      <path stroke="var(--sngw-ink)" strokeWidth="1.4" strokeLinecap="round" d="M14.6 6.2c.1-2.2 1-3.6 2.4-4.4" />
      <path
        className="sngw-fill-ink"
        d="M8.6 12.2l2.6 2-3 1.6c-1.2-1-1.3-2.3.4-3.6ZM19.4 12.2l-2.6 2 3 1.6c1.2-1 1.3-2.3-.4-3.6Z"
      />
      <path
        className="sngw-fill-ink"
        d="M10.4 17.6h7.2c.8 0 1.2.7.7 1.4l-3 3c-.5.6-1.4.6-1.9 0l-3.7-3c-.5-.7-.1-1.4.7-1.4Z"
      />
      <path
        className="sngw-fill-lime"
        d="M9.6 17.2c1.4-1.2 3-1.8 4.4-1.8s3 .6 4.4 1.8l1.2.6c-1.9-.9-3.7-1.3-5.6-1.3s-3.7.4-5.6 1.3l1.2-.6Z"
        opacity="0.9"
      />
      <path stroke="var(--sngw-ink)" strokeWidth="1.2" strokeLinecap="round" d="M12.6 15c.3-.8.3-1.4.1-2M15.4 14.8a2.7 2.7 0 0 0 0-2" opacity="0.85" />
    </svg>
  )
}

export function Cobweb({ size = 44, className = '', style, ...rest }) {
  // Quarter cobweb for a corner; viewBox 0 0 24 24
  return (
    <svg
      className={`sngw sngw-hw sngw-cobweb ${className}`}
      style={{ ...style, '--sngw-delay': '0ms' }}
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
