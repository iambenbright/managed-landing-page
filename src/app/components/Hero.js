import React from 'react';

import Image from '../shared/Image';
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
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    borderRadius: 20,
  },
  heroContent: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
}));

const Hero = () => {
  const classes = useStyles();

  return (
    <Box width="100%">
      <Box position="relative" width="100%">
        <Image
          source="bg-tablet-pattern.svg"
          style={{
            position: 'absolute',
            top: '-30px',
            right: '-60px',
            width: '100%',
            height: 'auto',
          }}
        />
      </Box>
      <Box width="90%" position="relative">
        <Image
          source="illustration-intro.svg"
          style={{
            position: 'absolute',
            top: 120,
            left: 28,
            width: '100%',
            height: 'auto',
          }}
        />
      </Box>
      <Box height={420} />
      <Box position="relative" width="100%" height="380px" overflow="hidden">
        <Image
          source="bg-tablet-pattern.svg"
          style={{
            position: 'absolute',
            top: 15,
            right: '-240px',
            width: '100%',
            height: 'auto',
          }}
        />
        <Box position="relative" width="80%" mx="auto" textAlign="center">
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
