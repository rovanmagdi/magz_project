import { combineReducers } from "redux";

import statusReducer from "./statusReducer";
import postsReducer from "./postsReducer";

const rootReducer = combineReducers({
	status: statusReducer,
	 posts: postsReducer,
});

export default rootReducer;