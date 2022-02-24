import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchTestimonials } from "../../redux/actions/testimonialActions";
import Testimonial from "./Testimonial";

const TestimonialListing = () => {
  const testimonials = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTestimonials());
  }, []);
  console.log("Testimonials: ", testimonials);
  return (
    <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
      <Testimonial />
    </div>
  );
};

export default TestimonialListing;
