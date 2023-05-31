import { configureStore } from '@reduxjs/toolkit';
import tagUpdateReducer from './tagUpdateSlice';

export const store = configureStore({
   reducer: {
      tagUpdate: tagUpdateReducer
   },
})