import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { State } from './types/State';

const initialState: State = {
  products: [],
  error: undefined,
};

export const getProducts = createAsyncThunk('shop/getProducts', () =>
  api.getProducts()
);

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });
  },
});

export default productsSlice.reducer;
