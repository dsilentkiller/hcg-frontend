import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaArrowCircleDown } from "react-icons/fa";

function Footer() {
  return (
    <div>
      {/* <!-- Footer Start --> */}
      <div
        className="container-fluid bg-dark text-light footer mt-5 pt-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-3 col-md-6">
              <h4 className="text-light mb-4">Address</h4>
              <p className="mb-2">
                <i className="fa fa-map-marker-alt me-3"></i>Thapathali Bridge
              </p>
              <p className="mb-2">
                <i className="fa fa-phone-alt me-3"></i>+012 345 67890
              </p>
              <p className="mb-2">
                <i className="fa fa-envelope me-3"></i>info@example.com
              </p>
              <div className="d-flex pt-2">
                <Link className="btn btn-outline-light btn-social" to="">
                  <FaFacebook />
                </Link>
                <Link className="btn btn-outline-light btn-social" to="">
                  <FaInstagram />
                </Link>
                <Link className="btn btn-outline-light btn-social" to="">
                  <FaLinkedin />
                </Link>
                <Link className="btn btn-outline-light btn-social" to="">
                  <FaTwitter />
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="text-light mb-4">Services</h4>
              <Link className="btn btn-link" to="">
                General Carpentry
              </Link>
              <Link className="btn btn-link" to="">
                Furniture Remodeling
              </Link>
              <Link className="btn btn-link" to="">
                Wooden Floor
              </Link>
              <Link className="btn btn-link" to="">
                Wooden Furniture
              </Link>
              <Link className="btn btn-link" to="">
                Custom Carpentry
              </Link>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="text-light mb-4">Quick Links</h4>
              <Link className="btn btn-link" to="">
                About Us
              </Link>
              <Link className="btn btn-link" to="">
                Contact Us
              </Link>
              <Link className="btn btn-link" to="">
                Our Services
              </Link>
              <Link className="btn btn-link" to="">
                Terms & Condition
              </Link>
              <Link className="btn btn-link" to="">
                Support
              </Link>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="text-light mb-4">Newsletter</h4>
              <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
              <div
                className="position-relative mx-auto"
                style={{ maxWidth: "400px" }}
              >
                <input
                  className="form-control border-0 w-100 py-3 ps-4 pe-5"
                  type="text"
                  placeholder="Your email"
                />
                <button
                  type="button"
                  className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2"
                >
                  SignUp
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="copyright">
            <div className="row">
              <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                &copy,{" "}
                <Link className="border-bottom" to="#">
                  Himalayan Consultant
                </Link>
                , All Right Reserved.
              </div>
              <div className="col-md-6 text-center text-md-end">
                {/* <!--/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. */}
                Designed By{" "}
                <Link className="border-bottom" to="https://htmlcodex.com">
                  HTML Codex
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Footer End --> */}

      {/* <!-- Back to Top --> */}
      <Link
        to="#"
        className="btn btn-lg btn-primary btn-lg-square rounded-0 back-to-top"
      >
        <i className="bi bi-arrow-up"></i>
      </Link>
    </div>
  );
}

export default Footer;
