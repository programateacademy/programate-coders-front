import React from "react";
import Card from "../../../atoms/card/Card";
import { programateStore } from "../../../../store/programateStore";
import programateAcademyData from "../../../../DataBases/programateAcademyData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css/bundle";

SwiperCore.use([Navigation]);

function AcademyVideosCards() {
  const { setLanguageYoutube } = programateStore();

  const handleCardClick = (clickedLanguage) => {
    setLanguageYoutube(clickedLanguage);
  };

  return (
    <div className="cards-container">
      <div className="videos-cards-academy">
        <Swiper
          className="swiper-videos-cards-academy"
          slidesPerView={3}
          navigation
          breakpoints={{
            // width >= 440px
            440: {
              slidesPerView: 4,
            },
          }}
        >
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
