import React from "react";
import { SocialItems } from "../data";

const SocialIcons = () => {
  
  return (
    <ul className="social-icons d-flex align-items-center gap-3 m-0 p-0">
      {SocialItems.map((socialItem) => {
        return (
          <li key={socialItem.id}>
            <a
              className="fs-6 p-0 m-0"
              rel="noreferrer"
              target="_blank"
              href={socialItem.link}
            >
              {socialItem.icon}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default SocialIcons;
