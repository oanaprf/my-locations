import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import {
  deleteCategory,
  deleteLocation,
  selectCategory,
  selectLocation,
} from "../redux/actions";
import { getSelectedCategoryId, getSelectedLocationId } from "../redux/selectors";
import { VIEWS } from "../utils/types";

const useStyles = makeStyles({
  container: {
    display: "flex",
  },
});

const viewMapping = {
  [VIEWS.CATEGORIES]: {
    baseRoute: "/categories",
    selectAction: selectCategory,
    deleteAction: deleteCategory,
    getSelectedItemId: getSelectedCategoryId,
  },
  [VIEWS.LOCATIONS]: {
    baseRoute: "/locations",
    selectAction: selectLocation,
    deleteAction: deleteLocation,
    getSelectedItemId: getSelectedLocationId,
  },
};

const Actions = ({ view }: { view: VIEWS }) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const selectedItemId = useSelector(viewMapping[view].getSelectedItemId);

  const onNavigateToAddForm = () => {
    dispatch(viewMapping[view].selectAction(""));
    navigate(`${viewMapping[view].baseRoute}/add`);
  };

  const onNavigateToView = (id: string) => () =>
    navigate(`${viewMapping[view].baseRoute}/${id}/view`);

  const onDeleteItem = (id: string) => () => {
    if (location.pathname.endsWith("/view")) navigate(viewMapping[view].baseRoute);
    dispatch(viewMapping[view].deleteAction(id));
  };

  return (
    <div className={classes.container}>
      {!location.pathname.endsWith("/add") ? (
        <Button onClick={onNavigateToAddForm}>Add</Button>
      ) : null}
      {selectedItemId ? (
        <>
          {!location.pathname.endsWith("/view") ? (
            <Button onClick={onNavigateToView(selectedItemId)}>View</Button>
          ) : null}
          <Button onClick={onDeleteItem(selectedItemId)}>Delete</Button>
        </>
      ) : null}
    </div>
  );
};

export default Actions;
