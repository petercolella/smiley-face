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
      eyeOffsetX={24}
      eyeOffsetY={27}
      eyeRadius={12}
      mouthRadius={42}
      mouthWidth={6}
      strokeWidth={6}
    />
  ));
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
