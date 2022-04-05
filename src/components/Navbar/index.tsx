import { AppBar, Container, Grid, Toolbar } from '@material-ui/core';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import React from 'react';
import { Link } from 'react-router-dom';

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
    },
  })
);

const Navbar: React.FC<{}> = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.container}>
      <AppBar position="static" className={classes.appBar}>
        <Container>
          <Toolbar className={classes.toolBar}>
            <Link to="/" className={classes.brand}>
              Movie.DB
            </Link>
            <div>
              <Link to="/login" className={classes.link}>
                Login
              </Link>
            </div>
          </Toolbar>
        </Container>
      </AppBar>
    </Grid>
  );
};
export default Navbar;
