import { CATERGORY } from "../actions/actionTypes";

const initialState = <string[]>[];
interface Action {
    type: String;
    payload: any
}

const CatergoryReducer = (state=initialState, action:Action) => {
	switch (action.type) {
		case CATERGORY:
			return action.payload;
		
		default:
			return state;
	}
};

export default CatergoryReducer;