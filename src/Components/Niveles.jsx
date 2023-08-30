import React, { useState } from 'react';
import '../Styles/Niveles.css';

function Niveles({ levelsArray }) {
  const [selectedLevel, setSelectedLevel] = useState(null);
  const [selectedLevelsObject, setSelectedLevelsObject] = useState(null);

  const handleLevelClick = (level, levelsObject) => {
    setSelectedLevel(level);
    setSelectedLevelsObject(levelsObject);
  };

  return (
    <div className="Niveles">
      <div className="barra">
        <div
          className={`nivel ${selectedLevel === 1 ? 'selected' : ''}`}
          onClick={() => handleLevelClick(1, levelsArray[0])}
        >
          Nivel 1
        </div>
        <div
          className={`nivel ${selectedLevel === 2 ? 'selected' : ''}`}
          onClick={() => handleLevelClick(2, levelsArray[1])}
        >
          Nivel 2
        </div>
        <div
          className={`nivel ${selectedLevel === 3 ? 'selected' : ''}`}
          onClick={() => handleLevelClick(3, levelsArray[2])}
        >
          Nivel 3
        </div>
      </div>

      <div className="resources-container">
        {selectedLevelsObject && (
          <>
            {selectedLevelsObject.infoType.map((infoTypeLevelSelected, index) => (
              <div key={index} className="info-type">
                {Object.keys(infoTypeLevelSelected).map((recoursetype) => (

                  <div key={recoursetype}>
                    <h3>{recoursetype}</h3>
                    <ul>
                      {infoTypeLevelSelected[recoursetype].map((resource, resourceIndex) => (
                        <li className='resource-list' key={resourceIndex}>
                          <p>Tipo: {resource.type}</p>
                          <a className='enlace' href={resource.link} target="_blank" rel="noopener noreferrer">
                            {resource.title}
                          </a>
                        </li>
                      ))}
                    </ul>

                  </div>
                ))}
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
}

export default Niveles