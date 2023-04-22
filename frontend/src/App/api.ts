import { Product } from '../features/shop/types/Products';
import { Event } from '../features/events/types/Event';
import { Message, User } from '../features/auth/types/types';

// export const checkUser = (): Promise<User> =>
//   fetch('/auth/checkUser', {
//     method: 'GET',
//     credentials: 'include',
//   }).then((res) => res.json());

export const registration = async (obj: User): Promise<User | Message> => {
  const res = await fetch('/auth/signup', {
    method: 'POST',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(obj),
  });
  if (!res.ok) {
    const { message } = await res.json();
    throw message;
  }
  return res.json();
};
export const login = async (obj: User): Promise<User | Message> => {
  const res = await fetch('/auth/signin', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(obj),
  });
  return res.json();
};
export const session = async (): Promise<User | Message> => {
  const res = await fetch('/auth/verification', {
    credentials: 'include',
  });
  if (!res.ok) {
    const { message } = await res.json();
    throw message;
  }
  return res.json();
};
export const logout = async (): Promise<Message> => {
  const res = await fetch('/auth/logout', {
    credentials: 'include',
  });
  if (!res.ok) {
    const { message } = await res.json();
    throw message;
  }
  return res.json();
};

export const getProducts = (): Promise<Product[]> =>
  fetch('/api/shop').then((res) => res.json());

export const getEvents = (): Promise<Event[]> =>
  fetch('/api/events').then((res) => res.json());

export const getParamEvent = (): Promise<Event> =>
  fetch('/api/events/:id').then((res) => res.json());
