import { combineReducers } from "redux";

import statusReducer from "./statusReducer";
import postsReducer from "./postsReducer";
import ReducerUser from "./registerReducer";
import flagsReducer from "./flagsReducer";
import LoginUser from "./loginReducer";
import RecentlyReducer from './RecentlyPostsReducer'


const rootReducer = combineReducers({
	status: statusReducer,
	 posts: postsReducer,
	 user: ReducerUser,
	 login:LoginUser,
	 flags:flagsReducer,
	 recently:RecentlyReducer

});

export default rootReducer;