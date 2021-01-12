import { configureStore } from '@reduxjs/toolkit';
import diseaseReducer from './features/diseaseSlice';

const store = configureStore({
  reducer: {
    disease: diseaseReducer,
  },
});

export default store;
