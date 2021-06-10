import React from "react";
import BackgroundCircle from "./BackgroundCircle";
import Eye from "./Eye";
import FaceContainer from "./FaceContainer";
import Mouth from "./Mouth";

const Face = ({
  height,
  width,
  eyeOffsetX,
  eyeOffsetY,
  eyeRadius,
  mouthRadius,
  mouthWidth,
  strokeWidth,
}) => {
  const centerX = width / 2;
  const centerY = height / 2;
  const r = centerY - strokeWidth / 2;
  return (
    <FaceContainer
      width={width}
      height={height}
      transform={`translate(${centerX}, ${centerY})`}
    >
      <BackgroundCircle radius={r} strokeWidth={strokeWidth} />
      <Eye cx={-eyeOffsetX} cy={-eyeOffsetY} radius={eyeRadius} />
      <Eye cx={eyeOffsetX} cy={-eyeOffsetY} radius={eyeRadius} />
      <Mouth mouthRadius={mouthRadius} mouthWidth={mouthWidth} />
    </FaceContainer>
  );
};

export default Face;
