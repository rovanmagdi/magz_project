import { DARK_MODE } from "../actions/actionTypes";

export default function (state = {}, action:any) {
  switch (action.type) {
    case DARK_MODE:
      return { ...state, darkMode: action.payload };
    default:
      return state;
  }
}
