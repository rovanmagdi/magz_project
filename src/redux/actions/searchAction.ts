import { SEARCH } from "../actions/actionTypes";
import { startLoading, showSuccess, showError } from "./statusActions";
import subCatergoryApi from "../../api/subCatergoryApi";
import searchApi from "../../api/searchApi";

export function Search(page:any) {
  
  
  return (dispatch: any) => {
    searchApi
      .get(`/${page}`)
      .then(({ data }) => {
        console.log(data);
        
        dispatch(showSuccess());
        dispatch(Interface(data));
   

      })
      .catch((error) => {
        dispatch(showError(error.response.data.message));
      });
  };
}

export const Interface = (posts: any) => ({
  type: SEARCH,
  payload: posts,
});
