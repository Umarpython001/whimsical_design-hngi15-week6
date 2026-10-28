// Halloween seasonal layer for the startng-whimsy kit — user-ordered.
// --------------------------------------------------------------------------
// Palette discipline (D2): everything is drawn in the site's own tokens —
// ink silhouettes, lime lantern, muted web, card-coloured details. No new
// colour ships by default; IF MAIN later defines a `--pumpkin` token, the
// lantern body picks it up automatically (see `.sngw-fill-lantern`).
//
// Motion (D7): static by default; Bat/Ghost accept opt-in hover
// micro-interactions (one-shot, ≤3px); everything is disabled under
// prefers-reduced-motion. Nothing loops.
//
// Flip `HALLOWEEN` to false after the season and the entire layer
// disappears from the page with zero layout edits.

import './startng-whimsy.css';

export const HALLOWEEN = true; // flip to false after Oct 31

const WING =
  'M15.5 7.5C10.8 3.4 5.2 3.2 1.2 6.2c2 .5 3.2 1.5 3.7 3 1.5-.3 2.7.1 3.5 1.2 1.4-.4 2.7 0 3.6 1.1 1.5-.6 2.7-1.9 3.5-4Z';

export function Bat({
  size = 22,
  tone = 'ink', // 'ink' silhouette (default) | 'lime' body + ink eyes
  hoverSwoop = false,
  className = '',
  style,
  ...rest
}) {
  if (!HALLOWEEN) return null;

  const body = tone === 'lime' ? 'sngw-fill-lime sngw-stroke-ink' : 'sngw-fill-ink';
  const eye = tone === 'lime' ? 'sngw-fill-ink' : 'sngw-fill-card';

  return (
    <svg
      className={`sngw sngw-bat${hoverSwoop ? ' sngw-bat--hover' : ''}${className ? ` ${className}` : ''}`}
      style={style}
      width={size}
      height={size * 0.5}
      viewBox="0 0 36 18"
      fill="none"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      <path className={body} d={WING} />
      <path className={body} d={WING} transform="matrix(-1 0 0 1 36 0)" />
      <ellipse className={body} cx="18" cy="9.4" rx="2.7" ry="3.6" />
      <path className={body} stroke="none" d="M16.5 6.4l.7-2.2 1 1.9zM19.5 6.4l-.7-2.2-1 1.9z" />
      <circle className={eye} cx="17" cy="8.6" r="0.85" stroke="none" />
      <circle className={eye} cx="19" cy="8.6" r="0.85" stroke="none" />
    </svg>
  );
}

const GHOST_BODY =
  'M13 2.5c4.7 0 7.6 3.4 7.6 8.1V24l-2.6-2.4-2.5 2.4-2.5-2.4-2.5 2.4-2.5-2.4L5.4 24V10.6C5.4 5.9 8.3 2.5 13 2.5Z';

export function Ghost({
  size = 26,
  tone = 'duo', // 'duo' lime ghost, ink face (default) | 'ink' silhouette
  hoverBoo = false,
  className = '',
  style,
  ...rest
}) {
  if (!HALLOWEEN) return null;

  const body = tone === 'duo' ? 'sngw-fill-lime sngw-stroke-ink' : 'sngw-fill-ink';
  const face = tone === 'duo' ? 'sngw-fill-ink' : 'sngw-fill-card';
  const mouth = tone === 'duo' ? 'sngw-stroke-ink' : 'sngw-stroke-card';

  return (
    <svg
      className={`sngw sngw-ghost${hoverBoo ? ' sngw-ghost--hover' : ''}${className ? ` ${className}` : ''}`}
      style={style}
      width={size}
      height={size * (30 / 26)}
      viewBox="0 0 26 30"
      fill="none"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      <path className={body} strokeWidth="1.6" strokeLinejoin="round" d={GHOST_BODY} />
      <circle className={face} cx="9.6" cy="10.2" r="1.6" stroke="none" />
      <circle className={face} cx="16.4" cy="10.2" r="1.6" stroke="none" />
      <path
        className={mouth}
        strokeWidth="1.4"
        strokeLinecap="round"
        fill="none"
        d="M10.6 14.2c1.4 1.2 3.4 1.2 4.8 0"
      />
    </svg>
  );
}

export function Pumpkin({
  size = 26,
  tone = 'duo', // 'duo' lime lantern + carved ink face (default) | 'ink' outline
  className = '',
  style,
  ...rest
}) {
  if (!HALLOWEEN) return null;

  const bodyClass = tone === 'duo' ? 'sngw-fill-lantern sngw-stroke-ink' : 'sngw-stroke-ink';
  const eyeClass = tone === 'duo' ? 'sngw-fill-ink' : 'sngw-stroke-ink';

  return (
    <svg
      className={`sngw sngw-pumpkin${className ? ` ${className}` : ''}`}
      style={style}
      width={size}
      height={size * (26 / 28)}
      viewBox="0 0 28 26"
      fill="none"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      <ellipse className={bodyClass} strokeWidth="1.5" cx="14" cy="16" rx="12" ry="9.5" />
      {tone === 'duo' && (
        <path
          className="sngw-stroke-ink"
          strokeWidth="1"
          opacity="0.35"
          fill="none"
          d="M9.3 7.2C7.9 12.4 7.9 19.6 9.3 24.8M18.7 7.2c1.4 5.2 1.4 12.4 0 17.6"
        />
      )}
      <path
        className="sngw-stroke-ink"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        d="M13.4 6.6c-.6-2.3.2-4.2 2.2-5.6"
      />
      <path
        className={eyeClass}
        strokeWidth={tone === 'duo' ? undefined : 1.3}
        fill={tone === 'duo' ? undefined : 'none'}
        d="M8.4 12.4l3 1-2.5 2.1c-.7-1-.8-2.1-.5-3.1ZM19.6 12.4l-3 1 2.5 2.1c.7-1 .8-2.1.5-3.1Z"
      />
      <path
        className="sngw-stroke-ink"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        d="M8.6 18.2l1.9 1 1.7-1 1.9 1 1.7-1 1.9 1 1.7-1"
      />
    </svg>
  );
}

export function Cobweb({ size = 40, className = '', style, ...rest }) {
  if (!HALLOWEEN) return null;

  return (
    <svg
      className={`sngw sngw-web${className ? ` ${className}` : ''}`}
      style={style}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      <g className="sngw-stroke-muted" strokeWidth="1.1" strokeLinecap="round" opacity="0.8">
        <path d="M0 0l22 3M0 0l15.6 15.6M0 0l3 22" />
        <path d="M11.6 1.6Q9.4 9.4 1.6 11.6" />
        <path d="M19.2 2.6Q15 15 2.6 19.2" />
      </g>
    </svg>
  );
}

export function CandyCorn({ size = 16, className = '', style, ...rest }) {
  if (!HALLOWEEN) return null;

  return (
    <svg
      className={`sngw sngw-corn${className ? ` ${className}` : ''}`}
      style={style}
      width={size}
      height={size * (18 / 14)}
      viewBox="0 0 14 18"
      fill="none"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      <path
        className="sngw-fill-ink"
        stroke="none"
        d="M3 12h8l1.8 4.3c.3.8-.2 1.5-1 1.5H2.2c-.8 0-1.3-.7-1-1.5L3 12Z"
      />
      <path className="sngw-fill-card" stroke="none" d="M4.5 8h5L11 12H3l1.5-4Z" />
      <path className="sngw-fill-lime" stroke="none" d="M4.5 8L7 1.2 9.5 8h-5Z" />
      <path
        className="sngw-stroke-ink"
        strokeWidth="1.2"
        strokeLinejoin="round"
        d="M7 1.2l5.8 14.3c.3.8-.2 1.5-1 1.5H2.2c-.8 0-1.3-.7-1-1.5L7 1.2Z"
      />
    </svg>
  );
}
