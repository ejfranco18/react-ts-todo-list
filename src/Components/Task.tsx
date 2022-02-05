import React from 'react';

import { TaskType } from '../Interfaces';
import Button from './Button/Button';

interface Props {
  task: TaskType;
  deleteTask(taskId: number): void;
}

const Task = ({ task, deleteTask }: Props) => {
  return (
    <li>
      <div>
        <p>Name: {task.taskName}</p>
        <p>Hours: {task.hours}</p>
        <p>Details: {task.details}</p>
      </div>
      <Button
        onClick={() => {
          deleteTask(task.id);
        }}
        text={'Delete'}
        disabled={false}
      />
    </li>
  );
};

export default Task;
