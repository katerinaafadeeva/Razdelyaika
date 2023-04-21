import { User } from '../types/User';
import { Product } from '../features/shop/types/Products';

export const checkUser = (): Promise<User> =>
  fetch('/auth/checkUser', {
    method: 'GET',
    credentials: 'include',
  }).then((res) => res.json());

export const getProducts = (): Promise<Product[]> =>
  fetch('/api/shop').then((res) => res.json());
