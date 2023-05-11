import rootReducer from "./reducers/reducers";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const composedEnhancers = composeWithDevTools();

const store = createStore(rootReducer, composedEnhancers);

export default store;
