import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "../Styles/Slider.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

export default function Slider() {
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
        className="oneSwiper"
      >
        <SwiperSlide>
          <img src="./imagenes/1.jpg" width={300} height={300} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./imagenes/2.jpg" width={300} height={300} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./Imagenes/8.jpg" width={300} height={300}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="./imagenes/4.jpg" width={300} height={300} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./Imagenes/9.jpg" width={300} height={300}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="./Imagenes/6.jpg" width={300} height={300}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="./Imagenes/7.jpg"width={300} height={300} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
