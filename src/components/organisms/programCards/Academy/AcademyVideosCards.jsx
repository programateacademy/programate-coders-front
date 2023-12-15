import React from "react";
import Card from "../../../atoms/card/Card";
import { programateAcademyStore } from "../../../../store/programateAcademyStore";
import programateAcademyData from "../../../../DataBases/programateAcademyData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css/bundle";

SwiperCore.use([Navigation]);

function AcademyVideosCards() {
  const { setLanguage, language } = programateAcademyStore();

  const handleCardClick = (clickedLanguage) => {
    setLanguage(clickedLanguage);
  };

  return (
    <div className="cards-container">
      <div className="program-cards">
        <Swiper slidesPerView={3} navigation>
          {programateAcademyData["videos-cards"].map((card) => (
            <SwiperSlide key={card.item}>
              <Card
                title={card.title}
                image={card.img}
                onclick={() => handleCardClick(card.language)}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default AcademyVideosCards;
