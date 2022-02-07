import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import { selectLocation } from "../../redux/actions";
import { getLocations, getSelectedLocationId } from "../../redux/selectors";
import { Location } from "../../utils/types";

const useStyles = makeStyles({
  locations: {
    display: "flex",
    flexDirection: "column",
    width: 500,
  },
  location: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    marginBottom: 5,
    "&:hover": {
      cursor: "pointer",
      backgroundColor: "#e8f0f9",
      transition: "background-color 0.5s ease",
    },
    "&.selected": {
      backgroundColor: "#d0e0f2",
    },
  },
});

const LocationList = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const locations: Location[] = useSelector(getLocations);
  const selectedLocationId: string = useSelector(getSelectedLocationId);

  const onSelectCategory = (id: string) => () =>
    dispatch(selectLocation(id === selectedLocationId ? "" : id));

  return (
    <div className={classes.locations}>
      {locations?.length ? (
        locations?.map(({ id, name }) => (
          <div
            key={id}
            className={clsx(classes.location, selectedLocationId === id && "selected")}
            onClick={onSelectCategory(id)}
          >
            {name}
          </div>
        ))
      ) : (
        <Typography variant="body1">
          There are no locations. Add one on the button above.
        </Typography>
      )}
    </div>
  );
};

export default LocationList;
