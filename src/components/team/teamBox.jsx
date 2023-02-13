import React from "react";
import SocialIcons from "../SocialIcons";

const TeamBox = (props) => {
  
  return (
    <div className="col-lg-3 col-md-6">
      <div
        data-aos="flip-down"
        data-aos-duration="1000"
        className="team-member p-3 rounded overflow-hidden d-flex flex-column gap-3"
      >
        <img
          src={props.teamItem.img}
          className="img-fluid w-100 rounded"
          alt="team member"
        />
        <div className="team-info">
          <div className="member-info mb-3">
            <h4>{props.teamItem.name}</h4>
            <small>{props.teamItem.job}</small>
          </div>
          <SocialIcons />
        </div>
      </div>
    </div>
  );
};

export default TeamBox;
