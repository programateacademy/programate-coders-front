import React from "react";
import Button from "../../atoms/button/Button";
import { programateAcademyStore } from "../../../store/programateAcademyStore";

const tab = {
  videos: "videos",
  workbooks: "workbooks",
};

function TabList({programa,videosYoutube}) {
  const { fileType, setSelectedVideo,setFileType,videos,workbooks,setFilterItems } = programateAcademyStore();

  function handleTabState(state) {
    setFileType(state);
    if (state === "videos" && programa === "academy") {
      console.log(videosYoutube);
      setSelectedVideo(videosYoutube[0].snippet.resourceId.videoId);
    }
    if (state === "videos" && programa === "school") {
      const filteritems =(videos.school)
      setFilterItems(filteritems)
      setSelectedVideo(filteritems[0].id);
      console.log("videos");
    }
    if (state === "workbooks" && programa === "academy") {

      const filteritems =(workbooks.academy)
      setFilterItems(filteritems)
      setSelectedVideo(filteritems[0].id);
    }
    if (state === "workbooks" && programa === "school") {
      console.log("workbooks");
      const filteritems =(workbooks.school)
      setFilterItems(filteritems)
      setSelectedVideo(filteritems[0].id);
    }
    
  }
  const data = { setFileType, setSelectedVideo, videos, workbooks };
  return (
    <div className="TabList">
      <Button
        className={
          fileType === tab.videos
            ? "button-tab button-tab-active"
            : "button-tab"
        }
        onClick={() => handleTabState(tab.videos)}
      >
        Videos
      </Button>
      <Button
        className={
          fileType === tab.workbooks
            ? "button-tab button-tab-active"
            : "button-tab"
        }
        onClick={() => handleTabState(tab.workbooks)}
      >
        workbooks
      </Button>
    </div>
  );
}

export default TabList;
