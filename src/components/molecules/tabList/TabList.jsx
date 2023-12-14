import React from 'react'
import Button from "../../atoms/button/Button";
import { programateAcademyStore } from '../../../store/programateAcademyStore';

const tab ={
  videos:"videos",
  workbooks:"workbooks",
} 
function TabList() {
  const {fileType,setFileType}= programateAcademyStore()
  return (
    <div className='TabList'>
        <Button className={fileType === tab.videos?"button-tab button-tab-active":"button-tab"}onClick={()=>setFileType(tab.videos)}>Videos</Button>
        <Button className={fileType === tab.workbooks?"button-tab button-tab-active":"button-tab"}onClick={()=>setFileType(tab.workbooks)}>workbooks</Button>      
    </div>
    
  )
}

export default TabList