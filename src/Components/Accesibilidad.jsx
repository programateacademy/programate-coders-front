import React, { useState, useEffect } from 'react';
import '../Styles/Accesibilidad.css';

function AccessibilityMenu() {
  const [fontSize, setFontSize] = useState(16);
  const [grayscale, setGrayscale] = useState(false);
  const [highContrast, setHighContrast] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);

  useEffect(() => {
    document.body.style.fontSize = `${fontSize}px`;

    if (grayscale) {
      document.body.style.filter = 'grayscale(100%)';
    } else {
      document.body.style.filter = 'none';
    }

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

  const toggleMenu = () => {
    setMenuVisible((prevValue) => !prevValue);
  };

  return (
    <div className="accessibility-menu">
      <button onClick={toggleMenu} className="menu-button">
        Accesibilidad
      </button>
      {menuVisible && (
        <div className="menu-content">
          <button onClick={increaseFontSize}>Aumentar Texto</button>
          <button onClick={decreaseFontSize}>Disminuir Texto</button>
          <button onClick={toggleGrayscale}>Escala de Grises</button>
          <button onClick={toggleHighContrast}>Alto Contraste</button>
        </div>
      )}
    </div>
  );
}

export default AccessibilityMenu;



