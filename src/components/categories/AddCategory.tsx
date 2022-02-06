import { Typography, TextField, Button } from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import { makeStyles } from "@mui/styles";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addCategory } from "../../redux/actions";

const useStyles = makeStyles({
  form: {
    width: 300,
    minHeight: 200,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
});

const AddCategory = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => setName(e?.target?.value);

  const onSave = () => name && dispatch(addCategory({ id: uuidv4(), name }));

  return (
    <div className={classes.form}>
      <Typography variant="h5">Add a category</Typography>
      <TextField
        label="Name"
        size="small"
        variant="outlined"
        required
        value={name}
        onChange={onChange}
      />
      <Button variant="contained" onClick={onSave}>
        Save
      </Button>
    </div>
  );
};

export default AddCategory;
