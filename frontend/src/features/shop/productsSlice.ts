import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { State } from './types/State';
import * as api from '../../App/api';
import { Product } from './types/Products';
// import { productId } from './types/Products';

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

// added remove fn :

export const removeProduct = createAsyncThunk(
  '/shop/removeProduct',
  (productId: number) => api.removeProduct(productId)
);

// added update fn:

export const updateProduct = createAsyncThunk(
  'education/updateProduct',
  (product: Product) => api.updateProduct(product)
);

// slicers:
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
      })
      .addCase(removeProduct.fulfilled, (state, action) => {
        if (Number.isNaN(+action.payload)) {
          state.error = `${action.payload}`;
        }
        state.products = state.products.filter(
          (product) => product.id !== Number(action.payload)
        );
      })
      .addCase(removeProduct.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        state.products = state.products.map((product) =>
          product.id === action.payload.id ? action.payload : product
        );
      })
      .addCase(updateProduct.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default productsSlice.reducer;
