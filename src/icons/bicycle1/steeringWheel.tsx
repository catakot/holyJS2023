import React, {CSSProperties} from 'react';
import {IIconProps} from '../iconTypes';

export const SteeringWheel1 = React.memo(function SteeringWheel1({
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
      width={`${width}px`}
      style={style}
      fill={color}
      className={className}
      viewBox="0 0 7.613667 3.2605522"
      version="1.1"
      id="svg1"
    >
      <g
        id="g9"
        transform="matrix(0.03527778,0,0,-0.03527778,-59.294171,143.53206)"
      >
        <path
          d="m 1690.77,3976.2 c -5.31,0 -9.73,4.18 -9.98,9.54 -0.25,5.52 4.01,10.2 9.53,10.45 90.62,4.2 173.14,21.88 173.14,37.1 -5.04,11.46 -77.33,18.18 -154.66,14.18 -5.45,-0.31 -10.23,3.95 -10.5,9.47 -0.29,5.51 3.95,10.22 9.46,10.5 23.57,1.23 142.41,6.04 168.81,-19.03 5.69,-5.41 6.89,-11.2 6.89,-15.12 0,-43.5 -134.42,-54.4 -192.22,-57.08 -0.16,0 -0.31,-0.01 -0.47,-0.01"
          id="path246"
        />
        <path
          d="m 1896.6,4033.29 c 0,-12.78 -10.36,-23.14 -23.14,-23.14 -12.78,0 -23.13,10.36 -23.13,23.14 0,12.78 10.35,23.14 23.13,23.14 12.78,0 23.14,-10.36 23.14,-23.14"
          id="path242"
        />
      </g>
    </svg>
  );
});
