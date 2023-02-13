import React from "react";

const ContactInfoBox = (props) => {
  
  return (
    <div className="info-box p-3 rounded d-flex align-items-center gap-3">
      <p className="p-2 info-icon d-flex justify-content-center rounded-circle align-items-center border border-white">
        {props.contactItem.icon}
      </p>
      <div className="info text-white">
        <h5 className="mb-0">{props.contactItem.title}</h5>
        <a rel="noreferrer" target="_blank" href={props.contactItem.link}>
          {props.contactItem.info}
        </a>
      </div>
    </div>
  );
};

export default ContactInfoBox;
