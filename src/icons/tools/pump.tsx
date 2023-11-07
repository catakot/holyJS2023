import React, {CSSProperties} from 'react';
import {IIconProps} from '../iconTypes';

export const Pump = React.memo(function Pump({
  className,
  color,
  x,
  y,
  onClick,
  width = 100,
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
      height={`${width}px`}
      style={style}
      fill={color}
      className={className}
      viewBox="0 0 1.11974 1.96022"
      version="1.1"
    >
      <path
        d="m 0.13998,5e-5 a 0.07000435,0.07000435 0 0 0 -0.0703,0.06973 0.07000435,0.07000435 0 0 0 0.0703,0.07028 h 0.14015 a 0.07000435,0.07000435 0 0 0 -1.4e-4,0.0021 V 0.560272 H 0.0697 A 0.07001138,0.07001138 0 0 0 0,0.630002 V 1.89049 A 0.07001138,0.07001138 0 0 0 0.0697,1.96022 H 0.62988 1.05004 A 0.07000435,0.07000435 0 0 0 1.11974,1.89049 0.07000435,0.07000435 0 0 0 1.05004,1.82021 H 0.69961 V 0.629952 A 0.07001138,0.07001138 0 0 0 0.62991,0.560222 H 0.42017 V 0.14211 A 0.07000435,0.07000435 0 0 0 0.42003,0.14001 H 0.56017 A 0.07000435,0.07000435 0 0 0 0.62987,0.06973 0.07000435,0.07000435 0 0 0 0.56017,0 Z m 0,0.70018 H 0.56014 V 1.820163 H 0.13998 Z"
        id="path1"
      />
    </svg>
  );
});
