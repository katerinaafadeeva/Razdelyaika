import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { State } from './types/State';
import * as api from '../../../App/api';

const initialState: State = {
  ecoPoints: [],
  error: undefined,
};

export const getEcoPoint = createAsyncThunk('map/getEcoPoint', () => api.getEcoPoint());

const ecoPointSlice = createSlice({
  name: 'map',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getEcoPoint.fulfilled, (state, action) => {
        state.ecoPoints = action.payload;
      })
      .addCase(getEcoPoint.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default ecoPointSlice.reducer;
