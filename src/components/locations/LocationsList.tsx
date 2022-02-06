import { makeStyles } from "@mui/styles";
import { useSelector } from "react-redux";
import { getLocations } from "../../redux/selectors";
import { Location } from "../../utils/types";

const useStyles = makeStyles({
  locations: {
    display: "flex",
    flexDirection: "column",
  },
  location: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
  },
});

const LocationList = () => {
  const classes = useStyles();
  const locations: Location[] = useSelector(getLocations);

  return (
    <div className={classes.locations}>
      {locations?.map(({ id, name }) => (
        <div key={id} className={classes.location}>
          {name}
        </div>
      ))}
    </div>
  );
};

export default LocationList;
