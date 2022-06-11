import {  GET_PROFILEEDITINGFLAG,SET_TRUE_PROFILEEDITINGFLAG,SET_FALSE_PROFILEEDITINGFLAG} from "../actions/actionTypes";

const initialState = {profileEditFlag:false};
interface Action {
    type: String;
    payload: any
}

const reducer = (state=initialState, action:Action) => {
	switch (action.type) {
		case GET_PROFILEEDITINGFLAG:
			return {...state};
        
        case SET_TRUE_PROFILEEDITINGFLAG:
            return {...state,profileEditFlag:true};
        
        case SET_FALSE_PROFILEEDITINGFLAG:
                return {...state,profileEditFlag:false};
		
		default:
			return state;
	}
};

export default reducer;