

import axios from "axios";
import recentlyApi from "../../api/recentlyApi";
import { RECENTLY_POSTS } from "../actions/actionTypes";
import { startLoading, showSuccess, showError } from "./statusActions";

export const RecentlyPosts = ()=> {
 

    return (dispatch: any) => {
        recentlyApi.get(`/most_recently`)
            .then(({ data }) => {
                dispatch(showSuccess());
                dispatch(RecentlyPostsInterface(data));
                console.log(data);
                

            }).catch((error) => {

                dispatch(showError(error.response.data.message));
            })
    }
};





export const RecentlyPostsInterface = (posts: any) => ({
    type: RECENTLY_POSTS,
    payload: posts,
});








