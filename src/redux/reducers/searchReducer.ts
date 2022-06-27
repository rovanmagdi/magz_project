import { SEARCH } from "../actions/actionTypes";

const initialState = <string[]>[];
interface Action {
    type: String;
    payload: any
}

const SearchReducer = (state=initialState, action:Action) => {
	switch (action.type) {
		case SEARCH:
			return action.payload;
		
		default:
			return state;
	}
};

export default SearchReducer;