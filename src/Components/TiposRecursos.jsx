// TiposRecursos.js
import React from 'react';
import { SlBookOpen } from "react-icons/sl";
import { BiBookBookmark, BiSolidBriefcase } from "react-icons/bi";

function TiposRecursos({ levelsObject, handleResourceTypeClick }) {
    return (
        <div className="TiposRecursos">
            {/* Mostrar los logos de los tipos de recursos y manejar la selección */}
            {levelsObject && levelsObject.infoType.map((infoTypeLevelSelected, index) => (
                <div key={index} className="info-type">
                    {Object.keys(infoTypeLevelSelected).map((recoursetype) => (
                        <div key={recoursetype}>
                            <div className='logo-recourse'>
                                {/* Mostrar logos de los tipos de recursos */}
                                {recoursetype === "Workbook" && (
                                    <SlBookOpen onClick={() => handleResourceTypeClick('Workbook')} />
                                )}
                                {recoursetype === "proyectos" && (
                                    <BiSolidBriefcase onClick={() => handleResourceTypeClick('proyectos')} />
                                )}
                                {recoursetype === "recursos" && (
                                    <BiBookBookmark onClick={() => handleResourceTypeClick('recursos')} />
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default TiposRecursos;

