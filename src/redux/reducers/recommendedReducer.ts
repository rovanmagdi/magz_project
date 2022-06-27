import { RECOMMENDED_POSTS } from "../actions/actionTypes";

const initialState = null;
interface Action {
    type: String;
    payload: any
}

const RecommdedReducer = (state=initialState, action:Action) => {
	switch (action.type) {
		case RECOMMENDED_POSTS:
			return action.payload;
		
		default:
			return state;
	}
};

export default RecommdedReducer;