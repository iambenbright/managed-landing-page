import { makeStyles } from "@material-ui/core/styles";
import deepOrange from "@material-ui/core/colors/deepOrange";

const AVATAR_WIDTH = 70;

export const useStyles = makeStyles((theme) => ({
  avatar: {
    width: AVATAR_WIDTH,
    height: AVATAR_WIDTH,
    top: `-${AVATAR_WIDTH / 2}px`,
  },
  testimonial: {
    marginTop: "80px",
    backgroundColor: deepOrange["50"],
    padding: "0 30px 40px 30px",
    borderRadius: "5px",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minWidth: 400,
    "&:not(:last-of-type)": {
      marginRight: 20,
    },
  },
  viewportStatic: {},
  viewportScroll: {
    display: "flex",
    overflowX: "scroll",
  },
}));
