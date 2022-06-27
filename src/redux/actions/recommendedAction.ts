import axios from "axios";
import {  RECOMMENDED_POSTS} from "../actions/actionTypes";
import { startLoading, showSuccess, showError } from "./statusActions";
import postsApi from '../../api/postsApi'
import recommendedApi from "../../api/recommendedApi";
import { json } from "node:stream/consumers";

export const getRecommendedPosts = () => (dispatch:any) => {
	dispatch(startLoading());
	const userToken =JSON.parse(`${localStorage.getItem("RegisterInfo")}`) 
	console.log(userToken)
	if( userToken){
		console.log("if ncdjfnvfjnvbjgbnjgnbjg "+userToken.token)
		const config = {
			headers: {
			  "Content-Type": "application/json",
			  Authorization: `Bearer ${userToken.token}`,
			},
		  };
		recommendedApi
			.get(`/intrests`,config)
			.then((response) => {
				dispatch(getAllPostsSuccess(response.data));
				console.log("data", response.data)
				dispatch(showSuccess());
			})
			.catch((err) => {
				dispatch(showError(err.response.status));
			});

	}
	else{
		recommendedApi
			.get(`/intrests`)
			.then((response) => {
				dispatch(getAllPostsSuccess(response.data));
				console.log("data", response.data)
				dispatch(showSuccess());
			})
			.catch((err) => {
				dispatch(showError(err.response.status));
			});	
	}
};

export const getAllPostsSuccess = (posts:any) => ({
	type: RECOMMENDED_POSTS,
	payload: posts,
});

