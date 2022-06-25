import { VIEW_POSTS } from "../actions/actionTypes";
import { startLoading, showSuccess, showError } from "./statusActions";
import viewsApi from "../../api/viewsApi";

export function ViewPosts() {
  return (dispatch: any) => {
    viewsApi
      .get("/most_viewed")
      .then(({ data }) => {
        dispatch(showSuccess());
        dispatch(Interface(data));
      })
      .catch((error) => {
        dispatch(showError(error.response.data.message));
      });
  };
}

export const Interface = (posts: any) => ({
  type: VIEW_POSTS,
  payload: posts,
});
