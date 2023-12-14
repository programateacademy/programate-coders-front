import React from "react";
import Button from "../../atoms/button/Button";
import { programateAcademyStore } from "../../../store/programateAcademyStore";

const tab = {
  videos: "videos",
  workbooks: "workbooks",
};
function handleTabState({setFileType, setSelectedVideo, videos, workbooks },state) {
  setFileType(state);
  if (state === "videos") {
    setSelectedVideo(videos.school[0].id);
  }
  if (state === "workbooks") {
    setSelectedVideo(workbooks.school[0].id);
  }
}
function TabList() {
  const { fileType, setSelectedVideo,setFileType,videos,workbooks } = programateAcademyStore();
  const data = { setFileType, setSelectedVideo, videos, workbooks };
  return (
    <div className="TabList">
      <Button
        className={
          fileType === tab.videos
            ? "button-tab button-tab-active"
            : "button-tab"
        }
        onClick={() => handleTabState(data,tab.videos)}
      >
        Videos
      </Button>
      <Button
        className={
          fileType === tab.workbooks
            ? "button-tab button-tab-active"
            : "button-tab"
        }
        onClick={() => handleTabState(data,tab.workbooks)}
      >
        workbooks
      </Button>
    </div>
  );
}

export default TabList;
