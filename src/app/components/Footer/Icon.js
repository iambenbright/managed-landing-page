import React from "react";

// materialui-components
import IconButton from "@material-ui/core/IconButton";

export const SocialIcon = ({ icon }) => {
  const source = require(`../../../assets/images/${icon}.svg`);

  return (
    <IconButton size="medium">
      <img src={`${source}`} alt={icon} style={{ width: 30, height: 30 }} />
    </IconButton>
  );
};
