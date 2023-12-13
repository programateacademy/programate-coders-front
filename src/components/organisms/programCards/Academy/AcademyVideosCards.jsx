import React from "react";
import Card from "../../../atoms/card/Card";
import { programateAcademyStore } from "../../../../store/programateAcademyStore";
import programateAcademyData from "../../../../DataBases/programateAcademyData";

function ProgramCards() {
  const { setLanguage, language } = programateAcademyStore();

  const handleCardClick = (clickedLanguage) => {
    setLanguage(clickedLanguage);
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

export default ProgramCards;
