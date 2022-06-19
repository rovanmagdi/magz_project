import {
  LOGIN_USER_SUCCUSE,
  LOGOUT_USER,
  RESGISTER_USER_SUCCUSE,
} from "./actionTypes";
// import loginApi from "../../api/loginAdminApi";
import axios from "axios";

import { startLoading, showSuccess, showError } from "./statusActions";
// import { IloginAdminProps } from "../../types/loginAdminProps";
// import { IdataFromLogin } from "../../types/dataFromLogin";
// import { useNavigate } from "react-router-dom";

export const loginUser = (data: any) => (dispatch: any) => {
  dispatch(startLoading());
  axios
    .post(`${process.env.REACT_APP_BACKED}/login`, data)
    .then((response) => {
      dispatch(loginUserSuccess(response.data));
      dispatch(showSuccess());

      localStorage.setItem("RegisterInfo", JSON.stringify(response.data));
    })
    .catch((err) => {
      dispatch(showError(err.response.data.message));
    });
};

export const loginUserSuccess = (users: any) => ({
  type: LOGIN_USER_SUCCUSE,
  payload: users,
});

export const userLogout = () => (dispatch: any) => {
  localStorage.removeItem("userInf");
  dispatch({ type: LOGOUT_USER });
};

//Register

export const RegisterUser = (data: any) => (dispatch: any) => {
  dispatch(startLoading());
  axios
    .post(`${process.env.REACT_APP_BACKED}/user`, data)
    .then((response) => {
      dispatch(registerUserSuccess(response.data));
      dispatch(showSuccess());
      localStorage.setItem("RegisterInfo", JSON.stringify(response.data));
    })
    .catch((err) => {
        console.log(err.response.data.message);
        
      dispatch(showError(err.response.data.message));
    });
};

export const registerUserSuccess = (users: any) => ({
  type: RESGISTER_USER_SUCCUSE,
  payload: users,
});
