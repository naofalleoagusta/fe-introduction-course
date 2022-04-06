import {
  AppBar,
  Container,
  Grid,
  Toolbar,
  Typography,
} from '@material-ui/core';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import React from 'react';
import { Link } from 'react-router-dom';

import useAuthRoute from '../../hooks/useAuthRoute';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      flexGrow: 1,
      width: '100%',
    },
    appBar: {
      background: theme.palette.primary.main,
      boxShadow: 'none',
      color: 'white',
    },
    toolBar: {
      padding: 0,
    },
    brand: {
      flexGrow: 1,
      fontSize: '2rem',
      fontWeight: 700,
      letterSpacing: '-3px',
      height: '100%',
      textDecoration: 'none',
      color: 'white',
    },
    link: {
      textDecoration: 'none',
      color: 'white',
      fontWeight: 600,
      cursor: 'pointer',
    },
  })
);

const Navbar: React.FC<{}> = () => {
  const classes = useStyles();
  const { auth, history } = useAuthRoute();

  const handleLogout = () => {
    auth.logout();
    history.push('/');
  };

  return (
    <Grid className={classes.container}>
      <AppBar position="static" className={classes.appBar}>
        <Container>
          <Toolbar className={classes.toolBar}>
            <Link
              to={auth.currentUser ? '/movie-list' : '/'}
              className={classes.brand}
            >
              Movie.DB
            </Link>
            <div>
              {auth.currentUser ? (
                <Typography className={classes.link} onClick={handleLogout}>
                  Logout
                </Typography>
              ) : (
                <Link to="/login" className={classes.link}>
                  Login
                </Link>
              )}
            </div>
          </Toolbar>
        </Container>
      </AppBar>
    </Grid>
  );
};
export default Navbar;
