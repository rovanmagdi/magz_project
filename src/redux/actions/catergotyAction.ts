import catergoryApi from "../../api/catergoryApi";
import { CATERGORY } from "../actions/actionTypes";
import { startLoading, showSuccess, showError } from "./statusActions";

export const Catergory = (page: any)=> {
 

    return (dispatch: any) => {
        catergoryApi.get(`/${page}`)
            .then(({ data }) => {
                dispatch(showSuccess());
                dispatch(IntersetedCaterogryInterface(data));
                // console.log(data);
                

            }).catch((error) => {

                dispatch(showError(error.response.data.message));
            })
    }
};





export const IntersetedCaterogryInterface = (posts: any) => ({
    type: CATERGORY,
    payload: posts,
});








