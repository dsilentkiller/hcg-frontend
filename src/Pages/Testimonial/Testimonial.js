import React, { useEffect } from "react";
import Topbar from "../../Components/Topbar/Topbar";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import { useSelector, useDispatch } from "react-redux";
import { fetchTestimonials } from "../../redux/actions/testimonialActions";

const Testimonial = () => {
  const testimonials = useSelector(
    (state) => state.allTestimonials.testimonials
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTestimonials());
  }, []);

  console.log({ testimonials });
  // const renderListTestimonial = testimonials.map((testimonial) => {
  // const { name, profession, image, summary } = testimonial;

  return (
    <div>
      <Topbar />
      <Navbar />

      {/* page header start */}

      <div className="container-fluid page-header py-5 mb-5">
        <div className="container py-5">
          <h1 className="display-3 text-white mb-3 animated slideInDown">
            Testimonial
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
                Testimonial
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* page header end */}

      <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container">
          <div className="section-title text-center">
            <h1 className="display-5 mb-5">Testimonial</h1>
          </div>
          {/* <div className="owl-carousel testimonial-carousel"> */}

          <div className="testimonial-item text-center">
            <img
              className="img-fluid bg-light p-2 mx-auto mb-3"
              src={testimonials.image}
              style={{ width: "90px", height: "90px" }}
              alt={testimonials.client_name}
            />
            <div className="testimonial-text text-center p-4">
              <p>{testimonials.summary}</p>
              <h5 className="mb-1">{testimonials.client_name}</h5>
              <span className="fst-italic">{testimonials.profession}</span>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
  // });

  // return <>{renderListTestimonial}</>;
};

export default Testimonial;
