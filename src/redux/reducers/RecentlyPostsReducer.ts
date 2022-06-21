import { RECENTLY_POSTS } from "../actions/actionTypes";

const initialState = <string[]>[];
interface Action {
    type: String;
    payload: any
}

const RecentlyReducer = (state=initialState, action:Action) => {
	switch (action.type) {
		case RECENTLY_POSTS:
			return action.payload;
		
		default:
			return state;
	}
};

export default RecentlyReducer;