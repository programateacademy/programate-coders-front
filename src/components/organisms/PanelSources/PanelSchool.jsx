import React, { useState, useEffect } from "react";
import TabList from "../../molecules/tabList/TabList";
import { programateAcademyStore } from "../../../store/programateAcademyStore";
import ListDrive from "../../molecules/ListDrive/ListDrive";

function PanelSchool({ programa }) {
  const [tabTogleState, setTabTogleState] = useState("videos");
  const [filtervideos, setFiltervideos] = useState([])
  const [filterWorkbooks, setFilterWorkbooks] = useState([])
  const { setSelectedVideo, SelectedVideo, language,setLanguage, videos, workbooks,  } =
    programateAcademyStore();
    useEffect(()=>{
        setLanguage("HTML")
    },[]);
    useEffect(()=>{
      setFiltervideos(videos.school.filter((item) => item.language === language))
      setFilterWorkbooks(workbooks.school.filter((item) => item.language === language))
    },[language]);
    console.log(SelectedVideo);
  return (
    <div className="panel-sources">
      <div className="player-container">
        <iframe
          className="iframe-container"
          src={`https://drive.google.com/file/d/${SelectedVideo}/preview`}
          width="640"
          height="480"
          allow="autoplay"
        ></iframe>
      </div>
      <div className="tabSources">
        <TabList />
        <ListDrive tabTogleState={tabTogleState} source={filtervideos} nameSource={"videos"}/>
        <ListDrive tabTogleState={tabTogleState} source={filterWorkbooks}nameSource={"workbooks"}/>
      </div>
    </div>
  );
}

export default PanelSchool;
