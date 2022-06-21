import { REGISTER_USER } from "../actions/actionTypes";
import {UPDATE_USER_INFO} from '../actions/actionTypes'

const initialState = {};
interface Action {
    type: String;
    payload: any
}

const ReducerUser = (state=initialState, action:Action) => {
	switch (action.type) {
		case REGISTER_USER:
			return action.payload;
		
		case UPDATE_USER_INFO:
				
				return action.payload;
		default:
			return state;
	}
};

export default ReducerUser;