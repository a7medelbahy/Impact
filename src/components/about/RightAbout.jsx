import React from "react";
import { AboutList } from "../../data";
import RightAboutImg from "../../images/about-2.jpg";

const RightAbout = () => {
  
  return (
    <div className="col-lg-6">
      <div
        className="right-about d-flex flex-column gap-2"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <p className="light-black">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <ul className="about-list d-flex flex-column gap-3 p-0">
          {AboutList.map((item) => {
            return (
              <li key={item.id}>
                <i className="rouned-circle p-1 fa-solid fa-check me-2"></i>
                {item.content}
              </li>
            );
          })}
        </ul>
        <p>
          Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
          irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
          fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident
        </p>
        <div className="about-img rounded overflow-hidden">
          <img
            className="img-fluid rounded w-100 d-block"
            src={RightAboutImg}
            alt="about img"
          />
        </div>
      </div>
    </div>
  );
};

export default RightAbout;
