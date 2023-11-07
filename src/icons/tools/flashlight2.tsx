import React, {CSSProperties} from 'react';
import {IIconProps} from '../iconTypes';

export const Flashlight2 = React.memo(function Flashlight2({
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
      viewBox="0 0 9.3460655 6.4770002"
      version="1.1"
    >
      <g id="layer1">
        <rect x="5.881691" y="3.055933" width="3.444875" height="0.41274998" />
        <rect
          x="5.6741657"
          y="2.0524645"
          width="3.5692291"
          height="0.41274998"
          transform="rotate(-2.6099997)"
        />
        <rect
          x="5.5404515"
          y="0.92474079"
          width="3.7041667"
          height="0.41274998"
          transform="rotate(-4.660001)"
        />
        <rect
          x="-4.5102358"
          y="5.972188"
          width="0.41274998"
          height="3.5692291"
          transform="rotate(-87.39)"
        />
        <rect
          x="-5.6255541"
          y="6.0722494"
          width="0.41274998"
          height="3.7041667"
          transform="rotate(-85.339999)"
        />
        <path d="M 4.082521,0 C 3.418417,0 0,0.635 0,3.2385 0,5.842 3.431646,6.477 4.082521,6.477 4.733396,6.477 5.291667,5.02708 5.291667,3.2385 5.291667,1.44991 4.754563,0 4.082521,0 Z m 0,6.2177 c -0.362479,0 -0.656166,-1.32291 -0.656166,-2.95275 0,-1.62983 0.293687,-2.95275 0.656166,-2.95275 0.362479,0 0.889,1.32292 0.889,2.95275 0,1.62984 -0.523875,2.95275 -0.889,2.95275 z" />
      </g>
    </svg>
  );
});
