import React from 'react';
import ReactDOM from 'react-dom';
import { arc } from 'd3';

const height = 500;
const width = 960;
const centerX = width / 2;
const centerY = height / 2;
const strokeWidth = 20;
const eyeOffsetX = 80;
const eyeOffsetY = 90;
const eyeRadius = 40;
const r = centerY - strokeWidth / 2;
const mouthWidth = 20;
const mouthRadius = 140;

const arcInstance = arc();

const mouthArc = arcInstance({
  innerRadius: mouthRadius,
  outerRadius: mouthRadius + mouthWidth,
  startAngle: (Math.PI * 9) / 16,
  endAngle: (Math.PI * 23) / 16,
});

const App = () => {
  return (
    <svg width={width} height={height}>
      <g transform={`translate(${centerX}, ${centerY})`}>
        <circle
          r={r}
          fill="yellow"
          stroke="black"
          stroke-width={strokeWidth}
        />
        <circle
          cx={-eyeOffsetX}
          cy={-eyeOffsetY}
          r={eyeRadius}
        />
        <circle
          cx={eyeOffsetX}
          cy={-eyeOffsetY}
          r={eyeRadius}
        />
        <path d={mouthArc} />
      </g>
    </svg>
  );
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
