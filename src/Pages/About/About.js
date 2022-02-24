import { Link } from "react-router-dom";
import Topbar from "../../Components/Topbar/Topbar";
import Navbar from "../../Components/Navbar/Navbar";
import React, { useEffect } from "react";
// { useState, useEffect, Fragment }
// import { Helmet } from "react-helmet";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import Footer from "../../Components/Footer/Footer";
import { fetchAbouts } from "../../redux/actions/aboutActions";
import Team from "../Team/Team";
import TeamListing from "../Team/teamListing";
// import { useDispatch } from "react-redux";

function About() {
  const abouts = useSelector((state) => state.allAbouts.abouts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAbouts());
  }, []);

  console.log({ abouts });
  return (
    <>
      <Topbar />
      <Navbar />
      <div>
        <div className="container-fluid page-header py-5 mb-5">
          <div className="container py-5">
            <h1 className="display-3 text-white mb-3 animated slideInDown">
              About
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
                  About
                </li>
              </ol>
            </nav>
          </div>
        </div>
        <React.Fragment>
          <div className="container-fluid bg-light overflow-hidden my-5 px-lg-0">
            <div className="container about px-lg-0">
              <div className="row g-0 mx-lg-0">
                <div
                  className="col-lg-6 ps-lg-0"
                  style={{ minHeight: "400px" }}
                >
                  <div className="position-relative h-100">
                    <img
                      className="position-absolute img-fluid w-100 h-100"
                      src="assets/static/img/about.jpg"
                      style={{ objectFit: " cover" }}
                      alt=""
                    />
                  </div>
                </div>
                <div
                  className="col-lg-6 about-text py-5 wow fadeIn"
                  data-wow-delay="0.5s"
                >
                  <div className="p-lg-5 pe-lg-0">
                    <div className="section-title text-start">
                      <meta name="summary" content="About us" />
                      <h1 className="display-5 mb-4">
                        {/* About Us */}
                        {abouts.title}
                      </h1>
                    </div>

                    <p className="mb-4 pb-2">
                      {/* Welcome to our Group Himalayan Consulting Group.We provide
                      here best service.We are very Active group with kore than
                      20 years of experience. */}
                      {abouts.summary}
                    </p>
                    <div className="row g-4 mb-4 pb-2">
                      <div
                        className="col-sm-6 wow fadeIn"
                        data-wow-delay="0.1s"
                      >
                        <div className="d-flex align-items-center">
                          <div
                            className="d-flex flex-shrink-0 align-items-center justify-content-center bg-white"
                            style={{ width: "60px", height: "60px" }}
                          >
                            <i className="fa-thin fa-user-group"></i>
                          </div>
                          <div className="ms-3">
                            <h2
                              className="text-primary mb-1"
                              data-toggle="counter-up"
                            ></h2>
                            <p className="fw-medium mb-0">
                              {abouts.happy_clients}
                            </p>
                            Client
                          </div>
                        </div>
                      </div>
                      <div
                        className="col-sm-6 wow fadeIn"
                        data-wow-delay="0.3s"
                      >
                        <div className="d-flex align-items-center">
                          <div
                            className="d-flex flex-shrink-0 align-items-center justify-content-center bg-white"
                            style={{ width: "60px", height: "60px" }}
                          >
                            <i className="fa fa-check fa-2x text-primary"></i>
                          </div>
                          <div className="ms-3">
                            <h2
                              className="text-primary mb-1"
                              data-toggle="counter-up"
                            ></h2>
                            <p className="fw-medium mb-0">
                              {abouts.project_done}
                            </p>
                            Project Done
                          </div>
                        </div>
                      </div>
                    </div>
                    <Link to="/service" className="btn btn-primary py-3 px-5">
                      Explore More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>

        <TeamListing />
        {/* team start

        <div className="container-xxl py-5">
          <div className="container">
            <div className="section-title text-center">
              <h1 className="display-5 mb-5">Team Members</h1>
            </div>
            <div className="row g-4">
              <div
                className="col-lg-3 col-md-6 wow fadeInUp"
                data-wow-delay="0.7s"
              >
                <div className="team-item">
                  <div className="overflow-hidden position-relative">
                    <img
                      className="img-fluid"
                      src="assets/static/img/team-4.jpg"
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

                  <div className="text-center border border-5 border-light border-top-0 p-4">
                    <h5 className="mb-0">ram</h5>
                    <small>manager</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        {/* <!-- Team End --> */}
      </div>
      <Footer />
    </>
  );
}

export default About;
