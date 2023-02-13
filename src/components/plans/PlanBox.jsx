import React from "react";

const PlanBox = (props) => {
  
  return (
    <div className="col-lg-3 col-md-6">
      <div
        data-aos="zoom-in"
        data-aos-duration="2000"
        id={props.planItem.id}
        className="plan-box rounded overflow-hidden pb-3 d-flex flex-column gap-4 text-center align-items-center"
      >
        <div className="plan-title py-2 w-100">
          <h4>{props.planItem.title}</h4>
        </div>
        <div className="plan-icon d-flex justify-content-center align-items-center">
          {props.planItem.icon}
        </div>
        <div className="plan-price d-flex align-items-center justify-content-center">
          <sup>$</sup>
          <h2>{props.planItem.price}</h2>
          <sub>/Month</sub>
        </div>
        <ul className="d-flex flex-column gap-3 p-0">
          {props.planItem.features.map((featItem) => {
            return (
              <li
                key={featItem.id}
                className={
                  !featItem.available
                    ? "text-decoration-line-through text-black-50"
                    : ""
                }
              >
                {featItem.feature}
              </li>
            );
          })}
        </ul>
        <button className="main-btn buy-btn">Buy Now</button>
      </div>
    </div>
  );
};

export default PlanBox;
