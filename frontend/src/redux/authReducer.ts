import { State } from '../features/auth/types/Auth';
import Action from '../types/Action';

const initialState: State = {
  auth: undefined,
  message: '',
};

const authReducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case 'SIGN_IN':
      if (action.payload.message === 'ok') {
        return {
          ...state,
          auth: action.payload.user,
          message: '',
        };
      } else {
        return {
          ...state,
          message: action.payload.message,
        };
      }
    case 'SIGN_UP':
      return {
        ...state,
        auth: action.payload,
      };
    case 'LOG_OUT':
      return {
        ...state,
        auth: undefined,
      };
    case 'CHECK_USER':
      return {
        ...state,
        auth: action.payload,
      };
    default:
      return state;
  }
};
export default authReducer;
