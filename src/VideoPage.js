import React from "react";
import VideoContent from "./VideoContent";
import { useParams } from "react-router-dom";

function VideoPage({ videosData }) {
  let videoID = useParams().id;
  let videoComponent;

  for (let i = 0; i < videosData.length; i += 1) {
    const video = videosData[i];
    console.log(video.id, videoID);

    if (video.id.toString() === videoID) {
      videoComponent = (
        <VideoPage
          id={video.id}
          videoId={video.videoId}
          videoThumbnail={video.videoThumbnail}
          videoName={video.videoName}
          channelName={video.channelName}
          views={video.views}
          channelThumbnail={video.channelThumbnail}
        />
      );
      break;
    }
  }
  return (
    <div className='videoPage'>
      <div>THE VIDEO WILL BE SOON...</div>
      <div className='videoPage__content'>{videoComponent}</div>
    </div>
  );
}

export default VideoPage;
