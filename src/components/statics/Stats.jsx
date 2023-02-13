import React from "react";
import { StatsData } from "../../data";

const Stats = () => {
  
  return (
    <div className="col-lg-6">
      <div
        className="stats d-flex flex-column gap-4"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        {StatsData.map((statItem) => {
          return (
            <div key={statItem.id}>
              <label>{statItem.title}</label>
              <div className="progress" style={{ height: "25px" }}>
                <div
                  className="progress-bar bg-success fs-6 text-end pe-2"
                  role="progressbar"
                  aria-label="Example with label"
                  style={{ width: `${statItem.progress}%` }}
                  aria-valuenow={statItem.progress}
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  {statItem.progress} %
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Stats;
