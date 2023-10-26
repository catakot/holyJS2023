import {Select, Button} from 'antd';
import cn from 'classnames';
import {useCallback, useState} from 'react';
import './bike-editor.scss';
import {PartEditor} from './part-editor';
import {IBikePart, PartType} from './bike-ediotr-types';
import {AllBicycleSpareParts} from '../icons';
import {createBikePart} from './bike-editor-utils';

const {Option} = Select;

export const BikeEditor = () => {
  const [selectedPart, setSelectedPart] = useState<IBikePart | undefined>();
  const [partToAdd, setPartToAdd] = useState<PartType>('frame1');
  const [bikeParts, setBikeParts] = useState<IBikePart[]>([]);
  const onAddPartClick = () => {
    const newPart = createBikePart(partToAdd);
    setBikeParts((prev) => [...prev, newPart]);
    setSelectedPart(newPart);
  };
  const onRemovePart = () => {
    setBikeParts((prev) => prev.filter((p) => p.id !== selectedPart?.id));
    setSelectedPart(undefined);
  };

  const onClearClick = () => {
    setBikeParts([]);
    setSelectedPart(undefined);
  };

  const onPartUpdated = useCallback((changes: IBikePart) => {
    setBikeParts((prev) =>
      prev.map((p) => {
        if (p.id === changes.id) {
          return changes;
        }
        return p;
      }),
    );
    setSelectedPart(changes);
  }, []);

  return (
    <div className="bikeEditor">
      <div className="addPanel">
        <Select
          style={{minWidth: '200px'}}
          onChange={setPartToAdd}
          value={partToAdd}
        >
          {Object.entries(AllBicycleSpareParts).map(([partName]) => (
            <Option value={partName}>{partName}</Option>
          ))}
        </Select>
        <Button type="primary" onClick={onAddPartClick}>
          Добавить
        </Button>
        <Button
          type="primary"
          danger
          onClick={onRemovePart}
          disabled={!selectedPart}
        >
          Удалить
        </Button>
        <Button
          type="default"
          onClick={onClearClick}
          disabled={bikeParts.length == 0}
        >
          Очистить
        </Button>
      </div>
      {selectedPart && (
        <PartEditor part={selectedPart} onChange={onPartUpdated} />
      )}
      <div className="previewPanel" onClick={() => setSelectedPart(undefined)}>
        {bikeParts.map((p) => {
          const Img = AllBicycleSpareParts[p.type];
          return (
            <Img
              onClick={(e) => {
                e.stopPropagation();
                setSelectedPart(p);
              }}
              className={cn('previewImg', {
                previewImgActive: p.id === selectedPart?.id,
              })}
              key={p.id}
              color={p.color}
              width={p.width}
              x={p.x}
              y={p.y}
              angle={p.angle}
            />
          );
        })}
      </div>
    </div>
  );
};
