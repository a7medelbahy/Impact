import React from "react";
import SectionHead from "../SectionHead";
import "./about.css";
import LeftAbout from "./LeftAbout";
import RightAbout from "./RightAbout";

const About = () => {
  
  return (
    <div className="about-us section-padding" id="about">
      <div className="container">
        <SectionHead
          sectionName="About Us"
          desc="Aperiam dolorum et et wuia molestias qui eveniet numquam nihil porro incidunt."
        />
        <div className="row gy-4 gx-5 justify-content-center">
          <LeftAbout />
          <RightAbout />
        </div>
      </div>
    </div>
  );
};

export default About;
