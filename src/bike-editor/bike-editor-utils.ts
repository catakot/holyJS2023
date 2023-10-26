import {v4 as uuid} from 'uuid';
import {IBikePart, PartType} from './bike-ediotr-types';

export const createBikePart = (type: PartType): IBikePart => ({
  id: uuid(),
  type,
  color: '#ffffff',
  width: 100,
  x: 10,
  y: 10,
});
