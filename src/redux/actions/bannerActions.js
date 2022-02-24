import { ActionTypes } from "../constants/action-types";
import backendStoreApi from "../../apis/backendStoreApi";

// call api using middleware
export const fetchBanners = () => async (dispatch) => {
  const response = await backendStoreApi.get("/banner");
  console.log(response);
  dispatch({ type: ActionTypes.FETCH_BANNERS, payload: response.data });
};

export const setBanners = (banners) => {
  return {
    type: ActionTypes.SET_BANNERS,
    payload: banners,
  };
};
