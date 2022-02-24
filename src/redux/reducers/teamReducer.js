import { ActionTypes } from "../constants/action-types";

const initialState = {
  teams: [],
};

export const teamReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_TEAMS:
      return { ...state, teams: payload };

    case ActionTypes.FETCH_TEAMS:
      return { ...state, teams: payload };
    default:
      return state;
  }
};

export const selectedTeamReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_TEAM:
      return { ...state, ...payload };
    default:
      return state;
  }
};
