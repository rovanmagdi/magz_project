
import { SUBCATEGORIES } from "../actions/actionTypes";


const initialState:string[] =[] ;
interface Action {
    type: String;
    payload: any
}

const SubCatergoryReducer = (state=initialState, action:Action) => {
	switch (action.type) {
		case SUBCATEGORIES:
			return action.payload;
		
	
		default:
			return state;
	}
};

export default SubCatergoryReducer;