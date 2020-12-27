import React, { Fragment, useState } from 'react';

// materialui-components
import AppBar from '@material-ui/core/AppBar';
import BrandLogo from '../../shared/BrandLogo';
import Button from '../../shared/Button';
import Hidden from '@material-ui/core/Hidden';
import Box from '@material-ui/core/Box';
import { Typography, useTheme } from '@material-ui/core';

// custom-components
import { NestedContainer } from '../../shared/NestedContainer';

// styles
import { useStyles } from './styles';

export const NAVBAR_HEIGHT = 120;
const navs = ['Pricing', 'Product', 'About Us', 'Careers', 'Community'];

const HamburgerAndClose = ({ setMenuOpen, fileURL, altName }) => {
  const classes = useStyles();

  return (
    <img
      onClick={() => setMenuOpen(altName === 'hamburger' ? true : false)}
      className={classes.menuOpenAndClose}
      src={fileURL}
      alt={altName}
    />
  );
};

const NavList = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const classes = useStyles();
  const theme = useTheme();

  return (
    <nav className={classes.nav}>
      <ul className={classes.list}>
        {navs.map((nav, idx) => (
          <li key={idx} className={classes.item}>
            <a href={`#${nav}`}>
              <Typography
                onMouseOver={() => {
                  setIsFocused(true);
                  setActiveIndex(idx);
                }}
                onMouseLeave={() => setIsFocused(false)}
                style={{
                  color:
                    isFocused && activeIndex === idx
                      ? theme.palette.grey[600]
                      : null,
                }}
              >
                {nav}
              </Typography>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const NavBar = () => {
  const classes = useStyles();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Fragment>
      {/* mobile navigation and backdrop*/}
      <Hidden mdUp>
        {menuOpen && (
          <Fragment>
            <NavList />
            <Box className={classes.backdrop} />
          </Fragment>
        )}
      </Hidden>
      <AppBar elevation={0} color="transparent" position="relative">
        <NestedContainer
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          height={`${NAVBAR_HEIGHT}px`}
        >
          <BrandLogo />
          <Hidden mdUp>
            {!menuOpen && (
              <HamburgerAndClose
                setMenuOpen={setMenuOpen}
                fileURL={require('../../assets/images/icon-hamburger.svg')}
                altName={'hamburger'}
              />
            )}
            {menuOpen && (
              <HamburgerAndClose
                setMenuOpen={setMenuOpen}
                fileURL={require('../../assets/images/icon-close.svg')}
                altName={'close'}
              />
            )}
          </Hidden>
          {/* desktop navigation */}
          <Hidden smDown>
            <NavList />
            <Button style={{ marginTop: 0 }}>Get Started</Button>
          </Hidden>
        </NestedContainer>
      </AppBar>
    </Fragment>
  );
};

export default NavBar;
