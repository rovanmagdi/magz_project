import axios from "axios";
import { REGISTER_USER } from "../actions/actionTypes";
import { startLoading, showSuccess, showError } from "./statusActions";
import registerApi from '../../api/registerApi'

export const registerUser = (firstName: any, lastName: any, email: any, password: any) => async (dispatch: any) => {
    dispatch({ type: REGISTER_USER, payload: { firstName, lastName, email, password } });
    try {
        const { data } = await registerApi
		.post(`/user`, { firstName, lastName, email, password });
			dispatch(showSuccess());
        localStorage.setItem('RegisterInfo', JSON.stringify(data));
    } catch (error: any) {
        dispatch(showError(error.response.data.message));
        // console.log();
        

    }
};




