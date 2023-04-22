import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { State } from './types/State';
import * as api from '../../App/api';
import { Event, EventAdd } from './types/Event';

const initialState: State = {
  events: [],
  error: undefined,
};

export const getEvent = createAsyncThunk('events/getEvent', () => api.getEvents());

export const addEvent = createAsyncThunk('events/addEvent', (newEvent: EventAdd) =>
  api.addNewEvent(newEvent)
);

const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getEvent.fulfilled, (state, action) => {
        state.events = action.payload;
      })
      .addCase(getEvent.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(addEvent.fulfilled, (state, action) => {
        state.events = [...state.events, action.payload];
      })
      .addCase(addEvent.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default eventsSlice.reducer;
