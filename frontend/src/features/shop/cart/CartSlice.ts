import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { CartState } from '../types/State';
import * as api from '../../../App/api';

import { Product } from '../types/Products';

const initialState: CartState = {
  products: [],
  error: undefined,
};

// GET ALL CART PRODUCTS:

export const getCartProducts = createAsyncThunk('cart/getCartProducts', () =>
  api.getCartProducts()
);

// slicers:
const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(getCartProducts.fulfilled, (state, action) => {
        state.products = action.payload;
      })
      .addCase(getCartProducts.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default productsSlice.reducer;
