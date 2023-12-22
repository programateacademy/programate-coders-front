import React from "react";
import Button from "../../atoms/button/Button";
import { programateStore } from "../../../store/programateStore";
import PropTypes from 'prop-types';
function TabList({videosYoutube, programa}) {
  const { fileType, setSelectedResource,setFileType,videos,workbooks,setFilterItems, } = programateStore();
  console.log(programa);
  function handleTabState(state) {
    setFileType(state);
    if (state === "videos" && programa === "academy") {
      setSelectedResource(videosYoutube[0].snippet.resourceId.videoId);
    }
    if (state === "videos" && programa === "school") {
      const filteritems =(videos.school)
      setFilterItems(filteritems)
      setSelectedResource(filteritems[0].id);
    }
    if (state === "workbooks" && programa === "academy") {

      const filteritems =(workbooks.academy)
      setFilterItems(filteritems)
      setSelectedResource(filteritems[0].id);
    }
    if (state === "workbooks" && programa === "school") {
      console.log("workbooks");
      const filteritems =(workbooks.school)
      setFilterItems(filteritems)
      setSelectedResource(filteritems[0].id);
    }
    
  }
  return (
    <div className="TabList">
      <Button
        className={
          fileType === "videos"
            ? "button-tab button-tab-active"
            : "button-tab"
        }
        onClick={() => handleTabState("videos")}
      >
        Videos
      </Button>
      <Button
        className={
          fileType === "workbooks"
            ? "button-tab button-tab-active"
            : "button-tab"
        }
        onClick={() => handleTabState("workbooks")}
      >
        workbooks
      </Button>
    </div>
  );
}
TabList.propTypes = {
  /**
   * se usa en el onclick para saber que valores poder al cargar la lista
   */
  programa: PropTypes.oneOf(['school','academy']).isRequired,
  /**
   * se usa en el onclick para saber que valores poder al cargar la lista
   */
  videosYoutube: PropTypes.object,
};

export default TabList;
