import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  toolbar: {
    display: "flex",
    flexGrow: 1,
    backgroundColor: "#FFF",
    borderRadius: 15,
    height: 50,
    margin: "20px 50px",
    padding: "10px 0",
  },
});

const Toolbar = () => {
  const classes = useStyles();
  return <div className={classes.toolbar}></div>;
};

export default Toolbar;
