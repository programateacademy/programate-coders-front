import React, { useState, useEffect } from 'react';
import '../Styles/Accesibilidad.css';

function AccessibilityMenu() {
  const [fontSize, setFontSize] = useState(16); // Tamaño de fuente inicial en píxeles
  const [grayscale, setGrayscale] = useState(false); // Escala de grises
  const [highContrast, setHighContrast] = useState(false); // Alto contraste

  useEffect(() => {
    // Aplicar estilos de fuente dinámicos
    document.body.style.fontSize = `${fontSize}px`;

    // Aplicar estilos de escala de grises
    if (grayscale) {
      document.body.style.filter = 'grayscale(100%)';
    } else {
      document.body.style.filter = 'none';
    }

    // Aplicar estilos de alto contraste
    if (highContrast) {
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
    } else {
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    }
  }, [fontSize, grayscale, highContrast]);

  const increaseFontSize = () => {
    setFontSize((prevSize) => prevSize + 2);
  };

  const decreaseFontSize = () => {
    setFontSize((prevSize) => prevSize - 2);
  };

  const toggleGrayscale = () => {
    setGrayscale((prevValue) => !prevValue);
  };

  const toggleHighContrast = () => {
    setHighContrast((prevValue) => !prevValue);
  };

  return (
    <div className="accessibility-menu">
      <button class="boton" onClick={increaseFontSize}>Aumentar Texto</button>
      <button onClick={decreaseFontSize}>Disminuir Texto</button>
      <button onClick={toggleGrayscale}>Escala de Grises</button>
      <button onClick={toggleHighContrast}>Alto Contraste</button>
    </div>
  );
}

export default AccessibilityMenu;
