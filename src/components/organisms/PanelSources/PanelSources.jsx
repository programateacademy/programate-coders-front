import React, { useState, useEffect } from "react";
import ListVideos from "../../molecules/ListVideos/ListVideos";
import TabList from "../../molecules/tabList/TabList";
import ReactPlayer from "react-player";
import { programateAcademyStore } from "../../../store/programateAcademyStore";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import ListWorkbooks from "../../molecules/ListWorkbooks/ListWorkbooks";

//solicitud a la Api de Youtube para traer las listas de reproducción
const fetchData = async (language, playList, setSelectedVideo) => {
  const apiKey = "AIzaSyCOgAm7ywQ9rYOF20uRC3HlKT3BjDKaXLQ";
  const extractID = (playlistLink) => {
    const urlParts = playlistLink.split("?");
    const params = new URLSearchParams(urlParts[1]);
    return params.get("list");
  };
  const filterLinks = playList.find((item) => item.language === language);
  const playlistId = extractID(filterLinks.link);

  const response = await axios.get(
    `https://www.googleapis.com/youtube/v3/playlistItems`,
    {
      params: {
        part: "snippet",
        playlistId: playlistId,
        key: apiKey,
        maxResults: 10000, // validar si este parametro es necesario
      },
    }
  );
  if (response.data.items.length > 0) {
    const defaultVideoId = response.data.items[0].snippet.resourceId.videoId;
    setSelectedVideo(defaultVideoId);
  }

  return response.data.items;
};

function PanelSources() {
  const { setSelectedVideo, SelectedVideo, language, playList,} = programateAcademyStore();

  const {
    data: videos,
    isLoading,
    isError,
    error,
    refetch
    
  } = useQuery({
    queryKey: ["currentPlayList"],language,
    queryFn: () => fetchData(language, playList, setSelectedVideo),
    refetchOnWindowFocus: false,
    enabled: false,
  });
  useEffect(() => {
    // Habilita la consulta cuando cambia el idioma
    refetch();
  }, [language]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>{`${error}`}</p>;
  }


  if (!videos || videos.length === 0) {
    return <p>No videos found in the playlist</p>;
  }

  return (
    <div className="panel-sources">
      <div className="player-container">
      <ReactPlayer 
        controls={true}
        width={"100%"}
        height={"100%"}
        url={`https://www.youtube.com/watch?v=${SelectedVideo}`}
      ></ReactPlayer>
    </div>
      <div className="tabSources">
      <TabList />
      <ListVideos/>
      <ListWorkbooks/>
      </div>


    </div>
  );
}

export default PanelSources;
