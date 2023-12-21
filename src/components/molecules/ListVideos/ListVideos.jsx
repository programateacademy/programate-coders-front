import React from 'react'
import ListItem from '../../atoms/ListItem/ListItem'
import { programateStore } from '../../../store/programateStore'
import { Query, useQueryClient } from '@tanstack/react-query'
function ListVideos({videos}) {
  const {setSelectedResource,language,fileType}=programateStore()
  // const queryClient = useQueryClient();
  // const videos = queryClient.getQueryData(["currentPlayList", language]);
  const tab ={
    videos:"videos",
    workbooks:"workbooks",
  }
  return (
    
    <ul className={fileType=== tab.videos ?"list-videos list-videos-active":"list-videos"}>
      {videos.map((video)=>(
        <ListItem className={"list-item"} key={video.id} setSelectedResource={()=>setSelectedResource(video.snippet.resourceId.videoId)}> <p>{video.snippet.title}</p> </ListItem>
      ))}
    </ul>
  )
}

export default ListVideos