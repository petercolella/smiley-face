import React from "react";
import ReactDOM from "react-dom";
import Face from "./Face";

const App = () => {
  return (
    <Face
      height={500}
      width={960}
      eyeOffsetX={80}
      eyeOffsetY={90}
      eyeRadius={40}
      mouthRadius={140}
      mouthWidth={20}
      strokeWidth={20}
    />
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
