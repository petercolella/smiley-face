import React from "react";
import ReactDOM from "react-dom";
import { range } from "d3";
import Face from "./Face";

const array = range(24);

const App = () => {
  return array.map((_, i) => (
    <Face
      key={i}
      height={150}
      width={150}
      eyeOffsetX={20 + Math.random() * 8}
      eyeOffsetY={20 + Math.random() * 14}
      eyeRadius={8 + Math.random() * 8}
      mouthRadius={34 + Math.random() * 16}
      mouthWidth={3 + Math.random() * 6}
      strokeWidth={4 + Math.random() * 4}
    />
  ));
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
