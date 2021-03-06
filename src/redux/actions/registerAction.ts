
import { REGISTER_USER } from "../actions/actionTypes";
import { startLoading, showSuccess, showError } from "./statusActions";
import registerApi from '../../api/registerApi'



export function registerUser(firstName: any, lastName: any, email: any, password: any, image?: any) {
    return (dispatch: any) => {
        registerApi.post(`/user`, { firstName, lastName, email, password })
            .then(({ data }) => {
                dispatch(showSuccess());
                dispatch(RegisterInterface(data))
                // console.log("done from action registerUser");
                // console.log(data);
                localStorage.setItem('RegisterInfo', JSON.stringify(data));
            }).catch((error) => {
                // console.log("errror from action registerUser");
                dispatch(showError(error.response.data.message));
            })
    }
}


export const RegisterInterface = (posts: any) => ({
    type: REGISTER_USER,
    payload: posts,
});


