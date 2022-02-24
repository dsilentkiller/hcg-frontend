import backendStoreApi from "../../apis/backendStoreApi";
import { ActionTypes } from "../constants/action-types";

// call api using middleware
export const fetchTestimonials = () => async (dispatch) => {
  const response = await backendStoreApi.get("/testimonial");
  console.log(response);
  dispatch({ type: ActionTypes.FETCH_TESTIMONIALS, payload: response.data });
};

export const setTestimonials = (testimonials) => {
  return {
    type: ActionTypes.SET_TESTIMONIALS,
    payload: testimonials,
  };
};
