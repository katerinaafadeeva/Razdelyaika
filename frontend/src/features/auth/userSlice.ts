import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { State } from './types/State';
// import { RootState, useAppDispatch } from '../../store';
import * as api from './types/api';

const initialState: State = {
  auth: undefined,
  message: '',
};
export const checkUser = createAsyncThunk('json/checkUser', () =>
  api.checkUser(),
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(checkUser.fulfilled, (state, action) => {
      state.auth = action.payload;
      // console.log(state);
    });
    // builder.addCase(checkUser.rejected, (state, action) => {
    //   state.message = action.payload.message;
    // });
    // builder.addCase();
  },
});

export default userSlice.reducer;
