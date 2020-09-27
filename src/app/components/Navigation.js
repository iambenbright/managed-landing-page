import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(theme => ({
  toolbar: {
    minHeight: theme.mixins.toolbar.minHeight * 2,
    justifyContent: 'space-between',
  },
}));

const Navigation = () => {
  const classes = useStyles();

  return (
    <AppBar elevation={0} color="transparent">
      <Toolbar className={classes.toolbar}>
        <Box mt="14px">
          <img src={require('../../assets/images/logo.svg')} alt="" />
        </Box>
        <img src={require('../../assets/images/icon-hamburger.svg')} alt="" />
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
