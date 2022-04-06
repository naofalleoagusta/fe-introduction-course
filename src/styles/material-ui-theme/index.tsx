import { createTheme } from '@material-ui/core/styles';

export const COLORS = {
  primary: '#111827',
  primary2: '#415786',
  success: '#2ecc71',
};

const theme = createTheme({
  typography: {
    fontFamily: `-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif`,
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    button: {
      fontFamily: `-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif`,
      textTransform: 'none',
    },
  },
  palette: {
    primary: {
      main: COLORS.primary,
      light: COLORS.primary2,
    },
  },
  overrides: {
    MuiButton: {
      root: {
        padding: '0.625rem 1.5rem',
        borderRadius: '10px',
        textTransform: 'unset',
        fontSize: '1rem',
        minWidth: '2rem',
        fontWeight: 700,
        backgroundColor: COLORS.primary,
        color: 'white',
        '&:hover': {
          backgroundColor: COLORS.primary2,
        },
      },
      text: {
        padding: '0.625rem 1.5rem',
      },
      disabled: {
        backgroundColor: 'rgba(0, 0, 0, 0.12)',
        color: 'rgba(0, 0, 0, 0.26)',
      },
    },
    MuiInputBase: {
      root: {
        fontFamily: `-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif`,
      },
    },
  },
});

export default theme;
