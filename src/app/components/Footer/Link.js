import { useTheme } from '@material-ui/core';
import React, { useState } from 'react';

export const Link = ({ to, label, ...props }) => {
  const [isHovered, setIsHovered] = useState(false);
  const theme = useTheme();

  return (
    <a
      href={`#${to}`}
      style={{
        display: 'block',
        margin: '20px 0',
        color: isHovered ? theme.palette.primary.main : 'white',
        textDecoration: 'none',
      }}
      onMouseOver={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      {label}
    </a>
  );
};
