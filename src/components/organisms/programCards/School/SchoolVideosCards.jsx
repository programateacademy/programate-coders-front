import React from "react";
import Card from "../../../atoms/card/Card";
import { programateStore } from "../../../../store/programateStore";
import programateSchoolData from "../../../../DataBases/programateSchoolData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css/bundle";

SwiperCore.use([Navigation]);

function SchoolVideosCards() {
  const { setLanguage, videos, setFilterItems, setSelectedResource } =
    programateStore();
  const handleCardClick = (clickedLanguage) => {
    setLanguage(clickedLanguage);
    const filteredVideo = videos.school.filter(
      (item) => item.language === clickedLanguage
    );
    setFilterItems(filteredVideo);
    setSelectedResource(filteredVideo[0].id);
  };

  return (
    <div className="cards-container">
      <div className="videos-cards-school">
        <Swiper slidesPerView={3} navigation>
          {programateSchoolData["videos-cards"].map((card) => (
            <SwiperSlide className="swiper-videos-cards-school" key={card.item}>
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

export default SchoolVideosCards;
