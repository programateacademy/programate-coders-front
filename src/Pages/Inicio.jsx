import React from "react";
import Header from "../Components/Header";
import "../Styles/Inicio.css";
import Footer from "../Components/Footer";
import Slider from "../Components/Slider";

function Inicio() {
  return (
    <div className="Container-programate">
      <Header />

      <div className="Container-Bienvenidos">
        <h1>Bienvenido a Programate</h1>
      </div>

      <Slider />
      <div className="Container-description">
        <h1 id="quien">¿QUIENES SOMOS?</h1>
        <p>
          Prográmate es un bootcamp de desarrollo web. Tiene como objetivo
          responder <br />a las necesidades de formación de personas talentosas{" "}
          a las que les apasiona
          <br /> el mundo de la tecnología, y las demandas de las empresas que
          se encuentran <br />
          en proceso de transformación y consolidación digital en el país.
        </p>
      </div>

      <div className="Container-video">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/8oY2riIbxg4?si=1bzUky5r9v5r8s3p"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      <Footer />
    </div>
  );
}

export default Inicio;
