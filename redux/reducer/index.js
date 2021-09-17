import { combineReducers } from "redux";
import PostReducer from "./postReducer";
import UserReducer from "./userReducer";

const reducers = combineReducers({
	users: UserReducer,
	posts: PostReducer,
});

export default reducers;
