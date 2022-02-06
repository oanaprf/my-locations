import { Typography, IconButton } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useSelector } from "react-redux";
import { ArrowBackIos } from "@mui/icons-material";
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
  },
  flex: {
    display: "flex",
    alignItems: "center",
    marginBottom: 10,
  },
});

const ViewCategory = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const params = useParams();
  const category = useSelector(getCategoryById(params?.id ?? ""));

  const onBackClick = () => navigate(-1);

  return (
    <div className={classes.form}>
      <div className={classes.flex}>
        <IconButton onClick={onBackClick} style={{ alignSelf: "flex-start" }}>
          <ArrowBackIos />
        </IconButton>
        <Typography variant="h5">Category details</Typography>
      </div>
      <div className={classes.flex}>
        <Typography variant="body2">Name: </Typography>
        <Typography variant="body2">{category?.name}</Typography>
      </div>
      <div className={classes.flex}>
        <Typography variant="body2">Id: </Typography>
        <Typography variant="body2">{category?.id}</Typography>
      </div>
    </div>
  );
};

export default ViewCategory;
