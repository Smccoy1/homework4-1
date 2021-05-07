import { createSlice } from '@reduxjs/toolkit';

export const delayedSlice = createSlice({
  name: 'delayed',
  initialState: {
      value: '',
  },
  reducers: {
    storeValue: (state, action) => {
        console.log(action.payload);
      state.value = action.payload;
    },
  },
});

export const { storeValue } = delayedSlice.actions;

export const selectValue = (state) => state.delayed.value;

export default delayedSlice.reducer;