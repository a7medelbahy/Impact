import React from "react";
import "./landing.css";
import LandingContent from "./LandingContent";
import LandingImg from "./LandingImg";

const Landing = () => {
  
  return (
    <div className="landing pb-5">
      <div className="container">
        <div className="row gy-3 pt-5 text-center text-lg-start justify-content-center align-items-center">
          <LandingContent />
          <LandingImg />
        </div>
      </div>
    </div>
  );
};

export default Landing;
