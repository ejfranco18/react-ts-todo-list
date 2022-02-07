import React from 'react';

import Button from '../Button/Button';
import CustomCheckbox from '../Checkbox/Checkbox';
import { TaskStyled } from './Task.styled';
import { TaskStyledProps } from './Task.types';

const Task: React.FC<TaskStyledProps> = ({
  task,
  deleteTask,
  completeTask,
}) => {
  return (
    <TaskStyled>
      <div>
        <p>
          <span>Name:</span> {task.taskName}
        </p>
        <p>
          <span>Hours:</span> {task.hours}
        </p>
        <p>
          <span>Details:</span> {task.details}
        </p>
        <div>
          <span>Completed:</span>
          <CustomCheckbox
            checked={task.completed}
            completeAction={completeTask}
          />
        </div>
      </div>
      <Button onClick={deleteTask} text={'Delete'} />
    </TaskStyled>
  );
};

export default Task;
