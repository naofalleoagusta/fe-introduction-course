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

import useAuth from '../../context/useAuth';
import SignUpText from '../../components/SignUpText';
import TextInput from '../../components/TextInput';
import PasswordInput from '../../components/PasswordInput';

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: '2rem 1rem',
    },
    loginCard: {
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
  })
);

const Login: React.FC<{}> = () => {
  const classes = useStyle();
  const auth = useAuth();
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    auth.login(username, password);
  };

  return (
    <Container maxWidth="xs" className={classes.root}>
      <Box className={classes.loginCard}>
        <Avatar className={classes.avatar}>
          <LockOutlined />
        </Avatar>
        <Typography variant="h1" className={classes.title}>
          Login
        </Typography>
        <form autoComplete="off" onSubmit={handleSubmit}>
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
          <Button
            variant="outlined"
            type="submit"
            fullWidth
            className={classes.btn}
          >
            Login
          </Button>
          <SignUpText />
        </form>
      </Box>
    </Container>
  );
};

export default Login;