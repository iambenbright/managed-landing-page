import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import Landing from './pages/Landing';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Landing />
    </ThemeProvider>
  );
}

export default App;
