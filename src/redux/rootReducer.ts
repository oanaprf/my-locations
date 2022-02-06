import { combineReducers } from "redux";
import { VIEWS, Category, Location } from "../utils/types";
import { deleteItem } from "../utils/utils";
import {
  ADD_CATEGORY,
  ADD_LOCATION,
  DELETE_CATEGORY,
  DELETE_LOCATION,
  SET_VIEW,
} from "./actionTypes";

interface Action<T> {
  type: string;
  payload: T;
}

const viewReducer = (state = VIEWS.CATEGORIES, action: Action<string>) =>
  action?.type === SET_VIEW ? action?.payload : state;

const categoriesReducer = (state = [], action: Action<Category>) => {
  switch (action?.type) {
    case ADD_CATEGORY:
      return [...state, action?.payload];
    case DELETE_CATEGORY:
      return deleteItem(state, action?.payload?.id);
    default:
      return state;
  }
};

const locationsReducer = (state = [], action: Action<Location>) => {
  switch (action?.type) {
    case ADD_LOCATION:
      return [...state, action?.payload];
    case DELETE_LOCATION:
      return deleteItem(state, action?.payload?.id);
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  view: viewReducer,
  categories: categoriesReducer,
  locations: locationsReducer,
});

export default rootReducer;
