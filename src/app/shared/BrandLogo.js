import React from 'react';

import Box from '@material-ui/core/Box';

const BrandLogo = ({ style }) => {
  return (
    <Box mt={['14px', null, 0]} style={style}>
      <img src={require('../../assets/images/logo.svg')} alt="" />
    </Box>
  );
};

export default BrandLogo;
