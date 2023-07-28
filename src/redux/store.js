import { configureStore } from '@reduxjs/toolkit';
import tagUpdateReducer from './tagUpdateSlice';
import tagDeleteReducer from './tagDeleteSlice';
import goalUpdateReducer from './goalUpdateSlice';
import dbReducer from './dbSlice';

export const store = configureStore({
   reducer: {
      tagUpdate: tagUpdateReducer,
      tagDelete: tagDeleteReducer,
      goalUpdate: goalUpdateReducer,
      db: dbReducer
   },
})