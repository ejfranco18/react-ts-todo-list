import { createSlice } from '@reduxjs/toolkit';

import { TaskType } from '../Interfaces';
import { RootState } from './store';

export type TaskState = {
  tasks: TaskType[];
};

export const initialTaskState: TaskState = {
  tasks: [
    {
      id: 1,
      taskName: 'First task',
      hours: 5,
      details: 'some details ...',
      completed: false,
    },
    {
      id: 2,
      taskName: 'Second task',
      hours: 8,
      details: 'some details ...',
      completed: false,
    },
    {
      id: 3,
      taskName: 'Third task',
      hours: 4,
      details: 'some details ...',
      completed: false,
    },
  ],
};

export const taskSlice = createSlice({
  name: 'task',
  initialState: initialTaskState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => {
        return task.id !== action.payload;
      });
    },
  },
});

export const { addTask, deleteTask } = taskSlice.actions;

export const selectTasks = (state: RootState) => state.tasks;

export default taskSlice.reducer;
