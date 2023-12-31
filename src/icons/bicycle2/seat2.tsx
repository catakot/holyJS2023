import React, {CSSProperties} from 'react';
import {IIconProps} from '../iconTypes';

export const Seat2 = React.memo(function Seat2({
  className,
  color,
  x,
  y,
  onClick,
  angle,
  width,
}: IIconProps) {
  const style: CSSProperties = {};
  if (y) {
    style.top = `${y}`;
  }
  if (x) {
    style.left = `${x}`;
  }
  return (
    <svg
      transform={angle ? `rotate(${angle})` : undefined}
      onClick={onClick}
      width={width ? `${width}px` : undefined}
      style={style}
      fill={color}
      className={className}
      viewBox="0 0 9.056159 3.7739198"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        id="g18"
        transform="matrix(0.03527778,0,0,-0.03527778,-129.82399,148.64107)"
      >
        <path
          d="m 3875.43,4207.71 c 3.15,14.06 -41.76,-1.46 -71.54,-6.96 -28.73,-5.3 -59.97,-2.59 -86.2,-2.59 -31.86,0 -37.64,-2.32 -37.64,-24.82 0,-7.91 7.63,-25.4 20.15,-15.41 17.02,13.57 72.33,5.85 93.46,0.93 28.42,-6.61 63.73,-31.77 81.77,48.85"
          id="path470"
        />
        <path
          d="m 3826.76,4163.34 h 110 v 11.25 h -110 v -11.25"
          id="path474"
        />
        <path
          d="m 3811.74,4106.47 h -10 v 4.85 c 0,11.8 -9.6,21.4 -21.39,21.4 h -37.19 c -17.32,0 -31.4,14.08 -31.4,31.4 v 6.72 h 10 v -6.72 c 0,-11.8 9.6,-21.4 21.4,-21.4 h 37.19 c 17.31,0 31.39,-14.08 31.39,-31.4 v -4.85"
          id="path476"
        />
      </g>
    </svg>
  );
});
