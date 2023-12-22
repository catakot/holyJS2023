import React, {useState} from 'react';
import {Radio, Typography} from 'antd';
import {AllBicycleSpareParts} from '../icons';
import {Link, useParams} from 'react-router-dom';
import {TASKS} from './task-list-constants';
import './task.scss';
import {Timer} from './timer';

export const Task = React.memo(() => {
  const {taskId} = useParams();
  const task = TASKS[Number(taskId)];
  if (!task) {
    return <Typography.Title level={1}>Task not found</Typography.Title>;
  }

  const [showResult, setShowResult] = useState<boolean>(false);
  return (
    <div className="task">
      <Typography.Title level={1}>
        <Link to="/tasks">{'< '}</Link>
        {task.title}
      </Typography.Title>
      <Radio.Group
        value={showResult ? 'preview' : 'description'}
        size="large"
        onChange={(e) => setShowResult(e.target.value === 'preview')}
      >
        <Radio.Button value="description">Описание</Radio.Button>
        <Radio.Button value="preview">Результат</Radio.Button>
      </Radio.Group>
      {!showResult && (
        <>
          <div className="description">
            {task.description.map((item, i) => (
              <Typography.Title key={i} level={1}>
                {item}
              </Typography.Title>
            ))}
          </div>
          <Timer />
        </>
      )}
      {showResult && (
        <div className="previewPanel">
          {task.bikeParts.map((p) => {
            const Img = AllBicycleSpareParts[p.type];
            return (
              <Img
                className="previewImg"
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
      )}
    </div>
  );
});
