import "./styleContainer3.scss";

function Container3() {
  return (
    <div className="container3">
      <h1 className="title-info-cont3">Conoce algunas historias</h1>
      <div className="info-cont3">
        <div className="history">
          <div className="header-history">
            <h2 className="title-history">Sebastián Londoño</h2>
            <img
              className="img-history"
              src={
                new URL(
                  `../../../../../assets/Imagenes/commits.svg`,
                  import.meta.url
                ).href
              }
            />
          </div>
          <p className="text-history">
            El bootcamp de desarrollo frontend no solo me equipó con habilidades
            técnicas, sino que también fue una oportunidad para desarrollar mis
            habilidades blandas.
          </p>
        </div>
        <div className="history">
          <div className="header-history">
            <h2 className="title-history">Andrés Lopera</h2>
            <img
              className="img-history"
              src={
                new URL(
                  `../../../../../assets/Imagenes/commits.svg`,
                  import.meta.url
                ).href
              }
            />
          </div>
          <p className="text-history">
            Aprendí habilidades clave para el desarrollo web y ahora me siento
            confiado para enfrentar nuevos proyectos. ¡Gracias por brindarme las
            herramientas para impulsar mi carrera en el mundo del desarrollo
            Frontend!"
          </p>
        </div>
      </div>
    </div>
  );
}

export default Container3;
