import {MouseEventHandler} from 'react';

export enum Colors {
  Red = 'red',
  orange = 'orange',
  yellow = 'yellow',
  green = 'green',
  aqua = 'aqua',
  blue = 'blue',
  pink = 'pink',
  purple = 'purple',
  grey = 'grey',
}
export interface IIconProps {
  onClick?: MouseEventHandler<SVGSVGElement>;
  className?: string;
  color?: string;
  width?: number;
  x?: number;
  y?: number;
  angle?: number;
}
