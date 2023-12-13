import React from 'react'
import Button from "../../atoms/button/Button";
import {tabStore} from "../../../store/tabStore";

const tab ={
  videos:"videos",
  workbooks:"workbooks",
} 
function TabList() {
  const {tabTogleState,setTabTogleState}= tabStore()
  console.log(tabTogleState);
  return (
    <div className='TabList'>
        <Button className={tabTogleState === tab.videos?"button-tab button-tab-active":"button-tab"}onClick={()=>setTabTogleState(tab.videos)}>Videos</Button>
        <Button className={tabTogleState === tab.workbooks?"button-tab button-tab-active":"button-tab"}onClick={()=>setTabTogleState(tab.workbooks)}>workbooks</Button>      
    </div>
    
  )
}

export default TabList