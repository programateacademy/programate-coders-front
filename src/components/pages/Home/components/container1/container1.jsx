import "./styleContainer1.scss";
import { LiaUserClockSolid } from "react-icons/lia";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { IoChatbubblesOutline } from "react-icons/io5";
import Button from "../../../../atoms/button/Button";
import { Link } from "react-router-dom";
import { programateStore } from "../../../../../store/programateStore";
function Container1() {
  const { setPrograma, setFileType, setSelectedResource, videos } =
    programateStore();
  const handleProgramClick = (programa) => {
    setPrograma(programa);
    console.log(programa);
    if (programa === "academy") {
      setFileType("videos");
    }
    if (programa === "school") {
      setFileType("videos");
      setSelectedResource(videos.school[0].id);
    }
  };
  return (
    <div className="container1">
      <div className="cont1">
        <h1>Programas</h1>
        <p>
          Personaliza tu viaje educativo{" "}
          <span>
            {" "}
            con nuestros programas diseñados para diferentes niveles de{" "}
          </span>
          experiencia y objetivos de aprendizaje.
        </p>
        <div className="cards-container1">
          <div className="cards-1">
            <h3>Prográmate</h3>
            <h2>Academy</h2>
            <img
              src={
                new URL(
                  `../../../../../assets/Imagenes/img-card1-cont1.svg`,
                  import.meta.url
                ).href
              }
              alt=""
              className="img-cards1"
            />
            <Link to={"/recursos/academy"}>
              <Button
                onClick={() => handleProgramClick("academy")}
                className="button-card button1-card1-cont1"
              >
                Ver programa
              </Button>
            </Link>
          </div>
          <div className="cards-1">
            <h3>Prográmate</h3>
            <h2>School</h2>
            <img
              src={
                new URL(
                  `../../../../../assets/Imagenes/KeepingBook.png`,
                  import.meta.url
                ).href
              }
              alt=""
              className="img-cards2"
            />
            <Link to={"/recursos/school"}>
              <Button
                onClick={() => handleProgramClick("school")}
                className="button-card button2-card2-cont1"
              >
                Ver programa
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="cont2">
        <h1>Ventajas</h1>
        <div className="cards-container2">
          <div className="cards2">
            <LiaUserClockSolid className="icon-card-cont2" />
            <p>Comunidad de Aprendizaje</p>
          </div>
          <div className="cards2">
            <HiOutlineComputerDesktop className="icon-card-cont2" />
            <p>Ejercicios prácticos</p>
          </div>
          <div className="cards2">
            <IoChatbubblesOutline className="icon-card-cont2" />
            <p>Aprendizaje a Tu Ritmo</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Container1;
