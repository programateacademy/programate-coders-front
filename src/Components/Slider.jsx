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
          <img src="./Imagenes/1.jpg" width={300} height={300} />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="./Imagenes/IMG_20230607_150046.jpg"
            width={300}
            height={300}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="./Imagenes/IMG_20230531_144903.jpg"
            width={300}
            height={300}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="./Imagenes/photo_4915742842714959059_y.jpg"
            width={300}
            height={300}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="./Imagenes/photo_4965344350569606176_y.jpg"
            width={300}
            height={300}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="./Imagenes/photo_4965344350569606182_y.jpg"
            width={300}
            height={300}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="./Imagenes/photo_4965344350569606203_y.jpg"
            width={300}
            height={300}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="./Imagenes/photo_4977039447732365910_y.jpg"
            width={300}
            height={300}
          />
        </SwiperSlide>

        <SwiperSlide>
          <img src="./Imagenes/8.jpg" width={300} height={300} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./Imagenes/4.jpg" width={300} height={300} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./Imagenes/9.jpg" width={300} height={300} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./Imagenes/6.jpg" width={300} height={300} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./Imagenes/7.jpg" width={300} height={300} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
