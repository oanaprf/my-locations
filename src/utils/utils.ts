import { Category, Location } from "./types";

export const deleteItem = (array: Category[] | Location[], id: string) =>
  array.filter((item: Category | Location) => item?.id !== id);

export const findItem = (array: Category[] | Location[], id: string) =>
  array.find((item: Category | Location) => item?.id === id);
