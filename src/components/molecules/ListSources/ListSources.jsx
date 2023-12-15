import React from 'react'
import ListItem from '../../atoms/ListItem/ListItem'
import { videosStore } from '../../../store/videosStore'
import { useQueryClient } from '@tanstack/react-query'
function ListSources({}) {
  const {setSelectedResource,language}=videosStore()
  const queryClient = useQueryClient();
  const videos = queryClient.getQueryData(["currentPlayList"]);
  return (
    <ul className='list-sources'>
      {videos.map((video)=>(
        <ListItem className={"list-item"} key={video.id} setSelectedResource={()=>setSelectedResource(video.snippet.resourceId.videoId)}>{video.snippet.title}</ListItem>
      ))}
    </ul>
  )
}

export default ListSources