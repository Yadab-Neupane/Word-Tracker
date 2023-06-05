import { configureStore } from '@reduxjs/toolkit';
import tagUpdateReducer from './tagUpdateSlice';
import tagDeleteReducer from './tagDeleteSlice';
import dbReducer from './dbSlice';

export const store = configureStore({
   reducer: {
      tagUpdate: tagUpdateReducer,
      tagDelete: tagDeleteReducer,
      db: dbReducer
   },
})