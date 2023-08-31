import React from 'react'
import Header from "../Components/Header"
import '../Styles/Inicio.css'
import Footer from "../Components/Footer"
import Slider from "../Components/Slider"
import AccessibilityMenu from '../Components/Accesibilidad'

function Inicio() {
  return (
    <div className='Container-programate'>
      <Header />
      <AccessibilityMenu />
      <div className='Container-Bienvenidos'>
      <h1>Bienvenido a Programate
      </h1>
      </div>
  
      <Slider />
      <div className='Container-description'>
        <h1>QUIENES SOMOS</h1>
        <p>Prográmate es un bootcamp de desarrollo web. <br />
          Tiene como objetivo responder a las necesidades de formación de personas talentosas <br /> a las que les apasiona el mundo de la tecnología, y las demandas de las empresas <br /> que se encuentran en proceso de transformación y consolidación digital en el país.</p>
        
      </div>

      <div className='Container-video'>
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/8oY2riIbxg4?si=1bzUky5r9v5r8s3p" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
      <Footer />
    </div>
  )
}

export default Inicio


/*import React, { useState } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Header from '../Components/Header';
import "../Styles/Inicio.css"; // Se Importa el archivo de estilos CSS para las transiciones

function Inicio() {
  const [showHomePreview, setShowHomePreview] = useState(true);

  const toggleHomePreview = () => {
    setShowHomePreview(!showHomePreview);
  };

  return (
    <div>
      <button onClick={toggleHomePreview}>Toggle Preview</button>

      <TransitionGroup>
        {showHomePreview && (
          <CSSTransition classNames="fade" timeout={300}>
            <div>
              <Header />
              <h1>home preview</h1>
            </div>
          </CSSTransition>
        )}
      </TransitionGroup>
    </div>
  );
}

export default Inicio;*/
