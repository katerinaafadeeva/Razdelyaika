import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { State } from './types/State';
import * as api from '../../App/api';
import { Product } from './types/Products';

// import { productId } from './types/Products';

const initialState: State = {
  products: [],
  imgs: {},
  sizes: [],
  prodImgs: [],
  error: undefined,
};

export const getProducts = createAsyncThunk('shop/getProducts', () =>
  api.getProducts()
);

export const getSizes = createAsyncThunk('products/getSizes', () =>
  api.getSizes()
);

export const getParamProducts = createAsyncThunk(
  'shop/getProduct/:id',
  () => api.getParamProducts
);

export const getProdImgs = createAsyncThunk(
  'shop/getProdImgs/:id',
  (productId: number) => api.getProdImgs(productId)
);

export const addProduct = createAsyncThunk('/shop/addProduct', (data: any) =>
  api.addProduct(data)
);

// Изменил тип данных для корректного ввода стоимости, можно обратно исправить на number
//(newProduct: { productName: string; productPrice: number; productDescript: string }) =>
//  api.addProduct(newProduct)
//);

// added remove fn :

export const removeProduct = createAsyncThunk(
  '/shop/removeProduct',
  (productId: number) => api.removeProduct(productId)
);

// added update fn:

export const updateProduct = createAsyncThunk(
  '/shop/updateProduct',
  (updatedProduct: {
    id: number;
    productName: string;
    productPrice: number;
    productDescript: string;
  }) => api.updatedProduct(updatedProduct)
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
        (img) => Number(img.lastModified) !== action.payload
      );
    },
    clearImgState: (state, action) => {
      state.imgs = {};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.fulfilled, (state, action) => {
        state.products = action.payload;
      })
      .addCase(getSizes.fulfilled, (state, action) => {
        state.sizes = action.payload;
      })
      .addCase(getProdImgs.fulfilled, (state, action) => {
        state.prodImgs = action.payload;
      })
      .addCase(getProdImgs.rejected, (state, action) => {
        state.error = action.error.message;
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
          product.id === action.payload.id
            ? {
                ...product,
                productName: action.payload.productName,
                productDescript: action.payload.productDescript,
                productPrice: action.payload.productPrice,
              }
            : product
        );
      })
      .addCase(updateProduct.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export const { addProdImg, delProdImg, clearImgState } = productsSlice.actions;

export default productsSlice.reducer;
