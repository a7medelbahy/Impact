import React from "react";
import myVideo from "../../images/landing-video.mp4";

const LandingContent = () => {

  const showVideo = () => {
    let myContainer = document.createElement("div");
    myContainer.className = "video-container";
    let myPop = document.createElement("div");
    myPop.className = "pop-video";
    let videoBox = document.createElement("video");
    videoBox.src = `${myVideo}`;
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
    <div
      className="col-lg-6 order-1 order-lg-0 landing-content d-flex flex-column"
      data-aos="fade-down"
      data-aos-duration="3000"
    >
      <h1 className="text-white fw-bold display-5">Welcome to Impact</h1>
      <p>
        Sed autem laudantium dolores. Voluptatem itaque ea consequatur eveniet.
        Eum quas beatae cumque eum quaerat.
      </p>
      <div className="landing-btns mt-3 d-flex gap-3 align-items-center flex-wrap justify-content-center justify-content-lg-start">
        <button className="secondary-btn">Learn more</button>
        <button
          className="secondary-btn watch-btn d-flex align-items-center"
          onClick={showVideo}
        >
          <i className="fs-4 fa-solid fa-circle-play me-2"></i>
          Watch Now
        </button>
      </div>
    </div>
  );
};

export default LandingContent;
