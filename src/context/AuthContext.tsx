import { createContext } from 'react';

export type TUserDetail = {
  username: string;
  email: string;
  password: string;
};

type TAuthContext = {
  currentUser: TUserDetail | null;
  registeredUsers: TUserDetail[];
  loading: boolean;
  login: (username: string, password: string) => void;
  logout: () => void;
  register: (email: string, username: string, password: string) => void;
  setLoading: () => void;
};

const currentUser = localStorage.getItem('currentUser')
  ? JSON.parse(localStorage.getItem('currentUser') || '{}')
  : null;

const registeredUsers = localStorage.getItem('registeredUsers')
  ? JSON.parse(localStorage.getItem('registeredUsers') || '{}')
  : [];

const AuthContext = createContext<TAuthContext>({
  currentUser,
  registeredUsers,
  loading: false,
  login: () => {},
  logout: () => {},
  register: () => {},
  setLoading: () => {},
});

export default AuthContext;
