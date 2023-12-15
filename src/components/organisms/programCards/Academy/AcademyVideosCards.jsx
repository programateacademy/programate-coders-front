import React from "react";
import Card from "../../../atoms/card/Card";
import { programateAcademyStore } from "../../../../store/programateAcademyStore";
import programateAcademyData from "../../../../DataBases/programateAcademyData";

function AcademyVideosCards() {
  const { setLanguageYoutube, } = programateAcademyStore();

  const handleCardClick = (clickedLanguage) => {
    setLanguageYoutube(clickedLanguage);
    
  };

  return (
    <div className="program-cards">
      {programateAcademyData["videos-cards"].map((card) => (
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

export default AcademyVideosCards ;
