import { Category, Location } from "./types";

export const deleteItem = (array: Category[] | Location[], id: string) =>
  array.filter((item: Category | Location) => item?.id !== id);

export const findItem = (
  array: Location[] | Category[],
  id: string
): Category | Location | undefined =>
  array.find((item: Category | Location) => item?.id === id);

export const editItem = (array: Category[] | Location[], item: Category | Location) => [
  ...deleteItem(array, item?.id),
  item,
];
