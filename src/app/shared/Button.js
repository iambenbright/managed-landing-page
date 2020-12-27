import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import MUIButton from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  button: {
    textTransform: 'capitalize',
    marginTop: theme.spacing(4),
    boxShadow: theme.shadows[1],
    padding: `${theme.spacing(1.2)}px ${theme.spacing(4)}px`,
    borderRadius: 30,
    backgroundColor: theme.palette.primary.main,
  },
}));

const Button = ({ style, children, ...props }) => {
  const classes = useStyles();

  return (
    <MUIButton
      disableElevation
      disableRipple
      variant="contained"
      color="primary"
      className={classes.button}
      style={style}
      {...props}
    >
      {children}
    </MUIButton>
  );
};

export default Button;
