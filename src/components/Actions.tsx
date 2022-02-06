import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useLocation, useNavigate } from "react-router-dom";
import { VIEWS } from "../utils/types";

const useStyles = makeStyles({
  container: {
    display: "flex",
  },
});

const Buttons = ({ view }: { view: VIEWS }) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const location = useLocation();

  const navigateToAddCategory = () => navigate(`${location.pathname}/add`);

  return (
    <div className={classes.container}>
      <Button onClick={navigateToAddCategory}>Add</Button>
    </div>
  );
};

export default Buttons;
