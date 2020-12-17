import React from 'react';

// materialui-components
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '../../shared/Button';
import { useStyles } from './styles';

// custom-components
import { NestedContainer } from '../../shared/NestedContainer';

const Hero = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <NestedContainer className={classes.heroContent}>
        <Box order={{ md: '1' }}>
          <img
            src={require('../../assets/images/illustration-intro.svg')}
            className={classes.illustration}
            alt="illustration"
          />
        </Box>
        <Box className={classes.callToAction}>
          <Typography variant="h3" className={classes.title}>
            Bring everyone together to build better products.
          </Typography>
          <Typography className={classes.subTitle}>
            Manage makes if simple for software teams <br /> to plan day-to-day
            tasks while keeping the <br /> larger team goals in view
          </Typography>
          <Button>Get Started</Button>
        </Box>
      </NestedContainer>
    </Box>
  );
};

export default Hero;
