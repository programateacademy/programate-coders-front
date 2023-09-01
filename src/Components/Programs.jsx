import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../Styles/Programs.css";
import { EffectFlip, Pagination, Navigation } from "swiper/modules";

function Programs({ onSelectProgram }) {
  const [programInfo, setProgramInfo] = useState([
    {
      title: "Programate Academy",
      description:
        "Prográmate es un bootcamp de desarrollo web y tiene como objetivo responder a las necesidades de formación de personas talentosas a las que les apasiona el mundo de la tecnología",
      image: "./Imagenes/IMG_20230601_145350.jpg",
    },
    {
      title: "Programate School",
      description:
        "Somos un Bootcamp para el aprendizaje de la programación, dirigido a estudiantes de 11° de colegios oficiales que quieran adquirir competencias en el área del Desarrollo Web",
      image: "./Imagenes/IMG_20230602_093550.jpg",
    },
  ]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.realIndex;
    setSelectedSlideIndex(currentIndex);
  };

  const [selectedSlideIndex, setSelectedSlideIndex] = useState(0);

  return (
    <div className="swiper_content">
      <div className="info-container">
        <h1 className="title-programs">
          {programInfo[selectedSlideIndex].title}
        </h1>
        <p className="info-programs">
          {programInfo[selectedSlideIndex].description}
        </p>
        <button
          onClick={() => onSelectProgram(programInfo[selectedSlideIndex].title)}
        >
          Ingresar
        </button>
      </div>
      <Swiper
        effect={"flip"}
        grabCursor={true}
        pagination={true}
        navigation={true}
        onSlideChange={(swiper) => handleSlideChange(swiper)}
        modules={[EffectFlip, Pagination, Navigation]}
        className="mySwiper"
      >
        {programInfo.map((program, index) => (
          <SwiperSlide key={index}>
            <img src={program.image} alt={program.title} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Programs;
