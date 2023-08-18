import { useEffect, useState } from 'react'
import ReactPlayer from 'react-player';
import axios from 'axios';



const VideoReproductor = () => {
    const [playlists, setPlaylists] = useState([]);
    const [selectedPlaylist, setSelectedPlaylist] = useState(null);
    const [videos, setVideos] = useState([]);
    const [selectedVideoIndex, setSelectedVideoIndex] = useState(null);

    useEffect(() => {
        const fetchPlaylists = async () => {
            try {
                const response = await axios.get(
                    'https://www.googleapis.com/youtube/v3/playlists',
                    {
                        params: {
                            key: 'AIzaSyCOgAm7ywQ9rYOF20uRC3HlKT3BjDKaXLQ',
                            channelId: 'UCmnr_sLPZ1E8H1VgUtaHGPQ',
                            part: 'snippet',
                            maxResults: 10,
                        },
                    }
                );
                setPlaylists(response.data.items);
            } catch (error) {
                console.error(error);
            }
        };

        fetchPlaylists();
    }, []);

    const fetchPlaylistVideos = async (playlistId) => {
        try {
            const response = await axios.get(
                'https://www.googleapis.com/youtube/v3/playlistItems',
                {
                    params: {
                        key: 'AIzaSyCOgAm7ywQ9rYOF20uRC3HlKT3BjDKaXLQ',
                        playlistId: playlistId,
                        part: 'snippet',
                        maxResults: 10,
                    },
                }
            );
            setVideos(response.data.items);
        } catch (error) {
            console.error(error);
        }
    };

    const handlePlaylistClick = (playlistId) => {
        setSelectedPlaylist(playlistId);
        setSelectedVideoIndex(null);
        fetchPlaylistVideos(playlistId);
    };

    const handleVideoClick = (index) => {
        setSelectedVideoIndex(index);
    };

    return (
        <div>
            <h2>Listas de Reproducción</h2>
            <ul>
                {playlists.map((playlist) => (
                    <li key={playlist.id} onClick={() => handlePlaylistClick(playlist.id)}>
                        {playlist.snippet.title}
                    </li>
                ))}
            </ul>
            {selectedPlaylist && (
                <div>
                    <h3>Videos de la Lista de Reproducción</h3>
                    <ul>
                        {videos.map((video, index) => (
                            <li key={video.snippet.resourceId.videoId} onClick={() => handleVideoClick(index)}>
                                {selectedVideoIndex === index ? (
                                    <ReactPlayer
                                        url={`https://www.youtube.com/watch?v=${video.snippet.resourceId.videoId}`}
                                        controls
                                    />
                                ) : (
                                    video.snippet.title
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};
export default VideoReproductor