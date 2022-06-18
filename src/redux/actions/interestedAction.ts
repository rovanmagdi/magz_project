

import axios from "axios";
import intersetedApi from "../../api/intersetedApi";
import { INTERESTED_CATERGORY } from "../actions/actionTypes";
import { startLoading, showSuccess, showError } from "./statusActions";

export const InterstedCatergory = ()=> {
 

    return (dispatch: any) => {
        intersetedApi.get(`/categories`)
            .then(({ data }) => {
                dispatch(showSuccess());
                dispatch(IntersetedCaterogryInterface(data));
                console.log(data);
                

            }).catch((error) => {

                dispatch(showError(error.response.data.message));
            })
    }
};





export const IntersetedCaterogryInterface = (posts: any) => ({
    type: INTERESTED_CATERGORY,
    payload: posts,
});








