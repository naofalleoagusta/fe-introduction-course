import { Theme } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/styles';
import React from 'react';
import { Link } from 'react-router-dom';

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    link: {
      color: theme.palette.primary.light,
      '&:hover': {
        color: 'black',
      },
    },
  })
);

const SignUpText: React.FC<{}> = () => {
  const classes = useStyle();
  return (
    <Link to="/register" className={classes.link}>
      Don't have an account yet? Sign Up Here
    </Link>
  );
};

export default SignUpText;
