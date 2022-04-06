import {
  Container,
  makeStyles,
  Typography,
  Theme,
  createStyles,
} from '@material-ui/core';
import React from 'react';

import useAuth from '../../context/useAuth';

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: '2rem 1rem',
    },
  })
);

const MovieList: React.FC<{}> = () => {
  const auth = useAuth();
  const classes = useStyle();
  return (
    <Container className={classes.root}>
      <Typography variant="h2">
        Welcome, <b>{auth.currentUser?.username}.</b>
      </Typography>
    </Container>
  );
};

export default MovieList;
