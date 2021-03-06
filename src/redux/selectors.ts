import { RootStateOrAny } from "react-redux";
import { findItem } from "../utils/utils";
import { Location } from "../utils/types";

export const getView = (state: RootStateOrAny) => state?.view;

export const getCategories = (state: RootStateOrAny) => state?.category?.categories;
export const getCategoryById = (id: string) => (state: RootStateOrAny) =>
  findItem(state?.category?.categories, id);
export const getSelectedCategoryId = (state: RootStateOrAny) =>
  state?.category?.selectedCategoryId;

export const getLocations = (state: RootStateOrAny) => state?.location?.locations;
export const getLocationById =
  (id: string) =>
  (state: RootStateOrAny): Location | undefined =>
    findItem(state?.location?.locations, id) as Location;
export const getSelectedLocationId = (state: RootStateOrAny) =>
  state?.location?.selectedLocationId;
