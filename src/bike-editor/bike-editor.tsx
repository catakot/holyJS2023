import {Button, Popconfirm, Space} from 'antd';
import cn from 'classnames';
import {useCallback, useState} from 'react';
import './bike-editor.scss';
import {PartEditor} from './part-editor';
import {IBikePart, PartType} from './bike-editor-types';
import {AllBicycleSpareParts} from '../icons';
import {createBikePart, exportToFile} from './bike-editor-utils';
import {BikePartSelector} from './bike-part-selector';

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
      <div className={cn('hiddenOverflow bikeEditorLeftColumn')}>
        <div className="addPanel">
          <Space size="middle">
            <Button
              type="primary"
              onClick={onAddPartClick}
              disabled={!partToAdd}
            >
              Добавить
            </Button>
            {partToAdd}
          </Space>
          <Space size="middle">
            <Button
              type="primary"
              disabled={bikeParts.length == 0}
              onClick={() => exportToFile(bikeParts)}
            >
              Экспорт
            </Button>
            <Button
              type="primary"
              danger
              onClick={onRemovePart}
              disabled={!selectedPart}
            >
              Удалить
            </Button>
            <Popconfirm
              title="Очистить"
              description="Удалить все добавленные  детали?"
              onConfirm={onClearClick}
              okText="Да"
              cancelText="Нет"
              disabled={bikeParts.length == 0}
            >
              <Button type="default" disabled={bikeParts.length == 0}>
                Очистить
              </Button>
            </Popconfirm>
          </Space>
        </div>
        <BikePartSelector value={partToAdd} onChange={setPartToAdd} />
      </div>
      <div className={cn('hiddenOverflow bikeEditorRightColumn')}>
        {selectedPart && (
          <PartEditor part={selectedPart} onChange={onPartUpdated} />
        )}
        <div
          className="previewPanel"
          onClick={() => setSelectedPart(undefined)}
        >
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
    </div>
  );
};
