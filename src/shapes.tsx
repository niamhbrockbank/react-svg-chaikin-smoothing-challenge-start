import { random } from './math';
import { add } from './point';

/** 
Generate and return a random shape with n corners.
@param: rng seeded random number generator
@returns a list of points (vectors) defining the shape.
*/
export function generateShape(n: number, maxRadius: number, rng: () => number) {
  const pts = [];
  const centre = { x: maxRadius / 2, y: maxRadius / 2 };
  for (let i = 0; i < n; i++) {
    const angle = (2 * Math.PI * (i + random(-0.1, 0.1, rng))) / n;
    const radius = random(0.2, 0.45, rng) * maxRadius;
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    const pt = { x, y };
    pts.push(add(pt, centre));
  }
  return pts;
}
