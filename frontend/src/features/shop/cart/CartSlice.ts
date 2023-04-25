import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { CartState } from '../types/State';
import * as api from '../../../App/api';

import { Product } from '../types/Products';

const initialState: CartState = {
  addedProds: [],
  error: undefined,
};

// GET ALL CART PRODUCTS:

export const getCartProducts = createAsyncThunk('cart/getCartProducts', () =>
  api.getCartProducts()
);

export const removeCartItem = createAsyncThunk(
  'cart/removeCartItem',
  (addedProdId: number) => api.removeCartItem(addedProdId)
);

// adding product to cart:
export const addToCart = createAsyncThunk(
  'cart/addProductToCart',
  (productId: number) => api.addProductToCart(productId)
);

// slicers:
const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(getCartProducts.fulfilled, (state, action) => {
        state.addedProds = action.payload;
      })
      .addCase(getCartProducts.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.addedProds = [...state.addedProds, action.payload];
      })
      .addCase(addToCart.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(removeCartItem.fulfilled, (state, action) => {
        if (Number.isNaN(+action.payload)) {
          state.error = `${action.payload}`;
        }
        state.addedProds = state.addedProds.filter(
          (addedProd) => addedProd.id !== Number(action.payload)
        );
      })
      .addCase(removeCartItem.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default productsSlice.reducer;
