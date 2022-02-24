import { ActionTypes } from "../constants/action-types";
import backendStoreApi from "../../apis/backendStoreApi";

// call api using middleware
export const fetchAbouts = () => async (dispatch) => {
  const response = await backendStoreApi.get("/about");
  console.log(response);
  dispatch({ type: ActionTypes.SET_ABOUTS, payload: response.data });
};

export const setAbouts = (abouts) => {
  return {
    type: ActionTypes.SET_ABOUTS,
    payload: abouts,
  };
};
