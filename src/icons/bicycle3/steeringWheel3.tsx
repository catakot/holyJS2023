import React, {CSSProperties} from 'react';
import {IIconProps} from '../iconTypes';

export const SteeringWheel3 = React.memo(function SteeringWheel3({
  className,
  color,
  x,
  y,
  onClick,
  width,
  angle,
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
      viewBox="0 0 13.420772 6.8384047"
      version="1.1"
      
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        id="g16"
        transform="matrix(0.03527778,0,0,-0.03527778,-56.352927,82.69304)"
      >
        <path
          d="m 1964.24,2150.21 h -145.43 c -7.51,0 -13.6,6.09 -13.6,13.6 0,7.51 6.09,13.6 13.6,13.6 h 127.46 l -16.92,60.04 c -16.25,57.64 -76.38,91.47 -134.11,75.4 l -180.58,-50.32 c -7.24,-2 -14.74,2.21 -16.75,9.45 -2.02,7.24 2.21,14.73 9.44,16.75 l 180.59,50.31 c 72.12,20.13 147.28,-22.17 167.59,-94.21 l 21.8,-77.33 c 1.15,-4.09 0.32,-8.5 -2.25,-11.89 -2.57,-3.4 -6.58,-5.4 -10.84,-5.4"
          id="path702"
        />
      </g>
    </svg>
  );
});
