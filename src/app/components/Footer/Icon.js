import React from 'react';

// materialui-components
import IconButton from '@material-ui/core/IconButton';
import { useTheme } from '@material-ui/core/styles';

export const SocialIcon = ({ icon }) => {
  const source = require(`../../assets/images/${icon}.svg`);
  const theme = useTheme();

  const isMedium = theme.breakpoints.up('md');
  let width = isMedium ? 20 : 30;
  let marginRight = isMedium ? 10 : null;

  return (
    <IconButton size={isMedium ? 'small' : 'medium'}>
      <img
        src={`${source}`}
        alt={icon}
        style={{ width, height: width, marginRight }}
      />
    </IconButton>
  );
};
