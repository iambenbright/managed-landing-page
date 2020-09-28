import React from 'react';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import grey from '@material-ui/core/colors/grey';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  heroHeadText: {
    fontWeight: 700,
  },
  heroBodyText: {
    color: grey['500'],
    marginTop: theme.spacing(1),
  },
  heroCallToAction: {
    textTransform: 'capitalize',
    marginTop: theme.spacing(4),
    boxShadow: theme.shadows[2],
    padding: `${theme.spacing(1)} ${theme.spacing(4)}`,
    borderRadius: 20,
  },
  heroContent: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
  heroBgPattern: {
    backgroundImage: `url(${require('../../assets/images/bg-tablet-pattern.svg')})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'top -50px right -130px',
  },
}));

const Hero = () => {
  const classes = useStyles();

  return (
    <Box>
      <Box width="100%" height="450px" className={classes.heroBgPattern} />
      <Box width="100%" position="absolute" top={120}>
        <Box position="relative">
          <img
            src={require('../../assets/images/illustration-intro.svg')}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
            }}
            alt="illustration"
          />
        </Box>
      </Box>
      <Box
        width="100%"
        height="400px"
        mt="30px"
        className={classes.heroBgPattern}
        style={{ backgroundPosition: 'top 0 right -260px' }}
      >
        <Box width="80%" mx="auto" textAlign="center">
          <Typography variant="h4" className={classes.heroHeadText}>
            Bring everyone <br /> together to build <br /> better products.
          </Typography>
          <Typography className={classes.heroBodyText}>
            Manage makes if simple for software teams to plan day-to-day tasks
            while keeping the larger team goals in view
          </Typography>
          <Button
            disableElevation
            disableRipple
            variant="contained"
            className={classes.heroCallToAction}
          >
            Get Started
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
