import { combineReducers } from "redux";
import { loadingReducer } from "./loadingReducer";
import { quanlySvReducer } from "./quanlySvReducer";

export const rootReducerQuanlySv = combineReducers({
  quanlySvReducer,
  loadingReducer,
});
