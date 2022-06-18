import { INTERESTED_CATERGORY } from "../actions/actionTypes";

const initialState = <string[]>[];
interface Action {
    type: String;
    payload: any
}

const InterestedReducer = (state=initialState, action:Action) => {
	switch (action.type) {
		case INTERESTED_CATERGORY:
			return action.payload;
		
		default:
			return state;
	}
};

export default InterestedReducer;