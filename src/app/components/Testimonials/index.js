import React, { useState, useEffect } from "react";

// materialui-components
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Avatar from "@material-ui/core/Avatar";

// custom-components
import Button from "../../shared/Button";
import { testimonials as data } from "./data";
import { SlideDot } from "./SlideDot";

// styles
import { useStyles } from "./styles";

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const currentComment = data[activeIndex];
  const classes = useStyles();

  useEffect(() => {
    const timerId = setInterval(() => {
      setActiveIndex((prevIndex) => {
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
          style={{ fontWeight: 700, textAlign: "center" }}
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
          <Typography style={{ fontWeight: 700, marginBottom: "20px" }}>
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
