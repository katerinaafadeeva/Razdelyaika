import { User } from '../types/User';

export const checkUser = (): Promise<User> =>
  fetch('/auth/checkUser', {
    method: 'GET',
    credentials: 'include',
  }).then((res) => res.json());
