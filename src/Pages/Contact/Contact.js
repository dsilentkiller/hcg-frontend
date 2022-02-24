import { Link } from "react-router-dom";
import Topbar from "../../Components/Topbar/Topbar";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { connect, useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/actions/contactActions";

const Contact = ({}) => {
  const contacts = useSelector((state) => state.allContacts.contacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, []);
  console.log({ contacts });

  return (
    <div>
      <Topbar />
      <Navbar />
      {/* <!-- Page Header Start --> */}
      <div className="container-fluid page-header py-5 mb-5">
        <div className="container py-5">
          <h1 className="display-3 text-white mb-3 animated slideInDown">
            Contact
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
                Contact
              </li>
            </ol>
          </nav>
        </div>
      </div>
      {/* <!-- Page Header End --> */}
      {/* <!-- Contact Start --> */}
      <div
        className="container-fluid bg-light overflow-hidden px-lg-0"
        style={{ margin: " 6rem 0" }}
      >
        <div className="container contact px-lg-0">
          <div className="row g-0 mx-lg-0">
            <div
              className="col-lg-6 contact-text py-5 wow fadeIn"
              data-wow-delay="0.5s"
            >
              <div className="p-lg-5 ps-lg-0">
                <div className="section-title text-start">
                  <h1 className="display-5 mb-4">Contact Us</h1>
                </div>
                {/* contact form */}
                <form>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          method=" post"
                          name="name"
                          className="form-control"
                          id="name"
                          placeholder="Your full Name"
                          required
                        />
                        <br />
                        <label className="contact__form__label" htmlFor="name">
                          Name *
                        </label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          name="email"
                          type="email"
                          method=" post"
                          className="form-control"
                          id="email"
                          placeholder="example@gmail.com"
                          // value={email}
                          required
                        />
                        <label htmlFor="email">Email</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <input
                          type="text"
                          method=" post"
                          name="subject"
                          className="form-control"
                          id="subject"
                          // value={subject}
                          placeholder="Subject"
                          required
                        />
                        <label htmlFor="subject">Subject</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <textarea
                          className="form-control"
                          method=" post"
                          placeholder="Leave a message here"
                          id="message"
                          name="message"
                          style={{ height: "100px" }}
                        ></textarea>
                        <label htmlFor="message">Message</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <button
                        className="btn btn-primary w-100 py-3"
                        type="submit"
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-6 pe-lg-0" style={{ minHeight: "400px" }}>
              <div className="position-relative h-100">
                <iframe
                  className="position-absolute w-100 h-100"
                  style={{ objectFit: "cover" }}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
                  frameBorder="0"
                  allowFullScreen=""
                  aria-hidden="false"
                  tabIndex="0"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      )
      <Footer />
    </div>
  );
};

export default Contact;
