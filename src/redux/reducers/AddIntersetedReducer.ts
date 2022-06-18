import { ADD_INTERESTED } from "../actions/actionTypes";

const initialState = {};
interface Action {
    type: String;
    payload: any
}

const ReducerAddIntersested = (state=initialState, action:Action) => {
	switch (action.type) {
		case ADD_INTERESTED:
			return action.payload;
		
		default:
			return state;
	}
};

export default ReducerAddIntersested;