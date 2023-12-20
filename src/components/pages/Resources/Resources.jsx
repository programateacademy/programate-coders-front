import React from "react";
import ProgramCards from "../../organisms/programCards/ProgramCards";
import PanelAcademy from "../../organisms/PanelSources/PanelAcademy";
import PanelSchool from "../../organisms/PanelSources/PanelSchool";
import { programateStore } from "../../../store/programateStore";
function Resources() {
  const { fileType, programa } = programateStore();
  return (
    <>
      <div className="resources-container">
        <div className="resources-content">
          <ProgramCards
            programa={programa}
            tipoArchivo={fileType}
          ></ProgramCards>
          {programa === "academy" ? (
            <PanelAcademy programa={programa}></PanelAcademy>
          ) : (
            <PanelSchool programa={programa}></PanelSchool>
          )}
        </div>
      </div>
    </>
  );
}

export default Resources;
