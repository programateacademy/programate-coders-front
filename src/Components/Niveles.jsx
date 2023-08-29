import React, { useState } from 'react';
import '../Styles/Niveles.css'

function Niveles() {
  const [selectedLevel, setSelectedLevel] = useState(null);

  const handleLevelClick = (level) => {
    setSelectedLevel(level);
  };

  return (
    <div className="Niveles">
      <div className="barra">
        <div
          className={`nivel ${selectedLevel === 1 ? 'selected' : ''}`}
          onClick={() => handleLevelClick(1)}
        >
          Nivel 1
        </div>
        <div
          className={`nivel ${selectedLevel === 2 ? 'selected' : ''}`}
          onClick={() => handleLevelClick(2)}
        >
          Nivel 2
        </div>
        <div
          className={`nivel ${selectedLevel === 3 ? 'selected' : ''}`}
          onClick={() => handleLevelClick(3)}
        >
          Nivel 3
        </div>
      </div>
      {selectedLevel !== null && (
        <div className="contenido">
          Contenido del Nivel {selectedLevel} desplegado.
        </div>
      )}
    </div>
  );
}

export default Niveles;