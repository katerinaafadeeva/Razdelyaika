import { Message, User } from './types';

type Action =
  | { type: 'REGISTRATION'; payload: User | Message }
  | { type: 'VERIFICATION'; payload: User | Message };

export default Action;
