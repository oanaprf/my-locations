import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { loadState } from "./persistState";

import rootReducer from "./rootReducer";

const persistedState = loadState();
const store = createStore(rootReducer, persistedState, composeWithDevTools());

export default store;
