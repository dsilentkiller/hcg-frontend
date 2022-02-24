// import axios from "axios";
import { ActionTypes } from "../constants/action-types";
import backendStoreApi from "../../apis/backendStoreApi";

// callapi using middleware
export const fetchHomes = () => async (dispatch) => {
  const response = await backendStoreApi.get("/");
  dispatch({ type: ActionTypes.FETCH_HOMES, payload: response.data });
};

export const setHomes = (homes) => {
  return {
    type: ActionTypes.SET_HOMES,
    payload: homes,
  };
};
