import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { State } from './types/State';
import * as api from '../../App/api';
import { productId } from './types/Products';

const initialState: State = {
  products: [],
  error: undefined,
};

export const getProducts = createAsyncThunk('shop/getProducts', () =>
  api.getProducts()
);

export const getParamProducts = createAsyncThunk(
  'shop/getProduct/:id',
  () => api.getParamProducts
);

export const addProduct = createAsyncThunk(
  '/shop/addProduct',
  (newProduct: {
    productName: string;
    productPrice: number;
    productDescript: string;
  }) => api.addProduct(newProduct)
);

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.fulfilled, (state, action) => {
        state.products = action.payload;
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.products = [...state.products, action.payload];
      })
      .addCase(addProduct.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default productsSlice.reducer;
