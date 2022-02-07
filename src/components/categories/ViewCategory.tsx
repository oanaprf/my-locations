import { Typography, IconButton } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useSelector } from "react-redux";
import { ArrowBackIos } from "@mui/icons-material";
import { useNavigate, useParams } from "react-router-dom";
import { getCategoryById } from "../../redux/selectors";

const useStyles = makeStyles({
  form: {
    width: 400,
    minHeight: 200,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 30,
    display: "flex",
    flexDirection: "column",
  },
  flex: {
    display: "flex",
    alignItems: "center",
  },
  fields: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginLeft: 40,
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
      <div className={classes.fields}>
        <div className={classes.flex}>
          <Typography variant="body2" style={{ fontWeight: 700, marginRight: 10 }}>
            Name:
          </Typography>
          <Typography variant="body2">{category?.name}</Typography>
        </div>
        <div className={classes.flex}>
          <Typography variant="body2" style={{ fontWeight: 700, marginRight: 10 }}>
            Id:
          </Typography>
          <Typography variant="body2">{category?.id}</Typography>
        </div>
      </div>
    </div>
  );
};

export default ViewCategory;
