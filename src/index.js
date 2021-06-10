import React from "react";
import ReactDOM from "react-dom";
import BackgroundCircle from "./BackgroundCircle";
import Eye from "./Eye";
import Mouth from "./Mouth";

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

const App = () => {
  return (
    <svg width={width} height={height}>
      <g transform={`translate(${centerX}, ${centerY})`}>
        <BackgroundCircle radius={r} strokeWidth={strokeWidth} />
        <Eye cx={-eyeOffsetX} cy={-eyeOffsetY} radius={eyeRadius} />
        <Eye cx={eyeOffsetX} cy={-eyeOffsetY} radius={eyeRadius} />
        <Mouth mouthRadius={mouthRadius} mouthWidth={mouthWidth} />
      </g>
    </svg>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
