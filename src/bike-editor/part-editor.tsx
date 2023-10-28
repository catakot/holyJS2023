import {ColorPicker, Slider, Space} from 'antd';
import './bike-editor.scss';
import {IBikePart} from './bike-editor-types';
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
          style={{width: '100px'}}
          max={1000}
          onChange={(value) => {
            onChange({...part, width: value});
          }}
        />
      </Space>
      <Space direction="vertical" align="start">
        Поворот:
        <Slider
          value={part.angle}
          min={0}
          style={{width: '100px'}}
          max={360}
          onChange={(value) => {
            onChange({...part, angle: value});
          }}
        />
      </Space>
      <Space direction="vertical" align="start">
        X:
        <Slider
          value={part.x}
          min={0}
          max={1000}
          style={{width: '150px'}}
          onChange={(value) => {
            onChange({...part, x: value});
          }}
        />
      </Space>
      <Space direction="vertical" align="start">
        Y:
        <Slider
          value={part.y}
          min={0}
          max={1000}
          style={{width: '150px'}}
          onChange={(value) => {
            onChange({...part, y: value});
          }}
        />
      </Space>
    </div>
  );
};
