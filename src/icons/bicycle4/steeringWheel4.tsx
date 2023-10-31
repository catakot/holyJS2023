import React, {CSSProperties} from 'react';
import {IIconProps} from '../iconTypes';

export const SteeringWheel4 = React.memo(function SteeringWheel4({
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
      onClick={onClick}
      transform={angle ? `rotate(${angle})` : undefined}
      width={`${width}px`}
      style={style}
      fill={color}
      className={className}
      viewBox="0 0 3.5102301 2.7768099"
      version="1.1"
      
    >
      <path
        d="M 2.20001,2.77681 1.94257,1.96639 h 0.96494 c 0.0622,0.077 0.15637,0.127 0.26299,0.127 0.18759,0 0.33973,-0.15214 0.33973,-0.33973 0,-0.11298 -0.0558,-0.21246 -0.14076,-0.27437 C 3.29117,0.63527 2.83448,0.1868 1.9812,0.11695 1.9225,0.04605 1.83489,0 1.73567,0 H 0.31909 C 0.14288,0 0,0.14288 0,0.31909 0,0.4953 0.14288,0.63818 0.31909,0.63818 h 1.41658 c 0.0897,0 0.17066,-0.0373 0.22833,-0.0966 0.62971,0.0521 0.9234,0.33813 0.98161,0.95911 -0.0138,0.0124 -0.0265,0.0259 -0.0384,0.0405 H 1.6515 c -0.068,0 -0.13176,0.0323 -0.17171,0.0871 -0.04,0.0548 -0.0513,0.12541 -0.031,0.18997 L 1.7401,2.73478"
        id="path1"
      />
    </svg>
  );
});
