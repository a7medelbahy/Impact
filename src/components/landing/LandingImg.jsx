import React from "react";
import LandImg1 from "../../images/landing-1.svg";
import LandImg2 from "../../images/landing-2.svg";
import LandImg3 from "../../images/landing-3.svg";

const LandingImg = () => {
  
  return (
    <div
      id="carouselExampleSlidesOnly"
      className="carousel slide col-md-6 orded-2 order-md-2"
      data-bs-ride="carousel"
      data-aos="fade-up"
      data-aos-duration="3000"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src={LandImg1}
            className="d-block img-fluid w-100"
            alt="landingImg"
          />
        </div>
        <div className="carousel-item">
          <img
            src={LandImg2}
            className="d-block img-fluid w-100"
            alt="landingImg"
          />
        </div>
        <div className="carousel-item">
          <img
            src={LandImg3}
            className="d-block img-fluid w-100"
            alt="landingImg"
          />
        </div>
      </div>
    </div>
  );
};

export default LandingImg;
