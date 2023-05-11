import { combineReducers } from "redux";
import movieReducer from "./movieReducer";
import loadingReducer from "./loadingReducer";
const rootReducer = combineReducers({
  movieReducer,
  loadingReducer,
});

export default rootReducer;
