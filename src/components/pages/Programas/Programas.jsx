import React, { useState } from "react";
import ProgramCards from "../../organisms/programCards/Academy/ProgramCardsAcademy";
import PanelSources from "../../organisms/PanelSources/PanelSources";
import ProgramSelector from "../../organisms/ProgramSelector/ProgramSelector";
function Programas() {
  const [programa ,setPrograma] = useState("academy");
  return (
    <>

    <ProgramSelector programa={programa} setPrograma={setPrograma}></ProgramSelector>
      <ProgramCards></ProgramCards>
      <PanelSources programa={programa}></PanelSources>
    </>
  );
}

export default Programas;
