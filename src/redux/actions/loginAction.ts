import loginApi from "../../api/loginApi";
import { startLoading, showSuccess, showError } from "./statusActions";

export  function  loginUser ( email: any, password: any){
    return (dispatch: any)=>{
        loginApi.post(`/login`, { email, password })
        .then(({data})=>{
            dispatch(showSuccess()); 
            console.log("done from action loginUser");
            localStorage.setItem('RegisterInfo', JSON.stringify(data));

        }).catch((error)=>{
            console.log("errror from action loginUser");

            dispatch(showError(error.response.data.message));
        })
    }
}
