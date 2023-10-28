import {AllBicycleSpareParts} from '../icons';
import {IIconProps} from '../icons/iconTypes';

export type PartType = keyof typeof AllBicycleSpareParts;

export interface IBikePart extends Omit<IIconProps, 'onClick'> {
  id: string;
  type: PartType;
}
