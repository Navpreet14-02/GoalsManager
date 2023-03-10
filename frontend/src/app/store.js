import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/Auth/authSlice';
import goalReducer from '../features/Goals/goalSlice';

export const store = configureStore({
  reducer: {
    goals:goalReducer,
    auth:authReducer,
  },
});
