import React from 'react';

const Image = ({ source, ...rest }) => {
  return (
    <img src={require(`../../assets/images/${source}`)} alt="" {...rest} />
  );
};

export default Image;
