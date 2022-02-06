import { makeStyles } from "@mui/styles";
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import { selectCategory } from "../../redux/actions";
import { getCategories, getSelectedCategoryId } from "../../redux/selectors";
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
    marginBottom: 10,
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

const CategoriesList = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const categories: Category[] = useSelector(getCategories);
  const selectedCategoryId: string = useSelector(getSelectedCategoryId);

  const onSelectCategory = (id: string) => () =>
    dispatch(selectCategory(id === selectedCategoryId ? "" : id));

  return (
    <div className={classes.categories}>
      {categories?.map(({ id, name }) => (
        <div
          key={id}
          className={clsx(classes.category, selectedCategoryId === id && "selected")}
          onClick={onSelectCategory(id)}
        >
          {name}
        </div>
      ))}
    </div>
  );
};

export default CategoriesList;