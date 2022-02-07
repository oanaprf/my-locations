import { Category, Location } from "../utils/types";
import {
  ADD_CATEGORY,
  SELECT_CATEGORY,
  ADD_LOCATION,
  DELETE_CATEGORY,
  EDIT_CATEGORY,
  SELECT_LOCATION,
  DELETE_LOCATION,
  EDIT_LOCATION,
  SET_VIEW,
} from "./actionTypes";

const createAction = (type: string) => (payload: string | Category | Location) => ({
  type,
  payload,
});

export const setView = createAction(SET_VIEW);

export const addCategory = createAction(ADD_CATEGORY);
export const selectCategory = createAction(SELECT_CATEGORY);
export const deleteCategory = createAction(DELETE_CATEGORY);
export const editCategory = createAction(EDIT_CATEGORY);

export const addLocation = createAction(ADD_LOCATION);
export const selectLocation = createAction(SELECT_LOCATION);
export const deleteLocation = createAction(DELETE_LOCATION);
export const editLocation = createAction(EDIT_LOCATION);
