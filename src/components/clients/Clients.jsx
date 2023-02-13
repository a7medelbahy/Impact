import React from "react";
import { ClientsData } from "../../data";
import "./clients.css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Clients = () => {
  
  return (
    <div className="clients d-none d-md-block py-3">
      <div className="container">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={40}
          slidesPerView={5}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          {ClientsData.map((clientItem) => {
            return (
              <SwiperSlide key={clientItem.id}>
                <img
                  src={clientItem.img}
                  className="swiper-image img-fluid w-100"
                  alt=""
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Clients;
