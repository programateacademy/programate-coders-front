import {useEffect, useState} from 'react'
import ReactPlayer from 'react-player';
import axios from 'axios';


const VideoReproductor = () => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const response = await axios.get(
                    'https://www.googleapis.com/youtube/v3/search',
                    {
                        params: {
                            key: 'AIzaSyCOgAm7ywQ9rYOF20uRC3HlKT3BjDKaXLQ',
                            channelId: 'UCmnr_sLPZ1E8H1VgUtaHGPQ',
                            part: 'snippet',
                            maxResults: 10, // Número de videos a mostrar
                            type: 'video',
                        },
                    }
                );
                setVideos(response.data.items);
            } catch (error) {
                console.error(error);
            }
        };

        fetchVideos();
    }, []);

    return (
        <div>
            {videos.map((video) => (
                <div key={video.id.videoId}>
                    <h2>{video.snippet.title}</h2>
                    <ReactPlayer url={`https://www.youtube.com/watch?v=${video.id.videoId}`} controls />
                </div>
            ))}
        </div>
    );
};

export default VideoReproductor