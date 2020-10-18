import { makeStyles } from "@material-ui/core/styles";
import deepOrange from "@material-ui/core/colors/deepOrange";

export const useStyles = makeStyles((theme) => ({
  serviceTitleContainer: {
    backgroundColor: deepOrange["50"],
    marginTop: 50,
  },
  serviceNumberWrapper: {
    backgroundColor: theme.palette.common.white,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  },
  serviceNumberContainer: {
    width: 60,
    height: 35,
    borderRadius: 20,
    backgroundColor: deepOrange["500"],
    color: theme.palette.common.white,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));
