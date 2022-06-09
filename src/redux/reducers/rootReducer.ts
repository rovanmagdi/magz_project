import { combineReducers } from "redux";

import statusReducer from "./statusReducer";
import postsReducer from "./postsReducer";
import ReducerUser from "./registerReducer";

const rootReducer = combineReducers({
	status: statusReducer,
	 posts: postsReducer,
	 user: ReducerUser
});

export default rootReducer;