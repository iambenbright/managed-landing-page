import React, { useState, useEffect } from 'react';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import deepOrange from '@material-ui/core/colors/deepOrange';
import Container from '@material-ui/core/Container';
import Button from '../shared/Button';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

// data
const data = [
  {
    id: 1,
    name: 'Ali Bravo',
    comment:
      'We have been able to cancel so many other subscriptions ainceusing Manage. There is no more cross-channel confusion and everyone is much more focused.',
    avatar: require('../../assets/images/avatar-ali.png'),
  },
  {
    id: 2,
    name: 'Anisha Li',
    comment:
      'Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.',
    avatar: require('../../assets/images/avatar-anisha.png'),
  },
  {
    id: 3,
    name: 'Richard Watts',
    comment:
      'Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!',
    avatar: require('../../assets/images/avatar-richard.png'),
  },
  {
    id: 4,
    name: 'Shanai Gough',
    comment:
      'Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.',
    avatar: require('../../assets/images/avatar-shanai.png'),
  },
];

const AVATAR_WIDTH = 70;

const useStyles = makeStyles(theme => ({
  MuiAvatarRoot: {
    width: AVATAR_WIDTH,
    height: AVATAR_WIDTH,
    top: `-${AVATAR_WIDTH / 2}px`,
  },
  testimonialContainer: {
    marginTop: '80px',
    backgroundColor: deepOrange['50'],
    padding: '0 30px 40px 30px',
    borderRadius: '5px',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

const SlideDot = ({ activeIndex, index, item }) => {
  const theme = useTheme();
  const isActive = activeIndex === index;

  const activeStyles = {
    border: isActive ? 0 : `1px solid ${theme.palette.primary.main}`,
    backgroundColor: isActive ? theme.palette.primary.main : null,
  };

  return (
    <Box
      key={item.id}
      width="10px"
      height="10px"
      borderRadius="5px"
      margin="2px"
      style={activeStyles}
    />
  );
};

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const currentComment = data[activeIndex];
  const classes = useStyles();

  useEffect(() => {
    const timerId = setInterval(() => {
      setActiveIndex(prevIndex => {
        if (prevIndex === data.length - 1) {
          return 0;
        } else {
          return prevIndex + 1;
        }
      });
    }, 5000);
    return () => {
      clearInterval(timerId);
    };
  }, [activeIndex]);

  return (
    <Box mt="50px">
      <Container maxWidth="lg">
        <Typography
          variant="h5"
          style={{ fontWeight: 700, textAlign: 'center' }}
        >
          What they've said
        </Typography>
        <Box className={classes.testimonialContainer}>
          <Avatar
            src={currentComment.avatar}
            variant="circle"
            alt={currentComment.name}
            className={classes.MuiAvatarRoot}
          />
          <Typography style={{ fontWeight: 700, marginBottom: '20px' }}>
            {currentComment.name}
          </Typography>
          <Typography>{currentComment.comment}</Typography>
        </Box>
        <Box display="flex" justifyContent="center" m="20px">
          {data.map((item, index) => (
            <SlideDot
              key={index}
              item={item}
              activeIndex={activeIndex}
              index={index}
            />
          ))}
        </Box>
        <Box textAlign="center">
          <Button>Get Started</Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Testimonials;
