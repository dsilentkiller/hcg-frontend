// import axios from "axios";
import { ActionTypes } from "../constants/action-types";
import backendStoreApi from "../../apis/backendStoreApi";

// call api using middleware
export const fetchServices = () => async (dispatch) => {
  const response = await backendStoreApi.get("/service");
  console.log(response);
  dispatch({ type: ActionTypes.FETCH_SERVICES, payload: response.data });
};

export const fetchService = (id) => async (dispatch) => {
  const response = await backendStoreApi.get(`/service/${id}`);
  console.log(response);
  dispatch({ type: ActionTypes.SELECTED_SERVICE, payload: response.data });
};

// service
export const setServices = (services) => {
  return {
    type: ActionTypes.SET_SERVICES,
    payload: services,
  };
};

export const selectedService = (service) => {
  return {
    type: ActionTypes.SELECTED_SERVICE,
    payload: service,
  };
};
// service detail
// export const setServiceDetail = (services) => {
//   return {
//     type: ActionTypes.SET_SERVICES,
//     payload: services,
//   };
// };
