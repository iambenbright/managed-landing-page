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
  const classes = useStyles();
  const [activeIndex, setActiveIndex] = useState(0);
  const currentComment = data[activeIndex];
  const viewport = React.useRef();

  // useEffect(() => {
  //   const timerId = setInterval(() => {
  //     setActiveIndex((prevIndex) => {
  //       if (prevIndex === data.length - 1) {
  //         return 0;
  //       } else {
  //         return prevIndex + 1;
  //       }
  //     });
  //   }, 5000);
  //   return () => {
  //     clearInterval(timerId);
  //   };
  // }, [activeIndex]);

  React.useEffect(() => {
    // const timerId = setInterval(() => {
    //   viewport.current.style.transform = "translateX(-200px)";
    // }, 5000);
    // return () => {
    //   clearInterval(timerId);
    // };
  });

  return (
    <Box mt="50px">
      <Container maxWidth="lg">
        <Typography
          variant="h5"
          style={{ fontWeight: 700, textAlign: "center" }}
        >
          What they've said
        </Typography>
        <Box className={classes.viewportStatic}>
          <Box className={classes.viewportScroll} ref={viewport}>
            {data.map(({ id, name, comment, avatar }) => (
              <Box key={id} className={classes.testimonial}>
                <Avatar
                  src={avatar}
                  variant="circle"
                  alt={name}
                  className={classes.avatar}
                />
                <Typography style={{ fontWeight: 700, marginBottom: "20px" }}>
                  {name}
                </Typography>
                <Typography>{comment}</Typography>
              </Box>
            ))}
          </Box>
        </Box>
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
        <Box textAlign="center">
          <Button>Get Started</Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Testimonials;
