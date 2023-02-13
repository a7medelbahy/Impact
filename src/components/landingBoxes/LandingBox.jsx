import React from "react";

const LandingBox = (props) => {
  
  return (
    <div className="col-lg-3 col-md-6">
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="land-box py-5 px-3 d-flex flex-column gap-4 justify-content-center align-items-center text-center"
      >
        <p className="display-6">{props.boxItem.icon}</p>
        <h3 className="text-light">{props.boxItem.title}</h3>
      </div>
    </div>
  );
};

export default LandingBox;
