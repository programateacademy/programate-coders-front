import React from "react";
import Card from "../../../atoms/card/Card";
import { programateStore } from "../../../../store/programateStore";
import programateAcademyData from "../../../../DataBases/programateAcademyData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css/bundle";

SwiperCore.use([Navigation]);

function AcademyWorkbooksCards() {
  const { setLanguage, workbooks, setFilterItems, setSelectedResource } =
    programateStore();
  const handleCardClick = (clickedLanguage) => {
    setLanguage(clickedLanguage);
    const filteredWorkbook = workbooks.academy.filter(
      (item) => item.language === clickedLanguage
    );
    setFilterItems(filteredWorkbook);
    setSelectedResource(filteredWorkbook[0].id);
  };

  return (
    <div className="cards-container">
      <div className="workbooks-cards-academy">
        <Swiper
          className="swiper-workbooks-cards-academy"
          slidesPerView={3}
          navigation
          breakpoints={{
            // width >= 420px
            420: {
              slidesPerView: 4,
            },
            // width >= 650px
            650: {
              slidesPerView: 6,
            },
            // width >= 800px
            800: {
              slidesPerView: 7,
            },
            // width >= 900px
            900: {
              slidesPerView: 8,
            },
          }}
        >
          {programateAcademyData["workbooks-cards"].map((card) => (
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

export default AcademyWorkbooksCards;
