import { LOGOUT_USER } from './actionTypes';
export const LogoutUser=()=>(dispatch:any)=>{
    localStorage.removeItem('userInfo');
    localStorage.removeItem('cartItem');
    localStorage.removeItem('RegisterInfo');

    dispatch({type:LOGOUT_USER});

  }
    