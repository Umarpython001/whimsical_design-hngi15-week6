// WhimsyBackdrop — a sparse composition of corner marks for a section
// background. Render it as the first child of a `position: relative` section
// (e.g. give the section the `sngw-anchor` class). Marks hug the corners in
// faint tones, never intercept clicks (pointer-events: none), and stay quiet:
// no animation at all (decision D7).
//
// Props:
//   variant     — 'corners' (default) | 'frame' (adds two faint mid-edge
//                 marks) | 'halloween' (seasonal: cobweb, bat, pumpkin, ghost
//                 — see Halloween.jsx; gated by the HALLOWEEN flag)
//   flip        — mirror the whole composition horizontally
//   hideOnSmall — hide below 700px viewports, default true (keeps phones clean)
//   className/style — passthrough

import { useEffect, useRef } from 'react';
import './startng-whimsy.css';
import { ArcadeAccent } from './ArcadeAccent.jsx';
import { Bat, Cobweb, Ghost, Pumpkin } from './Halloween.jsx';

export function WhimsyBackdrop({
  variant = 'corners',
  flip = false,
  hideOnSmall = true,
  className = '',
  style,
  ...rest
}) {
  const ref = useRef(null);

  // Dev-time guard: corner marks position against the nearest positioned
  // ancestor. Warn loudly if the caller forgot `position: relative`, instead
  // of scattering marks over the page.
  useEffect(() => {
    const parent = ref.current?.parentElement;
    if (parent && getComputedStyle(parent).position === 'static') {
      console.warn(
        '[startng-whimsy] WhimsyBackdrop: parent has position:static. Add `position: relative` (e.g. the `sngw-anchor` class) so the marks anchor to the section, not the page.',
      );
    }
  }, []);

  const classes = [
    'sngw-backdrop',
    `sngw-backdrop--${variant === 'frame' ? 'frame' : variant === 'halloween' ? 'halloween' : 'corners'}`,
    flip && 'sngw-backdrop--flip',
    hideOnSmall && 'sngw-backdrop--responsive',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const yearRound = (
    <>
      <span className="sngw-backdrop__mark sngw-backdrop__m-tl">
        <ArcadeAccent variant="sparkle" size={16} tone="ink" />
      </span>
      <span className="sngw-backdrop__mark sngw-backdrop__m-tr">
        <ArcadeAccent variant="cross" size={12} tone="muted" />
      </span>
      <span className="sngw-backdrop__mark sngw-backdrop__m-br">
        <ArcadeAccent variant="pixels" size={44} tone="ink" />
      </span>
      <span className="sngw-backdrop__mark sngw-backdrop__m-bl">
        <ArcadeAccent variant="dots" size={12} tone="muted" />
      </span>
    </>
  );

  return (
    <div ref={ref} className={classes} style={style} aria-hidden="true" {...rest}>
      {variant === 'halloween' ? (
        <>
          <span className="sngw-backdrop__mark sngw-backdrop__m-tl">
            <Cobweb size={40} />
          </span>
          <span className="sngw-backdrop__mark sngw-backdrop__m-tr">
            <Bat size={20} />
          </span>
          <span className="sngw-backdrop__mark sngw-backdrop__m-br">
            <Pumpkin size={22} tone="ink" />
          </span>
          <span className="sngw-backdrop__mark sngw-backdrop__m-bl">
            <Ghost size={18} tone="ink" />
          </span>
        </>
      ) : (
        yearRound
      )}
      {variant === 'frame' && (
        <>
          <span className="sngw-backdrop__mark sngw-backdrop__m-t">
            <ArcadeAccent variant="dots" size={10} tone="muted" />
          </span>
          <span className="sngw-backdrop__mark sngw-backdrop__m-b">
            <ArcadeAccent variant="cross" size={10} tone="muted" />
          </span>
        </>
      )}
    </div>
  );
}
