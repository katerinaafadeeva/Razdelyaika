import { User } from '../types/User';
import { Product } from '../features/shop/types/Products';
import { Event } from '../features/events/types/Event';

export const checkUser = (): Promise<User> =>
  fetch('/auth/checkUser', {
    method: 'GET',
    credentials: 'include',
  }).then((res) => res.json());

export const getProducts = (): Promise<Product[]> => fetch('/api/shop').then((res) => res.json());

export const getEvents = (): Promise<Event[]> => fetch('/api/events').then((res) => res.json());

export const getParamEvent = (): Promise<Event> =>
  fetch('/api/events/:id').then((res) => res.json());
