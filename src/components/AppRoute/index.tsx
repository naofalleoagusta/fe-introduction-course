import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { TRoutes } from '../../config/routes';
import useAuth from '../../context/useAuth';

const AppRoute: React.FC<TRoutes> = ({
  path,
  component: Component,
  isPrivate,
  exact,
}) => {
  const auth = useAuth();
  return (
    <Route
      path={path}
      exact={exact}
      render={(props) =>
        isPrivate && !auth.currentUser ? (
          <Redirect to={{ pathname: '/login' }} />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default AppRoute;
