import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useDispatch, useSelector } from "react-redux";
import { setView } from "../redux/actions";
import { getView } from "../redux/selectors";
import { VIEWS } from "../utils/types";

const useStyles = makeStyles({
  toolbar: {
    display: "flex",
    flexGrow: 1,
    margin: "20px 50px",
    padding: "10px 0",
  },
});

const Toolbar = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const view = useSelector(getView);

  const onViewChange = () =>
    dispatch(setView(view === VIEWS.CATEGORIES ? VIEWS.LOCATIONS : VIEWS.CATEGORIES));

  return (
    <div className={classes.toolbar} onClick={onViewChange}>
      <Button variant="contained" disableElevation>
        {view}
      </Button>
    </div>
  );
};

export default Toolbar;
