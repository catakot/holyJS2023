import {ColorPicker, Slider, Space, InputNumber} from 'antd';
import './bike-editor.scss';
import {IBikePart} from './bike-ediotr-types';
import './part-editor.scss';

type PartEditorProps = {part: IBikePart; onChange: (part: IBikePart) => void};

export const PartEditor = (props: PartEditorProps) => {
  const {part, onChange} = props;
  return (
    <div className="partEditor">
      <Space direction="vertical" align="start">
        Цвет:
        <ColorPicker
          showText
          style={{width: '100px'}}
          value={part.color}
          onChange={(_, color) => {
            onChange({...part, color});
          }}
        />
      </Space>
      <Space direction="vertical" align="start">
        Размер:
        <Slider
          value={part.width}
          min={0}
          style={{width: '150px'}}
          max={1000}
          onChange={(value) => {
            onChange({...part, width: value});
          }}
        />
      </Space>
      <Space direction="vertical" align="start">
        X:
        <InputNumber
          value={part.x}
          onChange={(value) => {
            onChange({...part, x: value || 0});
          }}
        />
      </Space>
      <Space direction="vertical" align="start">
        Y:
        <InputNumber
          value={part.y}
          onChange={(value) => {
            onChange({...part, y: value || 0});
          }}
        />
      </Space>
      <Space direction="vertical" align="start">
        Поворот:
        <Slider
          value={part.angle}
          min={0}
          style={{width: '150px'}}
          max={360}
          onChange={(value) => {
            onChange({...part, angle: value});
          }}
        />
      </Space>
    </div>
  );
};
