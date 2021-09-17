import { combineReducers } from "redux";
import UserReducer from "./userReducer";

const reducers = combineReducers({
	users: UserReducer,
});

export default reducers;
