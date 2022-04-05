import {
  Button,
  Container,
  createStyles,
  makeStyles,
  Slide,
  Theme,
  Typography,
} from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';

import SignUpText from '../../components/SignUpText';

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    banner: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      height: 'calc(100vh - 64px)',
    },
    btnContainer: {
      marginTop: '2rem',
      display: 'flex',
      alignItems: 'center',
    },
    btn: {
      marginRight: theme.spacing(1),
    },
  })
);

const Home: React.FC<{}> = () => {
  const classes = useStyle();
  return (
    <Container>
      <Slide in={true} timeout={500}>
        <div className={classes.banner}>
          <Typography variant="h2">Welcome.</Typography>
          <Typography variant="h2">
            Find millions of movies and TV shows.
          </Typography>
          <Typography variant="h2">Explore now.</Typography>
          <div className={classes.btnContainer}>
            <Link to="/login">
              <Button className={classes.btn}>Login</Button>
            </Link>
            <SignUpText />
          </div>
        </div>
      </Slide>
    </Container>
  );
};

export default Home;
