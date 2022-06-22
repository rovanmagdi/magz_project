import axios from "axios";
import {  AUTHOR_PROFILE} from "../actions/actionTypes";
import { startLoading, showSuccess, showError } from "./statusActions";
import authorApi from "../../api/authorApi";

export const getAuthorInfo = () => (dispatch:any) => {
	dispatch(startLoading());
	authorApi
		.get(`/auther/autherId`)
		.then((response) => {
			dispatch(getAuthorInfoSuccess(response.data));
			console.log("data", response.data)
			dispatch(showSuccess());
		})
		.catch((err) => {
			dispatch(showError(err.response.status));
		});
};

export const getAuthorInfoSuccess = (authorInfo:any) => ({
	type: AUTHOR_PROFILE,
	payload: authorInfo,
});

