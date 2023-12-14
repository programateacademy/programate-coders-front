import React from 'react'
import ListItem from '../../atoms/ListItem/ListItem'
import { programateAcademyStore } from '../../../store/programateAcademyStore'
import { FaCloudDownloadAlt } from "react-icons/fa";
function ListDrive({source,nameSource}) {
    const tab ={
        videos:"videos",
        workbooks:"workbooks",
      } 
    const {setSelectedVideo,fileType}= programateAcademyStore()
    
  return (
    <ul className={fileType=== `${nameSource}` ?"list-drive list-drive-active":"list-drive"}>
      {source.map((workbook)=>(
        <>
        <ListItem className={"list-item"} key={workbook.item} setSelectedVideo={()=>setSelectedVideo(workbook.id)}>{workbook.title} <a href={`https://drive.google.com/uc?export=download&id=${workbook.id}`}><FaCloudDownloadAlt></FaCloudDownloadAlt></a></ListItem>
        </>
        
      ))}
    </ul>
  )
}

export default ListDrive