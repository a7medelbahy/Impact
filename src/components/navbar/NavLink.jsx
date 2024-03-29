import React from "react";

const NavLink = (props) => {
  
  return (
    <li className="nav-item">
      <a className="nav-link" href={props.navItem.path}>
        {props.navItem.title}
      </a>
    </li>
  );
};

export default NavLink;
