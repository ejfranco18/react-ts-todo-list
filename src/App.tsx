import React, { FC, ChangeEvent, useState, useMemo } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';

import Button from './components/Button/Button';
import Input from './components/Input/Input';
import Theme from './components/Styles/theme';
import Task from './components/Task';
import TextArea from './components/TextArea/TextArea';
import { TaskType } from './Interfaces';
import { addTask, deleteTask, selectTasks } from './state/taskSlice';

const App: FC = () => {
  const [taskName, setTaskName] = useState<string>('');
  const [hours, setHours] = useState<number>(0);
  const [details, setDetails] = useState<string>('');
  const tasksStates = useSelector(selectTasks).tasks;
  const dispatch = useDispatch();

  const handleName = (event: ChangeEvent<HTMLInputElement>): void => {
    setTaskName(event.target.value);
  };

  const handleHours = (event: ChangeEvent<HTMLInputElement>): void => {
    setHours(Number(event.target.value));
  };

  const handleDetails = (event: ChangeEvent<HTMLTextAreaElement>): void => {
    setDetails(event.target.value);
  };

  const currentId = useMemo(() => {
    if (tasksStates.length) {
      return tasksStates[tasksStates.length - 1].id;
    }
    return 0;
  }, [tasksStates]);

  const handleAddTask = (): void => {
    dispatch(
      addTask({
        id: currentId + 1,
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

  const handleDeleteTask = (taskId: number): void => {
    console.log('IDDD', taskId);
    dispatch(deleteTask(taskId));
  };

  const disabledButton = !(taskName && hours && details);

  return (
    <Theme>
      <main>
        <div className="form-wrapper">
          <div>
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
          </div>
          <Button
            onClick={handleAddTask}
            text={'Add task'}
            disabled={disabledButton}
          />
        </div>
        <div className="list-wrapper">
          <ul>
            {tasksStates.map((task: TaskType, key: number) => {
              return (
                <Task key={key} task={task} deleteTask={handleDeleteTask} />
              );
            })}
          </ul>
        </div>
      </main>
    </Theme>
  );
};

export default App;
