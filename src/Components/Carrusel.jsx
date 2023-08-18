import "../Styles/Carrusel.css";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

function Carrusel() {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="./imagenes/html.svg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./imagenes/css3.svg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./imagenes/js.svg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./imagenes/python.svg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./imagenes/github.svg" alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Carrusel;
