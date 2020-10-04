import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import Landing from './pages/Landing';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import deepOrange from '@material-ui/core/colors/deepOrange';

const defaultTheme = createMuiTheme();

const theme = createMuiTheme({
  ...defaultTheme,
  palette: {
    primary: {
      main: deepOrange['500'],
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Landing />
    </ThemeProvider>
  );
}

export default App;
