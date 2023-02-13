import React from "react";
import { LandingBoxesData } from "../../data";
import LandingBox from "./LandingBox";
import "./landingboxes.css";

const LandingBoxes = () => {
  
  return (
    <div className="landing-boxes">
      <div className="container">
        <div className="row gy-4">
          {LandingBoxesData.map((boxItem) => {
            return <LandingBox key={boxItem.id} boxItem={boxItem} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default LandingBoxes;
