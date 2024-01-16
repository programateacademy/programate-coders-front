import "./styleContainer1.scss";
import { LiaUserClockSolid } from "react-icons/lia";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { IoChatbubblesOutline } from "react-icons/io5";
import Button from "../../../../atoms/button/Button";
function Container1() {
  return (
    <div className="container1">
      <div className="cont1">
        <h1>Programas</h1>
        <p>
          Personaliza tu viaje educativo{" "}
          <span>
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
              className="img-cards1"
            />
            <a href="/recursos/academy">
              <Button className="button-card button1-card1-cont1">
                Ver programa
              </Button>
            </a>
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
              className="img-cards2"
            />
            <a href="/recursos/school">
              <Button className="button-card button2-card2-cont1">
                Ver programa
              </Button>
            </a>
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
