import { combineReducers, configureStore } from '@reduxjs/toolkit';

import taskReducer, { initialTaskState } from './taskSlice';

const reducers = combineReducers({
  tasks: taskReducer,
});

const preloadedState = {
  tasks: initialTaskState,
};

export const store = configureStore({
  reducer: reducers,
  preloadedState,
});

export type RootState = ReturnType<typeof store.getState>;
