import React from "react";
import { ServicesLinksData } from "../../data";

const ServicesLinks = () => {
  
  return (
    <div className="col-lg-2 col-md-6 services-links">
      <h5 className="text-white mb-4">Our Services</h5>
      <ul className="p-0 d-flex flex-column gap-3">
        {ServicesLinksData.map((linkItem) => {
          return (
            <li key={linkItem.id}>
              <a href={linkItem.link}>{linkItem.title}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ServicesLinks;
