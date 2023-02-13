import React from "react";
import SocialIcons from "../SocialIcons";

const SubNav = () => {
  
  return (
    <div className="sub-nav py-2" id="top">
      <div className="container">
        <div className="row gy-2 align-items-center justify-content-center text-center">
          <div className="col-lg-2 col-md-4 d-flex align-items-center">
            <i className="fa-solid fa-envelope me-1 mail"></i>
            <span>
              <a href="mailto:ahmedelbahy06@gmail.com">contact@gmail.com</a>
            </span>
          </div>
          <div className="col-lg-2 col-md-4 d-flex align-items-center">
            <i className="fa-solid fa-phone me-1 phone"></i>
            <span>
              <a
                rel="noreferrer"
                target="_blank"
                href="http://wa.me/+201207933578"
              >
                +2 01207933578
              </a>
            </span>
          </div>
          <div className="col-lg-2 col-md-4 offset-lg-6 d-flex align-items-center">
            <SocialIcons />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubNav;
