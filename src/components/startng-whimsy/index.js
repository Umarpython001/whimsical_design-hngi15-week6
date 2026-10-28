// startng-whimsy — decorative SVG component kit for the start.ng rebuild.
//
// Always import from this barrel so the stylesheet comes along:
//   import { ArcadeSparkle, FlyingBats, HALLOWEEN, Pumpkin } from './components/startng-whimsy';
//
// Canonical sources — never duplicate a component into a second file
// (duplicate Bat/Ghost exports are exactly what broke the Vercel build):
//   Halloween.jsx  → HALLOWEEN flag + Bat, Ghost, Pumpkin, Cobweb, CandyCorn
//   FlyingBats.jsx → the hero flight layer (the one looping animation)

import './startng-whimsy.css';

export { ArcadeSparkle } from './ArcadeSparkle.jsx';
export { PixelTrail } from './PixelTrail.jsx';
export { GamepadDoodle } from './GamepadDoodle.jsx';
export { ArcadeAccent } from './ArcadeAccent.jsx';
export { WhimsyBackdrop } from './WhimsyBackdrop.jsx';
export { WhimsyBurst } from './WhimsyBurst.jsx';
export { HALLOWEEN, Bat, Ghost, Pumpkin, Cobweb, CandyCorn } from './Halloween.jsx';
export { FlyingBats } from './FlyingBats.jsx';
export { SparkleTrail } from './SparkleTrail.jsx';
