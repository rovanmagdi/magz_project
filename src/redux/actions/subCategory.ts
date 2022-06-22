import { SUBCATEGORIES } from "../actions/actionTypes";
import { startLoading, showSuccess, showError } from "./statusActions";
import subCatergoryApi from "../../api/subCatergoryApi";

export function subCatergory() {
  
  
  return (dispatch: any) => {
    subCatergoryApi
      .get(`/getAll`)
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
  type: SUBCATEGORIES,
  payload: posts,
});
