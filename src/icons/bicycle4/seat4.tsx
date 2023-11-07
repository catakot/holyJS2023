import React, {CSSProperties} from 'react';
import {IIconProps} from '../iconTypes';

export const Seat4 = React.memo(function Seat4({
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
      viewBox="0 0 11.927785 3.2257595"
      version="1.1"
      
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        id="g23"
        transform="matrix(0.03527778,0,0,-0.03527778,-110.47695,71.815989)"
      >
        <path
          d="m 3133.29,2019.04 c 4.02,24.87 58.48,19.47 107.72,0 49.24,-19.46 106.5,2.29 152.3,0 45.81,-2.29 69.86,-35.5 75.59,-48.09 5.72,-12.6 -18.33,-27.49 -54.97,-17.18 -36.65,10.31 -115.66,-0.03 -153.45,-3.45 -37.79,-3.42 -143.3,-30.91 -127.19,68.72"
          id="path918"
        />
      </g>
    </svg>
  );
});
