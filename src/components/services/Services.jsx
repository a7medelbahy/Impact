import React from "react";
import SectionHead from "../SectionHead";
import "./services.css";
import { ServicesData } from "../../data";
import ServiceBox from "./ServiceBox";

const Services = () => {
  
  return (
    <div className="services section-padding" id="services">
      <div className="container">
        <SectionHead
          sectionName="Our Services"
          desc="Aperiam dolorum et et wuia molestias qui eveniet numquam nihil porro incidunt dolores."
        />
        <div className="row gy-4">
          {ServicesData.map((serviceItem) => {
            return (
              <ServiceBox key={serviceItem.id} serviceItem={serviceItem} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
