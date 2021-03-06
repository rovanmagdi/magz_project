import { LOGIN_USER } from './../actions/actionTypes';


const initialState = {};
interface Action {
    type: String;
    payload: any
}

const LoginUser = (state=initialState, action:Action) => {
	switch (action.type) {
		case LOGIN_USER:
			return action.payload;
		
		default:
			return state;
	}
};

export default LoginUser;