import { Product } from './Products';

export type State = {
  products: Product[];
  error: undefined | string;
};
