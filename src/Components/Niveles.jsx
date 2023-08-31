import React, { useState } from 'react';
import '../Styles/Niveles.css';
import { BiSolidFilePdf, BiLinkExternal, BiVideo, BiBookBookmark, BiSolidBriefcase } from "react-icons/bi";
import { SlBookOpen } from "react-icons/sl";


function Niveles({ levelsArray }) {
  console.log(levelsArray)
  const [selectedLevel, setSelectedLevel] = useState(null);
  const [LevelsObject, setLevelsObject] = useState(null);
  const [selectedResourceType, setSelectedResourceType] = useState(null);

  const handleLevelClick = (level, levelsObject) => {
    setSelectedLevel(level);
    setLevelsObject(levelsObject);
    setSelectedResourceType(null);
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
        {LevelsObject && (
          <>
            {LevelsObject.infoType.map((infoTypeLevelSelected, index) => (
              <div key={index} className="info-type">
                {Object.keys(infoTypeLevelSelected).map((recoursetype) => (

                  <div key={recoursetype}>
                    <div className='logo-recourse'>
                    {recoursetype === "Workbook" && <SlBookOpen  onClick={() => setSelectedResourceType('Workbook')}/>}
                      {recoursetype === "proyectos" && <BiSolidBriefcase onClick={() => setSelectedResourceType('proyectos')}/>}
                      {recoursetype === "recursos" && <BiBookBookmark onClick={() => setSelectedResourceType('recursos')}/>}
                    </div>
                    <ul>
                      {infoTypeLevelSelected[recoursetype].map((resource, resourceIndex) => (
                        <li className='resource-list' key={resourceIndex}>
                          {console.log("Selected:", selectedResourceType, "Resource type:", resource.type)}
                          {selectedResourceType === recoursetype && (
                            <div className='resource-type-title'>
                              {resource.type === "PDF" && <BiSolidFilePdf style={{ color: '#F00' }} />}
                              {resource.type === "URL" && <BiLinkExternal style={{ color: '#006eff' }} />}
                              {resource.type === "VIDEO" && <BiVideo />}
                              <a className='enlace' href={resource.link} target="_blank" rel="noopener noreferrer">
                                {resource.title}
                              </a>
                            </div>
                          )}
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