/** 
 * Generate a random number within the given bounds, using the given random number generation function
 * @param mn minimum bound
 * @param mx maximum bound
 * @param rng - seeded random function (see npm seedrandom) 
 * @return float between mn and mx
 * */
export function random(mn: number, mx: number, rng: () => number) {
  const delta = mx - mn;
  return mn + delta * rng();
}
