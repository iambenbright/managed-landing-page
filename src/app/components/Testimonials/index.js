import React, { useState, useEffect } from 'react';

// materialui-components
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import Hidden from '@material-ui/core/Hidden';

// custom-components
import Button from '../../shared/Button';
import { testimonials as data } from './data';
import { SlideDot } from './SlideDot';

// styles
import { useStyles } from './styles';
import { useResize } from '../../hooks/useResize';

const SMALL_SCREEN = 960;

const Testimonial = ({ data }) => {
  const { avatar, name, comment } = data;
  const classes = useStyles();

  return (
    <Box className={classes.testimonial}>
      <Avatar
        src={avatar}
        variant="circle"
        alt={name}
        className={classes.avatar}
      />
      <Typography className={classes.name}>{name}</Typography>
      <Typography className={classes.comment}>{comment}</Typography>
    </Box>
  );
};

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const classes = useStyles();
  let screenSize = useResize();

  useEffect(() => {
    let timerId;
    if (screenSize < SMALL_SCREEN) {
      timerId = setInterval(() => {
        setActiveIndex(prevIndex => {
          if (prevIndex === data.length - 1) {
            return 0;
          } else {
            return prevIndex + 1;
          }
        });
      }, 10000);
    }
    return () => {
      timerId && clearInterval(timerId);
    };
  }, [activeIndex, screenSize]);

  return (
    <Box mt={{ xs: '80px', lg: '120px' }}>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          style={{ fontWeight: 700, textAlign: 'center' }}
        >
          What they've said
        </Typography>
        <Box className={classes.outerContainer}>
          <Hidden mdUp>
            <Testimonial data={data[activeIndex]} />
          </Hidden>
          <Hidden smDown>
            <Box className={classes.innerContainer}>
              {data.map(data => (
                <Testimonial key={data.id} data={data} />
              ))}
            </Box>
          </Hidden>
        </Box>
        <Hidden mdUp>
          <Box display="flex" justifyContent="center" m="20px">
            {data.map((item, index) => (
              <SlideDot
                key={item.id}
                item={item}
                activeIndex={activeIndex}
                index={index}
              />
            ))}
          </Box>
        </Hidden>
        <Box textAlign="center" p="15px 0" mt="15px">
          <Button mt="0">Get Started</Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Testimonials;
