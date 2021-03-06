import { configureStore } from '@reduxjs/toolkit';
import delayedReducer from "../features/delayed-reaction/delayed-reaction-slice";

export const store = configureStore({
  reducer: {
    delayed: delayedReducer,
  },
});
