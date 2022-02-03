import React, { FC, ChangeEvent, useState } from 'react';

import './App.css';
import Task from './Components/Task';
import { TaskType } from './Interfaces';

const App: FC = () => {
  const [id, setId] = useState<number>(0);
  const [name, setName] = useState<string>('');
  const [hours, setHours] = useState<number>(0);
  const [details, setDetails] = useState<string>('');
  const [todoList, setTodoList] = useState<TaskType[]>([]);

  const handleName = (event: ChangeEvent<HTMLInputElement>): void => {
    setName(event.target.value);
  };

  const handleHours = (event: ChangeEvent<HTMLInputElement>): void => {
    setHours(Number(event.target.value));
  };

  const handleDetails = (event: ChangeEvent<HTMLInputElement>): void => {
    setDetails(event.target.value);
  };

  const addTask = (): void => {
    setId(id + 1);
    const newTask = { id, name, hours, details };
    setTodoList([...todoList, newTask]);
    setName('');
    setHours(0);
    setDetails('');
  };

  const deleteTask = (taskId: number): void => {
    setTodoList(
      todoList.filter((task) => {
        return task.id != taskId;
      })
    );
  };

  return (
    <div>
      <div>
        <div>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={handleName}
          />
          <input
            type="number"
            name="hours"
            value={hours}
            onChange={handleHours}
          />
          <input
            type="text"
            name="details"
            placeholder="Details"
            value={details}
            onChange={handleDetails}
          />
        </div>
        <button onClick={addTask}>Add Task</button>
      </div>
      <div>
        <ul>
          {todoList.map((task: TaskType, key: number) => {
            return <Task key={key} task={task} deleteTask={deleteTask} />;
          })}
        </ul>
      </div>
    </div>
  );
};

export default App;
