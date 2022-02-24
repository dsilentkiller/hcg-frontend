import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Topbar from "../../Components/Topbar/Topbar";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { useSelector, useDispatch } from "react-redux";
import { fetchServices } from "../../redux/actions/serviceActions";
// import { fetchTestimonials } from "../../redux/actions/testimonialActions";

const Service = () => {
  const services = useSelector((state) => state.allServices.services);

  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchServices());
  // }, []);

  console.log({ services });
  // to display all service
  // map function start
  const renderListService = services.map((service) => {
    // const { id, title, summary, image } = services;
    return (
      <div>
        {/* page header start */}

        <div className="container-fluid page-header py-5 mb-5">
          <div className="container py-5">
            <h1 className="display-3 text-white mb-3 animated slideInDown">
              Service
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
                  Service
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* page header end */}

        <div className="container-xxl py-5">
          <div className="container">
            <div className="section-title text-center">
              <h1 className="display-5 mb-5">Our Services</h1>
            </div>
            <div className="row g-4">
              {/* first column */}
              <div
                className="col-md-6 col-lg-4 wow fadeInUp"
                data-wow-delay="0.1s"
                // key={id}
              >
                <div className="service-item">
                  <div className="overflow-hidden">
                    <li key={service.i}>
                      <img
                        className="img-fluid"
                        src={service.image}
                        // "assets/static/img/service-1.jpg"
                        alt={service.title}
                      />
                    </li>
                  </div>
                  <div className="p-4 text-center border border-5 border-light border-top-0">
                    <h4 className="mb-3">
                      <li key={service.i}>
                        {service.title}
                        {/* Free Consultant */}
                      </li>
                    </h4>
                    <li key={service.i}>
                      <p>{service.summary}</p>
                    </li>
                    <Link className="fw-medium" to="/ServiceDetail">
                      Read More<i className="fa fa-arrow-right ms-2"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <Footer /> */}
      </div>
    );
  });
  // map function end
  return (
    <>
      {/* <Topbar />
      <Navbar /> */}
      {renderListService}
      {/* <Footer /> */}
    </>
  );
};

export default Service;
