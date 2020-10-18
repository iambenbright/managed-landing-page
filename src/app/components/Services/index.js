import React from "react";

//  materialui-components
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

// custom-components
import { NestedContainer } from "../../shared/NestedContainer";

// services
import { services as data } from "./data";

// styles
import { useStyles } from "./styles";

const Services = () => {
  const classes = useStyles();

  return (
    <NestedContainer style={{ paddingRight: 0 }} mt={{ sm: "200px", md: null }}>
      <Box textAlign="center" paddingRight="16px">
        <Typography variant="h4" style={{ fontWeight: 700 }}>
          What's different <br /> about Manage?
        </Typography>
        <Typography style={{ marginTop: "20px" }}>
          Manage provides all the functionality your team needs, without the
          complexity. Our Software is tailor-made for modern digital product
          teams.
        </Typography>
      </Box>
      {data.map(({ id, title, content }) => (
        <React.Fragment key={id}>
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
            <Grid item style={{ marginLeft: 20 }}>
              <Typography>{title}</Typography>
            </Grid>
          </Grid>
          <Box mt="10px" pr="16px">
            <Typography>{content}</Typography>
          </Box>
        </React.Fragment>
      ))}
    </NestedContainer>
  );
};

export default Services;
