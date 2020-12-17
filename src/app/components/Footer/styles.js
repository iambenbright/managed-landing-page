import { makeStyles } from '@material-ui/core/styles';
import blueGrey from '@material-ui/core/colors/blueGrey';

export const useStyles = makeStyles(theme => ({
  getStarted: {
    marginTop: '50px',
    textAlign: 'center',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    padding: '100px 10px',
  },
  getStartedActionText: {
    fontWeight: 'bold',
    [theme.breakpoints.only('xs')]: {
      marginBottom: 32,
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '2rem',
      width: '60%',
      textAlign: 'left',
    },
    [theme.breakpoints.up('md')]: {
      width: '40%',
    },
  },
  getStartedBtn: {
    [theme.breakpoints.up('sm')]: {
      marginTop: 0,
      borderRadius: 40,
    },
  },
  subscribeTextBox: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.primary.main,
    marginRight: '10px',
    paddingTop: theme.spacing(0.6),
    paddingBottom: theme.spacing(0.6),
    borderRadius: 20,
    '&:hover': {
      backgroundColor: theme.palette.common.white,
    },
    [theme.breakpoints.only('sm')]: {
      flex: 1,
    },
  },
  copyright: {
    color: theme.palette.common.white,
    marginTop: 50,
    textAlign: 'center',
    fontSize: '0.8rem',
    [theme.breakpoints.up('md')]: {
      position: 'absolute',
      top: 120,
      right: 80,
    },
  },
  innerContainer: {
    position: 'relative',
    backgroundColor: blueGrey['900'],
    paddingTop: 48,
    paddingBottom: 48,
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
    },
  },
}));
