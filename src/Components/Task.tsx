import React from 'react';

import { TaskType } from '../Interfaces';

interface Props {
  task: TaskType;
  deleteTask(taskId: number): void;
}

const Task = ({ task, deleteTask }: Props) => {
  return (
    <li>
      <div>
        <p>Name: {task.name}</p>
        <p>Hours: {task.hours}</p>
        <p>Details: {task.details}</p>
      </div>
      <button
        onClick={() => {
          deleteTask(task.id);
        }}
      >
        Delete
      </button>
    </li>
  );
};

export default Task;
