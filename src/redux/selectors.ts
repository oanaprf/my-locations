import { RootStateOrAny } from "react-redux";
import { findItem } from "../utils/utils";

export const getView = (state: RootStateOrAny) => state?.view;

export const getCategories = (state: RootStateOrAny) => state?.categories;
export const getCategoryById = (id: string) => (state: RootStateOrAny) =>
  findItem(state?.categories, id);

export const getLocations = (state: RootStateOrAny) => state?.locations;
export const getLocationById = (id: string) => (state: RootStateOrAny) =>
  findItem(state?.locations, id);
