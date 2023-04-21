import { User } from './User';

export type State = {
  auth: User | undefined;
  message: string;
};
