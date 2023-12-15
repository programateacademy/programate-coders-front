import React, { useState, useEffect } from "react";
import ListVideos from "../../molecules/ListVideos/ListVideos";
import TabList from "../../molecules/tabList/TabList";
import ReactPlayer from "react-player";
import { programateAcademyStore } from "../../../store/programateAcademyStore";
import { useVideos } from "../../../hooks/useVideos";
import ListDrive from "../../molecules/ListDrive/ListDrive";
function PanelAcademy({}) {
  const [tabTogleState,setTabTogleState]= useState("videos")
  const [filterWorkbooks, setFilterWorkbooks] = useState([])
  const { setSelectedVideo, SelectedVideo, language, playList,workbooks,fileType,languageYoutube} = programateAcademyStore();
  const { videos } = useVideos(languageYoutube, playList);
  console.log(languageYoutube);
  useEffect(() => {

      console.log("isfeching");
      videos.refetch();
  }, [languageYoutube]);

  useEffect(()=>{
    setFilterWorkbooks(workbooks.academy.filter((item) => item.language === language))
  },[language]);

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
      setSelectedVideo(videos.data[0].snippet.resourceId.videoId)
        
    }
    if (newTab === "workbooks"){
      setSelectedVideo(workbooks.academy[0].id)    
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
            url={`https://www.youtube.com/watch?v=${SelectedVideo}`}
          ></ReactPlayer>
        ) : (
          <iframe
            className="iframe-container"
            src={`https://drive.google.com/file/d/${SelectedVideo}/preview`}
            width="640"
            height="480"
            allow="autoplay"
          ></iframe>
        )}
      </div>
      <div className="tabSources">
        <TabList onTabChange={handleTabChange}tabTogleState={tabTogleState} />
        <ListVideos videos={videos.data}/>
        <ListDrive  source={filterWorkbooks} nameSource={"workbooks"}/>
      </div>
    </div>
  );
}

export default PanelAcademy;
