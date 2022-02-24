import { ActionTypes } from "../constants/action-types";
// import backendStoreApi from "../../apis/backendStoreApi";

const initialState = {
  banners: [
    {
      title: "banner",
      slug: "slug here",
    },
  ],
};
export const bannerReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_BANNERS:
      return { ...state, banner: payload };
    default:
      return state;
  }
};
