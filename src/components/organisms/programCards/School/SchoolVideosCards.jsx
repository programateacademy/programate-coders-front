import React from "react";
import Card from "../../../atoms/card/Card";
import { programateAcademyStore } from "../../../../store/programateAcademyStore";
import programateSchoolData from "../../../../DataBases/programateSchoolData";

function SchoolVideosCards() {
  const { setLanguage,videos,setFilterItems,setSelectedVideo,} = programateAcademyStore();
  const handleCardClick = (clickedLanguage) => {   
    setLanguage(clickedLanguage);
    const filteredVideo =videos.school.filter((item) => item.language === clickedLanguage)
    setFilterItems(filteredVideo)
    setSelectedVideo(filteredVideo[0].id)
  };

  return (
    <div className="program-cards">
      {programateSchoolData["videos-cards"].map((card) => (
        <Card
          key={card.item}
          title={card.title}
          image={card.img}
          onclick={() => handleCardClick(card.language)}
        />
      ))}
    </div>
  );
}

export default SchoolVideosCards;
