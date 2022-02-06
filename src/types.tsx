export enum VIEWS {
  LOCATIONS,
  CATEGORIES,
}

export interface Category {
  id: string;
  name: string;
}

export interface Coordinate {
  latitude: string;
  longitude: string;
}

export interface Location {
  id: string;
  name: string;
  address: string;
  coordinates: Coordinate;
  category: Category;
}
