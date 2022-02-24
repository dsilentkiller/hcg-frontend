import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Banner from "../Banner/Banner";
import About from "../About/About";
import Service from "../Service/Service";
import Testimonial from "../Testimonial/Testimonial";
import Team from "../Team/Team";
import Footer from "../../Components/Footer/Footer";
import Topbar from "../../Components/Topbar/Topbar";
import { fetchHomes } from "../../redux/actions/homeActions";
import Navbar from "../../Components/Navbar/Navbar";

const Home = () => {
  const homes = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchHomes());
  }, []);
  console.log("Homes:", homes);
  return (
    <div>
      {/* <Topbar />
      <Navbar />
      <Banner /> */}
      {/* <!-- Feature Start --> */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.1s">
              <div className="d-flex align-items-center justify-content-between mb-2">
                <div
                  className="d-flex align-items-center justify-content-center bg-light"
                  style={{ width: "60px", height: "60px" }}
                >
                  <i className="fa fa-user-check fa-2x text-primary"></i>
                </div>
                <h1 className="display-1 text-light mb-0">01</h1>
              </div>
              <h5>Creative Teams </h5>
            </div>
            <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.3s">
              <div className="d-flex align-items-center justify-content-between mb-2">
                <div
                  className="d-flex align-items-center justify-content-center bg-light"
                  style={{ width: "60px", height: "60px" }}
                >
                  <i className="fa fa-check fa-2x text-primary"></i>
                </div>
                <h1 className="display-1 text-light mb-0">02</h1>
              </div>
              <h5>Quality Service</h5>
            </div>
            <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.5s">
              <div className="d-flex align-items-center justify-content-between mb-2">
                <div
                  className="d-flex align-items-center justify-content-center bg-light"
                  style={{ width: "60px", height: "60px" }}
                >
                  <i className="fa fa-drafting-compass fa-2x text-primary"></i>
                </div>
                <h1 className="display-1 text-light mb-0">03</h1>
              </div>
              <h5>Free Consultation</h5>
            </div>
            <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.7s">
              <div className="d-flex align-items-center justify-content-between mb-2">
                <div
                  className="d-flex align-items-center justify-content-center bg-light"
                  style={{ width: "60px", height: "60px" }}
                >
                  <i className="fa fa-headphones fa-2x text-primary"></i>
                </div>
                <h1 className="display-1 text-light mb-0">04</h1>
              </div>
              <h5>Customer Support</h5>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Feature endt --> */}
      <About />
      <Service />
      {/* <!-- Feature Start --> */}
      <div className="container-fluid bg-light overflow-hidden my-5 px-lg-0">
        <div className="container feature px-lg-0">
          <div className="row g-0 mx-lg-0">
            <div
              className="col-lg-6 feature-text py-5 wow fadeIn"
              data-wow-delay="0.5s"
            >
              <div className="p-lg-5 ps-lg-0">
                <div className="section-title text-start">
                  <h1 className="display-5 mb-4">Why Choose Us</h1>
                </div>
                <p className="mb-4 pb-2">
                  Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                  Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                  sed stet lorem sit clita duo justo erat amet
                </p>
                <div className="row g-4">
                  <div className="col-6">
                    <div className="d-flex align-items-center">
                      <div
                        className="d-flex flex-shrink-0 align-items-center justify-content-center bg-white"
                        style={{ width: "60px", height: "60px" }}
                      >
                        <i className="fa fa-check fa-2x text-primary"></i>
                      </div>
                      <div className="ms-4">
                        <p className="mb-2">Quality</p>
                        <h5 className="mb-0">Services</h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="d-flex align-items-center">
                      <div
                        className="d-flex flex-shrink-0 align-items-center justify-content-center bg-white"
                        style={{ width: "60px", height: "60px" }}
                      >
                        <i className="fa fa-user-check fa-2x text-primary"></i>
                      </div>
                      <div className="ms-4">
                        <p className="mb-2">Creative</p>
                        <h5 className="mb-0">Team</h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="d-flex align-items-center">
                      <div
                        className="d-flex flex-shrink-0 align-items-center justify-content-center bg-white"
                        style={{ width: "60px", height: "60px" }}
                      >
                        <i className="fa fa-drafting-compass fa-2x text-primary"></i>
                      </div>
                      <div className="ms-4">
                        <p className="mb-2">Free</p>
                        <h5 className="mb-0">Consultation</h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="d-flex align-items-center">
                      <div
                        className="d-flex flex-shrink-0 align-items-center justify-content-center bg-white"
                        style={{ width: "60px", height: "60px" }}
                      >
                        <i className="fa fa-headphones fa-2x text-primary"></i>
                      </div>
                      <div className="ms-4">
                        <p className="mb-2">Customer</p>
                        <h5 className="mb-0">Support</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 pe-lg-0" style={{ minHeight: "400px" }}>
              <div className="position-relative h-100">
                <img
                  className="position-absolute img-fluid w-100 h-100"
                  src="assets/img/feature.jpg"
                  style={{ objectFit: " cover" }}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* feature end */}
      <Testimonial />
      <Link
        to="#"
        className="btn btn-lg btn-primary btn-lg-square rounded-0 back-to-top"
      >
        <i className="bi bi-arrow-up"></i>
      </Link>
    </div>
  );
};

export default Home;
