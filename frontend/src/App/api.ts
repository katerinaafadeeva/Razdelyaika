import { Product, productId } from '../features/shop/types/Products';
import { Event, EventAdd, EventId, EventUpd } from '../features/events/types/Event';
import { Message, User } from '../features/auth/types/types';
import { Comment } from '../features/events/comment/types/Comment';


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
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(obj),
  });
  return res.json();
};
export const session = async (): Promise<User | Message> => {
  const res = await fetch('/auth/checkUser', {
    credentials: 'include',
  });
  console.log(123);
  if (!res.ok) {
    const { message } = await res.json();
    console.log(message);
    throw message;
  }
  // console.log(!res.ok);
  // console.log(await res.json());

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

export const getProducts = async (): Promise<Product[]> =>
  fetch('/api/shop').then((res) => res.json());

// Events

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

export const removeEvent = async (eventId: number): Promise<number> => {
  const res = await fetch(`/api/events/${eventId}`, {
    method: 'DELETE',
  });
  const date = await res.json();
  //  console.log(date);
  return date;
};

export const updateEvent = async (updEvent: {
  id: EventId;
  eventName: string;
  eventDescription: string;
  eventAddress: string;
  eventDate: string;
  isActive: boolean;
}): Promise<Event> => {
  const res = await fetch(`/api/events/${updEvent.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updEvent),
  });
  return res.json();
};

export const addComment = async (commit: {
  eventId: EventId;
  eventRevText: string;
}): Promise<Comment> => {
  const res = await fetch('/api/comment', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(commit),
  });

  return res.json();
};

export const getParamEvent = async (): Promise<Event> =>
  fetch('/api/events/:id').then((res) => res.json());

export const getParamProducts = async (): Promise<Product> =>
  fetch('/api/shop/:id').then((res) => res.json());

// api add product :

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

// api for removing products:

export async function removeProduct(productId: number): Promise<number> {
  const res = await fetch(`/api/shop/${productId}`, {
    method: 'DELETE',
  });
  return res.json();
}

// api for updating the product:

export const updatedProduct = async (updatedProduct: {
  id: productId;
  productName: string;
  productPrice: number;
  productDescript: string;
}): Promise<Product> => {
  const res = await fetch(`/api/shop/${updatedProduct.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedProduct),
  });
  return res.json();
};
