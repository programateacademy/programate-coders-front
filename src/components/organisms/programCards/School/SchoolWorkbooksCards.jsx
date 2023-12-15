import React from "react";
import Card from "../../../atoms/card/Card";
import { programateAcademyStore } from "../../../../store/programateAcademyStore";
import programateSchoolData from "../../../../DataBases/programateSchoolData";

function SchoolWorkbooksCards() {
  const { setLanguage, workbooks,setFilterItems,setSelectedVideo } = programateAcademyStore();
  const handleCardClick = (clickedLanguage) => {
    setLanguage(clickedLanguage);
    const filteredWorkbook =workbooks.school.filter((item) => item.language === clickedLanguage)
    setFilterItems(filteredWorkbook)
    setSelectedVideo(filteredWorkbook[0].id)
  };

  return (
    <div className="program-cards">
      {programateSchoolData["workbooks-cards"].map((card) => (
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

export default SchoolWorkbooksCards;
