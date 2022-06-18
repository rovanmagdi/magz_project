import { combineReducers } from "redux";

import statusReducer from "./statusReducer";
import postsReducer from "./postsReducer";
import ReducerUser from "./registerReducer";
import flagsReducer from "./flagsReducer";



const rootReducer = combineReducers({
	status: statusReducer,
	 posts: postsReducer,
	 user: ReducerUser,
	 flags:flagsReducer,

});

export default rootReducer;