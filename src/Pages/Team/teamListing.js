import axios from "axios";
import React from "react";
import Team from "./Team";
import { useDispatch, useSelector } from "react-redux";
import { setTeams, fetchTeams } from "../../redux/actions/teamActions";
import { useEffect } from "react";

const TeamListing = () => {
  const Teams = useSelector((state) => state);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(fetchTeams());
  }, []);
  // all Team list out ,get data from Team.
  console.log("Teams: ", Teams);

  return (
    <div className="ui grid container">
      <Team />
    </div>
  );
};

export default TeamListing;
