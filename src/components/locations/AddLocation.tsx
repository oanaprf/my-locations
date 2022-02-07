import { Typography, TextField, Button, IconButton } from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import { makeStyles } from "@mui/styles";
import { ArrowBackIos } from "@mui/icons-material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addLocation, editLocation } from "../../redux/actions";
import { useNavigate, useParams } from "react-router-dom";
import { getLocationById } from "../../redux/selectors";

const useStyles = makeStyles({
  form: {
    width: 400,
    minHeight: 200,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 30,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  flex: {
    display: "flex",
    alignItems: "center",
  },
  saveButton: {
    alignSelf: "flex-end",
  },
});

const AddLocation = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const location = useSelector(getLocationById(params?.id ?? ""));
  const [name, setName] = useState(location?.name ?? "");
  const [address, setAddress] = useState(location?.address ?? "");
  const [latitude, setLatitude] = useState(location?.coordinates?.latitude ?? "");
  const [longitude, setLongitude] = useState(location?.coordinates?.longitude ?? "");

  const onNameChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setName(e?.target?.value);
  const onAddressChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setAddress(e?.target?.value);
  const onLatitudeChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setLatitude(e?.target?.value);
  const onLongitudeChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setLongitude(e?.target?.value);

  const onSave = () => {
    if (name) {
      if (location?.id) dispatch(editLocation({ id: location?.id, name, address }));
      else
        dispatch(
          addLocation({
            id: uuidv4(),
            name,
            address,
            coordinates: { latitude, longitude },
          })
        );
      navigate("/locations");
    }
  };

  const onBackClick = () => navigate(-1);

  return (
    <div className={classes.form}>
      <div className={classes.flex}>
        <IconButton onClick={onBackClick}>
          <ArrowBackIos />
        </IconButton>
        <Typography variant="h5">{location?.id ? "Edit" : "Add"} location</Typography>
      </div>
      <TextField
        label="Name"
        size="small"
        variant="standard"
        required
        value={name}
        onChange={onNameChange}
      />
      <TextField
        label="Address"
        size="small"
        variant="standard"
        required
        value={address}
        onChange={onAddressChange}
      />
      <div className={classes.flex}>
        <TextField
          label="Latitude"
          size="small"
          variant="standard"
          required
          value={latitude}
          onChange={onLatitudeChange}
        />
        <TextField
          label="Longitude"
          size="small"
          variant="standard"
          required
          value={longitude}
          onChange={onLongitudeChange}
        />
      </div>
      <Button variant="contained" onClick={onSave} className={classes.saveButton}>
        Save
      </Button>
    </div>
  );
};

export default AddLocation;
