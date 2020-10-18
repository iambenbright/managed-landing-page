import { makeStyles } from "@material-ui/core/styles";
import deepOrange from "@material-ui/core/colors/deepOrange";

export const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("sm")]: {
      paddingRight: 0,
    },
    [theme.breakpoints.only("sm")]: {
      marginTop: 200,
    },
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
      backgroundImage: `url(${require("../../../assets/images/bg-tablet-pattern.svg")})`,
      backgroundSize: 650,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "bottom 250% left -100%",
    },
    [theme.breakpoints.up("lg")]: {
      backgroundPosition: "bottom 200% left -70%",
    },
  },
  aboutUs: {
    marginTop: 20,
    [theme.breakpoints.only("sm")]: {
      width: 400,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  service: {
    "&:not(:first-child)": {
      marginTop: 40,
    },
  },
  serviceTitleContainer: {
    backgroundColor: deepOrange["50"],
    [theme.breakpoints.down("sm")]: {
      marginTop: 50,
    },
    [theme.breakpoints.up("md")]: {
      backgroundColor: "transparent",
    },
  },
  serviceChip: {
    backgroundColor: theme.palette.common.white,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  },
  serviceNumber: {
    width: 60,
    height: 35,
    borderRadius: 20,
    backgroundColor: deepOrange["500"],
    color: theme.palette.common.white,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  serviceContent: {
    marginTop: 10,
    paddingRight: 16,
    [theme.breakpoints.up("md")]: {
      paddingLeft: 80,
    },
  },
}));
