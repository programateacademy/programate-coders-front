import React from 'react'
import Button from "../../atoms/button/Button"



function TabList() {
  return (
    <div className='TabList'>
        <Button className={"button-tab"}>videos</Button>
        <Button className={"button-tab"}>workbooks</Button>      
    </div>
    
  )
}

export default TabList