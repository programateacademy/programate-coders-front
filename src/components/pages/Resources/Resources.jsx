import React from 'react'
import ProgramCards from '../../organisms/programCards/ProgramCards';
import PanelAcademy from "../../organisms/PanelSources/PanelAcademy";
import PanelSchool from "../../organisms/PanelSources/PanelSchool";
import { programateStore } from '../../../store/programateStore';
function Resources() {
  const {fileType,programa} = programateStore();
  return (
    <>
    <ProgramCards programa={programa} tipoArchivo={fileType} ></ProgramCards>
        {programa=== "academy"?
              <PanelAcademy programa={programa}></PanelAcademy>:
              <PanelSchool programa={programa}></PanelSchool>
      }
    </>
  )
}

export default Resources