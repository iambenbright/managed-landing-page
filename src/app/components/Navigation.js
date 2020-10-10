import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import BrandLogo from '../shared/BrandLogo';
import Box from '@material-ui/core/Box';
import Button from '../shared/Button';
import Container from '@material-ui/core/Container';

const Navigation = () => {
  const classes = useStyles();

  return (
    <AppBar elevation={0} color="transparent" position="absolute">
      <Container maxWidth="lg">
        <Toolbar className={classes.toolbar}>
          <BrandLogo />
          <Box display={[null, null, 'none']}>
            <img
              src={require('../../assets/images/icon-hamburger.svg')}
              alt=""
            />
          </Box>
          <Box display={['none', null, 'block']} component="nav">
            <ul className={classes.navigationList}>
              <li className={classes.navigationItem}>
                <a href="#Pricing">Pricing</a>
              </li>
              <li className={classes.navigationItem}>
                <a href="#Product">Product</a>
              </li>
              <li className={classes.navigationItem}>
                <a href="#About Us">About Us</a>
              </li>
              <li className={classes.navigationItem}>
                <a href="#Careers">Careers</a>
              </li>
              <li className={classes.navigationItem}>
                <a href="#Community">Community</a>
              </li>
            </ul>
          </Box>
          <Box display={['none', null, 'block']}>
            <Button style={{ marginTop: 0 }}>Get Started</Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

const useStyles = makeStyles(theme => ({
  toolbar: {
    minHeight: theme.mixins.toolbar.minHeight * 2,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  navigationList: {
    margin: 0,
    padding: 0,
    listStyle: 'none',
    display: 'flex',
  },
  navigationItem: {
    '&:not(:last-of-type)': {
      marginRight: 20,
    },
    '& a': {
      textDecoration: 'none',
      color: theme.palette.text.primary,
    },
  },
}));

export default Navigation;
