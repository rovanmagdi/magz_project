import axios from "axios";
import {  RECOMMENDED_POSTS} from "../actions/actionTypes";
import { startLoading, showSuccess, showError } from "./statusActions";
import postsApi from '../../api/postsApi'
import recommendedApi from "../../api/recommendedApi";

export const getRecommendedPosts = () => (dispatch:any) => {
	dispatch(startLoading());
	recommendedApi
		.get(`/`)
		.then((response) => {
			dispatch(getAllPostsSuccess(response.data));
			// console.log("data", response.data)
			dispatch(showSuccess());
		})
		.catch((err) => {
			dispatch(showError(err.response.status));
		});
};

export const getAllPostsSuccess = (posts:any) => ({
	type: RECOMMENDED_POSTS,
	payload: posts,
});

