import React from "react";
import Card from "../../../atoms/card/Card";
import { programateAcademyStore } from "../../../../store/programateAcademyStore";
import programateSchoolData from "../../../../DataBases/programateSchoolData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css/bundle";

SwiperCore.use([Navigation]);

function SchoolVideosCards() {
  const { setLanguage,videos,setFilterItems,setSelectedVideo,} = programateAcademyStore();
  const handleCardClick = (clickedLanguage) => {   
    setLanguage(clickedLanguage);
    const filteredVideo =videos.school.filter((item) => item.language === clickedLanguage)
    setFilterItems(filteredVideo)
    setSelectedVideo(filteredVideo[0].id)
  };

  return (
    <div className="cards-container">
      <div className="program-cards">
        <Swiper slidesPerView={2} navigation>
          {programateSchoolData["videos-cards"].map((card) => (
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

export default SchoolVideosCards;
