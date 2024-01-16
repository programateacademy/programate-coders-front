import React from "react";
import Button from "../../atoms/button/Button";
import PropTypes from 'prop-types';
/**
 * Componente para seleccionar el programa al que se quiere acceder
 */
function ChooseProgram({ programa, setPrograma }) {
 

  return (
    <section className="ChooseProgram">
      <div
        className={
          programa === "academy"
            ? "programate programate-academy programate-active"
            : "programate"
        }
      >
        <p>Prográmate Academy</p>
        <Button
          className={"button-show"}
          onClick={() => setPrograma("academy")}
        >
          ver más
        </Button>
      </div>
      <div
        className={
          programa === "school"
            ? "programate programate-school  programate-active"
            : "programate"
        }
      >
        <p>Prográmate School</p>
        <Button className={"button-show"} onClick={() => setPrograma("school")}>
          ver más
        </Button>
      </div>
    </section>
  );
}
ChooseProgram.propTypes = {
  /**
   * Define cual es el activo programa para variar el aspecto del componente 
   */
  programa: PropTypes.oneOf(['school','academy']).isRequired,
  /**
   * Funcion que permite cambiar de programa cuando se hace click en mostrar mas
   */
  setPrograma: PropTypes.func.isRequired,
};


export default ChooseProgram;
