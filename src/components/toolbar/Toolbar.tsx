import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setView } from "../../redux/actions";
import { getView } from "../../redux/selectors";
import { VIEWS } from "../../utils/types";
import Actions from "./Actions";

const useStyles = makeStyles({
  toolbar: {
    display: "flex",
    flexGrow: 1,
    marginLeft: 80,
  },
});

const viewMapping = {
  [VIEWS.CATEGORIES]: {
    toggle: VIEWS.LOCATIONS,
    route: "/locations",
  },
  [VIEWS.LOCATIONS]: {
    toggle: VIEWS.CATEGORIES,
    route: "/categories",
  },
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

  const renderViewButton = (renderedView: VIEWS, text: string) => (
    <Button
      onClick={onViewChange}
      style={{ color: "#0b3360", borderBottom: "4px solid transparent" }}
      {...(view === renderedView && {
        style: { color: "#1565c0", borderBottom: "4px solid #1565c0" },
      })}
    >
      {text}
    </Button>
  );

  return (
    <div className={classes.toolbar}>
      {renderViewButton(VIEWS.CATEGORIES, "Categories")}
      {renderViewButton(VIEWS.LOCATIONS, "Locations")}
      <Actions view={view} />
    </div>
  );
};

export default Toolbar;
