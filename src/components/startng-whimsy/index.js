// startng-whimsy — decorative SVG component kit for the start.ng rebuild.
//
// Always import from this barrel so the stylesheet comes along:
//   import { ArcadeSparkle, PixelTrail, GamepadDoodle, ArcadeAccent, WhimsyBackdrop }
//     from './components/startng-whimsy';
// Halloween seasonal layer (user-ordered; flip HALLOWEEN to false after Oct 31):
//   import { Bat, Ghost, Pumpkin, Cobweb, CandyCorn, HALLOWEEN } from './components/startng-whimsy';
//
// See README.md in this directory for the full integration guide.

import './startng-whimsy.css';

export { ArcadeSparkle } from './ArcadeSparkle.jsx';
export { PixelTrail } from './PixelTrail.jsx';
export { GamepadDoodle } from './GamepadDoodle.jsx';
export { ArcadeAccent } from './ArcadeAccent.jsx';
export { WhimsyBackdrop } from './WhimsyBackdrop.jsx';

export { HALLOWEEN, Bat, Ghost, Pumpkin, Cobweb, CandyCorn } from './Halloween.jsx';
