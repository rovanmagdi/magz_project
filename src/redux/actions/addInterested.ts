import { ADD_INTERESTED } from "./actionTypes";
import addInterestedApi from "../../api/addInterestedApi";
import { startLoading, showSuccess, showError } from "./statusActions";

export function AddInterested(data: any) {
  return (dispatch: any) => {
    addInterestedApi
      .patch(`/${data._id}`, data)
      .then(({ data }) => {
        dispatch(showSuccess());

        dispatch(AddInterestedInterface(data.id));
      })
      .catch((error) => {
        dispatch(showError(error.response.data.message));
      });
  };
}

export const AddInterestedInterface = (posts: any) => ({
  type: ADD_INTERESTED,
  payload: posts,
});
