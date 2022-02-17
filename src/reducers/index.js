import { combineReducers } from "redux";
import NodesReducer from "./NodesReducer";

export default combineReducers({
	notes:NodesReducer
})