import { makeStyles } from '@material-ui/core/styles';
import deepOrange from '@material-ui/core/colors/deepOrange';

export const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.down('sm')]: {
      paddingRight: 0,
    },
    [theme.breakpoints.only('sm')]: {
      marginTop: 200,
    },
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
    },
  },
  serviceBgImage: {
    width: '100%',
    height: 'auto',
    [theme.breakpoints.up('md')]: {
      width: 600,
    },
  },
  aboutUs: {
    marginTop: 20,
    color: theme.palette.grey[600],
    [theme.breakpoints.only('sm')]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  service: {
    '&:not(:first-child)': {
      marginTop: 40,
    },
  },
  serviceTitleContainer: {
    backgroundColor: deepOrange['50'],
    [theme.breakpoints.down('sm')]: {
      marginTop: 50,
    },
    [theme.breakpoints.up('md')]: {
      backgroundColor: 'transparent',
    },
  },
  serviceChip: {
    backgroundColor: theme.palette.common.white,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  },
  serviceNumber: {
    width: 60,
    height: 35,
    borderRadius: 20,
    backgroundColor: deepOrange['500'],
    color: theme.palette.common.white,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  serviceContent: {
    color: theme.palette.grey[600],
    marginTop: 10,
    paddingRight: 16,
    [theme.breakpoints.up('md')]: {
      paddingLeft: 80,
    },
  },
}));
