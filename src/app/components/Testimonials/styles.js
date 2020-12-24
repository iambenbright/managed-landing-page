import { makeStyles } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';

const AVATAR_WIDTH = 70;

export const useStyles = makeStyles(theme => ({
  avatar: {
    width: AVATAR_WIDTH,
    height: AVATAR_WIDTH,
    top: `-${AVATAR_WIDTH / 2}px`,
  },
  name: {
    fontWeight: 700,
    color: theme.palette.grey['800'],
    marginBottom: 20,
  },
  comment: {
    [theme.breakpoints.only('sm')]: {
      width: '70%',
    },
  },
  outerContainer: {
    overflow: 'hidden',
    marginTop: 50,
    [theme.breakpoints.up('md')]: {
      maxHeight: 260,
    },
  },
  innerContainer: {
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      overflowX: 'scroll',
    },
  },
  testimonial: {
    height: 300,
    marginTop: 36,
    backgroundColor: grey['100'],
    padding: '0 30px 40px 30px',
    borderRadius: 5,
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '&:not(:last-of-type)': {
      marginRight: 20,
    },
    [theme.breakpoints.up('sm')]: {
      height: 230,
    },
    [theme.breakpoints.up('md')]: {
      height: 'auto',
      minWidth: 500,
    },
  },
}));
