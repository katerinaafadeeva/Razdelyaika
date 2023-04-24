import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { State, User } from './types/types';
// import { RootState, useAppDispatch } from '../../store';
import * as api from '../../App/api';

const initialState: State = {
  user: {},
  error: undefined,
};

export const registrationUser = createAsyncThunk('auth/registration', (action: User) =>
  api.registration(action)
);



export const loginUser = createAsyncThunk('auth/signin', (action: User) => api.login(action));
export const verificationUser = createAsyncThunk('auth/checkUser', () => api.session());
export const logoutUser = createAsyncThunk('auth/logout', () => api.logout());

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    add: (state) => {
      state.user = { ...state.user, name: 'MMMK' };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registrationUser.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(registrationUser.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(verificationUser.fulfilled, (state, action) => {

        state.user = action.payload ?? {};

      })
      .addCase(verificationUser.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(logoutUser.fulfilled, (state, action) => {
        state.user = {};
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export const { add } = authSlice.actions;
export default authSlice.reducer;
