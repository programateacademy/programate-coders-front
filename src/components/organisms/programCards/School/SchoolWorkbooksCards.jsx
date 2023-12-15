import React from "react";
import Card from "../../../atoms/card/Card";
import { programateAcademyStore } from "../../../../store/programateAcademyStore";
import programateSchoolData from "../../../../DataBases/programateSchoolData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css/bundle";

SwiperCore.use([Navigation]);

function SchoolWorkbooksCards() {
  const { setLanguage, workbooks,setFilterItems,setSelectedVideo } = programateAcademyStore();
  const handleCardClick = (clickedLanguage) => {
    setLanguage(clickedLanguage);
    const filteredWorkbook =workbooks.school.filter((item) => item.language === clickedLanguage)
    setFilterItems(filteredWorkbook)
    setSelectedVideo(filteredWorkbook[0].id)
  };

  return (
    <div className="cards-container">
      <div className="program-cards">
        <Swiper slidesPerView={3} navigation>
          {programateSchoolData["workbooks-cards"].map((card) => (
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

export default SchoolWorkbooksCards;
