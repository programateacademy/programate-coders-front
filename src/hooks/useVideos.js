import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { programateAcademyStore } from "../store/programateAcademyStore";

export const useVideos = (language, playList,setSelectedVideo) => {
    const fetchData = async (language, playList) => {
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
           setSelectedVideo(response.data.items[0].snippet.resourceId.videoId);
        }

        return response.data.items;
      };

  
    const videos = useQuery({
      queryKey: ["currentPlayList", language],
      queryFn: ()=>fetchData(language, playList),
      refetchOnWindowFocus: false,
      enabled: false,
    });
    return {videos};
  };