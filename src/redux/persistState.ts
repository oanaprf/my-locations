import { RootStateOrAny } from "react-redux";

const REDUX_STORE_KEY = "reduxStore";

export const saveState = (state: RootStateOrAny) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(REDUX_STORE_KEY, serializedState);
  } catch (e) {
    console.error(e);
  }
};

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem(REDUX_STORE_KEY);
    if (!serializedState) return undefined;
    return JSON.parse(serializedState);
  } catch (e) {
    console.error(e);
  }
};
