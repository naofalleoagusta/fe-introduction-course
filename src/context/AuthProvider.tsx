import React, { useState } from 'react';
import AuthContext, {
  currentUser as user,
  registeredUsers as registered,
  TUserDetail,
} from './AuthContext';

type TAuthState = {
  loading: boolean;
  currentUser: TUserDetail;
  registeredUsers: TUserDetail[];
  isError: boolean;
};

const initialState: TAuthState = {
  loading: false,
  currentUser: user,
  registeredUsers: registered,
  isError: false,
};

const AuthProvider: React.FC<React.ReactNode> = ({ children }) => {
  const [auth, setAuth] = useState<TAuthState>(initialState);

  const login = (username: string, password: string) => {
    console.log(username, password);
  };
  const register = (email: string, username: string, password: string) => {
    console.log(email, username, password);
  };

  const context = { ...auth, login, register };

  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
