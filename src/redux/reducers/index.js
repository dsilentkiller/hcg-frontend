import { combineReducers } from "redux";
import { aboutReducer } from "./aboutReducer";
import { contactReducer } from "./contactReducer";
import { serviceReducer, selectedServiceReducer } from "./serviceReducer";
import { teamReducer } from "./teamReducer";
import { testimonialReducer } from "./testimonialReducer";
import { bannerReducer } from "./bannerReducer";
import { homeReducer } from "./homeReducer";

const reducers = combineReducers({
  allAbouts: aboutReducer,
  allContacts: contactReducer,
  allServices: serviceReducer,
  service: selectedServiceReducer,
  allTestimonials: testimonialReducer,
  allTeams: teamReducer,
  allBanners: bannerReducer,
  allHomes: homeReducer,
});

export default reducers;
