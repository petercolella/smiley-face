import React from "react";

const FaceContainer = ({ width, height, transform, children }) => {
  return (
    <svg width={width} height={height}>
      <g transform={transform}>{children}</g>
    </svg>
  );
};

export default FaceContainer;
