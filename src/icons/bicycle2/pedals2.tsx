import React, {CSSProperties} from 'react';
import cn from 'classnames';
import {IIconProps} from '../iconTypes';

export const Pedals2 = React.memo(function Pedals2({
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
      viewBox="0 0 23.812498 18.520832"
      version="1.1"
      id="svg1"
    >
      <path
        d="m 23.151041,17.197916 h -2.38125 l -4.233333,-4.233333 c 0.820208,-1.031875 1.296458,-2.301875 1.296458,-3.704167 0,-3.280833 -2.672292,-5.953124 -5.953125,-5.953124 -1.402291,0 -2.69875,0.47625 -3.704166,1.296458 L 4.894791,1.322917 h 1.058334 c 0.370416,0 0.661458,-0.291042 0.661458,-0.661459 C 6.614583,0.291042 6.323541,0 5.953125,0 H 0.661458 C 0.291041,0 0,0.291042 0,0.661458 0,1.031875 0.291041,1.322917 0.661458,1.322917 h 2.38125 L 7.276041,5.55625 C 6.455833,6.588125 5.979583,7.858125 5.979583,9.260416 c 0,3.280834 2.672292,5.953125 5.953125,5.953125 1.402291,0 2.69875,-0.47625 3.704166,-1.296458 l 3.280834,3.280833 h -1.058334 c -0.370416,0 -0.661458,0.291042 -0.661458,0.661459 0,0.370416 0.291042,0.661458 0.661458,0.661458 h 5.291667 c 0.370417,0 0.661458,-0.291042 0.661458,-0.661458 0,-0.370417 -0.291041,-0.661459 -0.661458,-0.661459 z M 11.90625,13.890625 c -2.54,0 -4.630209,-2.090209 -4.630209,-4.630209 0,-2.539999 2.090209,-4.630208 4.630209,-4.630208 2.539999,0 4.630208,2.090209 4.630208,4.630208 0,1.031875 -0.343959,1.984375 -0.926042,2.778125 L 12.382499,8.784167 c -0.264583,-0.264584 -0.687916,-0.264584 -0.926041,0 -0.264583,0.264583 -0.264583,0.687916 0,0.926041 l 3.227916,3.254375 c -0.79375,0.582083 -1.74625,0.926042 -2.778124,0.926042 z"
        id="path1"
      />
    </svg>
  );
});
