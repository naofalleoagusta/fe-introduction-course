import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import MovieList from '../pages/MovieList';
import Register from '../pages/Register';

export type TRoutes = {
  path: string;
  component:
    | React.ComponentType<RouteComponentProps<any>>
    | React.ComponentType<any>;
  exact: boolean;
  isPrivate: boolean;
};

const routes: TRoutes[] = [
  {
    path: '/',
    component: Home,
    exact: true,
    isPrivate: false,
  },
  {
    path: '/login',
    component: Login,
    exact: false,
    isPrivate: false,
  },
  {
    path: '/register',
    component: Register,
    exact: false,
    isPrivate: false,
  },
  {
    path: '/movie-list',
    component: MovieList,
    exact: false,
    isPrivate: true,
  },
];

export default routes;
