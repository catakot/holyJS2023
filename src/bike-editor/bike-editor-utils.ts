import {v4 as uuid} from 'uuid';
import {IBikePart, PartType} from './bike-editor-types';

export const createBikePart = (type: PartType): IBikePart => ({
  id: uuid(),
  type,
  color: '#ffffff',
  width: 100,
  x: 10,
  y: 10,
});

export const exportToFile = (parts: IBikePart[]) => {
  const link = document.createElement('a');
  const file = new Blob([JSON.stringify(parts)], {type: 'text/plain'});

  link.href = URL.createObjectURL(file);

  link.download = 'sample.txt';

  link.click();
  URL.revokeObjectURL(link.href);
  document.removeChild(link);
};
