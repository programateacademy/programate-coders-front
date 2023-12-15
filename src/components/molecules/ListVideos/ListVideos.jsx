import React from 'react'
import ListItem from '../../atoms/ListItem/ListItem'
import { programateAcademyStore } from '../../../store/programateAcademyStore'
import { Query, useQueryClient } from '@tanstack/react-query'
function ListVideos({videos}) {
  const {setSelectedVideo,language,fileType}=programateAcademyStore()
  // const queryClient = useQueryClient();
  // const videos = queryClient.getQueryData(["currentPlayList", language]);
  const tab ={
    videos:"videos",
    workbooks:"workbooks",
  }
  return (
    
    <ul className={fileType=== tab.videos ?"list-videos list-videos-active":"list-videos"}>
      {videos.map((video)=>(
        <ListItem className={"list-item"} key={video.id} setSelectedVideo={()=>setSelectedVideo(video.snippet.resourceId.videoId)}>{video.snippet.title}</ListItem>
      ))}
    </ul>
  )
}

export default ListVideos