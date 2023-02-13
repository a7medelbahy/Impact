import React from "react";
import "./footer.css";
import FooterEnd from "./FooterEnd";
import FooterInfo from "./FooterInfo";
import NewsLetter from "./NewsLetter";
import ServicesLinks from "./ServicesLinks";
import UsefulLinks from "./UsefulLinks";

const Footer = () => {
  
  return (
    <div className="footer pt-5 pb-3">
      <div className="container">
        <div className="row gy-4">
          <FooterInfo />
          <UsefulLinks />
          <ServicesLinks />
          <NewsLetter />
        </div>
      </div>
      <FooterEnd />
    </div>
  );
};

export default Footer;
