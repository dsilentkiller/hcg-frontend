import { ActionTypes } from "../constants/action-types";
import backendStoreApi from "../../apis/backendStoreApi";

// call api using middleware
export const fetchTeams = () => async (dispatch) => {
  const response = await backendStoreApi.get("/member");
  console.log(response);
  dispatch({ type: ActionTypes.SET_TEAMS, payload: response.data });
};

export const setTeams = (teams) => {
  return {
    type: ActionTypes.SET_TEAMS,
    payload: teams,
  };
};

export const selectedTeam = (team) => {
  return {
    type: ActionTypes.SELECTED_TEAM,
    payload: team,
  };
};
