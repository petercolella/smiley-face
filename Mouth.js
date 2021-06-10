import { arc } from "d3";

const Mouth = ({ mouthRadius, mouthWidth }) => {
  const arcInstance = arc();

  const mouthArc = arcInstance({
    innerRadius: mouthRadius,
    outerRadius: mouthRadius + mouthWidth,
    startAngle: (Math.PI * 9) / 16,
    endAngle: (Math.PI * 23) / 16,
  });

  return <path d={mouthArc} />;
};

export default Mouth;
