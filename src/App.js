import Topbar from "./Components/Topbar/Topbar";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home/Home";
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";

import Testimonial from "./Pages/Testimonial/Testimonial";
import About from "./Pages/About/About";
import Service from "./Pages/Service/Service";
import Team from "./Pages/Team/Team";
import Contact from "./Pages/Contact/Contact";
import Banner from "./Pages/Banner/Banner";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./App.css";
import ServiceDetail from "./Pages/Service/ServiceDetail";
import ServiceListing from "./Pages/Service/ServiceListing";
import TestimonialListing from "./Pages/Testimonial/TestimonialListing";
import TeamListing from "./Pages/Team/teamListing";

function App() {
  // const AppRoutes = () => {
  //   let routes = useRoutes([
  //     { path: "/home", element: <Home /> },
  //     { path: "service", element: <ServiceListing /> },
  //     { path: "/service/:serviceId", element: <ServiceDetail /> },
  //     { path: "about", element: <About /> },
  //     { path: "contact", element: <Contact /> },
  //     { path: "/team", element: <TeamListing /> },
  //     { path: "testimonial", element: <TestimonialListing /> },
  //     // ...
  //   ]);
  //   return routes;
  // };
  return (
    <>
      <Provider store={store}>
        {/* <Topbar />
          <Navbar /> */}
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/banner" element={<Banner />} />
            <Route exact path="/service" element={<ServiceListing />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/testimonial" element={<Testimonial />} />
            <Route exact path="/team" element={<Team />} />
            {/*         <Route exact path="/project" element={<Project />} /> */}
          </Routes>
            {/* <Layout> */}
        </Router>
        {/* <Footer /> */}
      </Provider>
    </>
  );
}

export default App;
