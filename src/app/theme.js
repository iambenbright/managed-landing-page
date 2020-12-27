import { createMuiTheme } from '@material-ui/core/styles';
import deepOrange from '@material-ui/core/colors/deepOrange';

const defaultTheme = createMuiTheme();

const theme = createMuiTheme({
  ...defaultTheme,
  palette: {
    primary: {
      main: deepOrange['500'],
      dark: deepOrange['200'],
    },
  },
  typography: {
    body1: {
      color: defaultTheme.palette.grey['600'],
    },
    h3: {
      color: defaultTheme.palette.grey['800'],
    },
    h4: {
      color: defaultTheme.palette.grey['800'],
      fontWeight: 700,
    },
  },
  shadows: [
    '', // to set no elevation
    '0px 3px 5px -1px rgba(255,87,34,0.2), 0px 5px 8px 0px rgba(255,87,34,0.14), 0px 1px 14px 0px rgba(255,87,34,0.12)',
  ],
  overrides: {
    MuiContainer: {
      root: {
        [defaultTheme.breakpoints.up('md')]: {
          padding: 0,
          position: 'relative',
          overflow: 'hidden',
        },
      },
    },
    MuiCssBaseline: {
      '@global': {
        body: {
          scrollbarWidth: 'thin',
          scrollbarColor: `${deepOrange['200']} ${defaultTheme.palette.background.default}`,
          '&::-webkit-scrollbar': {
            width: 12,
          },
          '&::-webkit-scrollbar-button': {
            display: 'none',
          },
          '&::-webkit-scrollbar-track': {
            backgroundColor: defaultTheme.palette.background.default,
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: deepOrange['200'],
            borderRadius: 5,
          },
        },
      },
    },
  },
});

export { theme };
export default theme;
