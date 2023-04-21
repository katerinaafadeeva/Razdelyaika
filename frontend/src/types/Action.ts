import { FetchAnsver, User } from '../features/auth/types/User';

type Action =
  | { type: 'LOG_OUT' }
  | { type: 'CHECK_USER'; payload: User }
  | { type: 'SIGN_IN'; payload: FetchAnsver }
  | { type: 'SIGN_UP'; payload: User };

export default Action;
