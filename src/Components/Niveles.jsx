<<<<<<< HEAD
/*import React, { useState } from 'react';
import InfoData from '../DataBases/Info';
import '../Styles/Niveles.css';
=======
// import React, { useState } from 'react';
// import { Document, Page, pdfjs } from 'react-pdf';
// import '../Styles/Niveles.css';
>>>>>>> 0666d8470e3fe44d1367728428bdc86dfdc062fb

// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

// function Niveles() {
//   const [selectedLevel, setSelectedLevel] = useState(null);
//   const [pdfFile, setPdfFile] = useState(null);

//   const handleLevelClick = (level) => {
//     setSelectedLevel(level);
//     setPdfFile(`/pdfs/Nivel${level}.pdf`);
//   };

//   return (
//     <div className="Niveles">
//       <div className="barra">
//         <div
//           className={`nivel ${selectedLevel === 1 ? 'selected' : ''}`}
//           onClick={() => handleLevelClick(1)}
//         >
//           Nivel 1
//         </div>
//         <div
//           className={`nivel ${selectedLevel === 2 ? 'selected' : ''}`}
//           onClick={() => handleLevelClick(2)}
//         >
//           Nivel 2
//         </div>
//         <div
//           className={`nivel ${selectedLevel === 3 ? 'selected' : ''}`}
//           onClick={() => handleLevelClick(3)}
//         >
//           Nivel 3
//         </div>
//       </div>
//       {selectedLevel !== null && (
//         <div className="contenido">
//           Contenido del Nivel {selectedLevel} desplegado.
//           <Document file={pdfFile}>
//             <Page pageNumber={1} />
//           </Document>
//         </div>
//       )}
//     </div>
//   );
// }

<<<<<<< HEAD
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

export default Niveles;*/
=======
//export default Niveles;
>>>>>>> 0666d8470e3fe44d1367728428bdc86dfdc062fb
