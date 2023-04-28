import { Imgs, ProdImgs } from '../features/shop/types/Img';
import { Product, productId } from '../features/shop/types/Products';
import {
  Event,
  EventAdd,
  EventId,
  EventUpd,
} from '../features/events/types/Event';
import { Message, User } from '../features/auth/types/types';
import { Comment } from '../features/events/comment/types/Comment';
import { EcoPoint } from '../features/mainPage/map/types/Map';

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
  if (!res.ok) {
    const { message } = await res.json();
    throw message;
  }
  return res.json();
};
export const session = async (): Promise<User | Message> => {
  console.log('session');

  const res = await fetch('/auth/checkUser', {
    credentials: 'include',
  });
  if (!res.ok) {
    const { message } = await res.json();
    throw message;
  }
  const data = res.json();
  console.log(data);

  return data;
};
export const session2 = async (): Promise<User | Message> => {
  const res = await fetch('http://localhost:4000', {
    credentials: 'include',
  });
  if (!res.ok) {
    const { message } = await res.json();
    throw message;
  }
  const data = res.json();
  console.log(data, 'llllllllloooooollllll');

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

export const getSizes = async (): Promise<string[]> =>
  fetch('/api/sizes').then((res) => res.json());

// Events
export const getEvents = (): Promise<Event[]> =>
  fetch('/api/events').then((res) => res.json());

export const addNewEvent = async (
  data: any,
): // (newEvent: {
//   eventName: string;
//   eventDescription: string;
//   eventAddress: string;
//   eventDate: string;
//   // detailsLink: string;
// })
Promise<Event> => {
  let params: RequestInit = {
    method: 'POST',
    body: data,
  };
  const res = await fetch('/api/events', params);
  return res.json();
};

export const removeEvent = async (eventId: number): Promise<number> => {
  const res = await fetch(`/api/events/${eventId}`, {
    method: 'DELETE',
  });
  const date = await res.json();
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

export const addComment = async (comment: {
  eventId: EventId;
  eventRevText: string;
}): Promise<Comment> => {
  const res = await fetch('/api/comments', {
    method: 'POST',

    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(comment),
  });

  return res.json();
};
export const getComments = async (): Promise<Comment[]> =>
  fetch('/api/comments').then((res) => res.json());

export const removeComment = async (commentId: number): Promise<number> => {
  const res = await fetch(`/api/comments/${commentId}`, {
    method: 'DELETE',
  });
  const date = await res.json();
  return date;
};

export const getEcoPoint = async (): Promise<EcoPoint[]> =>
  fetch('/api/ecoPoint').then((res) => res.json());

export const addEcoPoint = async (newEcoPoint: {
  pointName: string;
  pointAddress: string;
}): Promise<EcoPoint> => {
  const res = await fetch('/api/ecoPoint', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newEcoPoint),
  });
  return res.json();
};

export const removeEcoPoint = async (poinId: number): Promise<number> => {
  const res = await fetch(`/api/ecoPoint/${poinId}`, {
    method: 'DELETE',
  });
  const date = await res.json();
  return date;
};

export const getParamEvent = async (): Promise<Event> =>
  fetch('/api/events/:id').then((res) => res.json());

export const getParamProducts = async (): Promise<Product> =>
  fetch('/api/shop/:id').then((res) => res.json());

export const getProdImgs = async (productId: number): Promise<ProdImgs> =>
  fetch(`/api/product/${productId}`).then((res) => res.json());

// api add product :
type RequestInit = {};
export const addProduct = async (data: any): Promise<Product> => {
  let params: RequestInit = {
    method: 'POST',
    body: data,
  };
  const res = await fetch('/api/shop', params);
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

// CART GET ALL PRODUCTS:

export const getCartProducts = async (): Promise<Product[]> =>
  fetch('/cart').then((res) => res.json());

export const removeCartItem = async (addedProdId: number): Promise<number> =>
  fetch(`/cart/${addedProdId}`, { method: 'DELETE' }).then((res) => res.json());

// add product to cart:

export const addProductToCart = async (
  productId: number
  // productSelected: Product
): Promise<Product> => {
  const res = await fetch('/cart', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ productId }),
  });
  return res.json();
};
