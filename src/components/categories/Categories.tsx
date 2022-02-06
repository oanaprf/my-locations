import { makeStyles } from "@mui/styles";
import { useSelector } from "react-redux";
import { getCategories } from "../../redux/selectors";
import { Category } from "../../utils/types";

const useStyles = makeStyles({
  categories: {
    display: "flex",
    flexDirection: "column",
  },
  category: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
  },
});

const Categories = () => {
  const classes = useStyles();
  const categories: Category[] = useSelector(getCategories);

  return (
    <div className={classes.categories}>
      {categories.map(({ id, name }) => (
        <div key={id} className={classes.category}>
          {name}
        </div>
      ))}
    </div>
  );
};

export default Categories;
