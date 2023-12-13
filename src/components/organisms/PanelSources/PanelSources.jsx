import React, { useState, useEffect } from "react";
import ListVideos from "../../molecules/ListVideos/ListVideos";
import TabList from "../../molecules/tabList/TabList";
import ReactPlayer from "react-player";
import { programateAcademyStore } from "../../../store/programateAcademyStore";
import { useVideos } from "../../../hooks/useVideos";
import ListWorkbooks from "../../molecules/ListWorkbooks/ListWorkbooks";
import { tabStore } from "../../../store/tabStore";

function PanelSources({programa}) {
  const { setSelectedVideo, SelectedVideo, language, playList } =
    programateAcademyStore();
  const { tabTogleState } = tabStore();

  const { videos } = useVideos(language, playList, setSelectedVideo);

  console.log();
  useEffect(() => {
    // Llama a videos.fetch() para iniciar la consulta
    videos.refetch();
  }, [language]);

  if (videos.isFetching) {
    return <p>Loading...</p>;
  }

  if (videos.isError) {
    return <p>{`${error}`}</p>;
  }

  if (!videos.data || videos.data.length === 0) {
    return <p>No videos found in the playlist</p>;
  }
  console.log(SelectedVideo);
  return (
    <div className="panel-sources">
      <div className="player-container">
        {tabTogleState === "videos" && programa === "academy" ? (
          <ReactPlayer
            controls={true}
            width={"100%"}
            height={"100%"}
            url={`https://www.youtube.com/watch?v=${SelectedVideo}`}
          ></ReactPlayer>
        ) : (
          <iframe
            className="iframe-container"
            src="https://drive.google.com/file/d/1lnIVczki4x7kxlJSIoxpthz9M-63Mdi-/preview"
            width="640"
            height="480"
            allow="autoplay"
          ></iframe>
        )}
      </div>
      <div className="tabSources">
        <TabList />
        <ListVideos />
        <ListWorkbooks />
      </div>
    </div>
  );
}

export default PanelSources;
