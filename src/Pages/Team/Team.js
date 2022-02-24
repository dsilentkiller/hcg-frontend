import React from "react";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Topbar from "../../Components/Topbar/Topbar";
import Navbar from "../../Components/Navbar/Navbar";
import { fetchTeams } from "../../redux/actions/teamActions";
import Footer from "../../Components/Footer/Footer";
import { useSelector, useDispatch } from "react-redux";

const Team = () => {
  const teams = useSelector((state) => (state = state.allTeams.teams));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTeams());
  }, []);

  console.log({ teams });

  // const renderListTeam = teams.map((teams, item) => {
  return (
    <>
      {/*
    <div className="container-fluid page-header py-5 mb-5">
        <div className="container py-5">
          <h1 className="display-3 text-white mb-3 animated slideInDown">
            Team
          </h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a className="text-white" href="#">
                  Home
                </a>
              </li>
              <li className="breadcrumb-item">
                <a className="text-white" href="#">
                  Pages
                </a>
              </li>
              <li
                className="breadcrumb-item text-white active"
                aria-current="page"
              >
                Team
              </li>
            </ol>
          </nav>
        </div>
    </div> */}
      {/* page header end */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="section-title text-center">
            <h1 className="display-5 mb-5">Team Members</h1>
          </div>
          <div className="row g-4">
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="team-item">
                <div className="overflow-hidden position-relative">
                  <img
                    className="img-fluid"
                    src="assets/static/img/team-2.jpg"
                    alt=""
                  />
                  <div className="team-social">
                    <Link className="btn btn-square" to="">
                      <i className="fab fa-facebook-f"></i>
                    </Link>
                    <Link className="btn btn-square" to="">
                      <i className="fab fa-twitter"></i>
                    </Link>
                    <Link className="btn btn-square" to="">
                      <i className="fab fa-instagram"></i>
                    </Link>
                  </div>
                </div>
                <div
                  className="text-center border border-5 border-light border-top-0 p-4"
                  // key={item}
                >
                  <h5 className="mb-0">{teams.client_name}</h5>
                  <small>{teams.profession}</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ) */}
      <Footer />
    </>
  );
  // });

  // return <> {renderListTeam} </>;
};

export default Team;
