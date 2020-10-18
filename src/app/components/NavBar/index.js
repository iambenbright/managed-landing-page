import React from "react";

// materialui-components
import AppBar from "@material-ui/core/AppBar";
import BrandLogo from "../../shared/BrandLogo";
import Button from "../../shared/Button";
import Hidden from "@material-ui/core/Hidden";

// custom-components
import { NestedContainer } from "../../shared/NestedContainer";
import { useStyles } from "./styles";

export const NAVBAR_HEIGHT = 120;

const NavBar = () => {
  const classes = useStyles();

  return (
    <AppBar elevation={0} color="transparent" position="relative">
      <NestedContainer
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        height={`${NAVBAR_HEIGHT}px`}
      >
        <BrandLogo />
        <Hidden mdUp>
          <img
            src={require("../../../assets/images/icon-hamburger.svg")}
            alt=""
          />
        </Hidden>
        <Hidden smDown>
          <ul className={classes.navigationList}>
            <li className={classes.navigationItem}>
              <a href="#Pricing">Pricing</a>
            </li>
            <li className={classes.navigationItem}>
              <a href="#Product">Product</a>
            </li>
            <li className={classes.navigationItem}>
              <a href="#About Us">About Us</a>
            </li>
            <li className={classes.navigationItem}>
              <a href="#Careers">Careers</a>
            </li>
            <li className={classes.navigationItem}>
              <a href="#Community">Community</a>
            </li>
          </ul>
        </Hidden>
        <Hidden smDown>
          <Button style={{ marginTop: 0 }}>Get Started</Button>
        </Hidden>
      </NestedContainer>
    </AppBar>
  );
};

export default NavBar;
