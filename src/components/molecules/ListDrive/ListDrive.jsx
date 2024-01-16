import React from 'react'
import ListItem from '../../atoms/ListItem/ListItem'
import { programateStore } from '../../../store/programateStore'
import { FaCloudDownloadAlt } from "react-icons/fa";
import PropTypes from 'prop-types';
/**
 * Componente de lista que carga los recursos almacenados en drive con se respectivo nombre y link de descarga
 */
function ListDrive({sources,nameSource}) {
    const tab ={
        videos:"videos",
        workbooks:"workbooks",
      } 
    const {setSelectedResource,fileType}= programateStore()
    console.log(typeof(sources));
    
  return (
    <ul className={fileType=== `${nameSource}` ?"list-drive list-drive-active":"list-drive"}>
      {sources.map((workbook)=>(
        <>
        <ListItem className={"list-item"} key={workbook.item} setSelectedResource={()=>setSelectedResource(workbook.id)}> <p>{workbook.title}</p> <a className='download-link' href={`https://drive.google.com/uc?export=download&id=${workbook.id}`}><FaCloudDownloadAlt className='download-icon'></FaCloudDownloadAlt></a></ListItem>
        </>
        
      ))}
    </ul>
  )
}
ListDrive.propTypes = {
    /**
   * Nombre del tipo de recurso que se quiere mostrar para poder saber que lista mostrar
   */
  nameSource: PropTypes.oneOf(['videos', 'workbooks']),
  /**
   * Contiene la informacion de los recursos de drive que se quieren monstrar en la lista
   */
  sources: PropTypes.object.isRequired,
};
export default ListDrive