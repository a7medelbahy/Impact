import React from "react";
import "./testimonials.css";
import { TestimonialsData } from "../../data";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import SectionHead from "../SectionHead";
import TestiBox from "./TestiBox";

const Testimonials = () => {
  return (
    <div className="testimonials section-padding" id="testimonials">
      <div className="container">
        <SectionHead
          sectionName="Testimonials"
          desc="Voluptatem quibusdam ut ullam perferendis repellat non ut consequuntur"
        />
        <div className="row justify-content-center">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
            className="py-5"
          >
            {TestimonialsData.map((testiItem) => {
              return (
                <SwiperSlide key={testiItem.id}>
                  <TestiBox testiItem={testiItem} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
