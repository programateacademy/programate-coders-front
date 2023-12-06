import React from 'react'
import Button from "../../atoms/button/Button";
import {tabStore} from "../../../store/tabStore";

const tab ={
  videos:"videos",
  workbooks:"workbooks",
} 
function TabList() {
  const {togleState,setTogleState}= tabStore()
  console.log(togleState);
  return (
    <div className='TabList'>
        <Button className={togleState === tab.videos?"button-tab button-tab-active":"button-tab"}onClick={()=>setTogleState(tab.videos)}>videos</Button>
        <Button className={togleState === tab.workbooks?"button-tab button-tab-active":"button-tab"}onClick={()=>setTogleState(tab.workbooks)}>workbooks</Button>      
    </div>
    
  )
}

export default TabList