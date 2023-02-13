import React from "react";
import StaticsImg from "../../images/stats-img.svg";
import Stats from "./Stats";
import "./statics.css";
import SectionHead from "../SectionHead";

const Statics = () => {
  
  return (
    <div className="statics py-5" id="statics">
      <div className="container">
        <SectionHead
          sectionName="Our Statics"
          desc="Aperiam dolorum et et wuia molestias qui eveniet numquam nihil porro incidunt"
        />
        <div className="row align-items-center">
          <div className="col-lg-6 d-none d-lg-block">
            <img
              data-aos="fade-down"
              data-aos-duration="1000"
              className="img-fluid w-100 d-block rounded"
              src={StaticsImg}
              alt="stats imh"
            />
          </div>
          <Stats />
        </div>
      </div>
    </div>
  );
};

export default Statics;
