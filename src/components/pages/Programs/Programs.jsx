import React, { useState } from "react";
import {programateAcademyStore } from "../../../store/programateAcademyStore";
import ProgramCards from "../../organisms/programCards/ProgramCards";
import ProgramSelector from "../../organisms/ProgramSelector/ProgramSelector";
import PanelAcademy from "../../organisms/PanelSources/PanelAcademy";
import PanelSchool from "../../organisms/PanelSources/PanelSchool";
function Programs() {
  const [filterItems, setFilterItems] = useState([])
  const {fileType}= programateAcademyStore()
  const [programa ,setPrograma] = useState("academy");
  return (
    <>
    <ProgramSelector programa={programa} setPrograma={setPrograma}></ProgramSelector>
      <ProgramCards programa={programa} tipoArchivo={fileType} ></ProgramCards>
      {programa=== "academy"?
              <PanelAcademy programa={programa}></PanelAcademy>:
              <PanelSchool programa={programa}></PanelSchool>
      }

    </>
  );
}

export default Programs;
