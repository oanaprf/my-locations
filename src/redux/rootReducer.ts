import { combineReducers } from "redux";
import { VIEWS, Category, Location } from "../utils/types";
import { deleteItem } from "../utils/utils";
import {
  ADD_CATEGORY,
  ADD_LOCATION,
  DELETE_CATEGORY,
  DELETE_LOCATION,
  SELECT_CATEGORY,
  SELECT_LOCATION,
  SET_VIEW,
} from "./actionTypes";

interface Action<T> {
  type: string;
  payload: T;
}

const viewReducer = (state = VIEWS.CATEGORIES, action: Action<string>) =>
  action?.type === SET_VIEW ? action?.payload : state;

const categoriesInitialState = {
  categories: [],
  selectedCategoryId: "",
};
const categoriesReducer = (
  state = categoriesInitialState,
  action: Action<Category | string>
) => {
  switch (action?.type) {
    case ADD_CATEGORY:
      return {
        ...state,
        categories: [...state?.categories, action?.payload],
      };
    case SELECT_CATEGORY:
      return { ...state, selectedCategoryId: action?.payload };
    case DELETE_CATEGORY:
      return {
        ...state,
        selectedCategoryId: "",
        categories: state?.categories?.filter(
          (category: Category) => category?.id !== action?.payload
        ),
        // categories: deleteItem(state?.categories, action?.payload as string),
      };
    default:
      return state;
  }
};

const locationsInitialState = {
  locations: [],
  selectedLocation: "",
};
const locationsReducer = (
  state = locationsInitialState,
  action: Action<Location | string>
) => {
  switch (action?.type) {
    case ADD_LOCATION:
      return { ...state, locations: [...state?.locations, action?.payload] };
    case SELECT_LOCATION:
      return { ...state, selectedLocationId: action?.payload };
    case DELETE_LOCATION:
      return {
        ...state,
        locations: deleteItem(state?.locations, action?.payload as string),
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  view: viewReducer,
  category: categoriesReducer,
  location: locationsReducer,
});

export default rootReducer;
