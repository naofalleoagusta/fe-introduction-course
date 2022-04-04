import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Home from '../pages/Home';

type TRoutes = {
  path: string;
  component:
    | React.ComponentType<RouteComponentProps<any>>
    | React.ComponentType<any>;
};

const routes: TRoutes[] = [
  {
    path: '/',
    component: Home,
  },
];

export default routes;
