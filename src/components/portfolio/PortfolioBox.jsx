import React from "react";
import { Fancybox as NativeFancybox } from "@fancyapps/ui/dist/fancybox.esm.js";
import "@fancyapps/ui/dist/fancybox.css";

const PortfolioBox = (props) => {
  
  return (
    <div className="col-lg-4 col-md-6">
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="portfolio-box bg-white rounded overflow-hidden d-flex flex-column gap-3"
      >
        <div className="port-img overflow-hidden">
          <img
            src={props.portItem.img}
            className="img-fluid w-100"
            alt="portfolio"
            data-fancybox="gallery"
          />
        </div>
        <div className="port-info p-3">
          <h5>{props.portItem.categoary}</h5>
          <p className="light-black">{props.portItem.desc}</p>
        </div>
      </div>
    </div>
  );
};

export default PortfolioBox;
