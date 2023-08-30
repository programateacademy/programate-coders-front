import React from 'react'
import VideoReproductor from './VideoReproductor'


function VideoSection({language}) {
  console.log(language)
  return (
    <div>
            <VideoReproductor language = {language}/>
        
    </div>
  )
}

export default VideoSection