import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import AddIcon from "@mui/icons-material/Add";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import {
  deleteCategory,
  deleteLocation,
  selectCategory,
  selectLocation,
} from "../../redux/actions";
import { getSelectedCategoryId, getSelectedLocationId } from "../../redux/selectors";
import { VIEWS } from "../../utils/types";

const useStyles = makeStyles({
  container: {
    display: "flex",
    marginLeft: 50,
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

  const onNavigateToAdd = () => {
    dispatch(viewMapping[view].selectAction(""));
    navigate(`${viewMapping[view].baseRoute}/add`);
  };

  const onNavigateToView = (id: string) => () =>
    navigate(`${viewMapping[view].baseRoute}/${id}/view`);

  const onNavigateToEdit = (id: string) => () =>
    navigate(`${viewMapping[view].baseRoute}/${id}/edit`);

  const onDeleteItem = (id: string) => () => {
    if (location.pathname.endsWith("/view")) navigate(viewMapping[view].baseRoute);
    dispatch(viewMapping[view].deleteAction(id));
  };

  interface IconProps {
    fontSize: string;
  }
  const renderButton = (text: string, Icon: React.FC<IconProps>, handler: () => void) => (
    <Button onClick={handler} style={{ color: "#0b3360", margin: "0 10px" }}>
      <Icon fontSize="small" />
      {text}
    </Button>
  );

  return (
    <div className={classes.container}>
      {!location.pathname.endsWith("/add")
        ? renderButton("Add", AddIcon as React.FC, onNavigateToAdd)
        : null}
      {selectedItemId ? (
        <>
          {!location.pathname.endsWith("/view")
            ? renderButton(
                "View",
                VisibilityIcon as React.FC,
                onNavigateToView(selectedItemId)
              )
            : null}
          {!location.pathname.endsWith("/edit")
            ? renderButton("Edit", EditIcon as React.FC, onNavigateToEdit(selectedItemId))
            : null}
          {renderButton("Delete", DeleteIcon as React.FC, onDeleteItem(selectedItemId))}
        </>
      ) : null}
    </div>
  );
};

export default Actions;
