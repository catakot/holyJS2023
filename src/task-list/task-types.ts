import {IBikePart} from '../bike-editor/bike-editor-types';

export interface ITask {
  title: string;
  description: string[];
  bikeParts: IBikePart[];
}
