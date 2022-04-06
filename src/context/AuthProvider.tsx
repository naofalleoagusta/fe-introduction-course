import React, { useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import AuthContext, { TUserDetail } from './AuthContext';

const AuthProvider: React.FC<React.ReactNode> = ({ children }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [currentUser, setCurrentUser] = useLocalStorage<TUserDetail | null>(
    'currentUser',
    null
  );
  const [registeredUsers, setRegisteredUsers] = useLocalStorage<TUserDetail[]>(
    'registeredUsers',
    []
  );

  const login = async (username: string, password: string) => {
    await new Promise<void>((resolve, reject) => {
      const user = registeredUsers.filter(
        (registeredUser: TUserDetail) =>
          registeredUser.username === username &&
          registeredUser.password === password
      );
      if (user.length > 0) {
        setCurrentUser(user[0]);
        resolve();
      } else {
        reject('Wrong Username or Password');
      }
    });
  };

  const logout = () => {
    setCurrentUser(null);
  };

  const register = (email: string, username: string, password: string) => {
    const user: TUserDetail = {
      email,
      username,
      password,
    };
    setRegisteredUsers([...registeredUsers, user]);
    console.log(registeredUsers);
  };

  const handleLoading = () => {
    setLoading(!loading);
  };

  const context = {
    currentUser,
    registeredUsers,
    loading,
    login,
    logout,
    register,
    setLoading: handleLoading,
  };

  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
