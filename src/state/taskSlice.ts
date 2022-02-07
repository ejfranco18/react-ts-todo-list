import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  getDoc,
  updateDoc,
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
  const result = data.docs.map((doc) => {
    return { 
      id: doc.id,
      taskName: doc.data().taskName,
      hours: doc.data().hours,
      details: doc.data().details,
      completed: doc.data().completed,
    }
  });
  return result;
});

export const addTaskDB = createAsyncThunk(
  'addTasks',
  async (newTask: TaskType) => {
    const newDoc = await addDoc(tasksCollectionRef, newTask);
    return { ...newTask, id: newDoc.id };
  }
);

export const updateTaskDB = createAsyncThunk(
  'updateTasks',
  async (id: string) => {
    console.log('slice update', id)
    const taskDoc = doc(db, 'tasks', id);
    const docSnap = await getDoc(taskDoc);
    const status = !docSnap.data()!.completed
    const updateFields = { completed: status}
    await updateDoc(taskDoc, updateFields);
    return {id, status };
  }
);

export const deleteTaskDB = createAsyncThunk(
  'deleteTasks',
  async (id: string) => {
    console.log('slice delete', id)
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
      .addCase(updateTaskDB.fulfilled, (state, action) => {
        const task = state.tasks.find((task) => {
          return task.id === action.payload.id;
        });
        task!.completed = action.payload.status;
      })
      .addCase(deleteTaskDB.fulfilled, (state, action) => {
        state.tasks = state.tasks.filter((task) => {
          return task.id !== action.payload;
        });
      });
  },
});

export const { addTask, deleteTask } = taskSlice.actions;

export const selectTasks = (state: RootState) => state.tasks;

export default taskSlice.reducer;
