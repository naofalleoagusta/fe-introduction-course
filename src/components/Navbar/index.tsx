import { AppBar, Grid, Toolbar, Typography } from '@material-ui/core';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import React from 'react';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      flexGrow: 1,
      width: '100%',
      position: 'absolute',
      top: 0,
      left: 0,
      zIndex: 999,
    },
    appBar: {
      background: 'transparent',
      boxShadow: 'none',
    },
    brand: {
      flexGrow: 1,
      fontSize: '2rem',
      color: 'black',
      fontWeight: 700,
    },
  })
);

const Navbar: React.FC<{}> = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.container}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h3" className={classes.brand}>
            MovieDB
          </Typography>
          <Link to="/">
            <Typography>Login</Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </Grid>
  );
};
export default Navbar;
