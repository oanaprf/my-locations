import {
  Typography,
  TextField,
  Button,
  IconButton,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import { makeStyles } from "@mui/styles";
import { ArrowBackIos } from "@mui/icons-material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addLocation, editLocation } from "../../redux/actions";
import { useNavigate, useParams } from "react-router-dom";
import { getCategories, getLocationById } from "../../redux/selectors";
import { Category } from "../../utils/types";
import { findItem } from "../../utils/utils";

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
  const categories = useSelector(getCategories);
  const [name, setName] = useState(location?.name ?? "");
  const [address, setAddress] = useState(location?.address ?? "");
  const [latitude, setLatitude] = useState(location?.coordinates?.latitude ?? "");
  const [longitude, setLongitude] = useState(location?.coordinates?.longitude ?? "");
  const [categoryId, setCategoryId] = useState(location?.category?.id ?? "");

  const onNameChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setName(e?.target?.value);
  const onAddressChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setAddress(e?.target?.value);
  const onLatitudeChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setLatitude(e?.target?.value);
  const onLongitudeChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setLongitude(e?.target?.value);
  const onCategorySelect = (e: SelectChangeEvent) => setCategoryId(e?.target?.value);

  const onSave = () => {
    if (name) {
      if (location?.id)
        dispatch(
          editLocation({
            id: location?.id,
            name,
            address,
            coordinates: { latitude, longitude },
            category: {
              id: categoryId,
              name: findItem(categories, categoryId)?.name ?? "",
            },
          })
        );
      else
        dispatch(
          addLocation({
            id: uuidv4(),
            name,
            address,
            coordinates: { latitude, longitude },
            category: {
              id: categoryId,
              name: findItem(categories, categoryId)?.name ?? "",
            },
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
        style={{ marginBottom: 10 }}
      />
      <TextField
        label="Address"
        size="small"
        variant="standard"
        required
        value={address}
        onChange={onAddressChange}
        style={{ marginBottom: 10 }}
      />
      <div className={classes.flex}>
        <TextField
          label="Latitude"
          size="small"
          variant="standard"
          required
          value={latitude}
          onChange={onLatitudeChange}
          style={{ marginBottom: 10 }}
        />
        <TextField
          label="Longitude"
          size="small"
          variant="standard"
          required
          value={longitude}
          onChange={onLongitudeChange}
          style={{ marginBottom: 10 }}
        />
      </div>
      <Select
        value={categoryId}
        defaultValue={categoryId}
        label="Category"
        onChange={onCategorySelect}
        style={{ marginBottom: 10 }}
      >
        {categories?.map((category: Category) => (
          <MenuItem value={category?.id}>{category?.name}</MenuItem>
        ))}
      </Select>
      <Button variant="contained" onClick={onSave} className={classes.saveButton}>
        Save
      </Button>
    </div>
  );
};

export default AddLocation;
