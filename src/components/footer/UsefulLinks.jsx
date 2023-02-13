import React from "react";
import { UsefulLinksData } from "../../data";

const UsefulLinks = () => {
  
  return (
    <div className="col-lg-2 col-md-6 useful-links">
      <h5 className="text-white mb-4">Useful Links</h5>
      <ul className="p-0 d-flex flex-column gap-3">
        {UsefulLinksData.map((linkItem) => {
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

export default UsefulLinks;
