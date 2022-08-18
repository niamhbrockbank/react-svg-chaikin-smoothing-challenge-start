import * as React from 'react';
import { Checkbox } from './Checkbox';
import { SmoothedShape } from './SmoothedShape';
import './App.css';

export default function App() {
  const [seed, setSeed] = React.useState(0);
  const [numVertices, setNumVertices] = React.useState(4);
  const [numIterations, setNumIterations] = React.useState(2);
  const [shouldShowOriginal, setShouldShowOriginal] = React.useState(true);
  const [shouldShowSmoothed, setShouldShowSmoothed] = React.useState(true);
  return (
    <div className="container">
      <h1>Chaikin smoothing</h1>
      <div className="controls">
        <SmoothedShape
          maxRadius={100}
          numIterations={numIterations}
          numVertices={numVertices}
          shouldShowOriginal={shouldShowOriginal}
          shouldShowSmoothed={shouldShowSmoothed}
          seed={seed}
        />
        Seed:{' '}
        <input
          type="number"
          min="0"
          max="999999999"
          value={seed}
          onChange={(ev) => setSeed(parseInt(ev.target.value))}
        />
        <br />
        Num vertices:{' '}
        <input
          type="number"
          min="3"
          max="10"
          value={numVertices}
          onChange={(ev) => setNumVertices(parseInt(ev.target.value))}
        />
        <br />
        Num of smoothing iterations:{' '}
        <input
          type="number"
          min="0"
          max="6"
          value={numIterations}
          onChange={(ev) => setNumIterations(parseInt(ev.target.value))}
        />
        <br />
        <Checkbox
          label="show original unsmoothed shape"
          onChange={() => {
            setShouldShowOriginal((p) => !p);
          }}
          value={shouldShowOriginal}
        />
        <br />
        <Checkbox
          label="show smoothed shape"
          onChange={() => {
            setShouldShowSmoothed((p) => !p);
          }}
          value={shouldShowSmoothed}
        />
      </div>
    </div>
  );
}
