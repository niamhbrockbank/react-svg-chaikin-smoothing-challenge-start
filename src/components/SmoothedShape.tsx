import { generateShape } from '../shapes';
import { smoothShape } from '../smoothShape';

const seedrandom = require('seedrandom');

const palette = ['#452e3c', '#ff3d5a', '#ffb969', '#eaf27e', '#3b8c88'];
interface SmoothedShapeProps {
  maxRadius: number,
  numIterations: number,
  seed: number,
  numVertices: number,
  shouldShowOriginal: boolean,
  shouldShowSmoothed: boolean
}
export function SmoothedShape({
  maxRadius,
  numIterations,
  seed,
  numVertices,
  shouldShowOriginal,
  shouldShowSmoothed
}: SmoothedShapeProps) {
  const rng = seedrandom(seed);
  const pts = generateShape(numVertices, maxRadius, rng);
  const ptsSmoothed = smoothShape(pts, numIterations);

  function makePathCmd(pts: { x: number; y: number }[]) {
    // Example path: "M 10 10 L 100 80 L 50 30 Z"
    // means: move to 10,10, draw line to 100,80, draw line to 50,30, close shape:
    const [firstPt, ...otherPts] = pts;

    return (
      `M ${firstPt.x} ${firstPt.y} ` +
      otherPts.map((pt) => `L ${pt.x} ${pt.y}`).join(' ') +
      ' Z'
    );
  }
  return (
    <div>
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        {/* original path */}
        {shouldShowOriginal && (
          <path d={makePathCmd(pts)} stroke={palette[3]} fill="transparent" />
        )}

        {/* original points */}
        {shouldShowOriginal &&
          pts.map((pt) => (
            <circle
              cx={pt.x}
              cy={pt.y}
              r="2"
              stroke={palette[2]}
              fill="transparent"
            />
          ))}
        {/* smoothed path */}
        {shouldShowSmoothed &&
          < path
            d={makePathCmd(ptsSmoothed)}
            stroke={palette[1]}
            fill="transparent"
          />
        }
        {/* smoothed points */}
        {shouldShowSmoothed &&
          ptsSmoothed.map((pt) => (
            <circle cx={pt.x} cy={pt.y} r="0.5" fill={palette[0]} />
          ))
        }
      </svg>
    </div>
  );
}
