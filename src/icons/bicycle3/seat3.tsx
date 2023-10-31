import React, {CSSProperties} from 'react';
import {IIconProps} from '../iconTypes';

export const Seat3 = React.memo(function Seat3({
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
      viewBox="0 0 26.458231 11.915009"
      version="1.1"
      
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="layer1">
        <path
          d="m 1.293021,0.31937995 c -0.01191,0 -0.02408,-0.0029 -0.03625,0 C 0.563033,0.34080995 0,0.91204695 0,1.6100179 v 0.837935 c 0,0.08599 0.04233,0.170921 0.110331,0.223308 2.21959,1.731698 4.410604,2.921529 6.934994,4.006321 1.653646,0.37756 4.118239,-1.480344 5.268119,-2.112433 4.173272,-1.52744 9.834827,-1.353609 13.683191,-1.010973 0.112183,0.01032 0.227542,-0.05371 0.278342,-0.154252 0.269875,-0.533665 0.219604,-1.119982 -0.0074,-1.618192 -0.0013,-0.0032 -0.0032,-0.0066 -0.0053,-0.01005 C 25.819364,0.88638595 24.898085,0.35404395 23.92045,0.38923395 15.490296,-0.99321405 9.761802,1.8730169 1.292754,0.32017395 v -7.94e-4 z"
          id="path1"
        />
        <path
          d="m 20.339845,3.5065509 -1.411022,0.03519 c -0.06059,0.0026 -0.120121,0.02567 -0.166952,0.06403 l -2.828396,2.286792 -6.616436,1.187715 -0.313795,-0.255852 c -0.07144,-0.05847 -0.172509,-0.07805 -0.260615,-0.05133 -0.285485,0.08652 -0.557213,0.151341 -0.795338,0.192087 -0.08017,0.01376 -0.15187,0.02514 -0.220662,0.0336 -0.109538,0.01349 -0.207169,0.09631 -0.23786,0.202671 -0.03096,0.105304 0.0071,0.228071 0.09234,0.297921 l 1.095111,0.884237 c 0,0 7.93e-4,0.0032 0.0011,0.0032 0.160602,0.128852 0.365389,0.179123 0.56806,0.14314 h 0.0026 l 2.028299,-0.364089 V 11.63164 c 0,0.148696 0.134937,0.283369 0.283633,0.283369 h 2.883429 c 0.148696,0 0.283369,-0.134937 0.283369,-0.283369 V 7.5483259 l 1.6383,-0.293423 c 0.116681,-0.0209 0.225954,-0.06985 0.318294,-0.144198 l 0.0026,-0.0029 3.833283,-3.098271 c 0.08969,-0.07329 0.126471,-0.204788 0.08758,-0.314061 -0.03863,-0.109273 -0.150019,-0.188383 -0.265906,-0.188912 z"
          id="path2"
        />
      </g>
    </svg>
  );
});
