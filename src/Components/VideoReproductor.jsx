import { useEffect, useState } from "react"
import playListData from "../DataBases/PlayList";
import axios from "axios";
import ReactPlayer from "react-player";
import "../Styles/VideoReproductor.css"


const VideoReproductor = ({ language }) => {
    const [videos, setVideos] = useState([]);
    const [selectedVideoUrl, setSelectedVideoUrl] = useState(videos.length > 0 ? videos[0].snippet.resourceId.videoId : "");

    console.log(language)



    const extractID = (playlistLink) => {
        const urlParts = playlistLink.split('?');
        const params = new URLSearchParams(urlParts[1]);
        return params.get('list');
    };


    //solicitud a la Api de Youtube para traer las listas de reproducción
    useEffect(() => {
        const apiKey = 'AIzaSyCOgAm7ywQ9rYOF20uRC3HlKT3BjDKaXLQ';

        const filterLinks = playListData.find(
            (item) => item.language === language
        );

        if (filterLinks) {
            const playlistId = extractID(filterLinks.link);
            axios.get(`https://www.googleapis.com/youtube/v3/playlistItems`, {
                params: {
                    part: 'snippet',
                    playlistId: playlistId,
                    key: apiKey,
                    maxResults: 10000// validar si este parametro es necesario
                }
            })
                .then(response => {
                    setVideos(response.data.items);
                    if (response.data.items.length > 0) {
                        const defaultVideoId = response.data.items[0].snippet.resourceId.videoId;
                        setSelectedVideoUrl(defaultVideoId);
                    }
                })
                .catch(error => {
                    console.error('Error fetching YouTube playlist:', error);
                });
        }
    }, [language]);

    const handleVideoClick = (videoUrl) => {
        setSelectedVideoUrl(videoUrl);
    };


    return (
        <div className="reproductor-section-container">
            <div className="video-selected">
                {selectedVideoUrl && (
                    <ReactPlayer url={`https://www.youtube.com/watch?v=${selectedVideoUrl}`} 
                    controls
                    width="100%"
                    height="100%"/>
                )}
            </div>
            <div className="video-list">
                {videos.map((video) => (
                    <div key={video.id} className="video-item" onClick={() => handleVideoClick(video.snippet.resourceId.videoId)}>
                        {/* <img src={video.snippet.thumbnails.default.url} alt={video.snippet.title} /> */}
                        <p>{video.snippet.title}</p>
                    </div>
                ))}
            </div>
            
        </div>
    );
};
export default VideoReproductor