import React, { useState } from 'react';
import {
  Avatar,
  Box,
  Button,
  Container,
  createStyles,
  makeStyles,
  Typography,
  Theme,
} from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';

import TextInput from '../../components/TextInput';
import PasswordInput from '../../components/PasswordInput';
import { Link } from 'react-router-dom';

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

const Register: React.FC<{}> = () => {
  const classes = useStyle();
  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(username, password);
  };

  return (
    <Container maxWidth="xs" className={classes.root}>
      <Box className={classes.RegisterCard}>
        <Avatar className={classes.avatar}>
          <LockOutlined />
        </Avatar>
        <Typography variant="h1" className={classes.title}>
          Register
        </Typography>
        <form autoComplete="off" onSubmit={handleSubmit}>
          <TextInput
            label="Email"
            id="email"
            value={email}
            fullWidth
            onChange={handleEmailChange}
          />
          <TextInput
            label="Username"
            id="username"
            value={username}
            fullWidth
            onChange={handleUsernameChange}
          />
          <PasswordInput
            label="Password"
            id="password"
            value={password}
            fullWidth
            onChange={handlePasswordChange}
          />
          <PasswordInput
            label="Confirm Password"
            id="confirm-password"
            value={password}
            fullWidth
            onChange={handlePasswordChange}
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
      </Box>
    </Container>
  );
};

export default Register;
