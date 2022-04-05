import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';

type TRoutes = {
  path: string;
  component:
    | React.ComponentType<RouteComponentProps<any>>
    | React.ComponentType<any>;
  exact: boolean;
};

const routes: TRoutes[] = [
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    path: '/login',
    component: Login,
    exact: false,
  },
];

export default routes;
