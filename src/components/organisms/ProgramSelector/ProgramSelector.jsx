import React from "react";
import SchoolAcademyToggle from "../../molecules/SchoolAcademyToggle/SchoolAcademyToggle";
import Button from "../../atoms/button/Button";
function ProgramSelector({setPrograma,programa}) {
  return (
    <div className="program-selector-container">
      <h1>Conoce nuestros programas</h1>
      <SchoolAcademyToggle programa={programa}setPrograma={setPrograma}></SchoolAcademyToggle>
      <p>
        Prográmate es un bootcamp de desarrollo web y tiene como objetivo
        responder a las necesidades de formación de personas talentosas a las
        que les apasiona el mundo de la tecnología
      </p>
      <Button onClick={()=>setPrograma}>Iniciar programa</Button>
    </div>
  );
}

export default ProgramSelector;
