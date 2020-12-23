import React from 'react';

// materialui-components
import IconButton from '@material-ui/core/IconButton';
import { useTheme } from '@material-ui/core/styles';

// styles
import { useStyles } from './styles';

export const SocialIcon = ({ icon }) => {
  const source = require(`../../assets/images/${icon}.svg`);
  const theme = useTheme();
  const classes = useStyles();

  return (
    <IconButton size={theme.breakpoints.up('md') ? 'small' : 'medium'}>
      <img src={`${source}`} alt={icon} className={classes.iconSize} />
    </IconButton>
  );
};
