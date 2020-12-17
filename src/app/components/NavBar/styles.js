import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  navigationList: {
    margin: 0,
    padding: 0,
    listStyle: "none",
    display: "flex",
  },
  navigationItem: {
    "&:not(:last-of-type)": {
      marginRight: 20,
    },
    "& a": {
      textDecoration: "none",
      color: theme.palette.text.primary,
    },
  },
}));
