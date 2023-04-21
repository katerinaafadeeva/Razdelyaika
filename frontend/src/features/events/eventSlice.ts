import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { State } from './types/State';
import * as api from '../../App/api';

const initialState: State = {
  events: [],
  error: undefined,
};

export const getEvent = createAsyncThunk('events/getEvent', () => api.getEvents());

const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getEvent.fulfilled, (state, action) => {
      state.events = action.payload;
    });
  },
});

export default eventsSlice.reducer;
