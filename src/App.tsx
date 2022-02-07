import { Routes, Route, Navigate } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { Typography } from "@mui/material";
import Toolbar from "./components/toolbar/Toolbar";
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
    alignItems: "center",
    margin: "20px 40px 80px 40px",
  },
  body: {
    display: "flex",
    justifyContent: "center",
  },
});

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.app}>
      <div className={classes.header}>
        <Typography variant="h6" style={{ fontWeight: 700 }}>
          MY LOCATIONS
        </Typography>
        <Toolbar />
      </div>
      <div className={classes.body}>
        <Routes>
          <Route path="/categories/add" element={<AddCategory />} />
          <Route path="/categories/:id/view" element={<ViewCategory />} />
          <Route path="/categories/:id/edit" element={<AddCategory />} />
          <Route path="/categories" element={<CategoriesList />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/" element={<Navigate to="/categories" />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
