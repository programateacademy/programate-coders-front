import React from "react";
import Card from "../../../atoms/card/Card";
import { programateStore } from "../../../../store/programateStore";
import programateSchoolData from "../../../../DataBases/programateSchoolData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css/bundle";

SwiperCore.use([Navigation]);

function SchoolWorkbooksCards() {
  const { setLanguage, workbooks, setFilterItems, setSelectedResource } =
    programateStore();
  const handleCardClick = (clickedLanguage) => {
    setLanguage(clickedLanguage);
    const filteredWorkbook = workbooks.school.filter(
      (item) => item.language === clickedLanguage
    );
    setFilterItems(filteredWorkbook);
    setSelectedResource(filteredWorkbook[0].id);
  };

  return (
    <div className="cards-container">
      <div className="workbooks-cards-school">
        <Swiper
          className="swiper-workbooks-cards-school"
          slidesPerView={3}
          navigation
          breakpoints={{
            // width >= 640px
            420: {
              slidesPerView: 4,
            },
            // width >= 800px
            650: {
              slidesPerView: 6,
            },
          }}
        >
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
