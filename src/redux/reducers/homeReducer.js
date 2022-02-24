
// homeReducer.js
import { ActionTypes } from "../constants/action-types";

const initialState = {
  homes: [],
};

export const homeReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_HOMES:
      return { ...state, homes: payload };
    default:
      return state;
  }
};
