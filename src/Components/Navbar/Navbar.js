import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaArrowCircleDown } from "react-icons/fa";

function Navbar() {
  // const [logo] =element,
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0">
        <Link
          to="index.html"
          className="navbar-brand d-flex align-items-center px-4 px-lg-5"
        >
          <h2 className="m-0 text-primary">Himalayan Consulting Group </h2>
        </Link>
        <button
          type="button"
          className="navbar-toggler me-4"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto p-4 p-lg-0">
            <Link to="/" className="nav-item nav-link active">
              Home
            </Link>
            <Link to="/about" className="nav-item nav-link">
              About
            </Link>
            <Link to="/service" className="nav-item nav-link">
              Service
            </Link>
            {/* <Link to="/project" className="nav-item nav-link">
              Project
            </Link> */}
            <div className="nav-item dropdown">
              <Link
                to="#"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Pages <FaArrowCircleDown />
              </Link>
              <div className="dropdown-menu fade-up m-0">
                <Link to="/team" className="dropdown-item">
                  Our Team
                </Link>
                <Link to="/testimonial" className="dropdown-item">
                  Testimonial
                </Link>
              </div>
            </div>
            <Link to="/contact" className="nav-item nav-link">
              Contact
            </Link>
            <Link to="/banner" className="nav-item nav-link">
              Banner
            </Link>
            {/* <Link to="/detail" className="nav-item nav-link">
              Detail
            </Link> */}
          </div>
          <Link
            to="/"
            className="btn btn-primary py-4 px-lg-5 d-none d-lg-block"
          >
            Login<i className="fa fa-arrow-right ms-3"></i>
          </Link>
        </div>
      </nav>
      {/* <!-- Navbar End --> */}
    </div>
  );
}

export default Navbar;
