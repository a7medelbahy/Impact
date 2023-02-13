import React from "react";
import "./actionvideo.css";
import myActionVideo from "../../images/action-video.mp4";

const ActionVideo = () => {
  
  const showVideo = () => {
    let myContainer = document.createElement("div");
    myContainer.className = "video-container";
    let myPop = document.createElement("div");
    myPop.className = "pop-video";
    let videoBox = document.createElement("video");
    videoBox.src = `${myActionVideo}`;
    videoBox.controls = true;
    videoBox.autoplay = true;
    videoBox.className = "video-box";
    let myCloseBtn = document.createElement("button");
    myCloseBtn.textContent = "X";
    myCloseBtn.className = "video-close";
    myCloseBtn.addEventListener("click", () => {
      myContainer.remove();
    });
    myContainer.appendChild(myCloseBtn);
    myPop.appendChild(videoBox);
    myContainer.appendChild(myPop);
    document.body.appendChild(myContainer);
  };
  
  return (
    <div className="action py-4">
      <div className="container">
        <div
          className="action-video overflow-hidden rounded p-5 text-center"
          data-aos="zoom-in"
          data-aos-duration="1500"
        >
          <div className="action-content d-flex flex-column gap-4 justify-content-center align-items-center">
            <button className="video-btn" onClick={showVideo}>
              <span>
                <i className="fa-solid fa-circle-play"></i>
              </span>
            </button>
            <div className="action-info text-white my-3">
              <h4>Call To Action</h4>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
            </div>
            <button className="main-btn">Call to Action</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActionVideo;
