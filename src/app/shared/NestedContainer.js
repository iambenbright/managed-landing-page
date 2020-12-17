import React from 'react';
import Box from '@material-ui/core/Box';

export const NestedContainer = ({ children, ...other }) => {
  return (
    <Box px={{ xs: 2, sm: 4, md: 10 }} {...other}>
      {children}
    </Box>
  );
};
