export type User = {
  id?: number | undefined;
  [key: string]: any;
  userName?: string;
  email: string;
  password: string;
  password2?: string;
};

// export type UserLoga = {
//   id?: number | undefined;
//   userName?: string;
//   email: string;
//   password?: string;
//   password2?: string;
// };

export type Message = {
  message: string;
};
export type State = {
  user: {} | User;
  error: undefined | string;
};

export type UserId = User['id'];

// export type FetchAnsver = {
//   user?: User;
//   message: string;
// };
