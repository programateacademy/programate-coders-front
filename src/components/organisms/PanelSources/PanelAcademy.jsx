import React, { useState, useEffect } from "react";
import ListVideos from "../../molecules/ListVideos/ListVideos";
import TabList from "../../molecules/tabList/TabList";
import ReactPlayer from "react-player";
import { programateStore } from "../../../store/programateStore";
import { useVideos } from "../../../hooks/useVideos";
import ListDrive from "../../molecules/ListDrive/ListDrive";
function PanelAcademy({programa}) {
  const [tabTogleState,setTabTogleState]= useState("videos")
  const [filterWorkbooks, setFilterWorkbooks] = useState([])
  const { setSelectedResource, SelectedResource, language, playList,workbooks,fileType,languageYoutube,filterItems} = programateStore();
  const { videos } = useVideos(languageYoutube, playList);
  console.log(languageYoutube);
  useEffect(() => {

      console.log("isfeching");
      videos.refetch();
  }, [languageYoutube]);

  if (videos.isFetching) {
    return <p>Loading...</p>;
  }

  if (videos.isError) {
    return <p>{`${videos.error}`}</p>;
  }

  if (!videos.data || videos.data.length === 0) {
    return <p>No videos found in the playlist</p>;
  }
  const handleTabChange = (newTab) =>{
    setTabTogleState(newTab)
    if (newTab === "videos"){
      console.log(videos.data[0].snippet.resourceId.videoId);
      setSelectedResource(videos.data[0].snippet.resourceId.videoId)
        
    }
    if (newTab === "workbooks"){
      setSelectedResource(workbooks.academy[0].id)    
    }


  }
  console.log(videos.data);
  return (
    <div className="panel-sources">
      <div className="player-container">
        {fileType === "videos"? (
          <ReactPlayer
            controls={true}
            width={"100%"}
            height={"100%"}
            url={`https://www.youtube.com/watch?v=${SelectedResource}`}
          ></ReactPlayer>
        ) : (
          <iframe
            className="iframe-container"
            src={`https://drive.google.com/file/d/${SelectedResource}/preview`}
            width="640"
            height="480"
            allow="autoplay"
          ></iframe>
        )}
      </div>
      <div className="tabSources">
        <TabList programa={programa} videosYoutube={videos.data}/>
        <ListVideos videos={videos.data}/>
        <ListDrive  sources={filterItems} nameSource={"workbooks"}/>
      </div>
    </div>
  );
}

export default PanelAcademy;
