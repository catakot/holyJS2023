import React, {CSSProperties} from 'react';
import cn from 'classnames';
import {IIconProps} from '../iconTypes';

export const Pedals3 = React.memo(function Pedals3({
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
      className={cn('rotate', className)}
      viewBox="0 0 11.690351 14.45119"
      version="1.1"
      id="svg1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        id="g14"
        transform="matrix(0.03527778,0,0,-0.03527778,-63.435798,55.696912)"
      >
        <path
          d="m 2115.96,1551.61 h -95.47 c -7.51,0 -13.6,6.09 -13.6,13.6 0,7.51 6.09,13.6 13.6,13.6 h 95.47 c 7.51,0 13.6,-6.09 13.6,-13.6 0,-7.51 -6.09,-13.6 -13.6,-13.6"
          id="path486"
        />
        <path
          d="m 1861.82,1173.41 c -2.2,0 -4.43,0.53 -6.5,1.66 -6.6,3.6 -9.02,11.86 -5.43,18.45 l 102.05,186.98 c 3.59,6.59 11.84,9.04 18.45,5.42 6.59,-3.59 9.02,-11.85 5.42,-18.45 l -102.04,-186.98 c -2.47,-4.52 -7.13,-7.08 -11.95,-7.08"
          id="path704"
        />
        <path
          d="m 1907.25,1169.17 h -95.47 c -7.51,0 -13.6,6.09 -13.6,13.6 0,7.51 6.09,13.6 13.6,13.6 h 95.47 c 7.51,0 13.6,-6.09 13.6,-13.6 0,-7.51 -6.09,-13.6 -13.6,-13.6"
          id="path706"
        />
        <path
          d="m 1963.86,1360.39 c -2.2,0 -4.43,0.53 -6.5,1.66 -6.59,3.6 -9.02,11.86 -5.42,18.45 l 102.03,186.98 c 3.6,6.59 11.85,9.04 18.46,5.42 6.59,-3.59 9.02,-11.85 5.42,-18.45 l -102.04,-186.98 c -2.47,-4.52 -7.13,-7.08 -11.95,-7.08"
          id="path484"
        />
      </g>
    </svg>
  );
});
