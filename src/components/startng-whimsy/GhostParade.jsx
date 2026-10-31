// GhostParade — super-obvious ambient ghosts (user-ordered, Oct 31, v2).
// --------------------------------------------------------------------------
// A full-viewport haunt: translucent ghosts drift ACROSS the screen, over the
// page content (cards, headlines, everything), below the nav. Sharing the
// engineering profile of FlyingBats so it stays playful without getting bossy:
//   - 5 ghosts, 24–46px, drawn by the CANONICAL Ghost in Halloween.jsx
//     (composed here — no duplicate silhouette, per the barrel rule)
//   - TRANSLUCENT on purpose (user order): svg opacity 0.58–0.70, so they
//     read as ghosts hovering over content and never block readability
//   - three nested motion layers: an edge-to-edge crossing on the outer div
//     (enters from one side, exits the other, eases in/out like it glides
//     from nowhere), a vertical bob on the middle div, a gentle sway (±7deg)
//     on the svg — every layer desynced per ghost, negative delays, so no
//     ghost ever "takes off"; the screen is always hunted by 2–3 of them
//   - the layer is position: fixed, pointer-events: none, aria-hidden, and
//     overflow-hidden so no ghost can cause scrollbars; z-index 5 keeps it
//     above sections/cards but far below the nav's z-30
//   - under prefers-reduced-motion every layer parks — crossers get explicit
//     in-view park spots so reduced-motion users still see the haunt (in the
//     upper band, away from the centre of the page)
//   - below 640px the parade hides entirely (phones stay clean, like bats)
//   - season-gated THROUGH Ghost: when HALLOWEEN flips false, Ghost renders
//     null and the parade becomes an empty invisible layer
//
// Lane heights, durations, delays, tempos and opacity live in
// startng-whimsy.css (`.sngw-ghostparade__*`); the JSX carries only the
// inline size so the svg scales crisply.

import './startng-whimsy.css';
import { Ghost } from './Halloween.jsx';

const GHOSTS = [
  { drift: 'a', tone: 'duo', size: 46 },
  { drift: 'b', tone: 'ink', size: 30 },
  { drift: 'c', tone: 'duo', size: 38 },
  { drift: 'd', tone: 'duo', size: 24 },
  { drift: 'e', tone: 'duo', size: 34 },
];

function ParadeGhost({ drift, tone, size }) {
  return (
    <div className={`sngw-ghostparade__ghost sngw-ghostparade__ghost--${drift}`}>
      <div className="sngw-ghostparade__bob">
        <Ghost size={size} tone={tone} className="sngw-ghostparade__svg" />
      </div>
    </div>
  );
}

export function GhostParade({ className = '', style }) {
  return (
    <div
      className={`sngw-ghostparade${className ? ` ${className}` : ''}`}
      style={style}
      aria-hidden="true"
    >
      {GHOSTS.map((ghost) => (
        <ParadeGhost key={ghost.drift} {...ghost} />
      ))}
    </div>
  );
}
