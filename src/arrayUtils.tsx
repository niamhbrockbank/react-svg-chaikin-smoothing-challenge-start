export function zip<T, U>(arr1: T[], arr2: U[]): [T, U][] {
  console.assert(arr1.length === arr2.length, 'arrays must be same len');
  return arr1.map((el, ix) => [el, arr2[ix]]);
}
