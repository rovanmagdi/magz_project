import { combineReducers } from "redux";

import statusReducer from "./statusReducer";
import postsReducer from "./postsReducer";
import flagsReducer from "./flagsReducer";
import RecentlyReducer from './RecentlyPostsReducer'
import InterestedReducer from "./intersetedReducer";
import ReducerAddIntersested from "./AddIntersetedReducer";
import {userDataReducer} from'./userData'
import registerReducer from './registerReducer'



const rootReducer = combineReducers({
	status: statusReducer,
	 posts: postsReducer,
	 flags:flagsReducer,
	 recently:RecentlyReducer,
	 interseted:InterestedReducer,
	 addinterested:ReducerAddIntersested,
	 userData:userDataReducer,
	 user:registerReducer

});

export default rootReducer;