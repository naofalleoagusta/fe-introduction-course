import React, { useState } from 'react';
import {
  Avatar,
  Box,
  Button,
  Container,
  createStyles,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  makeStyles,
  TextField,
  Typography,
  Theme,
} from '@material-ui/core';
import { LockOutlined, Visibility, VisibilityOff } from '@material-ui/icons';

import SignUpText from '../../components/SignUpText';

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
    },
    title: {
      textAlign: 'center',
      fontSize: '2rem',
      marginBottom: '1rem',
    },
    input: {
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
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleChange =
    (target: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
      if (target === 'username') {
        setUsername(event.target.value);
      } else {
        setPassword(event.target.value);
      }
    };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
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
        <form>
          <TextField
            label="Username"
            id="username"
            value={username}
            fullWidth
            onChange={handleChange('username')}
            className={classes.input}
          />
          <FormControl fullWidth className={classes.input}>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input
              id="password"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={handleChange('password')}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <Button
            variant="outlined"
            type="submit"
            fullWidth
            className={classes.btn}
          >
            Login
          </Button>
          <SignUpText/>
        </form>
      </Box>
    </Container>
  );
};

export default Login;
