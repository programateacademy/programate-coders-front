import React from 'react'
import ListItem from '../../atoms/ListItem/ListItem'
import { tabStore } from '../../../store/tabStore'
import { programateAcademyStore } from '../../../store/programateAcademyStore'
import { FaCloudDownloadAlt } from "react-icons/fa";
function ListWorkbooks({}) {
    const tab ={
        videos:"videos",
        workbooks:"workbooks",
      } 
    const {tabTogleState}= tabStore()
    const {workbooks}= programateAcademyStore()
    
  return (
    <ul className={tabTogleState=== tab.workbooks ?"list-workbooks list-workbooks-active":"list-workbooks"}>
      {workbooks.map((workbook)=>(
        <>
        <ListItem className={"list-item"} key={workbook.item} setSelectedVideo={()=>setSelectedVideo(video.snippet.resourceId.videoId)}>{workbook.title}</ListItem><a href={"https://drive.google.com/uc?export=download&id=1lnIVczki4x7kxlJSIoxpthz9M-63Mdi-"} target='_blank'><FaCloudDownloadAlt></FaCloudDownloadAlt></a>
        </>
        
      ))}
    </ul>
  )
}

export default ListWorkbooks