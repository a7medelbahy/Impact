import React from "react";
import { useState, useEffect } from "react";

const UpBtn = () => {
  
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  },[]);

  const upToTop = () => {
    window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
  };

  return (
    <React.Fragment>
      {showButton && (
        <button onClick={upToTop} className="up-btn text-white">
          <i className="fa-solid fa-angles-up"></i>
        </button>
      )}
    </React.Fragment>
  );
};

export default UpBtn;
