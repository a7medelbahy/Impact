import React from "react";
import "./team.css";
import { TeamData } from "../../data";
import SectionHead from "../SectionHead";
import TeamBox from "./teamBox";

const Team = () => {
  
  return (
    <div className="team-members section-padding" id="team">
      <div className="container">
        <SectionHead
          sectionName="Our Team"
          desc="Nulla dolorum nulla nesciunt rerum facere sed ut inventore quam porro nihil id ratione"
        />
        <div className="row gy-4 justify-content-center align-items-center text-center">
          {TeamData.map((teamItem) => {
            return <TeamBox key={teamItem.id} teamItem={teamItem} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Team;
