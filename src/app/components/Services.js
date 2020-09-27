import React from 'react';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import deepOrange from '@material-ui/core/colors/deepOrange';
import { makeStyles } from '@material-ui/core/styles';

const data = [
  {
    id: '01',
    title: 'Track company-wide progress',
    content:
      'See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.',
  },
  {
    id: '02',
    title: 'Advanced built-in reports',
    content:
      'Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.',
  },
  {
    id: '03',
    title: 'Everything you need in one place',
    content:
      'Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.',
  },
];

const useStyles = makeStyles(theme => ({
  serviceTitleContainer: {
    backgroundColor: deepOrange['50'],
  },
  serviceNumberWrapper: {
    backgroundColor: 'white',
    borderTopRightRadius: '20px',
    borderBottomRightRadius: '20px',
    paddingRight: '2px',
  },
  serviceNumberContainer: {
    width: '60px',
    height: '35px',
    borderRadius: '20px',
    backgroundColor: deepOrange['500'],
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

const Services = () => {
  const classes = useStyles();

  return (
    <Box component="section">
      <Container style={{ paddingRight: 0 }}>
        <Box textAlign="center" paddingRight="16px">
          <Typography variant="h4" style={{ fontWeight: 700 }}>
            What's different <br /> about Manage?
          </Typography>
          <Typography style={{ marginTop: '20px' }}>
            Manage provides all the functionality your team needs, without the
            complexity. Our Software is tailor-made for modern digital product
            teams.
          </Typography>
        </Box>
        {data.map(({ id, title, content }) => (
          <React.Fragment key={id}>
            <Box mt="50px">
              <Grid
                container
                alignItems="center"
                className={classes.serviceTitleContainer}
              >
                <Grid className={classes.serviceNumberWrapper}>
                  <Grid item className={classes.serviceNumberContainer}>
                    <Typography>{id}</Typography>
                  </Grid>
                </Grid>
                <Grid item style={{ marginLeft: '20px' }}>
                  <Typography>{title}</Typography>
                </Grid>
              </Grid>
              <Box mt="10px" pr="16px">
                <Typography>{content}</Typography>
              </Box>
            </Box>
          </React.Fragment>
        ))}
      </Container>
    </Box>
  );
};

export default Services;
