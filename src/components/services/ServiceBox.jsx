import React from "react";

const ServiceBox = (props) => {
  
  return (
    <div className="col-lg-4 col-md-6">
      <div
        data-aos="flip-up"
        data-aos-duration="1500"
        className="service d-flex flex-column gap-3 p-3 p-md-5 rounded justify-content-center align-items-center text-center justify-content-md-start align-items-md-start text-md-start"
      >
        <p className="service-icon">{props.serviceItem.icon}</p>
        <div className="service-info">
          <h4 className="mb-3">{props.serviceItem.title}</h4>
          <p>{props.serviceItem.desc}</p>
        </div>
        <a href="http://www.google.com" rel="noreferrer" target="_blank">
          Learn More <i className="ms-1 fa-solid fa-arrow-right"></i>
        </a>
      </div>
    </div>
  );
};

export default ServiceBox;
