import React from "react";
import "./contact.css";
import SectionHead from "./../SectionHead";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

const Contact = () => {
  
  return (
    <div className="contact-us section-padding" id="contact">
      <div className="container">
        <SectionHead
          sectionName="Contact Us"
          desc="Nulla dolorum nulla nesciunt rerum facere sed ut inventore quam"
        />
        <div className="row gy-4 align-items-center">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
