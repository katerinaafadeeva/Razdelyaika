import { createSlice } from '@reduxjs/toolkit';
import { State } from './types/State';

const initialState: State = {
  products: [],
  error: undefined,
};
