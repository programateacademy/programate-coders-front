import React, { useState, useEffect } from "react";
import TabList from "../../molecules/tabList/TabList";
import { programateStore } from "../../../store/programateStore";
import ListDrive from "../../molecules/ListDrive/ListDrive";

function PanelSchool({ programa }) {
  const {SelectedResource,setLanguage,filterItems } =
  programateStore();
    useEffect(()=>{
        setLanguage("HTML")
    },[]);
  return (
    <div className="panel-sources">
      <div className="player-container">
        <iframe
          className="iframe-container"
          src={`https://drive.google.com/file/d/${SelectedResource}/preview`}
          width="640"
          height="480"
          allow="autoplay"
        ></iframe>
      </div>
      <div className="tabSources">
        <TabList programa={programa} />
        <ListDrive  sources={filterItems} nameSource={"videos"}/>
        <ListDrive sources={filterItems}nameSource={"workbooks"}/>
      </div>
    </div>
  );
}

export default PanelSchool;
