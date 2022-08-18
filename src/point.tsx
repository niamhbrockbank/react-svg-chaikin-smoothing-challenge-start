export interface Point {
  x: number;
  y: number;
}

export function distance(a: Point, b: Point): number {
  return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
}

export function roundPoint(p: Point): Point {
  return { x: roundedNum(p.x), y: roundedNum(p.y) };
}
function roundedNum(v: number): number {
  return parseFloat(v.toFixed(2));
}

export function multiply({ x, y }: Point, scaling: number): Point {
  return { x: x * scaling, y: y * scaling };
}

export function add(a: Point, b: Point): Point {
  return { x: a.x + b.x, y: a.y + b.y };
}

function lerp(a: number, b: number, fraction: number): number {
  const delta = b - a;
  return a + delta * fraction;
}
export function lerpPoints(a: Point, b: Point, fraction: number): Point {
  return {
    x: lerp(a.x, b.x, fraction),
    y: lerp(a.y, b.y, fraction),
  };
}
