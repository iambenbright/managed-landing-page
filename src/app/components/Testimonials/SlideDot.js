import React from "react";

// materialui-components
import { useTheme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";

export const SlideDot = ({ activeIndex, index, item }) => {
  const theme = useTheme();

  const isActive = activeIndex === index;
  const activeStyles = {
    border: isActive ? 0 : `1px solid ${theme.palette.primary.main}`,
    backgroundColor: isActive ? theme.palette.primary.main : null,
  };

  return (
    <Box
      key={item.id}
      width="10px"
      height="10px"
      borderRadius="5px"
      margin="2px"
      style={activeStyles}
    />
  );
};
