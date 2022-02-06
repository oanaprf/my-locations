import { makeStyles } from "@mui/styles";
import { Typography } from "@mui/material";
import Toolbar from "./Toolbar";

const useStyles = makeStyles({
  app: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#F5F5FB",
  },
  header: {
    display: "flex",
    margin: "30px 0 0 50px",
    color: "#1976d2",
    alignItems: "center",
  },
});

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.app}>
      <div className={classes.header}>
        <Typography variant="h2">My Locations</Typography>
        <Toolbar />
      </div>
    </div>
  );
};

export default App;
