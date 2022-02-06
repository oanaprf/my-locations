import { Routes, Route, Navigate } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { Typography } from "@mui/material";
import Toolbar from "./components/Toolbar";
import CategoriesList from "./components/categories/CategoriesList";
import Locations from "./components/locations/LocationsList";
import AddCategory from "./components/categories/AddCategory";
import ViewCategory from "./components/categories/ViewCategory";

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
    flexGrow: 1,
    margin: "0 50px",
    display: "flex",
  },
  list: {
    flexGrow: 0.4,
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
        <div className={classes.list}>
          <Routes>
            <Route path="/categories/add" element={<AddCategory />} />
            <Route path="/categories/:id/view" element={<ViewCategory />} />
            <Route path="/categories" element={<CategoriesList />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="/" element={<Navigate to="/categories" />} />
          </Routes>
        </div>
        {/* <div>
          <Routes>
            <Route path="/categories/:id/view" element={<AddCategory />} />
            <Route path="/categories/:id/edit" element={<CategoriesList />} />
          </Routes>
        </div> */}
      </div>
    </div>
  );
};

export default App;
