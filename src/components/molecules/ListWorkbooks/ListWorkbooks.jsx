import React from 'react'
import ListItem from '../../atoms/ListItem/ListItem'
import { tabStore } from '../../../store/tabStore'
import { programateAcademyStore } from '../../../store/programateAcademyStore'
function ListWorkbooks({}) {
    const tab ={
        videos:"videos",
        workbooks:"workbooks",
      } 
    const {togleState}= tabStore()
    const {workbooks}= programateAcademyStore()
    
  return (
    <ul className={togleState=== tab.workbooks ?"list-workbooks list-workbooks-active":"list-workbooks"}>
      {workbooks.map((workbook)=>(
        <a href={workbook.link} target='_blank'><ListItem className={"list-item"} key={workbook.item} setSelectedVideo={()=>setSelectedVideo(video.snippet.resourceId.videoId)}>{workbook.title}</ListItem></a>
      ))}
    </ul>
  )
}

export default ListWorkbooks