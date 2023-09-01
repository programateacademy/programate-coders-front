import React, { useState, useEffect } from 'react';
import '../Styles/Niveles.css';

function Niveles({ levelsArray, handleLevelClick }) {
  const [selectedLevel, setSelectedLevel] = useState(null);
  const handleClick = (level) => {
    setSelectedLevel(level);
  }
  return (
    <div className="Niveles">
      <div className='barra'>
        <div
          className={`nivel ${selectedLevel === 1 ? 'selected' : ''}`}
          onClick={() => { handleLevelClick(1, levelsArray[0]); handleClick(1) }}
        >
          Nivel 1
        </div>
        <div
          className={`nivel ${selectedLevel === 2 ? 'selected' : ''}`}
          onClick={() =>{ handleLevelClick(2, levelsArray[1]); handleClick(2)}}
        >
          Nivel 2
        </div>
        <div
          className={`nivel ${selectedLevel === 3 ? 'selected' : ''}`}
          onClick={() => {handleLevelClick(3, levelsArray[2]); handleClick(3)}}
        >
          Nivel 3
        </div>
      </div>
    </div>
  );
}


export default Niveles;
