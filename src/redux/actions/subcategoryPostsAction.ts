import postsApi from "../../api/postsApi";
import { GET_SUBCATEGORY_POSTS } from "../actions/actionTypes";
import { showSuccess, showError } from "./statusActions";

export const getSubcategoryPosts = (sub: any)=> {
 

    return (dispatch: any) => {
        postsApi.get(`/get_posts_by_sub_category/${sub}`)
            .then(({ data }) => {
                dispatch(showSuccess());
                dispatch(getSubcategoryPostsSuccess(data));
                // console.log(data);
                

            }).catch((error) => {

                dispatch(showError(error.response.data.message));
            })
    }
};





export const getSubcategoryPostsSuccess = (posts: any) => ({
    type: GET_SUBCATEGORY_POSTS,
    payload: posts,
});








