import { ActionTypes } from "../constants/action-types";

const initialState = {
  testimonials: [],
};

export const testimonialReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_TESTIMONIALS:
      return { ...state, testimonials: payload };
    default:
      return state;
  }
};
