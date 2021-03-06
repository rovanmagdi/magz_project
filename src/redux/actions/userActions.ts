import { UPDATE_USER_INFO } from "./actionTypes";
import { startLoading, showSuccess, showError } from "./statusActions";
import userApi from "../../api/userApi";

interface Info {
  firstName?: string;
  lastName?: string;
  email?: string;
  intersted?:string[];
  image?:string;
}

export const updateUser = (state: Info) => (dispatch: any) => {
  const userToken = JSON.parse(localStorage.RegisterInfo).token;
  // console.log(userToken)
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${userToken}`,
    },
  };

  userApi
    .patch(``, state, config)
    .then((res) => {
    
      localStorage.setItem(
        "RegisterInfo",
        JSON.stringify({
          ...res.data,
          token: userToken,
        })
      );
      dispatch(updateUserSuccess(res.data));
			dispatch(showSuccess());
    })
    .catch((err) => {
      dispatch(showError(err.response.status));
    });
};

export const updateUserSuccess = (user:any) => ({
	type: UPDATE_USER_INFO,
	payload: user,
});