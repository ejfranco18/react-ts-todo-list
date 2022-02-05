import React from 'react';

import { TaskType } from '../Interfaces';
import Button from './Button/Button';

interface Props {
  task: TaskType;
  deleteTask: () => void;
  completeTask: () => void;
}

const Task = ({ task, deleteTask, completeTask }: Props) => {
  return (
    <li>
      <div>
        <p>Name: {task.taskName}</p>
        <p>Hours: {task.hours}</p>
        <p>Details: {task.details}</p>
        {!task.completed && <Button onClick={completeTask} text={'Complete'} />}
      </div>
      <Button onClick={deleteTask} text={'Delete'} />
    </li>
  );
};

export default Task;
