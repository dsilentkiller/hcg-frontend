import axios from "axios";
import React from "react";
import Service from "./Service";
import { useDispatch, useSelector } from "react-redux";
import { setServices, fetchServices } from "../../redux/actions/serviceActions";
import { useEffect } from "react";

const ServiceListing = () => {
  const services = useSelector((state) => state);
  const dispatch = useDispatch();

  // const fetchServices = async () => {
  //   const response = await axios
  //     .get("http://127.0.0.1:8000/api/service")
  //     .catch((err) => {
  //       console.log("Err", err);
  //     });
  //   dispatch(setServices(response.data));
  //   // console.log(response.data);
  // };
  useEffect(() => {
    dispatch(fetchServices());
  }, []);
  // all service list out ,get data from service.
  console.log("Services: ", services);

  return (
    <div className="ui grid container">
      <Service />
    </div>
  );
};

export default ServiceListing;
