import { combineReducers } from "redux";
import { VIEWS, Category, Location } from "../utils/types";
import { deleteItem, editItem } from "../utils/utils";
import {
  ADD_CATEGORY,
  ADD_LOCATION,
  DELETE_CATEGORY,
  DELETE_LOCATION,
  EDIT_CATEGORY,
  EDIT_LOCATION,
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
        categories: deleteItem(state?.categories, action?.payload as string),
      };
    case EDIT_CATEGORY:
      return {
        ...state,
        selectedCategoryId: "",
        categories: editItem(state?.categories, action?.payload as Category | Location),
      };
    default:
      return state;
  }
};

const locationsInitialState = {
  locations: [],
  selectedLocationId: "",
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
        selectedLocationId: "",
        locations: deleteItem(state?.locations, action?.payload as string),
      };
    case EDIT_LOCATION:
      return {
        ...state,
        selectedLocationId: "",
        locations: editItem(state?.locations, action?.payload as Category | Location),
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
