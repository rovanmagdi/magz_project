import { AUTHOR_PROFILE } from "../actions/actionTypes";

const initialState = {};
interface Action {
    type: String;
    payload: any
}

const authorReducer = (state=initialState, action:Action) => {
	switch (action.type) {
		case AUTHOR_PROFILE:
			return action.payload;
		
		default:
			return state;
	}
};

export default authorReducer;