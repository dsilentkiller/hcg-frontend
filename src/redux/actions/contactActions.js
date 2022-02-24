import backendStoreApi from "../../apis/backendStoreApi";
import { ActionTypes } from "../constants/action-types";

// call api using middleware
export const fetchContacts = () => async (dispatch) => {
  const response = await backendStoreApi.get("/contact");
  console.log(response);
  dispatch({ type: ActionTypes.SET_CONTACTS, payload: response.data });
};

export const setContacts = (contacts) => {
  return {
    type: ActionTypes.SET_CONTACTS,
    payload: contacts,
  };
};
