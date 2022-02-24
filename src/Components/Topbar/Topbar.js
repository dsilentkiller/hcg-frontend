import React from "react";
import { Link } from "react-router-dom";

import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaArrowCircleDown } from "react-icons/fa";
import { useState } from "react";

function Topbar() {
  const [location, setLocation] = useState("");
  const [time, setTime] = useState("");
  const [contact, setContact] = useState("");
  const [facebooklink, setFacebooklink] = useState("");
  const [twitterlink, setTwiterlink] = useState("");
  const [linkdlinlink, setLinkdlinlink] = useState("");
  const [instagramlink, setInstagramlink] = useState("");

  async function Topbar() {
    // const [location, time, contact, facebooklink, twitterlink, linkdlinlink, instagramlink] = element;

    console.warn(
      location,
      time,
      contact,
      facebooklink,
      twitterlink,
      linkdlinlink,
      instagramlink
    );
    // const formData = new FormData();
    // formData.append("location", location);
    // formData.append("time", time);
    // formData.append("contact", contact);
    // formData.append("flink", flink);
    // formData.append("tlink", tlink);
    // formData.append("lilink", lilink);
    // formData.append("ilink", ilink);

    // let result = await{}
  }

  return (
    <div>
      <div className="container-fluid bg-light p-0">
        <div className="row gx-0 d-none d-lg-flex">
          <div className="col-lg-7 px-5 text-start">
            <div className="h-100 d-inline-flex align-items-center py-3 me-4">
              <small
                className="fa fa-map-marker-alt text-primary me-2"
                onChange={(e) => setLocation(e.target.value[0])}
              ></small>
              <small>Thapathali Bridge, Tripureswor,Kathamandu</small>
            </div>
            <div className="h-100 d-inline-flex align-items-center py-3">
              <small
                className="far fa-clock text-primary me-2"
                onChange={(e) => setTime(e.target.value[0])}
              ></small>
              <small>Mon - Fri : 10.00 AM - 05.00 PM</small>
            </div>
          </div>
          <div className="col-lg-5 px-5 text-end">
            <div className="h-100 d-inline-flex align-items-center py-3 me-4">
              <small
                className="fa fa-phone-alt text-primary me-2"
                onChange={(e) => setContact(e.target.value[0])}
              ></small>
              <small>
                <FaPhoneSquareAlt /> +977 9828889263
              </small>
            </div>
            <div className="h-100 d-inline-flex align-items-center">
              <Link
                className="btn btn-sm-square bg-white text-primary me-1"
                to="https://www.facebook.com/"
                onChange={(e) => setInstagramlink(e.target.value[0])}
              >
                <FaFacebook />
              </Link>
              <Link
                className="btn btn-sm-square bg-white text-primary me-1"
                to="https://www.facebook.com/"
                onChange={(e) => setFacebooklink(e.target.value[0])}
              >
                <FaInstagram />
              </Link>
              <Link
                className="btn btn-sm-square bg-white text-primary me-1"
                to="https://www.facebook.com/"
                onChange={(e) => setFacebooklink(e.target.value[0])}
              >
                <FaTwitter />
              </Link>
              <Link
                className="btn btn-sm-square bg-white text-primary me-0"
                to="https://www.facebook.com/"
                onChange={(e) => setFacebooklink(e.target.value[0])}
              >
                <FaLinkedin />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
