import { createContext } from 'react';

export type TUserDetail = {
  username: string;
  email: string;
  password: string;
  error: boolean;
};

export type TAuthContext = {
  currentUser: TUserDetail | null;
  registeredUsers: TUserDetail[];
  loading: boolean;
  isError: boolean;
  login: (username: string, password: string) => void;
  register: (email: string, username: string, password: string) => void;
};

export const currentUser = localStorage.getItem('currentUser')
  ? JSON.parse(localStorage.getItem('currentUser') || '{}')
  : null;

export const registeredUsers = localStorage.getItem('registeredUsers')
  ? JSON.parse(localStorage.getItem('registeredUsers') || '{}')
  : [];

const AuthContext = createContext<TAuthContext>({
  currentUser,
  registeredUsers,
  loading: false,
  isError: false,
  login: () => {},
  register: () => {},
});

export default AuthContext;
