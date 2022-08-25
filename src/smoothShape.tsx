import { distance, multiply, Point } from './point';

/**
 * Applies Chaikin smoothing to the given points a number of times, 
 * and returns a new array of points describing the smoothed shape.
 * 
 * @param pts initial Point array representing a shape to be smoothed
 * @param numTimes how many times to smooth
 * @returns new array of Point objects
 */
export function smoothShape(pts: Point[], numTimes: number) {
  //TODO: you need to implement this function!

  let smoothPoints = pts
  let countTimes = numTimes

  while (countTimes > 0){
    smoothPoints = (smoothOnce(smoothPoints))
    countTimes--
  }
  
  return smoothPoints;
}

export function smoothOnce(points : Point[]) :Point[] {
  /*
  for each pair of points
    create one point 1/4 way between
    create another point 3/4 way between

    //Note connect end point with start point as pair
  */
  const outputPoints = []

  for (let i = 0; i < points.length - 1; i++){
    const point1 = points[i]
    const point2 = points[i + 1]

    const quarterPoint = createPointBetween(point1, point2, 0.25)
    const threeQuarterPoint = createPointBetween(point1, point2, 0.75)

    outputPoints.push(quarterPoint, threeQuarterPoint)

  }  

  const quarterLastToFirstPoint = createPointBetween(points[points.length - 1], points[0], 0.25)
  const threeQuarterLastToFirstPoint = createPointBetween(points[points.length - 1], points[0], 0.75)

  outputPoints.push(quarterLastToFirstPoint, threeQuarterLastToFirstPoint)

  return outputPoints
}

function createPointBetween(point1 : Point, point2 : Point, proportion : number):Point{
  const point1ToPoint2 = {x : point2.x - point1.x , y : point2.y - point1.y}

  const scaledP1ToP2 = multiply(point1ToPoint2, proportion)
  const pointBetween = {x : scaledP1ToP2.x + point1.x, y : scaledP1ToP2.y + point1.y}

  return pointBetween
}