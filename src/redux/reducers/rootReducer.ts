import { combineReducers } from "redux";

import statusReducer from "./statusReducer";
import postsReducer from "./postsReducer";
import flagsReducer from "./flagsReducer";
import RecentlyReducer from './RecentlyPostsReducer'
import InterestedReducer from "./intersetedReducer";

import {userDataReducer} from'./userData'
import registerReducer from './registerReducer'
import SubCatergoryReducer from "./subCatergory";



const rootReducer = combineReducers({
	status: statusReducer,
	 posts: postsReducer,
	 flags:flagsReducer,
	 recently:RecentlyReducer,
	 interseted:InterestedReducer,
	 userData:userDataReducer,
	 user:registerReducer,
	 Subcategory:SubCatergoryReducer

});

export default rootReducer;