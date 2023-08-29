/*import React, { useState } from 'react';
<<<<<<< HEAD
import { Document, Page, pdfjs } from 'react-pdf';
import '../Styles/Niveles.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function Niveles() {
  const [selectedLevel, setSelectedLevel] = useState(null);
  const [pdfFile, setPdfFile] = useState(null);

  const handleLevelClick = (level) => {
    setSelectedLevel(level);
    setPdfFile(`/pdfs/Nivel${level}.pdf`);
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
          <Document file={pdfFile}>
            <Page pageNumber={1} />
          </Document>
        </div>
      )}
    </div>
  );
}

=======
import InfoData from '../DataBases/Info';
import '../Styles/Niveles.css';



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
          <Document file={pdfFile}>
            <Page pageNumber={1} />
          </Document>
        </div>
      )}
    </div>
  );
}

>>>>>>> 09a3124aaa6cd2e3d1fa9bb0095a1605303200c5
export default Niveles;*/
