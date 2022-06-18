import axios from "axios";
import {  GET_ALL_POSTS} from "../actions/actionTypes";
import { startLoading, showSuccess, showError } from "./statusActions";
import postsApi from '../../api/postsApi'

export const getAllPosts = () => (dispatch:any) => {
	dispatch(startLoading());
	postsApi
		.get(`/get_all`)
		.then((response) => {
			dispatch(getAllPostsSuccess(response.data));
			
			dispatch(showSuccess());
		})
		.catch((err) => {
			dispatch(showError(err.response.status));
		});
};

export const getAllPostsSuccess = (posts:any) => ({
	type: GET_ALL_POSTS,
	payload: posts,
});


