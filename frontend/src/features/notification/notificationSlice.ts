import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { SET_NOTIFICATION, NotificationAction, iNotification } from './types/Notic';

const initialState: iNotification = {
  message: '',
  type: 'success',
};

const notificationSlice = createSlice({
  name: 'notic',
  initialState,
  reducers: {
    setMessage: (state, action) => {
      state.message = action.payload.message;
    },
    setType: (state, action) => {
      state.type = action.payload.message;
    },
  },
  extraReducers: {},
});

export const { setMessage, setType } = notificationSlice.actions;

export default notificationSlice.reducer;
