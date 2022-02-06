import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setView } from "../redux/actions";
import { getView } from "../redux/selectors";
import { VIEWS } from "../utils/types";
import Actions from "./Actions";

const useStyles = makeStyles({
  toolbar: {
    display: "flex",
    flexGrow: 1,
    margin: "20px 0 20px 50px",
    padding: "10px 0",
  },
});

const viewMapping = {
  [VIEWS.CATEGORIES]: { toggle: VIEWS.LOCATIONS, route: "/locations" },
  [VIEWS.LOCATIONS]: { toggle: VIEWS.CATEGORIES, route: "/categories" },
};

const Toolbar = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const view: VIEWS = useSelector(getView);

  const onViewChange = () => {
    dispatch(setView(viewMapping[view].toggle));
    navigate(viewMapping[view].route);
  };

  return (
    <div className={classes.toolbar}>
      <Button variant="contained" disableElevation onClick={onViewChange}>
        {view}
      </Button>
      <Actions view={view} />
    </div>
  );
};

export default Toolbar;
