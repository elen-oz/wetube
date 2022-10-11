import React from "react";
import VideoContent from "./VideoContent";
import { useParams } from "react-router-dom";
import "../styles/VideoPage.css";

function VideoPage({ videosData }) {
  let videoID = useParams().id;
  let videoComponent;

  for (let i = 0; i < videosData.length; i += 1) {
    const video = videosData[i];

    if (video.id.toString() === videoID) {
      videoComponent = (
        <VideoContent
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
      <div className='videoPage__content'>{videoComponent}</div>
    </div>
  );
}

export default VideoPage;
