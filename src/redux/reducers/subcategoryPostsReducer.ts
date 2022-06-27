import { GET_SUBCATEGORY_POSTS } from "../actions/actionTypes";

const initialState = <string[]>[];
interface Action {
    type: String;
    payload: any
}

const subcategoryPostsReducer = (state=initialState, action:Action) => {
	switch (action.type) {
		case GET_SUBCATEGORY_POSTS:
			return action.payload;
		
		default:
			return state;
	}
};

export default subcategoryPostsReducer;