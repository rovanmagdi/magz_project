import { VIEW_POSTS } from "../actions/actionTypes";

const initialState = null;
interface Action {
    type: String;
    payload: any
}

const reducer = (state=initialState, action:Action) => {
	switch (action.type) {
		case VIEW_POSTS:
			return action.payload;
		
		default:
			return state;
	}
};

export default reducer;