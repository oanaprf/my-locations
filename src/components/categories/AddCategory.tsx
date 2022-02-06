import { Typography, TextField, Button, IconButton } from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import { makeStyles } from "@mui/styles";
import { ArrowBackIos } from "@mui/icons-material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCategory, editCategory } from "../../redux/actions";
import { useNavigate, useParams } from "react-router-dom";
import { getCategoryById } from "../../redux/selectors";

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
  flex: {
    display: "flex",
    alignItems: "center",
  },
});

const AddCategory = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const category = useSelector(getCategoryById(params?.id ?? ""));
  const [name, setName] = useState(category?.name ?? "");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => setName(e?.target?.value);

  const onSave = () => {
    if (name) {
      if (category?.id) dispatch(editCategory({ id: category?.id, name }));
      else dispatch(addCategory({ id: uuidv4(), name }));
      navigate("/categories");
    }
  };

  const onBackClick = () => navigate(-1);

  return (
    <div className={classes.form}>
      <div className={classes.flex}>
        <IconButton onClick={onBackClick}>
          <ArrowBackIos />
        </IconButton>
        <Typography variant="h5">{category?.id ? "Edit" : "Add"} category</Typography>
      </div>
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
