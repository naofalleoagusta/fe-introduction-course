import React, { useEffect, useState } from 'react';
import {
  Avatar,
  Box,
  Button,
  Container,
  createStyles,
  makeStyles,
  Typography,
  Theme,
  Grow,
} from '@material-ui/core';
import { CheckCircle, EmojiPeople } from '@material-ui/icons';
import { green } from '@material-ui/core/colors';

import TextInput from '../../components/TextInput';
import PasswordInput from '../../components/PasswordInput';
import { Link } from 'react-router-dom';
import useAuthRoute from '../../hooks/useAuthRoute';

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: '2rem 1rem',
    },
    RegisterCard: {
      borderRadius: '5px',
      padding: '1.5rem',
      boxShadow:
        'rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
    },
    title: {
      textAlign: 'center',
      fontSize: '2rem',
      marginBottom: '1rem',
    },
    btn: {
      margin: '1rem 0',
    },
    avatar: {
      background: theme.palette.primary.main,
      marginBottom: '0.5rem',
    },
    link: {
      color: theme.palette.primary.light,
      '&:hover': {
        color: 'black',
      },
    },
  })
);

type TRegisterState = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // eslint-disable-line no-useless-escape

const Register: React.FC<{}> = () => {
  const classes = useStyle();
  const { auth, redirect } = useAuthRoute();
  const [register, setRegister] = useState<TRegisterState>({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const errors = {
    email: !emailRegex.test(register.email),
    username: register.username.length < 4,
    password: register.password.length < 6,
    confirmPassword: register.password !== register.confirmPassword,
  };

  const handleRegisterChange =
    (key: keyof TRegisterState) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setRegister((prevState) => ({ ...prevState, [key]: event.target.value }));
    };

  const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (
      !errors.email &&
      !errors.username &&
      !errors.password &&
      !errors.confirmPassword
    ) {
      auth.register(register.email, register.username, register.password);
      setIsSuccess(true);
    }
  };

  useEffect(() => {
    redirect();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Container maxWidth="xs" className={classes.root}>
      <Box className={classes.RegisterCard}>
        {isSuccess ? (
          <>
            <Grow in={true} timeout={1000}>
              <CheckCircle style={{ color: green[500], fontSize: 100 }} />
            </Grow>
            <Typography variant="h2" className={classes.title}>
              Successfully Registered!
            </Typography>
            <Typography>
              Login to explore millions of Movies and TV Shows!.
            </Typography>
            <Link to="/login">
              <Button className={classes.btn}>Login Now!</Button>
            </Link>
          </>
        ) : (
          <>
            <Avatar className={classes.avatar}>
              <EmojiPeople />
            </Avatar>
            <Typography variant="h2" className={classes.title}>
              Register
            </Typography>
            <form autoComplete="off" onSubmit={handleSubmit}>
              <TextInput
                label="Email"
                id="email"
                value={register.email}
                error={errors.email}
                helperText="Email is not valid"
                fullWidth
                onChange={handleRegisterChange('email')}
              />
              <TextInput
                label="Username"
                id="username"
                value={register.username}
                error={errors.username}
                helperText="Username cannot be less than 4 characters"
                fullWidth
                onChange={handleRegisterChange('username')}
              />
              <PasswordInput
                label="Password"
                id="password"
                value={register.password}
                error={errors.password}
                helperText="Password cannot be less than 6 characters"
                fullWidth
                onChange={handleRegisterChange('password')}
              />
              <PasswordInput
                label="Confirm Password"
                id="confirm-password"
                value={register.confirmPassword}
                error={errors.confirmPassword}
                helperText={'Confirm password is not same as password'}
                fullWidth
                onChange={handleRegisterChange('confirmPassword')}
              />
              <Button
                variant="outlined"
                type="submit"
                fullWidth
                className={classes.btn}
              >
                Register
              </Button>
              <Link to="/login" className={classes.link}>
                Already got an account yet? Login Here
              </Link>
            </form>
          </>
        )}
      </Box>
    </Container>
  );
};

export default Register;
