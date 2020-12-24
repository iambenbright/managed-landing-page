import React, { useState } from 'react';

// materialui-components
import AppBar from '@material-ui/core/AppBar';
import BrandLogo from '../../shared/BrandLogo';
import Button from '../../shared/Button';
import Hidden from '@material-ui/core/Hidden';

// custom-components
import { NestedContainer } from '../../shared/NestedContainer';
import { useStyles } from './styles';
import { useTheme } from '@material-ui/core';

export const NAVBAR_HEIGHT = 120;

const NavBar = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [isFocused, setIsFocused] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  const navs = ['Pricing', 'Product', 'About Us', 'Careers', 'Community'];

  return (
    <AppBar elevation={0} color="transparent" position="relative">
      <NestedContainer
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        height={`${NAVBAR_HEIGHT}px`}
      >
        <BrandLogo />
        <Hidden mdUp>
          <img src={require('../../assets/images/icon-hamburger.svg')} alt="" />
        </Hidden>
        <Hidden smDown>
          <ul className={classes.navigationList}>
            {navs.map((nav, idx) => (
              <li key={idx} className={classes.navigationItem}>
                <a
                  href={`#${nav}`}
                  style={{
                    color:
                      isFocused && activeIndex === idx
                        ? theme.palette.grey['600']
                        : null,
                  }}
                  onMouseOver={() => {
                    setIsFocused(true);
                    setActiveIndex(idx);
                  }}
                  onMouseLeave={() => setIsFocused(false)}
                >
                  {nav}
                </a>
              </li>
            ))}
          </ul>
          <Button style={{ marginTop: 0 }}>Get Started</Button>
        </Hidden>
      </NestedContainer>
    </AppBar>
  );
};

export default NavBar;
