import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core';
import theme from './styles/material-ui-theme';

import routes from './config/routes';
import Navbar from './components/Navbar';
import AuthProvider from './context/AuthProvider';

ReactDOM.render(
  <React.StrictMode>
    <MuiThemeProvider theme={theme}>
      <Router>
        <AuthProvider>
          <Navbar />
          <Switch>
            {routes.map((route) => (
              <Route
                exact={route.exact}
                key={route.path}
                path={route.path}
                component={route.component}
              />
            ))}
          </Switch>
        </AuthProvider>
      </Router>
    </MuiThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
