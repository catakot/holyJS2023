import React, {CSSProperties} from 'react';
import {IIconProps} from '../iconTypes';

export const Basket2 = React.memo(function Basket2({
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
      viewBox="0 0 16.40416 16.404167"
      version="1.1"
    >
      <path d="M 15.370636,5.986198 H 13.885358 L 11.023357,0.518962 C 10.855667,0.198827 10.527264,0 10.166047,0 9.824464,0 9.514923,0.174408 9.337933,0.466508 9.161199,0.758738 9.150089,1.113886 9.308473,1.416579 v 1.3e-4 L 11.70064,5.986198 H 4.703504 L 7.095557,1.416709 h 1.29e-4 C 7.254074,1.114015 7.242964,0.758868 7.066106,0.466638 6.889242,0.174408 6.579701,0 6.238248,0 5.876772,0 5.548239,0.198824 5.380808,0.518962 L 2.518807,5.986198 H 1.033529 C 0.463667,5.986198 0,6.449865 0,7.019727 0,7.589589 0.463667,8.053255 1.033529,8.053255 h 0.09647 l 1.110816,7.011718 c 0.122989,0.776052 0.782381,1.339194 1.567993,1.339194 h 8.786545 c 0.785741,0 1.44513,-0.563145 1.567862,-1.339194 l 1.110816,-7.011718 h 0.0966 c 0.569991,0 1.033528,-0.463666 1.033528,-1.033528 0,-0.569862 -0.463537,-1.033529 -1.033528,-1.033529 z M 9.777181,1.171247 c -0.07286,-0.139268 -0.06796,-0.296235 0.01344,-0.430593 0.08139,-0.134358 0.218334,-0.211487 0.375431,-0.211487 0.163554,0 0.312642,0.09018 0.388606,0.235257 l 2.733424,5.221774 H 12.297961 Z M 5.849642,0.764294 c 0.07583,-0.144952 0.224793,-0.235127 0.388607,-0.235127 0.157096,0 0.29378,0.07713 0.375171,0.211487 0.08139,0.13436 0.0863,0.291325 0.01344,0.430593 L 4.106211,5.986198 H 3.11609 Z m 7.791127,14.217994 c -0.08217,0.517282 -0.521673,0.892709 -1.045414,0.892709 H 3.80881 c -0.52374,0 -0.963377,-0.37543 -1.045284,-0.892709 L 1.665789,8.053255 h 2.385639 v 5.527313 c 0,0.57671 0.469223,1.045932 1.045932,1.045932 0.57671,0 1.045933,-0.469222 1.045933,-1.045932 V 8.053255 h 1.012859 v 5.527313 c 0,0.57671 0.469223,1.045932 1.045932,1.045932 0.57671,0 1.045933,-0.469222 1.045933,-1.045932 V 8.053255 h 1.012859 v 5.527313 c 0,0.57671 0.469223,1.045932 1.045932,1.045932 0.57671,0 1.04593,-0.469222 1.04593,-1.045932 V 8.053255 h 2.385645 l -1.097609,6.929036 z M 4.580595,8.053255 h 1.033531 v 5.527313 c 0,0.284996 -0.23177,0.516766 -0.516766,0.516766 -0.284996,0 -0.516765,-0.23177 -0.516765,-0.516766 z m 3.104721,0 h 1.033529 v 5.527313 c 0,0.284996 -0.23177,0.516766 -0.516766,0.516766 -0.284996,0 -0.516766,-0.23177 -0.516766,-0.516766 V 8.053255 Z m 3.104721,0 h 1.033526 v 5.527313 c 0,0.284996 -0.231767,0.516766 -0.516763,0.516766 -0.284996,0 -0.516765,-0.23177 -0.516765,-0.516766 V 8.053255 Z M 15.370636,7.524089 H 1.033527 c -0.278149,0 -0.504362,-0.226214 -0.504362,-0.504362 0,-0.278149 0.226213,-0.504362 0.504362,-0.504362 h 14.337109 c 0.278019,0 0.504362,0.226213 0.504362,0.504362 0,0.278148 -0.226343,0.504362 -0.504362,0.504362 z" />
    </svg>
  );
});