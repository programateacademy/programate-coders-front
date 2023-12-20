import React from 'react'
import ListItem from '../../atoms/ListItem/ListItem'
import { programateStore } from '../../../store/programateStore'
import { FaCloudDownloadAlt } from "react-icons/fa";
function ListDrive({sources,nameSource}) {
    const tab ={
        videos:"videos",
        workbooks:"workbooks",
      } 
    const {setSelectedResource,fileType}= programateStore()
    
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

export default ListDrive