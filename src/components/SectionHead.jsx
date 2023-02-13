import React from "react";

const SectionHead = ({ sectionName, desc }) => {

  return (
    <div
      className="section-head mb-5 d-flex flex-column justify-content gap-4 align-items-center text-center"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <h2>{sectionName}</h2>
      <p>{desc}</p>
    </div>
  );
};

export default SectionHead;
