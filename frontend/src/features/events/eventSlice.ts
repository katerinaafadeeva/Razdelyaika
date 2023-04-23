import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { State } from './types/State';
import * as api from '../../App/api';
import { Event, EventAdd, EventId, EventUpd } from './types/Event';

const initialState: State = {
  events: [],
  error: undefined,
};

export const getEvent = createAsyncThunk('events/getEvent', () => api.getEvents());

export const addEvent = createAsyncThunk('events/addEvent', (newEvent: EventAdd) =>
  api.addNewEvent(newEvent)
);

export const removeEvent = createAsyncThunk('events/removeEvent', (eventId: number) =>
  api.removeEvent(eventId)
);

export const editEvent = createAsyncThunk(
  'events/editEvent',
  (updateEvent: {
    id: EventId;
    eventName: string;
    eventDescription: string;
    eventAddress: string;
    eventDate: string;
    isActive: boolean;
  }) => api.updateEvent(updateEvent)
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
      })
      .addCase(removeEvent.fulfilled, (state, action) => {
        console.log(action.payload);
        if (Number.isNaN(+action.payload)) {
          state.error = `${action.payload}`;
        }
        state.events = state.events.filter((event) => event.id !== Number(action.payload));
      })
      .addCase(removeEvent.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(editEvent.fulfilled, (state, action) => {
        state.events = state.events.map((event) =>
          event.id === action.payload.id ? action.payload : event
        );
      })
      .addCase(editEvent.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default eventsSlice.reducer;
