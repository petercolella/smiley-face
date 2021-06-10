(function (React$1, ReactDOM, d3) {
  'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var React__default = /*#__PURE__*/_interopDefaultLegacy(React$1);
  var ReactDOM__default = /*#__PURE__*/_interopDefaultLegacy(ReactDOM);

  var BackgroundCircle = function (ref) {
    var radius = ref.radius;
    var strokeWidth = ref.strokeWidth;

    return (
      React.createElement( 'circle', {
        r: radius, fill: "yellow", stroke: "black", 'stroke-width': strokeWidth })
    );
  };

  var Eye = function (ref) {
    var cx = ref.cx;
    var cy = ref.cy;
    var radius = ref.radius;

    return React.createElement( 'circle', { cx: cx, cy: cy, r: radius });
  };

  var Mouth = function (ref) {
    var mouthRadius = ref.mouthRadius;
    var mouthWidth = ref.mouthWidth;

    var arcInstance = d3.arc();

    var mouthArc = arcInstance({
      innerRadius: mouthRadius,
      outerRadius: mouthRadius + mouthWidth,
      startAngle: (Math.PI * 9) / 16,
      endAngle: (Math.PI * 23) / 16,
    });

    return React.createElement( 'path', { d: mouthArc });
  };

  var height = 500;
  var width = 960;
  var centerX = width / 2;
  var centerY = height / 2;
  var strokeWidth = 20;
  var eyeOffsetX = 80;
  var eyeOffsetY = 90;
  var eyeRadius = 40;
  var r = centerY - strokeWidth / 2;
  var mouthWidth = 20;
  var mouthRadius = 140;

  var App = function () {
    return (
      React__default['default'].createElement( 'svg', { width: width, height: height },
        React__default['default'].createElement( 'g', { transform: ("translate(" + centerX + ", " + centerY + ")") },
          React__default['default'].createElement( BackgroundCircle, { radius: r, strokeWidth: strokeWidth }),
          React__default['default'].createElement( Eye, { cx: -eyeOffsetX, cy: -eyeOffsetY, radius: eyeRadius }),
          React__default['default'].createElement( Eye, { cx: eyeOffsetX, cy: -eyeOffsetY, radius: eyeRadius }),
          React__default['default'].createElement( Mouth, { mouthRadius: mouthRadius, mouthWidth: mouthWidth })
        )
      )
    );
  };

  var rootElement = document.getElementById("root");
  ReactDOM__default['default'].render(React__default['default'].createElement( App, null ), rootElement);

}(React, ReactDOM, d3));
//# sourceMappingURL=bundle.js.map
