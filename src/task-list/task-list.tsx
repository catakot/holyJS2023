import React from 'react';
import './task-list.scss';
import {TASKS} from './task-list-constants';
import {Link} from 'react-router-dom';
import {Button} from 'antd';

export const TaskList = React.memo(() => {
  return (
    <div className="taskList">
      {TASKS.map((task, i) => (
        <Button type="link">
          <Link to={`/tasks/${i}`}>
            <span className="taskInTaskList">{task.title}</span>
          </Link>
        </Button>
      ))}
    </div>
  );
});
