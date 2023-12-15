import React, { useState, useEffect } from "react";
import ListSources from "../../molecules/ListSources/ListSources";
import TabList from "../../molecules/tabList/TabList";
import ReactPlayer from "react-player";
import { videosStore } from "../../../store/videosStore";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
//solicitud a la Api de Youtube para traer las listas de reproducción
const fetchData = async (language, playList, setSelectedResource) => {
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
    setSelectedResource(defaultVideoId);
  }

  return response.data.items;
};

function PanelSources() {
  const { setSelectedResource, SelectedResource, language, playList } = videosStore();

  const {
    data: videos,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["currentPlayList"],
    queryFn: () => fetchData(language, playList, setSelectedResource),
  });

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
        url={`https://www.youtube.com/watch?v=${SelectedResource}`}
      ></ReactPlayer>
    </div>
      <div className="tabSources">
      <TabList />
      <ListSources/>
      </div>


    </div>
  );
}

export default PanelSources;
