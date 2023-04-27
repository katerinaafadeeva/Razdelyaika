import { Imgs, ProdImgs } from './Img';
import { Product } from './Products';

export type State = {
  products: Product[];
  sizes: string[];
  imgs: Imgs;
  prodImgs: ProdImgs;
  error: undefined | string;
};

export type CartState = {
  addedProds: Product[];
  error: undefined | string;
};
