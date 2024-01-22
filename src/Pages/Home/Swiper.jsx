import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import img from "../../assets/image/Header.png";
import "Swiper/css";
import SwiperButton from "./SwiperButton";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default () => {
  return (
    <>
    <Swiper
      className="slide"
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={30}
      slidesPerView={4}
      // navigation
      // pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide>
        <img src={img} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img} alt="" />
      </SwiperSlide>
      <SwiperButton/>
    </Swiper>
    </>
  );
};
