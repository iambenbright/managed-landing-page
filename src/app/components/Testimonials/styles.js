import { makeStyles } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';

const AVATAR_WIDTH = 70;

export const useStyles = makeStyles(theme => ({
  avatar: {
    width: AVATAR_WIDTH,
    height: AVATAR_WIDTH,
    top: `-${AVATAR_WIDTH / 2}px`,
  },
  testimonial: {
    marginTop: '80px',
    backgroundColor: grey['100'],
    padding: '0 30px 40px 30px',
    borderRadius: '5px',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minWidth: 400,
    '&:not(:last-of-type)': {
      marginRight: 20,
    },
  },
  testimonials: {
    display: 'flex',
    overflowX: 'hidden',
    [theme.breakpoints.up('md')]: {
      overflowX: 'auto',
      scrollBar: 'none',
    },
  },
}));
