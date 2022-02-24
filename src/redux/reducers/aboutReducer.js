import { ActionTypes } from "../constants/action-types";

const initialState = {
  abouts: [],
};

export const aboutReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_ABOUTS:
      return { ...state, abouts: payload };
    default:
      return state;
  }
};
