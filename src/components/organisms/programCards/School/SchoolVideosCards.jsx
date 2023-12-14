import React from "react";
import Card from "../../../atoms/card/Card";
import { programateAcademyStore } from "../../../../store/programateAcademyStore";
import programateSchoolData from "../../../../DataBases/programateSchoolData";

function SchoolVideosCards() {
  const { setLanguage, language } = programateAcademyStore();

  const handleCardClick = (clickedLanguage) => {
    setLanguage(clickedLanguage);
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
