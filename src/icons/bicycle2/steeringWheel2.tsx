import React, {CSSProperties} from 'react';
import {IIconProps} from '../iconTypes';

export const SteeringWheel2 = React.memo(function SteeringWheel2({
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
      viewBox="0 0 5.42731 2.837811"
      version="1.1"
    >
      <path
        d="M 2.8323323,2.8233249 2.9892707,2.1818448 4.33048,2.194181 C 4.9353244,2.1997442 5.42731,1.701963 5.42731,1.09709 5.42731,0.492218 4.93535,0 4.33048,0 H 0.28137 C 0.12609,0 0,0.12609 0,0.281378 0,0.436665 0.12609,0.562756 0.28137,0.562756 h 4.04911 c 0.29456,0 0.53408,0.239779 0.53408,0.534334 0,0.294556 -0.23952,0.534335 -0.53408,0.534335 H 2.58847 c -0.0891,0 -0.17286,0.04237 -0.22609,0.113946 -0.053,0.07157 -0.069,0.164073 -0.0431,0.249339 L 2.5755,2.837811"
        id="path1"
      />
    </svg>
  );
});
