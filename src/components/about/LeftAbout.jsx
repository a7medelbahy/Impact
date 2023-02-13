import React from "react";
import LeftAboutImg from "../../images/about.jpg";

const LeftAbout = () => {
  
  return (
    <div className="col-lg-6">
      <div
        className="left-about d-flex flex-column gap-4"
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        <h4 className="fw-bold">
          Voluptatem dignissimos provident quasi corporis
        </h4>
        <div className="about-img mb-3 rounded overflow-hidden">
          <img
            src={LeftAboutImg}
            className="img-fluid w-100 rounded d-block"
            alt="about img"
          />
        </div>
        <p>
          Ut fugiat ut sunt quia veniam. Voluptate perferendis perspiciatis quod
          nisi et. Placeat debitis quia recusandae odit et consequatur
          voluptatem. Dignissimos pariatur consectetur fugiat voluptas ea.
        </p>
        <p>
          Temporibus nihil enim deserunt sed ea. Provident sit expedita aut
          cupiditate nihil vitae quo officia vel. Blanditiis eligendi possimus
          et in cum. Quidem eos ut sint rem veniam qui. Ut ut repellendus nobis
          tempore doloribus debitis explicabo similique sit. Accusantium sed ut
          omnis beatae neque deleniti repellendus.
        </p>
      </div>
    </div>
  );
};

export default LeftAbout;
