import React, { useState, useEffect } from "react";
import ListVideos from "../../molecules/ListVideos/ListVideos";
import TabList from "../../molecules/tabList/TabList";
import ReactPlayer from "react-player";
import { programateAcademyStore } from "../../../store/programateAcademyStore";
import ListDrive from "../../molecules/ListDrive/ListDrive";

function PanelSchool({ programa }) {
  const [tabTogleState, setTabTogleState] = useState("videos");
  const [filtervideos, setFiltervideos] = useState([])
  const [filterWorkbooks, setFilterWorkbooks] = useState([])
  const { setSelectedVideo, SelectedVideo, language,setLanguage, videos, workbooks, fileType, } =
    programateAcademyStore();
    useEffect(()=>{
        setLanguage("HTML")
    },[]);
    useEffect(()=>{
      setFiltervideos(videos.school.filter((item) => item.language === language))
      setFilterWorkbooks(workbooks.school.filter((item) => item.language === language))
    },[language]);
  const handleTabChange = (newTab) => {
    setTabTogleState(newTab);
    if (newTab === "videos") {
        setSelectedVideo(videos.school[0].id);
    }
    if (newTab === "workbooks") {
        setSelectedVideo(workbooks.school[0].id)   
    }
  };
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
