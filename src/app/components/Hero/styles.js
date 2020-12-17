import { makeStyles } from '@material-ui/core/styles';
import { NAVBAR_HEIGHT } from '../NavBar';

export const useStyles = makeStyles(theme => ({
  root: {
    minHeight: 900,
    transform: `translateY(-${NAVBAR_HEIGHT}px)`,
    backgroundImage: `url(${require('../../assets/images/bg-tablet-pattern.svg')})`,
    backgroundSize: 650,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'top -180px right -320px',
    [theme.breakpoints.only('sm')]: {
      backgroundSize: 940,
    },
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      minHeight: 600,
      backgroundPosition: 'top -160px right -200px',
    },
  },
  heroContent: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.down('sm')]: {
      transform: 'translateY(200px)',
    },
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
    },
  },
  callToAction: {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      alignItems: 'center',
    },
    [theme.breakpoints.up('md')]: {
      transform: 'translateY(-50px)',
      textAlign: 'left',
      alignItems: 'flex-start',
    },
  },
  title: {
    fontWeight: 700,
    [theme.breakpoints.up('sm')]: {
      width: 450,
    },
  },
  subTitle: {
    marginTop: theme.spacing(1) * 4,
  },
  illustration: {
    width: '100%',
    height: 'auto',
    [theme.breakpoints.up('md')]: {
      width: 450,
    },
  },
}));
