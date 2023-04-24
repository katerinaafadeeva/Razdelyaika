import { Imgs } from './Img';
import { Product } from './Products';

export type State = {
  products: Product[];
  imgs: Imgs;
  error: undefined | string;
};
