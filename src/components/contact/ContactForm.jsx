import React from "react";

const ContactForm = () => {
  
  return (
    <div className="col-lg-8 col-md-6">
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="contact-form rounded p-4"
      >
        <form action="">
          <div className="row gy-4 align-items-center justify-content-center">
            <div className="col-12 col-sm-6">
              <input
                type="text"
                name="username"
                placeholder="Your Name"
                className="p-2 rounded w-100"
              />
            </div>
            <div className="col-12 col-sm-6">
              <input
                type="email"
                name="mail"
                placeholder="Your E-mail"
                className="p-2 rounded w-100"
              />
            </div>
            <div className="col-12">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="p-2 rounded w-100"
              />
            </div>
            <div className="col-12">
              <textarea
                name="message"
                cols="30"
                rows="10"
                placeholder="Your Message"
                className="p-2 rounded w-100"
              ></textarea>
            </div>
            <div className="col-12 col-md-4">
              <button type="submit" className="main-btn">
                Send Message
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
