import React from 'react'
import ListItem from '../../atoms/ListItem/ListItem'
import { programateAcademyStore } from '../../../store/programateAcademyStore'
import { useQueryClient } from '@tanstack/react-query'
import { tabStore } from '../../../store/tabStore'
function ListVideos({}) {
  const {setSelectedVideo,language}=programateAcademyStore()
  const queryClient = useQueryClient();
  const videos = queryClient.getQueryData(["currentPlayList"],language);
  const tab ={
    videos:"videos",
    workbooks:"workbooks",
  } 
  const {togleState} =tabStore()
  return (
    
    <ul className={togleState=== tab.videos ?"list-videos list-videos-active":"list-videos"}>
      {videos.map((video)=>(
        <ListItem className={"list-item"} key={video.id} setSelectedVideo={()=>setSelectedVideo(video.snippet.resourceId.videoId)}>{video.snippet.title}</ListItem>
      ))}
    </ul>
  )
}

export default ListVideos