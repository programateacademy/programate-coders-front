// Recursos.js
import React from 'react';
import { BiSolidFilePdf, BiLinkExternal, BiVideo } from "react-icons/bi";
function Documentos({ selectedResourceType, infoTypeLevelSelected }) {
    return (
        <div className="Recursos">
            {/* Mostrar la información detallada de los recursos */}
            <ul>
                {infoTypeLevelSelected[selectedResourceType].map((resource, resourceIndex) => (
                    <li className='resource-list' key={resourceIndex}>
                        {selectedResourceType === 'Workbook' && (
                            <div className='resource-type-title'>
                                {resource.type === "PDF" && <BiSolidFilePdf style={{ color: '#F00' }} />}
                                {resource.type === "URL" && <BiLinkExternal style={{ color: '#006eff' }} />}
                                {resource.type === "VIDEO" && <BiVideo />}
                                <a className='enlace' href={resource.link} target="_blank" rel="noopener noreferrer">
                                    {resource.title}
                                </a>
                            </div>
                        )}
                        {selectedResourceType === 'proyectos' && (
                            <div className='resource-type-title'>
                                {resource.type === "PDF" && <BiSolidFilePdf style={{ color: '#F00' }} />}
                                {resource.type === "URL" && <BiLinkExternal style={{ color: '#006eff' }} />}
                                {resource.type === "VIDEO" && <BiVideo />}
                                <a className='enlace' href={resource.link} target="_blank" rel="noopener noreferrer">
                                    {resource.title}
                                </a>
                            </div>
                        )}
                        {selectedResourceType === 'recursos' && (
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
    );
}

export default Documentos;
