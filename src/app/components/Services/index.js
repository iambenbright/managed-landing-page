import React, { Fragment } from 'react';

//  materialui-components
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';

// custom-components
import { NestedContainer } from '../../shared/NestedContainer';

// services
import { services as data } from './data';

// styles
import { useStyles } from './styles';

const Services = () => {
  const classes = useStyles();

  return (
    <Fragment>
      <NestedContainer className={classes.root}>
        <Box
          textAlign={{ xs: 'center', md: 'left' }}
          pr={{ xs: '16px', md: '80px' }}
        >
          <Typography variant="h4" className={classes.serviceHeader}>
            What's different about Manage?
          </Typography>
          <Typography className={classes.aboutUs}>
            Manage provides all the functionality your team needs, without the
            complexity. Our Software is tailor-made for modern digital product
            teams.
          </Typography>
        </Box>
        <Box>
          {data.map(({ id, title, content }) => (
            <Box key={id} className={classes.service}>
              <Grid
                container
                alignItems="center"
                className={classes.serviceTitleContainer}
              >
                <Grid className={classes.serviceChip}>
                  <Grid item className={classes.serviceNumberContainer}>
                    <Typography className={classes.serviceNumber}>
                      {id}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item style={{ marginLeft: 20 }}>
                  <Typography className={classes.serviceTitle}>
                    {title}
                  </Typography>
                </Grid>
              </Grid>
              <Box className={classes.serviceContent}>
                <Typography>{content}</Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </NestedContainer>
      <Hidden smDown>
        <Box position="absolute" top="960px" left="-300px">
          <img
            src={require('../../assets/images/bg-tablet-pattern.svg')}
            className={classes.serviceBgImage}
            alt="illustration"
          />
        </Box>
      </Hidden>
    </Fragment>
  );
};

export default Services;
