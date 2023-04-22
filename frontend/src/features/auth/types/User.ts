export type User = {
  id?: number | undefined;
  name: string;
  email: string;
  password: string;
  point: number;
};

export type UserId = User['id'];

export type FetchAnsver = {
  user?: User;
  message: string;
};
