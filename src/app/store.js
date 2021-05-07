import { configureStore } from '@reduxjs/toolkit';
import delayedReducer from "../features/delayed-reaction/delayed-reaction";

export const store = configureStore({
  reducer: {
    delayed: delayedReducer,
  },
});
