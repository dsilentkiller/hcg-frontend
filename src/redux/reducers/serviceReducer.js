import { ActionTypes } from "../constants/action-types";

const initialState = {
  services: [],
};
export const serviceReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_SERVICES:
      return { ...state, services: payload };

    case ActionTypes.FETCH_SERVICES:
      return { ...state, services: payload };

    default:
      return state;
  }
};

export const selectedServiceReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_SERVICE:
      return { ...state, ...payload };
    default:
      return state;
  }
};
