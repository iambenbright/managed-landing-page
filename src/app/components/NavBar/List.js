import React, { useState } from 'react';

import { Typography, useTheme } from '@material-ui/core';
import { useStyles } from './styles';

const navs = ['Pricing', 'Product', 'About Us', 'Careers', 'Community'];

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

export default NavList;
