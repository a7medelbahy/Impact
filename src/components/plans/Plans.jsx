import React from "react";
import "./plans.css";
import { PlansData } from "../../data";
import SectionHead from "./../SectionHead";
import PlanBox from "./PlanBox";

const Plans = () => {
  
  return (
    <div className="plans section-padding" id="plans">
      <div className="container">
        <SectionHead
          sectionName="Pricing Plans"
          desc="Aperiam dolorum et et wuia molestias qui eveniet numquam nihil porro incidunt."
        />
        <div className="row gy-5 justify-content-center align-items-center">
          {PlansData.map((planItem) => {
            return <PlanBox key={planItem.id} planItem={planItem} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Plans;
