import React, { FC, ChangeEvent, useState, useEffect } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';

import Button from './components/Button/Button';
import Input from './components/Input/Input';
import Theme from './components/Styles/theme';
import Task from './components/Task/Task';
import TextArea from './components/TextArea/TextArea';
import { TaskType } from './Interfaces';
import {
  selectTasks,
  getTasks,
  addTaskDB,
  deleteTaskDB,
  updateTaskDB,
} from './state/taskSlice';

const App: FC = () => {
  const [taskName, setTaskName] = useState<string>('');
  const [hours, setHours] = useState<number>(0);
  const [details, setDetails] = useState<string>('');
  const tasksStates = useSelector(selectTasks).tasks;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTasks());
  }, [dispatch]);

  const handleName = (event: ChangeEvent<HTMLInputElement>): void => {
    setTaskName(event.target.value);
  };

  const handleHours = (event: ChangeEvent<HTMLInputElement>): void => {
    setHours(Number(event.target.value));
  };

  const handleDetails = (event: ChangeEvent<HTMLTextAreaElement>): void => {
    setDetails(event.target.value);
  };

  const handleAddTask = (): void => {
    dispatch(
      addTaskDB({
        id: '',
        taskName,
        hours,
        details,
        completed: false,
      })
    );
    setTaskName('');
    setHours(0);
    setDetails('');
  };

  const handleDeleteTask = (taskId: string): void => {
    dispatch(deleteTaskDB(taskId));
  };

  const handleCompleteTask = (taskId: string): void => {
    dispatch(updateTaskDB(taskId))
  };

  const disabledButton = !(taskName && hours && details);

  return (
    <Theme>
      <main>
        <h1>TODO LIST</h1>
        <div className="form-wrapper">
            <Input
              type="text"
              name="taskName"
              placeholder="Task"
              value={taskName}
              onChange={handleName}
            />
            <Input
              type="number"
              name="hours"
              value={hours}
              onChange={handleHours}
            />
            <TextArea
              name="details"
              placeholder="Details"
              value={details}
              onChange={handleDetails}
            />
          <Button
            onClick={handleAddTask}
            text={'Add task'}
            disabled={disabledButton}
          />
        </div>
          <div className='tasks-container'>
            {tasksStates.map((task: TaskType, key: number) => {
              return (
                <Task
                  key={key}
                  task={task}
                  deleteTask={() => handleDeleteTask(task.id)}
                  completeTask={() => handleCompleteTask(task.id)}
                />
              );
            })}
          </div>
      </main>
    </Theme>
  );
};

export default App;
