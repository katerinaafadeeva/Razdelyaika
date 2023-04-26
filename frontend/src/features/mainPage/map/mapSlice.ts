import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { State } from './types/State';
import * as api from '../../../App/api';

const initialState: State = {
  ecoPoints: [],
  error: undefined,
};

export const getEcoPoint = createAsyncThunk('map/getEcoPoint', () => api.getEcoPoint());
export const addEcoPoint = createAsyncThunk(
  'map/addEcoPoint',
  (ecoPoint: { pointName: string; pointAddress: string }) => api.addEcoPoint(ecoPoint)
);

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
      })
      .addCase(addEcoPoint.fulfilled, (state, action) => {
        state.ecoPoints = [...state.ecoPoints, action.payload];
      })
      .addCase(addEcoPoint.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default ecoPointSlice.reducer;
