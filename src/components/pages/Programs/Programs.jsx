import React from "react";
import { programateStore } from "../../../store/programateStore";
import SchoolAcademyToggle from "../../molecules/SchoolAcademyToggle/SchoolAcademyToggle";
import Button from "../../atoms/button/Button";
import { Link } from "react-router-dom";
function Programs() {
  const { programa, setPrograma } = programateStore();
  return (
    <>
      <div className="program-container">
        <h1 className="program-title">
          Conoce nuestros <br /> programas
        </h1>
        <SchoolAcademyToggle
          programa={programa}
          setPrograma={setPrograma}
        ></SchoolAcademyToggle>
        {
          {
            academy: (
              <p className="program-text">
                Prográmate es un bootcamp de desarrollo web y tiene como
                objetivo responder a las necesidades de formación de personas
                talentosas a las que les apasiona el mundo de la tecnología
              </p>
            ),
            school: (
              <p className="program-text">
                Somos un Bootcamp para el aprendizaje de la programación,
                dirigido a estudiantes de 11° de colegios oficiales que quieran
                adquirir competencias en el área del Desarrollo Web
              </p>
            ),
          }[programa]
        }
        <Button className="program-button">
          <Link to={`/recursos/${programa}`}>Iniciar programa</Link>
        </Button>
      </div>
    </>
  );
}

export default Programs;
