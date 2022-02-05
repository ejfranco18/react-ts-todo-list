import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
} from '@firebase/firestore';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { db } from '../db/firebase';
import { TaskType } from '../Interfaces';
import { RootState } from './store';

export type TaskState = {
  tasks: TaskType[];
};

export const initialTaskState: TaskState = {
  tasks: [],
};

const tasksCollectionRef = collection(db, 'tasks');

export const getTasks = createAsyncThunk('getTasks', async () => {
  const data = await getDocs(tasksCollectionRef);
  const result = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  return result;
});

export const addTaskDB = createAsyncThunk(
  'addTasks',
  async (newTask: TaskType) => {
    const newDoc = await addDoc(tasksCollectionRef, newTask);
    return { ...newTask, id: newDoc.id };
  }
);

export const deleteTaskDB = createAsyncThunk(
  'deleteTasks',
  async (id: string) => {
    const taskDoc = doc(db, 'tasks', id);
    await deleteDoc(taskDoc);
    return id;
  }
);

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
  extraReducers(builder) {
    builder
      .addCase(getTasks.fulfilled, (state, action) => {
        state.tasks = action.payload;
      })
      .addCase(getTasks.rejected, (state) => {
        state.tasks = [];
      })
      .addCase(addTaskDB.fulfilled, (state, action) => {
        state.tasks.push(action.payload);
      })
      .addCase(deleteTaskDB.fulfilled, (state, action) => {
        state.tasks = state.tasks.filter((task) => {
          return task.id !== action.payload;
        });
      })
      .addCase(deleteTaskDB.rejected, (error, action) => {
        console.log(error, action.payload);
      });
  },
});

export const { addTask, deleteTask } = taskSlice.actions;

export const selectTasks = (state: RootState) => state.tasks;

export default taskSlice.reducer;
