import {Fragment} from 'react';
import cn from 'classnames';
import {BicycleSpareParts} from '../icons';
import {PartType} from './bike-editor-types';
import './bike-part-selector.scss';

interface BikePartSelectorProps {
  value?: PartType;
  onChange?: (part: PartType) => void;
}

export const BikePartSelector = ({value, onChange}: BikePartSelectorProps) => {
  return (
    <>
      {Object.entries(BicycleSpareParts).map(([partsCategory, parts]) => {
        return (
          <div className="partsList" key={partsCategory}>
            {Object.entries(parts).map(([partType, Icon]) => (
              <Fragment key={partType}>
                <span>{partType}</span>
                <Icon
                  className={cn({selectedPart: value === partType})}
                  onClick={() => onChange?.(partType as PartType)}
                />
              </Fragment>
            ))}
          </div>
        );
      })}
    </>
  );
};
