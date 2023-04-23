import { User } from './types';

export type State = {
  auth: User | undefined;
  message: string;
};
