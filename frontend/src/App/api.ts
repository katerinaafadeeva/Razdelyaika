import { User } from '../../src/features/auth/types/User';
import { Product } from '../features/shop/types/Products';
import { Event, EventAdd } from '../features/events/types/Event';

export const checkUser = (): Promise<User> =>
  fetch('/auth/checkUser', {
    method: 'GET',
    credentials: 'include',
  }).then((res) => res.json());

export const getProducts = async (): Promise<Product[]> =>
  fetch('/api/shop').then((res) => res.json());


export const getEvents = (): Promise<Event[]> => fetch('/api/events').then((res) => res.json());


export const addNewEvent = async (newEvent: {
  eventName: string;
  eventDescription: string;
  eventAddress: string;
  eventDate: string;
}): Promise<Event> => {
  const res = await fetch('/api/events', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newEvent),
  });

  return res.json();
};


export const getParamEvent = async (): Promise<Event> =>
  fetch('/api/events/:id').then((res) => res.json());

export const getParamProducts = async (): Promise<Product> =>
  fetch('/api/shop/:id').then((res) => res.json());

  // api на добавление товара :
export const addProduct = async (newProduct: {
  productName: string;
  productPrice: number;
  productDescript: string;
}): Promise<Product> => {
  const res = await fetch('/api/shop', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newProduct),
  });
  return res.json();
};
