
import { configureStore } from '@reduxjs/toolkit';
import inputReducer from './reducers/inputSlice';

const store = configureStore({
  reducer: {
    input: inputReducer
  },
});

export default store;
