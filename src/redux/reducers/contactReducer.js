import { ActionTypes } from "../constants/action-types";

const initialState = {
  contacts: [
    {
      name: "paaru",
      message: "hello",
      subject: "auditing",
    },
  ],
};
export const contactReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_CONTACTS:
      return { ...state, contacts: payload };
    default:
      return state;
  }
};
