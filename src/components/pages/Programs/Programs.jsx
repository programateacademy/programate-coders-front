import React, { useState } from "react";
import { programateStore } from "../../../store/programateStore";
import ProgramCards from "../../organisms/programCards/ProgramCards";
import SchoolAcademyToggle from "../../molecules/SchoolAcademyToggle/SchoolAcademyToggle";
import Button from "../../atoms/button/Button";
import { Link } from "react-router-dom";
function Programs() {
  const { fileType,programa,setPrograma } = programateStore();
  // const [programa, setPrograma] = useState("academy");
  return (
    <>
      <div className="program-container">
        <h1>Conoce nuestros programas</h1>
        <SchoolAcademyToggle
          programa={programa}
          setPrograma={setPrograma}
        ></SchoolAcademyToggle>
        {{
          academy: (
            <p>
              Prográmate es un bootcamp de desarrollo web y tiene como objetivo
              responder a las necesidades de formación de personas talentosas a
              las que les apasiona el mundo de la tecnología
            </p>
          ),
          school: (
            <p>
              Somos un Bootcamp para el aprendizaje de la programación, dirigido
              a estudiantes de 11° de colegios oficiales que quieran adquirir
              competencias en el área del Desarrollo Web
            </p>
          ),
        }[programa]}
        <Button>
        <Link to="/resources">Iniciar programa</Link></Button>
      </div>
      <ProgramCards programa={programa} tipoArchivo={fileType}></ProgramCards>
    </>
  );
}

export default Programs;
