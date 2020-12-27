import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  nav: {
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      backgroundColor: 'transparent',
      position: 'absolute',
      top: 120,
      zIndex: 100,
    },
  },
  list: {
    margin: 0,
    padding: 0,
    listStyle: 'none',
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      padding: '20px 0',
      borderRadius: 5,
      flexDirection: 'column',
      backgroundColor: 'white',
      width: '90%',
      margin: '0 auto',
      alignItems: 'center',
    },
  },
  item: {
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
      padding: '20px 0',
    },
    '&:not(:last-of-type)': {
      marginRight: 20,
      [theme.breakpoints.down('sm')]: {
        marginRight: 0,
      },
    },
    '& a': {
      textDecoration: 'none',
    },
    '& p': {
      color: theme.palette.grey[800],
      fontSize: '1.2rem',
      [theme.breakpoints.up('md')]: {
        fontSize: '1rem',
      },
    },
  },
  menuOpenAndClose: {
    '&:hover': {
      cursor: 'pointer',
    },
  },
  backdrop: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    background:
      'linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 40%, rgba(0, 0, 0, 0.2) 60%)',
    zIndex: 99,
  },
}));
