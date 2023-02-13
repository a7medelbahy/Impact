import React from "react";
import { ContactInfoData } from "../../data";
import ContactInfoBox from "./ContactInfoBox";

const ContactInfo = () => {
  
  return (
    <div className="col-lg-4 col-md-6">
      <div
        data-aos="fade-down"
        data-aos-duration="1000"
        className="contact-info d-flex flex-column px-3 py-4 rounded gap-3"
      >
        {ContactInfoData.map((contactItem) => {
          return (
            <ContactInfoBox key={contactItem.id} contactItem={contactItem} />
          );
        })}
      </div>
    </div>
  );
};

export default ContactInfo;
