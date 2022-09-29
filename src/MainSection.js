import React from "react";
import "./MainSection.css";
import VideoCard from "./VideoCard";

function MainSection({ videosData }) {
  const videosComponents = [];

  for (let i = 0; i < videosData.length; i += 1) {
    const video = videosData[i];

    videosComponents.push(
      <VideoCard
        id={video.id}
        videoId={video.videoId}
        videoThumbnail={video.videoThumbnail}
        videoName={video.videoName}
        channelName={video.channelName}
        views={video.views}
        channelThumbnail={video.channelThumbnail}
      />
    );
  }

  return (
    <div className='mainSection'>
      <div className="mainSection__videos">
      {videosComponents}
      </div>
    </div>
  );
}

export default MainSection;
