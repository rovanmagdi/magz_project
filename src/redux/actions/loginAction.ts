import { LOGIN_USER } from './actionTypes';
import loginApi from "../../api/loginApi";
import { startLoading, showSuccess, showError } from "./statusActions";

export  function  loginUser ( email: any, password: any){
    return (dispatch: any)=>{
        loginApi.post(`/login`, { email, password })
        .then(({data})=>{
            dispatch(showSuccess()); 
            // console.log("done from action loginUser");
            dispatch(LoginInterface(data))
            localStorage.setItem('RegisterInfo', JSON.stringify(data));

        }).catch((error)=>{
            // console.log("errror from action loginUser");

            dispatch(showError(error.response.data.message));
        })
    }
}

export const LoginInterface = (posts: any) => ({
    type: LOGIN_USER,
    payload: posts,
});
