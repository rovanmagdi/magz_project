import { combineReducers } from "redux";

import statusReducer from "./statusReducer";
import postsReducer from "./postsReducer";
import ReducerUser from "./registerReducer";
import flagsReducer from "./flagsReducer";
import LoginUser from "./loginReducer";
import RecentlyReducer from './RecentlyPostsReducer'
import InterestedReducer from "./intersetedReducer";
import ReducerAddIntersested from "./AddIntersetedReducer";
import {userDataReducer} from'./userData'



const rootReducer = combineReducers({
	status: statusReducer,
	 posts: postsReducer,
	 user: ReducerUser,
	 login:LoginUser,
	 flags:flagsReducer,
	 recently:RecentlyReducer,
	 interseted:InterestedReducer,
	 addinterested:ReducerAddIntersested,
	 userData:userDataReducer

});

export default rootReducer;