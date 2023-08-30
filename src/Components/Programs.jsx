import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../Styles/Programs.css";
import { EffectFlip, Pagination, Navigation } from "swiper/modules";

function Programs({ onSelectProgram }) {
  return (
    <div className="swiper_content">
      <h1>Bienvenido a Programate</h1>
      <Swiper
        effect={"flip"}
        grabCursor={true}
        pagination={true}
        navigation={true}
        modules={[EffectFlip, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="./imagenes/academy.svg" />
          <button onClick={() => onSelectProgram("Programate Academy")}>
            Ingresar
          </button>
        </SwiperSlide>
        <SwiperSlide>
          <img src="./imagenes/school.svg" />
          <button onClick={() => onSelectProgram("Programate School")}>
            Ingresar
          </button>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
export default Programs;
