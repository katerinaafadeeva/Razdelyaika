import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { State } from './types/State';
import * as api from '../../App/api';
import { Imgs } from './types/Img';
// import { productId } from './types/Products';

const initialState: State = {
  products: [],
  imgs: {},
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
    productPrice: string;
    productDescript: string;
    productImgs: Imgs;
  }) => api.addProduct(newProduct)
);

// added remove fn :

export const removeProduct = createAsyncThunk(
  '/shop/removeProduct',
  (productId: number) => api.removeProduct(productId)
);

// slicers:
const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProdImg: (state, action) => {
      state.imgs = action.payload;
    },
    delProdImg: (state, action) => {
      state.imgs = Object.values(state.imgs).filter(
        (img) => img.lastModifiedDate !== action.payload
      );
    },
  },
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
      });
  },
});

export const { addProdImg, delProdImg } = productsSlice.actions;

export default productsSlice.reducer;
