import { Routes, Route, Navigate } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { Typography } from "@mui/material";
import Toolbar from "./components/Toolbar";
import Categories from "./components/categories/Categories";
import Locations from "./components/locations/Locations";
import AddCategory from "./components/categories/AddCategory";

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
    color: "#1976d2",
    alignItems: "center",
    margin: "30px 50px",
  },
  body: {
    marginLeft: 50,
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
      <div className={classes.body}>
        <Routes>
          <Route path="/categories/add" element={<AddCategory />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/" element={<Navigate to="/categories" />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
