import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { programateStore } from "../store/programateStore";

export const useVideos = (languageYoutube, playList) => {
    const{setSelectedResource}= programateStore()
    console.log("prueba2");
    const fetchData = async (languageYoutube, playList) => {
        const apiKey = "AIzaSyCOgAm7ywQ9rYOF20uRC3HlKT3BjDKaXLQ";
    
        const extractID = (playlistLink) => {
          const urlParts = playlistLink.split("?");
          const params = new URLSearchParams(urlParts[1]);
          return params.get("list");
        };
    
        const filterLinks = playList.find((item) => item.language === languageYoutube);
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
          setSelectedResource(response.data.items[0].snippet.resourceId.videoId);
        }

        return response.data.items;
      };

  
    const videos = useQuery({
      queryKey: ["currentPlayList", languageYoutube],
      queryFn: ()=>fetchData(languageYoutube, playList),
      refetchOnWindowFocus: false,
      enabled: false,
      refetchOnMount:false
    });
    return {videos};
  };