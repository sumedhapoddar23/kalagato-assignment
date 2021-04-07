import { combineReducers } from "redux";
import { homepageReducer } from "../pages/homepage/store/reducers";

const rootReducer = combineReducers({ homepageReducer });

export default rootReducer;
